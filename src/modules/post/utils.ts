import { metadata } from '../config/plugins/metadata.gridsome.config';
import type { PostCollectionNode, PostCollectionNodePerson } from './postTypes';

export const getUrlFromPath = (path: string) => {
  return `${metadata.siteUrl}${path}`;
};

/** Get the canonical URL for a given Post */
export const getPostCanonicalUrl = (post: Pick<PostCollectionNode, 'path'>) => {
  return getUrlFromPath(post.path);
};

/** Get the full name for a given PostPerson */
export const getPostPersonFullName = (
  postPerson: Pick<PostCollectionNodePerson, 'firstName' | 'lastName'>,
): string => {
  return `${postPerson.firstName} ${postPerson.lastName}`;
};
