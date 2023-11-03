import ListeLogement from "@/assets/Data/logement.json";

let GetAllLogement = () => {
    return ListeLogement;
}

let GetOneLogement = (id) => {
    let Onelogement = id;
    return Onelogement;
}

export const logementservice = {
    GetAllLogement,
    GetOneLogement
}

export default logementservice