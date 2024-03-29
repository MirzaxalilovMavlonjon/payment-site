import React from "react";
import logo from "../assets/logo.svg";
import { styles } from "../util/style";
import { footerLinks, socialMedia } from "../util/constants";
import Fotercard from "./Fotercard";

function Footer(props) {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 flex flex-col justify-start mr-10`}>
          <img
            src={logo}
            alt="logo"
            className="w-[250px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            To'lovlarni oson ishonchli va xavfsiz qilishning yangi usuli
          </p>
        </div>

        <div
          className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}
        >
          {footerLinks.map((link) => (
            <Fotercard key={link.title} {...link} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright 2024 SammiPay. All Rights Reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, idx) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
