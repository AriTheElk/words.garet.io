---
title: Monitoring BitTorrent Sync with Monit on Ubuntu 14.04 LTS
date: "2015-01-20"
author: Garet McKinley
tags: ["DevOps", "Tutorial"]
---

Over the past few days, I've been doing tons of DevOps work. Lots of setting up server monitoring, security, and automation. Most recently I wanted to give monit a try, as I've heard some good things about it. I was able to install it and get it up and running pretty hassle-free. I added in a few process checks for nginx, php-fpm, and postgres and it instantly was able to start tracking those processes for me.

If you've gone through some of my other posts, you might remember a guide that I wrote about settings up BitTorrent Sync on a remote server, well today I'm going to expand on that a bit and add BitTorrent sync into my monit checks!

There were multiple apparent walls that I was going to run into, as BitTorrent sync wasn't exactly written to be placed on a web server, so it lacks a few things like PID logging and the ability to start/stop the service. In order to overcome this, I figured the wisest approach would be to write a wrapper for the btsync program that would enable stop/start.

If you're unsure what a PID is and why it's important, read on; otherwise, skip the next section and get into the meat of this tutorial.

## What is a PID?

A PID is a process id. Have you ever run `top` or `ps aux` on your system? If so, you've probably seen a list with rows like this

    USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
    root      4038  8.9  4.8 144436 49100 ?        Ssl  15:22   0:17 /BTSync/btsync

The number that is in the PID column is obviously the PID. These are unique identifiers for a single process. This unique PID can be used to kill or restart a process. I find that a lot of linux newbies often end up calling `killall btsync` if they wish to kill the process called `btsync`, but this isn't the proper way to do it, as there could be multiple instances of the btsync process. You should only use `killall` if you with to kill multiple processes at once. Like `killall nginx` to stop nginx and all child nodes.

Killing based on PID is much more precise. If we wish to kill the above BitTorrent sync process, we would just use `kill -KILL 4038`. The problem here is that the PID is unique, so upon starting back up, it would have changed.

The way around this, is most programs log the PID inside a file. Typically the PID file would be something like `/var/run/nginx.pid` and it would contain nothing but the PID.

You'd then be able to use the contents of that file to kill or restart your process. Something along the lines of

    $ kill -HUP $(cat /var/run/nginx.pid)

could be used to restart the nginx process.

As I said above, by default BitTorrent sync doesn't log the PID in a file, so it's up to us to fix that.

## The Meat

I opened up a new file with vim (my personal favorite CLI text editor)

    $ vim /usr/local/bin/btsync

Then I wrote the following script in it

    #!/bin/bash
    if [[ $1 = "start" ]]; then
        /BTSync/btsync --config /BTSync/sync.conf 2>/dev/null & PID=$!
        PID=$(($PID+1))
        echo $PID > /var/run/btsync.pid
    elif [[ $1 = "stop" ]]; then
        kill -KILL $(cat /var/run/btsync.pid)
    elif [[ $1 = "restart" ]]; then
        kill -HUP $(cat /var/run/btsync.pid)
    else
        echo "Invalid option. Use either start, stop, or restart."
    fi

If the script feels a little hack-y, that's because it is. For some reason upon starting btsync and retrieving the PID, it was always 1 behind the actual PID. So if it started with a PID of 420 it would end up logging 419 to the `/var/run/btsync.pid` file. Strange, but I have other things I need to get done today, so doing a little bash-fu I was able to log the correct PID to the btsync.pid file. If it wasn't already obvious, you're also going to have to replace `/BTSync/btsync` with the actual location of the binary. If you followed my previous guide for setting it up, then you can leave it as `/BTSync/btsync`.

The next step is making the wrapper an executable. This is easily done by running

    $ chmod +x /usr/local/bin/btsync

Great.

So now we get to add in our check to the `monitor` file. It's been more than easy to add in checks so far, so I expected nothing less when adding in another check for btsync.

    $ vim /etc/monit/monitrc

I then added in the check like so

    check process btsync with PIDfile /var/run/btsync.pid
        group utilities
        start program = "/usr/local/bin/btsync start"
        stop program = "/usr/local/bin/btsync stop"
        restart program = "/usr/local/bin/btsync restart"

After that, I ran a `monit reload` and it started monitoring btsync immediately! I was also able to click on the process and use monit's GUI to stop/start/restart the process.
