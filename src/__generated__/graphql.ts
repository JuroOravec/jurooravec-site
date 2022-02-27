/* eslint-disable */
/* This file is autogenerated, see codegen.yml */

import { GridsomeImage } from '@/typings/gridsome'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  File: any;
  Image: GridsomeImage;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type GqlBelongsToFilterInput = {
  id?: InputMaybe<GqlIDQueryOperatorInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
  typeName?: InputMaybe<GqlTypeNameQueryOperatorInput>;
};

export type GqlBlogPost = GqlNode & GqlPost & {
  __typename?: 'BlogPost';
  audios: Array<GqlPostAudio>;
  authors: Array<GqlPostPerson>;
  belongsTo?: Maybe<GqlNodeBelongsTo>;
  canonicalUrl: Scalars['String'];
  content: Scalars['String'];
  contributors: Array<GqlPostPerson>;
  dateExpired?: Maybe<Scalars['Date']>;
  dateModified?: Maybe<Scalars['Date']>;
  datePublished?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  fileInfo: GqlRemarkFileInfo;
  headings?: Maybe<Array<Maybe<GqlVueRemarkHeading>>>;
  id: Scalars['ID'];
  images: Array<GqlPostImage>;
  mainVideo?: Maybe<GqlOGVideo>;
  path: Scalars['String'];
  postId: Scalars['String'];
  related: Array<GqlBlogPost>;
  relatedProjects: Array<GqlProjectPost>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  timeToRead: GqlReadTime;
  title: Scalars['String'];
  videos: Array<GqlPostVideo>;
};


export type GqlBlogPostbelongsToArgs = {
  filter?: InputMaybe<GqlBelongsToFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GqlSortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GqlSortArgument>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type GqlBlogPostdateExpiredArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GqlBlogPostdateModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GqlBlogPostdatePublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GqlBlogPostheadingsArgs = {
  depth?: InputMaybe<GqlVueRemarkHeadingLevels>;
  stripTags?: InputMaybe<Scalars['Boolean']>;
};

export type GqlBlogPostConnection = GqlNodeConnection & {
  __typename?: 'BlogPostConnection';
  edges?: Maybe<Array<Maybe<GqlBlogPostEdge>>>;
  pageInfo: GqlPageInfo;
  totalCount: Scalars['Int'];
};

export type GqlBlogPostEdge = GqlNodeConnectionEdge & {
  __typename?: 'BlogPostEdge';
  next?: Maybe<GqlBlogPost>;
  node?: Maybe<GqlBlogPost>;
  previous?: Maybe<GqlBlogPost>;
};

export type GqlBlogPostFilterInput = {
  audios?: InputMaybe<GqlPostAudioFilterInput>;
  authors?: InputMaybe<GqlPostPersonFilterInput>;
  canonicalUrl?: InputMaybe<GqlStringQueryOperatorInput>;
  content?: InputMaybe<GqlStringQueryOperatorInput>;
  contributors?: InputMaybe<GqlPostPersonFilterInput>;
  dateExpired?: InputMaybe<GqlDateQueryOperatorInput>;
  dateModified?: InputMaybe<GqlDateQueryOperatorInput>;
  datePublished?: InputMaybe<GqlDateQueryOperatorInput>;
  description?: InputMaybe<GqlStringQueryOperatorInput>;
  fileInfo?: InputMaybe<GqlRemarkFileInfoFilterInput>;
  id?: InputMaybe<GqlIDQueryOperatorInput>;
  images?: InputMaybe<GqlPostImageFilterInput>;
  mainVideo?: InputMaybe<GqlOGVideoFilterInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
  postId?: InputMaybe<GqlStringQueryOperatorInput>;
  slug?: InputMaybe<GqlStringQueryOperatorInput>;
  tags?: InputMaybe<GqlStringListQueryOperatorInput>;
  timeToRead?: InputMaybe<GqlReadTimeFilterInput>;
  title?: InputMaybe<GqlStringQueryOperatorInput>;
  videos?: InputMaybe<GqlPostVideoFilterInput>;
};

export type GqlDateQueryOperatorInput = {
  /** Filter by property between provided values. */
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** Filter by date property equal to provided date value. */
  dteq?: InputMaybe<Scalars['Date']>;
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property greater than provided value. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Filter by property greater or equal to provided value. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  /** Filter by property less than provided value. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Filter by property less than or equal to provided value. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Date']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type GqlFloatQueryOperatorInput = {
  /** Filter by property between provided values. */
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property greater than provided value. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Filter by property greater or equal to provided value. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Filter by property less than provided value. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Filter by property less than or equal to provided value. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Float']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GqlIDQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['ID']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['ID']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum GqlImageFit {
  /** Embed within both provided dimensions. */
  contain = 'contain',
  /** Crop to cover both provided dimensions. */
  cover = 'cover',
  /** Ignore the aspect ratio of the input and stretch to both provided dimensions. */
  fill = 'fill',
  /** Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified. */
  inside = 'inside',
  /** Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified. Some of these values are based on the object-fit CSS property. */
  outside = 'outside'
}

export type GqlImageQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Image']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Image']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Image']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Image']>>>;
  /** Filter by property matching provided regular expression. */
  regex?: InputMaybe<Scalars['String']>;
};

