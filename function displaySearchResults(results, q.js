function displaySearchResults(results, query) {
    const resultsContent = document.getElementById('resultsContent');
    const resultsTitle = document.getElementById('resultsTitle');
    
    resultsTitle.textContent = `Search Results for "${query}" (${results.length} found)`;
    
    if (results.length === 0) {
        resultsContent.innerHTML = '<div class="no-results">No destinations found...</div>';
    } else {
        // Create gallery with first images
        let html = '<div class="gallery">';
        results.forEach(result => {
            html += `<div class="gallery-item">...</div>`;
        });
        html += '</div>';
        
        // Add gallery with second images
        html += '<div class="gallery" style="margin-top: 2rem;">';
        results.forEach(result => {
            html += `<div class="gallery-item">...</div>`;
        });
        html += '</div>';
        
        resultsContent.innerHTML = html;
    }
    
    showPage('results');
}