import projectData from "../assets/projectData";
import ProjectPreview from "./ProjectPreview";

function Projects() {

  return (
    <div id="projects">
      {projectData.map((project)=> project.projectId > 0 ?<ProjectPreview key={project.projectId} project={project} /> : null)}
    </div>
  )
}

export default Projects
