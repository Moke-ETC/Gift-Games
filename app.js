const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let balance = 10000;

function updateBalance() {
    document.getElementById("balance").textContent =
        balance.toLocaleString();

    document.getElementById("walletBalance").textContent =
        balance.toLocaleString();
}

function deposit() {
    tg.showAlert("Demo deposit screen");
}

function withdraw() {
    tg.showAlert("Demo withdrawal screen");
}

function openGame(game) {
    tg.showAlert(
        game + " will be developed next."
    );
}

function showProfile() {
    tg.showAlert("Profile section");
}

function home() {
    tg.showAlert("Home");
}

function games() {
    tg.showAlert("Games");
}

updateBalance();