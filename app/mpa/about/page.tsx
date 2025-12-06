export default function MPAAboutPage() {
  return (
    <div className='mpa-detail'>
      <a href='/mpa' className='back'>
        <span aria-hidden='true'>←</span> Back to MPA demo
      </a>

      <div
        className='mpa-hero mpa-hero--about'
        style={{ viewTransitionName: 'hero-image' }}
      />

      <h2 style={{ viewTransitionName: 'page-title' }}>About This Demo</h2>

      <p style={{ viewTransitionName: 'description' }}>
        Cross-document view transitions work across full page loads. When you clicked
        the link to get here, the browser:
      </p>

      <ol className='mpa-list'>
        <li>Captured a snapshot of the old page</li>
        <li>Loaded this new page completely</li>
        <li>Captured a snapshot of the new page</li>
        <li>Animated between the two snapshots</li>
      </ol>

      <p>
        Elements with matching <code>view-transition-name</code> values (like the
        image above) morph smoothly between their positions on each page.
      </p>

      <div className='mpa-note'>
        <strong>Browser support:</strong> Cross-document view transitions require
        Chrome 126+ or Edge 126+. Safari and Firefox don&apos;t support this yet.
      </div>
    </div>
  );
}
