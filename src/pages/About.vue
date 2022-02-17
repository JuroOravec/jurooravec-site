<template>
  <AppLayout :meta-props="metaProps" class="About">
    <h1>{{ metaProps.pageTitle }}</h1>
    <g-image src="@/modules/core/assets/imgs/about-dummy.jpeg" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>
  </AppLayout>
</template>

<static-query>
query getAboutPageMetadata {
  metadata {
    siteAuthor {
      firstName
      lastName
      fullName
      gender
    }
  }
}
</static-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import type { GqlgetAboutPageMetadataQuery } from '@/__generated__/graphql';
import AppLayout from '@/modules/core/components/AppLayout.vue';
import type { MetaProps } from '@/modules/core/components/Meta.vue';
import Photo from '@/modules/core/assets/imgs/about-dummy.jpeg';
import { OgType } from '@/modules/core/utils/metaInfo';
import { refToRefs } from '@/modules/core/utils/vueReactivity';
import { useStaticQuery } from '@/modules/core/utils/useGridsomeQuery';
import type { OgProfileGender } from '@/modules/core/utils/metaTagsOpenGraph';

const About = defineComponent({
  name: 'About',
  components: {
    AppLayout,
  },
  setup() {
    const siteAuthor = useStaticQuery<
      GqlgetAboutPageMetadataQuery,
      NonNullable<
        NonNullable<GqlgetAboutPageMetadataQuery['metadata']>['siteAuthor']
      >
    >((data) => data?.metadata?.siteAuthor ?? {});
    const { firstName, lastName, fullName, gender } = refToRefs(siteAuthor);

    const metaProps: MetaProps = {
      pageTitle: 'About me',
      pageDescription: `This is ${fullName?.value ?? 'me'}`,
      pageTags: ['about', 'blog', 'software', fullName?.value ?? ''],
      ogType: OgType.PROFILE,
      ogProfile: {
        firstName: firstName?.value ?? null,
        lastName: lastName?.value ?? null,
        gender: gender?.value as OgProfileGender ?? null,
      },
      // TODO
      // images?: Maybe<CreateOgImageTagsArgs[]>;
      // videos?: Maybe<CreateOgVideoTagsArgs[]>;
    };

    return {
      metaProps,
      Photo,
    };
  },
});
export default About;
</script>
