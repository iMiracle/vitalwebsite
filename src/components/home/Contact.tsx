"use client";

import { ALL_CONTACTDATA } from "@/config/feedback";
import Link from "next/link";
import React from "react";
import {useTranslations} from 'next-intl';

const Contact = ({
  langName,
}: {
  langName: string;
}) => {
  const t = useTranslations('FeedbackPage');
    
  const CONTACTDATA = ALL_CONTACTDATA[`CONTACTDATA_${langName.toUpperCase()}`];

  return (
    <section className="w-full dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-2 text-lg text-gray-600">{t('description')}</p>
        </div>

        {/* 联系方式部分 */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-10 mb-4 md:grid-cols-3">
            {CONTACTDATA.map((contact, index) => (
              <Link
                key={index}
                href={contact.link}
                target="_blank"
                className="bg-white dark:bg-gray-600 p-6 rounded-md shadow-md flex items-center justify-center space-x-3 hover:scale-110 transition-transform duration-200"
              >
                {contact.icon && typeof contact.icon === "string" ? (
                  <span className="text-2xl">{contact.icon}</span>
                ) : (
                  React.createElement(contact.icon, { className: "text-2xl" })
                )}
                <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
                  {contact.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
