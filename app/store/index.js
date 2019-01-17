import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      slackWebHookURL:
        'https://hooks.slack.com/services/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',
      channel: '#_bell',
      username: 'webhookおじさん',
      icon_url:
        // 'https://ca.slack-edge.com/TC0EDG8CT-UC02CRL01-4030692a978b-512',
        'https://ca.slack-edge.com/TC0EDG8CT-UC02CRL01-4030692a978b-48',
      messages: {
        on: "Hello! I'm on it.",
        off: "I'm off, see you.",
        break: 'Take a break.',
        back: "I'm back.",
      },
    }),
    mutations: {
      update(state, nextState) {
        state[nextState.key] = nextState.value
      },
      updateMessage(state, nextState) {
        state.messages[nextState.key] = nextState.value
      },
      postWebHook(state, nextStatus) {
        this.$axios
          .post(
            state.slackWebHookURL,
            JSON.stringify({
              channel: state.channel,
              username: state.username,
              icon_url: state.icon_url,
              text: state.messages[nextStatus],
            })
          )
          .then(res => console.log(res))
      },
    },
  })
}

export default createStore
