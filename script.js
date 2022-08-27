
let gold
let cps

class business {
    constructor(name, display, amount, price, cpsData, button){
        this.name = name
        this.display = display;
        this.amount = amount;
        this.price = price;
        this.cpsData = cpsData;
        this.button = button;
    }
    calculate() {
        console.log(this)
        this.amount+=1
        this.price*=this.cpsData+1
        this.display.textContent=amount
        console.log(this.name)
    }
}

let alien = new business("Alien",document.querySelector(".alien"),0,1,1.1,document.querySelector("#alienImg"))
let astreoid_mine = new business("Astreoid Mine",document.querySelector(".astreoid_mine"),0,100,1.2,document.querySelector("#astreoid_mineImg"))
let energy = new business("Energy",document.querySelector(".energy"),0,1000,1.3,document.querySelector("#energyImg"))
let research = new business("Research",document.querySelector(".research"),0,10000,1.4,document.querySelector("#researchImg"))
let rocket = new business("Rocket",document.querySelector(".rocket"),0,100000,1.5,document.querySelector("#rocketImg"))
let satellite = new business("Satellite",document.querySelector(".satellite"),0,1000000,1.6,document.querySelector("#satelliteImg"))
let space_elevator = new business("Space Elevator",document.querySelector(".space_elevator"),0,10000000,1.7,document.querySelector("#space_elevatorImg"))
let space_tourist = new business("Space Tourist",document.querySelector(".space_tourist"),0,100000000,1.8,document.querySelector("#space_touristImg"))

biz = [
    alien,
    astreoid_mine,
    energy,
    research,
    rocket,
    satellite,
    space_elevator,
    space_tourist
]

for(let i = 0; i<biz.length;i++){
    biz[i].display.textContent = biz[i].name
    biz[i].button.onclick= biz[i].calculate
    console.log(biz[i])
}

