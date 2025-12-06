export default function Home() {
  return (
    <div className="hero-grid">
      <section className="hero">
        <div className="hero-tag">View Transition API + React 19</div>
        <h1 className="hero-title">
          Three ways to animate UI without shipping a huge animation library.
        </h1>
        <p className="hero-subtitle">
          This mini lab shows off route-level view transitions in Next.js, the
          experimental React <code>{`<ViewTransition />`}</code> component, and a
          manual <code>document.startViewTransition()</code> example you can drop
          into any app.
        </p>
      </section>
      <section className="card">
        <h3>What&apos;s inside this demo?</h3>
        <ul>
          <li>
            <strong>Route transitions:</strong> Navigate between pages and let
            Next.js + the browser animate the change.
          </li>
          <li>
            <strong>Shared elements:</strong> Photo thumbnails scale into their
            detail view using <code>view-transition-name</code>.
          </li>
          <li>
            <strong>Manual API:</strong> Call{" "}
            <code>document.startViewTransition()</code> directly for targeted
            transitions.
          </li>
        </ul>
        <div className="pill-row">
          <span className="pill">React 19 RC</span>
          <span className="pill">Next.js 15 app router</span>
          <span className="pill">View Transition API</span>
        </div>
      </section>
    </div>
  );
}
