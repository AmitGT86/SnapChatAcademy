document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("card-container");

    // Updated sample data array to include url and imageURL
    const restaurants = [
        {
            name: "Los Compadres",
            description: "Authentic Mexican cuisine offering a vibrant dining experience.",
            url: "https://loscompadreslbc.com/",
            imageURL: "https://loscompadreslbc.com/wp-content/uploads/2021/10/Los-Compadres-Logo.png" 
        },
        {
            name: "Taco Surf",
            description: "A surf-themed spot serving up classic Mexican beach eats.",
            url: "https://www.tacosurf.com/",
            imageURL: "https://images.squarespace-cdn.com/content/v1/64bcab288cbe5168d8340eba/463f6c0b-7b31-4090-ba85-85f7488d0157/TacoSurf_logos_22-2.png?format=1500w" 
        },
        {
            name: "Fogo de Chao",
            description: "Brazilian steakhouse with endless meat carved tableside.",
            url: "https://fogodechao.com/",
            imageURL: "https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/356311_1568183268.jpg?0" 
        },
        {
            name: "McDonald's",
            description: "Fast-food chain known for its burgers, fries, and quick service.",
            url: "https://www.mcdonalds.com/us/en-us.html",
            imageURL: "https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg" 
        },
        {
            name: "Cava",
            description: "CAVA is a growing Mediterranean culinary brand with a healthy fast-casual restaurant experience           	    featuring customizable salads, pitas, juices, dressings,",
            url: "https://cava.com/",
            imageURL: "https://images.ctfassets.net/kugm9fp9ib18/5n7KdOamxPaZp15QA8krFE/e3d3d8c0c2bac9988ebfb48e09022ab2/web-hh_-spicygreens--01_-240228-_web.jpg?fm=avif&w=1760&h=1760&fit=fill&q=75" 
        },

        {
            name: "Sweetgreen",
            description: "Simple, seasonal, healthy salads and grain bowls made in-house from    	    scratch, using whole produce delivered that morning.",
            url: "https://www.sweetgreen.com/",
            imageURL: "https://images.ctfassets.net/eum7w7yri3zr/7A107avz2NOdTEVFoZtRVo/7acab12b1376ec5231b28992493d0c15/SG_Web_Spring_Launch_Miso_Glazed_Salmon_Desktop.png?w=1600&q=75&fm=avif" 
        },



    ];

    // Clear existing content
    cardContainer.innerHTML = "";

    // Create and append cards for each restaurant
    restaurants.forEach(restaurant => {
        const card = document.createElement("div");
        card.className = "card";
        card.style = "margin: 20px; padding: 10px; border: 1px solid black; display: inline-block;";

        const link = document.createElement("a");
        link.href = restaurant.url;
        link.target = "_blank"; // Open in new tab
        const name = document.createElement("h2");
        name.textContent = restaurant.name;
        link.appendChild(name); // Wrap the name with link

        const image = document.createElement("img");
        image.src = restaurant.imageURL;
        image.alt = restaurant.name;
        image.style = "width: 100%; height: auto;"; // Make image fit card

        const description = document.createElement("p");
        description.textContent = restaurant.description;

        card.appendChild(link); // Add linked name
        card.appendChild(image);
        card.appendChild(description);

        cardContainer.appendChild(card);
    });
});
