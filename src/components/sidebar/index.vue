<script setup lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";
import { NMenu, MenuOption } from 'naive-ui';

import { routes } from '@/router/routes'

const menuOptions: MenuOption[] = routes.map((route: RouteRecordRaw) => {
  return {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: route.path
          }
        },
        { default: () => route.name }
      ),
    key: route.path,
  }
})

const handleUpdateValue = (path: string) => {
  console.log(path)
}


</script>
<template>
  <div class="sidebar">
    <n-menu
      :collapse="true"
      :default-openeds="['/dashboard']"
      :default-active="['/dashboard']"
      :options="menuOptions"
      @update:value="handleUpdateValue"
    />
  </div>
</template>
<style scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>