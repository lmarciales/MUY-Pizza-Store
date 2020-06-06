<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> </slot>
            <i class="fas fa-times" @click="$emit('close')"></i>
          </div>

          <div class="modal-body">
            <slot name="body"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal'
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      max-width: 725px;
      min-width: 225px;
      margin: 0 auto;
      padding: 20px 30px;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
      border-radius: 30px;

      .modal-header {
        border: none;
        display: flex;
        justify-content: center;
        position: relative;

        i {
          position: absolute;
          cursor: pointer;
          top: 10%;
          right: 0;
        }
      }

      .modal-body {
        margin: 0;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
