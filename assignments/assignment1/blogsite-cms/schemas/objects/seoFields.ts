import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'seo-tool',
    title: 'SEO',
    type: 'object',
    fields: [
      defineField({
        name: 'focus_keyword',
        title: 'Focus Keyword',
        type: 'string',
      }),
      defineField({
        name: 'focus_synonyms',
        title: 'Focus keyword synonyms',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'seo_title',
        title: 'SEO Title',
        type: 'string',
        description: '60 characters max',
        validation: (Rule) => Rule.max(60).error('Max 60 characters are allowed'),
      }),
      defineField({
        name: 'meta_description',
        title: 'Meta Description',
        type: 'text',
        rows: 10,
        description: '155 characters max',
        validation: (Rule) =>
          Rule.max(155).error('Max 155 characters are allowed'),
      }),
    ],
  });