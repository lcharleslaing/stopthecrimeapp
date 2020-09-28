<template>
  <div class="todos">
    <h3 class="text-center">Todos</h3>
    <div class="todo" v-for="(todo, key) in allTodos" :key="key">
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
  methods: {
    ...mapActions(['getTodos'])
  },
  created(){
    this.getTodos()
  }
}
</script>

<style lang='sass'>

</style>
