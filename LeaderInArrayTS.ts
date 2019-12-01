//JS program to print leaders in an array
/*
Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to 
its right side. And the rightmost element is always a leader. For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.*/

class LeaderInArray {
  leader(): void {
    var a = [16, 17, 4, 3, 5, 2];
    var max = -Infinity;
    for (var i = a.length - 1; i >= 0; i--) {
      if (a[i] >= max) {
        max = a[i];
        console.log(a[i]);
      }
    }
  }
}

let leaderInArray = new LeaderInArray();
leaderInArray.leader();
