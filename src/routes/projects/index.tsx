import { createFileRoute } from "@tanstack/react-router";
import ProjectCard from "../../components/projectcard";
import { projects } from "../../utils/projects";
import { ModalCarouselProvider } from "../../context/ModelCarouselContext";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="px-2 pt-4 pb-4 w-fit mx-auto">
      <div className="flex flex-wrap w-fit justify-center gap-4">
        <ModalCarouselProvider>
          {projects.map((project) => (
            <>
              <ProjectCard key={project.id} data={project} />
              <ProjectCard key={project.id} data={project} />
              <ProjectCard key={project.id} data={project} />
            </>
          ))}
        </ModalCarouselProvider>
      </div>
    </div>
  );
}
