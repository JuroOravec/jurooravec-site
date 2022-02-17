import { print as printTypeDef } from 'graphql/language/printer';
import readingTime from 'reading-time';

import type { GridsomeServerPlugin } from '@/typings/gridsome';
import { PostCollectionNode, PostInput } from './postTypes';
import { postSchema } from './postSchema';
import { PostResourceType, PostType } from './postTypes';
import { imageSizeResolver, mimeTypeResolver } from './postResolvers';
import type { CollectionNode } from '../core/coreModel';
import { getPostCanonicalUrl, getPostPersonFullName } from './utils';

export const postGridsomeServerPlugin: GridsomeServerPlugin = (api) => {
  api.loadSource(({ addSchemaTypes, addSchemaResolvers }) => {
    addSchemaTypes([
      // Pass the schema as plain string
      printTypeDef(postSchema),
    ]);

    /** Common resolvers for all Post types */
    addSchemaResolvers({
      // Add helper resolvers to PostResource types
      [PostResourceType.AUDIO]: {
        mimeType: mimeTypeResolver,
      },
      [PostResourceType.IMAGE]: {
        mimeType: mimeTypeResolver,
        size: imageSizeResolver,
      },
      [PostResourceType.VIDEO]: {
        mimeType: mimeTypeResolver,
      },
    });
  });

  /** Common transformation for all Post nodes */
  api.onCreateNode(
    (node: CollectionNode & PostInput): PostCollectionNode | undefined => {
      if (!Object.values(PostType).includes(node.internal.typeName as PostType))
        return;

      const enrichedPost: PostCollectionNode = {
        ...node,
        internal: {
          ...node.internal,
          typeName: node.internal.typeName as PostType,
        },
        canonicalUrl: getPostCanonicalUrl(node),
        authors: node.authors.map((author) => ({
          ...author,
          fullName: getPostPersonFullName(author),
        })),
        contributors: node.contributors.map((contributor) => ({
          ...contributor,
          fullName: getPostPersonFullName(contributor),
        })),
        datePublished: node.datePublished as any as Date,
        dateModified: node.dateModified as any as Date,
        dateExpired: node.dateModified as any as Date | null,
        timeToRead: readingTime(node.content || ''),
      };

      return enrichedPost;
    },
  );
};
