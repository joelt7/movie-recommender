 // Main function to get movie recommendations
 function getMovies() {
    // Get user's age from input
    const ageInput = document.getElementById("ageInput");
    const age = parseInt(ageInput.value);
    const resultsDiv = document.getElementById("results");
    
    // Clear previous results
    resultsDiv.innerHTML = "";
    
    // Check if age is valid
    if (isNaN(age)) {
        resultsDiv.innerHTML = '<div class="alert alert-danger">Please enter a number</div>';
        return;
    }
    
    if (age < 0 || age > 100) {
        resultsDiv.innerHTML = '<div class="alert alert-danger">Please enter age between 0 and 100</div>';
        return;
    }
    
    // Find the right age group
    let foundGroup = null;
    for (let i = 0; i < ageGroups.length; i++) {
        if (age >= ageGroups[i].minAge && age <= ageGroups[i].maxAge) {
            foundGroup = ageGroups[i];
            break;
    }
    
    // If no group found, show error
    if (!foundGroup) {
        resultsDiv.innerHTML = '<div class="alert alert-warning">No movies found for your age</div>';
        return;
    }
    
    // Get 7 random movies from the group
    let recommendedMovies = [];
    const allMovies = foundGroup.movies.slice(); // Make copy of movies array
    
    // If there are 7 or fewer movies, use them all
    if (allMovies.length <= 7) {
        recommendedMovies = allMovies;
    } 
    else {
        // If more than 7 movies, pick 7 random ones
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * allMovies.length);
            recommendedMovies.push(allMovies[randomIndex]);
            allMovies.splice(randomIndex, 1); // Remove so we don't pick same movie twice
        }
    }
    
    // Create HTML for the recommendations
    let moviesHTML = "";
    for (let i = 0; i < recommendedMovies.length; i++) {
        moviesHTML += "<div class='movie-card'><h5>" + recommendedMovies[i] + "</h5></div>";
    }
    }
    console.log(moviesHTML);
    // Display the recommendations
    resultsDiv.innerHTML = moviesHTML;
    resultsDiv.classList.remove("hidden");
    resultsDiv.classList.add("visible");
    resultsDiv.scrollIntoView({ behavior: "smooth" });
}     