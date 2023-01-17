<template></template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
onBeforeMount(() => {
  import('oh-my-live2d').then(module => {
    module.loadLive2DModel(omlOptions);
  });
});
</script>
