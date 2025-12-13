import { useEffect, useMemo, useRef, useState } from 'react'

const EMAIL = 'jamesglasscock99@gmail.com'
const INSTAGRAM_URL = 'https://instagram.com/jimmyglasscock'

const FEATURED_TAPE = {
  title: 'Featured Tape',
  url: 'https://www.youtube.com/embed/yBFk_EuGfuU',
  note: 'Featured tape (watch this first)',
}

const OTHER_CLIPS = [
  {
    title: "What's the worst last name? | Jimmy Glasscock",
    url: 'https://www.youtube.com/embed/uPv6ComtZa0',
    note: '2-minute clip',
  },
  {
    title: 'Turning Fight Videos Into Songs',
    url: 'https://www.youtube.com/embed/zCnZB6_m7BE',
    note: 'Bonus: comedy + music',
  },
]

/* ✅ Updated photo filenames (dash-separated) */
const PHOTO_FILENAMES: string[] = [
  'headshot-1.jpg',
  'great-photo-on-stage.jpg',
  'hive-tattoo-dont-tell-show.jpg',
  'mugshot-style-headshot.jpg',
  'close-up-on-stage.png',
  'dont-tell-downstairs.jpg',
  'full-body-on-stage.jpg',
  'silly-headshot.jpg',
  'stand-up-at-the-zoo.jpg',
  'wide-headshot.jpg',
]

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
    () =>
      PHOTO_FILENAMES.map((f) => ({
        src: `/photos/${f}`,
        alt: 'Press photo of Jimmy Glasscock',
      })),
    [],
  )

  useEffect(() => {
    const v = videoRef.current
    if (!v || reducedMotion) return
    const tryPlay = async () => {
      try {
        await v.play()
      } catch {}
    }
    tryPlay()
  }, [reducedMotion])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="page">
      {/* HERO */}
      <header className="hero">
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
          />
        )}
        <div className="heroOverlay" />

        <div className="container heroContent heroMainCentered">
          <div className="badge">Electronic Press Kit</div>

          <h1 className="name">
            <span className="nameFont">Jimmy Glasscock</span>
          </h1>

          <p className="subline sublineCentered">
            Sharp stand-up from Salt Lake City.
          </p>

          <div className="ctaRow ctaRowCentered">
            <a className="btn primary" href={`mailto:${EMAIL}`}>
              Book Jimmy
            </a>
            <button className="btn" onClick={copyEmail}>
              {copied ? 'Copied!' : 'Copy email'}
            </button>
            <a
              className="btn ghost"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              @jimmyglasscock
            </a>
          </div>

          <div className="stats statsCentered">
            <div className="stat">
              <div className="statTop">Don’t Tell Comedy</div>
              <div className="statBottom">Utah feature</div>
            </div>
            <div className="stat">
              <div className="statTop">56K+</div>
              <div className="statBottom">YouTube subscribers</div>
            </div>
            <div className="stat">
              <div className="statTop">1M+</div>
              <div className="statBottom">TikTok views</div>
            </div>
            <div className="stat">
              <div className="statTop">Since</div>
              <div className="statBottom">July 25, 2023</div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {/* FEATURED TAPE */}
        <section className="section" id="tape">
          <div className="sectionHeader sectionHeaderCentered">
            <h2 className="h2">Featured tape</h2>
            <p className="muted">This is the one to watch.</p>
          </div>

          <div className="card tapeCard">
            <div className="ratio16x9 ratioFeatured">
              <iframe
                src={FEATURED_TAPE.url}
                title={FEATURED_TAPE.title}
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* OTHER CLIPS (AFTERTHOUGHT) */}
        <section className="section afterthoughtSection">
          <div className="sectionHeader sectionHeaderCentered">
            <h3 className="h3">More clips (optional)</h3>
          </div>

          <div className="grid2">
            {OTHER_CLIPS.map((clip) => (
              <div key={clip.url} className="card clipCard clipCardSmall">
                <div className="ratio16x9">
                  <iframe src={clip.url} title={clip.title} allowFullScreen />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTOS */}
        <section className="section" id="photos">
          <div className="sectionHeader sectionHeaderCentered">
            <h2 className="h2">Press photos</h2>
            <p className="muted">Swipe on mobile · grid on desktop.</p>
          </div>

          <div className="photoWrap">
            <div className="photoScroller">
              {photos.map((p) => (
                <a key={p.src} className="photo" href={p.src} target="_blank">
                  <img src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>

            <div className="photoGrid">
              {photos.map((p) => (
                <a key={p.src} className="photo" href={p.src} target="_blank">
                  <img src={p.src} alt={p.alt} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="section" id="booking">
          <div className="card bookingCard">
            <div>
              <h2 className="h2">Booking</h2>
              <p className="muted">
                Clubs · Colleges · Don’t Tell · Local showcases
              </p>
            </div>

            <div className="bookingActions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Email
              </a>
              <a
                className="btn ghost"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
