document.addEventListener("DOMContentLoaded", function() {
    const restaurants = [
        {
            name: "Los Compadres",
            description: "Authentic Mexican cuisine offering a vibrant dining experience.",
            price: 55, // Adjusted to demonstrate over $50 filtering
            url: "https://loscompadreslbc.com/",
            imageURL: "https://loscompadreslbc.com/wp-content/uploads/2021/10/Los-Compadres-Logo.png" 
        },
        {
            name: "Taco Surf",
            description: "A surf-themed spot serving up classic Mexican beach eats.",
            price: 20,
            url: "https://www.tacosurf.com/",
            imageURL: "https://images.squarespace-cdn.com/content/v1/64bcab288cbe5168d8340eba/463f6c0b-7b31-4090-ba85-85f7488d0157/TacoSurf_logos_22-2.png?format=1500w" 
        },
        {
            name: "Fogo de Chao",
            description: "Brazilian steakhouse with endless meat carved tableside.",
            price: 65, // Adjusted to demonstrate over $50 filtering
            url: "https://fogodechao.com/",
            imageURL: "https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/356311_1568183268.jpg?0" 
        },
        {
            name: "McDonald's",
            description: "Fast-food chain known for its burgers, fries, and quick service.",
            price: 10,
            url: "https://www.mcdonalds.com/us/en-us.html",
            imageURL: "https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg" 
        },
        {
            name: "Cava",
            description: "CAVA is a growing Mediterranean culinary brand with a healthy fast-casual restaurant experience featuring customizable salads, pitas, juices, dressings",
            price: 25,
            url: "https://cava.com/",
            imageURL: "https://images.ctfassets.net/kugm9fp9ib18/5n7KdOamxPaZp15QA8krFE/e3d3d8c0c2bac9988ebfb48e09022ab2/web-hh_-spicygreens--01_-240228-_web.jpg?fm=avif&w=1760&h=1760&fit=fill&q=75" 
        },
        {
            name: "Sweetgreen",
            description: "Simple, seasonal, healthy salads and grain bowls made in-house from scratch, using whole produce delivered that morning.",
            price: 15,
            url: "https://www.sweetgreen.com/",
            imageURL: "https://images.ctfassets.net/eum7w7yri3zr/7A107avz2NOdTEVFoZtRVo/7acab12b1376ec5231b28992493d0c15/SG_Web_Spring_Launch_Miso_Glazed_Salmon_Desktop.png?w=1600&q=75&fm=avif" 
        },
    ];

    const cardContainer = document.getElementById('card-container');
    
    function displayRestaurants(filterFunction) {
        cardContainer.innerHTML = ''; // Clear existing content

        restaurants.filter(filterFunction).forEach(restaurant => {
            const card = document.createElement("div");
            card.className = "card";
            card.style = "margin: 20px; padding: 10px; border: 1px solid black; display: inline-block;";

            const link = document.createElement("a");
            link.href = restaurant.url;
            link.target = "_blank";
            const name = document.createElement("h2");
            name.textContent = restaurant.name;
            link.appendChild(name);

            const image = document.createElement("img");
            image.src = restaurant.imageURL;
            image.alt = restaurant.name;
            image.style = "width: 100%; height: auto;";

            const description = document.createElement("p");
            description.textContent = restaurant.description;

            card.appendChild(link);
            card.appendChild(image);
            card.appendChild(description);

            cardContainer.appendChild(card);
        });
    }

    // Message about issues with the list
    const problemMessage = document.createElement("p");
    problemMessage.textContent = "If you have a problem with this list, click the button below:";
    document.body.insertBefore(problemMessage, cardContainer);

    // "Click Me" button to send an email
    const emailButton = document.createElement("button");
    emailButton.textContent = "Contact Me if you have a problem";
    emailButton.onclick = function() {
        window.location.href = "mailto:amit.himel@gmail.com?subject=Issue with the restaurant list";
    };
    document.body.insertBefore(emailButton, cardContainer);


    // Button for filtering restaurants under $50
    const btnUnder50 = document.createElement("button");
    btnUnder50.textContent = "Under $50";
    btnUnder50.onclick = () => displayRestaurants(restaurant => restaurant.price < 50);
    document.body.insertBefore(btnUnder50, cardContainer);

    // Button for filtering restaurants over $50 (including Fogo de Chao and Los Compadres)
    const btnOver50 = document.createElement("button");
    btnOver50.textContent = "Over $50";
    btnOver50.onclick = () => displayRestaurants(restaurant => restaurant.price > 50);
    document.body.insertBefore(btnOver50, cardContainer);


  
  // The "Near Long Beach" button
  const nearLongBeachBtn = document.createElement("button");
  nearLongBeachBtn.textContent = "Near Long Beach";
  nearLongBeachBtn.id = "nearLongBeachBtn"; // Add an ID for styling
  document.body.appendChild(nearLongBeachBtn); // Append the button to the body

  // Style the button to be bigger and on the right side of the page
  nearLongBeachBtn.style.cssText = "position: fixed; right: 20px; bottom: 20px; font-size: 16px; padding: 10px 20px;";

  // Function to display only selected restaurants
  function displaySelectedRestaurants() {
    const selectedNames = ["McDonald's", "Los Compadres", "Cava"]; // Names of the restaurants to display
    displayRestaurants(restaurant => selectedNames.includes(restaurant.name));
    
    // Create and show the "Home" button upon clicking "Near Long Beach"
    if (!document.getElementById("homeBtn")) { // Check if the "Home" button doesn't already exist
        const homeBtn = document.createElement("button");
        homeBtn.textContent = "Home";
        homeBtn.id = "homeBtn"; // Add an ID for styling
        document.body.appendChild(homeBtn); // Append the button to the body
        
        // Style the "Home" button
        homeBtn.style.cssText = "position: fixed; right: 20px; bottom: 70px; font-size: 16px; padding: 10px 20px;";
        
        // Add functionality to the "Home" button to go back a page
        homeBtn.addEventListener("click", function() {
        window.location.href = 'file:///Users/amitbarua/Desktop/SnapChatAcademy-main/index.html';
       });
    }
}

  // Event listener for the "Near Long Beach" button
  nearLongBeachBtn.addEventListener("click", displaySelectedRestaurants);



    // Initially display all restaurants
    displayRestaurants(() => true);
});
