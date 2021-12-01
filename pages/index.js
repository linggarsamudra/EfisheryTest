export default {

  async mounted() {
    await this.$store.dispatch('stein.store/get', {skip: 0, limit: 5})
  }

}
