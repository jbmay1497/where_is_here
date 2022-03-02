<template>
  <button type="button" class="btn btn-outline-dark">{{ title }}</button>
</template>

<script>
export default {
  name: "ChoiceItem",
  props: {
    title: String,
  },
}
</script>

<style scoped>

</style>