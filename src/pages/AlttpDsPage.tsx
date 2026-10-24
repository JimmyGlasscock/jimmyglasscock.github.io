import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const GITHUB_URL = 'https://github.com/JimmyGlasscock/alttp-ds'

const SETTINGS: { name: string; options: string[]; detail: string }[] = [
  {
    name: 'HUD',
    options: ['Top Screen', 'Bottom Screen'],
    detail: 'Where the HUD lives (life, magic meter, etc)',
  },
  {
    name: 'Low HP Indicator',
    options: ['On', 'Off'],
    detail: 'The low-health beep',
  },
  {
    name: 'Spawn',
    options: ['Normal', 'Dungeon'],
    detail: "A save made inside a dungeon loads at that dungeon's entrance",
  },
  {
    name: 'Magic Mirror',
    options: ['Normal', 'Free'],
    detail: 'Removes magic mirror use restrictions',
  },
  {
    name: 'Bomb Capacity',
    options: ['10', '99'],
    detail: 'Maximum bombs you can carry',
  },
  {
    name: 'Arrow Capacity',
    options: ['30', '99'],
    detail: 'Maximum arrows you can carry',
  },
  {
    name: 'Run Speed',
    options: ['Normal', 'Double', 'Triple'],
    detail: 'How fast Link walks, dashes, and swims',
  },
  {
    name: 'Dark Rooms',
    options: ['Normal', 'Bright'],
    detail: 'Bright keeps dark rooms lit, so the lantern is optional',
  },
  {
    name: 'Hair Color',
    options: ['Pink', 'Blonde'],
    detail: "Link's hair color",
  },
  {
    name: 'Button Mapping',
    options: [],
    detail: 'Allows you to remap the controls',
  },
]

