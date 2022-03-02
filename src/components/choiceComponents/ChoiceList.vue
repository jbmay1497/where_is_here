<template>
  <span>
    <ChoiceItem v-for="title in titles"
                :title='title'
                :correctChoice='correctChoice'
                :key="`${title}${curQuestion}`"
                v-on:choiceSelected='handleSelectedChoice'
    ></ChoiceItem>
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
    correctChoice:String,
    curQuestion: Number
  },
  methods: {
    handleSelectedChoice(isCorrect){
      this.$emit('choiceSelected',isCorrect)
    }
  }
}
</script>

<style scoped>

</style>