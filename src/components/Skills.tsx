import React from "react";
import skillsData from "./data/skills";

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="mx-auto">
          <div className="flex flex-col flex-wrap items-center w-full mb-4 text-center md:mb-10">
            <div className="inline-block mx-auto mb-4">
              <span className="px-3 py-1 text-sm font-medium text-orange-800 bg-blue-100 rounded-full">
                🚀 Technical Expertise
              </span>
            </div>
            <h1 className="text-3xl font-medium text-gray-900 lg:text-4xl">
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-5 px-2 py-4 text-center md:p-5 md:gap-7 lg:gap-5 lg:p-5 xl:gap-10 xl:p-9">
            {skillsData.map((Skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 h-20 m-1 text-center md:w-24 md:h-24 lg:m-3 xl:m-5"
              >
                <img
                  src={Skill.image}
                  alt={Skill.name}
                  className="object-cover w-12 h-12 m-2 duration-500 cursor-pointer md:w-14 md:h-14 lg:w-16 lg:h-16 hover:scale-125"
                />
                <p>{Skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
