<template>
  <AppLayout :meta-props="metaProps" class="Error404">
  <!-- TODO UPDATE -->
    <h1>404</h1>
    <p>
      This seems to be your lucky number!
    </p>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import AppLayout from '@/modules/core/components/AppLayout.vue';
import type { MetaProps } from '@/modules/core/components/Meta.vue';

const metaProps: MetaProps = {
  pageTitle: '404 Not Found',
  pageDescription: 'This seems to be your lucky number!',
};

const Error404 = defineComponent({
  name: 'Error404',
  components: {
    AppLayout,
  },
  setup() {
    return {
      metaProps,
    };
  },
});
export default Error404;
</script>
