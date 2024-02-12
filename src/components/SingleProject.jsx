import { useParams, Link, useNavigate } from "react-router-dom";
import useKeypress from 'react-use-keypress';
import projectData from "../assets/projectData";

function SingleProject() {

const { projectId } = useParams();
const id = Number(projectId);
const project = projectData[projectId];
const navigate = useNavigate();
useKeypress(['ArrowLeft', 'ArrowRight'], (e)=> {
  if (e.key === 'ArrowLeft' && id>1) navigate(`/projects/${id-1}`);
  if (e.key === 'ArrowRight' && id<3) navigate(`/projects/${id+1}`);
})

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
        { id <= 3 && id >1 ? <Link to={`/projects/${id-1}`}>{`< Prev `}</Link> : <div></div>}

        { id >= 1 && id < 3 ? <Link to={`/projects/${id+1}`}>{` Next >`}</Link> : null}
      </div>
    </div>
  )
}

export default SingleProject
