

class Animals {
    name: string;
    color?: string = "black";
    claw?: number = 4;
    constructor(name: string, color?: string, pattes?: number) {
        this.color = color;
        this.name = name;
        this.claw = pattes;
    }
}

class Quadri extends Animals {
}

class Cat extends Quadri {
}

class Dog extends Quadri {
}

class Bi extends Animals {
}

class Bird extends Bi {
}

class Fish extends Animals {
}

class worm extends Animals {
}



// Chat européen (noir)
const chatEurop = new Cat("européen", "black", 4);
// Chat chartreux
const chatchartreux = new Cat("chartreux",undefined,4);
// Chien Terre-Neuve (noir)
const dogTerreNeuve = new Dog("Terre-Neuve", "black",4);
// Chien Moon Moon
const dogMoonMoon = new Dog("Moon Moon",undefined,4);
// Mésange
const birdMesange = new Bird("Mésange",undefined,2);
// Merle (noir)
const birdMerle = new Bird("Merle", "black",2);
// Thon
const fishThon = new Fish("Thon",undefined,0);
// Requin
const fishRequin = new Fish("Requin",undefined,0);
// Asticot
const wormAsticot = new worm("Asticot",undefined,0);

// 1 On peut photographier tous les animaux
function photograph(animal: Animals): void {
    console.log(`clic! : ${animal.name} is in a wrap!`)
}

// 2 Tous les chats peuvent miauler
function meow(animal: Cat): void {
    console.log(`le chat ${animal.name}meow !`)
}

// 3 Tous les chiens peuvent aboyer
function toBark(animal: Dog): void {
    console.log(` ${animal.name} bark : Wouf!`)
}

// 4 Tous les oiseaux peuvent voler
function fly(animal: Bird): void {
    console.log(`the ${animal.name} fly away...`)
}

// 5 Tous les poissons peuvent nager
function swim(animal: Fish): void {
    console.log("The fish swim")
}

// On peut caresser tous les animaux à 4 pattes
function caress(animal: Quadri): void {
    if (animal.claw === 4) {
        console.log(`caress`)
    }
}

// On peut nourrir tous les animaux de couleur noire
function feed(animal: Animals) {
    if (animal.color === "black") {
        console.log("eat this")
    }
}