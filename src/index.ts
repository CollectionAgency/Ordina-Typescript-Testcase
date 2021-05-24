import {WordCounter} from './classes/WordCounter';

let wordCounter = new WordCounter();

let text = `dit is slechts een test tekst om te demonstreren dat deze code snippet werkt om duplicaten te detecteren. Dit is een test.`;
let calculateHighestFrequency = wordCounter.calculateHighestFrequency(text);
let icalculateFrequencyForWord = wordCounter.icalculateFrequencyForWord(text, "dit");
let calculateMostFrequentNWords = wordCounter.calculateMostFrequentNWords(text, 3);

console.log(calculateHighestFrequency);
console.log(icalculateFrequencyForWord);
console.log(calculateMostFrequentNWords);