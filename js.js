const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

class Transport {
    constructor (type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand
    }
    getInfo () {
        return {
            type: this.type,
            brand: this.brand,
                } }

    getPrice () {
        return this.price,
                }
}

console.log(data.getPrice());

class Car extends Transport {
    constructor (type, price, brand, doors){
        super(type, price, brand);
        this.doors = doors;
    }
            getDoorsCount() {
            return this.doors}
                    }   
class Bike extends Transport {
    constructor (type, price, brand, maxSpeed)
    { super(type, price, brand) 
        this.maxSpeed = maxSpeed;
    }
        getMaxSpeed() {
            return this.maxSpeed}
        }
     
const info = document.getElementById('info');     
 data.forEach((element) => {
 if (element.type === "car") {
    let car = new Car(
        element.type,
        element.price,
        element.brand, 
        element.doors, )
    let carInfo = document.createElement("div");
    carInfo.innerHTML = `<p>${car.brand}</p>  <p>${car.getInfo()}</p>
    <p>${car.getPrice()}</p> <p>${car.getDoorsCount()}</p>`;
    info.appendChild(carInfo);
}
    else {
        let bike = new Bike(
            element.type,
            element.brand,
            element.price,
            element.maxSpeed,);
        let bikeInfo = document.createElement("div");
        bikeInfo.innerHTML = `<p>${bike.brand}</p>  <p>${bike.getInfo()}</p>
        <p>${bike.getPrice()}</p> <p>${bike.getMaxSpeed()} `;
        info.appendChild(bikeInfo);
      }
    });
 