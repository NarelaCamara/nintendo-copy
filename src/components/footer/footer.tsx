import React from "react";
import FooterNavigation from "../footer_navigation/footer_navigation";

const Footer = () => {
  return (
    <div>
      <FooterNavigation />

      <div className="flex flex-row justify-center">
        <p className="px-8">
          © Nintendo. Games are property of their respective owners. Nintendo of
          America Inc. Headquarters are in Redmond, Washington, USA
        </p>
        <div className="flex flex-row justify-center px-8">
          <p className="px-4">Contact us</p>
          <p className="px-4">Website feedback</p>
          <p className="px-4">Terms of Use</p>
          <p className="px-4">Flag of Usa English (United States)</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
