<template>
  <div>
      <h1>
          <input type="text" class="jn-search" placeholder="what are you looking for ?" @keyup.enter="filterShows" @keyup.esc="clearFilter">
      </h1>
      <section v-show="totalPages == 0 && currentPage == 0 && !loading">
          <h3>No podcasts found!</h3>
      </section>
      <section>
          <div v-for="show in shows" :key="show.id"  class="jn-padd-bottom">
              <router-link :to='"/shows/" + show.id'>{{show.title}} </router-link>
             <div>
                by:<router-link :to='"/producers/" + show.producerId +"/shows"'>{{show.producerName}} </router-link>
                on: {{new Date(show.pubDate).toLocaleDateString()}}
            </div>            
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
  name: "Podcasts",
  data() {
    return {
        loading:false,
         totalPages:0,
         currentPage:0,
         q:'',
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

this.loading = true;
    this.axios.get(`/showslist?page=${this.currentPage}&q=${this.q}`)
    .then((resp) => {
                    let data = resp.data;
                    this.currentPage = data.number;
                    this.totalPages = data.totalPages;
                    this.shows = data.content;
                    this.loading = false;
        }).catch((err)=>{
            this.loading = false;
        })

            
      },
      filterShows(ev){
          console.log("filtering on: ", this.q)
          this.q =ev.target.value;
          this.loadShows();
      },
      clearFilter(ev){ev.target.value="";this.filterShows(ev);}
  },
  created: function() {
    this.loadShows();

  }
};
</script>

<style scoped>
    a{
        text-decoration: none;
    
    }

    .jn-search{
            font-size:14pt;
            width: 300px;
            text-align: center;
    }
</style>


