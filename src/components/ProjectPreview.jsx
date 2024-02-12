import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

function ProjectPreview(props) {
  const project = props.project;

    return (
      <>
        <Link to={`/projects/${project.projectId}`}>
          <div className="project-preview">
            <img src={project.imageUrl} />
            <h2>{project.title}</h2>
          </div>
        </Link>
      </>
    )
  }

  ProjectPreview.propTypes = {
    project: PropTypes.object
  }

  export default ProjectPreview
