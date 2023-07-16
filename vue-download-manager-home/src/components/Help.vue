<template>
    <div class="shadow">
        <div class="win">
            <!--<img src="~@/assets/B-vtech-logo.jpg" />-->
            <div class="content">Help...</div>
           
        </div>
    </div>
</template>

<script>
export default {
  name: "HelpView",
  props:{

      msg:String
  },

    methods:{
      show(){
          alert("hello")
      }

 }
};

</script>

<style lang="scss" scoped>
</style>
