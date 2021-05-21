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
        var zin = "dit is slechts een testje, voor een software. + dat - / \het aantal, voor een zin moet tellen";
        // Remove everything beside letters and numbers
        zin = zin.replace(/[^\w\s]/g, " ").trim();
        // Remove double spaces
        zin = zin.replace(/\s{2,}/g, " ");
        var splitted = zin.split(" ");
        var words = [];
        splitted.forEach(function (word) {
            if (word in words) {
                words[word]++;
            }
            else {
                words[word] = 1;
            }
        });
        words = words.sort(function (a, b) {
            return a - b;
        });
        console.log(words);
        console.log("Called: ", text);
        return 1;
    };
    WordCounter.prototype.icalculateFrequencyForWord = function (text, word) {
        throw new Error('Method not implemented.');
    };
    WordCounter.prototype.calculateMostFrequentNWords = function (text, n) {
        throw new Error('Method not implemented.');
    };
    return WordCounter;
}());
exports.WordCounter = WordCounter;
//# sourceMappingURL=WordCounter.js.map