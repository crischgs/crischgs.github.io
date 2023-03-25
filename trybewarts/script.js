const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login');
const inputTextarea = document.getElementById('textarea');
const counterTextarea = document.getElementById('counter');
const btnEnviar = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputTextarea.addEventListener('keyup', () => {
  counterTextarea.innerHTML = 500 - inputTextarea.value.length;
});

check.addEventListener('click', () => {
  if (check.checked === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

// Funções pra colher as informações preenchidas nos campos

function fullName() {
  const firstName = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Nome:</b> ${firstName.value} ${lastName.value}`;
  return paragraph;
}

function mail() {
  const imail = document.getElementById('input-email').value;
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Email:</b> ${imail}`;
  return paragraph;
}

function house() {
  const ihouse = document.getElementById('house').value;
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Casa:</b> ${ihouse}`;
  return paragraph;
}

function family() {
  const ifamily = document.getElementsByClassName('family');
  let familyChoice = '';
  for (let index = 0; index < ifamily.length; index += 1) {
    if (ifamily[index].checked === true) {
      familyChoice = ifamily[index].value;
    }
  }
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Família:</b> ${familyChoice}`;
  return paragraph;
}

function techs() {
  const itechs = document.getElementsByClassName('subject');
  let chosenTechs = '';
  for (let index = 0; index < itechs.length; index += 1) {
    if (itechs[index].checked === true) {
      chosenTechs += `${itechs[index].value}, `;
    }
  }
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Matérias:</b> ${chosenTechs}`;
  return paragraph;
}

function review() {
  const ireview = document.getElementsByClassName('review');
  let userReview = '';
  for (let index = 0; index < ireview.length; index += 1) {
    if (ireview[index].checked === true) {
      userReview = ireview[index].value;
    }
  }
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Avaliação:</b> ${userReview}`;
  return paragraph;
}

function textarea() {
  const itextarea = document.getElementById('textarea').value;
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `<b>Observações:</b> ${itextarea}`;
  return paragraph;
}

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const form = document.getElementById('form');
  const letter = document.getElementById('form-data');
  form.style.display = 'none';
  letter.style.width = '300px';
  letter.style.padding = '40px';
  letter.appendChild(fullName());
  letter.appendChild(mail());
  letter.appendChild(house());
  letter.appendChild(family());
  letter.appendChild(techs());
  letter.appendChild(review());
  letter.appendChild(textarea());
});
