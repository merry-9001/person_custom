<template>
  <div class="slot-child">

        <h3>这里是子组件</h3>
        <!-- <slot>
        <div >
              <span>菜单-1</span>
              <span>菜单-2</span>
              <span>菜单-3</span>
              <span>菜单-4</span>
              <span>菜单-5</span>
              <span>菜单-6</span>
            </div>
        </slot> -->
<slot></slot>

        <slot name="up">
              <span>菜单-4</span>
              <span>菜单-5</span>
              <span>菜单-6</span>
        </slot>
        <slot name="down">
          <span>123456789</span>
        </slot>
  </div>
</template>

<script>
  export default {

  }
</script>
<style scoped lang="scss">

</style>
