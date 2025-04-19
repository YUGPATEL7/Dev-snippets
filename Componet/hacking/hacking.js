const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all Passwords and Personal files to server",
    "Cleaning up"
];
let index = 0;

function showMessage() {
    if (index< messages.length){
        const output =document.getElementById('output');
        const message = messages[index];
        output.innerHTML += `<div>${message}<span class="blinking-dots"><span>.</span><span>.</span><span>.</span></span></div>`;
        index++;
        setTimeout(showMessage, 2000);
    }
}
showMessage();


