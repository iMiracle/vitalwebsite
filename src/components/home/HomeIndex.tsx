import About from "@/components/home/About";
import Carousel from "@/components/home/Carousel";
import Contact from "@/components/home/Contact";
import Product from "@/components/home/Product";

import {setRequestLocale} from 'next-intl/server';


export default async function HomeIndex({ lang }: { lang: string }) {

  setRequestLocale(lang);

  return (
    <>
      <Carousel />

      <div id="product" className="scroll-mt-16">
        <Product />
      </div>

      <div id="about" className="scroll-mt-16">
        <About />
      </div>

      <div id="contact" className="scroll-mt-16">
        <Contact langName= {lang}/>
      </div>
    </>
  );
}

