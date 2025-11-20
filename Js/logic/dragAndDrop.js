import {employees} from '../data/employees.js';
import {roleAcces} from '../data/roles.js';



let emploiyeeCardClickedID = null;


function saveEmploiyeeId(event) {
    if (!event.target.closest(".emploiyee_card")) return;
    emploiyeeCardClickedID = event.target.closest(".emploiyee_card").id;
}


export function setupETORDragDrop() {
    document.querySelector("#staff_UNST--partie").addEventListener("click" , saveEmploiyeeId);
}