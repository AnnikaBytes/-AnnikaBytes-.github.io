// src/blog.ts

type Blog = {
  title: string;
  date: string;        // e.g. "10/16/2025"
  description: string;
  image: string;       // e.g. "./images/me.png" or ""
  imageAlt: string;
  slug: string;        // e.g. "hello-world"
};

// At least two blogs
const blogs: Blog[] = [
  {
    title: "Hello World",
    date: "10/16/2025",
    description: "This is my first website and first blog post!",
    image: "",
    imageAlt: "",
    slug: "hello-world"
  },
  {
    title: "What I Learned Building My First Website",
    date: "10/16/2025",
    description: "HTML, CSS, TypeScript, and deploying with GitHub Pages",
    image: "",
    imageAlt: "",
    slug: "what-i-learned-building-my-first-website"
  },
];

// Create a card and append to the container
function renderBlogs(list: Blog[]) {
  const container = document.getElementById("blog-container");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(b => {
    // Blog post container
    const post = document.createElement("div");
    post.className = "post";

    // Title (h1) linking to individual page via slug
    const h1 = document.createElement("h1");
    const a = document.createElement("a");
    a.href = `./blogs/${b.slug}.html`;
    a.textContent = b.title;
    h1.appendChild(a);

    // Optional image
    if (b.image && b.image.trim() !== "") {
      const img = document.createElement("img");
      img.src = b.image;
      img.alt = b.imageAlt || "";
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      img.style.borderRadius = "8px";
      img.style.margin = "8px 0";
      post.append(h1, img);
    } else {
      post.append(h1);
    }

    // Description
    const p = document.createElement("p");
    p.textContent = b.description;
    post.append(p);

    // Date
    const date = document.createElement("div");
    date.className = "date";
    date.textContent = b.date;
    post.append(date);

    // Append to main container
    container.append(post);
  });
}

// Run after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderBlogs(blogs));
} else {
  renderBlogs(blogs);
}
