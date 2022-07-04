// 最长不重复子字符串，没有包含重复的字符
// abcdebfgh
// abcdebbbbbfgh

function maxStrNoRepeat(s) {
    if (s.length === 1) {
        return s;
    }
    const len = s.length;
    let maxStr = '';
    let tempStr = s[0];
    const cachedMap = {
        [s[0]]: 0,
    };
    for (let i = 1; i < len; i++) {
        if (!cachedMap[s[i]]) {
            tempStr += s[i];
            cachedMap[s[i]] = i;
            if (tempStr.length > maxStr.length) {
                maxStr = tempStr;
            }
        } else {
            tempStr = tempStr.slice(cachedMap[s[i]] + 1, tempStr.length) + s[i];
            if (tempStr.length > maxStr.length) {
              maxStr = tempStr;
            }
            cachedMap[s[i]] = i;
        }
    }
    return maxStr;
}

console.log(maxStrNoRepeat('abcdebfg'));