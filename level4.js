function validateName() {
            const nameInput = document.getElementById('nameInput');
            const messageDiv = document.getElementById('message');
            if (!nameInput || !messageDiv) return;
            const name = nameInput.value.trim();
            if (name === '') {
                messageDiv.innerHTML = '<p class="text-danger"><i class="bi bi-exclamation-triangle"></i>Error: Name cannot be empty!</p>';
            } else {
                messageDiv.innerHTML = `<p class="text-success"><i class="bi bi-check-circle"></i>Success: Welcome, ${name}!</p>`;
            }    
            messageDiv.style.opacity = '0';
            setTimeout(() => { messageDiv.style.opacity = '1'; }, 100);
            console.log(`Validation result for: ${name}`);
        }