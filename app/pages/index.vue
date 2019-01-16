<template lang="html">
  <div class="page">
    <h1>Hello! Slack.</h1>
    <p>{{content}}</p>
    <div id="btn">
      button
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        attachments: [
          {
            fallback: 'fallback Test',
            pretext: 'attachments Test',
            color: '#D00000',
            fields: [
              {
                title: 'attachment01',
                value: 'This is attachment',
              },
            ],
          },
          {
            fallback: 'fallback Test',
            pretext: 'attachments Test02',
            color: '#00FF00',
            fields: [
              {
                title: 'attachment02',
                value: 'This is attachment02',
              },
            ],
          },
        ],
      },
    }
  },
  methods: {},
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
#btn {
  font-size: 20px;
  color: #333;
  cursor: pointer;
  background: pink;
  border-radius: 4em;
  line-height: 4em;
  font-weight: 900;
  min-width: 300px;
  margin: 2em 0;
}
</style>
