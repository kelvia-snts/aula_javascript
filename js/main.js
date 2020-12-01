function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar ;)");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/kelvia-kelline/");
    //window.location.href = "https://www.linkedin.com/in/kelvia-kelline/"; // abre na mesma página
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*FUNCTION 
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão","Japão", "Brasil"));

function soma(n1,n2){
    return n1 + n2; 
}
alert(soma(5,10));

function soma(n1,n2){
    return n1 + n2; 
}
alert(soma(5,10));

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade? ");
console.log(validaIdade(idade));
*/

/*E DATE 
var d = new Date();
alert(d);

var d = new Date();
alert(d.getMonth()+1); //mês

var d = new Date();
alert(d.getMinutes()); // minuto

var d = new Date();
alert(d.getDay()-1); 
getHours();
getseconds();
*/

/*LAÇOS DE REPETIÇÃO
var count = 0;
while (count <= 5){
    console.log(count)
    //alert(count);
    count = count +1; //count++ é  a mesma coisa.
}

var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*CONDICIONAIS
var idade = 18; // Já determina o valor
if (idade>=18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}

var idade = prompt("qual sua idade? ") //Prompt fará a pergunta para o usuário.
if (idade>=18){
    alert("você é maior de idade")
}else{
    alert("você é menor de idade")
}

*/

/*DICIONÁRIO
var fruta = {nome:"maça", cor:"Vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maça", cor:"Vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*ARRAY 
var lista =["maça", "pera", "laranja"];
console.log(lista);
console.log(lista.join(" - "));
console.log(lista.join(" - ")); //para separar elementos , qualquer carcter |/-= ou só espaço. ou nada o que faz ficar todas juntas
console.log(lista[0]); //aparecerá maça, pois 0 é igual ao 1º elemento.
console.log(lista.toString()); //vira string, perde a referencia de array
console.log(lista.toString()[0]); //primeiro elemento da string ex lista= maça lista.toString=m
console.log(lista.reverse()); //O inverso
console.log(lista.length); //quantidade de elementos na lista, conta também o push
lista.pop(); // retira item
lista.push("uva"); //push coloca mais um item na lista
console.log(lista[1]);
alert(lista[1]);
*/

/*INTRODUÇÃO AO JS
var nome ="Kelvia Kelline";
var n1 =5;
var n2 =3;
var frase = "Japão é o melhor time do mundo";
var idade =29;
alert(nome +" tem " + idade + " anos");
alert (idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
.toUpperCase(); maiúsculo .toLowerCase(); //minúsculo
alert(frase.replace("Japão", "Brasil")); //muda na frase a palavra japão para Brasil - 
ver no console do navegador f12 ou inspecionar
*/

