<template>
  <div class="nav-tab">
    <RouterLink
      :to="(link.to as RouteLocationRaw)"
      :replace="(link.replace as boolean | undefined)"
    >
      {{ title }}
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue"
import { RouteLocationRaw, UseLinkOptions } from "vue-router"

export default defineComponent({
  name: "nav-tab",
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: Object as PropType<UseLinkOptions>,
      required: true
    }
  }
})
</script>

<style scoped>
.nav-tab {
  font-size: 20px;
  padding: 4px 8px;
}
</style>
