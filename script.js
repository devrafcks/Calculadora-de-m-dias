const form = document.querySelector('form');
const tabela = document.getElementById('tabela');
const mediaValue = document.getElementById('mediaValue');
const situacao = document.getElementById('situacao');

let notas = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nameValue').value.trim();
    const nota = parseFloat(document.getElementById('nota').value);

    if (nome === '' || isNaN(nota) || nota < 0 || nota > 10) {
        alert('Preencha corretamente os campos!');
        return;
    }

    notas.push(nota);

    const novaLinha = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.textContent = nome;

    const tdNota = document.createElement('td');
    tdNota.textContent = nota;

    const tdEmoji = document.createElement('td');
    const emoji = document.createElement('i');
    if (nota <= 6) {
        emoji.className = 'fa-solid fa-face-sad-tear';
        emoji.style.color = '#e74c3c';
    } else {
        emoji.className = 'fa-solid fa-face-smile-beam';
        emoji.style.color = '#2ecc71';
    }
    tdEmoji.appendChild(emoji);

    novaLinha.appendChild(tdNome);
    novaLinha.appendChild(tdNota);
    novaLinha.appendChild(tdEmoji);

    tabela.appendChild(novaLinha);

    atualizarMedia();

    // Limpar campos
    form.reset();
});

function atualizarMedia() {
    const soma = notas.reduce((acc, val) => acc + val, 0);
    const media = soma / notas.length;

    mediaValue.textContent = media.toFixed(2);

    if (media > 6) {
        situacao.textContent = 'Aprovado';
        situacao.style.color = '#2ecc71';
    } else {
        situacao.textContent = 'Reprovado';
        situacao.style.color = '#e74c3c';
    }
}
