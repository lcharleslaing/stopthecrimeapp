<template>
  <div>
    <q-tabs
      v-model="tab"
      no-caps
      class="bg-dark text-white shadow-2"
    >
      <q-route-tab v-if="link.link !== ''" :to="link.link" v-for="(link, key) in links" :key="key" :name="link.title" :label="link.title"/>
    </q-tabs>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      tab: ''
    }
  },
  computed: {
    ...mapGetters(['allLinks'])
  }
}
</script>

<style lang='sass'>

</style>
