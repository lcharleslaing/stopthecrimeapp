<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-item-label overline>
          External Links
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="link.link !== ''" :to="link.link" v-for="(link, key) in links" :key="key" clickable v-ripple>
      <q-item-section>
        <q-item-label overline autocapitalize>{{ link.title }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="link.link === ''" :href="link.url" tag="a" target="_blank" v-for="(link, key) in links" :key="key" clickable v-ripple>
      <q-item-section>
        <q-item-label overline autocapitalize>{{ link.title }}</q-item-label>
        <q-item-label caption>{{ link.caption }}</q-item-label>
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
    ...mapGetters('links', ['links'])
  }
}
</script>

<style lang='sass'>

</style>
