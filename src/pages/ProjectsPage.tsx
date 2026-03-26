import { useMemo } from 'react'

const PROJECTS = [
  'Pokemon FireRed & LeafGreen Enhancements',
  'Pokemon Ruby & Sapphire Enhancements (and Emerald)',
] as const

export default function ProjectsPage() {
  const projects = useMemo(() => [...PROJECTS], [])

  return (
    <main className="container pageContent">
      <header className="sectionHeader" aria-label="Projects header">
        <h2 className="h2">Projects</h2>
        <p className="muted">A couple of favorite ROM-hack enhancement projects.</p>
      </header>

      <section className="card projectsCard" aria-label="Project list">
        <ul className="projectsList">
          {projects.map((p) => (
            <li key={p} className="projectsListItem">
              {p}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

