import { useParams, Link } from "react-router-dom";
import projectData from "../assets/projectData";

function SingleProject() {

const { projectId } = useParams();
const project = projectData[projectId];

  return (
    <div id="single-project">
      <div id="single-project-content">
        <div id="single-project-blurb">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div id="single-project-image">
          <img src={`../${project.imageUrl}`} />
        </div>
      </div>
      <div id="next-prev">
        { Number(projectId) <= 3 && Number(projectId) >1 ? <Link to={`/projects/${Number(projectId)-1}`}>{`< Prev `}</Link> : <div></div>}

        { Number(projectId) >= 1 && Number(projectId) < 3 ? <Link to={`/projects/${Number(projectId)+1}`}>{` Next >`}</Link> : null}
      </div>
    </div>
  )
}

export default SingleProject
