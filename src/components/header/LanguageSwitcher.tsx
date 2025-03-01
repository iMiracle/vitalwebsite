"use client";

import { useTransition } from "react";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

import {Locale, usePathname, useRouter} from '@/i18n/routing';
import { BsGlobe } from "react-icons/bs";
import {useParams} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';


interface LanguageSwitchersProps {
  isSticky: boolean;
}

export default function LanguageSwitcher({ isSticky }: LanguageSwitchersProps) {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const defaultLocale = "en";
  const [isPending, startTransition] = useTransition();
  

  const switchLanguage = (lng: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: lng as Locale},
      );
    });
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          endContent={<BsGlobe className="text-lg" />}
          className={`p-1 bg-transparent text-sm ${
            isSticky ? "text-gray-950 dark:text-white" : "text-white"
          }`}
        >
        {t('locale', {locale: locale})}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className="w-max-w-[160px]"
        selectionMode="single"
        selectedKeys={[locale]}
      >
        
        {routing.locales.map((key) => {
          return (
            <DropdownItem
              onPress={() => switchLanguage(key)}
              key={key}
              value={key}
            >
              {t('locale', {locale: key})}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
