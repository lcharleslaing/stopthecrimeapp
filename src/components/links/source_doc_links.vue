<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label overline>
          Source Document Links
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="link.link !== ''" :to="link.url" v-for="(link, key) in allLinks" :key="key" clickable v-ripple>
      <q-item-section>
        <q-item-label overline>{{ link.title }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
        <q-item-label caption>{{ link.date }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="link.link === ''" :href="link.url" tag="a" target="_blank" v-for="(link, key) in source_doc_links" :key="key" clickable v-ripple>
      <q-item-section>
        <q-item-label overline>{{ link.title }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
        <q-item-label caption>{{ link.date }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allLinks'])
  }
}
</script>

<style lang='sass'>

</style>
