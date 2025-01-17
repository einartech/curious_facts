document.addEventListener("DOMContentLoaded", () => {
    const savedFactsList = document.getElementById("saved-facts-list");
    const goBackButton = document.getElementById("go-back");
  
    // Mostrar hechos guardados
    for (let i = 0; i < localStorage.length; i++) {
      const factId = localStorage.key(i);
      const factText = localStorage.getItem(factId);
  
      const listItem = document.createElement("li");
      listItem.textContent = factText;
      savedFactsList.appendChild(listItem);
    }
  
    // Volver a main page
    goBackButton.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  });
  