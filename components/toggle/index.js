export default {

  props: {
    state: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggle(toggle) {
      this.$emit('change', toggle)
    }
  },

  mounted() {
    // console.log('Footer Mounted');
  }

}
