import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  // Simulate heavy compute time (e.g. Scramjet scraping YouTube and querying an LLM)
  await new Promise(resolve => setTimeout(resolve, 2500));

  return new Response(JSON.stringify({
    threads: [
      [
        "1/ Most creators think growing on YouTube requires $10,000 in camera gear.\n\nThey're wrong.\n\nHere is the exact zero-cost framework used by MrBeast to get his first 10k subs: 🧵",
        "2/ The Hook is everything.\nIf you don't capture attention in the first 3 seconds, the rest of the video doesn't matter."
      ],
      [
        "The fastest way to burn out? Trying to be everywhere.\n\nPick ONE platform. Master it. Then use automation to syndicate everywhere else.",
        "Tools like Scramjet can automatically turn your 1 YouTube video into 5 Twitter threads, 3 LinkedIn posts, and an SEO blog article."
      ],
      [
        "Unpopular opinion:\n\nYour lighting doesn't matter if your storytelling sucks.\n\nHere are 3 storytelling frameworks you can steal today:",
        "1. The Hero's Journey\n2. The 'Before/After' Bridge\n3. The Contrarian Hook"
      ]
    ]
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
