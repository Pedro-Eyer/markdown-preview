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
        <div className="editor-container">
          <label htmlFor="editor" className="label-editor">Digite em Markdown aqui:</label>
          <textarea
            id="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Digite seu markdown aqui..."
          />
        </div>

        <div className="preview-container">
          <h2 className="label-preview">Texto formatado:</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>

      <footer className="footer">
        by Dev Eyer
      </footer>
    </div>
  )
}

export default App
