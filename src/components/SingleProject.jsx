import { useParams } from "react-router-dom";
import projectData from "../assets/projectData";

function SingleProject() {

const { projectId } = useParams();
const project = projectData[projectId];

  return (
    <div className="single-project-container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default SingleProject
