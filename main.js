var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/nppneto');
xhr.send(null);

xhr.onreadystatechange = function() {
    // 4 � o valor da vari�vel quando o corpo da requisi��o retorna
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}