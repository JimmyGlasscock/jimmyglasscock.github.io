import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

const PROJECTS = [
  {
    slug: 'fire-red-leaf-green-enhancements',
    title: 'Pokemon FireRed & LeafGreen Enhancements',
    videoUrl: 'https://www.youtube.com/embed/74BKM28FJi4?si=BLdUzGXmGytLyqKu',
    screenshots: [
      { src: '', alt: 'FireRed/LeafGreen screenshot 1' },
      { src: '', alt: 'FireRed/LeafGreen screenshot 2' },
      { src: '', alt: 'FireRed/LeafGreen screenshot 3' },
      { src: '', alt: 'FireRed/LeafGreen screenshot 4' },
    ],
    changes: ['Add a bullet point for a key change.', 'Add another specific change.'],
    otherInfo: ['Add any notes, credits, or links here.'],
  },
  {
    slug: 'ruby-sapphire-enhancements',
    title: 'Pokemon Ruby & Sapphire Enhancements (and Emerald)',
    videoUrl: 'https://www.youtube.com/embed/6AGnunoqc6o?si=wB1VN3RRYdnIJJBj',
    screenshots: [
      { src: '', alt: 'Ruby/Sapphire screenshot 1' },
      { src: '', alt: 'Ruby/Sapphire screenshot 2' },
      { src: '', alt: 'Ruby/Sapphire screenshot 3' },
      { src: '', alt: 'Ruby/Sapphire screenshot 4' },
    ],
    changes: ['Add a bullet point for a key change.', 'Add another specific change.'],
    otherInfo: ['Add any notes, credits, or links here.'],
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
      </header>

      {/* VIDEO */}
      <section className="section" aria-label="Project video">
        <div className="projectVideoWrap">
          <div className="ratio16x9 ratioProjectVideo">
            <iframe
              src={project.videoUrl}
              title={project.title}
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section" aria-label="Project screenshots">
        <div className="sectionHeader">
          <h3 className="h3">Screenshots</h3>
          <p className="muted small">Add four screenshots for this project.</p>
        </div>

        <div className="card projectScreensCard">
          <div className="projectScreensGrid">
            {project.screenshots.map((s, idx) => {
              const hasSrc = Boolean(s.src)
              return (
                <div key={`${idx}-${s.alt}`} className="projectScreenshotItem">
                  {hasSrc ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img className="projectScreenshotImg" src={s.src} alt={s.alt} />
                  ) : (
                    <div className="projectScreenshotPlaceholder">{`Screenshot ${
                      idx + 1
                    } (add image)`}</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CHANGES */}
      <section className="section" aria-label="Project changes">
        <div className="sectionHeader">
          <h3 className="h3">Changes</h3>
        </div>

        <div className="card">
          <ul className="projectChangesList">
            {project.changes.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* OTHER INFO */}
      <section className="section" aria-label="Project other info">
        <div className="sectionHeader">
          <h3 className="h3">Other info</h3>
        </div>

        <div className="card">
          {project.otherInfo.map((t, idx) => (
            <p key={idx} className="p muted">
              {t}
            </p>
          ))}

          <div className="ctaRow">
            <Link className="btn ghost" to="/projects">
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

