<template>
  <q-page class="q-ma-lg">
    <Todos />
    <Articles />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import Todos from '../components/todos/todos'
import Articles from '../components/articles/articles_list'
export default {
  name: 'PageIndex',
  components: {Todos, Articles},
  computed: {
    ...mapGetters(['allArticles'])
  }
}
</script>
