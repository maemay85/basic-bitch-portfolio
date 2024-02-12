import { useParams } from "react-router-dom";
import projectData from "../assets/projectData";

function SingleProject() {

const { projectId } = useParams();
const project = projectData[projectId];

  return (
    <div id="single-project">
      <div id="single-project-blurb">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div id="single-project-image">
        <img src={`../${project.imageUrl}`} />
      </div>
    </div>
  )
}

export default SingleProject
