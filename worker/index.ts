/**
 * Cloudflare Worker entry point.
 * Static HTML and assets are served directly by the Workers Assets binding.
 * This lightweight endpoint is kept for deployment checks and future extensions.
 */
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/health') {
      return Response.json(
        {
          ok: true,
          site: 'KofukuEki.com',
          locale: 'ja-JP',
          generatedAt: new Date().toISOString(),
        },
        {
          headers: {
            'Cache-Control': 'no-store',
            'X-Content-Type-Options': 'nosniff',
          },
        },
      );
    }

    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  },
};
