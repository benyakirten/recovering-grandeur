<template>
  <HomeDefault />
</template>

<script>
import { mapGetters } from "vuex";
import HomeDefault from "./default/HomeDefault";
export default {
  components: {
    HomeDefault
  },
  computed: {
    ...mapGetters("breakpoint", ["breakpoint"])
  }
};
</script>
