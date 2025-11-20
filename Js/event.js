import {showModalAddStaff} from './ui/modal.js';
import {hideModalAddStaff} from './ui/modal.js';
import {createEmploiyeeCard} from './ui/createEmploiyeeCard.js';
import {addExperience} from './ui/createEmploiyeeCard.js';
import {profilePictureDiv} from './ui/modal.js';
import {showModalStaffDetail} from './ui/modal.js';
import {hideModalStaffDetail} from './ui/modal.js';


export function setupEvent() {
    document.getElementById("add_Staff_Modal--Button").addEventListener("click" , showModalAddStaff);
    document.getElementById("quite_add_staff--Modal1").addEventListener("click" , hideModalAddStaff);
    document.getElementById("quite_add_staff--Modal2").addEventListener("click" , hideModalAddStaff);
    document.getElementById("emploiyee_profile--URL").addEventListener("input" , profilePictureDiv);
    document.getElementById("add_Staff_submit").addEventListener("click" , createEmploiyeeCard);
    document.getElementById("add_experience--Button").addEventListener("click" , addExperience);
    document.querySelector("#staff_UNST--partie").addEventListener("dblclick" , showModalStaffDetail);
    document.getElementById("close_emoloyee_detaille--Button1").addEventListener("click" , hideModalStaffDetail);
    document.getElementById("close_emoloyee_detaille--Button2").addEventListener("click" , hideModalStaffDetail);
}