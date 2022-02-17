import { Maybe } from '@/__generated__/graphql';
import { initMetaTagsList } from './metaTags';

export interface CreateTwitterSummaryCardMetaTagsArgs {
  orgTwitterHandle: Maybe<string>;
  title: Maybe<string>;
  description: Maybe<string>;
  imageUrl: Maybe<string>;
  imageAlt: Maybe<string>;
}

/**
 * Create description of meta tags for displaying the webpage
 * as a Summary Card on Twitter.
 *
 * See https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary
 * Validate at https://cards-dev.twitter.com/validator
 */
export const createTwitterSummaryCardMetaTags = ({
  orgTwitterHandle,
  title,
  description,
  imageUrl,
  imageAlt,
}: CreateTwitterSummaryCardMetaTagsArgs) => {
  const { metaTags, addKVMetaTag } = initMetaTagsList();

  addKVMetaTag('twitter:card', 'summary');
  addKVMetaTag('twitter:site', orgTwitterHandle?.length ? orgTwitterHandle : null);
  addKVMetaTag('twitter:title', title);
  addKVMetaTag('twitter:description', description);
  addKVMetaTag('twitter:image', imageUrl);
  addKVMetaTag('twitter:image:alt', imageAlt);

  return metaTags;
};

export interface CreateTwitterLargeImageSummaryCardMetaTagsArgs {
  orgTwitterHandle: Maybe<string>;
  userTwitterHandle: Maybe<string>;
  title: Maybe<string>;
  description: Maybe<string>;
  imageUrl: Maybe<string>;
  imageAlt: Maybe<string>;
}

/**
 * Create description of meta tags for displaying the webpage
 * as a Summary Card with Large Image on Twitter.
 *
 * See https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
 * Validate at https://cards-dev.twitter.com/validator
 */
export const createTwitterLargeImageSummaryCardMetaTags = ({
  orgTwitterHandle,
  userTwitterHandle,
  title,
  description,
  imageUrl,
  imageAlt,
}: CreateTwitterLargeImageSummaryCardMetaTagsArgs) => {
  const { metaTags, addKVMetaTag } = initMetaTagsList();

  addKVMetaTag('twitter:card', 'summary_large_image');
  addKVMetaTag('twitter:site', orgTwitterHandle?.length ? orgTwitterHandle : null);
  addKVMetaTag('twitter:creator', userTwitterHandle?.length ? userTwitterHandle : null);
  addKVMetaTag('twitter:title', title);
  addKVMetaTag('twitter:description', description);
  addKVMetaTag('twitter:image', imageUrl);
  addKVMetaTag('twitter:image:alt', imageAlt);

  return metaTags;
};

export interface CreateTwitterPlayerCardMetaTagsArgs {
  orgTwitterHandle: Maybe<string>;
  title: Maybe<string>;
  description: Maybe<string>;
  videoOrAudioUrl: Maybe<string>;
  videoOrAudioWidth: Maybe<number>;
  videoOrAudioHeight: Maybe<number>;
  imageUrl: Maybe<string>;
  imageAlt: Maybe<string>;
}

/**
 * Create description of meta tags for displaying the webpage
 * as a Player Card on Twitter.
 *
 * See https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card
 * Validate at https://cards-dev.twitter.com/validator
 */
export const createTwitterPlayerCardMetaTags = ({
  orgTwitterHandle,
  title,
  description,
  videoOrAudioUrl,
  videoOrAudioWidth,
  videoOrAudioHeight,
  imageUrl,
  imageAlt,
}: CreateTwitterPlayerCardMetaTagsArgs) => {
  const { metaTags, addKVMetaTag } = initMetaTagsList();

  addKVMetaTag('twitter:card', 'player');
  addKVMetaTag('twitter:site', orgTwitterHandle?.length ? orgTwitterHandle : null);
  addKVMetaTag('twitter:title', title);
  addKVMetaTag('twitter:description', description);
  addKVMetaTag('twitter:player', videoOrAudioUrl);
  addKVMetaTag('twitter:player:width', videoOrAudioWidth ? `${videoOrAudioWidth}` : null);
  addKVMetaTag('twitter:player:height', videoOrAudioHeight ? `${videoOrAudioHeight}` : null);
  addKVMetaTag('twitter:image', imageUrl);
  addKVMetaTag('twitter:image:alt', imageAlt);

  return metaTags;
};
