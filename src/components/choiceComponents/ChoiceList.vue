<template>
  <span class="row" v-for="title in titles" :key="title">
    <ChoiceItem  :title='title'/>
  </span>
</template>

<script>
import ChoiceItem from './ChoiceItem.vue'

export default {
name: "ChoiceList",
  components: {
    ChoiceItem
  },
  props: {
    titles: Object,
  },
}
</script>

<style scoped>

</style>