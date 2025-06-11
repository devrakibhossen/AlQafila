import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-5 text-[12px] text-center">
      <ul className="flex items-center gap-4 justify-center ">
        <li>
          <Link href="/TermsofService">Terms of Service</Link>
        </li>
        <li>
          <Link href="/PrivacyPolicy">Privacy Policy</Link>
        </li>
      </ul>
      <p>&copy; 2025 Alqafila. All rights reserved.</p>
    </div>
  );
};

export default Footer;
