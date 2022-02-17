import Vssue from 'vssue';
import GithubV3 from '@vssue/api-github-v3';
import 'vssue/dist/vssue.css';

import type { GridsomeClientPlugin } from '@/typings/gridsome';

export const vssueGridsomeClientPlugin: GridsomeClientPlugin = (Vue) => {
  // See https://vssue.js.org/guide/gridsome.html#usage
  const vssueConfig = {
    api: GithubV3,
    owner: 'JuroOravec',
    repo: 'jurooravec-site',
    clientId: '6fbba9d9faf41c4b7d43',
    clientSecret: '53ba4ea3ab57d829e2d4b2778d2a83d4b054e185',
    perPage: 20,
    autoCreateIssue: true,
  };

  Vue.use(Vssue, vssueConfig);
};
