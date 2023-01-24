var nota1 = window.document.getElementById('txtn1')
var nota2 = window.document.getElementById('txtn2')
var média = window.document.getElementById('res')

function calcular() {
    n1 = Number(nota1.value)
    n2 = Number(nota2.value)
    if (nota1.value.length == 0 || nota2.value.length == 0 || n1 > 10 || n2 > 10) {
        window.alert('[ERRO] Há valores errados e/ou faltando, por favor os digite novamente!')
        média.innerHTML = ''
    } else {
        var soma = `${n1 + n2}`
        var m = `${soma / 2}`
        média.innerHTML = ''
        média.innerHTML += `<p>\u{1F447}<p>	<p><strong>Nota 1º semestre: ${n1}<br>
        Nota 2º semestre: ${n2}</strong><br><p>
        <p>SUA MÉDIA FINAL EQUIVALE A <strong>${m}</strong>!<p>`
        if (m >= 7) {
            média.innerHTML += `Parabéns, você foi <u>APROVADO</u>! \u{1F44F}`
        } else {
            média.innerHTML += `Que pena, você foi <u>REPROVADO</u>! \u{1F615}`
        }
    }
}