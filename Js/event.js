import {showModalAddStaff} from './ui/modal.js';
import {hideModalAddStaff} from './ui/modal.js';
import {createEmploiyeeCard} from './ui/createEmploiyeeCard.js'

export function setupEvent() {
    document.getElementById("add_Staff_Modal--Button").addEventListener("click" , showModalAddStaff);
    document.getElementById("quite_add_staff--Modal1").addEventListener("click" , hideModalAddStaff);
    document.getElementById("quite_add_staff--Modal2").addEventListener("click" , hideModalAddStaff);
    document.getElementById("add_Staff_submit").addEventListener("click" , createEmploiyeeCard);
}