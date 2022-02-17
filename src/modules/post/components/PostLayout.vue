<template>
  <AppLayout layout-type="post" :meta-props="metaProps" class="PostLayout">
    <!-- TODO: Do the semantic web like "content", "aside", etc -->
    <div class="PostLayout__container mx-auto pt-8 pb-16">
      <div v-if="!post">
        <h1 class="pb-12">Oops! Something went horribly wrong...</h1>
        <h2>...worse than my family reunion last Christmas!</h2>
      </div>

      <div v-else>
        <h1 class="pb-12">
          {{ post.title }}
        </h1>

        <dl
          class="PostLayout__meta d-flex flex-wrap text-body-2 pa-6 mb-12"
        >
          <div>
            <dt class="label">
              {{ post.authors.length === 1 ? 'Author' : 'Authors' }}
            </dt>
            <dd v-for="author in post.authors" :key="author.fullName">
              {{ author.fullName }}
            </dd>
          </div>

          <div v-if="post.contributors.length">
            <dt class="label">
              {{
                post.contributors.length === 1 ? 'Contributor' : 'Contributors'
              }}
            </dt>
            <dd
              v-for="contributor in post.contributors"
              :key="contributor.fullName"
            >
              {{ contributor.fullName }}
            </dd>
          </div>

          <div>
            <dt class="label">Date</dt>
            <dd>
              {{ formatDate(post.datePublished) }}
            </dd>
          </div>

          <div class="flex" />

          <div>
            <dt class="label">Time</dt>
            <dd>{{ post.timeToRead.text }}</dd>
          </div>
        </dl>

        <!-- Component is auto-imported by https://github.com/gridsome/gridsome/tree/master/packages/vue-remark -->
        <VueRemarkContent />

        <div class="mt-16 mb-12">
          <v-divider class="mb-1" />
          <v-divider />
        </div>

        <slot name="before-comments" />

        <!-- Component is globally defined by Vissue plugin -->
        <Comments v-if="allowComments" :page-title="post.postId" />
      </div>
    </div>
  </AppLayout>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  toRefs,
} from '@vue/composition-api';
import { VDivider } from 'vuetify/lib';

import type { GqlPost, GqlPostPerson } from '@/__generated__/graphql';
import AppLayout from '@/modules/core/components/AppLayout.vue';
import { formatDate } from '@/modules/core/utils/formatDate';
import Comments from '@/modules/core/components/Comments.vue';
import type {
  PostMetaProps,
  PostForMeta,
} from '@/modules/post/components/PostMeta.vue';
import RelatedPosts from '@/modules/post/components/RelatedPosts.vue';

type PostForPostLayout = PostForMeta &
  Pick<GqlPost, 'postId' | 'timeToRead'> & {
    authors: Pick<GqlPostPerson, 'fullName'>[];
    contributors: Pick<GqlPostPerson, 'fullName'>[];
  };

/**
 * This component is the main layout for all "Post" collections (BlogPost, ProjectPost).
 *
 * See https://gridsome.org/docs/templates/
 */
const PostLayout = defineComponent({
  name: 'PostLayout',
  components: {
    AppLayout,
    Comments,
    RelatedPosts,
    VDivider,
  },
  props: {
    post: {
      type: Object as PropType<PostForPostLayout>,
      required: false,
      default: 'Post',
    },
    fallbackTitle: { type: String, required: false, default: 'Post' },
    allowComments: { type: Boolean, required: false, default: true },
  },
  setup(props) {
    const { fallbackTitle, post } = toRefs(props);

    const metaProps = computed(
      (): PostMetaProps => ({
        post: post.value,
        fallbackTitle: fallbackTitle.value,
      }),
    );

    return {
      formatDate,
      metaProps,
    };
  },
});
export default PostLayout;
</script>

<style lang="scss">
@import '~/modules/post/style/_post.scss';
@import '~/modules/core/style/_neumorphic';

.PostLayout {
  @include post;
  @include neumorphic;

  &__container {
    max-width: 600px;
  }

  .PostLayout__meta {
    gap: 2.5rem;

    @extend .neumorphic;
  }
}
</style>
