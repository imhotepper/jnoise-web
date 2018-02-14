<template>
   <section>
          <div v-for="show in shows" :key="show.id"  class="jn-padd-bottom">
              <router-link :to='"/shows/" + show.id'>{{show.title}} </router-link>
             <div>
                by:<router-link :to='"/producers/" + show.producerId +"/shows"'>{{show.producerName}} </router-link>
                on: {{new Date(show.pubDate).toLocaleDateString()}}
            </div>            
          </div>
      </section>
</template>
<script>
export default {
    props:["shows"]
}
</script>