const LEFT_OUT = [
  'Shaders',
  'Widescreen',
  '240-line mode',
  'Hi-res Mode 7',
  'MSU-1 / Opus audio',
  'OpenGL',
  'ROM comparison mode',
]

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function CodeBlock({ label, children }: { label?: string; children: string }) {
  return (
    <div className="alttpCode">
      {label ? <div className="alttpCodeLabel">{label}</div> : null}
      <pre className="alttpPre">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function AlttpDsPage() {
  return (
    <main className="container pageContent alttpPage">
      <header className="sectionHeader" aria-label="ALTTP-DS">
        <p className="alttpKicker">ALTTP-DS</p>
        <h2 className="projectDetailTitle">A Link to the Past DS</h2>
        <p className="alttpLead">
          <em>The Legend of Zelda: A Link to the Past</em> dual screen port for the Nintendo DS /
          DS Lite.
        </p>
      </header>

      <div className="ctaRow alttpCtas">
        <a className="btn primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>

      <nav className="alttpToc" aria-label="On this page">
        <a href="#features">Features</a>
        <a href="#settings">Settings</a>
        <a href="#getting-started">Getting started</a>
        <a href="#saves">Saves</a>
        <a href="#layout">Layout</a>
        <a href="#credits">Credits</a>
      </nav>

      <figure className="alttpHero">
        <img
          src="/photos/alttp-ds/showcase.jpg"
          alt="A Nintendo DS running A Link to the Past, with the game on the top screen and a touchscreen map on the bottom, beside the game logo"
          width={2000}
          height={1000}
          decoding="async"
        />
      </figure>

      <section className="section alttpIntroSection" aria-label="About">
        <p className="alttpIntro">
          ALTTP DS is a port of <Ext href="https://github.com/snesrev/zelda3">snesrev/zelda3</Ext>, a
          C reimplementation of the SNES game. The game logic runs natively on the DS&apos;s ARM9.
          The game has been optimized for the DS hardware, and has options to use the touchscreen
          for the HUD and map.
        </p>

        <aside className="alttpNotice">
          <strong>You supply the ROM.</strong>
          <p>
            This repo contains no Nintendo ROM and no game assets. Put a legally obtained USA{' '}
            <code>zelda3.sfc</code> in <code>vendor/zelda3/assets</code> and run <code>build.py</code>.
            This project is not affiliated with or endorsed by Nintendo.
          </p>
        </aside>
      </section>

      <section className="section" id="features" aria-label="Features">
        <div className="sectionHeader">
          <h3 className="h3">Features</h3>
        </div>

        <div className="alttpStack">
          <article className="card">
            <h4 className="alttpH4">A native port</h4>
            <ul className="alttpList">
              <li>
                <strong>Full game.</strong> The entire game is playable, running zelda3&apos;s
                reimplemented game logic.
              </li>
              <li>
                <strong>Optimized for DS screen size.</strong> The SNES picture is 224 lines and the
                DS screen is 192. The overworld and dungeon cameras scroll a little past room and
                area edges, so Link and the action stay in view.
              </li>
              <li>
                <strong>Lid handling.</strong> Closing the DS lid pauses the game.
              </li>
            </ul>
          </article>

          <article className="card">
            <h4 className="alttpH4">Bottom-screen HUD and touch controls</h4>
            <p className="alttpBody">
              Set <strong>HUD</strong> to <strong>Bottom Screen</strong> in{' '}
              <a href="#settings">Settings</a> and the status bar moves off the top screen, so the
              whole top screen is the game. The bottom screen then shows:
            </p>
            <ul className="alttpList">
              <li>
                Hearts, magic meter, rupee, bomb and arrow counters, and the equipped item.
              </li>
              <li>
                A <strong>live map</strong>: the world map outdoors and the dungeon map inside a
                dungeon. It stays black in caves and houses.
              </li>
              <li>
                An <strong>Items</strong> button, which opens and closes the game&apos;s item menu.
              </li>
              <li>
                A <strong>Gear</strong> button, which opens a panel with your equipment, bottles,
                pendants, crystals, hearts, and heart pieces.
              </li>
              <li>
                <strong>Touch to equip.</strong> Tap an item on the item panel to equip it.
              </li>
            </ul>
            <p className="alttpBody">
              When no game is running (title, file select, boot), the bottom screen shows a
              Triforce idle picture.
            </p>
          </article>

          <article className="card">
            <h4 className="alttpH4">Quality-of-life additions</h4>
            <ul className="alttpList">
              <li>
                <strong>Settings menu.</strong> Open it by pressing Select (see{' '}
                <a href="#settings">Settings</a>).
              </li>
              <li>
                <strong>Title skip.</strong> Pressing a button during the intro jumps to the sword
                drop, just like the GBA version.
              </li>
              <li>
                <strong>Fast dialogue.</strong> Hold <strong>A</strong> to fast forward through
                cutscene dialogue.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="settings" aria-label="Settings">
        <div className="sectionHeader">
          <h3 className="h3">Settings</h3>
        </div>

        <div className="card">
          <p className="alttpBody alttpBodyFirst">
            Press <strong>Select</strong> in game to open the save menu. It has three rows:{' '}
            <strong>Continue</strong>, <strong>Save and Quit</strong>, and <strong>Settings</strong>.
            Settings are saved in your <code>.sav</code> file.
          </p>

          <ul className="alttpSettings">
            {SETTINGS.map((setting) => (
              <li
                key={setting.name}
                className={
                  setting.options.length ? 'alttpSetting' : 'alttpSetting alttpSettingWide'
                }
              >
                <div className="alttpSettingName">{setting.name}</div>
                {setting.options.length ? (
                  <div className="alttpPills" aria-label={`${setting.name} options`}>
                    {setting.options.map((option) => (
                      <span key={option} className="alttpPill">
                        {option}
                      </span>
                    ))}
                  </div>
                ) : null}
                <p className="alttpSettingDesc">{setting.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="controls" aria-label="Controls">
        <div className="sectionHeader">
          <h3 className="h3">Controls</h3>
        </div>
        <div className="card">
          <p className="alttpBody alttpBodyFirst">
            You can remap the controls however you like in the settings menu.
          </p>
        </div>
      </section>

      <section className="section" id="getting-started" aria-label="Getting started">
        <div className="sectionHeader">
          <h3 className="h3">Getting started</h3>
        </div>

        <div className="alttpStack">
          <article className="card">
            <h4 className="alttpH4">What you need</h4>

            <div className="alttpNeed">
              <h5 className="alttpH5">ROM</h5>
              <p className="alttpBody alttpBodyFirst">
                A legally obtained <strong>USA</strong> <em>A Link to the Past</em> ROM, named{' '}
                <code>zelda3.sfc</code>.
              </p>
              <p className="alttpHash">
                <span>SHA-256</span>
                66871d66be19ad2c34c927d6b14cd8eb6fc3181965b6e517cb361f7316009cfb
              </p>
            </div>

            <div className="alttpNeed">
              <h5 className="alttpH5">devkitPro</h5>
              <p className="alttpBody alttpBodyFirst">
                <Ext href="https://devkitpro.org/">devkitPro</Ext> with the <strong>nds-dev</strong>{' '}
                group: libnds 2.0, libfat, calico, and ndstool.
              </p>
              <CodeBlock label="macOS and Linux, after the installer">
                {'sudo dkp-pacman -S nds-dev'}
              </CodeBlock>
              <p className="alttpBody">
                On Windows, select nds-dev in the installer, or run{' '}
                <code>dkp-pacman -S nds-dev</code> from a devkitPro shell. <code>build.py</code>{' '}
                looks at <code>DEVKITPRO</code>, then <code>C:\devkitPro</code> or{' '}
                <code>/opt/devkitpro</code>, then <code>~/devkitpro</code>. Set{' '}
                <code>DEVKITPRO</code> if you installed it somewhere else.
              </p>
            </div>

            <div className="alttpNeed">
              <h5 className="alttpH5">Python</h5>
              <p className="alttpBody alttpBodyFirst">
                <Ext href="https://www.python.org/">Python 3.8</Ext> or newer, with{' '}
                <code>Pillow</code> and <code>PyYAML</code>. Homebrew Python blocks a normal{' '}
                <code>pip install</code>, so from the project root:
              </p>
              <CodeBlock label="macOS and Linux">
                {'python3 -m venv .venv\n.venv/bin/pip install Pillow PyYAML'}
              </CodeBlock>
              <CodeBlock label="Windows">{'py -3 -m venv .venv\n.venv\\Scripts\\pip install Pillow PyYAML'}</CodeBlock>
              <p className="alttpBody">
                <code>python3 build.py</code> uses that <code>.venv</code> when the Python on{' '}
                <code>PATH</code> does not already have those libraries. On a very new Python,
                PyYAML may compile from source. On macOS that needs the Xcode command line tools
                (<code>xcode-select --install</code>).
              </p>
            </div>

            <div className="alttpNeed">
              <h5 className="alttpH5">Git</h5>
              <p className="alttpBody alttpBodyFirst">
                Git, to clone the repository and the zelda3 submodule.
              </p>
            </div>

            <div className="alttpNeed">
              <h5 className="alttpH5">Something to run it on</h5>
              <p className="alttpBody alttpBodyFirst">
                <Ext href="https://melonds.melonemu.org/">melonDS</Ext>, or a DS, DS Lite, or DSi
                with a DLDI flashcart or Twilight Menu++.
              </p>
            </div>
          </article>

          <article className="card alttpStep">
            <div className="alttpStepNum" aria-hidden="true">
              1
            </div>
            <div>
              <h4 className="alttpH4">Clone</h4>
              <p className="alttpBody alttpBodyFirst">
                The game logic is in the <code>vendor/zelda3</code> submodule, so clone with
                submodules:
              </p>
              <CodeBlock>
                {'git clone --recurse-submodules https://github.com/JimmyGlasscock/alttp-ds.git\ncd alttp-ds'}
              </CodeBlock>
              <p className="alttpBody">
                If you already cloned without them: <code>git submodule update --init</code>.
              </p>
            </div>
          </article>

          <article className="card alttpStep">
            <div className="alttpStepNum" aria-hidden="true">
              2
            </div>
            <div>
              <h4 className="alttpH4">Add your ROM</h4>
              <p className="alttpBody alttpBodyFirst">
                Copy <code>zelda3.sfc</code> to <code>vendor/zelda3/assets/</code>.
              </p>
            </div>
          </article>

          <article className="card alttpStep">
            <div className="alttpStepNum" aria-hidden="true">
              3
            </div>
            <div>
              <h4 className="alttpH4">Build</h4>
              <p className="alttpBody alttpBodyFirst">From the project root:</p>
              <CodeBlock>{'python3 build.py'}</CodeBlock>
              <p className="alttpBody">
                On Windows, <code>py build.py</code> does the same thing. Either command uses{' '}
                <code>.venv</code> when the default Python is missing Pillow or PyYAML.{' '}
                <code>python3 build.py -j8</code> compiles in parallel. When it finishes,{' '}
                <code>lttp-ds.nds</code> is in the project root. If <code>zelda3.sfc</code> is
                missing, the build stops and does not write that file. Double-clicking{' '}
                <code>build.py</code> on Windows leaves the window open so you can read the error.
              </p>
              <p className="alttpNote">
                If make stops with <code>target pattern contains no &apos;%&apos;</code>, dependency
                files in <code>platform/nds/arm7/build/</code> were written on Windows and still
                contain <code>C:</code> paths. Run <code>python3 build.py clean</code> and build
                again. The ARM7 makefile also drops those files when it sees them.
              </p>
            </div>
          </article>

          <article className="card alttpStep">
            <div className="alttpStepNum" aria-hidden="true">
              4
            </div>
            <div>
              <h4 className="alttpH4">Run</h4>
              <p className="alttpBody alttpBodyFirst">
                <code>lttp-ds.nds</code> is generated with the game data inside it. If that data is
                not from a USA ROM, the bottom screen says <code>Invalid assets file</code> and the
                game waits there.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="saves" aria-label="Saves">
        <div className="sectionHeader">
          <h3 className="h3">Saves</h3>
        </div>
        <div className="card">
          <ul className="alttpList">
            <li>
              On a flashcart the save is an 8 KB <code>.sav</code> in TWiLight Menu++&apos;s save
              location, named after the ROM. It holds the three game slots and your Settings.
              melonDS folder sync still writes <code>lttp-ds.sav</code> in the synced folder.
            </li>
            <li>
              Settings are stored in unused space past the save slots, so they travel with the
              file.
            </li>
            <li>
              A save from an older build at the card root, or in <code>saves/sram.dat</code>, is
              still read and written to that location on the next save.
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="not-included" aria-label="Not included">
        <div className="sectionHeader">
          <h3 className="h3">Not included</h3>
        </div>
        <div className="card">
          <p className="alttpBody alttpBodyFirst">
            These zelda3 extras are left out on purpose, because the DS cannot run them or has no
            use for them.
          </p>
          <ul className="alttpTags">
            {LEFT_OUT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="layout" aria-label="Project layout">
        <div className="sectionHeader">
          <h3 className="h3">Project layout</h3>
        </div>
        <div className="card">
          <CodeBlock>
            {`alttp-ds/
  vendor/zelda3/        game logic, PPU and audio code (git submodule)
  platform/nds/
    source/             ARM9: host, video, HUD, map, save, audio
    arm7/               ARM7: sound-channel driver
    bottom-screen/      HUD artwork (PNG + grit)
    include/            stubs that replace SDL / Opus
    prepare_assets.py   reads vendor/zelda3/assets/zelda3.sfc and stages the game data for the link
  build.py, Makefile    build. The game data is linked into lttp-ds.nds`}
          </CodeBlock>
        </div>
      </section>

      <section className="section" id="credits" aria-label="Credits">
        <div className="sectionHeader">
          <h3 className="h3">Credits</h3>
        </div>
        <div className="card">
          <ul className="alttpList">
            <li>
              <Ext href="https://github.com/snesrev/zelda3">snesrev/zelda3</Ext> and its
              contributors, for the C reimplementation, the asset tool, and the PPU and DSP code
              this port builds on.
            </li>
            <li>
              <Ext href="https://github.com/EstebanPdN/zelda-alttp-3ds">zelda-alttp-3ds</Ext>. I based
              much of my UI off the designs in this port.
            </li>
            <li>
              <Ext href="https://devkitpro.org/">devkitPro</Ext>, libnds, and Calico, for the DS
              toolchain.
            </li>
            <li>
              <Ext href="https://melonds.melonemu.org/">melonDS</Ext>, for the emulator used
              throughout development.
            </li>
          </ul>
        </div>
      </section>

      <section className="section projectFooterSection" aria-label="Project footer">
        <p className="alttpLegal">
          <em>The Legend of Zelda</em> and <em>A Link to the Past</em> are trademarks of Nintendo.
          No Nintendo code or assets are distributed with this project.
        </p>
        <div className="ctaRow projectFooterCta">
          <Link className="btn ghost" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  )
}
