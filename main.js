// 1 - usul
let elBody = document.querySelector("body");
// postData();
// async function postData() {
//   try {
//     const data = await fetch(`https://fakestoreapi.com/products?limit=10`);
//     const response = await data.json();

//     for (const key in response) {
//       const element = response[key];
//       console.log(element);
//       elBody.innerHTML += `
// <div>
// <p>${element.id}</p>
// <p>${element.title}</p>
// <p>${element.price}</p>
// <p>${element.description}</p>
// </div>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// 2 - usul
getData();
function getData() {
  fetch("https://fakestoreapi.com/products?limit=10")
    .then((response) => response.json())
    .then((json) => {
      for (const key in json) {
        const element = json[key];
        console.log(element);
        elBody.innerHTML += `
      <div>
      <p>${element.id}</p>
      <p>${element.title}</p>
      <p>${element.price}</p>
      <p>${element.description}</p>
      </div>`;
      }
    })
    .catch((error) => console.log(error));
};