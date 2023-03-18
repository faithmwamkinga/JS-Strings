//first four characters
let firstword = "beautiful";
console.log(firstword.charAt(0));
console.log(firstword.charAt(1));
console.log(firstword.charAt(2));
console.log(firstword.charAt(3));

let indx = 10;
const food = "I did not have appetite today";
let output = food.slice(0,indx)+ "eat"+ " " +"appetite" + " " +"today";
console.log(output);

/*Count how many times the following string appears in the string variable:
1. "the"
2."s"
const story= "She sells sea shells at the sea shore"*/
const story= "She sells sea shells at the sea shore"
const otherstory = "the";
const myword = story.split(otherstory).length-1;
console.log(myword);
const story2 = "s";
const verb = story.split(story2).length-1;
console.log(verb);

/*Convert the following strings into the specified format:
1. UpperCase: "CONfidant"
2. LowerCase: "amazing", "beautiFUL"
3. Title case "A busy office" */

let word = "CONfidant";
let word2 = ("amazing", "beautiFUL");
let sentence = "A busy office";
console.log(word.toUpperCase());
console.log(word2.toLowerCase());



/*Using JavaScript, find the following words from the following strings:
1. "market"
const string1 = "The lady went to the market with her sister";
2. "season"
const string2 = "My favorite season is spring"
 */

const string1 = "The lady went to the market with her sister";
console.log(string1.slice(20,27));

const string2 = "My favorite season is spring"
console.log(string2.slice(12,18));

