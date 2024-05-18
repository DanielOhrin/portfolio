<template>
  <div class="nav-bar">
    <div class="nav-tabs">
      <nav-tab v-for="tab in tabs" :title="tab.title" :link="tab.link" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { RouterLinkProps } from "vue-router"

export interface NavTabProps {
  title: string
  link: RouterLinkProps
}

defineProps({
  tabs: {
    type: Array as PropType<NavTabProps[]>
  }
})
</script>

<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
}

.nav-tabs {
  display: flex;
  flex-flow: row nowrap;
  width: 75%;
}
</style>
