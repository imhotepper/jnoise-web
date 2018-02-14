<template>
  <div>
      <section>
          <div v-for="show in shows" :key="show.id"  class="jn-padd-bottom">
              <router-link :to='"/shows/" + show.id'>{{show.title}} </router-link>
             <div>by: 
                 <router-link :to='"/producers/" + show.producerId +"/shows"'>{{show.producerName}} </router-link>
               on: {{new Date(show.pubDate).toLocaleDateString()}}</div>
            
          </div>
      </section>
      <section>
          <button :disabled="currentPage <= 0"  @click="prev">prev</button>
          <button :disabled="!(currentPage+1 < totalPages)" @click="next">Next</button>
      </section>
  </div>
</template>


<script>
export default {
  name: "Producer",
   props: ["id"],
  data() {
    return {
         totalPages:0,
         currentPage:0,
      shows: [],
      msg: "Welcome to jnoise"
    };
  },
  methods: {
      next(){
         if (!( this.currentPage +1  < this.totalPages) )return;
          this.currentPage++;
           this.loadShows();
         
      },
      prev(){
          if (this.currentPage <= 0 )return;
         
          this.currentPage--;
          this.loadShows();
          console.log("prev page after: ", this.currentPage);
          
      },
      loadShows(){


    this.axios.get(`/producers/${this.id}/shows?page=${this.currentPage}`)
    .then((resp) => {
                    let data = resp.data;
                    this.currentPage = data.number;
                    this.totalPages = data.totalPages;
                    this.shows = data.content;
        })

            
      }
  },
  created: function() {
    this.loadShows();

  }
};
</script>

<style scoped>
    a{
        text-decoration: none
    }
</style>


