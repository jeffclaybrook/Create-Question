const options = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');

function addOption() {
   let option = document.createElement('li');
   option.innerHTML = `
      <input type="radio" name="option" required>
      <input type="text" class="option-text" required>
      <button class="delete-btn"><span class="delete-icon"></span></button>
   `;
   options.appendChild(option);
}

addBtn.addEventListener('click', addOption);