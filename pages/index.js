import Header from '~/components/header/index.vue';
import Footer from '~/components/footer/index.vue';
import Card from '~/components/card/index.vue';
import Table from '~/components/table/index.vue';
import Pagination from '~/components/pagination/index.vue';

export default {
  
  components: {
    Header,
    Card,
    Footer,
    Table,
    Pagination,
  },

  data () {
    return {
      showFilter: false
    }
  },

  async mounted() {
    await this.$store.dispatch('stein.store/get', {skip: 0, limit: 5})
  }

}
