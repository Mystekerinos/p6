//Data recovery
export async function getPhotographers() {
  try {
    const response = await fetch("./data/photographers.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
    alert("Problème avec les données téléchargées");
  }
}
