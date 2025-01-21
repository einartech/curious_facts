document.addEventListener("DOMContentLoaded", () => {
  const savedFactsList = document.getElementById("saved-facts-list");
  const goBackButton = document.getElementById("go-back");
  const modal = document.getElementById("confirmation-modal");
  const confirmDeleteButton = document.getElementById("confirm-delete");
  const cancelDeleteButton = document.getElementById("cancel-delete");

  let factToDelete = null;
  let listItemToDelete = null;

  if (localStorage.length === 0) {
    showModalNonFavoriteFound();
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      const factId = localStorage.key(i);
      const factText = localStorage.getItem(factId);

      const listItem = document.createElement("li");

      const factTextElement = document.createElement("span");
      factTextElement.textContent = factText;
      listItem.appendChild(factTextElement);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete fact";
      deleteButton.classList.add("delete-button");

      deleteButton.addEventListener("click", () => {
        factToDelete = factId;
        listItemToDelete = listItem;
        modal.classList.remove("hidden");
      });

      listItem.appendChild(deleteButton);

      savedFactsList.appendChild(listItem);
    }
  }

  confirmDeleteButton.addEventListener("click", () => {
    if (factToDelete && listItemToDelete) {
      localStorage.removeItem(factToDelete);
      savedFactsList.removeChild(listItemToDelete);
      factToDelete = null;
      listItemToDelete = null;
    }
    modal.classList.add("hidden");
  });

  cancelDeleteButton.addEventListener("click", () => {
    factToDelete = null;
    listItemToDelete = null;
    modal.classList.add("hidden");
  });

  goBackButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});

function showModalNonFavoriteFound() {
  let noFavoritesMessage = document.querySelector("#favorites-container");
  noFavoritesMessage.style.display = "flex";
  console.log(noFavoritesMessage);
}
