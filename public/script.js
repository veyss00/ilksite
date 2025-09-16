// Görev ekleme işlevi
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Sil";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});

// Footer için tarih ve isim
window.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footerText");
  const today = new Date();
  const dateStr = today.toLocaleDateString("tr-TR");
  const yapimTarihi = "16.09.2025";

  footer.textContent = `Yapım Tarihi: ${yapimTarihi} | Bugünün Tarihi: ${dateStr} | Veysel Can Aydın`;
});
