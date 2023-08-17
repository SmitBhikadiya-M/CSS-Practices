export default function resolveProductionUrl(doc: any) {

    const baseUrl = `${process.env.SANITY_STUDIO_FRONTEND_URL}`;
    const previewUrl = new URL(baseUrl);
    previewUrl.pathname = `/api/preview`;
    previewUrl.searchParams.append(`secret`, process.env.SANITY_STUDIO_PREVIEW_SECRET || '');
    previewUrl.searchParams.append(`slug`, `${doc.slug?.current ?? ''}`);
  
    return previewUrl.toString();
  }