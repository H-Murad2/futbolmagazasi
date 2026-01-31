const ideascontainer = document.getElementById("ideascontainer");
const subs = [];
const comments = [];
function commentYaz() {
  const sub = document.getElementById("sub").value;
  const comment = document.getElementById("comment").value;
  if (sub.trim() === "" || comment.trim() === "") {
    alert("Sub və comment boş ola bilməz!");
    return;
  }
  subs.push(sub);
  comments.push(comment);

  ideascontainer.innerHTML = "";
  for (let i = 0; i < subs.length; i++) {
    ideascontainer.innerHTML += `
      <div class="flex items-center mb-2">
        <div>
          <div class="text-lg font-medium text-gray-800">Istifadeci adi : ${subs[i]}</div>
        </div>
      </div>
      <p class="text-lg leading-relaxed mb-6">
       Comment : ${comments[i]}
      </p>
    `;
  }
  document.getElementById("sub").value = "";
  document.getElementById("comment").value = "";
}
