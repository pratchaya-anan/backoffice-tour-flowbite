<template></template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    to_tour() {
      this.$router.push("/tour_ls");
    },
  },
  mounted() {
    this.to_tour();
  },
});
</script>
