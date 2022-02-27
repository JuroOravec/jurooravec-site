import type { SocialType } from '@/modules/core/utils/socials';
import type { OgProfileGender } from '@/modules/core/utils/metaTagsOpenGraph';

export interface GridsomeConfigMetadata {
  siteName: string;
  siteUrl: string;
  siteDescription: string;
  siteTags: string[];
  siteAuthor: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    url: string;
    gender: OgProfileGender;
  };
  siteImage: {
    /**
     * Note: In GraphQL, if this is an absolute path, it will be automatically converted
     * to Image type
     */
    image: string;
    url: string;
    alt: string;
  };
  siteCopyright: string;
  siteLastUpdated: Date;
  lang: {
    lang: string;
    /** Language with locale in format 'en-GB'. This format is used by HTML "lang" attribute */
    localeIETF: string;
    /** Language with locale in format 'en_GB'. This one is used by Open Graph */
    localeJava: string;
  };
  icon: {
    favicon: {
      png: string;
      svg: string;
    };
    touchicon: string;
    maskColor: string;
  };
  social: Record<SocialType, string> & {
    fbAppId: string | null;
    /** Organisation's Twitter username (without `@`), e.g. `nytimes` */
    twitterOrg: string;
  };
}

const cwd = process.cwd();
const remoteSiteUrl = 'https://jurora.vc/';
const localSiteUrl = 'http://localhost:8080/';
const siteUrl =
  process.env.SITE_URL || process.env.NODE_ENV === 'development'
    ? localSiteUrl
    : remoteSiteUrl;
const email = 'juraj.oravec.josefson@gmail.com';

/** Globally defined metadata */
export const metadata: GridsomeConfigMetadata = {
  siteName: 'Juro Oravec',
  siteUrl,
  siteDescription: 'What we know. Digitised.',
  siteTags: ['blog', 'tech', 'biotech', 'software'],
  siteAuthor: {
    firstName: 'Juro',
    lastName: 'Oravec',
    fullName: 'Juro Oravec',
    email,
    url: `${siteUrl}/about`,
    gender: 'male',
  },
  // This image will be shown on social shares
  // See https://stackoverflow.com/a/19632390/9788634
  siteImage: {
    image: `${cwd}/static/imgs/profile-pic-front-white-bg-cc-sq-md.png`,
    url: `${siteUrl}/imgs/profile-pic-front-white-bg-cc-sq-md.png`,
    alt: 'Photo of Juro Oravec',
  },
  siteCopyright: 'All rights reserved, Juro Oravec',
  siteLastUpdated: new Date('2022-02-08'),
  /**
   * Default locale used on the site.
   * See why there are 2 versions: https://stackoverflow.com/questions/4904803/en-us-or-en-us-which-one-should-you-use
   */
  lang: {
    lang: 'en',
    /** Language with locale in format 'en-GB'. This format is used by HTML "lang" attribute */
    localeIETF: 'en-GB',
    /** Language with locale in format 'en_GB'. This one is used by Open Graph */
    localeJava: 'en_GB',
  },
  icon: {
    favicon: {
      png: `${cwd}/static/imgs/logo-3412.png`,
      svg: `${cwd}/static/imgs/logo-3412.svg`,
    },
    touchicon: `${cwd}/static/imgs/logo-3412.png`,
    maskColor: '#666600',
  },
  social: {
    // These have to be non-null to be available via GraphQL
    fbAppId: null,
    email,
    facebook: 'juro.oravec',
    twitter: 'jurooravec',
    twitterOrg: '', // e.g. @nytimes
    github: 'jurooravec',
    devto: 'jurooravec',
    rss: `${siteUrl}feed.xml`,
    linkedin: 'jurooravec',
    instagram: 'jurooravec',
    youtube: 'UC8JdqB5j16JkQ1a3RHdCejQ',
    soundcloud: '',
    twitch: 'freefalltwelve',
  },
};