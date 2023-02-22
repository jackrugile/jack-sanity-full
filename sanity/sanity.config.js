import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { dashboardTool } from '@sanity/dashboard';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';

export default defineConfig({
  name: 'default',
  title: 'Jack Sanity Full',

  projectId: '603awqen',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'Netlify',
            sites: [
              {
                title: 'Jack Sanity Full - Netlify',
                apiId: '6447ebd1-6f6c-4959-8f6d-57524b2cabf4',
                buildHookId: '63f5bab8cde1064772bce6cd',
                name: 'jack-sanity-full',
                url: 'https://jack-sanity-full.netlify.app',
              }
            ]
        })
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
});
