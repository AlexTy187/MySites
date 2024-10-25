const video = document.getElementById('headerVideo');
        
        video.addEventListener('ended', function () {
            video.style.display = 'block'; // Hides video after it plays once
        });

// When the user scrolls the page, execute the stickyNav function
window.onscroll = function() {
    stickyNav();
};

// Get the navbar
const navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position.
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
window.onresize = function() {
    sticky = navbar.offsetTop;
};

//dark mode

const toggleSwitch = document.getElementById("dark-mode-toggle");

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");

  // Store user preference in local storage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Apply stored theme on page load
window.onload = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true; // Set the slider to the correct position
  }
};
;

//sidenav funtions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
window.onclick = function(event){
  if(event.target == mySidenav){
    mySidenav.style.display = "none";
  }
}



