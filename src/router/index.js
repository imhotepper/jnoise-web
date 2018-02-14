import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PodcastItem from '@/components/Podcast'
import PodcastsList from '@/components/Podcasts'
import Producer from "@/components/Producer"

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Podcasts',
      component: PodcastsList
    },
    {
      path: '/shows/:id',
      name: 'Podcast',
      component: PodcastItem,
      props:true
    },
    {
      path: '/producers/:id/shows',
      name: 'Producer',
      component: Producer,
      props:true
    }
    // ,{
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
