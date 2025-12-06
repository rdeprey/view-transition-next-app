import { photos } from "../data/photos";

export default function GalleryPage() {
  return (
    <div>
      <h2 style={{ viewTransitionName: "page-title" }}>
        Route-level transitions with shared elements
      </h2>
      <p style={{ viewTransitionName: "description" }}>
        This page uses the Next.js pages router plus the browser{" "}
        <code>View Transition API</code>. Click a photo to navigate to its
        detail page — the thumbnail scales and morphs into the hero image.
      </p>
      <div className="gallery">
        {photos.map((p) => (
          <a
            key={p.id}
            href={`/photo/${p.id}`}
            className="thumb-card"
          >
            <img
              src={p.thumb}
              alt={p.title}
              className="thumb"
              style={{
                viewTransitionName: `photo-image-${p.id}`,
              }}
            />
            <div className="thumb-title">{p.title}</div>
            <div className="thumb-meta">Tap to open details</div>
          </a>
        ))}
      </div>
    </div>
  );
}
