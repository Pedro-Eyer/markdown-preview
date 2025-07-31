import { useState } from 'react'
import { marked } from 'marked'
import './App.css'


marked.setOptions({
  breaks: true,
})

const initialMarkdown = `# Título Principal (H1)

## Subtítulo (H2)

Aqui está um [link para o Google](https://www.google.com).

Este é um \`código em linha\`.

\`\`\`
function exemplo() {
  console.log("Bloco de código");
}
\`\`\`

- Item 1
- Item 2
- Item 3

> Este é um blockquote.

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)


**Texto em negrito**
`
function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown)

  return (
    <div className="wrapper">
      <h1>Markdown Previewer</h1>

    <div className="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
      </div>
    </div>
  )
}

export default App
