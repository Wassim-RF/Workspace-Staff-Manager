import {employees} from '../data/employees.js';
import {roleAcces} from '../data/roles.js';



let emploiyeeCardClickedID = null;


function saveEmploiyeeId(event) {
    if (!event.target.closest(".emploiyee_card")) return;
    emploiyeeCardClickedID = event.target.closest(".emploiyee_card").id;
}

function addEmploiyeeToRoom(event) {
    const addToRoomButton = event.target.closest(".add_Staff--InRoom--Button");
    if (!addToRoomButton) return;
    if (!emploiyeeCardClickedID) {
        alert("Select un emploiyee");
        return;
    }
    const roomDiv = addToRoomButton.closest(".room_container").querySelector(".emploiyee_inRoom--plan_floor");
    const card = document.getElementById(emploiyeeCardClickedID);
    if (!card) return;
    
    const targetedEmploiyee = employees.find(emp => emp.id === emploiyeeCardClickedID);
    const targetedRoom = addToRoomButton.closest(".room_container").id;
    let roomDivNumber = roomDiv.children.length;
    const roomRoles = roleAcces[targetedRoom];
    console.log("roomDivNumber : ",roomDivNumber);
    
    if (targetedEmploiyee && roomRoles) {
        if ((roomRoles.allowed.includes(targetedEmploiyee.role.toLowerCase()) || roomRoles.allowed.includes("all")) &&   roomDivNumber < roomRoles.max) {
            addToRoomButton.closest(".room_container").querySelector(".emploiyee_inRoom--plan_floor--without").style.display = "none";
            addToRoomButton.closest(".room_container").querySelector(".emploiyee_inRoom--plan_floor").style.display = "flex";
            console.log(roomRoles);
            console.log(roomRoles.max);
            console.log(roomDivNumber);
            roomDiv.appendChild(card);
            emploiyeeCardClickedID = null;
        } else {
            alert("Ce role n'avais pas l'acces pour entrer dans cette room");
            console.log(roomRoles.max < roomDivNumber);
            console.log(roomRoles);
            console.log(roomRoles.max);
            console.log(roomDivNumber);
        }
    }
}

export function setupETOR() {
    document.querySelector("#staff_UNST--partie").addEventListener("click" , saveEmploiyeeId);

    document.querySelector("#all_Room").addEventListener("click" , addEmploiyeeToRoom);
}