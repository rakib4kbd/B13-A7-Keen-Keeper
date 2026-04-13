import Image from "next/image";
import React from "react";

const Footer = () => {
  const socialLinks = [
    "/assets/instagram.png",
    "/assets/facebook.png",
    "/assets/twitter.png",
  ];

  return (
    <div className="bg-[#244D3F] px-2 mt-20">
      <div className="flex flex-col gap-10 items-center justify-center container mx-auto">
        <div className="flex flex-col gap-3 pt-20 items-center justify-center text-center">
          <Image
            src={"/assets/logo-xl.png"}
            alt="footer logo"
            width={410}
            height={60}
          />

          <p className="text-sm text-white/70">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-xl text-white">Social Links</h1>
            <div className="flex gap-4 items-center justify-center">
              {socialLinks.map((link, index) => (
                <Image
                  src={link}
                  key={index}
                  alt={link}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border border-b-white/25 w-full"></div>
        <div className="flex flex-col-reverse md:flex-row items-center pb-7.5 text-white/40 gap-3 w-full">
          <p className="md:me-auto">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
