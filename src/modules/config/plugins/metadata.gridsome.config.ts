import type { OgProfileGender } from '@/modules/core/utils/metaTagsOpenGraph';
import type { GridsomeConfig } from '@/typings/gridsome';

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
  social: {
    fbAppId: string | null;
    orgTwitterHandle: string;
    userTwitterHandle: string;
  };
}

const cwd = process.cwd();
const remoteSiteUrl = 'https://jurora.vc/';
const localSiteUrl = 'http://localhost:8080/';
const siteUrl = process.env.SITE_URL || process.env.NODE_ENV === 'development' ? localSiteUrl : remoteSiteUrl;

/** Globally defined metadata */
export const metadata: GridsomeConfigMetadata = {
  siteName: 'Juro Oravec',
  siteUrl,
  // TODO: Update description?
  siteDescription: 'Biotech. Web tech. Observations. Runner.',
  siteTags: ['blog', 'tech', 'biotech', 'software'],
  siteAuthor: {
    firstName: 'Juro',
    lastName: 'Oravec',
    fullName: 'Juro Oravec',
    email: 'juraj.oravec.josefson@gmail.com',
    url: `${siteUrl}/about`,
    gender: 'male',
  },
  // This image will be shown on social shares
  // See https://stackoverflow.com/a/19632390/9788634
  siteImage: {
    image: `${cwd}/static/imgs/photo.jpg`,
    url: `${siteUrl}/imgs/photo.jpg`,
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
    fbAppId: null,
    // These have to be non-null to be available via GraphQL
    orgTwitterHandle: '', // e.g. @nytimes
    userTwitterHandle: '@jurooravec',
  },
};

// See https://gridsome.org/docs/config/
export const metadataConfigGridsome: GridsomeConfig = {
  metadata,
};
