import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const PROJECTS = [
  {
    slug: 'fire-red-leaf-green-enhancements',
    title: 'Pokemon FireRed & LeafGreen Enhancements',
    gifSrc: '/media/red.gif',
    gifAlt: 'Red character GIF',
  },
  {
    slug: 'ruby-sapphire-enhancements',
    title: 'Pokemon Ruby & Sapphire Enhancements (and Emerald)',
    gifSrc: '/media/brendan.gif',
    gifAlt: 'Brendan character GIF',
  },
] as const

export default function ProjectsPage() {
  const projects = useMemo(() => [...PROJECTS], [])

  return (
    <main className="container pageContent">
      <header className="sectionHeader" aria-label="Projects header">
        <h2 className="h2">Projects</h2>
      </header>

      <section className="card projectsCard" aria-label="Project list">
        <ul className="projectsList">
          {projects.map((p) => (
            <li key={p.slug} className="projectsListItem">
              <Link className="projectLink" to={`/projects/${p.slug}`}>
                <span className="projectTitle">{p.title}</span>
                <img
                  className="projectGif"
                  src={p.gifSrc}
                  alt={p.gifAlt}
                  loading="lazy"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

