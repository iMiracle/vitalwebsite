"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import LanguageSwitcher from "@/components/header/LanguageSwitcher";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "@/components/ui/ThemedButton";
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';



const Header = () => {

  const t = useTranslations('Navigation');

  const params = useParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const links = [
    { label: t('product'), href: "#product" },
    { label: t('about'), href: "#about" },
    { label: t('contact'), href: "#contact" },
  ];

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop > 70);
      } 
    };

    // 非首页直接固定
    if (!isHomePage) {
      setIsSticky(true);
      return;
    }


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <header
      className={`py-3 max-w-7xl px-4 sm:px-6 lg:px-8 ${
        isSticky || !isHomePage
          ? "sticky top-0 z-50 bg-white dark:bg-black shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link
            href="/"
            aria-label="airforce"
            title="airforce"
            className="flex items-center space-x-1 font-bold"
          >
            <Image
              alt="Logo"
              src="/logo.svg"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <span
              className={`hidden md:block ${
                isSticky ? "text-gray-950 dark:text-white" : "text-white"
              }`}
            >
              {t('name')}
            </span>
          </Link>
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${link.href}`}
                aria-label={link.label}
                title={link.label}
                className={`tracking-wide transition-colors duration-200 font-extrabold ${
                  isSticky ? "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div
          className={`hidden md:flex items-center justify-end gap-x-6 flex-1 ${
            isSticky ? "text-gray-950 dark:text-white" : "text-white"
          }`}
        >
          <HeaderLinks />
          <ThemedButton />
          <LanguageSwitcher isSticky={isSticky} />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <SlMenu />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="airforce"
                      title="airforce"
                      className="inline-flex items-center"
                    >
                      <Image
                        alt={t('name')}
                        src="/logo.svg"
                        className="w-8 h-8"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        {t('name')}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-normal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-label={link.label}
                          title={link.label}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4">
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LanguageSwitcher isSticky={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

