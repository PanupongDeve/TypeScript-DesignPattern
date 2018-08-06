"use strict";
exports.__esModule = true;
var Queen_1 = require("./Character/Queen");
var SwordBehavior_1 = require("./Weapon/SwordBehavior");
var BowAndArrowBehavior_1 = require("./Weapon/BowAndArrowBehavior");
var queen = new Queen_1["default"]();
queen.fight();
queen.setWeapon(new SwordBehavior_1["default"]);
queen.fight();
queen.setWeapon(new BowAndArrowBehavior_1["default"]);
queen.fight();
