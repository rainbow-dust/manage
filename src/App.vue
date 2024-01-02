<script setup lang="ts">
import SideBar from '@/components/sidebar/index.vue'
import { NButton } from 'naive-ui'
</script>

<template>
  <div class="view">
    <SideBar class="left" />
    <div class="right">
      <n-button>naive-ui</n-button>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
}

.left {
  width: 200px;
  height: 100%;
}

.right {
  flex: 1;
  height: 100%;
}
</style>
