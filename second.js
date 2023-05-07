let affichage = document.querySelector('.affichage');
let channel = new BroadcastChannel('channel');

channel.addEventListener('message', (e) => {
    affichage.innerHTML = e.data;
});