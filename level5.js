let coins = 0;
        function changeCoins(amount) {
            const coinCountSpan = document.getElementById('coinCount');
            if (!coinCountSpan) return;
            coins += amount;
            if (coins < 0) coins = 0;
            coinCountSpan.textContent = coins;
            console.log(`Coins changed to: ${coins}`);
        }
        function resetCoins() {
            const coinCountSpan = document.getElementById('coinCount');
            if (!coinCountSpan) return;
            coins = 0;
            coinCountSpan.textContent = coins;
            console.log('Coins reset');
        }