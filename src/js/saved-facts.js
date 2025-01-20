document.addEventListener("DOMContentLoaded", () => {
  const savedFactsList = document.getElementById("saved-facts-list");
  const goBackButton = document.getElementById("go-back");
  const modal = document.getElementById("confirmation-modal");
  const confirmDeleteButton = document.getElementById("confirm-delete");
  const cancelDeleteButton = document.getElementById("cancel-delete");

  let factToDelete = null;
  let listItemToDelete = null;

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
        // Mostrar el modal de confirmación
        factToDelete = factId;
        listItemToDelete = listItem;
        modal.classList.remove("hidden");
      });

      // Append the delete button to the list item (below the fact text)
      listItem.appendChild(deleteButton);

      savedFactsList.appendChild(listItem);
    }
  } else {
    showModalNonFavoriteFound();
  }
  // Confirmar borrado
  confirmDeleteButton.addEventListener("click", () => {
    if (factToDelete && listItemToDelete) {
      // Eliminar del localStorage
      localStorage.removeItem(factToDelete);
      // Eliminar en el DOM
      savedFactsList.removeChild(listItemToDelete);
      factToDelete = null;
      listItemToDelete = null;
    }
    modal.classList.add("hidden");
  });

  // Cancelar el borrado
  cancelDeleteButton.addEventListener("click", () => {
    factToDelete = null;
    listItemToDelete = null;
    modal.classList.add("hidden");
  });

  // Volver a la página principal
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
