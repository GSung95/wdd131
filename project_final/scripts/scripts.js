document.addEventListener("DOMContentLoaded", function() {
    // Get current year
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Get last modified date
    var lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;
});


// Example car data array
const cars = [
    {
        name: "992 Porsche 911 GT3RS",
        image: "images/porsche_911_gt3rs.jpg",
        specs: {
            engine: "4.0L Flat-Six",
            power: "520 hp",
            acceleration: "0-60 mph in 3.0 seconds",
            topSpeed: "193 mph"
        }
    },
    {
        name: "930 Porsche 911 Turbo",
        image: "images/930turbo.jpg",
        specs: {
            engine: "3.3L Turbocharged Flat-Six",
            power: "330 hp",
            acceleration: "0-60 mph in 4.6 seconds",
            topSpeed: "161 mph"
        }
    },
    {
        name: "Porsche 911 Carrera RS",
        image: "images/carrera_rs.jpg",
        specs: {
            engine: "2.7L Flat-Six",
            power: "210 hp",
            acceleration: "0-60 mph in 5.6 seconds",
            topSpeed: "152 mph"
        }
    },
    {
        name: "992 Porsche 911 GTS",
        image: "images/porsche_911_gts.jpg",
        specs: {
            engine: "3.0L Twin-Turbo Flat-Six",
            power: "450 hp",
            acceleration: "0-60 mph in 3.2 seconds",
            topSpeed: "193 mph"
        }
    },
    {
        name: "992 Porsche GT3 / 992 Porsche GT3 Touring",
        image: "images/porsche_gt3_gt3_touring.jpg",
        specs: {
            engine: "4.0L Flat-Six",
            power: "502 hp",
            acceleration: "0-60 mph in 3.2 seconds",
            topSpeed: "197 mph"
        }
    }
];


// Function to dynamically generate car cards
function generateCarCards() {
    const carList = document.getElementById("car-list");

    cars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        const carImage = document.createElement("img");
        carImage.src = car.image;
        carCard.appendChild(carImage);

        const carName = document.createElement("h3");
        carName.textContent = car.name;
        carCard.appendChild(carName);

        const carSpecs = document.createElement("p");
        carSpecs.textContent = `Engine: ${car.specs.engine} | Power: ${car.specs.power} | Acceleration: ${car.specs.acceleration} | Top Speed: ${car.specs.topSpeed}`;
        carCard.appendChild(carSpecs);

        carList.appendChild(carCard);
    });
}

// Call the function to generate car cards
generateCarCards();
