const SameWordsByCharacters = (word) => {
    const words = ['lopo', 'polo', 'pool', 'book', 'lpoo', 'ploo'];
    const result = [];
    for(let i = 0; i < words.length; i++) {
        let same = true;
        if(word.length === words[i].length) {
            for(let j = 0; j < word.length; j++) {
                if (words[i].indexOf(word[j]) === -1) {
                    same = false;
                    break;
                }
            }
            same && result.push(words[i]);
        }
    }
    return result
}
console.log(SameWordsByCharacters('loop'));