document.addEventListener('DOMContentLoaded', () => {
    const acceptButton = document.getElementById('accept');
    const declineButton = document.getElementById('decline');
    const resultDiv = document.getElementById('result');

    acceptButton.addEventListener('click', () => {
        resultDiv.innerHTML = `
            <p>❤️ I'm overjoyed and my heart is full of happiness! Thank you for saying yes! 🌸</p>
            <p>Our love story is just beginning, and I promise to cherish and adore you every single day.</p>
        `;
        resultDiv.style.display = 'block';
    });

    declineButton.addEventListener('click', () => {
        resultDiv.innerHTML = `
            <p> Fuck You Bitch Go Away  From here   🖕</p>
        `;
        resultDiv.style.display = 'block';
    });
});
