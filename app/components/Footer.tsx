import { FaSteam, FaGooglePlay, FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 py-6 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        {/* Hiding the title on extra-small screens to save space */}
        <h3 className="hidden sm:block text-xl font-bold mb-4 text-slate-300">
          Coming Soon To
        </h3>
        <div className="flex justify-center items-center gap-10">
          <a href="#" aria-label="Coming soon to Steam">
            <FaSteam className="text-4xl text-slate-500 hover:text-white transition-colors duration-200" />
          </a>
          <a href="#" aria-label="Coming soon to Google Play">
            <FaGooglePlay className="text-3xl text-slate-500 hover:text-white transition-colors duration-200" />
          </a>
          <a href="#" aria-label="Coming soon to the App Store">
            <FaApple className="text-4xl text-slate-500 hover:text-white transition-colors duration-200" />
          </a>
        </div>
        {/* Hiding the copyright on extra-small screens to save space */}
        <div className="hidden sm:block mt-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Single Developer.
          </p>
        </div>
      </div>
    </footer>
  );
}
