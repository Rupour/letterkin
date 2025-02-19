import { writable } from 'svelte/store';

export const emails = writable([]);
export const selectedEmail = writable(null);
export const currentFolder = writable('inbox');

// src/routes/api/auth/+server.js
export async function POST({ request }) {
  // This would handle the OAuth flow with Microsoft
  // We'll implement this in the next step
  return new Response(JSON.stringify({ status: 'success' }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
