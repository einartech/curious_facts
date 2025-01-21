document.addEventListener("DOMContentLoaded", () => {
  const savedFactsList = document.getElementById("saved-facts-list");
  const goBackButton = document.getElementById("go-back");
  const modal = document.getElementById("confirmation-modal");
  const confirmDeleteButton = document.getElementById("confirm-delete");
  const cancelDeleteButton = document.getElementById("cancel-delete");

  let factToDelete = null;
  let listItemToDelete = null;

  // Mostrar hechos guardados
  if (localStorage.length === 0) {
    // Si no hay hechos guardados, mostrar el modal de "No hay favoritos"
    showModalNonFavoriteFound();
  } else {
    // Si hay hechos guardados, crear la lista
    for (let i = 0; i < localStorage.length; i++) {
      const factId = localStorage.key(i);
      const factText = localStorage.getItem(factId);

      const listItem = document.createElement("li");

      // Crear el elemento con el texto del hecho
      const factTextElement = document.createElement("span");
      factTextElement.textContent = factText;
      listItem.appendChild(factTextElement);

      // Crear el botón de eliminar
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete fact";
      deleteButton.classList.add("delete-button");

      // Evento para eliminar el hecho
      deleteButton.addEventListener("click", () => {
        // Mostrar el modal de confirmación
        factToDelete = factId;
        listItemToDelete = listItem;
        modal.classList.remove("hidden");
      });

      // Agregar el botón de eliminar al elemento de la lista
      listItem.appendChild(deleteButton);

      // Agregar el item de la lista al contenedor
      savedFactsList.appendChild(listItem);
    }
  }

  // Confirmar borrado
  confirmDeleteButton.addEventListener("click", () => {
    if (factToDelete && listItemToDelete) {
      // Eliminar del localStorage
      localStorage.removeItem(factToDelete);
      // Eliminar el elemento de la lista del DOM
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

// Función para mostrar el mensaje cuando no hay favoritos
function showModalNonFavoriteFound() {
  let noFavoritesMessage = document.querySelector("#favorites-container");
  noFavoritesMessage.style.display = "flex";
  console.log(noFavoritesMessage);
}
