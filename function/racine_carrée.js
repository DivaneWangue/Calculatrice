let nombre = parseFloat(prompt("Entrez un nombre :"));

function racineCarree(nombre) {
    if (nombre < 0) {
        return "Erreur : racine carrée d'un nombre négatif";
    }
    return Math.sqrt(nombre);
}

console.log("Résultat :", racineCarree(nombre));