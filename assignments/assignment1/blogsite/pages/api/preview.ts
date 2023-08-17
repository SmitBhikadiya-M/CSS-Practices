import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    const { secret, slug, fetch } = request.query;

    if (secret !== process.env.SANITY_PREVIEW_SECRET) {
        return new Response('Invalid token', { status: 401 });
    }

    if (!slug) {
        return new Response('Missing slug', { status: 401 });
    }

    response.setHeader('Access-Control-Allow-Origin', '*')

    response.setPreviewData({});

    // response.redirect(`/${slug}`)
    response.writeHead(307, { Location: `/${slug}` })
    response.end();
}