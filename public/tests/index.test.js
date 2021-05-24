"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WordCounter_1 = require("../classes/WordCounter");
var wordCounter = new WordCounter_1.WordCounter();
var testText = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";
var calculateHighestFrequency = wordCounter.calculateHighestFrequency(testText);
var icalculateFrequencyForWord = wordCounter.icalculateFrequencyForWord(testText, "is");
var calculateMostFrequentNWords = wordCounter.calculateMostFrequentNWords(testText, 3);
console.log("calculateHighestFrequency", calculateHighestFrequency == 10);
console.log("icalculateFrequencyForWord", icalculateFrequencyForWord == 3);
console.log("calculateMostFrequentNWords", JSON.stringify(calculateMostFrequentNWords) === JSON.stringify([["to", 10], ["and", 10], ["the", 8]]));
//# sourceMappingURL=index.test.js.map