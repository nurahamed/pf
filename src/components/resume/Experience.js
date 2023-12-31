import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-4 pl-20">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl md:text-4x1 font-bold">
            Training Experience
          </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Summer Industrial Training"
            subTitle=" West Bengal State Electricity Transmission Company Limited. - (Jul 2023 - Aug 2023)"
            result="Kolkata"
            des="Overview of the communication Technology."
          />
          <ResumeCard
            title="Winter Industrial Training"
            subTitle=" Eastern Railways. - (21 Days, Feb 2023)"
            result="Kanchrapara"
            des="I had been successfully completed The Role of Trade Electrical -Entry level."
          />
          <ResumeCard
            title="Summer Industrial Training on IoT"
            subTitle="Ardent Computech Pvt. Ltd. - (Aug 2022 - Sep 2022)"
            result="Kolkta"
            des=" I have successfully completed the IoT training and acquired knowledge in IoT technology and Implement the  IoT-Based Fan speed & Relay Controller."
          />
          <ResumeCard
            title="Web Development Bootcamp"
            subTitle="Udemy - (2020 - 2021)"
            result="Remote"
            des="I have successfully completed Web Development Bootcamp and have developed small projects."
          />
        </div>
      </div>
      {/* pard two */}
      <div>
        <div className="py-6">
          <div className="py-6 lgl:py-8 font-titleFont flex flex-col gap-4 pl-20">
            <p className="text-sm text-designColor tracking-[4px]">
              2021 - 2024
            </p>
            <h2 className="text-4xl md:text-4xl font-bold">Internship</h2>
          </div>
          <div className="mt-14 w-full h-[30%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Summer Internship"
              subTitle="Celebal Technologies Private limited - (Jun 2023 - Aug 2023)"
              result="Remote"
              des="Engaged in the enhancement of React projects for the Weather app, skillfully implementing various UI features."
            />
            {/* <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />
            <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
