function showDetails(category) {
    // Hide all details and remove the 'selected' class from all categories
    var detailsElements = document.querySelectorAll('.details');
    detailsElements.forEach(function (element) {
        element.classList.add('hide')
    });

    var categoryLinks = document.querySelectorAll('ul li a');
    categoryLinks.forEach(function (link) {
        link.classList.remove('selected');
    });

    // Show the selected category details and add the 'selected' class to the clicked category
    var selectedCategoryDetails = document.getElementById(category + 'Details');
    var selectedCategoryLink = document.getElementById(category);

    if (selectedCategoryDetails && selectedCategoryLink) {
        selectedCategoryDetails.classList.remove('hide');
        selectedCategoryLink.classList.add('selected');
    }
}

document.getElementById('category1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior
    showDetails('category1');
});

document.getElementById('category2').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior
    showDetails('category2');
});

document.getElementById('category3').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior
    showDetails('category3');
});
