// Smooth scroll to main content on Explore button click
document.getElementById("explore-button").addEventListener("click", function() {
document.querySelector(".navv").scrollIntoView({ behavior: "smooth" });
});

 // Get the canvas element
 let ctx = document.getElementById('garbage-chart').getContext('2d');

 // Example data
 let wasteTypes = [
   'Dry Waste',
   'Wet Waste',
   'Plastic Waste',
   'Glass Waste',
   'Metal Waste'
 ];

 let wasteData = [
   30, // Dry Waste
   40, // Wet Waste
   30, // Plastic Waste
   20,  // Glass Waste
   40  // Metal Waste
 ];

 // Create the pie chart
 let garbageChart = new Chart(ctx, {
   type: 'pie',
   data: {
     labels: wasteTypes,
     datasets: [{
       label: 'Waste Collection',
       data: wasteData,
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)'
       ],
       borderColor: [
         'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)'
       ],
       borderWidth: 1
     }]
   },
   options: {
     title: {
       display: true,
       text: 'Monthly Waste Collection'
     }
   }
 });
 document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggleBtn = question.querySelector('.toggle-btn');

      answer.classList.toggle('active');
      toggleBtn.textContent = answer.classList.contains('active') ? '-' : '+';

      // Optional: Smooth scroll to the answer
      if (answer.classList.contains('active')) {
          answer.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

