const inputSearch = document.getElementById('inputSearch');
const searchBar = document.querySelector('.search-bar');
const searchButton = searchBar.querySelector('button');

inputSearch.addEventListener('focus', function() {
    searchBar.classList.add('typing');
    searchButton.style.animation = 'grow 0.2s ease-in-out';
});

inputSearch.addEventListener('blur', function(event) {
    setTimeout(() => {
        if (document.activeElement !== searchButton) {
            searchButton.style.animation = 'shrink 0.2s ease-in-out';
            setTimeout(() => {
                searchBar.classList.remove('typing');
            }, 200);
        }
    }, 0);
});
searchButton.addEventListener('mousedown', function(event) {
    event.preventDefault();
});