<template>
  <div class="Hero">
    <h1 class="Hero__title">Simplicity. Aesthetics. Value.</h1>
    <h2 class="Hero__subtitle">
      Hi there, I'm an independent Digital Designer &amp; Art Director focused
      on digital design for brands that like to have fun.
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

const Hero = defineComponent({
  name: 'Hero',
});
export default Hero;
</script>

<style lang="scss">
.Hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem 0;

  &__title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
  }

  &__subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
  }

  p {
    margin: 0;
    padding: 0;
  }
}
</style>
