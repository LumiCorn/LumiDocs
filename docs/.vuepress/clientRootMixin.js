import 'katex/dist/katex.min.css'
import renderMathInElement from 'katex/contrib/auto-render'

// 该文件被用来单独加载LaTeX功能。
export default {
  mounted() {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    })
  }
}
