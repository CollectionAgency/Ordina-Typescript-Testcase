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
		// Remove everything beside letters and numbers
		text = text.toLocaleLowerCase();
		text = text.replace(/[^\w\s]/g, " ").trim();

		// Remove double spaces
		text = text.replace(/\s{2,}/g, " ");

		let splitted = text.split(" ");

		let words = [];

		splitted.forEach(word => {
			if(word in words) {
				words[word]++;
			} else {
				words[word] = 1;
			}
		});

		let highestFreq = {word: null, count: 0};

		Object.keys(words).forEach(word => {
			if(words[word] > highestFreq.count) {
				highestFreq.word = word;
				highestFreq.count = words[word];
			}
		});

        return highestFreq.count;
    }

    icalculateFrequencyForWord(text: string, word: string): number {
		// Remove everything beside letters and numbers
		text = text.toLocaleLowerCase();
		text = text.replace(/[^\w\s]/g, " ").trim();

		// Remove double spaces
		text = text.replace(/\s{2,}/g, " ");

		let splitted = text.split(" ");

		let words = [];

		splitted.forEach(curWord => {
			if(curWord in words) {
				words[curWord]++;
			} else {
				words[curWord] = 1;
			}
		});

		let highestFreq = {word: null, count: 0};

		Object.keys(words).forEach(curWord => {
			if(words[curWord] > highestFreq.count && curWord == word) {
				highestFreq.word = curWord;
				highestFreq.count = words[curWord];
			}
		});

        return highestFreq.count;
    }

    calculateMostFrequentNWords(text: string, n: number): any[] {
		
		// Remove everything beside letters and numbers
		text = text.toLocaleLowerCase();
		text = text.replace(/[^\w\s]/g, " ").trim();

		// Remove double spaces
		text = text.replace(/\s{2,}/g, " ");

		let splitted = text.split(" ");

		let words = [];

		splitted.forEach(word => {
			if(word in words) {
				words[word]++;
			} else {
				words[word] = 1;
			}
		});

		let highestFreq = {word: null, count: 0};

		var sortable = [];
		for (var word in words) {
			sortable.push([word, words[word]]);
		}

		sortable.sort(function(a, b) {
			return a[1] - b[1];
		});

		sortable.reverse();

		return sortable.slice(0, n);
    }

}