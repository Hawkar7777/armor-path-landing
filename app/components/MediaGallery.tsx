"use client"; // This component now needs to be a Client Component

import { useState } from "react";
import Image from "next/image"; // Use Next.js Image for better performance
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Define the type for our media items
type MediaItem = {
  id: string;
  type: "video" | "image";
  url: string;
  order: number;
};

export default function MediaGallery({ media }: { media: MediaItem[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media || media.length === 0) return null;

  // Filter out only the images for the lightbox gallery
  const images = media
    .filter((item) => item.type === "image")
    .map((item) => ({ src: item.url }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  // Keep track of the image index for the onClick handler
  let imageIndex = -1;

  return (
    <>
      <section id="media" className="w-full py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-200">
          Battle Footage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.map((item) => {
            if (item.type === "video") {
              return (
                <div
                  key={item.id}
                  className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-800"
                >
                  <iframe
                    src={item.url}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Armor Path Gameplay"
                  ></iframe>
                </div>
              );
            } else {
              // Increment the index only for images
              imageIndex++;
              const currentIndexInImagesArray = imageIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleImageClick(currentIndexInImagesArray)}
                  className="aspect-video bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-800 hover:border-lime-500/50 hover:scale-105 transition-all duration-300 group relative block"
                  aria-label="View image in full screen"
                >
                  <Image
                    src={item.url}
                    alt="Armor Path Screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </button>
              );
            }
          })}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={currentIndex}
        styles={{ container: { backgroundColor: "rgba(15, 23, 42, .9)" } }}
      />
    </>
  );
}
