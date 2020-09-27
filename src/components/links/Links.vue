<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-grey-1"
  >
    <q-list>
      <q-item-label
        header
        class="text-grey-8"
      >
        External Links
      </q-item-label>
      <Links
        link="link"
        v-for="(link, key) in links"
        :key="key"
      />
    </q-list>
  </q-drawer>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters('links', ['links'])
  },
}
</script>

<style lang='sass'>

</style>
