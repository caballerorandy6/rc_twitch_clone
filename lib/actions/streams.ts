"use server";

// Server Actions for stream operations

export async function getStreams() {
  // Fetch streams from Twitch API
  // Use Next.js cache: 'force-cache' or revalidate

  return [];
}

export async function getStreamByChannel(channelId: string) {
  // Fetch single stream by channel ID

  return null;
}

export async function getStreamsByCategory(categorySlug: string) {
  // Fetch streams filtered by category

  return [];
}

export async function getFeaturedStreams() {
  // Fetch featured/recommended streams

  return [];
}
