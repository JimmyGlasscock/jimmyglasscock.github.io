import { useEffect, useRef } from 'react'

type FavItem = {
  title: string
  credit?: string
  img: string
  alt: string
  fit?: 'cover' | 'contain'
}

type FavCategory = {
  id: string
  title: string
  items: FavItem[]
}

const CATEGORIES: FavCategory[] = [
  {
    id: 'comedians',
    title: 'Comedians',
    items: [
      { title: 'Daniel Tosh', img: '/favorites/tosh.jpg', alt: 'Daniel Tosh', fit: 'cover' },
      { title: 'Anthony Jeselnik', img: '/favorites/jeselnik.jpg', alt: 'Anthony Jeselnik', fit: 'cover' },
      { title: 'Bill Burr', img: '/favorites/burr.jpg', alt: 'Bill Burr', fit: 'cover' },
      { title: 'Bo Burnham', img: '/favorites/burnham.jpg', alt: 'Bo Burnham', fit: 'cover' },
      { title: 'Dave Chappelle', img: '/favorites/chappelle.jpg', alt: 'Dave Chappelle', fit: 'cover' },
    ],
  },
  {
    id: 'books',
    title: 'Books',
    items: [
      {
        title: 'The Subtle Art of Not Giving a F*ck',
        credit: 'Mark Manson',
        img: '/favorites/subtle-art.jpg',
        alt: 'The Subtle Art of Not Giving a F*ck book cover',
      },
      {
        title: 'The Meaning of Your Life',
        credit: 'Arthur C. Brooks',
        img: '/favorites/meaning-of-your-life.jpg',
        alt: 'The Meaning of Your Life book cover',
      },
      {
        title: 'People Skills',
        credit: 'Robert R. Bolton',
        img: '/favorites/people-skills.jpg',
        alt: 'People Skills book cover',
      },
      {
        title: 'Crucial Conversations',
        credit: 'Patterson, Grenny, McMillan & Switzler',
        img: '/favorites/crucial-conversations.jpg',
        alt: 'Crucial Conversations book cover',
      },
    ],
  },
  {
    id: 'games',
    title: 'Video Games',
    items: [
      { title: 'Chrono Trigger', img: '/favorites/chrono-trigger.jpg', alt: 'Chrono Trigger cover' },
      {
        title: 'Pokémon FireRed & LeafGreen',
        img: '/favorites/pokemon-frlg.jpg',
        alt: 'Pokémon FireRed and LeafGreen cover',
      },
      { title: 'Final Fantasy VII', img: '/favorites/ff7.jpg', alt: 'Final Fantasy VII cover' },
      {
        title: 'The Legend of Zelda: A Link to the Past',
        img: '/favorites/zelda-lttp.jpg',
        alt: 'The Legend of Zelda A Link to the Past cover',
      },
      { title: 'Skyrim', img: '/favorites/skyrim.jpg', alt: 'The Elder Scrolls V Skyrim cover' },
      { title: 'Mega Man II', img: '/favorites/megaman2.jpg', alt: 'Mega Man 2 cover' },
      { title: 'Super Mario Bros.', img: '/favorites/smb.jpg', alt: 'Super Mario Bros cover' },
      { title: 'Minecraft', img: '/favorites/minecraft.jpg', alt: 'Minecraft creeper face' },
      { title: 'Diablo I', img: '/favorites/diablo.jpg', alt: 'Diablo cover' },
    ],
  },
  {
    id: 'movies',
    title: 'Movies',
    items: [
      { title: 'Baby Driver', img: '/favorites/baby-driver.jpg', alt: 'Baby Driver poster' },
      { title: 'Whiplash', img: '/favorites/whiplash.jpg', alt: 'Whiplash poster' },
      { title: 'Iron Man', img: '/favorites/iron-man.jpg', alt: 'Iron Man poster' },
    ],
  },
]

function FavCarousel({ category }: { category: FavCategory }) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollByCard = (dir: -1 | 1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.favCard') as HTMLElement | null
    const gap = 14
    const amount = (card?.offsetWidth ?? 220) + gap
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="favWindow" aria-labelledby={`${category.id}-title`}>
      <div className="favTitlebar">
        <span className="favTitlebarIcon" aria-hidden="true">
          ★
        </span>
        <h2 id={`${category.id}-title`} className="favWindowTitle">
          {category.title}
        </h2>
        <span className="favWindowBtns" aria-hidden="true">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </span>
      </div>

      <div className="favWindowBody">
        <button
          type="button"
          className="favArrow"
          onClick={() => scrollByCard(-1)}
          aria-label={`Previous ${category.title}`}
        >
          ◀
        </button>

        <div
          className="favTrack"
          ref={trackRef}
          tabIndex={0}
          role="list"
          aria-label={category.title}
        >
          {category.items.map((item) => (
            <article key={item.title} className="favCard" role="listitem">
              <div className="favCardArt">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className={item.fit === 'cover' ? 'favImgCover' : 'favImgContain'}
                />
              </div>
              <h3 className="favCardTitle">{item.title}</h3>
              {item.credit ? <p className="favCardCredit">{item.credit}</p> : null}
            </article>
          ))}
        </div>

        <button
          type="button"
          className="favArrow"
          onClick={() => scrollByCard(1)}
          aria-label={`Next ${category.title}`}
        >
          ▶
        </button>
      </div>
    </section>
  )
}

export default function FavoritesPage() {
  useEffect(() => {
    document.body.classList.add('favRetroBody')
    const prevTitle = document.title
    document.title = 'My Favorite Things — Jimmy Glasscock'
    return () => {
      document.body.classList.remove('favRetroBody')
      document.title = prevTitle
    }
  }, [])

  return (
    <div className="favPage">
      <main className="favInner">
        <header className="favHero">
          <p className="favBlink">★ WELCOME ★</p>
          <h1 className="favH1">My Favorite Things</h1>
          <p className="favTagline">
            A totally tubular shrine to comedy, books, games, and movies.
          </p>
          <p className="favHint">Swipe the rows · tap the arrows</p>
        </header>

        {CATEGORIES.map((category) => (
          <FavCarousel key={category.id} category={category} />
        ))}

        <footer className="favFooter">
          <p>Best viewed in Netscape Navigator 4.0 at 800×600</p>
          <p>This page is always under construction 🚧</p>
        </footer>
      </main>
    </div>
  )
}
