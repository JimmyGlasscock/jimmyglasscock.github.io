import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

function spriteUrl(dexNumber: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexNumber}.png`
}

type PokeType =
  | 'Fire'
  | 'Flying'
  | 'Poison'
  | 'Grass'
  | 'Fighting'
  | 'Electric'
  | 'Water'
  | 'Steel'
  | 'Rock'
  | 'Dark'

const PROJECTS = [
  {
    slug: 'fire-red-leaf-green-enhancements',
    title: 'Pokemon FireRed & LeafGreen Enhancements',
    videoUrl: 'https://www.youtube.com/embed/74BKM28FJi4?si=BLdUzGXmGytLyqKu',
    downloadUrl: 'https://drive.google.com/drive/folders/1-I24e08BpZ1-sQVUPM-5jwPxR16vakB0?usp=drive_link',
    downloadText: 'Download Patch',
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
      'Added in Professor Oak battle when you catch all 151 Kanto Pokemon',
      'L & R move pages in the box',
      'Added a Jimmy battle at the memorial pillar (and a special surprise if you beat me)',
      'TMs are infinite',
      'Gym leaders can be rematched after the Elite Four',
      'FireRed / LeafGreen version toggle for version exclusives',
      'Modern Exp Share toggle',
    ],
    otherInfo: ['Other info coming soon.'],
    postGameGuide: {
      // FireRed/LeafGreen-style Ranger trainer sprite
      rangerJimmySpriteSrc: '/photos/firered/upscaled/jimmy-sprite.png',
      chronosIsleMapSrc: '/photos/firered/upscaled/ChronosMeadow.png',
      johtoLocations: [
        {
          island: 'One Island',
          entries: [
            { dex: 170, name: 'Chinchou', location: 'Treasure Beach', surfing: true },
            { dex: 171, name: 'Lanturn', location: 'Treasure Beach', surfing: true },
            { dex: 163, name: 'Hoothoot', location: 'Treasure Beach' },
            { dex: 222, name: 'Corsola', location: 'Kindle Road', surfing: true },
            { dex: 179, name: 'Mareep', location: 'Kindle Road' },
            { dex: 185, name: 'Sudowoodo', location: 'Kindle Road' },
            { dex: 191, name: 'Sunkern', location: 'Kindle Road' },
            { dex: 203, name: 'Girafarig', location: 'Mt. Ember exterior' },
            { dex: 228, name: 'Houndour', location: 'Mt. Ember' },
            { dex: 229, name: 'Houndoom', location: 'Mt. Ember exterior' },
          ],
        },
        {
          island: 'Two Island',
          entries: [
            { dex: 204, name: 'Pineco', location: 'Cape Brink' },
            { dex: 205, name: 'Forretress', location: 'Cape Brink' },
            { dex: 207, name: 'Gligar', location: 'Cape Brink' },
          ],
        },
        {
          island: 'Three Island',
          entries: [
            { dex: 209, name: 'Snubbull', location: 'Bond Bridge' },
            { dex: 210, name: 'Granbull', location: 'Bond Bridge' },
            { dex: 163, name: 'Hoothoot', location: 'Berry Forest' },
            { dex: 234, name: 'Stantler', location: 'Berry Forest' },
          ],
        },
        {
          island: 'Five Island',
          entries: [
            { dex: 190, name: 'Aipom', location: 'Five Isle Meadow' },
            { dex: 213, name: 'Shuckle', location: 'Five Isle Meadow' },
            { dex: 235, name: 'Smeargle', location: 'Five Isle Meadow' },
            { dex: 241, name: 'Miltank', location: 'Five Isle Meadow' },
          ],
        },
        {
          island: 'Six Island',
          entries: [
            { dex: 216, name: 'Teddiursa', location: 'Water Path' },
            { dex: 217, name: 'Ursaring', location: 'Water Path' },
          ],
        },
        {
          island: 'Seven Island',
          entries: [
            { dex: 180, name: 'Flaaffy', location: 'Canyon Entrance' },
            { dex: 241, name: 'Miltank', location: 'Canyon Entrance' },
            { dex: 185, name: 'Sudowoodo', location: 'Canyon Entrance' },
          ],
        },
      ],
      team: [
        {
          dex: 157,
          name: 'Typhlosion',
          level: 68,
          types: ['Fire'] as const,
          moves: ['Flamethrower', 'ThunderPunch', 'Earthquake', 'Rock Slide'] as const,
        },
        {
          dex: 169,
          name: 'Crobat',
          level: 66,
          types: ['Poison', 'Flying'] as const,
          moves: ['Sludge Bomb', 'Air Cutter', 'Shadow Ball', 'Confuse Ray'] as const,
        },
        {
          dex: 286,
          name: 'Breloom',
          level: 67,
          types: ['Grass', 'Fighting'] as const,
          moves: ['Sky Uppercut', 'Mach Punch', 'Sludge Bomb', 'Spore'] as const,
        },
        {
          dex: 26,
          name: 'Raichu',
          level: 71,
          types: ['Electric'] as const,
          moves: ['Thunderbolt', 'Brick Break', 'Iron Tail', 'Surf'] as const,
        },
        {
          dex: 395,
          name: 'Empoleon',
          level: 64,
          types: ['Water', 'Steel'] as const,
          moves: ['Drill Peck', 'Metal Claw', 'Blizzard', 'Hydro Pump'] as const,
        },
        {
          dex: 248,
          name: 'Tyranitar',
          level: 69,
          types: ['Rock', 'Dark'] as const,
          moves: ['Rock Slide', 'Earthquake', 'Crunch', 'Aerial Ace'] as const,
        },
      ],
      rewardText:
        'Upon beating Jimmy, he will reward you with the Chronos Ticket, which will give you access to Chronos Isle. Chronos Isle contains many trainers waiting to battle, and a whole slew of pokemon from the hoenn region!',
      encounters: {
        grass: [
          { dex: 290, name: 'Nincada', rate: '30%', levels: 'Lv 29–55' },
          { dex: 285, name: 'Shroomish', rate: '20%', levels: 'Lv 37–49' },
          { dex: 263, name: 'Zigzagoon', rate: '10%', levels: 'Lv 39–51' },
          { dex: 264, name: 'Linoone', rate: '10%', levels: 'Lv 46–57' },
          { dex: 270, name: 'Lotad', rate: '10%', levels: 'Lv 33–52' },
          { dex: 287, name: 'Slakoth', rate: '5%', levels: 'Lv 37–44' },
          { dex: 283, name: 'Surskit', rate: '5%', levels: 'Lv 39–49' },
          { dex: 315, name: 'Roselia', rate: '4%', levels: 'Lv 41–53' },
          { dex: 300, name: 'Skitty', rate: '4%', levels: 'Lv 36–56' },
          { dex: 359, name: 'Absol', rate: '1%', levels: 'Lv 44–58' },
          { dex: 291, name: 'Ninjask', rate: '1%', levels: 'Lv 44–58' },
        ],
        surf: [
          { dex: 278, name: 'Wingull', rate: '60%', levels: 'Lv 28–47' },
          { dex: 339, name: 'Barboach', rate: '30%', levels: 'Lv 24–61' },
          { dex: 318, name: 'Carvanha', rate: '5%', levels: 'Lv 31–53' },
          { dex: 341, name: 'Corphish', rate: '4%', levels: 'Lv 38–51' },
          { dex: 349, name: 'Feebas', rate: '1%', levels: 'Lv 31–45' },
        ],
      },
      celebi: {
        dex: 251,
        name: 'Celebi',
        level: 50,
        note: 'Awaiting you at the end of Chronos Isle is the legendary pokemon Celebi!',
        moves: ['Ancient Power', 'Future Sight', 'Baton Pass', 'Perish Song'] as const,
      },
      oakBattle: {
        title: 'Battle with Professor Oak!',
        subtitle:
          "After you've completed the Kanto Pokedex and caught all 151, Professor Oak will challenge you to a Pokemon Battle!",
        oakSpriteSrc: '/photos/firered/oak-sprite.png',
        variantNote:
          'Professor Oak\'s team changes based on the starter you chose. Professor Oak has 4 Full Restores as trainer items.',
        variants: [
          {
            name: 'Oak (Squirtle path)',
            partyLabel: 'sParty_ProfOakSquirtle',
            team: [
              {
                dex: 128,
                name: 'Tauros',
                level: 76,
                moves: ['Earthquake', 'Return', 'Iron Tail', 'Swagger'] as const,
              },
              {
                dex: 103,
                name: 'Exeggutor',
                level: 77,
                moves: ['Giga Drain', 'Psychic', 'Sleep Powder', 'Light Screen'] as const,
              },
              {
                dex: 59,
                name: 'Arcanine',
                level: 78,
                moves: ['Extreme Speed', 'Flamethrower', 'Crunch', 'Iron Tail'] as const,
              },
              {
                dex: 3,
                name: 'Venusaur',
                level: 79,
                moves: ['Solar Beam', 'Sludge Bomb', 'Earthquake', 'Sunny Day'] as const,
              },
              {
                dex: 130,
                name: 'Gyarados',
                level: 80,
                moves: ['Hydro Pump', 'Dragon Dance', 'Earthquake', 'Hyper Beam'] as const,
              },
              {
                dex: 149,
                name: 'Dragonite',
                level: 82,
                moves: ['Outrage', 'Earthquake', 'Extreme Speed', 'Thunderbolt'] as const,
              },
            ],
          },
          {
            name: 'Oak (Bulbasaur path)',
            partyLabel: 'sParty_ProfOakBulbasaur',
            team: [
              {
                dex: 128,
                name: 'Tauros',
                level: 76,
                moves: ['Earthquake', 'Return', 'Iron Tail', 'Swagger'] as const,
              },
              {
                dex: 103,
                name: 'Exeggutor',
                level: 77,
                moves: ['Giga Drain', 'Psychic', 'Sleep Powder', 'Light Screen'] as const,
              },
              {
                dex: 59,
                name: 'Arcanine',
                level: 78,
                moves: ['Extreme Speed', 'Flamethrower', 'Crunch', 'Iron Tail'] as const,
              },
              {
                dex: 6,
                name: 'Charizard',
                level: 79,
                moves: ['Fire Blast', 'Dragon Claw', 'Aerial Ace', 'Earthquake'] as const,
              },
              {
                dex: 130,
                name: 'Gyarados',
                level: 80,
                moves: ['Hydro Pump', 'Dragon Dance', 'Earthquake', 'Hyper Beam'] as const,
              },
              {
                dex: 149,
                name: 'Dragonite',
                level: 82,
                moves: ['Outrage', 'Earthquake', 'Extreme Speed', 'Thunderbolt'] as const,
              },
            ],
          },
          {
            name: 'Oak (Charmander path)',
            partyLabel: 'sParty_ProfOakCharmander',
            team: [
              {
                dex: 128,
                name: 'Tauros',
                level: 76,
                moves: ['Earthquake', 'Return', 'Iron Tail', 'Swagger'] as const,
              },
              {
                dex: 103,
                name: 'Exeggutor',
                level: 77,
                moves: ['Giga Drain', 'Psychic', 'Sleep Powder', 'Light Screen'] as const,
              },
              {
                dex: 59,
                name: 'Arcanine',
                level: 78,
                moves: ['Extreme Speed', 'Flamethrower', 'Crunch', 'Iron Tail'] as const,
              },
              {
                dex: 9,
                name: 'Blastoise',
                level: 79,
                moves: ['Hydro Pump', 'Ice Beam', 'Earthquake', 'Mirror Coat'] as const,
              },
              {
                dex: 130,
                name: 'Gyarados',
                level: 80,
                moves: ['Hydro Pump', 'Dragon Dance', 'Earthquake', 'Hyper Beam'] as const,
              },
              {
                dex: 149,
                name: 'Dragonite',
                level: 82,
                moves: ['Outrage', 'Earthquake', 'Extreme Speed', 'Thunderbolt'] as const,
              },
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'ruby-sapphire-enhancements',
    title: 'Pokemon Ruby & Sapphire Enhancements (and Emerald)',
    videoUrl: 'https://www.youtube.com/embed/6AGnunoqc6o?si=wB1VN3RRYdnIJJBj',
    downloadUrl:
      'https://drive.google.com/drive/folders/1pDzdw5JfiSyVa9Ir-x1nSXDDRB6bODPy?usp=drive_link',
    downloadText: 'Download Patch',
    screenshots: [
      { src: '/photos/rubysapphire/1.png', alt: 'Ruby/Sapphire screenshot 1' },
      { src: '/photos/rubysapphire/2.png', alt: 'Ruby/Sapphire screenshot 2' },
      { src: '/photos/rubysapphire/3.png', alt: 'Ruby/Sapphire screenshot 3' },
      { src: '/photos/rubysapphire/4.png', alt: 'Ruby/Sapphire screenshot 4' },
    ],
    changes: [
      'Animated sprites in battle & summary',
      'Post elite four gym rematches',
      'Elite four rematches & Stephen’s emerald team',
      'Infinite TMs',
      'Added Terra Cave to Sapphire',
      'Added Marine Cave to Ruby',
      'Added Jirachi to wish rock after beating the elite four',
      'Old man in lilycove gives you the Eon Ticket & Aurora ticket after beating the elite four',
      'Imported birth island event & catchable deoxys',
      'Add Trade stone for all trade evolutions (sold at lilycove dept store 3F)',
      'L and R buttons move pages in the box',
      'Deleted holes in all the secret bases',
      'Version exclusives toggle in the options menu',
      'Repel expired, use another?',
      'Drastically improved secret base selection at lilycove dept store',
      'Place decorations anywhere you can walk - no need for a mat',
      'Berry Glitch fix',
      'Added starter guy outside battle tower so you can get all starters',
      'Both fossils can be taken from route 111',
      'Modern exp share option in options menu',
      'Star animation when catching a pokemon',
      'Font from emerald',
      'Running shoes work everywhere',
      'In the pokemon party menu, all field moves highlighted in blue',
      'Feebas is a 10% encounter no matter what on route 119',
      'Feebas now evolves via water stone',
    ],
    otherInfo: ['Add any notes, credits, or links here.'],
    postGameGuide: undefined,
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
          <div className="projectDownloadRow ctaRow">
            <a
              className="btn primary projectDownloadButton"
              href={project.downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.downloadText ?? 'Download Patch'}
            </a>
          </div>
        ) : null}
      </section>

      {/* SCREENSHOTS */}
      <section className="section" aria-label="Project screenshots">
        <div className="sectionHeader">
          <h3 className="h3">Screenshots</h3>
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

      {/* POST GAME GUIDE (FireRed / LeafGreen) */}
      {project.postGameGuide ? (
        <section className="section" aria-label="New Post Game updates">
          <div className="sectionHeader">
            <h4 className="postGameH4 postGameTitle">New Post Game updates</h4>
          </div>

          <div className="card postGameCard" aria-label="New Johto Pokemon Locations">
            <div className="postGameBlock">
              <h4 className="postGameH4 postGameTitle">New Johto Pokemon Locations</h4>
              <div className="johtoIslandGrid">
                {project.postGameGuide.johtoLocations.map((block) => (
                  <div key={block.island} className="johtoIslandBlock">
                    <div className="encounterTitle">{block.island}</div>
                    <div className="encounterList">
                      {block.entries.map((e) => (
                        <div
                          key={`${block.island}-${e.name}-${e.location}-${e.dex}`}
                          className="encounterRow johtoLocationRow"
                        >
                          <img
                            className="pokeSprite"
                            src={spriteUrl(e.dex)}
                            alt={`${e.name} sprite`}
                          />
                          <div className="johtoLocationMeta">
                            <div className="encounterName">{e.name}</div>
                            <div className="muted small">
                              {e.location}
                              {'surfing' in e && e.surfing ? ' (surfing)' : ''}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <br />

          <div className="card postGameCard">
            <div className="postGameBlock">
              <h4 className="postGameH4 postGameTitle">Battle Against Pokemon Ranger Jimmy</h4>
              <br/>
              <p className="p muted postGameIntro">
                Outside memorial pillar on Five Island, Pokemon Ranger Jimmy will challenge you to a
                battle for a sweet reward. Bring plenty of potions because this is going to be
                tough!
              </p>

              <div className="rangerRow">
                <div className="rangerSpriteWrap" aria-label="Pokemon Ranger sprite placeholder">
                  {project.postGameGuide.rangerJimmySpriteSrc ? (
                    <img
                      className="rangerSprite"
                      src={project.postGameGuide.rangerJimmySpriteSrc}
                      alt="Pokemon Ranger Jimmy sprite"
                    />
                  ) : (
                    <div className="assetPlaceholder">[Pokemon Ranger Sprite]</div>
                  )}
                </div>

                <div className="teamList" aria-label="Ranger Jimmy team">
                  {project.postGameGuide.team.map((m) => (
                    <div key={m.name} className="teamMember">
                      <img
                        className="pokeSprite celebiSprite"
                        src={spriteUrl(m.dex)}
                        alt={`${m.name} sprite`}
                      />
                      <div className="teamMeta">
                        <div className="teamTopRow">
                          <div className="teamName">
                            {m.name} <span className="muted">Level {m.level}</span>
                          </div>
                          <div className="typeBadges" aria-label={`${m.name} types`}>
                            {m.types.map((t: PokeType) => (
                              <span key={t} className={`typeBadge type-${t.toLowerCase()}`}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="teamMoves">
                          <div className="muted small">Moves:</div>
                          <ul className="movesGrid" aria-label={`${m.name} moves`}>
                            {m.moves.map((mv) => (
                              <li key={mv} className="movePill">
                                {mv}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="postGameBlock">
              <br/>
              <p className="postGameRewardText">{project.postGameGuide.rewardText}</p>
              <br/>
              <div className="chronosMapWrap" aria-label="Chronos Isle map">
                <img
                  className="chronosMap"
                  src={project.postGameGuide.chronosIsleMapSrc}
                  alt="Chronos Isle map"
                />
              </div>
            </div>

            <div className="postGameBlock" aria-label="Encounter breakdown">
              <h4 className="postGameH4">Encounter breakdown</h4>

              <div className="encounterColumns">
                <div className="encounterCol">
                  <div className="encounterTitle">Grass encounters (Walking)</div>
                  <div className="encounterList">
                    {project.postGameGuide.encounters.grass.map((e) => (
                      <div key={`${e.name}-${e.rate}-${e.levels}`} className="encounterRow">
                        <img className="pokeSprite" src={spriteUrl(e.dex)} alt={`${e.name} sprite`} />
                        <div className="encounterName">{e.name}</div>
                        <div className="encounterMeta">
                          <span className="encounterRate">{e.rate}</span>
                          <span className="muted small">{e.levels}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="encounterCol">
                  <div className="encounterTitle">Surfing encounters</div>
                  <div className="encounterList">
                    {project.postGameGuide.encounters.surf.map((e) => (
                      <div key={`${e.name}-${e.rate}-${e.levels}`} className="encounterRow">
                        <img className="pokeSprite" src={spriteUrl(e.dex)} alt={`${e.name} sprite`} />
                        <div className="encounterName">{e.name}</div>
                        <div className="encounterMeta">
                          <span className="encounterRate">{e.rate}</span>
                          <span className="muted small">{e.levels}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="postGameBlock" aria-label="Celebi">
              <br/>
              <h4 className="p muted">{project.postGameGuide.celebi.note}</h4>
              <br/>
              <div className="celebiCard">
                <img
                  className="pokeSprite celebiSprite"
                  src={spriteUrl(project.postGameGuide.celebi.dex)}
                  alt={`${project.postGameGuide.celebi.name} sprite`}
                />
                <div>
                  <div className="teamName">
                    {project.postGameGuide.celebi.name}{' '}
                    <span className="muted">Level {project.postGameGuide.celebi.level}</span>
                  </div>
                  <div className="teamMoves" style={{ marginTop: '.75rem' }}>
                    <div className="muted small">Moves:</div>
                    <ul className="movesGrid" aria-label="Celebi moves">
                      {project.postGameGuide.celebi.moves.map((mv) => (
                        <li key={mv} className="movePill">
                          {mv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br/>

          <div className="card postGameCard" aria-label="Professor Oak battle">
              <div className="oakBattleCard">
                <h4 className="postGameH4 postGameTitle">{project.postGameGuide.oakBattle.title}</h4>
                <p className="p muted postGameIntro">{project.postGameGuide.oakBattle.subtitle}</p>
                <div className="oakRow">
                  <div className="rangerSpriteWrap" aria-label="Professor Oak sprite">
                    {project.postGameGuide.oakBattle.oakSpriteSrc ? (
                      <img
                        className="rangerSprite oakSprite"
                        src={project.postGameGuide.oakBattle.oakSpriteSrc}
                        alt="Professor Oak sprite"
                      />
                    ) : (
                      <div className="assetPlaceholder">[Professor Oak Sprite]</div>
                    )}
                  </div>

                  <div>
                    <p className="oakTrainerItems">{project.postGameGuide.oakBattle.variantNote}</p>

                    <div className="oakVariantList">
                      {project.postGameGuide.oakBattle.variants.map((variant, idx) => (
                        <details
                          key={variant.partyLabel}
                          className="oakVariantAccordion"
                          open={idx === 0}
                        >
                          <summary className="oakVariantSummary">
                            <span className="oakVariantTitle">{variant.name}</span>
                          </summary>

                          <div className="teamList" aria-label={`${variant.name} team`}>
                            {variant.team.map((m) => (
                              <div key={`${variant.partyLabel}-${m.name}`} className="teamMember">
                                <img
                                  className="pokeSprite"
                                  src={spriteUrl(m.dex)}
                                  alt={`${m.name} sprite`}
                                />
                                <div className="teamMeta">
                                  <div className="teamName">
                                    {m.name} <span className="muted">Lv {m.level}</span>
                                  </div>
                                  <div className="teamMoves">
                                    <div className="muted small">Moves:</div>
                                    <ul className="movesGrid" aria-label={`${m.name} moves`}>
                                      {m.moves.map((mv) => (
                                        <li key={mv} className="movePill">
                                          {mv}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      ) : (
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
      )}
    </main>
  )
}

