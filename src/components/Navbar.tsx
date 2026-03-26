import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  const onProjects = pathname === '/projects' || pathname.startsWith('/projects/')

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="container navbarInner">
        <div className="navLinks">
          <Link className="navLink" to="/" aria-current={!onProjects ? 'page' : undefined}>
            Home
          </Link>
          <Link
            className="navLink"
            to="/projects"
            aria-current={onProjects ? 'page' : undefined}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

