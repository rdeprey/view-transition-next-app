export default function MPAFeaturesPage() {
  return (
    <div className='mpa-detail'>
      <a href='/view-transition-next-app/mpa' className='back'>
        <span aria-hidden='true'>←</span> Back to MPA demo
      </a>

      <div
        className='mpa-hero mpa-hero--features'
        style={{ viewTransitionName: 'features-image' }}
      />

      <h2 style={{ viewTransitionName: 'page-title' }}>View Transition Features</h2>

      <p style={{ viewTransitionName: 'description' }}>
        The <code>@view-transition</code> CSS at-rule unlocks these capabilities:
      </p>

      <div className='mpa-features'>
        <div className='mpa-feature'>
          <h4>Zero JavaScript</h4>
          <p>Transitions happen automatically on navigation — no code needed.</p>
        </div>

        <div className='mpa-feature'>
          <h4>Shared Elements</h4>
          <p>Match elements by <code>view-transition-name</code> to morph between pages.</p>
        </div>

        <div className='mpa-feature'>
          <h4>CSS Control</h4>
          <p>Customize timing, easing, and animations with pseudo-elements.</p>
        </div>

        <div className='mpa-feature'>
          <h4>Works Everywhere</h4>
          <p>Any page navigation — links, form submissions, even back/forward.</p>
        </div>
      </div>

      <div className='mpa-note'>
        <strong>Tip:</strong> Use <code>::view-transition-old(root)</code> and{' '}
        <code>::view-transition-new(root)</code> to customize the default crossfade.
      </div>
    </div>
  );
}
