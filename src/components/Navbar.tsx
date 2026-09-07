import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  if (pathname === '/') return null

  const onProjects = pathname === '/projects' || pathname.startsWith('/projects/')
  const onFavorites = pathname === '/favorites' || pathname.startsWith('/favorites/')

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="container navbarInner">
        <div className="navLinks">
          <Link
            className="navLink"
            to="/"
            aria-current={!onProjects && !onFavorites ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            className="navLink"
            to="/projects"
            aria-current={onProjects ? 'page' : undefined}
          >
            Projects
          </Link>
          <Link
            className="navLink"
            to="/favorites"
            aria-current={onFavorites ? 'page' : undefined}
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  )
}

