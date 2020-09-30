// 给定一个字符串 s， 找到 s 中最长的回文子串。 你可以假设s 的最大长度为 1000。(题目转自leetcode)
// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba"
// 也是一个有效答案。
// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

// 解法一：暴力循环
function longestPalindrome(allStr: string): string[] {
    let subStr = ''
    let arr = []

    for (let i = 0; i <= allStr.length - 1; i++) {
        for (let j = i + 1; j <= allStr.length; j++) {
            const temp = allStr.slice(i, j)
            if (temp === temp.split('').reverse().join('')) {
                if (temp.length > subStr.length) {
                    subStr = temp
                    arr = [temp]
                } else if (temp.length === subStr.length) {
                    arr.push(temp)
                }
            }
        }
    }
    return arr
}

// 解法二：动态规划
// 首先考虑如果字符串长度为1，那么答案就是其本身
// 如果字符串长度等于2，那么如果s[i] == s[j] 则说明该字符串为回文
// 那么如果长度大于2呢？s[i] == s[j]的情况下s[i + 1] == s[j-1]，也说明该字符串为回文
function longestPalindrome_2(s: string) {
    if (s.length === 1) {
        return [s]
    }
    // 创建二阶数组存储从j到i是否是回文数组，0为不回文，1为回文 arr=[[],[]]
    let arr = []
    for (let i = 0; i < s.length; i++) {
        arr[i] = []
    }

    // 存储最长回文子串的起始位置
    let begin = 0;
    // 存储最长子串的长度
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let j = 0;
        while (j <= i) {
            // 如果 i-j <= 1 时，说明i位置和j位置要么是重合的，要么是相邻的，即为最后一次查找
            // 否则继续查询[j + 1]到[i - 1]是否为回文
            if (s[j] == s[i] && (i - j <= 1 || arr[j + 1][i - 1])) {
                // 如果符合上述条件，说明j到i是回文
                arr[j][i] = 1
                if (i - j + 1 > max) {
                    // 如果当前子串大于存储的子串长度，则替换之
                    begin = j;
                    // 注意+1，比如从3到5的长度为3 = 5 - 3 + 1
                    max = i - j + 1;
                }
            }
            j++;
        }
    }
    return s.substr(begin, max);
}