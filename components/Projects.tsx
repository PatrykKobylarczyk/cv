import { projectsData } from "@/data/projectsData";
import React from "react";

const Projects = () => {
  
  const projects = projectsData.map(
    ({ name, title, date, description, stack, id, links }: any) => {
      return (
        <div id={id} className="flex px-3 md:px-16 text-base">
          <div className="w-full py-10 col-span-1  border-r-[1px] br-gray-700 flex justify-end items-start">
            <div className="flex flex-col items-end mr-5 gap-5">
              <h2 className="font-bold">{name}</h2>
              <p>{date}</p>
            </div>
          </div>
          <div className="w-full py-10 col-span-1  ml-5">
            <div className="flex flex-col items-start gap-5">
              <div className="w-full flex justify-between items-start">
                <h2 className="font-bold">{title}</h2>
              </div>
              <p>{description}</p>
              <ul className="flex flex-wrap text-lg gap-2">
                {stack.map((el: any, i: number) => (
                  <li key={i} className="tooltip cursor-pointer">
                    {el.icon}{" "}
                    <span className="tooltiptext mb-2">{el.name}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 ">
                {links.map((link: any, i: number) => (
                  <a
                    className="w-auto h-auto  bg-transparent font-bold underline"
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return <>{projects}</>;
};

export default Projects;
