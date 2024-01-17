<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent, NLayoutHeader, NSpace, NAvatar } from 'naive-ui'
</script>
<template>
  <n-space vertical size="large">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        <div
          style="display: flex; align-items: center; justify-content: space-between; width: 100%"
        >
          <span>furina</span>
          <n-avatar round size="medium" src="https://huamurui.github.io/logo.svg" />
        </div>
        /></n-layout-header
      >

      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="0"
          :show-collapsed-content="false"
          :width="240"
          show-trigger="arrow-circle"
          content-style="padding: 16px;"
          bordered
        >
          <slot name="side"></slot>
        </n-layout-sider>
        <n-layout-content content-style="padding: 16px;">
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>
