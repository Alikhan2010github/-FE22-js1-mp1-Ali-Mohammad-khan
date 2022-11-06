const body = document.querySelector('body');
const continar = document.createElement('div');

for (let i = 0; i < 5; i++) {
  const h1 = document.createElement('h1');
  h1.innerText = `Rad ${i + 1}`;
  body.appendChild(h1);
  h1.style.textAlign = 'center';
  const size = 10 + (10 * i);
  h1.style.fontSize = `${size}px`;
  let hue = (155) + i * i;
  h1.style.backgroundColor = `hsl(${hue}, 85%, 70%)`;
  h1.style.color = '#8683eb';
}

body.appendChild(continar);
continar.style.border = '2px solid black';
continar.style.display = 'flex';
continar.style.justifyContent = 'space-around';

for (let i = 0; i < 3; i++) {
  const ul = document.createElement('ul');
  ul.style.listStyleType = 'none';
  ul.style.backgroundColor = '#8583eb';
  ul.style.border = '10px solid #8583eb';
  ul.style.mrgin = '50px';
  ul.style.width = '50px';
  ul.style.padding = '0';
  continar.appendChild(ul);
  
  if (i == 0) {
    for (let i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.innerText = i;
      if (li.innerText % 2 == 1) {
        li.style.backgroundColor = 'white'
      } else if (li.innerText == 4) {
        li.style.backgroundColor = 'none';
        li.style.color = 'white';
      } else {
        li.style.backgroundColor = 'black';
        li.style.color = 'white';
      }
      ul.appendChild(li);
    }
     } else if (i == 1) {
    for (let i = 9; i >=0; i--) {
      let li = document.createElement('li');
      li.innerText = i;
      if (li.innerText % 2 == 1) {
        li.style.backgroundColor = 'white';
      } else if (li.innerText == 8) {
        li.style.color = 'white';
        li.style.backgroundColor = 'none'
      } else {
        li.style.backgroundColor = 'black';
        li.style.color = 'white';
      }
      li.style.textAlign = 'center';
      ul.appendChild(li);
    }
  } else {
    const siffror = ["Ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
    for (let i = 0; i < siffror.length; i++) {
      const li = document.createElement('li');
      li.innerText = siffror[i];
      if (li.innerText == "sex") {
        li.style.backgroundColor = 'none';
        li.style.color = 'white';
      } else if (i % 2 == 1) {
        li.style.backgroundColor = 'white'
      } else if (i % 2 == 0) {
        li.style.backgroundColor = 'black';
        li.style.color = 'white';
      }
      li.style.textAlign = 'right';
      ul.appendChild(li);
    }
  }
}
