import { useEffect, useMemo, useRef, useState } from 'react'

const EMAIL = 'jamesglasscock99@gmail.com'
const INSTAGRAM_URL = 'https://instagram.com/jimmyglasscock'

const FEATURED_TAPE = {
  title: 'Featured Tape',
  url: 'https://www.youtube.com/embed/yBFk_EuGfuU',
  note: 'This is the one to watch.',
}

const OTHER_CLIPS = [
  {
    title: "What's the worst last name? | Jimmy Glasscock",
    url: 'https://www.youtube.com/embed/uPv6ComtZa0',
    note: 'Short clip',
  },
  {
    title: 'Turning Fight Videos Into Songs',
    url: 'https://www.youtube.com/embed/zCnZB6_m7BE',
    note: 'Bonus: comedy + music',
  },
]

const PHOTO_FILENAMES: string[] = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.png',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
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

  const photos = useMemo(
    () =>
      PHOTO_FILENAMES.map((f) => ({
        src: `/photos/${f}`,
        alt: 'Photo of Jimmy Glasscock',
      })),
    [],
  )

  useEffect(() => {
    const run = () => (window as any).gapi?.ytsubscribe?.go?.()
    // Run once now, and once shortly after (script can load a beat later)
    run()
    const t = window.setTimeout(run, 300)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v || reducedMotion) return
    v.play().catch(() => {})
  }, [reducedMotion])

  return (
    <div className="page">
      {/* HERO */}
      <header className="hero" aria-label="Hero">
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
          <h1 className="name">
            <span className="nameFont">Jimmy Glasscock</span>
          </h1>

          <p className="subline">Sharp stand-up from Salt Lake City.</p>

          <div className="ctaRow">
            <a className="btn primary" href={`mailto:${EMAIL}`}>
              Contact me
            </a>
            <a
              className="btn ghost"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              @jimmyglasscock
            </a>
          </div>

          <div className="stats" aria-label="Highlights">
            <a
              className="stat statLink youtubeCustom"
              href="https://www.youtube.com/@JimmyGlasscock"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="youtubeAvatar"
                src="/photos/youtube-avatar.jpg"
                alt="Jimmy Glasscock YouTube"
              />
              <div>
                <div className="statTop">56K+</div>
                <div className="statBottom">YouTube subscribers</div>
              </div>
            </a>
          <a
            className="stat statLink"
            href="https://www.tiktok.com/@jimmyglasscock?lang=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Jimmy Glasscock on TikTok"
          >
            <div className="statTop">1M+</div>
            <div className="statBottom">TikTok views</div>
          </a>
            <div className="stat">
              <div className="statTop">Don’t Tell Comedy</div>
              <div className="statBottom">Utah feature</div>
            </div>
            <div className="stat">
              <div className="statTop">Since</div>
              <div className="statBottom">July 25, 2023</div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        {/* BIO */}
        <section className="section" id="bio" aria-label="Bio">
          <div className="sectionHeader">
            <h2 className="h2">Bio</h2>
          </div>

          <div className="card">
            <p className="p">
              <strong>Jimmy Glasscock</strong> is a stand-up comedian based in Salt Lake City who cares about great jokes.
              His favorite material works just as well one-on-one as it does on stage — jokes that still land when told to a friend.
            </p>
            <p className="p">
              Jimmy has built a fast-growing online audience with <strong>56,000+ YouTube subscribers</strong> and
              <strong> over 1 million views on TikTok</strong>. He regularly hosts shows and has been featured on
              <strong> Don’t Tell Comedy (Utah)</strong>.
            </p>
          </div>
        </section>

        {/* FEATURED TAPE */}
        <section className="section" id="tape" aria-label="Featured tape">
          <div className="sectionHeader">
            <h2 className="h2">Featured tape</h2>
            <p className="muted">{FEATURED_TAPE.note}</p>
          </div>

          <div className="card tapeCard">
            <div className="ratio16x9 ratioFeatured">
              <iframe
                src={FEATURED_TAPE.url}
                title={FEATURED_TAPE.title}
                loading="eager"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* OTHER CLIPS */}
        <section className="section afterthoughtSection" aria-label="More clips">
          <div className="sectionHeader">
            <h3 className="h3">More clips</h3>
          </div>

          <div className="grid2">
            {OTHER_CLIPS.map((clip) => (
              <div key={clip.url} className="card clipCard clipCardSmall">
                <div className="ratio16x9">
                  <iframe
                    src={clip.url}
                    title={clip.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="clipMeta">
                  <div className="clipTitle">{clip.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTOS */}
        <section className="section" id="photos" aria-label="Press photos">
          <div className="sectionHeader">
            <h2 className="h2">Photos</h2>
          </div>

          <div className="photoWrap">
            <div className="photoScroller">
              {photos.map((p) => (
                <a key={p.src} className="photo" href={p.src} target="_blank" rel="noreferrer">
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </a>
              ))}
            </div>

            <div className="photoGrid">
              {photos.map((p) => (
                <a key={p.src} className="photoGridItem" href={p.src} target="_blank" rel="noreferrer">
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section className="section" id="booking" aria-label="Booking">
          <div className="card bookingCard">
            <div>
              <h2 className="h2">Booking</h2>
              <p className="muted small">{EMAIL}</p>
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
