<template>
  <AppLayout :meta-props="metaProps" class="Blog">
    <div class="container">
      <div class="blog-hero">
        <h1 class="blog-header">a wise person once said...</h1>
      </div>
    </div>

    <SearchBox :post-type="PostType.BLOG" />

    <g-link
      v-for="blog in blogs"
      :to="blog.path"
      :key="blog.postId"
      class="blog-post"
    >
      <div class="container blog">
        <h2 class="blog-title">{{ blog.title }}</h2>
        <p class="blog-description">{{ blog.description }}</p>
      </div>
    </g-link>
  </AppLayout>
</template>

<page-query>
query getAllBlogs {
	posts: allBlogPost {
    edges {
      node {
        postId
        path
        title
        description
      }
    }
  }
}
</page-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import AppLayout from '@/modules/core/components/AppLayout.vue';
import { isNotNil } from '@/modules/core/utils/isNotNull';
import { usePageQuery } from '@/modules/core/utils/useGridsomeQuery';
import type { GqlgetAllBlogsQuery } from '@/__generated__/graphql';
import type { MetaProps } from '@/modules/core/components/Meta.vue';
import SearchBox from '@/modules/core/components/SearchBox.vue';
import { PostType } from '@/modules/post/postTypes';

type BlogPostResult = NonNullable<
  NonNullable<
    NonNullable<NonNullable<GqlgetAllBlogsQuery['posts']>['edges']>[0]
  >['node']
>;

const metaProps: MetaProps = {
  pageTitle: 'Blogs',
  pageDescription: 'Browse all blogs',
};

const Blog = defineComponent({
  name: 'Blog',
  components: {
    AppLayout,
    SearchBox,
  },
  setup() {
    const blogs = usePageQuery<GqlgetAllBlogsQuery, BlogPostResult[]>(
      (data) =>
        data?.posts?.edges
          ?.map((blog): BlogPostResult | null => blog?.node ?? null)
          .filter(isNotNil) ?? [],
    );

    return {
      blogs,
      metaProps,
      PostType,
    };
  },
});
export default Blog;
</script>

<style lang="scss">
.Blog {
  .container.blog {
    max-width: 720px;
  }
  .blog-hero {
    padding: 4rem 0;
    text-align: center;
    color: var(--color-base-1);
  }
  .blog-header {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
  .blog-post {
    display: block;
    padding: 2rem 0;
    text-decoration: none;
    transition: background 0.5s ease;
  }
  .blog-post > * {
    transition: transform 0.5s ease;
  }
  .blog-post:hover {
    background-color: var(--color-base-1);
  }
  .blog-post:hover > * {
    transform: translateX(4rem);
  }
  .blog-post h1,
  .blog-post h2 {
    margin: 0;
    padding: 0;
  }
  .blog-title {
    font-size: 2rem;
    color: var(--color-contrast);
  }
  .blog-description {
    color: var(--color-contrast-1);
  }

  @media (min-width: 560px) {
    .blog-post {
      padding: 3rem 0;
    }
  }

  @media (min-width: 860px) {
    .blog-post {
      padding: 5rem 0;
    }
  }
}
</style>
