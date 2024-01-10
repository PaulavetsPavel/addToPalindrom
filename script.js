function minInsertionsForPalindrome(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    let i = 0;
    let j = n - 1;
    const result = [];

    while (i < j) {
        if (s[i] === s[j]) {
            result.push(s[i]);
            i++;
            j--;
        } else if (dp[i][j] === dp[i + 1][j] + 1) {
            result.push(s[i]);
            i++;
        } else {
            result.push(s[j]);
            j--;
        }
    }

    if (i === j) {
        result.push(s[i]);
    }

    const palindrome = result.join('') + result.slice(0, -1).reverse().join('');
    return palindrome;
}


button.addEventListener('click', e => {
    e.preventDefault();
    const p = document.createElement('p');
   // answer.removeChild(p)
    const inputString = string.value;
    const palindrome = minInsertionsForPalindrome(inputString);

    p.innerText = palindrome;
    answer.appendChild(p);

});