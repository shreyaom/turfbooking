document.getElementById('menu-icon').addEventListener('click', function() {
    var dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
  
  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
    var dropdownContent = document.getElementById('dropdown-content');
    if (event.target !== document.getElementById('menu-icon') && event.target !== dropdownContent) {
      dropdownContent.style.display = 'none';
    }
  });
  