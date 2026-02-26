// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

menuBtn?.addEventListener("click", () => {
  const isOpen = drawer.style.display === "block";
  drawer.style.display = isOpen ? "none" : "block";
});

// Fechar drawer ao clicar
drawer?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => (drawer.style.display = "none"));
});

// Copiar endereço + toast
const copyBtn = document.getElementById("copyAddr");
const addrEl = document.getElementById("addr");
const toast = document.getElementById("toast");

copyBtn?.addEventListener("click", async () => {
  const txt = addrEl?.textContent?.trim() || "";
  try{
    await navigator.clipboard.writeText(txt);
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 1800);
  }catch(e){
    alert("Não consegui copiar automaticamente. Copie manualmente:\n\n" + txt);
  }
});

// Ano
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal animation
const obs = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add("in");
  }
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

// Modal galeria
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");
const modalX = document.getElementById("modalX");

function openModal(src){
  modalImg.src = src;
  modal.setAttribute("aria-hidden", "false");
}
function closeModal(){
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

document.querySelectorAll(".gItem").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.img));
});

modalClose?.addEventListener("click", closeModal);
modalX?.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
