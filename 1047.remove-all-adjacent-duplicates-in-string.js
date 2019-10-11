/**
 * 
 * Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

 

Example 1:

Input: "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
 

Note:

1 <= S.length <= 20000
S consists only of English lowercase letters.
 */

/*
 * @lc app=leetcode id=1047 lang=javascript
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let res = [];
  S.split("").forEach(item => {
    if (res[res.length - 1] != item) return res.push(item);
    return res.pop();
  });

  return res.join("");
};

/*
My One More Solution:

var removeDuplicates = function(S) {
    //if index and index+x same, then move only index+x,
    // but, if diff and move move both index and index+x

    let bIndex = 1;
    let aIndex = 0;

    while(true){
        // console.log({aIndex, bIndex, S});
        if(aIndex>S.length || bIndex>S.length){
          
            break;
        }
        if(S[aIndex]===S[bIndex])
            bIndex++;
        if(bIndex-aIndex>1){
            S=S.replace(S.substring(aIndex, bIndex),"");
            aIndex=0;
            bIndex=1;
        }
        else if(bIndex-aIndex==1){
            aIndex++;
            bIndex++;
        }
    }
    return S;
};

*/
