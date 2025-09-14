import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MediaGallery from "./components/MediaGallery";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";
// Import the new view functions
import {
  getMedia,
  getSubscriberCount,
  getLikes,
  getViews,
  incrementViews,
} from "@/app/lib/dataService";

export const revalidate = 0;

const SectionSeparator = () => (
  <hr className="w-full max-w-5xl mx-auto border-t border-slate-800" />
);

export default async function Home() {
  // Increment the view count on every page load
  await incrementViews();

  // Fetch all data in parallel after incrementing
  const [media, count, likes, views] = await Promise.all([
    getMedia(),
    getSubscriberCount(),
    getLikes(),
    getViews(), // Fetch the new view count
  ]);

  return (
    <div className="relative">
      <main className="flex flex-col items-center pb-40">
        <div className="container mx-auto px-4">
          {/* Pass all the data down to the HeroSection */}
          <HeroSection
            initialCount={count}
            initialLikes={likes}
            initialViews={views}
          />
          <SectionSeparator />
          <AboutSection />
          <SectionSeparator />
          <MediaGallery media={media} />
          <SectionSeparator />
          <CommunitySection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
