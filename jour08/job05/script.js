const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => modal.classList.remove('hidden'));
closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));

function showNotification(message) {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.classList.remove('hidden');
    setTimeout(() => notif.classList.add('hidden'), 3000);
}


const toggleBtn = document.querySelector('[command="--toggle"]');
  const menu = document.getElementById(toggleBtn.getAttribute('commandfor'));

  toggleBtn.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
  });