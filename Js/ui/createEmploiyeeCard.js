import {hideModalAddStaff} from './modal.js';
import {createEmploiyee} from '../logic/manageEmploiyee.js'
import {employees} from '../data/employees.js';

function randomNumericId(length = 3) {
    let id = "";
    for (let i = 0; i < length; i++) {
        id += Math.floor(Math.random() * 10); // 0–9
    }
    return id;
}

export function createEmploiyeeCard() {
    const emploiyeeName = document.getElementById("emploiyee_Name");
    const emploiyeeRole = document.getElementById("emploiyee_Role");
    const emploiyeeEmail = document.getElementById("emploiyee_email");
    const emploiyePhone = document.getElementById("emploiyee_phone");
    const emploiyeeProfileURL = document.getElementById("emploiyee_profile--URL");
    const staffUNSTpartie = document.getElementById("staff_UNST--partie");
    if (emploiyeeName.value.trim() === "" || emploiyeeRole.value.trim() === "" || emploiyePhone.value.trim() === "") {
        alert("Plein la form");
        return;
    }

    if (emploiyeeRole.value.trim() === "Select Role") {
        alert("Choisir un role pour l'emploiyee");
        return;
    }

    if (!createEmploiyee(employees , randomNumericId() , emploiyeeName.value , emploiyeeEmail.value , emploiyePhone.value , emploiyeeRole.value , emploiyeeProfileURL.value)) return;

    let avatarHTML = "";
    const nameParts = emploiyeeName.value.trim().split(" ");
    const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "?";
    const secondLetter = nameParts[1]?.charAt(0).toUpperCase() || "";
    const initials = firstLetter + secondLetter;
    const colors = ["#FF6B6B", "#4ECDC4", "#5567FF", "#FFA726", "#AB47BC", "#26A69A"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (!emploiyeeProfileURL.value.trim()) {
        avatarHTML = `
            <div class="avatar_auto" style="width: 45px; height: 45px; border-radius: 50%; background: ${randomColor}; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; font-size: 18px;">
                ${initials}
            </div>
        `;
    } else {
        avatarHTML = `<img src="${emploiyeeProfileURL.value}" class="avatar_img">`;
    }

    let roleClasseEmploiyee;
    switch (emploiyeeRole.value) {
        case "IT" :
            roleClasseEmploiyee = "it_role";
            break;
        case "Manager" :
            roleClasseEmploiyee = "manager_role";
            break;
        
        default :
            roleClasseEmploiyee = "";
    }

    staffUNSTpartie.innerHTML += `
        <div class="emploiyee_card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#c0c0c0" d="M9 20q-.825 0-1.413-.588T7 18q0-.825.588-1.413T9 16q.825 0 1.413.588T11 18q0 .825-.588 1.413T9 20Zm6 0q-.825 0-1.413-.588T13 18q0-.825.588-1.413T15 16q.825 0 1.413.588T17 18q0 .825-.588 1.413T15 20Zm-6-6q-.825 0-1.413-.588T7 12q0-.825.588-1.413T9 10q.825 0 1.413.588T11 12q0 .825-.588 1.413T9 14Zm6 0q-.825 0-1.413-.588T13 12q0-.825.588-1.413T15 10q.825 0 1.413.588T17 12q0 .825-.588 1.413T15 14ZM9 8q-.825 0-1.413-.588T7 6q0-.825.588-1.413T9 4q.825 0 1.413.588T11 6q0 .825-.588 1.413T9 8Zm6 0q-.825 0-1.413-.588T13 6q0-.825.588-1.413T15 4q.825 0 1.413.588T17 6q0 .825-.588 1.413T15 8Z"/></svg>
            ${avatarHTML}
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#c0c0c0" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm6 8H6q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20ZM6 18h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2v.8Zm6-8q.825 0 1.413-.588T14 8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8q0 .825.588 1.413T12 10Zm0-2Zm0 10Z"/></svg>
                    <p>${emploiyeeName.value}</p>
                </div>
                <p class="${roleClasseEmploiyee}">${emploiyeeRole.value}</p>
            </div>
        </div>
    `;
    emploiyeeName.value = "";
    emploiyeeRole.value = "Select Role";
    emploiyePhone.value = "";
    emploiyeeProfileURL.value = "";
    emploiyeeEmail.value = "";

    hideModalAddStaff();
}