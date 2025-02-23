document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submission-form');
    const scoreboard = document.getElementById('scoreboard');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const reason = document.getElementById('reason').value;

        if (username && reason) {
            addEntryToScoreboard(username, reason);
            form.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });

    function addEntryToScoreboard(username, reason) {
        const entry = document.createElement('div');
        entry.classList.add('scoreboard-entry');
        entry.innerHTML = `<strong>${username}</strong>: ${reason}`;
        scoreboard.appendChild(entry);
    }
});