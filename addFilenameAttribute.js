export function addFilenameAttribute(md) {
  const defaultFenceRenderer = md.renderer.rules.fence

  md.renderer.rules.fence = function (tokens, idx, options, env, self) {
    const token = tokens[idx]

    if (token.info) {
      const info = token.info.split(" ")
      const lang = info.shift()
      const meta = info.join(" ")

      // Extract filename from meta
      const filenameMatch = meta.match(/filename="([^"]+)"/)
      if (filenameMatch) {
        const filename = filenameMatch[1]
        token.attrSet("data-filename", filename)
      }
    }

    // Render the <pre> tag with added attributes
    let renderedToken = defaultFenceRenderer
      ? defaultFenceRenderer(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options)

    // Find the index of the <code> tag within <pre>
    const codeTagIndex = renderedToken.indexOf("<code")

    // Insert data-filename attribute into <code> tag
    if (codeTagIndex !== -1) {
      const insertPosition = renderedToken.indexOf(">", codeTagIndex)
      if (insertPosition !== -1) {
        const filenameAttr = token.attrGet("data-filename")
          ? ` data-filename="${token.attrGet("data-filename")}"`
          : ""

        renderedToken =
          renderedToken.slice(0, insertPosition) +
          filenameAttr +
          renderedToken.slice(insertPosition)
      }
    }

    return renderedToken
  }
}
