const input = document.getElementById("search");
const dataList = document.getElementById("blog-result");
input.addEventListener("keyup", async () => {
  dataList.innerHTML = "";
  const search = this.input.value;
  const result = await (
    await fetch(
      `http://localhost:3333/blogs/router/blog.routes.js?search=${search}`
    )
  ).json();
  for (const blog of result) {
    const item = document.createElement("li");
    item.innerHTML = blog._source.title;
    const br = document.createElement("br");
    const small = document.createElement("small");
    const strong = document.createElement("strong");
    small.innerHTML = blog._source.text;
    strong.innerHTML = blog._source.author;
    item.appendChild(br);
    item.appendChild(small);
    item.appendChild(br);
    item.appendChild(strong);
    dataList.appendChild(item);
  }
});
