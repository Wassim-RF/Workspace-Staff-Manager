// Creer l'ID du emploiye
export function randomNumericId(length = 3) {
    let id = "";
    for (let i = 0; i < length; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}

// creer l'avatar du l'emploiyee
export function createAvatar(name, profileURL, size = 45) {
    const colors = ["#FF6B6B", "#4ECDC4", "#5567FF", "#FFA726", "#AB47BC", "#26A69A"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (!name && !profileURL) {
        return `<div style="width: ${size}px; height: ${size}px; border-radius: 50%; background: ${randomColor};"></div>`;
    }

    if (!profileURL || profileURL.trim() === "") {
        const nameParts = name.trim().split(" ");
        const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "?";
        const secondLetter = nameParts[1]?.charAt(0).toUpperCase() || "";
        const initials = firstLetter + secondLetter;

        return `
            <div style="
                width: ${size}px; 
                height: ${size}px; 
                border-radius: 50%; 
                background: ${randomColor}; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                font-weight: bold; 
                color: white; 
                font-size: ${Math.floor(size / 2.5)}px;
            ">
                ${initials}
            </div>
        `;
    } else {
        return `<img src="${profileURL}" class="avatar_img" style="width: ${size}px; height: ${size}px; border-radius: 50%;">`;
    }
}