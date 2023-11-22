// jquery code, function for cat description generally healthy info drop down box

$(document).ready(function() {
  $('.health-info-header').click(function() {
      $('#health-info-content').slideToggle(550); // 500ms for animation speed
      var icon = $('#toggle-icon');
      if (icon.text() === '+') {
          icon.text('-');
      } else {
          icon.text('+');
      }
  });
});




// function for cat description drop down boxes, vet rating
function toggleDropdown(id) {
    var content = $("#" + id + "-content");
    var icon = $("#" + id + "-icon");

    // Close all other dropdowns
    $(".dropdown-content").not(content).slideUp(500);
    $(".dropdown span").not(icon).text('+');

    // Change the icon text immediately
    icon.text(content.is(':visible') ? '+' : '-');

    // Toggle the clicked dropdown
    content.slideToggle(500);
}






// function for chat box, toggle button
$(document).ready(function(){
    $(".iframe-container").addClass("hidden"); // This line hides the chatbox when the page loads

    $("#toggle-chat-box").click(function(){
        $(".iframe-container").toggleClass("hidden");
    });
});



// for popout cat image in cat description page
// Get the modal
window.onload = function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll('.modal-opener');

    images.forEach(function(img) {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    var span = document.getElementsByClassName("close")[0];
    if(span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
}






// function for flipping pages main page
document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const breedsPerPage = 6;
    const breeds = document.querySelectorAll('.breed');
    let activeFilter = '';
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const pageNum = document.getElementById('page-num');

    const displayBreeds = () => {
        const filteredBreeds = Array.from(breeds).filter(breed => {
            const name = breed.querySelector('h3').innerText.toUpperCase();
            return !activeFilter || name.startsWith(activeFilter);
        });

        const totalBreeds = filteredBreeds.length;
        const totalPages = Math.ceil(totalBreeds / breedsPerPage);
        const start = (currentPage - 1) * breedsPerPage;
        const end = start + breedsPerPage;

        breeds.forEach(breed => breed.style.display = 'none');
        filteredBreeds.slice(start, end).forEach(breed => breed.style.display = 'block');

        // Update page number display
        pageNum.textContent = `Page ${currentPage} of ${totalPages}`;

        // Enable/disable buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    };

    const nextPage = () => {
        currentPage++;
        displayBreeds();
    };

    const prevPage = () => {
        currentPage--;
        displayBreeds();
    };

    nextBtn.addEventListener('click', nextPage);
    prevBtn.addEventListener('click', prevPage);

    const filterByLetter = (letter) => {
        activeFilter = letter;
        currentPage = 1; // Reset to the first page when the filter changes
        displayBreeds();
    };

    window.filterByLetter = filterByLetter; // Make it global to be accessible from HTML

    displayBreeds(); // Initial display
});





function setActiveButton(buttonElement) {
    // Remove the active class from all buttons
    const buttons = document.querySelectorAll('#alphabetFilter .bubble-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add the active class to the clicked button
    buttonElement.classList.add('active');
}

function handleButtonClick(letter, buttonElement) {
    // Filter by the given letter
    filterByLetter(letter);

    // Set the clicked button as active
    setActiveButton(buttonElement);
}








// for toggle chatbox
document.getElementById('toggle-chat-box').addEventListener('click', function() {
    var iframeContainer = document.querySelector('.iframe-container');
    iframeContainer.classList.toggle('active');
  });
  






// function filterByLetter(letter) {
//     const breeds = document.querySelectorAll('.cat-breed-box');

//     breeds.forEach(breed => {
//         const name = breed.querySelector('h3').innerText.toUpperCase();
//         if (letter === "") {
//             breed.style.display = '';  // Show all breeds if no letter is provided
//         } else {
//             breed.style.display = name.startsWith(letter) ? '' : 'none';
//         }
//     });
// }






// function for dark mode toggle

// document.addEventListener('DOMContentLoaded', function() {
//     const toggleElement = document.querySelector('.toggleBar'); // Corrected selector
//     const body = document.body;
  
//     if (toggleElement) {
//         toggleElement.addEventListener('click', () => {
//             body.classList.toggle('dark');
//             console.log('Dark mode toggled');
//         });
//     }
//   });




// function for cursor
// $(document).ready(function() {
//     console.log('Document is ready');
//     var cursor = $('<div id="cursor"><img src="http://www.zingerbug.com/cursors/cursors/tuxedo_cat.gif" width="32" height="32" /></div>');
//     cursor.appendTo("body");

//     $(document).on('mousemove', function(e) {
//         console.log('Mouse is moving');
//         cursor.css({
//             left: e.pageX,
//             top: e.pageY,
//             position: 'absolute',
//             'z-index': '999999',
//             'pointer-events': 'none'
//         });
//     });
// });










 // // function for cat description generally healthy info drop down box
// function toggleHealthInfo() {
//   var content = document.getElementById('health-info-content');
//   var icon = document.getElementById('toggle-icon');

//   if (content.classList.contains('expanded')) {
//       content.classList.remove('expanded');
//       icon.textContent = '+';
//   } else {
//       content.classList.add('expanded');
//       icon.textContent = '-';
//   }
// }




 
//  // Add your cat breed data here (same format as in your React app)

//   const catBreedsData = [
//     {
//       breedName: 'Siamese Cat',
//       imageSrc: 'images/siamese.jpg',
//       description: 'siamese cats are gregarious, kind, intelligent, and family-oriented.',
//     },
//     // Add more cat breed data objects here
//   ];


// const appContainer = document.querySelector('.App');


// catBreedsData.forEach((breedData, index) => {
//   const catBreedBox = document.createElement('a');
//   catBreedBox.className = 'cat-breed-box';
//   catBreedBox.href = `/description/${breedData.breedName}`;

//   const catBreedContent = document.createElement('div');
//   catBreedContent.className = 'cat-breed-content';

//   const catImage = document.createElement('img');
//   catImage.className = 'cat-breed-image';
//   catImage.src = breedData.imageSrc;
//   catImage.alt = breedData.breedName;

//   const catName = document.createElement('h3');
//   catName.textContent = breedData.breedName;

//   const catDescription = document.createElement('p');
//   catDescription.textContent = breedData.description;

//   catBreedContent.appendChild(catImage);
//   catBreedContent.appendChild(catName);
//   catBreedContent.appendChild(catDescription);

//   catBreedBox.appendChild(catBreedContent);
//   appContainer.appendChild(catBreedBox);
// });


// // meowGpt window integration
// const iframe = document.getElementById('svelteAppFrame');


// // Send a message to the iframe
// iframe.contentWindow.postMessage('Hello from the parent page!', 'https://your-vercel-app-url.com');


// // Listen for messages from the iframe
// window.addEventListener('message', (event) => {
//   if (event.origin === 'https://your-vercel-app-url.com') {
//     console.log('Received message from iframe:', event.data);
//   }
// });





// header animation

// Define the logoSpan variable and select the logo elements
// const logoSpan = document.querySelectorAll('.logo');
// const intro = document.querySelector('.intro');



// window.addEventListener('DOMContentLoaded', () => {
//   setTimeout(() => {
//     logoSpan.forEach((span, idx) => {
//       setTimeout(() => {
//         span.classList.add('active');
//       }, (idx + 1) * 400);
//     });

//     setTimeout(() => {
//       logoSpan.forEach((span, idx) => {
//         setTimeout(() => {
//           span.classList.remove('active');
//           span.classList.add('fade');
//         }, (idx + 1) * 50);
//       });
//     }, 2000);

//     setTimeout(() => {
//       intro.style.transition = 'top 1s ease-in-out';
//       intro.style.top = '-100vh';
//     }, 2300);
//   });


//});

