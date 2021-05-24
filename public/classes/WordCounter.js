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
        // Remove everything beside letters and numbers
        text = text.toLocaleLowerCase();
        text = text.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        text = text.replace(/\s{2,}/g, " ");
        var splitted = text.split(" ");
        var words = [];
        splitted.forEach(function (word) {
            if (word in words) {
                words[word]++;
            }
            else {
                words[word] = 1;
            }
        });
        var highestFreq = { word: null, count: 0 };
        Object.keys(words).forEach(function (word) {
            if (words[word] > highestFreq.count) {
                highestFreq.word = word;
                highestFreq.count = words[word];
            }
        });
        return highestFreq.count;
    };
    WordCounter.prototype.icalculateFrequencyForWord = function (text, word) {
        // Remove everything beside letters and numbers
        text = text.toLocaleLowerCase();
        text = text.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        text = text.replace(/\s{2,}/g, " ");
        var splitted = text.split(" ");
        var words = [];
        splitted.forEach(function (curWord) {
            if (curWord in words) {
                words[curWord]++;
            }
            else {
                words[curWord] = 1;
            }
        });
        var highestFreq = { word: null, count: 0 };
        Object.keys(words).forEach(function (curWord) {
            if (words[curWord] > highestFreq.count && curWord == word) {
                highestFreq.word = curWord;
                highestFreq.count = words[curWord];
            }
        });
        return highestFreq.count;
    };
    WordCounter.prototype.calculateMostFrequentNWords = function (text, n) {
        // Remove everything beside letters and numbers
        text = text.toLocaleLowerCase();
        text = text.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        text = text.replace(/\s{2,}/g, " ");
        var splitted = text.split(" ");
        var words = [];
        splitted.forEach(function (word) {
            if (word in words) {
                words[word]++;
            }
            else {
                words[word] = 1;
            }
        });
        var highestFreq = { word: null, count: 0 };
        var sortable = [];
        for (var word in words) {
            sortable.push([word, words[word]]);
        }
        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });
        sortable.reverse();
        return sortable.slice(0, n);
    };
    return WordCounter;
}());
exports.WordCounter = WordCounter;
//# sourceMappingURL=WordCounter.js.map