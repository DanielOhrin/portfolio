<template>
  <Navbar :tabs="tabs" />
  <RouterView />
</template>

<script setup lang="ts">
import Navbar, { NavTabProps } from "./components/Navbar.vue"

const tabs: NavTabProps[] = [
  {
    title: "Home",
    link: {
      to: {
        name: "home"
      }
    }
  },
  {
    title: "About Me",
    link: {
      to: {
        name: "about-me"
      }
    }
  }
]
</script>
