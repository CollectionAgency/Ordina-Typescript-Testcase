"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordCounter = void 0;
var WordCounter = /** @class */ (function () {
    function WordCounter() {
    }
    /* WordFrequency methods */
    WordCounter.prototype.getWord = function () {
        throw new Error('Method not implemented.');
    };
    WordCounter.prototype.getFrequency = function () {
        throw new Error('Method not implemented.');
    };
    /* WordFrequencyAnalyzer methods */
    WordCounter.prototype.calculateHighestFrequency = function (text) {
        // To lower case
        text = text.toLocaleLowerCase();
        // Remove everything beside letters and numbers
        text = text.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        text = text.replace(/\s{2,}/g, " ");
        // Separate words by splitting and put them in an array.
        var splitted = text.split(" ");
        // Loop through array of the words we've splitted earlier
        var words = [];
        splitted.forEach(function (word) {
            // If word has already been checked (if found in list) then increase the count
            if (word in words) {
                words[word]++;
            }
            else {
                // If word has not been checked yet (not in list) then add it to the list with "1" as a default start count
                words[word] = 1;
            }
        });
        var highestFreq = { word: null, count: 0 };
        // Loop through words object
        Object.keys(words).forEach(function (word) {
            // Check if the word in the current loop is higher than the previous loop, if so, then rewrite "highestFreq" to the last loop.
            if (words[word] > highestFreq.count) {
                highestFreq.word = word;
                highestFreq.count = words[word];
            }
        });
        // Return highest frequency count
        return highestFreq.count;
    };
    WordCounter.prototype.icalculateFrequencyForWord = function (text, word) {
        // To lower case
        text = text.toLocaleLowerCase();
        // Remove everything beside letters and numbers
        text = text.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        text = text.replace(/\s{2,}/g, " ");
        // Separate words by splitting and put them in an array.
        var splitted = text.split(" ");
        // Loop through array of the words we've splitted earlier
        var words = [];
        splitted.forEach(function (word) {
            // If word has already been checked (if found in list) then increase the count
            if (word in words) {
                words[word]++;
            }
            else {
                // If word has not been checked yet (not in list) then add it to the list with "1" as a default start count
                words[word] = 1;
            }
        });
        var highestFreq = { word: null, count: 0 };
        // Loop through words object
        Object.keys(words).forEach(function (curWord) {
            // Check if the word in the current loop is higher than the previous loop and the word in the loop matches the word we're targetting, if so, then rewrite "highestFreq" to the last loop.
            if (words[curWord] > highestFreq.count && curWord == word) {
                highestFreq.word = curWord;
                highestFreq.count = words[curWord];
            }
        });
        return highestFreq.count;
    };
    WordCounter.prototype.calculateMostFrequentNWords = function (text, n) {
        // To lower case
        text = text.toLocaleLowerCase();
        // Remove everything beside letters and numbers
        text = text.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        text = text.replace(/\s{2,}/g, " ");
        // Separate words by splitting and put them in an array.
        var splitted = text.split(" ");
        // Loop through array of the words we've splitted earlier
        var words = [];
        splitted.forEach(function (word) {
            // If word has already been checked (if found in list) then increase the count
            if (word in words) {
                words[word]++;
            }
            else {
                // If word has not been checked yet (not in list) then add it to the list with "1" as a default start count
                words[word] = 1;
            }
        });
        var highestFreq = { word: null, count: 0 };
        // Loop through words in object and push them to an array
        var sortable = [];
        for (var word in words) {
            sortable.push([word, words[word]]);
        }
        // Sort the array (ascending)
        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });
        // Reverse the array
        sortable.reverse();
        return sortable.slice(0, n);
    };
    return WordCounter;
}());
exports.WordCounter = WordCounter;
//# sourceMappingURL=WordCounter.js.map