const id = document.getElementById("userid");
const comment = document.getElementById("comment");
const btn = document.querySelector("button");
const list = document.querySelector(".comment-list");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (id !== "" && comment !== "") {
    const add = document.createElement("li");
    list.append(add);
    add.innerHTML = `<b>${id.value}</b> - ${comment.value}`;
  }
});

console.log(list);
