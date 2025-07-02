import { useContext } from "react";
import ModalCarousel from "./ModalCarousel";
import { ModalCarouselContext } from "../context/ModelCarouselContext";

interface ProjectCardProps {
  id: number;
  name: string;
  skillsUsed: {
    name: string;
    imgSrc: string;
  }[];
  description: string | null;
  imgSrc: string;
  liveLink: string | null;
  sourceCode: string;
  pages: { link: string; description: string }[];
}

export default function ProjectCard({ data }: { data: ProjectCardProps }) {
  const { data: modalData, setOpen } = useContext(ModalCarouselContext);
  return (
    <div>
      {modalData && <ModalCarousel data={modalData} />}
      <div
        onClick={() =>
          setOpen({
            projectId: data.id,
            name: data.name,
            imgSrc: data.imgSrc,
            pages: data.pages,
          })
        }
        className="ring ring-zinc-700 rounded-xl transition-all duration-300 hover:ring-zinc-400 hover:shadow-lg shadow-zinc-500 shad"
      >
        <img
          src={data.imgSrc}
          className="w-80 border-b border-zinc-700 object-cover h-54 rounded-t-xl"
          alt="img of project"
        />
        {/* <div className="w-80 h-60 bg-zinc-900" /> */}
        <div className="p-2 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">{data.name}</h1>
            <div className="flex gap-2">
              {data.liveLink && (
                <a
                  href={data.liveLink}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm hover:underline text-zinc-400 hover:text-zinc-200"
                >
                  live
                </a>
              )}
              <a
                href={data.sourceCode}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="text-sm hover:underline text-zinc-400 hover:text-zinc-200"
              >
                source code
              </a>
            </div>
          </div>
          <p className="text-sm max-w-76 text-zinc-400">{data?.description}</p>
          <div className="flex gap-2 items-center">
            <p className="text-zinc-400 text-sm">skills used: </p>
            <div className="flex ring ring-zinc-600 transition-all bg-zinc-800/75 w-fit px-3 py-1 rounded-3xl gap-2">
              {data.skillsUsed.map((skill) => (
                <img className="h-5 w-5" src={skill.imgSrc} alt={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
