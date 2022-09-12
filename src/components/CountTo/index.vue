<template>
  <div></div>
</template>

<script>
export default {
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
  data(){
    return{
        curValue: 0,
    }
  },
  mounted() {},
};
</script>