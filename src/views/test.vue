<template>
  <div class="slots">
      <!-- slot的用法 -->
                  <div v-if="type == 'A'">
                A
            </div>
            <div v-else-if="type=='B'">
                B
            </div>
            <div v-else>
                C
            </div>
      <SlotChild>



            <!-- <div>
              <span>菜单</span>
              <span>菜单2</span>
              <span>菜单3</span>
            </div> -->

      <!-- <div slot="up" >
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div> -->
            <div slot="down">

        <span>菜单21</span>
        <span>菜单31</span>
        <span>菜单41</span>
        <span>菜单51</span>
        <span>菜单61</span>
      </div>
      </SlotChild>
                <!-- <div class="no-name">我是嵌在子组件内不具有属性名的标签</div> -->
  </div>
</template>


<script>
import SlotChild from "@/views/User/slot.vue";
  export default {
    name: 'slots',
    components:{
        SlotChild
    },
    data(){
      return {
        type:1,
      isLoading:true,
      type:'C',
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
