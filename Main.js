const generatePassword = (base, length) => {
    let password = "";
    for(let x=0; x<length; x++){
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
}


const generate = () => {
    let length = parseInt(inputLength.value); // Leemos la longitud de la contraseña y convertimos a enteros
    let minus = "abcdefghijklmnñopqrstuvwxyz";
    let Mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "@!#$%&/()=?¿¡+-[]{}();:.";

    if(checkbox1.checked) minus+=numbers; // Si checkbox1 es true, se concatena minus y numbers

    if(checkbox2.checked) minus+=symbols; // Si checkbox2 es true, se concatena minus y symbols

    if(checkbox3.checked) minus+=Mayus; // Si checkbox3 es true, se concatena minus y mayus

    generatedPassword.innerText = generatePassword(minus, length);
};

window.addEventListener('DOMContentLoaded',()=>{
    btnGenerate.addEventListener("click", ()=>{
        generate();
    });
});