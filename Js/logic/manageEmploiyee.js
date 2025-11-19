export function createEmploiyee(emploiyees , id , name , email , telephone , role , imageURL) {
    if (emploiyees.some(emp => emp.name.toLowerCase() === name.toLowerCase() && emp.email.toLowerCase() === email.toLowerCase() || emp.telephone === telephone)) {
        alert("Cette emploiyee est existe");
        return 0;
    }
    emploiyees.push({
        "id": id,
        "name": name,
        "email": email,
        "telephone": telephone,
        "role": role,
        "imageURL": imageURL,
    });
    localStorage.setItem("emploiyees" , JSON.stringify(emploiyees));

    return 1;
}