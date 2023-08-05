import { getPhotographers } from "../utils/fetchJsonData.js";



// display photographers
async function displayData(photographers) {
  
  const photographersSection = document.querySelector(".photographer_section");
 
  photographers.forEach((photographer,index) => {
  
    const photographerModel = photographerFactory(photographer,index+2);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
   
   
    
     
  });
  
}
// collects data from photographers
async function init() {

  const { photographers } = await getPhotographers();

  displayData(photographers);
}

init();
