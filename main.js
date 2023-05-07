// créer un channel Broadcast
let channel = new BroadcastChannel('channel');



let btn_envoyer = document.querySelector('#btn_envoyer');
btn_envoyer.addEventListener('click', (e) =>{ 
    e.preventDefault();
    let input_value = document.querySelector('#input_value').value;   
    channel.postMessage(input_value);
});