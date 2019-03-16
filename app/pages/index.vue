<template lang="html">
  <div class="page" id="index">
    <router-link to="/edit">
      <h1 class="page-title">hello Slack. Edit your info.</h1>
    </router-link>
    <!-- <p>store: {{$store.state}}</p> -->
    <div class="btn" id="on" @click="$store.commit('postWebHook', 'on')">
      {{ $store.state.messages.on }}
    </div>
    <div class="btn" id="break" @click="$store.commit('postWebHook', 'break')">
      {{ $store.state.messages.break }}
    </div>
    <div class="btn" id="back" @click="$store.commit('postWebHook', 'back')">
      {{ $store.state.messages.back }}
    </div>
    <div class="btn" id="off" @click="$store.commit('postWebHook', 'off')">
      {{ $store.state.messages.off }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#index {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  // align-items: center;
  padding: 1em 0.8em 2em;
}
.page-title {
  position: fixed;
  top: 0.6em;
  left: 0;
  right: 0;
  font-size: 6vw;
  font-weight: 900;
  color: #444;
  text-align: right;
  text-decoration: underline;
}
.btn {
  font-size: 30px;
  color: #eee;
  cursor: pointer;
  background: #333;
  border-radius: 1em;
  line-height: 3em;
  font-weight: 900;
  min-width: 300px;
  height: 16vh;
  margin: 0.1em 0;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  &#on {
    color: var(--slack-green);
  }
  &#break {
    color: var(--slack-yellow);
  }
  &#back {
    color: var(--slack-blue);
  }
  &#off {
    color: var(--slack-red);
  }
}
</style>
