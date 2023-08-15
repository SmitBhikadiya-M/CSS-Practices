import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { getDefaultDocumentNode } from './desk/node'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'blogsite-cms',

  projectId: 'tt6j5gd8',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode
    }), 
    visionTool(),
    unsplashImageAsset()
  ],
  
  schema: {
    types: schemaTypes,
  },
})
