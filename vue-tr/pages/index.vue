<template>
  <div>
    <h1>Welcome!</h1>
    {{counter}}
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        counter: state => state.counter
      })
    }
  }
</script>

