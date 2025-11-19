export const roleAcces = {
    conference: {
        allowed: ["all"],
        max: 10
    },
    reception: {
        allowed: ["manager", "receptionniste", "nettoyage"],
        max: 2
    },
    serveur: {
        allowed: ["it", "manager", "nettoyage"],
        max: 3
    },
    securite: {
        allowed: ["manager", "security", "nettoyage"],
        max: 2
    },
    personal: {
        allowed: ["all"],
        max: 8
    },
    archives: {
        allowed: ["manager", "it", "receptionniste", "security"],
        max: 2
    }
}