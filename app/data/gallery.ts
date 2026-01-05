export type GalleryItem =
  | {
      id: number;
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      id: number;
      type: "video";
      src: string;
      poster?: string;
    };

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    src: "/vrindavancity.jpeg",
    alt: "Certificate of Recognition",
  },
  {
    id: 2,
    type: "image",
    src: "/dholera-master-plan.png",
    alt: "Certificate of Dignity Award",
  },
  {
    id: 3,
    type: "video",
    src: "/vid1.mp4",
    poster: "/vrindavancity.jpeg",
  },
  {
    id: 4,
    type: "video",
    src: "/vid1.mp4",
    poster: "/vrindavancity.jpeg",
  },
  {
    id: 5,
    type: "video",
    src: "/vid1.mp4",
    poster: "/vrindavancity.jpeg",
  },
  {
    id: 6,
    type: "image",
    src: "/location.jpeg",
    alt: "Asia Excellence Award",
  },
];
