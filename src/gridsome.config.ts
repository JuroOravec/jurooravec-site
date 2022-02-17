import 'module-alias/register';

import type { GridsomeConfig } from './typings/gridsome';
import { mergeConfigs } from './modules/config/utils/mergeConfigs';

// Common config
import { metadata, metadataConfigGridsome } from './modules/config/plugins/metadata.gridsome.config'; // prettier-ignore
import { vueConfigGridsome } from './modules/config/plugins/vue.gridsome.config'; // prettier-ignore
import { analyticsConfigGridsome } from './modules/config/plugins/analytics.gridsome.config'; // prettier-ignore
import { discoverabilityConfigGridsome } from './modules/config/plugins/discoverability.gridsome.config'; // prettier-ignore
import { markdownConfigGridsome } from './modules/config/plugins/markdown.gridsome.config'; // prettier-ignore
import { perfConfigGridsome } from './modules/config/plugins/perf.gridsome.config'; // prettier-ignore
import { pwaConfigGridsome } from './modules/config/plugins/pwa.gridsome.config'; // prettier-ignore
import { seoConfigGridsome } from './modules/config/plugins/seo.gridsome.config'; // prettier-ignore
// Module-specific config
import { postBlogGridsomeConfig } from './modules/postBlog/postBlog.gridsome.config'; // prettier-ignore
import { postProjectGridsomeConfig } from './modules/postProject/postProject.gridsome.config'; // prettier-ignore

// See https://gridsome.org/docs/config/
const gridsomeConfig: GridsomeConfig = {
  siteName: metadata.siteName,
  siteUrl: metadata.siteUrl,
  siteDescription: metadata.siteDescription,
  // pathPrefix: '',
  // host: 'localhost',
  // port: 8080,
  outputDir: 'dist/public',
  icon: {
    favicon: metadata.icon.favicon.png,
    touchicon: metadata.icon.touchicon,
  },
  metadata,
  templates: {},
  transformers: {},
};

// See https://gridsome.org/docs/config/
const mergedConfig = mergeConfigs(
  // Note: order is important
  gridsomeConfig,
  metadataConfigGridsome,
  vueConfigGridsome,
  markdownConfigGridsome,
  // pwaConfigGridsome,
  analyticsConfigGridsome,
  postBlogGridsomeConfig,
  postProjectGridsomeConfig,
  discoverabilityConfigGridsome,
  seoConfigGridsome,
  perfConfigGridsome,
);

// For compatiblity with commonJS we have to export the top level .ts file
// using `module.exports` instead of `export default`
module.exports = mergedConfig;
