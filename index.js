const wheels = [
    {
        name: "Western Style Wagon Wheel",
        price: 44.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/71H5hvYXDlL.jpg",
        type: "Wooden",
    },
    {
        name: "Wooden Anchor Ship Wheel",
        price: 49.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61jiBl8DtRL._AC_UL320_.jpg",
        type: "Wooden",
    },
    {
        name: "Toyota Wheel Rims",
        price: 125.01,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/619QCBgfgSL._AC_UY218_.jpg",
        type: "Vehicles",
    },
    {
        name: "Front Bicycle Wheels",
        price: 68.47,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/71L4NfY-t6L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        type: "Vehicles",
    },
    {
        name: "Auto Racing Steering Wheel",
        price: 24.91,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/51aJVgHs5BL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        type: "Vehicles",
    },
    {
        name: "Wheel Cog",
        price: 49.35,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/51cVdy92kJL._AC_SX679_.jpg",
        type: "Gears",
    },
    {
        name: "Plastic Wheel Cogs",
        price: 12.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/419mNX4+yrL._AC_UL320_.jpg",
        type: "Gears",
    },
    {
        name: "Giant Wooden Wall Clock Wheel",
        price: 89.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTA8P3ven7tPblUsEeqA1x47Ju2ilGJgvFwoxS-DR53-PVUKG1NUwao3xR_2COs5lCFIE4esKjhwBFpn_41YhaskiTm4uCoAPvfDdzmjgWiKeOVzo9Fp1i",
        type: "Wooden",
    },
    {
        name: "Wheel of Names",
        price: 0,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Qk4lFYW5itEArNDKfh0-QAgRPJikCTV3XA&s",
        type: "Extra",
    },
    {
        name: "LEGO Wheels Set",
        price: 21.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclhv3foefkOtIPefXLI4jvqcq67cEiufyIA&s",
        type: "Rubber",
    },
    {
        name: "Office Chair Rubber Wheels",
        price: 22.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/71yg93g3sZL._SX522_.jpg",
        type: "Rubber",
    },
    {
        name: "Arcade Redemption Wheel",
        price: 256.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZbWsCd3NHXZhELDT_2MD9NyOC26zQ_4-AA&s",
        type: "Extra",
    },
    {
        name: "Ferris Wheel Model",
        price: 16.49,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61vIEjNP0dL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        type: "Extra",
    },
    {
        name: "Spinning Prize Wheel",
        price: 7.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61Ff9A9AQIL._AC_UL320_.jpg",
        type: "Extra",
    },
    {
        name: "Tank Wheels",
        price: 199.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhHWXB-ebRBijo5wIZQhFD2aFp-GZbaBPvQ&s",
        type: "Vehicles",
    },
    {
        name: "Tesla Model 3 Wheels",
        price: 209.01,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/614voQB762L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        type: "Vehicles",
    },
    {
        name: "14inch Motocycle Wheel",
        price: 74.98,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/71UON4G18aL._AC_SX466_.jpg",
        type: "Vehicles",
    },
    {
        name: "Train Wheels",
        price: 709.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://mechanical.strasburgrailroad.com/wp-content/uploads/2023/10/SRR-Mech.-Oct.-2023-wheel-image-min-1024x680.jpg",
        type: "Vehicles",
    },
    {
        name: "Vintage Wooden Garden Wagon Wheel",
        price: 13.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61g+l1PbZQL._AC_UL320_.jpg",
        type: "Wooden",
    },
    {
        name: "Electric Wheelchair Wheel",
        price: 54.01,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61P2PJFQzgL.jpg",
        type: "Vehicles",
    },
];


function inject(wheels) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
            <img class="card-img" src="${wheels.img}"/>
            <h2 class="Card-Header">${wheels.name}</h2>
            <h3 class="card-price">$${wheels.price}</h3>
            <button class="cart-btn">ADD TO CART</button>
        </div>`
    );
}
wheels.forEach(inject);

/* function filterWheels(type) {
    filterByType = wheels.filter((wheel) => wheel.type === type);
    const container = document.querySelector(".container");
    container.innerHTML = "";
    filterByType.forEach(inject);
}
filterWheels("Vehicles"); */

function filterWheels(type) {
    let filterByType = [];
    if (type === "All") {
        filterByType = wheels;
    } else {
        filterByType = wheels.filter((wheel) => wheel.type === type);
    }
    const container = document.querySelector(".container");
    container.innerHTML = "";
    filterByType.forEach(inject);
}
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const type = button.getAttribute("data-type");
        filterWheels(type);
    });
});

let cart = [];


function addToCart() {
    const cartButtons = document.querySelectorAll(".cart-btn");
    cartButtons.forEach((button) => {
        button.addEventListener("click", function () );


    })
}













