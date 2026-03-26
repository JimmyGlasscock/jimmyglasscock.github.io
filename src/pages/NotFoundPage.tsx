import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="container pageContent" aria-label="Not found">
      <section className="card">
        <h2 className="h2">Page not found</h2>
        <p className="p muted">That URL doesn’t exist on this site.</p>
        <div className="ctaRow">
          <Link className="btn primary" to="/">
            Go home
          </Link>
          <Link className="btn ghost" to="/projects">
            View projects
          </Link>
        </div>
      </section>
    </main>
  )
}

