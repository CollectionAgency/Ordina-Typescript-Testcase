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
		// To lower case
		text = text.toLocaleLowerCase();

		// Remove everything beside letters and numbers
		text = text.replace(/[^\w\s]/g, " ").trim();

		// Remove double spaces
		text = text.replace(/\s{2,}/g, " ");

		// Separate words by splitting and put them in an array.
		let splitted = text.split(" ");

		// Loop through array of the words we've splitted earlier
		let words = [];
		splitted.forEach(word => {
			// If word has already been checked (if found in list) then increase the count
			if(word in words) {
				words[word]++;
			} else {
				// If word has not been checked yet (not in list) then add it to the list with "1" as a default start count
				words[word] = 1;
			}
		});

		let highestFreq = {word: null, count: 0};

		// Loop through words object
		Object.keys(words).forEach(word => {
			// Check if the word in the current loop is higher than the previous loop, if so, then rewrite "highestFreq" to the last loop.
			if(words[word] > highestFreq.count) {
				highestFreq.word = word;
				highestFreq.count = words[word];
			}
		});

		// Return highest frequency count
        return highestFreq.count;
    }

    icalculateFrequencyForWord(text: string, word: string): number {
		// To lower case
		text = text.toLocaleLowerCase();

		// Remove everything beside letters and numbers
		text = text.replace(/[^\w\s]/g, " ").trim();

		// Remove double spaces
		text = text.replace(/\s{2,}/g, " ");

		// Separate words by splitting and put them in an array.
		let splitted = text.split(" ");

		// Loop through array of the words we've splitted earlier
		let words = [];
		splitted.forEach(word => {
			// If word has already been checked (if found in list) then increase the count
			if(word in words) {
				words[word]++;
			} else {
				// If word has not been checked yet (not in list) then add it to the list with "1" as a default start count
				words[word] = 1;
			}
		});

		let highestFreq = {word: null, count: 0};

		// Loop through words object
		Object.keys(words).forEach(curWord => {
			// Check if the word in the current loop is higher than the previous loop and the word in the loop matches the word we're targetting, if so, then rewrite "highestFreq" to the last loop.
			if(words[curWord] > highestFreq.count && curWord == word) {
				highestFreq.word = curWord;
				highestFreq.count = words[curWord];
			}
		});

        return highestFreq.count;
    }

    calculateMostFrequentNWords(text: string, n: number): any[] {
		// To lower case
		text = text.toLocaleLowerCase();

		// Remove everything beside letters and numbers
		text = text.replace(/[^\w\s]/g, " ").trim();

		// Remove double spaces
		text = text.replace(/\s{2,}/g, " ");

		// Separate words by splitting and put them in an array.
		let splitted = text.split(" ");

		// Loop through array of the words we've splitted earlier
		let words = [];
		splitted.forEach(word => {
			// If word has already been checked (if found in list) then increase the count
			if(word in words) {
				words[word]++;
			} else {
				// If word has not been checked yet (not in list) then add it to the list with "1" as a default start count
				words[word] = 1;
			}
		});

		let highestFreq = {word: null, count: 0};

		// Loop through words in object and push them to an array
		var sortable = [];
		for (var word in words) {
			sortable.push([word, words[word]]);
		}

		// Sort the array (ascending)
		sortable.sort(function(a, b) {
			return a[1] - b[1];
		});

		// Reverse the array
		sortable.reverse();

		return sortable.slice(0, n);
    }

}