import {employees} from '../data/employees.js';

// Add Staff Modal
export function showModalAddStaff() {
    const addStaffModal = document.getElementById("add_Staff--Modal");
    const experienceInputesContainers = document.getElementById("experience_inputes--container");
    addStaffModal.style.display = "flex";
    experienceInputesContainers.innerHTML = `
        <div>
            <input type="text" placeholder="Titre du travaille">
            <div>
                <input type="text" placeholder="2020">
                <input type="text" placeholder="present">
            </div>
        </div>
    `;
}

export function hideModalAddStaff() {
    const addStaffModal = document.getElementById("add_Staff--Modal");
    const experienceInputesContainers = document.getElementById("experience_inputes--container");
    addStaffModal.style.display = "none";
    experienceInputesContainers.innerHTML = `
        <div>
            <input type="text" placeholder="Titre du travaille">
            <div>
                <input type="text" placeholder="2020">
                <input type="text" placeholder="present">
            </div>
        </div>
    `;
};

export function profilePictureDiv() {
    const profilePictireDiv = document.getElementById("profilePictireDiv");
    const emploiyeeProfileURL = document.getElementById("emploiyee_profile--URL");
    const pictureSvgProfileURL = document.getElementById("picture_svg--profileURL");

    if (emploiyeeProfileURL.value) {
        pictureSvgProfileURL.style.display = "none";
        if (profilePictireDiv) {
            profilePictireDiv.style.backgroundImage = `url('${emploiyeeProfileURL.value}')`;
        } else {
            console.log("Se div n'existe pas");
            console.log(profilePictireDiv);
            
        }
    } else {
        pictureSvgProfileURL.style.display = "block";
    }
}

// Staff Detail Modal
export function showModalStaffDetail(event) {
    const detailStaffModal = document.getElementById("detail_Staff--Modal");
    if (!event.target.closest(".emploiyee_card")) return;
    let emploiyeeCardClicked = event.target.closest(".emploiyee_card").id;
    const targetedEmploiyee = employees.find(emp => emp.id === emploiyeeCardClicked);
    if (targetedEmploiyee) {
        detailStaffModal.style.display = "flex";
        document.getElementById("Emploiyee--photo").setAttribute("src" , targetedEmploiyee.imageURL)
        document.getElementById("Emploiyee--Name").innerText = targetedEmploiyee.name;
        let roleClasseEmploiyee;
        switch (targetedEmploiyee.role) {
            case "IT" :
                roleClasseEmploiyee = "it_role";
                break;
            case "Manager" :
                roleClasseEmploiyee = "manager_role";
                break;
            case "Receptionniste" :
                roleClasseEmploiyee = "receptionniste_role";
                break;
            case "Nettoyage" :
                roleClasseEmploiyee = "nettoyage_role";
                break;
            case "Security" :
                roleClasseEmploiyee = "security_role" ;
                break;
            default :
                roleClasseEmploiyee = "";
        }
        document.getElementById("Emploiyee--role").innerText = targetedEmploiyee.role;
        document.getElementById("Emploiyee--role").classList.value = "";
        document.getElementById("Emploiyee--role").classList.add(roleClasseEmploiyee);
        document.getElementById("Emploiyee--email").innerText = targetedEmploiyee.email;
        document.getElementById("Emploiyee--phone").innerText = targetedEmploiyee.telephone;
    }
}

export function hideModalStaffDetail() {
    const detailStaffModal = document.getElementById("detail_Staff--Modal");
    detailStaffModal.style.display = "none";
}