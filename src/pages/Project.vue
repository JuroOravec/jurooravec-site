<template>
  <AppLayout :meta-props="metaProps" class="Project">
    <div class="container">
      <div class="project-hero">
        <h1 class="project-header">Projects</h1>
      </div>
    </div>

    <SearchBox :post-type="PostType.PROJECT" />

    <ProjectsGrid :projects="projects" />
  </AppLayout>
</template>

<page-query>
query getAllProjects {
	posts: allProjectPost {
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
  }
}
</page-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import AppLayout from '@/modules/core/components/AppLayout.vue';
import { isNotNil } from '@/modules/core/utils/isNotNull';
import { usePageQuery } from '@/modules/core/utils/useGridsomeQuery';
import type { GqlgetAllProjectsQuery } from '@/__generated__/graphql';
import ProjectsGrid from '@/modules/postProject/components/ProjectsGrid.vue';
import type { MetaProps } from '@/modules/core/components/Meta.vue';
import { PostType } from '@/modules/post/postTypes';
import SearchBox from '@/modules/core/components/SearchBox.vue';

SearchBox
type ProjectPostResult = NonNullable<
  NonNullable<
    NonNullable<NonNullable<GqlgetAllProjectsQuery['posts']>['edges']>[0]
  >['node']
>;

const metaProps: MetaProps = {
  pageTitle: 'Projects',
  pageDescription: 'Browse all projects',
};

const Project = defineComponent({
  name: 'Project',
  components: {
    AppLayout,
    ProjectsGrid,
    SearchBox,
  },
  setup() {
    const projects = usePageQuery<GqlgetAllProjectsQuery, ProjectPostResult[]>(
      (data) =>
        data?.posts?.edges
          ?.map((project): ProjectPostResult | null => project?.node ?? null)
          .filter(isNotNil) ?? [],
    );

    return {
      projects,
      metaProps,
      PostType,
    };
  },
});
export default Project;
</script>

<style lang="scss">
.Project {
  .container.project {
    max-width: 720px;
  }
  .project-hero {
    padding: 4rem 0;
    text-align: center;
    color: var(--color-base-1);
  }
  .project-header {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
  .project-post {
    display: block;
    padding: 2rem 0;
    text-decoration: none;
    transition: background 0.5s ease;
  }
  .project-post > * {
    transition: transform 0.5s ease;
  }
  .project-post:hover {
    background-color: var(--color-base-1);
  }
  .project-post:hover > * {
    transform: translateX(4rem);
  }
  .project-post h1,
  .project-post h2 {
    margin: 0;
    padding: 0;
  }
  .project-title {
    font-size: 2rem;
    color: var(--color-contrast);
  }
  .project-description {
    color: var(--color-contrast-1);
  }

  @media (min-width: 560px) {
    .project-post {
      padding: 3rem 0;
    }
  }

  @media (min-width: 860px) {
    .project-post {
      padding: 5rem 0;
    }
  }
}
</style>
