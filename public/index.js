"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WordCounter_1 = require("./classes/WordCounter");
var wordCounter = new WordCounter_1.WordCounter();
var text = "dit is slechts een test tekst om te demonstreren dat deze code snippet werkt om duplicaten te detecteren. Dit is een test.";
var calculateHighestFrequency = wordCounter.calculateHighestFrequency(text);
var icalculateFrequencyForWord = wordCounter.icalculateFrequencyForWord(text, "dit");
var calculateMostFrequentNWords = wordCounter.calculateMostFrequentNWords(text, 3);
console.log(calculateHighestFrequency);
console.log(icalculateFrequencyForWord);
console.log(calculateMostFrequentNWords);
//# sourceMappingURL=index.js.map