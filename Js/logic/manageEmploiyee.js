export function createEmploiyee(emploiyees , id , name , email , telephone , role , imageURL , experience) {
    if (emploiyees.some(emp => emp.name.toLowerCase() === name.toLowerCase() && emp.email.toLowerCase() === email.toLowerCase() || emp.telephone === telephone)) {
        alert("Cette emploiyee est existe");
        return 0;
    }

    const experienceInputesContainer = document.querySelectorAll("#experience_inputes--container > div");
    experienceInputesContainer.forEach(exp => {
        const title = exp.querySelector("input[type='text']:nth-child(1)").value;
        const start = exp.querySelector("div input:nth-child(1)").value;
        const end = exp.querySelector("div input:nth-child(2)").value;
        if (title.trim() !== "" && start.trim() !== "" && end.trim() !== "") {
            experience.push({
                "travaille_titre": title,
                "start_travaille": start,
                "end_travaille": end
            });
        }
    });

    emploiyees.push({
        "id": id,
        "name": name,
        "email": email,
        "telephone": telephone,
        "role": role,
        "imageURL": imageURL,
        "experience": experience
    });

    localStorage.setItem("emploiyees" , JSON.stringify(emploiyees));

    return 1;
}