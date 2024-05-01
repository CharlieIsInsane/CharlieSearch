document.addEventListener('DOMContentLoaded', function() {
    // Create the main container
    var container = document.createElement('div');
    container.style.background = '#333';
    container.style.color = '#fff';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.margin = '0';
    container.style.padding = '0';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.height = '100vh';

    // Create the heading
    var heading = document.createElement('h1');
    heading.textContent = 'Charlie Search';
    heading.style.marginBottom = '20px';

    // Create the search container
    var searchContainer = document.createElement('div');
    searchContainer.style.textAlign = 'center';
    searchContainer.style.marginBottom = '20px';

    // Create the Charlie Search text
    var charlieSearchText = document.createElement('span');
    charlieSearchText.textContent = 'Charlie Search';
    charlieSearchText.style.fontSize = '24px';
    charlieSearchText.style.marginRight = '10px';

    // Create the search box
    var searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.id = 'search-box';
    searchBox.placeholder = 'Type to search...';
    searchBox.style.padding = '10px';
    searchBox.style.fontSize = '16px';
    searchBox.style.width = '300px';

    // Create the search button
    var searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.id = 'search-button';
    searchButton.style.padding = '10px';
    searchButton.style.fontSize = '16px';
    searchButton.style.backgroundColor = '#555';
    searchButton.style.color = '#fff';
    searchButton.style.border = 'none';
    searchButton.style.cursor = 'pointer';
    searchButton.addEventListener('click', search);

    // Create the result iframe
    var resultIframe = document.createElement('iframe');
    resultIframe.id = 'result-iframe';
    resultIframe.style.border = 'none';
    resultIframe.style.width = '100%';
    resultIframe.style.height = '400px';

    // Append elements to the container
    searchContainer.appendChild(charlieSearchText);
    searchContainer.appendChild(searchBox);
    searchContainer.appendChild(searchButton);

    container.appendChild(heading);
    container.appendChild(searchContainer);
    container.appendChild(resultIframe);

    // Append the container to the body
    document.body.appendChild(container);

    // Search function
    function search() {
        var searchTerm = document.getElementById('search-box').value;
        var iframe = document.getElementById('result-iframe');
        iframe.src = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
    }
});
