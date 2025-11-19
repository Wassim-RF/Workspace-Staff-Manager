export const roleAcces = {
    conference : {allowed : ["all"] , max : 10},
    reception: ["manager" , "receptionniste" , "nettoyage"],
    "serveur": ["it" , "manager" , "nettoyage"],
    "securite": ["manager" , "security" , "nettoyage"],
    "personal": ["all"],
    "archives": ["manager" , "it" , "receptionniste" , "security"]
}