interface WordFrequencyAnalyzer {
    calculateHighestFrequency(text: string): number;
    icalculateFrequencyForWord(text: string, word: string): number;
    List<WordFrequency> calculateMostFrequentNWords(text: string, n: number): Array<WordFrequency>;
};