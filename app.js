"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student1_1 = __importDefault(require("./student1"));
const student2_1 = __importDefault(require("./student2"));
const student3_1 = __importDefault(require("./student3"));
let student1 = new student1_1.default();
console.log("student1", student1.sname, student1.sfathername, "id no", student1.sidno);
let student2 = new student2_1.default();
console.log("student2", student2.sname, student2.sfathername, "id no", student2.sidno);
let student3 = new student3_1.default();
console.log("student3", student3.sname, student3.sfathername, "id no", student3.sidno);
