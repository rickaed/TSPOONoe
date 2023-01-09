var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(name, color, pattes) {
        this.color = "black";
        this.claw = 4;
        this.color = color;
        this.name = name;
        this.claw = pattes;
    }
    return Animals;
}());
var Quadri = /** @class */ (function (_super) {
    __extends(Quadri, _super);
    function Quadri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Quadri;
}(Animals));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Quadri));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Quadri));
var Bi = /** @class */ (function (_super) {
    __extends(Bi, _super);
    function Bi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bi;
}(Animals));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bird;
}(Bi));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fish;
}(Animals));
var worm = /** @class */ (function (_super) {
    __extends(worm, _super);
    function worm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return worm;
}(Animals));
// Chat européen (noir)
var chatEurop = new Cat("européen", "black", 4);
// Chat chartreux
var chatchartreux = new Cat("chartreux", undefined, 4);
// Chien Terre-Neuve (noir)
var dogTerreNeuve = new Dog("Terre-Neuve", "black", 4);
// Chien Moon Moon
var dogMoonMoon = new Dog("Moon Moon", undefined, 4);
// Mésange
var birdMesange = new Bird("Mésange", undefined, 2);
// Merle (noir)
var birdMerle = new Bird("Merle", "black", 2);
// Thon
var fishThon = new Fish("Thon", undefined, 0);
// Requin
var fishRequin = new Fish("Requin", undefined, 0);
// Asticot
var wormAsticot = new worm("Asticot", undefined, 0);
// 1 On peut photographier tous les animaux
function photograph(animal) {
    console.log("clic! : ".concat(animal.name, " is in a wrap!"));
}
// 2 Tous les chats peuvent miauler
function meow(animal) {
    console.log("le chat ".concat(animal.name, "meow !"));
}
// 3 Tous les chiens peuvent aboyer
function toBark(animal) {
    console.log(" ".concat(animal.name, " bark : Wouf!"));
}
// 4 Tous les oiseaux peuvent voler
function fly(animal) {
    console.log("the ".concat(animal.name, " fly away..."));
}
// 5 Tous les poissons peuvent nager
function swim(animal) {
    console.log("The fish swim");
}
// On peut caresser tous les animaux à 4 pattes
function caress(animal) {
    if (animal.claw === 4) {
        console.log("caress");
    }
}
// On peut nourrir tous les animaux de couleur noire
function feed(animal) {
    if (animal.color === "black") {
        console.log("eat this");
    }
}
