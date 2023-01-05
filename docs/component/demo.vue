<template>
  <div>demo</div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
instance?.appContext.config.globalProperties.$oml.onAfterDisplay(() => {
  console.log('222222222222222');
});
</script>

<style lang="scss" scoped></style>
