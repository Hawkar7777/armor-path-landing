"use client"; // This hook will only run in the browser

import { useState, useEffect } from "react";

export function useLikeButton() {
  const [hasLiked, setHasLiked] = useState(false);

  // This effect runs once when the component loads on the client
  useEffect(() => {
    // Check if the user has already liked the page
    if (localStorage.getItem("armorPathLiked") === "true") {
      setHasLiked(true);
    }
  }, []); // The empty array means this only runs on mount

  const markAsLiked = () => {
    // Set the flag in localStorage and update the state
    localStorage.setItem("armorPathLiked", "true");
    setHasLiked(true);
  };

  return { hasLiked, markAsLiked };
}
