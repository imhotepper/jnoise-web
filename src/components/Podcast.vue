<template>
  <div >
      <h3> {{show.title}} </h3>
      <div>
          <audio ref="player" controls preload="auto">
            <source v-bind:src="show.mp3">
            Your browser does not support the audio element.
            </audio>
      </div>
         <div>
                by:<router-link :to='"/producers/" + show.producerId +"/shows"'>{{show.producerName}} </router-link>
               on: {{new Date(show.pubDate).toLocaleDateString()}}
            </div>
      <div>
           <p v-html="show.description"></p> 
      </div>
  </div>
</template>

<script>
export default {
  name: "Podcast",
  props: ["id"],
  data() {
    return {
      show: {},
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {
    this.axios.get(`/shows/${this.id}`).then(resp => {
        this.show = resp.data;
        console.log(this.show);
        });
    console.log(this.id);
  },
  mounted: function () {
  	this.$watch('show.mp3', function () {
    	this.$refs.player.load()
    })
  },
};
</script>