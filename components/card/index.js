export default {

  props: {
    icon: {
      type: Array,
      default: () => ['fas', 'chart-line'],
    },
    title: {
      type: String,
      default: 'Title Here',
    },
    description: {
      type: String,
      default: 'Some Description',
    },
    summary: {
      type: String,
      default: 'Some More Description',
    },
  },

  mounted() {
  }

}
