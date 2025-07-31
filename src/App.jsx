import { useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState('')

  return (
    <div>
      <h1>Markdown Previewer</h1>

      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div id="preview">
        {markdown}
      </div>
    </div>
  )
}

export default App
