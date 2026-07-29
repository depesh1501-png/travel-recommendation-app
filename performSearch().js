function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    let results = [];
    
    // Search through all destinations
    for (let category in destinations) {
        destinations[category].forEach(dest => {
            if (dest.name.toLowerCase().includes(query) || 
                dest.description.toLowerCase().includes(query)) {
                results.push({
                    ...dest,
                    category: category.slice(0, -1)
                });
            }
        });
    }
    
    displaySearchResults(results, query);
}