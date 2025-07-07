//your JS code here. If requir
	const counterEl = document.getElementById('counter');
    const buttonEl = document.getElementById('incrementBtn');

    buttonEl.addEventListener('click', () => {
      const currentValue = parseInt(counterEl.textContent, 10);
      alert(currentValue); // Show alert before incrementing
      counterEl.textContent = currentValue + 1;
    });
