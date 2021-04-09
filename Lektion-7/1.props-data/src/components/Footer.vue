<template>
  <footer>
    <Message :hejsan="msg" />
  </footer>
</template>

<script>
import Message from './Message'
export default {
  // props: {
  //   msg: String
  // }
  props: ['msg'],
  components: {
    Message
  }
}
</script>

<style scoped>
  footer {
    background: darkslateblue;
    padding: 3rem;
    color: #fff;
  }
</style>