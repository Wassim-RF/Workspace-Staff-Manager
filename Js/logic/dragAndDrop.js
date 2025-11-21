import {employees} from '../data/employees.js';
import {roleAcces} from '../data/roles.js';



let emploiyeeCardClickedID = null;


function DragEmploiyee(event) {
    const card = event.target.closest(".emploiyee_card");
    if (!card) return;

    emploiyeeCardClickedID = card.id;
    console.log("Dragging card ID:", emploiyeeCardClickedID);
}

function DropEmploiyee() {
    
}


export function setupETORDragDrop() {
    document.querySelector("#staff_UNST--partie").addEventListener("dragstart" , DragEmploiyee);
}