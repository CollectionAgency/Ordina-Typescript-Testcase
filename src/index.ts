import {WordCounter} from './classes/WordCounter';

let wordCounter = new WordCounter();

let calculateHighestFrequency = wordCounter.calculateHighestFrequency("dit is slechts een testje, voor een software. + dat - / \het aantal, voor een zin moet tellen");
let icalculateFrequencyForWord = wordCounter.icalculateFrequencyForWord("dit is slechts een testje, voor een software. + dat - / \het aantal, voor een zin dit moet tellen", "software");
let calculateMostFrequentNWords = wordCounter.calculateMostFrequentNWords("dit is slechts een software omdat ja software en tellen testje, voor een software. + dat - / \het aantal, voor een zin dit moet tellen", 9);

console.log(calculateHighestFrequency);
console.log(icalculateFrequencyForWord);
console.log(calculateMostFrequentNWords);