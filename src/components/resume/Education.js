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
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-4 pl-20">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-4xl md:text-4x1 font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Electronics and Communication Engineering"
            subTitle="Kalyani Government Engineering College (2021 - 2024)"
            result="10/8.48"
            des="The training provided by universities in order to prepare student to work in various sectors of the technology.."
          />
          <ResumeCard
            title="Electronics & Tele-communication Engineering"
            subTitle="Budge Budge Institute of Technology (2019 - 2021)"
            result="10/9.0"
            des="I have successfully completed diploma course in Electronics & Telecommunication Engineering and was placed 1st class with Distinction."
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Ganipur High School (2015 - 2017)"
            result="10/6.4"
            des="I had been passed (X+2) Examination in computer Maintenance & Networking Course under Engineering & Technology descipline."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-4 pl-20">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Summer Internship"
            subTitle="Celebal Technologies Private limited - (Jun 2023 - Aug 2023)"
            result="Remote"
            des="Engaged in the enhancement of React projects for the Weather app, skillfully implementing various UI features."
          />
          <ResumeCard
            title="Summer Industrial Training on IoT"
            subTitle="Ardent Computech Pvt.Ltd - (Aug 2022 - Sep 2022)"
            result="Kolkata"
            des="I have successfully completed the IoT training and acquired knowledge in IoT technology and Implement the  IoT-Based Fan speed & Relay Controller."
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