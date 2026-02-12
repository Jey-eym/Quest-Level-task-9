const correctDoor = Math.floor(Math.random() * 3) + 1;
        console.log(`Correct door is: ${correctDoor}`); 
        function chooseDoor(door) {
            const resultDiv = document.getElementById('result');
            if (!resultDiv) return;
            if (door === correctDoor) {
                resultDiv.innerHTML = '<p class="text-success"><i class="bi bi-trophy"></i>Success! You chose the correct door. Quest complete!</p>';
            } else {
                resultDiv.innerHTML = '<p class="text-danger"><i class="bi bi-x-circle"></i>Error: Wrong door! Try again.</p>';
            }
            // Add fade-in effect
            resultDiv.style.opacity = '0';
            setTimeout(() => { resultDiv.style.opacity = '1'; }, 100);
            console.log(`Door chosen: ${door}, Correct: ${correctDoor}`);
        }