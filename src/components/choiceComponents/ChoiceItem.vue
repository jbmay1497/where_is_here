<template>
  <button type="button" class="btn btn-lg" :class="buttonClass"  @click.prevent='checkCorrect'>{{ title }}</button>
</template>

<script>
export default {
  name: "ChoiceItem",
  props: {
    title: String,
    correctChoice: String,
  },
  data() {
    return {
      isCorrect: null,
      currentQuestion: this.curQuestion
    }
  },
  methods: {
    checkCorrect(){
      if (this.title === this.correctChoice){
        this.isCorrect = true;
      }else{
        this.isCorrect = false;
      }
      this.$emit('choiceSelected',this.isCorrect)
    }
  },
  computed: {
    buttonClass() {
      return {
        'btn-outline-dark': this.isCorrect === null,
        'btn-success': this.isCorrect !== null && this.isCorrect,
        'btn-danger': this.isCorrect !== null && !this.isCorrect,
        'disabled': this.isCorrect !== null && !this.isCorrect,
      }
    }
  }
}
</script>

<style scoped>
.btn{
  margin-top:1%;
  margin-left:.25em;
  margin-right:.25em;
}
</style>