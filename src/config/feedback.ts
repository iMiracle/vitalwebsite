import { IconType } from "react-icons";
import {
  BsEnvelopeAt,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

export const CONTACTDATA_EN = [
  {
    name: "email",
    link: "mailto:info@example.com",
    icon: BsEnvelopeAt,
  },
  { name: "facebook", link: "https://facebook.com/airforce", icon: BsFacebook },
  {
    name: "instagram",
    link: "https://instagram.com/airforce",
    icon: BsInstagram,
  },
  { name: "twitter", link: "https://twitter.com/airforce", icon: BsTwitterX },
  { name: "whatsapp", link: "https://www.whatsapp.com/", icon: BsWhatsapp },
];

export const CONTACTDATA_RU = [
  {
    name: "электронная почта",
    link: "mailto:info@example.com",
    icon: BsEnvelopeAt,
  },
  { name: "фейсбук", link: "https://facebook.com/airforce", icon: BsFacebook },
  {
    name: "инстаграм",
    link: "https://instagram.com/airforce",
    icon: BsInstagram,
  },
  { name: "твиттер", link: "https://twitter.com/airforce", icon: BsTwitterX },
  { name: "вацап", link: "https://www.whatsapp.com/", icon: BsWhatsapp },
];

export const CONTACTDATA_AR = [
  {
    name: "البريد الإلكتروني",
    link: "mailto:info@example.com",
    icon: BsEnvelopeAt,
  },
  {
    name: "فيسبوك",
    link: "https://facebook.com/airforce",
    icon: BsFacebook,
  },
  {
    name: "إنستغرام",
    link: "https://instagram.com/airforce",
    icon: BsInstagram,
  },
  {
    name: "تويتر",
    link: "https://twitter.com/airforce",
    icon: BsTwitterX,
  },
  {
    name: "واتساب",
    link: "https://www.whatsapp.com/",
    icon: BsWhatsapp,
  },
];

export const FEEDBACKTITLE_EN = {
  title: "Contact Us",
  content: "We are always ready to help you",
};

interface FeedbackCollection {
  [key: `CONTACTDATA_${string}`]: {
    name: string;
    link: string;
    icon: IconType | string;
  }[];
}

export const ALL_CONTACTDATA: FeedbackCollection = {
  CONTACTDATA_EN,
  CONTACTDATA_RU,
  CONTACTDATA_AR,
};
