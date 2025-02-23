document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submissionForm');
    const scoreboard = document.getElementById('scoreboard');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const reason = document.getElementById('reason').value;

        if (username && reason) {
            const table = scoreboard.getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();

            const usernameCell = newRow.insertCell(0);
            const reasonCell = newRow.insertCell(1);

            usernameCell.textContent = username;
            reasonCell.textContent = reason;

            form.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });
});