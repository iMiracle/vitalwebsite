import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const HeaderLinks = () => {
  const links = [
    { name: 'facebook', href: "https://facebook.com/airforce", icon: BsFacebook },
    { name: 'instagram', href: "https://instagram.com/airforce", icon: BsInstagram },
    { name: 'twitter', href: "https://twitter.com/airforce", icon: BsTwitterX },
    { name: 'whatsapp', href: "https://www.whatsapp.com/", icon: BsWhatsapp }
  ];

  return (
    <div className="flex flex-row items-center gap-6">
      {links.map((link, index) => (
        <Link
          key={link.name}
          aria-label={link.name}
          href={link.href}
          target="_blank"
          rel="noopener norefferer nofollow"
          className={`flex max-w-[24px] flex-col items-center justify-center`}
        >
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
    </div>
  );
};
export default HeaderLinks;
