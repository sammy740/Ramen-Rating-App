document.addEventListener("DOMContentLoaded", () => {
    const ramens = [
        { id: 1, name: "Gyukotsu", restaurant: "Ichiran", image: "gyukotsu.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Kojiro", restaurant: "Menya", image: "kojiro.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Naruto", restaurant: "Ramen-ya", image: "naruto.jpg", rating: 3, comment: "Tasty but salty." },
        { id: 4, name: "Nirvana", restaurant: "Noodle House", image: "nirvana.jpg", rating: 5, comment: "Amazing!" },
        { id: 5, name: "Shoyu", restaurant: "Ramen Master", image: "shoyu.jpg", rating: 4, comment: "Classic and delicious!" }
    ];

    const menu = document.getElementById("ramen-menu");
    const detailImage = document.getElementById("ramen-image");
    const detailName = document.getElementById("ramen-name");
    const detailRestaurant = document.getElementById("ramen-restaurant");
    const detailRating = document.getElementById("ramen-rating");
    const detailComment = document.getElementById("ramen-comment");

    function displayRamens() {
        menu.innerHTML = "";
        ramens.forEach(ramen => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.addEventListener("click", () => displayDetails(ramen));
            menu.appendChild(img);
        });
    }

    function displayDetails(ramen) {
        detailImage.src = ramen.image;
        detailName.textContent = ramen.name;
        detailRestaurant.textContent = ramen.restaurant;
        detailRating.textContent = ramen.rating;
        detailComment.textContent = ramen.comment;
    }

    document.getElementById("new-ramen-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating: document.getElementById("new-rating").value,
            comment: document.getElementById("new-comment").value
        };
        ramens.push(newRamen);
        displayRamens();
        event.target.reset();
    });

    displayRamens();
    displayDetails(ramens[0]); // Display first ramen by default
});
