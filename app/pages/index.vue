<template lang="html">
  <div class="page">
    <h1>Hello! Slack.</h1>
    <input v-model="presets.username">
    <div class="btn" @click="post('on')">
      I'm on it!
    </div>
    <div class="btn" @click="post('off')">
      I'm off.
    </div>
    <div class="btn" @click="post('break')">
      Take a break.
    </div>
    <div class="btn" @click="post('back')">
      I'm back.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      presets: {
        channel: '#_bell',
        username: 'webhookおじさん[テスト]',
        icon_url:
          // 'https://ca.slack-edge.com/TC0EDG8CT-UC02CRL01-4030692a978b-512',
          'https://ca.slack-edge.com/TC0EDG8CT-UC02CRL01-4030692a978b-48',
        text: {
          on: "Hello! I'm on it.",
          off: "I'm off, see you.",
          break: 'Take a break.',
          back: "I'm back.",
        },
      },
    }
  },
  methods: {
    post(status) {
      this.$axios.post(
        'https://hooks.slack.com/services/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',
        JSON.stringify({
          ...this.presets,
          text: this.presets.text[status],
        })
      )
    },
  },
}
</script>

<style lang="scss">
.page {
  font-family: helvetica, sans-serif;
  background: #000;
  color: #eee;
  min-height: 100vh;
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
