import { useEffect, useMemo, useRef, useState } from 'react'

const EMAIL = 'jamesglasscock99@gmail.com'
const INSTAGRAM_URL = 'https://instagram.com/jimmyglasscock'

const YT_CLIPS = [
  {
    title: "What's the worst last name? | Jimmy Glasscock",
    url: 'https://www.youtube.com/embed/uPv6ComtZa0',
    note: '2-minute stand-up clip',
  },
  {
    title: 'Turning Fight Videos Into Songs',
    url: 'https://www.youtube.com/embed/zCnZB6_m7BE',
    note: 'Bonus: comedy + music',
  },
]

// Put your best photos into /public/photos and list their filenames here.
const PHOTO_FILENAMES: string[] = [
    'headshot 1.JPG',
    'great photo of me on stage.jpg',
    'hive tattoo dont tell show.jpg',
    'mugshot style headshot.jpg',
    'close up of me on stage.png',
    'dont tell at the downstairs.jpg',
    'full body shot of me on stage.jpg',
    'silly headshot.jpg',
    'stand up at the zoo.jpg',
    'wide headshot.jpg'
]

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [copied, setCopied] = useState(false)

  const photos = useMemo(
    () => PHOTO_FILENAMES.map((f) => ({ src: `/photos/${f}`, alt: `Press photo: ${f}` })),
    [],
  )

  useEffect(() => {
    // Help iOS/Safari: attempt play after mount. If blocked, poster image still looks great.
    const v = videoRef.current
    if (!v || reducedMotion) return
    const tryPlay = async () => {
      try {
        await v.play()
      } catch {
        // ignore
      }
    }
    tryPlay()
  }, [reducedMotion])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      // fallback: open mail client
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="page">
      <header className="hero" id="top" aria-label="Hero">
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="heroVideo"
            src="/media/hero.mp4"
            poster="/media/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
        <div className="heroOverlay" />
        <div className="container heroContent">
          <div className="heroTop">
            <div className="badge">Electronic Press Kit</div>
            <nav className="nav">
              <a className="navLink" href="#clips">Clips</a>
              <a className="navLink" href="#photos">Photos</a>
              <a className="navLink" href="#booking">Booking</a>
            </nav>
          </div>

          <div className="heroMain">
            <h1 className="name">
              <span className="nameFont">Jimmy Glasscock</span>
            </h1>
            <p className="headline">Jokes first. Everything else second.</p>
            <p className="subline">Sharp stand-up from Salt Lake City.</p>

            <div className="ctaRow">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Book Jimmy
              </a>
              <button className="btn" type="button" onClick={copyEmail} aria-live="polite">
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <a className="btn ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                @jimmyglasscock
              </a>
            </div>

            <div className="stats" role="list" aria-label="Highlights">
              <div className="stat" role="listitem">
                <div className="statTop">Don’t Tell Comedy</div>
                <div className="statBottom">Utah feature</div>
              </div>
              <div className="stat" role="listitem">
                <div className="statTop">56K+</div>
                <div className="statBottom">YouTube subscribers</div>
              </div>
              <div className="stat" role="listitem">
                <div className="statTop">1M+</div>
                <div className="statBottom">TikTok views</div>
              </div>
              <div className="stat" role="listitem">
                <div className="statTop">Since</div>
                <div className="statBottom">July 25, 2023</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section" aria-label="Bio">
          <div className="grid2">
            <div>
              <h2 className="h2">Bio</h2>
              <p className="p">
                <strong>Jimmy Glasscock</strong> is a stand-up comedian based in Salt Lake City who cares deeply about great jokes.
                His favorite material works just as well one-on-one as it does on stage — tight setups, clean turns,
                and punchlines that don’t need explaining.
              </p>
              <p className="p">
                Jimmy has been featured on <strong>Don’t Tell Comedy (Utah)</strong> and has built a fast-growing online audience
                with <strong>56,000+ YouTube subscribers</strong> and <strong>over 1 million views on TikTok</strong>.
                He regularly hosts shows and performs at clubs, colleges, and independent showcases.
              </p>

              <div className="chips" aria-label="Best fit">
                <span className="chip">Clubs</span>
                <span className="chip">Colleges</span>
                <span className="chip">Don’t Tell</span>
                <span className="chip">Local showcases</span>
                <span className="chip">PG-13</span>
              </div>
            </div>

            <div className="card">
              <h3 className="h3">Quick links</h3>
              <div className="linkList">
                <a className="linkRow" href={`mailto:${EMAIL}`}>
                  <span>Email</span><span className="muted">{EMAIL}</span>
                </a>
                <a className="linkRow" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  <span>Instagram</span><span className="muted">@jimmyglasscock</span>
                </a>
                <a className="linkRow" href="#clips">
                  <span>Clips</span><span className="muted">Watch</span>
                </a>
                <a className="linkRow" href="#photos">
                  <span>Photos</span><span className="muted">Download-ready</span>
                </a>
              </div>

              <div className="divider" />

              <p className="small muted">
                Tip: once you add photos, this page becomes a complete “send one link” EPK.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="clips" aria-label="Clips">
          <div className="sectionHeader">
            <h2 className="h2">Featured clips</h2>
            <p className="muted">Fast to skim. Easy to share.</p>
          </div>

          <div className="grid2">
            {YT_CLIPS.map((c) => (
              <article key={c.url} className="card clipCard">
                <div className="ratio16x9">
                  <iframe
                    src={c.url}
                    title={c.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="clipMeta">
                  <div className="clipTitle">{c.title}</div>
                  <div className="muted small">{c.note}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="note card">
            <div className="h3">Add your 10-minute set</div>
            <p className="p muted">
              When you’re ready, replace one embed above (or add a third) with your 10-minute set link.
            </p>
          </div>
        </section>

        <section className="section" id="photos" aria-label="Photos">
          <div className="sectionHeader">
            <h2 className="h2">Press photos</h2>
            <p className="muted">Swipe on mobile · grid on desktop.</p>
          </div>

          {photos.length === 0 ? (
            <div className="card">
              <p className="p">
                Drop your photos into <code className="code">public/photos</code> and list filenames in <code className="code">PHOTO_FILENAMES</code>.
              </p>
              <p className="p muted small">
                (If you want, I can also add a “Download press photos” zip link later.)
              </p>
            </div>
          ) : (
            <div className="photoWrap">
              <div className="photoScroller" aria-label="Photo scroller">
                {photos.map((ph) => (
                  <a key={ph.src} className="photo" href={ph.src} target="_blank" rel="noreferrer">
                    <img src={ph.src} alt={ph.alt} loading="lazy" />
                  </a>
                ))}
              </div>
              <div className="photoGrid" aria-label="Photo grid">
                {photos.map((ph) => (
                  <a key={ph.src} className="photo" href={ph.src} target="_blank" rel="noreferrer">
                    <img src={ph.src} alt={ph.alt} loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="section" id="booking" aria-label="Booking">
          <div className="card bookingCard">
            <div>
              <h2 className="h2">Booking</h2>
              <p className="p muted">
                Clubs · Colleges · Don’t Tell · Local showcases
              </p>
            </div>

            <div className="bookingActions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Email
              </a>
              <button className="btn" type="button" onClick={copyEmail}>
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <a className="btn ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>

            <div className="divider" />

            <p className="small muted">
              © {new Date().getFullYear()} Jimmy Glasscock · Built with React · Hosted on GitHub Pages
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
