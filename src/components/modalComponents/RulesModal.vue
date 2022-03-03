<template >
  <div class="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          Rules
        </div>
        <div class="modal-body">
          These are the rules
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click.prevent="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RulesModal",
  methods:
      {
        closeModal(){
          this.$emit('closeModal')
        }
      }
}
</script>

<style scoped>
.modal{
  display: block;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
</style>