import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 pl-20">
          <h2 className="text-4xl md:text-4x1 font-bold">Education</h2>
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Electronics and Communication Engineering"
            subTitle="Kalyani Government Engineering College (2021 - 2024)"
            result="8.47|10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Electronics & Tele-communication Engineering"
            subTitle="Budge Budge Institute of Technology (2019 - 2021)"
            result="9|10"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Ganipur High School (2015 - 2017)"
            result="6.4|10"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 pl-20">
          <h2 className="text-4xl md:text-4xl font-bold">Experience</h2>
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Summer Internship"
            subTitle="Celebal Technologies Private limited - (Jun 2023 - Aug 2023)"
            result="Remote"
            des="Engaged in the enhancement of React projects for the Weather app, skillfully implementing various UI features."
          />
          <ResumeCard
            title="IoT based fan speed and relay controller"
            subTitle="Ardent Computech Pvt.Ltd - (Aug 2022 - Sep 2022)"
            result="Kolkata"
            des="The IoT-Based Fan & Relay Controller project is a low-cost wireless system. It specifically focuses on the development of an IOT-based home automation system."
          />
          <ResumeCard
            title="Summer Industrial Training"
            subTitle="WBSETCL - (Jul 2023 - Aug 2023)"
            result="Kolkata"
            des="Overview of the communication Technology."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education