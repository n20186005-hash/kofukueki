/**
 * Cloudflare Worker entry point.
 * Serves static assets via the Workers Assets binding and normalizes the
 * canonical hostname: https://kofukueki.com (apex, HTTPS only).
 *
 * - http://  -> 308 https://
 * - www.kofukueki.com -> 308 https://kofukueki.com
 *
 * These domain-level normalizations cannot be expressed with Workers Static
 * Assets _redirects, so they are handled here before falling through to ASSETS.
 */
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const proto = request.headers.get('x-forwarded-proto') ?? 'https';
    if (proto === 'http') {
      return Response.redirect(`https://${url.hostname}${url.pathname}${url.search}`, 308);
    }

    if (url.hostname.startsWith('www.')) {
      return Response.redirect(`https://${url.hostname.slice(4)}${url.pathname}${url.search}`, 308);
    }

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

    return env.ASSETS.fetch(request);
  },
};

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}
