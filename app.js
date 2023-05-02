const form = document.querySelector('form');
form.addEventListener('submit', addFood);

function addFood(event) {
  event.preventDefault();

  const foodInput = document.querySelector('#food');
  const carbsInput = document.querySelector('#carbs');

  const food = foodInput.value;
  const carbs = parseInt(carbsInput.value);

  console.log(`You ate \${food} with \${carbs} carbs.`);
}
