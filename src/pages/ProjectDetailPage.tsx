import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

const PROJECTS = [
  {
    slug: 'fire-red-leaf-green-enhancements',
    title: 'Pokemon FireRed & LeafGreen Enhancements',
    videoUrl: 'https://www.youtube.com/embed/74BKM28FJi4?si=BLdUzGXmGytLyqKu',
    downloadUrl: 'https://drive.google.com/drive/folders/1-I24e08BpZ1-sQVUPM-5jwPxR16vakB0?usp=drive_link',
    downloadText: 'Download files',
    screenshots: [
      { src: '/photos/firered/upscaled/1.png', alt: 'FireRed/LeafGreen screenshot 1' },
      { src: '/photos/firered/upscaled/2.png', alt: 'FireRed/LeafGreen screenshot 2' },
      { src: '/photos/firered/upscaled/3.png', alt: 'FireRed/LeafGreen screenshot 3' },
      { src: '/photos/firered/upscaled/4.png', alt: 'FireRed/LeafGreen screenshot 4' },
    ],
    changes: [
      'Start with running shoes',
      'Can run everywhere',
      'Start with national dex',
      'No national dex evolution block',
      'No help system',
      'No previously on your quest',
      'Can evolve Eevee to Espeon/Umbreon with Sun/Moon stone',
      'Sun & Moon stone sold at Celadon',
      'All Johto Pokemon are at the Sevii Islands',
      'Old guy gives you Navel Rock & Birth Island tickets in Vermillion after the Elite Four',
      'Added Mew under the truck',
      'Pier guy will let you walk past',
      'Cerulean Cave guy disappears after Elite Four, just like in RBY (before Celio quest)',
      'Pokemon catch tutorial is now skippable',
      "Deleted annoying TM use 'machine set' movie",
      'Deleted Oak battle tutorial',
      "Added 'Trade Stone' to evolve all trade Pokemon, sold in the Celadon dept",
      'Added "Starter guys" in the first house on Six Island that will give you the other starters you didn\'t choose',
      'Added a Pokeball in the Cinnabar Lab that gives you the other fossil',
      "Removed the 'Mew & Deoxys must be met in a fateful encounter to obey' rule",
      'Repel expired, use another?',
      'Item use movies remove (evolution stones, rare candies, etc)',
      'Update whiteout to be like RSE (no tutorial, spawn in front of Pokemon Center)',
      'Add in Professor Oak battle if Kanto Dex complete',
      'https://gamefaqs.gamespot.com/gameboy/367023-pokemon-red-version/faqs/64175/battle-professor-oak',
      'L & R move pages in the box',
      'Added a Jimmy battle at the memorial pillar (and a special surprise if you beat me)',
      'TMs are infinite',
      'Gym leaders can be rematched after the Elite Four',
      'FireRed / LeafGreen version toggle for version exclusives',
      'Modern Exp Share toggle',
    ],
    otherInfo: ['Other info coming soon.'],
  },
  {
    slug: 'ruby-sapphire-enhancements',
    title: 'Pokemon Ruby & Sapphire Enhancements (and Emerald)',
    videoUrl: 'https://www.youtube.com/embed/6AGnunoqc6o?si=wB1VN3RRYdnIJJBj',
    downloadUrl: undefined,
    downloadText: undefined,
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

        {project.downloadUrl ? (
          <div className="ctaRow">
            <a className="btn primary" href={project.downloadUrl} target="_blank" rel="noreferrer">
              {project.downloadText ?? 'Download files'}
            </a>
          </div>
        ) : null}
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

