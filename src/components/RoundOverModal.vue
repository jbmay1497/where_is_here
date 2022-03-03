<template>
  <div class="modal" v-if="show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p>got here</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>you won!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoundOverModal",
  props: {
    show: Boolean
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