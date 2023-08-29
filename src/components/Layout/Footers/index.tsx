import React from "react";
import FooterNews from "./FooterNews";
import FooterLink from "./FooterLink";
import FooterCopyRight from "./FooterCopyRight";

const Footers = () => {
  return (
    <>
      <footer className="bayangan">
        <FooterNews />
        <FooterLink />
        <FooterCopyRight />
      </footer>
    </>
  );
};

export default Footers;
