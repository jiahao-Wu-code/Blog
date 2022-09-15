<template>
  <div>{{ curValue }}</div>
</template>

<script>
export default {
  name: "ConutTo",
  props: {
    startValue: {
      type: Number,
      required: false,
      default: 0,
    },
    endValue: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: false,
      default: 2600,
    },
  },
  data() {
    return {
      curValue: 0,
      timer: null,
    };
  },
  methods: {
    autoGrow() {
      this.timer = setInterval(() => {
        clearInterval(this.timer);
        const step = Math.floor((this.endValue * 120) / this.duration);
        this.curValue += step;
        if (this.curValue >= this.endValue) {
          this.curValue = this.endValue;
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 50);
    },
  },
  mounted() {
    this.autoGrow();
  },
  watch: {
    curValue: {
      handler() {
        this.autoGrow();
      },
    },
  },
};
</script>