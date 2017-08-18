var input = prompt("Please enter a sentence: ");
var output1 = input.charAt(0).toUpperCase();
var output2 = input.charAt(input.length-1).toUpperCase();
var output = output1.concat(output2);

var reverseInput = output.split('').reverse().join('');

var string1 = input.concat(reverseInput);

var number = Math.floor(input.length / 2);
var index = input.charAt(number)
var string2 = index.concat(string1);

var final = string2.split('').reverse().join('');

$(document).ready(function() {
  $(".img1").click(function() {
    alert(input);
  });
  $(".img2").click(function() {
    alert(final);
  });
});
