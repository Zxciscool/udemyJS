const div = document.createElement('div');
let textNode = document.createTextNode('А вот и я');

document.body.append(div);

// div.classList.toggle('hidden');
div.innerHTML = 'hello';

const userValue = document.getElementById('elem');
const btnIe = document.getElementById('butt');

btnIe.onclick = () => {
    userValue.classList.add('hidden');
    btnIe.classList.add('hidden');
    div.innerHTML = userValue.value;
    console.log(userValue.value);
};

