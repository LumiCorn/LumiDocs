<template>
  <div class="theme-container">
    <div class="theme-vdoing-content">
      <span>404闹他放的</span>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里什么都没有。`,
  `我是谁？我在哪？`,
  `这是一个Four-Oh-Four.`,
  `看来我们的链接坏掉了~`,
  `缘分让我们消失页面之外～ψ(｀∇´)ψ`,
  `页面被我吃掉啦o(｀ω´ )o桀桀桀`,
  `404，哦404，哦404，有了你生活美好没烦恼～`,
  `I'm not a Teapot..`,
  `你不要木↗️那↘️啊，返回主页啊..！`,
  `GOD I WISH I COULD SLEEP!`,
  `I got' I got' I got' I got 404 not found inside my DNA`,
  `I hope they play fein... But this is in the room404?`,
  `I could lie, say i like 404, like 404.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-vdoing-content
  margin 3rem auto
  padding 1.5rem
  span
    font-size 4rem
    color $accentColor
</style>
