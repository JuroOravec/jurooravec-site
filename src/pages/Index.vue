<template>
  <AppLayout :meta-props="metaProps" class="Index">
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="projects" />
    </div>
    <LatestBlogs :blogs="blogs" />
  </AppLayout>
</template>

<page-query>
query getIndexPagePosts {
	projects: allProjectPost {
    edges {
      node {
        id
        datePublished (format: "DD/MM/YYYY")
        dateModified (format: "DD/MM/YYYY")
        dateExpired (format: "DD/MM/YYYY")
        title
        tags
        images {
          path (quality: 90)
          alt
        }
        path
      }
    }
  },
  blogs: allBlogPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import AppLayout from '@/modules/core/components/AppLayout.vue';
import Hero from '@/modules/core/components/Hero.vue';
import { isNotNil } from '@/modules/core/utils/isNotNull';
import { usePageQuery } from '@/modules/core/utils/useGridsomeQuery';
import ProjectsGrid from '@/modules/postProject/components/ProjectsGrid.vue';
import LatestBlogs from '@/modules/postBlog/components/LatestBlogs.vue';
import type { GqlgetIndexPagePostsQuery } from '@/__generated__/graphql';
import type { MetaProps } from '@/modules/core/components/Meta.vue';

type QueryResult = NonNullable<GqlgetIndexPagePostsQuery>;
type ProjectPostResult = NonNullable<
  NonNullable<
    NonNullable<NonNullable<GqlgetIndexPagePostsQuery['projects']>['edges']>[0]
  >['node']
>;
type BlogPostResult = NonNullable<
  NonNullable<
    NonNullable<NonNullable<GqlgetIndexPagePostsQuery['blogs']>['edges']>[0]
  >['node']
>;

const metaProps: MetaProps = {
  pageTitle: 'Juro Oravec',
  // TODO: Use the site description instead
  pageDescription: "Living life like there's no tomorrow - submerged in temporal stasis",
};

const Index = defineComponent({
  name: 'Index',
  components: {
    AppLayout,
    Hero,
    ProjectsGrid,
    LatestBlogs,
  },
  setup() {
    const pageData = usePageQuery<GqlgetIndexPagePostsQuery, QueryResult>(
      (data) => data ?? {},
    );
    const projects = computed<ProjectPostResult[]>(
      () =>
        pageData.value?.projects?.edges
          ?.map((edge) => edge?.node ?? null)
          .filter(isNotNil) ?? [],
    );
    const blogs = computed<BlogPostResult[]>(
      () =>
        pageData.value?.blogs?.edges
          ?.map((edge) => edge?.node ?? null)
          .filter(isNotNil) ?? [],
    );

    return {
      projects,
      blogs,
      metaProps,
    };
  },
});
export default Index;
</script>
