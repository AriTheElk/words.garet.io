import React from "react";
import Link from "components/Link";

const Footer = () => (
  <div>
    <hr />
    <p>
      <i>
        If you like what I've written or what I build and you think I'd be a
        good fit for your team, drop me an email:{" "}
        <Link href="mailto:hi@garet.io">hi@garet.io</Link>. I'm currently
        seeking full-time or contract work in anything related to front-end
        development.
      </i>
    </p>
    <p>Thanks for reading,</p>
    <p>—Garet</p>
  </div>
);

export default Footer;
