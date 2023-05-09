function countCharacters(sentence) {
  let charCount = new Map();
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      char = char.toLowerCase(); // تبدیل حرف به حروف کوچک
      if (charCount.has(char)) {
        charCount.set(char, charCount.get(char) + 1);
      } else {
        charCount.set(char, 1);
      }
    }
  }
  return charCount;
}

let sentence = "Hello World";
let result = countCharacters(sentence);

for (let [key, value] of result) {
  console.log(key + " : " + value);
}
