/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = convertLinkedListtoArray(head);
  let revArr = [...arr].reverse();
  let arrString = arr.join(" ");
  let revArrString = revArr.join(" ");
  //let lol = convertArrayToLinkedList(arr);
  //console.log(lol);
  return arrString === revArrString;
};

function convertLinkedListtoArray(temp) {
  let arr = [];
  while (temp != null) {
    arr.push(temp.val);
    temp = temp.next;
  }
  return arr;
}

function convertArrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let firstNode = new ListNode(arr[0]);
  let temp = firstNode;
  head = temp;
  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }
  return head;
}
// @lc code=end
