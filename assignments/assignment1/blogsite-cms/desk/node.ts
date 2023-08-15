import Iframe from 'sanity-plugin-iframe-pane';
import { SEOPane } from 'sanity-plugin-seo-pane'
import resolveProductionUrl from '../utills/resolveUrl';
export const PREVIEWABLE_SCHEMA_TYPES = ['post'];

export const getDefaultDocumentNode = (S: any, { schemaType } : any) => {
  const views = [
    S.view.form()
  ];

  if (PREVIEWABLE_SCHEMA_TYPES.includes(schemaType)) {
    views.push(S.view
      .component(SEOPane)
      .options({
        keywords: `seo.keywords`,
        synonyms: `seo.synonyms`,
        url: (doc: any) => resolveProductionUrl(doc),

      })
      .title('SEO'))
    views.push(
      S.view
        .component(Iframe)
        .options({
          url: (doc: any) => resolveProductionUrl(doc),
        })
        .title('Preview')
    );
  }

  return S.document().views(views);
};