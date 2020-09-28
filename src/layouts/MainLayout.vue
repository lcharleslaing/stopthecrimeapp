<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal bordered class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left"/>

        <q-toolbar-title>
          <q-avatar>
            <img src="stopsign.png">
          </q-avatar>
          the Crime®
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right"/>
      </q-toolbar>

      <Links class="top-tabs" />
    </q-header>

    <q-drawer v-model="left" side="left" overlay behavior="mobile" bordered>
      <!-- drawer content -->
      <ExternalLinks/>
    </q-drawer>

    <q-drawer v-model="right" side="right" overlay behavior="mobile" bordered>
      <!-- drawer content -->
      <SourceLinks/>
    </q-drawer>

    <q-page-container>
      <router-view/>
      <!-- place QPageScroller at end of page -->
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="dark"/>
      </q-page-scroller>
    </q-page-container>

    <q-footer reveal bordered class="bg-dark text-white">
      <Links class="bottom-tabs"/>
    </q-footer>

  </q-layout>
</template>

<script>
import Links from '../store/modules/links.js'
import ExternalLinks from '../components/links/external_links'
import SourceLinks from '../components/links/source_doc_links'
import {mapGetters} from 'vuex'

export default {
  components: {
    Links,
    ExternalLinks,
    SourceLinks
  },
  computed: {
    ...mapGetters("links", ['links'])
  },
  data() {
    return {
      tab: '',
      left: false,
      right: false
    }
  }
}
</script>
