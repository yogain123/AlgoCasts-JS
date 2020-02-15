/**

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
 */
 
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let str1 = convertLinkedListToArray(l1).join("");
    let str2 = convertLinkedListToArray(l2).join("");
    let num1 = BigInt(str1);
    let num2 = BigInt(str2);
    let res = (num1 + num2).toString();
    return convertArrayToLinkedList(res.split(""));
};

function convertLinkedListToArray(list){
    let arr = [];
    while(list){
        arr.push(list.val)
        list = list.next;
    }
    return arr;
}

function convertArrayToLinkedList(arr){
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
