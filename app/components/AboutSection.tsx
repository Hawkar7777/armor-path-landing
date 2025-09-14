import { FaGooglePlay, FaApple, FaSteam } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="w-full text-center py-24">
      {/* Game Description */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-200">
          A New Breed of Tower Defense
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed">
          Prepare for a fresh take on the classic tower defense genre. In Armor
          Path, strategic placement is everything. You&rsquo;ll command a
          powerful arsenal of upgradable turrets, each with unique abilities, to
          fend off relentless waves of enemies. Plan your defense, adapt to new
          threats, and unleash devastating combos to protect your territory.
        </p>
      </div>

      {/* Platform Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8">
        {/* Google Play Card */}
        <div className="flex-1 p-8 bg-slate-800 border border-slate-700 rounded-lg flex flex-col items-center justify-center hover:border-lime-500/50 hover:scale-105 transition-all duration-300">
          <FaGooglePlay className="text-6xl text-slate-400 mb-4" />
          <h3 className="text-2xl font-bold text-slate-200">Google Play</h3>
          <p className="mt-2 text-lime-400 font-semibold">Coming Soon</p>
        </div>

        {/* Apple App Store Card */}
        <div className="flex-1 p-8 bg-slate-800 border border-slate-700 rounded-lg flex flex-col items-center justify-center hover:border-lime-500/50 hover:scale-105 transition-all duration-300">
          <FaApple className="text-6xl text-slate-400 mb-4" />
          <h3 className="text-2xl font-bold text-slate-200">App Store</h3>
          <p className="mt-2 text-lime-400 font-semibold">Coming Soon</p>
        </div>

        {/* Steam Card */}
        <div className="flex-1 p-8 bg-slate-800 border border-slate-700 rounded-lg flex flex-col items-center justify-center hover:border-lime-500/50 hover:scale-105 transition-all duration-300">
          <FaSteam className="text-6xl text-slate-400 mb-4" />
          <h3 className="text-2xl font-bold text-slate-200">Steam</h3>
          <p className="mt-2 text-lime-400 font-semibold">Coming Soon</p>
        </div>
      </div>
    </section>
  );
}
