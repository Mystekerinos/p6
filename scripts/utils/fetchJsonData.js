
//Data recovery
export async function getPhotographers() {
  try {
    const response = await fetch("./data/photographers.json");
    const jsonData = await response.json();
    return jsonData;
    console.log(jsonData);
  } catch (error) {
    console.log(error);
    alert("Problème avec les données téléchargées");
  }


    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  // let photographers = [
  //   {
  //     name: "Ma data test",
  //     id: 1,
  //     city: "Paris",
  //     country: "France",
  //     tagline: "Ceci est ma data test",
  //     price: 400,
  //     portrait: "account.png",
  //   },
  //   {
  //     name: "Autre data test",
  //     id: 2,
  //     city: "Londres",
  //     country: "UK",
  //     tagline: "Ceci est ma data test 2",
  //     price: 500,
  //     portrait: "account.png",
  //   },
  // ];
  // et bien retourner le tableau photographers seulement une fois récupéré
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}
