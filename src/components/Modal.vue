<template>
  <div class="modal">
    <div class="close" @click="$emit('closeModal')"></div>
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.modal {
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem 5rem 3rem;
  background: rgba($color-concrete-solid, 0.7);
  .close {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 32px;
    height: 32px;
  }
  .close:hover {
    cursor: pointer;
  }
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: $color-mine-shaft-darker;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }

}
</style>
