<template lang="html">
  <div class="page">
    <h1>Hello! Slack.</h1>
    <p>store: {{$store.state}}</p>
    <input id="username" :value="$store.state.username" @input="update">
    <div class="btn" @click="$store.commit('postWebHook', 'on')">
      I'm on it!
    </div>
    <div class="btn" @click="$store.commit('postWebHook', 'off')">
      I'm off.
    </div>
    <div class="btn" @click="$store.commit('postWebHook', 'break')">
      Take a break.
    </div>
    <div class="btn" @click="$store.commit('postWebHook', 'back')">
      I'm back.
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    update(e) {
      const nextState = {
        key: e.srcElement.id,
        value: e.target.value,
      }
      this.$store.commit('update', nextState)
    },
  },
}
</script>

<style lang="scss">
.page {
  font-family: helvetica, sans-serif;
  background: #000;
  color: #eee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.btn {
  font-size: 20px;
  color: #333;
  cursor: pointer;
  background: pink;
  border-radius: 3em;
  line-height: 3em;
  font-weight: 900;
  min-width: 300px;
  margin: 0.8em 0;
}
</style>
