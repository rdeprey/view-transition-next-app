export default function MPAPage() {
  return (
    <div className='mpa-wrapper'>
      <h2 style={{ viewTransitionName: 'page-title' }}>
        Cross-Document View Transitions (MPA)
      </h2>
      <p style={{ viewTransitionName: 'description' }}>
        This example uses <code>@view-transition {'{'} navigation: auto {'}'}</code>{' '}
        in CSS to enable transitions between full page navigations. No JavaScript
        required — just regular links and CSS.
      </p>

      <div className='mpa-cards'>
        <a href='/view-transition-next-app/mpa/about' className='mpa-card'>
          <div
            className='mpa-card-image mpa-card-image--about'
            style={{ viewTransitionName: 'hero-image' }}
          />
          <div className='mpa-card-content'>
            <h3>About Page</h3>
            <p>Learn more about this demo</p>
          </div>
        </a>

        <a href='/view-transition-next-app/mpa/features' className='mpa-card'>
          <div
            className='mpa-card-image mpa-card-image--features'
            style={{ viewTransitionName: 'features-image' }}
          />
          <div className='mpa-card-content'>
            <h3>Features Page</h3>
            <p>See what view transitions can do</p>
          </div>
        </a>
      </div>

      <div className='mpa-note'>
        <strong>How it works:</strong> These are regular <code>&lt;a&gt;</code> links,
        not React Router or Next.js client-side navigation. The browser handles the
        transition automatically because of the <code>@view-transition</code> CSS rule.
        Shared <code>view-transition-name</code> values create morphing effects between pages.
      </div>
    </div>
  );
}
