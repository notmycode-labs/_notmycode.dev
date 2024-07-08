
import { defineConfig } from "vite"
import fs from "fs"
import path from "path"


function getHtmlEntries(paths) {
    const entries = {}
  
    paths.forEach((pattern) => {
      const baseDir = path.resolve(__dirname, pattern.baseDir)
      const files = fs.readdirSync(baseDir)
  
      files.forEach((file) => {
        const filePath = path.join(baseDir, file)
        const stat = fs.statSync(filePath)
  
        if (!stat.isDirectory() && file.endsWith(".html")) {
          const name = path.relative(__dirname, filePath).replace(/\\/g, "/")
          entries[name] = filePath
        }
      })
    })
  
    return entries
  }


  export default defineConfig({
    plugins: [],
      //ViteImageOptimizer(DEFAULT_OPTIONS),
  
    
    build: {
      rollupOptions: {
        input: getHtmlEntries([
          { baseDir: ".", patterns: ["index.html"] },
          { baseDir: "blog", patterns: ["*.html"] },
        ]),
      },
    },
  })