import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import SkillCard from "../components/skillcard";
import profile from "../assets/myself.jpg";

import { lang_icons, tool_icons } from "../utils/Icons";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="px-2 pt-4 pb-4">
      <div className="w-fit flex flex-col-reverse md:flex-row items-center justify-center mx-auto gap-4">
        <div className="text-center">
          <h1 className="text-xl">
            Hey there! I am{" "}
            <span className="font-semibold text-purple-500">Abhiram Alla</span>
          </h1>
          <p className="text-zinc-400 text-sm">
            Just an individual looking for opportunities
          </p>
        </div>
        <img
          src={profile}
          className="h-52 w-[220px] bg-zinc-800 rounded-full object-cover [object-position:90%_28%]"
          alt="profile"
        />
      </div>
      <div className="max-w-96 text-zinc-300 md:max-w-[33rem] pt-4 mx-auto">
        <h1 className="text-lg font-semibold text-zinc-200">
          Some stuff about me
        </h1>
        <ul className="list-decimal space-y-1 font-light">
          <li>
            Enthusiastic about{" "}
            <span className="underline underline-offset-2 text-purple-300">
              web development
            </span>{" "}
            and eager to learn new things to make the web a better place and
            make it more accessible
          </li>
          <li>
            Majorly interested in{" "}
            <span className="underline underline-offset-2 text-purple-300">
              Full Stack Web Development
            </span>
            , and want to spend more time learning more about it
          </li>
          {/* <li>Also Good at Machine Learning and Data Science stuff</li> */}
        </ul>
      </div>
      <div className="max-w-96 text-zinc-300 md:max-w-[33rem] pt-4 mx-auto">
        <h1 className="text-lg font-semibold text-zinc-200 pt-4">Skill set</h1>
        <div className="flex flex-wrap gap-2">
          <div className="p-1 space-y-2">
            <h2 className="font-medium">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {Object.values(lang_icons).map((lang) => (
                <SkillCard key={lang.name} {...lang} />
              ))}
            </div>
          </div>
          <div className="p-1 space-y-2">
            <h2 className="font-medium">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {Object.values(tool_icons).map((tool) => (
                <SkillCard key={tool.name} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen"></div> */}
    </div>
  );
}
