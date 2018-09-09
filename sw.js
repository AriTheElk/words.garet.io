/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-28857537c0db4799d49f.js"
  },
  {
    "url": "app-1f54e023dfda14193957.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9481f4ed47e03ce0fbf2.js"
  },
  {
    "url": "index.html",
    "revision": "cbf57803e3513cd45330abf2bf107f6f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7407bc01e9391964867e89efad8ffe0a"
  },
  {
    "url": "0-fa0e4bb97f1d6dc5caa8.js"
  },
  {
    "url": "component---src-pages-index-js-925d85459b462e991b2c.js"
  },
  {
    "url": "static/d/84/path---index-6a9-NiDxZOts4QRQVD7AGNnxjkhW6pI.json",
    "revision": "d4111472e66f26e4a7f52c2844f0c5c9"
  },
  {
    "url": "component---src-pages-404-js-b36d73cc08538606d60a.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
