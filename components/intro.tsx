import React from 'react';
import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="inline-flex items-center gap-2 text-6xl font-bold leading-9 tracking-tighter align-center sm:text-7xl md:text-6xl lg:text-7xl md:pr-8">
        <img
          width="100"
          src="/assets/images/gdg-toledo.svg"
          alt="GDG Toledo logo"
        ></img>
        {CMS_NAME}.
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        What's The Agenda? It's a news and events tech blog for the Toledo
        Region
      </h4>
    </section>
  );
};

export default Intro;
