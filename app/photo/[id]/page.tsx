import { photos } from '../../../data/photos';
import Link from 'next/link';
import { ViewTransition } from 'react';

type Photo = {
  id: number;
  title: string;
  description: string;
  thumb: string;
  full: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return photos.map((photo) => ({
    id: String(photo.id),
  }));
}

export default async function PhotoDetailPage({ params }: Props) {
  const { id } = await params;
  const photo = photos.find((p) => p.id === Number(id)) || null;

  if (!photo) {
    return (
      <div className='detail'>
        <p>Photo not found.</p>
        <ViewTransition name='back-button'>
          <Link href='/gallery' className='back'>
            ← Back to gallery
          </Link>
        </ViewTransition>
      </div>
    );
  }

  return (
    <div className='detail'>
      <ViewTransition name='back-button'>
        <Link href='/gallery' className='back'>
          <span aria-hidden='true'>←</span> Back to gallery
        </Link>
      </ViewTransition>

      <ViewTransition name={`photo-image-${photo.id}`}>
        <img src={photo.full} alt={photo.title} className='full' />
      </ViewTransition>

      <ViewTransition name='page-title'>
        <h2>{photo.title}</h2>
      </ViewTransition>
      <ViewTransition name='description'>
        <p>{photo.description}</p>
      </ViewTransition>
    </div>
  );
}
