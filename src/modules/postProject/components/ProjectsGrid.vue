<template>
  <div class="ProjectsGrid">
    <div class="project" v-for="project in projects" :key="project.postId">
      <g-link :to="project.path" class="project-link">
        <g-image
          :src="getThumbnail(project)"
          :alt="project.title"
          class="thumbnail"
        />
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="categories">
          <span
            class="category"
            v-for="(category, index) in project.tags"
            :key="index"
            >{{ category }}</span
          >
        </div>
      </g-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from '@vue/composition-api';

import type { GqlProjectPost } from '@/__generated__/graphql';

const ProjectsGrid = defineComponent({
  name: 'ProjectsGrid',
  props: {
    projects: {
      type: Array as PropType<GqlProjectPost[]>,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const { projects } = toRefs(props);

    const getThumbnail = (project: GqlProjectPost) => project.images?.[0]?.path ?? null;

    return {
      getThumbnail,
    };
  },
});
export default ProjectsGrid;
</script>

<style lang="scss">
.ProjectsGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;

  .project {
    grid-column: auto / span 2;
    text-align: center;
  }
  .project-link {
    text-decoration: none;
  }
  .thumbnail {
    height: 560px;
    object-fit: cover;
    transition: all 0.15s ease;
    box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
  }
  .project-title {
    font-size: 1rem;
    color: var(--color-contrast);
    margin: 2rem 0 1rem 0;
  }
  .categories {
    font-size: 0.8rem;
    color: var(--color-contrast-1);
  }
  .category {
    margin-right: 0.8rem;
  }
  .category:last-of-type {
    margin: 0;
  }
  .project:hover .thumbnail {
    transform: scale(1.02);
    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 920px) {
    .project {
      grid-column: auto / span 1;
    }
    .project:nth-child(3n + 1) {
      grid-column: auto / span 2;
    }
  }
}
</style>
