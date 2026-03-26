import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

const PROJECTS = [
  {
    slug: 'fire-red-leaf-green-enhancements',
    title: 'Pokemon FireRed & LeafGreen Enhancements',
  },
  {
    slug: 'ruby-sapphire-enhancements',
    title: 'Pokemon Ruby & Sapphire Enhancements (and Emerald)',
  },
] as const

export default function ProjectDetailPage() {
  const { projectSlug } = useParams<'projectSlug'>()

  const project = useMemo(() => {
    if (!projectSlug) return undefined
    return PROJECTS.find((p) => p.slug === projectSlug)
  }, [projectSlug])

  if (!project) {
    return (
      <main className="container pageContent" aria-label="Not found">
        <section className="card">
          <h2 className="h2">Project not found</h2>
          <p className="p muted">That project URL doesn’t exist.</p>
          <div className="ctaRow">
            <Link className="btn primary" to="/projects">
              Back to projects
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="container pageContent">
      <header className="sectionHeader" aria-label="Project details header">
        <h2 className="projectDetailTitle">{project.title}</h2>
        <p className="muted">Details coming soon.</p>
      </header>

      <section className="card">
        <p className="p muted">
          This page is reserved for notes, changelogs, and links related to this project.
        </p>
        <div className="ctaRow">
          <Link className="btn ghost" to="/projects">
            View all projects
          </Link>
        </div>
      </section>
    </main>
  )
}

