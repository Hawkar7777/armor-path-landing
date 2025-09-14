"use server";

import { revalidatePath } from "next/cache";
import { addSubscriber, incrementLikes } from "./dataService";

/**
 * Server Action to handle adding a new email subscriber.
 * Returns a status object.
 */
export const addSubscriberAction = async (formData: FormData) => {
  const email = formData.get("email") as string;

  // Use a try-catch block for better error handling
  try {
    const error = await addSubscriber(email);

    if (error) {
      // Handle specific, known errors like 'duplicate key'
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email is already on the list!",
        };
      }
      // Handle other database errors
      throw new Error(error.message);
    }

    revalidatePath("/");
    return {
      success: true,
      message: "You're on the list! We'll keep you updated.",
    };
  } catch (e: any) {
    return {
      success: false,
      message: e.message || "An unexpected error occurred.",
    };
  }
};

/**
 * Server Action to handle incrementing the like count.
 */
export const handleLikeAction = async () => {
  await incrementLikes();
  revalidatePath("/");
};
