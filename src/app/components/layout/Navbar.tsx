import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
          <div className="flex-none px-2 mx-2 nav_space">
            <FaGithub className="inline pr-2 text-3xl text-white"/>
            <Link to="/" className="text-lg font-bold align-middle text-white">
              Github Finder
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn text-white home_button">
                Home
              </Link>
              <Link to="/about" className="btn btn-ghost btn-sm rounded-btn text-white">
                About
              </Link>
            </div>
          </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  @media screen and (max-width: 400px) {
    .home_button{
      display: none;
    }

    .nav_space{
      margin-left: 0px;
      margin-right: 0px;
    }
  }

`

export default Navbar