export type GqlIntQueryOperatorInput = {
  /** Filter by property between provided values. */
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property greater than provided value. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Filter by property greater or equal to provided value. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Filter by property less than provided value. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Filter by property less than or equal to provided value. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['Int']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type GqlJSONQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['JSON']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['JSON']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by property matching provided regular expression. */
  regex?: InputMaybe<Scalars['String']>;
};

export type GqlMetadata = {
  __typename?: 'Metadata';
  icon?: Maybe<GqlMetadata_Icon>;
  lang?: Maybe<GqlMetadata_Lang>;
  pathPrefix?: Maybe<Scalars['String']>;
  siteAuthor?: Maybe<GqlMetadata_SiteAuthor>;
  siteCopyright?: Maybe<Scalars['String']>;
  siteDescription?: Maybe<Scalars['String']>;
  siteImage?: Maybe<GqlMetadata_SiteImage>;
  siteLastUpdated?: Maybe<Scalars['Date']>;
  siteName?: Maybe<Scalars['String']>;
  siteTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  siteUrl?: Maybe<Scalars['String']>;
  social?: Maybe<GqlMetadata_Social>;
};


export type GqlMetadatasiteLastUpdatedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GqlMetadata_Icon = {
  __typename?: 'Metadata_Icon';
  favicon?: Maybe<GqlMetadata_Icon_Favicon>;
  maskColor?: Maybe<Scalars['String']>;
  touchicon?: Maybe<Scalars['Image']>;
};


export type GqlMetadata_IcontouchiconArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<GqlImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GqlMetadata_Icon_Favicon = {
  __typename?: 'Metadata_Icon_Favicon';
  png?: Maybe<Scalars['Image']>;
  svg?: Maybe<Scalars['Image']>;
};


export type GqlMetadata_Icon_FaviconpngArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<GqlImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type GqlMetadata_Icon_FaviconsvgArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<GqlImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GqlMetadata_Lang = {
  __typename?: 'Metadata_Lang';
  lang?: Maybe<Scalars['String']>;
  localeIETF?: Maybe<Scalars['String']>;
  localeJava?: Maybe<Scalars['String']>;
};

