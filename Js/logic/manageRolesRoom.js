import { employees } from '../data/employees.js';
import { roleAcces } from '../data/roles.js';

let emploiyeeCardClickedID = null;

function saveEmploiyeeId(event) {
    const card = event.target.closest(".emploiyee_card");
    if (!card) return;

    emploiyeeCardClickedID = card.id;

    
    document.querySelectorAll(".room_container").forEach(room => {
        room.style.border = "2px solid #FFC9C9";
        room.style.backgroundColor = "#FBF8F8";
    });

    const targetedEmploiyee = employees.find(emp => emp.id === emploiyeeCardClickedID);
    if (!targetedEmploiyee) return;

    
    Object.keys(roleAcces).forEach(roomID => {
        const allowedRoles = roleAcces[roomID].allowed;

        if (
            allowedRoles.includes(targetedEmploiyee.role.toLowerCase()) ||
            allowedRoles.includes("all")
        ) {
            const roomEl = document.getElementById(roomID);
            if (roomEl) {
                roomEl.style.border = "2px solid orange";
                roomEl.style.backgroundColor = "rgba(255,165,0,0.15)";
            }
        }
    });
}

function addEmploiyeeToRoom(event) {
    const addBtn = event.target.closest(".add_Staff--InRoom--Button");
    if (!addBtn) return;

    if (!emploiyeeCardClickedID) {
        alert("Select un emploiyee");
        return;
    }

    const roomContainer = addBtn.closest(".room_container");
    const roomID = roomContainer.id;

    const roomDiv = roomContainer.querySelector(".emploiyee_inRoom--plan_floor");
    const card = document.getElementById(emploiyeeCardClickedID);

    if (!card) return;

    const targetedEmploiyee = employees.find(emp => emp.id === emploiyeeCardClickedID);
    const roomRoles = roleAcces[roomID];

    if (!targetedEmploiyee || !roomRoles) return;

    const roomNumberEmploiyee = roomDiv.children.length;

    if ((roomRoles.allowed.includes(targetedEmploiyee.role.toLowerCase()) || roomRoles.allowed.includes("all")) && roomNumberEmploiyee < roomRoles.max) {
        roomContainer.querySelector(".emploiyee_inRoom--plan_floor--without").style.display = "none";
        roomDiv.style.display = "flex";
        
        roomDiv.appendChild(card);

        emploiyeeCardClickedID = null;

        card.insertAdjacentHTML("beforeend", `
            <div class="delete_emploiyee--container">
                <button class="delete_emploiyee--floor">✕</button>
            </div>
        `); 
        roomContainer.style.backgroundColor = "#EFFEFA";
        roomContainer.style.border = "2px solid #A5EED4";

    } else {
        alert("Ce role n'a pas l'accès ou la room est pleine");
    }

    const allRoomChild = document.getElementById("all_Room").children;
    for (let i = 0 ; i < allRoomChild.length ; i++) {
        const floorDiv = allRoomChild[i].querySelectorAll(".emploiyee_inRoom--plan_floor>div");
        console.log(floorDiv.length);
        if (floorDiv && floorDiv.length > 0) {
            allRoomChild[i].style.backgroundColor = "#EFFEFA";
            allRoomChild[i].style.border = "2px solid #A5EED4";
        } else {
            allRoomChild[i].style.backgroundColor = "#FBF8F8";
            allRoomChild[i].style.border = "2px solid #FFC9C9";
        }
    }
}

function removeEmploiyeeFromRoom(event) {
    const deleteBtn = event.target.closest(".delete_emploiyee--floor");
    if (!deleteBtn) return;

    const card = deleteBtn.closest(".emploiyee_card");
    if (!card) return;

    
    document.querySelector("#staff_UNST--partie").appendChild(card);
    const delBox = card.querySelector(".delete_emploiyee--container");
    if (delBox) delBox.remove();

    const allRoomChild = document.getElementById("all_Room").children;
    for (let i = 0 ; i < allRoomChild.length ; i++) {
        const floorDiv = allRoomChild[i].querySelectorAll(".emploiyee_inRoom--plan_floor>div");
        if (floorDiv && floorDiv.length > 0) {
            allRoomChild[i].style.backgroundColor = "#EFFEFA";
            allRoomChild[i].style.border = "2px solid #A5EED4";

        } else {
            allRoomChild[i].style.backgroundColor = "#FBF8F8";
            allRoomChild[i].style.border = "2px solid #FFC9C9";
            allRoomChild[i].querySelector(".emploiyee_inRoom--plan_floor--without").style.display = "flex";
            allRoomChild[i].querySelector(".emploiyee_inRoom--plan_floor").style.display = "none";
        }
    }
}

export function setupETOR() {
    document.querySelector("#staff_UNST--partie").addEventListener("click", saveEmploiyeeId);
    document.querySelector("#all_Room").addEventListener("click", addEmploiyeeToRoom);
    document.querySelector("#all_Room").addEventListener("click", removeEmploiyeeFromRoom);
}