function toggleReadMore(wasteType) {
    const detailsContents = document.querySelectorAll(".modal-content");
    detailsContents.forEach(content => content.style.display = "none");
  
    const selectedContent = document.getElementById(wasteType);
    selectedContent.style.display = "block";
  
    const modal = document.getElementById("details-section");
    modal.style.display = "flex";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("details-section");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  function closeModal() {
    const modal = document.getElementById("details-section");
    modal.style.display = "none";
  }