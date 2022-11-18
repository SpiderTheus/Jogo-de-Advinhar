const img = document.getElementById("img")
const output = document.getElementById("output")

function advinharNumero(){  
    let res = parseInt(Math.random() * 50)
    
    let x = 0
    
    for(let i = 1; i <= 10; i++){
        let num = parseInt(prompt("Digite um número de 1 a 50:"))   
        if(res === num){
            img.src = "./img/stitch-feliz.svg"
            output.innerHTML = "Parabéns!! O stitch agora está feliz"
            alert(`Parábens, você acertou com ${i} tentativas`)
            x = 1
            break;
        } else {
            verificarNumero(res, num, i)
        }
        
    }

    if(x != 1){
        img.src = "./img/stitch-triste.svg"
        output.innerHTML = "stich continua triste"
        alert("Você perdeu KKKKK, loser!! o número era: " + res)
    }
      
}

function  verificarNumero(x, n, i){
   
    if(x > n){
        alert(`é maior que ${n},
resta ${(10 - i)} tentativas`)
    } else if (x < n){
        alert(`é menor que ${n},    
resta ${(10 - i)} tentativas`) 
    } else {
        alert(`número invalido`)
    }

}