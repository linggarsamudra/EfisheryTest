export default {

  props: {
    totalData: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },

  data () {
    return {
      btnRange: 2,
      lastPage: 1
    }
  },

  computed: {
    loopButton() {
      this.lastPage = Math.ceil(this.totalData / this.perPage);
      const startAt = (this.currentPage - this.btnRange) < 1 ? 1 : (this.currentPage - this.btnRange);
      const endAt = (this.currentPage + this.btnRange) > this.lastPage ? this.lastPage : (this.currentPage + this.btnRange);
      return (endAt - startAt) + 1;
    }
  },

  mounted() {
  }

}
