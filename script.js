/*estrellas*/
        function createStars() {
            const container = document.querySelector("body");
            for (let i = 0; i < 1000; i++) { // Increase the number of stars to 1000
                const star = document.createElement('div');
                star.className = 'star';
                star.style.width = '.2px';
                star.style.height = '.2px';
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                container.appendChild(star);
            }
        }
        createStars();

/*formulario*/


const formulario = document.getElementById("form")
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    parrafo.innerHTML = ""
    if(nombre.value.length <6){ 
        warnings += `El nombre no es valido <br><br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El correo no es valido <br><br>`
        entrar = true
    }
    
    if(entrar){ 
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = `Enviado <br>`
    }
})
