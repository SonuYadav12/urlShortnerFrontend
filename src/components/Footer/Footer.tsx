import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm py-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="text-center md:text-left">
        <p>&#169; 2024 URL Shortener</p>
        <p>Developed by Sonu Kumar Yadav</p>
      </div>
      <div className="text-center md:text-right mt-4 md:mt-0">
        <a href="/privacy-policy" className="mr-4 hover:text-blue-500">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:text-blue-500">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;