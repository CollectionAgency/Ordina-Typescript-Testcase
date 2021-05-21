import {WordFrequency} from '../interfaces/WordFrequency';
import {WordFrequencyAnalyzer} from '../interfaces/WordFrequencyAnalyzer';

export class WordCounter implements WordFrequency, WordFrequencyAnalyzer{
    /* WordFrequency methods */
    getWord(): string {
        throw new Error('Method not implemented.');
    }
    getFrequency(): number {
        throw new Error('Method not implemented.');
    }

    /* WordFrequencyAnalyzer methods */
    calculateHighestFrequency(text: string): number {
        let zin = "dit is slechts een testje, voor een software. + dat - / \het aantal, voor een zin moet tellen";

// Remove everything beside letters and numbers
zin = zin.replace(/[^\w\s]/g, " ").trim();

// Remove double spaces
zin = zin.replace(/\s{2,}/g, " ");

let splitted = zin.split(" ");

let words = [];

splitted.forEach(word => {
  if(word in words) {
    words[word]++;
  } else {
    words[word] = 1;
  }
});


words = words.sort(function(a, b) {
  return a - b;
});


console.log(words);


        console.log("Called: ", text);
        return 1;
    }
    icalculateFrequencyForWord(text: string, word: string): number {
        throw new Error('Method not implemented.');
    }
    calculateMostFrequentNWords(text: string, n: number): any[] {
        throw new Error('Method not implemented.');
    }

}