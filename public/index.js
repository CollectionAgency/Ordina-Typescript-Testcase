"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WordCounter_1 = require("./classes/WordCounter");
var wordCounter = new WordCounter_1.WordCounter();
var calculateHighestFrequency = wordCounter.calculateHighestFrequency("dit is slechts een testje, voor een software. + dat - / \het aantal, voor een zin moet tellen");
var icalculateFrequencyForWord = wordCounter.icalculateFrequencyForWord("dit is slechts een testje, voor een software. + dat - / \het aantal, voor een zin dit moet tellen", "software");
var calculateMostFrequentNWords = wordCounter.calculateMostFrequentNWords("dit is slechts een software omdat ja software en tellen testje, voor een software. + dat - / \het aantal, voor een zin dit moet tellen", 9);
console.log(calculateHighestFrequency);
console.log(icalculateFrequencyForWord);
console.log(calculateMostFrequentNWords);
//# sourceMappingURL=index.js.map