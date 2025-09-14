import { supabase } from "./supabaseClient";

/**
 * Fetches all media items from the gallery, ordered correctly.
 * @returns An array of media items, or an empty array on error.
 */
export const getMedia = async () => {
  const { data, error } = await supabase
    .from("media_gallery")
    .select("*")
    .order("order");

  if (error) {
    console.error("Error fetching media:", error.message);
    return [];
  }

  return data;
};

/**
 * Fetches the total count of subscribers using the secure RPC function.
 * @returns The number of subscribers, or 0 on error.
 */
export const getSubscriberCount = async () => {
  const { data, error } = await supabase.rpc("get_subscriber_count");

  if (error) {
    console.error("Error fetching subscriber count:", error.message);
    return 0;
  }

  return data;
};

/**
 * Adds a new email subscriber to the database.
 * @param email The email address to add.
 * @returns The error object from Supabase, which is null on success.
 */
export const addSubscriber = async (email: string) => {
  if (!email || !email.includes("@")) {
    return {
      message: "Invalid email provided.",
      details: "",
      hint: "",
      code: "",
    };
  }

  const { error } = await supabase.from("email_subscribers").insert({ email });
  return error;
};

/**
 * Fetches the current number of likes from the site_stats table.
 * @returns The number of likes, or 0 on error.
 */
export const getLikes = async () => {
  const { data, error } = await supabase
    .from("site_stats")
    .select("value")
    .eq("name", "likes")
    .single();

  if (error) {
    console.error("Error fetching likes:", error.message);
    return 0;
  }

  return data.value;
};

/**
 * Increments the like count by calling the secure RPC function.
 */
export const incrementLikes = async () => {
  const { error } = await supabase.rpc("increment_likes");

  if (error) {
    console.error("Error incrementing likes:", error.message);
  }
};

// --- NEW FUNCTIONS ADDED BELOW ---

/**
 * Fetches the current number of page views.
 * @returns The number of views, or 0 on error.
 */
export const getViews = async () => {
  const { data, error } = await supabase
    .from("site_stats")
    .select("value")
    .eq("name", "views")
    .single();

  if (error) {
    console.error("Error fetching views:", error.message);
    return 0;
  }
  return data.value;
};

/**
 * Increments the view count by calling the secure RPC function.
 */
export const incrementViews = async () => {
  const { error } = await supabase.rpc("increment_views");

  if (error) {
    console.error("Error incrementing views:", error.message);
  }
};
