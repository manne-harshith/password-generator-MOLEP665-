function generatePassword() {
    const charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    const pL = 12;
    let pw="";
    for (let i = 0; i < pL; i++) {
        const randomIndex = Math.floor(Math.random() * charac.length);
        pw+=charac.charAt(randomIndex);
    }
    document.getElementById("password").value = pw;
}
