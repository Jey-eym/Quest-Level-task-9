
        let currentLevel = 1;
        function levelUp() {
            if (currentLevel < 6) {
                currentLevel++;
                const levelSpan = document.getElementById('level');
                const badgeSpan = document.getElementById('badge');
                const levelUpBtn = document.getElementById('levelUpBtn');
                if (levelSpan) levelSpan.textContent = currentLevel;
                if (badgeSpan) badgeSpan.textContent = `Level ${currentLevel}`;
                if (levelUpBtn && currentLevel === 6) levelUpBtn.disabled = true;
                console.log(`Leveled up to ${currentLevel}`);
            } else {
                console.warn('Already at max level');
            }
        }
