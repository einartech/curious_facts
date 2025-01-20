document.addEventListener("DOMContentLoaded", () => {
  const savedFactsList = document.getElementById("saved-facts-list");
  const goBackButton = document.getElementById("go-back");

  // condicional por carol

  if (localStorage.length > 0) {
    // Mostrar hechos guardados
    for (let i = 0; i < localStorage.length; i++) {
      const factId = localStorage.key(i);
      const factText = localStorage.getItem(factId);

      const listItem = document.createElement("li");

      //NEW BLOCK
      const factTextElement = document.createElement("span");
      factTextElement.textContent = factText;
      listItem.appendChild(factTextElement);

      //NEW BLOCK
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete fact";
      deleteButton.classList.add("delete-button");

      //NEW BLOCK
      deleteButton.addEventListener("click", () => {
        // Remove from localStorage
        localStorage.removeItem(factId);
        // Remove from the DOM
        savedFactsList.removeChild(listItem);
      });

      // Append the delete button to the list item (below the fact text)
      listItem.appendChild(deleteButton);

      // Append the list item to the saved facts list
      savedFactsList.appendChild(listItem);

      //GUADA
      // listItem.textContent = factText;
      // savedFactsList.appendChild(listItem);
    }
  } else { 
      showModalNonFavoriteFound();
  
  }

  // Volver a main page
  goBackButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});

// funcion hecha por carol
function showModalNonFavoriteFound() {
  let noFavoritesMessage = document.querySelector("#favorites-container");
  noFavoritesMessage.style.display = "flex";
  console.log(noFavoritesMessage);
}
