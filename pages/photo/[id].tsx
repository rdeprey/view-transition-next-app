import { GetServerSideProps } from "next";
import { photos } from "../../data/photos";

type Photo = {
  id: number;
  title: string;
  description: string;
  thumb: string;
  full: string;
};

type Props = {
  photo: Photo | null;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const id = Number(context.params?.id);
  const photo = photos.find((p) => p.id === id) || null;
  return { props: { photo } };
};

export default function PhotoDetailPage({ photo }: Props) {
  if (!photo) {
    return (
      <div className="detail">
        <p>Photo not found.</p>
        <a href="/gallery" className="back">
          ← Back to gallery
        </a>
      </div>
    );
  }

  return (
    <div className="detail">
      <a
        href="/gallery"
        className="back"
        style={{ viewTransitionName: "back-button" }}
      >
        <span aria-hidden="true">←</span> Back to gallery
      </a>

      <img
        src={photo.full}
        alt={photo.title}
        className="full"
        style={{
          viewTransitionName: `photo-image-${photo.id}`,
        }}
      />

      <h2 style={{ viewTransitionName: "page-title" }}>{photo.title}</h2>
      <p style={{ viewTransitionName: "description" }}>{photo.description}</p>
    </div>
  );
}
