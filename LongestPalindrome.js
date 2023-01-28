function longestPalindrome(str) {
    if (str.length < 1) return '';
    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < str.length; i++) {
        const lengthCenteredAtChar = expandAroundCenter(str, i, i);
        const lengthCenteredAtSpace = expandAroundCenter(str, i, i + 1);
        const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
        if (longestSubAtChar > maxSubLength) {
            maxSubLength = longestSubAtChar;
            maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
        }
    }
    return str.substr(maxSubStart, maxSubLength);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < str.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

console.log(longestPalindrome('madam'));
