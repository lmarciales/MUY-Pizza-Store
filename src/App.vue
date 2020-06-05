<template>
  <div class="row no-gutters main-layout">
    <aside class="col-5 side-brand d-none d-md-flex">
      <side-brand></side-brand>
    </aside>
    <section class="col-7">
      <router-view />
    </section>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
}

.main-layout {
  height: 100%;
  min-height: 100%;

  .side-brand {
    flex-direction: column;
    background-image: url('./assets/imagebkg.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: left top;
  }
}
</style>
<script>
import SideBrand from '@/components/SideBrand';
export default {
  components: { SideBrand }
};
</script>
