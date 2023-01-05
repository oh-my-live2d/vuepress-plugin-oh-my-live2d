# home

---

content

---

<script lang='ts' setup>
  import { getCurrentInstance } from 'vue';
  const { appContext } = getCurrentInstance();
  appContext.config.globalProperties.$oml.onAfterDisplay(() => {
  console.log('222222222222222');
});
</script>

# footer
