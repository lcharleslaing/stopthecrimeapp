<template>
  <div class="articles">
      <h3 class="text-center">Articles</h3>
      <div class="article" v-for="(article, key) in allArticles" :key="key">
        <h4>{{article.title}}</h4>
        <p>{{article.summary}}</p>
        <p>{{article.content}}</p>
        <p style="color: red;" v-if="!article.published">Not Published</p>
        <p style="color: green;" v-if="article.published">Published</p>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allArticles'])
  },
  methods: {
    ...mapActions(['getArticles'])
  },
  created(){
    this.getArticles()
  }
}
</script>

<style lang='sass'>

</style>
