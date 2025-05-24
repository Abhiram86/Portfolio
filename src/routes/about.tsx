import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-4 max-w-96 mx-auto md:max-w-[33rem]">
      <h2 className="text-xl font-semibold pb-2">About Me</h2>
      <p className="mb-4">
        Hello! I'm Abhi, a passionate college student with a strong{" "}
        <span className="font-semibold underline">interest</span> in{" "}
        <span className="font-semibold underline text-purple-300">AI/ML</span>,{" "}
        <span className="font-semibold underline text-purple-300">
          Web Development
        </span>
        , and GPU-based programming such as CUDA and GLSL. I enjoy building
        systems that are both efficient and intelligent.
      </p>
      <p className="mb-4">
        My journey began with curiosity about how things work, and now I am
        focused on creating solutions that bridge theoretical understanding with
        practical implementation. I constantly seek opportunities to apply my
        knowledge to real-world problems.
      </p>
      <p>
        In the future, I aim to work on impactful projects involving deep
        learning, high-performance computing, and advanced web technologies.
        This portfolio showcases some of the steps I’ve taken in that direction.
      </p>
      <div>
        <h2 className="text-xl font-semibold pt-4">Social links</h2>
        <ul className="list-none space-y-1 font-light">
          <li>
            <a
              href="https://github.com/Abhiram86"
              target="_blank"
              className="underline underline-offset-2"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://x.com/alla_abhiram"
              target="_blank"
              className="underline underline-offset-2"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
