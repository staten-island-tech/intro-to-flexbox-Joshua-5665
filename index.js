const wheels = [
    {
        name: "Electric Wheelchair Wheel",
        price: 54.01,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    },
    {
        name: "Western Style Wagon Wheel",
        price: 44.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    },
    {
        name: "Toyota Wheel Rims",
        price: 125,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    },
    {
        name: "Front Bicycle Wheels",
        price: 68.47,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    },
    {
        name: "Auto Racing Steering Wheel",
        price: 24.91,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    },
    {
        name: "Wheel Cog",
        price: 49.35,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Gears",
    },
    {
        name: "Wheel of Names",
        price: 0.00,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Extra",
    },
    {
        name: "LEGO Wheels Set",
        price: 21.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Rubber",
    },
    {
        name: "Office Chair Rubber Wheels",
        price: 22.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Rubber",
    },
    {
        name: "Ferris Wheel Model",
        price: 16.49,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Extra",
    },
    {
        name: "Tesla Model 3 Wheels",
        price: 209.00,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    },
    {
        name: "14inch Motocycle Wheel",
        price: 74.98,
        inStock: true,
        brand: "The Wheel Store",
        img: "",
        type: "Vehicles",
    }
];

function inject(wheel) {

    const container = document.quesrySelector(".container");
    container.insertAdjacentHTML("afterbegin", 
    <div class = "card"></div>
    <div class = "btn">`${wheels.price}`</div>
    )
}
inject(wheels[0]);
inject(wheels[0]);
inject(wheels[0]);
inject(wheels[0]);

