
let gold=5
let cps=0

let cpsDisplay = document.querySelector("#cpsDisplay")
let goldDisplay = document.querySelector("#goldDisplay")

cpsDisplay.innerHTML=cps
goldDisplay.innerHTML=gold

let goldTimer = setInterval(function(){
    gold+=cps
    console.log(gold.toFixed(2))
    cpsDisplay.innerHTML=cps.toFixed(2)
    goldDisplay.innerHTML=gold.toFixed(2)


},1000)
class business {
    constructor(name, display, amount, price, cpsData, button,location){
        this.name = name;
        this.display = display;
        this.amount = amount;
        this.price = price;
        this.cpsData = cpsData;
        this.button = button;
        this.location=location;
        this.orgPrice = price;
    }
    main(){

        this.button.onclick=biz[this.location].calculate
        
    }
    calculate() {
        
        let a = biz[parseInt(this.alt)]
        if (gold>=a.price){
        a.amount+=1
        gold-=a.price
        a.price*=a.cpsData+1
        a.display.textContent=a.amount
        cps+=a.orgPrice/10
        alienPrice.textContent = a.price
        
    
    
    }
    }
}

let alien = new business("Alien",document.querySelector(".alien"),0,1,1.1,document.querySelector("#alienImg"),0)
let astreoid_mine = new business("Astreoid Mine",document.querySelector(".astreoid_mine"),0,10,1.2,document.querySelector("#astreoid_mineImg"),1)
let energy = new business("Energy",document.querySelector(".energy"),0,100,1.3,document.querySelector("#energyImg"),2)
let research = new business("Research",document.querySelector(".research"),0,1000,1.4,document.querySelector("#researchImg"),3)
let rocket = new business("Rocket",document.querySelector(".rocket"),0,10000,1.5,document.querySelector("#rocketImg"),4)
let satellite = new business("Satellite",document.querySelector(".satellite"),0,100000,1.6,document.querySelector("#satelliteImg"),5)
let space_elevator = new business("Space Elevator",document.querySelector(".space_elevator"),0,1000000,1.7,document.querySelector("#space_elevatorImg"),6)
let space_tourist = new business("Space Tourist",document.querySelector(".space_tourist"),0,10000000,1.8,document.querySelector("#space_touristImg"),7)

let alienPrice = document.querySelector(".alienPrice")


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
    biz[i].main()
}

