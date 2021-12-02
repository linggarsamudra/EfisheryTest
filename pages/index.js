import Toggle from '~/components/toggle/index.vue';
import Header from '~/components/header/index.vue';
import Footer from '~/components/footer/index.vue';
import Card from '~/components/card/index.vue';
import Table from '~/components/table/index.vue';
import Pagination from '~/components/pagination/index.vue';

export default {
  
  components: {
    Toggle,
    Header,
    Card,
    Footer,
    Table,
    Pagination,
  },

  data () {
    return {
      showFilter: false,
      tableFishHeader: [
        {
          slug: 'no',
          title: 'No',
          class: 'flex w-1/12'
        },
        {
          slug: 'komoditas',
          title: 'Commodity',
          class: 'flex w-3/12'
        },
        {
          slug: 'area_kota',
          title: 'City',
          class: 'flex w-3/12'
        },
        {
          slug: 'area_provinsi',
          title: 'Province',
          class: 'flex w-3/12'
        },
        {
          slug: 'size',
          title: 'Size',
          class: 'flex w-1/12'
        },
        {
          slug: 'price',
          title: 'Price',
          class: 'flex w-1/12'
        }
      ],
      tableFishData: [
        {
          "no": 1,
          "uuid": "ab122aba-3de3-4565-a25c-894244df2d22",
          "komoditas": "Kakap Nari",
          "area_provinsi": "JAWA TIMUR",
          "area_kota": "BANYUWANGI",
          "size": "20",
          "price": "10",
          "tgl_parsed": "2021-10-31T07:19:02.759Z",
          "timestamp": "1635664742759"
        },
        {
          "no": 2,
          "uuid": "5c42d5fe-8af1-4035-ad9e-24292d39abbd",
          "komoditas": "iwak peyhek",
          "area_provinsi": "ACEH",
          "area_kota": "ACEH KOTA",
          "size": "50",
          "price": "100000",
          "tgl_parsed": "2021-11-27T03:30:21.464Z",
          "timestamp": "1637983821464"
        },
      ],
      filter: {
        currency: false
      }
    }
  },

  async mounted() {
    await this.$store.dispatch('stein.store/get', {skip: 0, limit: 5})
  }

}
