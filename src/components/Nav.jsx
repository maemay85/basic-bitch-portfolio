import { Link } from "react-router-dom"


function Nav() {


  return (
    <div className="nav-container">
      <Link to={'/about'}>
        <h2>About Me</h2>
      </Link>
      <Link to={'/projects'}>
        <h2>Projects</h2>
      </Link>
      <Link to={'/home'}>
        <h2>Home</h2>
      </Link>
    </div>
  )
}

export default Nav
