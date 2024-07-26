import metadata from "/metadata.json"

function renderBlogPosts() {
  const container = document.getElementById("blog-posts")
  if (!container) {
    console.error(`Container element with id 'blog-posts' not found.`)
    return
  }

  Object.keys(metadata).forEach((key) => {
    const post = metadata[key]
    const postElement = document.createElement("div")
    postElement.classList.add("blog-post")
    postElement.innerHTML += `
    <div class="posts mt-2 mb-2 border-l-2 pl-1.5 border-rose-700">
    <a href="/blog/${key}">
      <h1>${post.author} - ${post.title}</h1>
      <p>Date: ${new Date(post.date).toLocaleDateString()}</p>
      <p>Tags: ${post.tags.join(", ")}</p>
</a>
</div>
    `
    container.appendChild(postElement)
  })
}

document.addEventListener("DOMContentLoaded", renderBlogPosts)
