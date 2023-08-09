import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { getDefaultDocumentNode } from './desk/node'

export default defineConfig({
  name: 'default',
  title: 'blogsite-cms',

  projectId: 'tt6j5gd8',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode
    }), 
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
})
