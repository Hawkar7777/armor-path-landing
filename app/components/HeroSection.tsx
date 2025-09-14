"use client";

import { useRef } from "react";
import { addSubscriberAction, handleLikeAction } from "@/app/lib/actions";
import { FaHeart, FaEye } from "react-icons/fa";
import { useLikeButton } from "@/app/lib/hooks/useLikeButton";
import { toast } from "sonner"; // Import the toast function

export default function HeroSection({
  initialCount,
  initialLikes,
  initialViews,
}: {
  initialCount: number;
  initialLikes: number;
  initialViews: number;
}) {
  const { hasLiked, markAsLiked } = useLikeButton();
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form

  // This client-side function calls the server action
  const handleEmailSubmit = async (formData: FormData) => {
    const response = await addSubscriberAction(formData);

    if (response.success) {
      toast.success(response.message);
      formRef.current?.reset(); // Clear the form on success
    } else {
      toast.error(response.message);
    }
  };

  return (
    <section id="home" className="w-full text-center py-24 md:py-32">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400">
        Armor Path
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-400">
        Forge Your Path. Crush the Convoy.
      </p>

      {/* Email Form - now calls our client-side handler */}
      <form
        ref={formRef}
        action={handleEmailSubmit}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full sm:w-auto flex-grow px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-lime-500 transition-all duration-200"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-lime-500 text-slate-900 rounded-md font-bold hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-lime-500 transition-colors duration-200 whitespace-nowrap flex-shrink-0"
        >
          Notify Me on Launch
        </button>
      </form>

      {/* Subscriber Counter */}
      <p className="mt-8 text-xl font-semibold text-slate-300">
        <span className="text-lime-400 font-bold">{initialCount}</span>{" "}
        Commanders are ready for deployment!
      </p>

      {/* Like and View Counters */}
      <div className="mt-8 flex justify-center items-center gap-6">
        <form
          action={async () => {
            markAsLiked();
            await handleLikeAction();
          }}
        >
          <button
            type="submit"
            disabled={hasLiked}
            className="flex items-center gap-3 px-5 py-2 border border-slate-700 rounded-full text-slate-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:bg-slate-800 enabled:hover:border-slate-600"
          >
            <FaHeart className={hasLiked ? "text-pink-500" : "text-pink-500"} />
            <span className="font-semibold">{initialLikes}</span>
          </button>
        </form>
        <div className="flex items-center gap-3 text-slate-300">
          <FaEye className="text-slate-500" />
          <span className="font-semibold">{initialViews}</span>
        </div>
      </div>
    </section>
  );
}
