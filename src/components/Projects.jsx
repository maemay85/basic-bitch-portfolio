import projectData from "../assets/projectData";
import ProjectPreview from "./ProjectPreview";

function Projects() {


  return (
    <div className="projects-container">
      {projectData.map((project)=> project.projectId > 0 ?<ProjectPreview key={project.projectId} project={project} /> : null)}
    </div>
  )
}

export default Projects
