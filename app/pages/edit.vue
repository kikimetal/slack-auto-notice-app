<template lang="html">
  <div class="page" id="edit">
    <h1 class="page-title">Edit your info.</h1>
    <router-link to="/" class="submit">
      OK!
    </router-link>
    <div id="input-container">
      <div v-for="(key, i) in ['slackWebHookURL', 'channel', 'username', 'icon_url']" :key="'common' + i">
        <h2 class="key">{{ key }}</h2>
        <input v-if="key === 'channel' || key === 'username'"
        class="input" :id="key" type="text" :value="$store.state[key]" @input="update">
        <textarea v-else
        class="input" :id="key" :value="$store.state[key]" @input="update"></textarea>
      </div>
      <div v-for="(key, i) in ['on', 'off', 'break', 'back']" :key="'message-' + i">
        <h2 class="key">"{{ key }}" message</h2>
        <input
        class="input" :id="key" type="text" :value="$store.state.messages[key]" @input="updateMessage">
      </div>
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
    updateMessage(e) {
      const nextState = {
        key: e.srcElement.id,
        value: e.target.value,
      }
      this.$store.commit('updateMessage', nextState)
    },
  },
}
</script>

<style lang="scss" scoped>
#edit {
  padding: 0 1em 100px;
}
.page-title {
  padding: 0.8em 0 0;
  font-size: 11vw;
  font-weight: 900;
  color: var(--slack-yellow);
  text-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.2);
}
.submit {
  width: 200px;
  display: block;
  padding: 0.8em 0;
  border-radius: 3em;
  line-height: 1;
  font-size: 20px;
  font-weight: 900;
  color: rgba(#fff, 0.8);
  background: var(--slack-green);
  text-align: center;
  margin: 0.2em 0.5em 1.3em auto;
}
.key {
  font-size: 1.2em;
  font-weight: 600;
  color: #999;
}
.input {
  display: block;
  border: none;
  color: #eee;
  cursor: pointer;
  background: #333;
  border-radius: 8px;
  line-height: 1.5em;
  width: 100%;
  margin: 0.4em 0 1.6em;
  padding: 0.4em 0.6em;
}
</style>
