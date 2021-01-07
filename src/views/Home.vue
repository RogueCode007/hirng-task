<template>
  <div class="home">
 
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  data(){
    return {

    }
  },


  beforeCreate() {
    this.$store.dispatch("fetchData");
  },  
  computed:{
    ...mapState({
      
    })
  }
}
</script>
