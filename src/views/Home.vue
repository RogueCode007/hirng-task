<template>
  <div class="home">
    <div v-if="error" class="error"><p>Looks like we ran into some trouble fetching your data :(</p></div>
    <div v-else-if="loading" class="loading"><p>Fetching data...</p></div>
    <div v-else class="container">
      <div class="flex">
        <div class="box-1"></div>  
        <div class="box-2"></div>
      </div>
      <div class="profile">
        <p>{{user.name}}</p>
        <img :src="require('@/assets/wom.jpg')" alt="lady image" >
        <ul class="list">
          <li>Home</li>
          <li>About</li>
          <li :style="{'background-size': 'cover','background-image':'url(https://images.unsplash.com/photo-1511929825537-516974a253df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)'}" class="img-circle"></li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="links">
        <a :href="`https://instagram/${user.social_media.instagram}`"><span class="iconify" data-icon="ri:instagram-fill" data-inline="false"></span></a>
        <a :href="`https://twitter/${user.social_media.twitter}`"><span class="iconify" data-icon="fa-brands:twitter-square" data-inline="false"></span></a>
        <a :href="user.social_media.snapchat"><span class="iconify" data-icon="fa-brands:snapchat-square" data-inline="false"></span></a>
        <a :href="user.social_media.email"><span class="iconify" data-icon="mdi:gmail" data-inline="false"></span></a>
      </div>
    </div>
    
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
      user: 'user',
      loading: 'loading',
      error: 'error'
    })
  }
}
</script>
<style>
.box-1{
  background-color: #BD0F4D;
}
.iconify{
  display: block;
  color: white;
  margin: 15px 0;
  font-size: 1.5em
}
div.container{
  position: relative;
}
div.flex{
  display: flex
}
.box-1, .box-2{
  min-height: 200vh;
  width: 50%;
}
.box-2{
  background-color: #CB2964;
}
div.error, div.loading{
  background-image: linear-gradient(90deg, #BD0F4D, #CB2964);
  min-height: 100vh;
}
div.error p, div.loading p{
  color: white;
  padding-top: 100px
}
div.profile{
  width: 95%;
  position: absolute;
  top: 20px;
  left: 2%
}
div.profile p{
  color: white;
  font-size: 1.2em;
  letter-spacing: 0.4em;
  font-weight: 100;
}
div.profile img{
  width: 400px;
  height: 500px
}
ul.list{
  list-style-type: none;
  margin: 30px auto;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.list li{
  color: white;
  font-size: 0.95em
}
li.img-circle{
  width: 50px;
  height: 50px;
  border-radius: 50%
}
div.links{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 150px;
  right: 20px
}

@media only screen and (min-width: 768px){
  .box-1, .box-2{
  min-height: 300vh;
  width: 50%;
  }
  .iconify{
    font-size: 2em
  }
  div.profile{
  width: 60%;
  position: absolute;
  top: 20px;
  left: 20%
  }
  div.profile img{
  width: 550px;
  height: 600px
  }
  div.profile p{
  color: white;
  font-size: 1.5em;
  letter-spacing: 0.4em;
  font-weight: 100;
  }
.list li{
  color: white;
  font-size: 1.2em
}
}
</style>