export type GqlMetadata_SiteAuthor = {
  __typename?: 'Metadata_SiteAuthor';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GqlMetadata_SiteImage = {
  __typename?: 'Metadata_SiteImage';
  alt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Image']>;
  url?: Maybe<Scalars['String']>;
};


export type GqlMetadata_SiteImageimageArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<GqlImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GqlMetadata_Social = {
  __typename?: 'Metadata_Social';
  devto?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  rss?: Maybe<Scalars['String']>;
  soundcloud?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  twitterOrg?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type GqlNode = {
  id: Scalars['ID'];
};

export type GqlNodeBelongsTo = GqlNodeConnection & {
  __typename?: 'NodeBelongsTo';
  edges?: Maybe<Array<Maybe<GqlNodeBelongsToEdge>>>;
  pageInfo: GqlPageInfo;
  totalCount: Scalars['Int'];
};

export type GqlNodeBelongsToEdge = GqlNodeConnectionEdge & {
  __typename?: 'NodeBelongsToEdge';
  next?: Maybe<GqlNode>;
  node?: Maybe<GqlNode>;
  previous?: Maybe<GqlNode>;
};

export type GqlNodeConnection = {
  edges?: Maybe<Array<Maybe<GqlNodeConnectionEdge>>>;
  pageInfo: GqlPageInfo;
  totalCount: Scalars['Int'];
};

export type GqlNodeConnectionEdge = {
  next?: Maybe<GqlNode>;
  node?: Maybe<GqlNode>;
  previous?: Maybe<GqlNode>;
};

export enum GqlOGGenderType {
  female = 'female',
  male = 'male'
}

/** Open Graph (og:profile) data */
export type GqlOGProfile = {
  __typename?: 'OGProfile';
  firstName: Scalars['String'];
  gender: GqlOGGenderType;
  lastName: Scalars['String'];
  username: Scalars['String'];
};

export type GqlOGProfileRef = {
  __typename?: 'OGProfileRef';
  /** URL pointing to the person's Open Graph profile webpage */
  url: Scalars['String'];
};

export type GqlOGProfileRefFilterInput = {
  url?: InputMaybe<GqlStringQueryOperatorInput>;
};

/** Open Graph (og:video) data */
export type GqlOGVideo = {
  __typename?: 'OGVideo';
  /** Actors in the movie */
  actors: Array<GqlOGVideoActor>;
  /** Directors of the movie */
  directors: Array<GqlOGProfileRef>;
  /** Duration in seconds */
  duration: Scalars['Int'];
  releaseDate?: Maybe<Scalars['Date']>;
  /** Video dimensions */
  size: GqlPostResourceSize;
  /** Tag words associated with this movie */
  tags: Array<Scalars['String']>;
  /** Url of the webpage with the player */
  url: Scalars['String'];
  /** Writers of the movie */
  writers: Array<GqlOGProfileRef>;
};


/** Open Graph (og:video) data */
export type GqlOGVideoreleaseDateArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GqlOGVideoActor = {
  __typename?: 'OGVideoActor';
  /** The role they played */
  role?: Maybe<Scalars['String']>;
  /** URL pointing to the actor's Open Graph profile webpage */
  url: Scalars['String'];
};

export type GqlOGVideoActorFilterInput = {
  role?: InputMaybe<GqlStringQueryOperatorInput>;
  url?: InputMaybe<GqlStringQueryOperatorInput>;
};

export type GqlOGVideoFilterInput = {
  actors?: InputMaybe<GqlOGVideoActorFilterInput>;
  directors?: InputMaybe<GqlOGProfileRefFilterInput>;
  duration?: InputMaybe<GqlIntQueryOperatorInput>;
  releaseDate?: InputMaybe<GqlDateQueryOperatorInput>;
  size?: InputMaybe<GqlPostResourceSizeFilterInput>;
  tags?: InputMaybe<GqlStringListQueryOperatorInput>;
  url?: InputMaybe<GqlStringQueryOperatorInput>;
  writers?: InputMaybe<GqlOGProfileRefFilterInput>;
};

export type GqlPage = {
  __typename?: 'Page';
  context: Scalars['JSON'];
  path: Scalars['String'];
};

export type GqlPageFilterInput = {
  context?: InputMaybe<GqlJSONQueryOperatorInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
};

export type GqlPageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirst: Scalars['Boolean'];
  isLast: Scalars['Boolean'];
  perPage: Scalars['Int'];
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** Base interface for a Post */
export type GqlPost = {
  /** Audio sources that accompany the post. */
  audios: Array<GqlPostAudio>;
  /** Post's authors */
  authors: Array<GqlPostPerson>;
  /** The canonical post URL */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** Textual content of the post */
  content: Scalars['String'];
  /** People who contributed to the post */
  contributors: Array<GqlPostPerson>;
  /** The date after which this post will become outdated (optional) */
  dateExpired?: Maybe<Scalars['Date']>;
  /** Last time the post was modified, e.g. edited */
  dateModified?: Maybe<Scalars['Date']>;
  /** Date when the post was first published */
  datePublished?: Maybe<Scalars['Date']>;
  /** Post description. Should be up to 120 characters */
  description: Scalars['String'];
  /** Images associated with the post. First image is used for preview on social media */
  images: Array<GqlPostImage>;
  /**
   * Main video associated with the post that describes a substantial amount of the content.
   * This video should be our own and should be give comparable or more content than the textual version.
   *
   * If present, the post is seen as a video from the Open Graph point of view,
   * e.g. this video is used for preview on social media.
   */
  mainVideo?: Maybe<GqlOGVideo>;
  /** Canonical url path of the post */
  path: Scalars['String'];
  /** Our own internal ID used with e.g. Vssue comments */
  postId: Scalars['String'];
  tags: Array<Scalars['String']>;
  timeToRead: GqlReadTime;
  /** Post title slug shown in the URL */
  title: Scalars['String'];
  /** Other videos that accompany the post. */
  videos: Array<GqlPostVideo>;
};

export type GqlPostAudio = GqlPostResource & {
  __typename?: 'PostAudio';
  mimeType: Scalars['String'];
  path: Scalars['String'];
};

export type GqlPostAudioFilterInput = {
  mimeType?: InputMaybe<GqlStringQueryOperatorInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
};

export type GqlPostImage = GqlPostResource & {
  __typename?: 'PostImage';
  alt: Scalars['String'];
  mimeType: Scalars['String'];
  path?: Maybe<Scalars['Image']>;
  size: GqlPostResourceSize;
};


export type GqlPostImagepathArgs = {
  background?: InputMaybe<Scalars['String']>;
  blur?: InputMaybe<Scalars['Int']>;
  fit?: InputMaybe<GqlImageFit>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GqlPostImageFilterInput = {
  alt?: InputMaybe<GqlStringQueryOperatorInput>;
  mimeType?: InputMaybe<GqlStringQueryOperatorInput>;
  path?: InputMaybe<GqlImageQueryOperatorInput>;
  size?: InputMaybe<GqlPostResourceSizeFilterInput>;
};

export type GqlPostPerson = {
  __typename?: 'PostPerson';
  email: Scalars['String'];
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  lastName: Scalars['String'];
  url: Scalars['String'];
};

export type GqlPostPersonFilterInput = {
  email?: InputMaybe<GqlStringQueryOperatorInput>;
  firstName?: InputMaybe<GqlStringQueryOperatorInput>;
  fullName?: InputMaybe<GqlStringQueryOperatorInput>;
  lastName?: InputMaybe<GqlStringQueryOperatorInput>;
  url?: InputMaybe<GqlStringQueryOperatorInput>;
};

export type GqlPostResource = {
  /** Mime type of the resource */
  mimeType: Scalars['String'];
};

export type GqlPostResourceSize = {
  __typename?: 'PostResourceSize';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type GqlPostResourceSizeFilterInput = {
  height?: InputMaybe<GqlIntQueryOperatorInput>;
  width?: InputMaybe<GqlIntQueryOperatorInput>;
};

export type GqlPostVideo = GqlPostResource & {
  __typename?: 'PostVideo';
  mimeType: Scalars['String'];
  path: Scalars['String'];
  size: GqlPostResourceSize;
};

export type GqlPostVideoFilterInput = {
  mimeType?: InputMaybe<GqlStringQueryOperatorInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
  size?: InputMaybe<GqlPostResourceSizeFilterInput>;
};

export type GqlProjectPost = GqlNode & GqlPost & {
  __typename?: 'ProjectPost';
  audios: Array<GqlPostAudio>;
  authors: Array<GqlPostPerson>;
  belongsTo?: Maybe<GqlNodeBelongsTo>;
  canonicalUrl: Scalars['String'];
  content: Scalars['String'];
  contributors: Array<GqlPostPerson>;
  dateExpired?: Maybe<Scalars['Date']>;
  dateModified?: Maybe<Scalars['Date']>;
  datePublished?: Maybe<Scalars['Date']>;
  description: Scalars['String'];
  fileInfo: GqlRemarkFileInfo;
  headings?: Maybe<Array<Maybe<GqlVueRemarkHeading>>>;
  id: Scalars['ID'];
  images: Array<GqlPostImage>;
  mainVideo?: Maybe<GqlOGVideo>;
  path: Scalars['String'];
  postId: Scalars['String'];
  projectStatus: Scalars['String'];
  projectUrl?: Maybe<Scalars['String']>;
  relatedBlogs: Array<GqlBlogPost>;
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  timeToRead: GqlReadTime;
  title: Scalars['String'];
  videos: Array<GqlPostVideo>;
};


export type GqlProjectPostbelongsToArgs = {
  filter?: InputMaybe<GqlBelongsToFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GqlSortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<GqlSortArgument>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type GqlProjectPostdateExpiredArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GqlProjectPostdateModifiedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GqlProjectPostdatePublishedArgs = {
  format?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type GqlProjectPostheadingsArgs = {
  depth?: InputMaybe<GqlVueRemarkHeadingLevels>;
  stripTags?: InputMaybe<Scalars['Boolean']>;
};

export type GqlProjectPostConnection = GqlNodeConnection & {
  __typename?: 'ProjectPostConnection';
  edges?: Maybe<Array<Maybe<GqlProjectPostEdge>>>;
  pageInfo: GqlPageInfo;
  totalCount: Scalars['Int'];
};

export type GqlProjectPostEdge = GqlNodeConnectionEdge & {
  __typename?: 'ProjectPostEdge';
  next?: Maybe<GqlProjectPost>;
  node?: Maybe<GqlProjectPost>;
  previous?: Maybe<GqlProjectPost>;
};

export type GqlProjectPostFilterInput = {
  audios?: InputMaybe<GqlPostAudioFilterInput>;
  authors?: InputMaybe<GqlPostPersonFilterInput>;
  canonicalUrl?: InputMaybe<GqlStringQueryOperatorInput>;
  content?: InputMaybe<GqlStringQueryOperatorInput>;
  contributors?: InputMaybe<GqlPostPersonFilterInput>;
  dateExpired?: InputMaybe<GqlDateQueryOperatorInput>;
  dateModified?: InputMaybe<GqlDateQueryOperatorInput>;
  datePublished?: InputMaybe<GqlDateQueryOperatorInput>;
  description?: InputMaybe<GqlStringQueryOperatorInput>;
  fileInfo?: InputMaybe<GqlRemarkFileInfoFilterInput>;
  id?: InputMaybe<GqlIDQueryOperatorInput>;
  images?: InputMaybe<GqlPostImageFilterInput>;
  mainVideo?: InputMaybe<GqlOGVideoFilterInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
  postId?: InputMaybe<GqlStringQueryOperatorInput>;
  projectStatus?: InputMaybe<GqlStringQueryOperatorInput>;
  projectUrl?: InputMaybe<GqlStringQueryOperatorInput>;
  slug?: InputMaybe<GqlStringQueryOperatorInput>;
  tags?: InputMaybe<GqlStringListQueryOperatorInput>;
  timeToRead?: InputMaybe<GqlReadTimeFilterInput>;
  title?: InputMaybe<GqlStringQueryOperatorInput>;
  videos?: InputMaybe<GqlPostVideoFilterInput>;
};

export type GqlQuery = {
  __typename?: 'Query';
  allBlogPost?: Maybe<GqlBlogPostConnection>;
  allPage?: Maybe<Array<Maybe<GqlPage>>>;
  allProjectPost?: Maybe<GqlProjectPostConnection>;
  blogPost?: Maybe<GqlBlogPost>;
  /** @deprecated Use Query.metadata instead. */
  metaData?: Maybe<GqlMetadata>;
  metadata?: Maybe<GqlMetadata>;
  page?: Maybe<GqlPage>;
  projectPost?: Maybe<GqlProjectPost>;
};


export type GqlQueryallBlogPostArgs = {
  filter?: InputMaybe<GqlBlogPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GqlSortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GqlSortArgument>>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type GqlQueryallPageArgs = {
  filter?: InputMaybe<GqlPageFilterInput>;
};


export type GqlQueryallProjectPostArgs = {
  filter?: InputMaybe<GqlProjectPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GqlSortOrder>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GqlSortArgument>>>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type GqlQueryblogPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
};


export type GqlQuerypageArgs = {
  path: Scalars['String'];
};


export type GqlQueryprojectPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
};

export type GqlReadTime = {
  __typename?: 'ReadTime';
  minutes: Scalars['Float'];
  text: Scalars['String'];
  time: Scalars['Float'];
  words: Scalars['Int'];
};

export type GqlReadTimeFilterInput = {
  minutes?: InputMaybe<GqlFloatQueryOperatorInput>;
  text?: InputMaybe<GqlStringQueryOperatorInput>;
  time?: InputMaybe<GqlFloatQueryOperatorInput>;
  words?: InputMaybe<GqlIntQueryOperatorInput>;
};

/** File info added by remark after parsing an .md file */
export type GqlRemarkFileInfo = {
  __typename?: 'RemarkFileInfo';
  /** Directory of the parsed file, relative to the base path, or '' if at root of base path */
  directory: Scalars['String'];
  /** Extension of the parsed file, e.g. '.md' */
  extension: Scalars['String'];
  /** Name of the parsed file, without extension, e.g. 'my-markdown-file' */
  name: Scalars['String'];
  /** Path of the parsed file, relative to the base path, e.g. 'path/to/dir' */
  path: Scalars['String'];
};

export type GqlRemarkFileInfoFilterInput = {
  directory?: InputMaybe<GqlStringQueryOperatorInput>;
  extension?: InputMaybe<GqlStringQueryOperatorInput>;
  name?: InputMaybe<GqlStringQueryOperatorInput>;
  path?: InputMaybe<GqlStringQueryOperatorInput>;
};

export type GqlSortArgument = {
  by?: Scalars['String'];
  order?: InputMaybe<GqlSortOrder>;
};

export enum GqlSortOrder {
  /** Sort ascending */
  ASC = 'ASC',
  /** Sort descending */
  DESC = 'DESC'
}

export type GqlStringListQueryOperatorInput = {
  /** Filter by property containing the provided value. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property containing any of the provided values. */
  containsAny?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property containing none of the provided values. */
  containsNone?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter which have an array property of specified size. */
  size?: InputMaybe<Scalars['Int']>;
};

export type GqlStringQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<Scalars['String']>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter by property matching provided regular expression. */
  regex?: InputMaybe<Scalars['String']>;
};

export enum GqlTypeName {
  BlogPost = 'BlogPost',
  ProjectPost = 'ProjectPost'
}

export type GqlTypeNameQueryOperatorInput = {
  /** Filter by property of (strict) equality. */
  eq?: InputMaybe<GqlTypeName>;
  /** Filter nodes that contain the field, including nodes where the field value is null. */
  exists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by property matching any of the provided values. */
  in?: InputMaybe<Array<InputMaybe<GqlTypeName>>>;
  /** Filter by property not equal to provided value. */
  ne?: InputMaybe<GqlTypeName>;
  /** Filter by property not matching any of the provided values. */
  nin?: InputMaybe<Array<InputMaybe<GqlTypeName>>>;
};

export type GqlVueRemarkHeading = {
  __typename?: 'VueRemarkHeading';
  anchor?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export enum GqlVueRemarkHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type GqlgetAppMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetAppMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', siteName?: string | null, siteDescription?: string | null } | null };

export type GqlgetFooterMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetFooterMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', siteCopyright?: string | null } | null };

export type GqlgetAppHeaderHomeLinkMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetAppHeaderHomeLinkMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', siteName?: string | null, icon?: { __typename?: 'Metadata_Icon', favicon?: { __typename?: 'Metadata_Icon_Favicon', png?: GridsomeImage | null } | null } | null } | null };

export type GqlgetMetaMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetMetaMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', siteName?: string | null, siteUrl?: string | null, siteAuthor?: { __typename?: 'Metadata_SiteAuthor', fullName?: string | null } | null, siteImage?: { __typename?: 'Metadata_SiteImage', image?: GridsomeImage | null, alt?: string | null } | null, lang?: { __typename?: 'Metadata_Lang', lang?: string | null, localeIETF?: string | null, localeJava?: string | null } | null, social?: { __typename?: 'Metadata_Social', twitter?: string | null, twitterOrg?: string | null } | null } | null };

export type GqlgetSocialIconMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetSocialIconMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', social?: { __typename?: 'Metadata_Social', devto?: string | null, email?: string | null, facebook?: string | null, twitter?: string | null, github?: string | null, rss?: string | null, linkedin?: string | null, instagram?: string | null, youtube?: string | null, soundcloud?: string | null, twitch?: string | null } | null } | null };

export type GqlgetAboutPageMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetAboutPageMetadataQuery = { __typename?: 'Query', metadata?: { __typename?: 'Metadata', siteAuthor?: { __typename?: 'Metadata_SiteAuthor', firstName?: string | null, lastName?: string | null, fullName?: string | null, gender?: string | null } | null } | null };

export type GqlgetHomeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetHomeDataQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogPostConnection', edges?: Array<{ __typename?: 'BlogPostEdge', node?: { __typename?: 'BlogPost', postId: string, path: string, title: string, description: string, datePublished?: any | null, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }> } | null } | null> | null } | null, projects?: { __typename?: 'ProjectPostConnection', edges?: Array<{ __typename?: 'ProjectPostEdge', node?: { __typename?: 'ProjectPost', postId: string, path: string, title: string, description: string, datePublished?: any | null, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }> } | null } | null> | null } | null, metadata?: { __typename?: 'Metadata', siteDescription?: string | null } | null };

export type GqlgetBlogPostByPathQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GqlgetBlogPostByPathQuery = { __typename?: 'Query', post?: { __typename?: 'BlogPost', postId: string, title: string, canonicalUrl: string, datePublished?: any | null, dateModified?: any | null, dateExpired?: any | null, description: string, tags: Array<string>, authors: Array<{ __typename?: 'PostPerson', fullName: string, url: string }>, contributors: Array<{ __typename?: 'PostPerson', fullName: string, url: string }>, timeToRead: { __typename?: 'ReadTime', text: string }, audios: Array<{ __typename?: 'PostAudio', path: string, mimeType: string }>, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string, mimeType: string, size: { __typename?: 'PostResourceSize', width: number, height: number } }>, videos: Array<{ __typename?: 'PostVideo', path: string, mimeType: string, size: { __typename?: 'PostResourceSize', width: number, height: number } }>, mainVideo?: { __typename?: 'OGVideo', url: string, duration: number, releaseDate?: any | null, tags: Array<string>, size: { __typename?: 'PostResourceSize', width: number, height: number }, actors: Array<{ __typename?: 'OGVideoActor', url: string, role?: string | null }>, directors: Array<{ __typename?: 'OGProfileRef', url: string }>, writers: Array<{ __typename?: 'OGProfileRef', url: string }> } | null, related: Array<{ __typename?: 'BlogPost', id: string, title: string, description: string, canonicalUrl: string, path: string, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }>, authors: Array<{ __typename?: 'PostPerson', fullName: string }> }>, relatedProjects: Array<{ __typename?: 'ProjectPost', id: string, title: string, description: string, canonicalUrl: string, path: string, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }>, authors: Array<{ __typename?: 'PostPerson', fullName: string }> }> } | null };

export type GqlgetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetAllBlogsQuery = { __typename?: 'Query', posts?: { __typename?: 'BlogPostConnection', edges?: Array<{ __typename?: 'BlogPostEdge', node?: { __typename?: 'BlogPost', postId: string, path: string, title: string, description: string, datePublished?: any | null, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }> } | null } | null> | null } | null };

export type GqlgetProjectPostByPathQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GqlgetProjectPostByPathQuery = { __typename?: 'Query', post?: { __typename?: 'ProjectPost', postId: string, title: string, canonicalUrl: string, projectUrl?: string | null, projectStatus: string, datePublished?: any | null, dateModified?: any | null, dateExpired?: any | null, description: string, tags: Array<string>, authors: Array<{ __typename?: 'PostPerson', fullName: string, url: string }>, contributors: Array<{ __typename?: 'PostPerson', fullName: string, url: string }>, timeToRead: { __typename?: 'ReadTime', text: string }, audios: Array<{ __typename?: 'PostAudio', path: string, mimeType: string }>, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string, mimeType: string, size: { __typename?: 'PostResourceSize', width: number, height: number } }>, videos: Array<{ __typename?: 'PostVideo', path: string, mimeType: string, size: { __typename?: 'PostResourceSize', width: number, height: number } }>, mainVideo?: { __typename?: 'OGVideo', url: string, duration: number, releaseDate?: any | null, tags: Array<string>, size: { __typename?: 'PostResourceSize', width: number, height: number }, actors: Array<{ __typename?: 'OGVideoActor', url: string, role?: string | null }>, directors: Array<{ __typename?: 'OGProfileRef', url: string }>, writers: Array<{ __typename?: 'OGProfileRef', url: string }> } | null, relatedBlogs: Array<{ __typename?: 'BlogPost', id: string, title: string, description: string, canonicalUrl: string, path: string, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }>, authors: Array<{ __typename?: 'PostPerson', fullName: string }> }> } | null };

export type GqlgetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlgetAllProjectsQuery = { __typename?: 'Query', posts?: { __typename?: 'ProjectPostConnection', edges?: Array<{ __typename?: 'ProjectPostEdge', node?: { __typename?: 'ProjectPost', postId: string, path: string, title: string, description: string, datePublished?: any | null, images: Array<{ __typename?: 'PostImage', path?: GridsomeImage | null, alt: string }> } | null } | null> | null } | null };

// Generated on 2022-02-27T21:13:56+00:00
