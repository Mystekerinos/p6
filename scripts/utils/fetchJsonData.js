
//Data recovery
export async function getPhotographers() {
  try {
    const response = await fetch("./data/photographers.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    alert("Problème avec les données téléchargées");
  }

  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}
