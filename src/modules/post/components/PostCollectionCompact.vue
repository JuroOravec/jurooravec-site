<template>
  <div class="PostCollectionCompact" :class="{ small: small }">
    <g-link
      v-for="post in posts"
      :to="post.path"
      :key="post.postId"
      class="PostCollectionCompact__post secondary--text text--darken-1 py-8 gap-6"
    >
      <g-image v-if="post.images.length" v-bind="post.images[0].path" />
      <div>
        <h3>{{ post.title }}</h3>
        <p class="mb-0">{{ post.description }}</p>
      </div>
    </g-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

import type { GqlPost, GqlPostImage } from '@/__generated__/graphql';
import { formatDate } from '@/modules/core/utils/formatDate';
import AppLayout from '@/modules/core/components/AppLayout.vue';
import SearchBox from '@/modules/core/components/SearchBox.vue';

export type PostInPostCollectionCompact = Pick<
  GqlPost,
  'postId' | 'title' | 'path' | 'description'
> & { images: Pick<GqlPostImage, 'path' | 'alt'>[] };

const PostCollectionCompact = defineComponent({
  name: 'PostCollectionCompact',
  components: {
    AppLayout,
    SearchBox,
  },
  props: {
    posts: {
      type: Array as PropType<PostInPostCollectionCompact[]>,
      required: false,
      default: () => [],
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    return {
      formatDate,
    };
  },
});
export default PostCollectionCompact;
</script>

<style lang="scss">
@import '~/modules/core/style/_utils.scss';
.PostCollectionCompact {
  &__post {
    display: flex;
    flex-direction: column;

    text-decoration: none !important;
    transition: background 0.5s ease;

    &:hover {
      background-color: hsl(180deg 20% 97%);
    }
  }

  img {
    object-fit: cover;
  }

  &:not(.small) {
    display: flex;
    flex-wrap: wrap;

    img {
      max-width: 250px;
    }

    .PostCollectionCompact {
      &__post {
        flex: 1 0 250px;
        max-width: 300px;

        /* Slide to right on hover on large screen */
        padding: 0 32px 0 16px;
        @extend .hover-slide-x-2;
      }
    }
  }

  &.small {
    display: block;

    .PostCollectionCompact {
      &__post {
        display: block !important;
        text-align: center;
        /* Slide up on hover on small screen */
        padding: 0 32px;
        @extend .hover-slide-y-4;
      }
    }
  }
}
</style>
