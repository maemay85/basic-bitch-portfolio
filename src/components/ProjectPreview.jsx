import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

function ProjectPreview(props) {
  const project = props.project;

    return (
      <div className="single-project-container">
       <Link to={`/projects/${project.projectId}`}>
        <h2>{project.title}</h2>
       </Link>

      </div>
    )
  }

  ProjectPreview.propTypes = {
    project: PropTypes.object
  }

  export default ProjectPreview
