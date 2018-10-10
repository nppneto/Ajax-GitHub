var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/nppneto');
xhr.send(null);

xhr.onreadystatechange = function() {
    // 4 é o valor da variável quando o corpo da requisição retorna
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}