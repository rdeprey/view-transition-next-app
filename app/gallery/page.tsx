import Link from 'next/link';
import { photos } from '../../data/photos';
import { ViewTransition } from 'react';

export default function GalleryPage() {
  return (
    <div>
      <ViewTransition name='page-title'>
        <h2>Route-level transitions with shared elements</h2>
      </ViewTransition>
      <ViewTransition name='description'>
        <p>
          This page uses the Next.js app router plus the browser{' '}
          <code>View Transition API</code>. Click a photo to navigate to its
          detail page — the thumbnail scales and morphs into the hero image.
        </p>
      </ViewTransition>
      <div className='gallery'>
        {photos.map((p, index) => (
          <Link href={`/photo/${p.id}`} className={`thumb-card`} key={p.id}>
            <ViewTransition name={`photo-image-${p.id}`}>
              <img src={p.thumb} alt={p.title} className='thumb' />
            </ViewTransition>
            <div className='thumb-title'>{p.title}</div>
            <div className='thumb-meta'>Tap to open details</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
