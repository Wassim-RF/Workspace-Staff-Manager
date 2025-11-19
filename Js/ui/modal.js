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
export function showModalDetailStaff() {

}