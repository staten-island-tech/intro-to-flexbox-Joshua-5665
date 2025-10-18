const wheels = [
    {
        name: "Electric Wheelchair Wheel",
        price: 54.01,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61P2PJFQzgL.jpg",
        type: "Vehicles",
    },
    {
        name: "Western Style Wagon Wheel",
        price: 44.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/71H5hvYXDlL.jpg",
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
        name: "Wheel of Names",
        price: 0.01,
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
        name: "Ferris Wheel Model",
        price: 16.49,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61vIEjNP0dL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
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
        name: "Wooden Anchor Ship Wheel",
        price: 49.99,
        inStock: true,
        brand: "The Wheel Store",
        img: "https://m.media-amazon.com/images/I/61jiBl8DtRL._AC_UL320_.jpg",
        type: "Wooden",
    }

];


function inject(wheels) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
            <img class="card-img" src="${wheels.img}"/>
            <h2 class="Card-Header">${wheels.name}</h2>
            <h3 class="card-price">${wheels.price}</h3>
            <button class="remove btn">ADD TO CART</button>
        </div>`
    );
}

wheels.forEach(inject);
/* function removeAlbum(event) {
  event.target.parentElement.remove();
} */




