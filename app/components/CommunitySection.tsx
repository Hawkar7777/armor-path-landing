import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";

export default function CommunitySection() {
  return (
    <section id="community" className="w-full text-center py-24">
      <h2 className="text-4xl font-bold mb-4 text-slate-200">
        Join the Command Center
      </h2>
      <p className="text-lg text-slate-400 mb-10">
        Follow development and chat with us!
      </p>
      <div className="flex justify-center items-center gap-8">
        {/* Discord Icon with brand color */}
        <a
          href="#" // <-- Update with your real Discord link
          aria-label="Join our Discord"
        >
          <FaDiscord className="text-4xl text-[#5865F2] hover:opacity-80 transition-opacity duration-200" />
        </a>

        {/* YouTube Icon with brand color */}
        <a
          href="#" // <-- Update with your real YouTube link
          aria-label="Watch us on YouTube"
        >
          <FaYoutube className="text-4xl text-[#FF0000] hover:opacity-80 transition-opacity duration-200" />
        </a>

        {/* TikTok Icon with brand color */}
        <a
          href="#" // <-- Update with your real TikTok link
          aria-label="Follow us on TikTok"
        >
          <FaTiktok className="text-4xl text-white hover:opacity-80 transition-opacity duration-200" />
        </a>
      </div>
    </section>
  );
}
