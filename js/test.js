for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
} // alerts 3, 3 times

(function() {
  var a = b = 5;
})();
console.log(b); // 5

// Fizzbuzz
function FizzBuzz(num) {
  // code goes here
  const modifiedArray =
    new Array(num).fill(0).map((a, i) => i + 1);
  const result =
    modifiedArray.map((m) => `${ m % 3 ? '' : 'Fizz'}${ m % 5 ? '' : 'Buzz'}` || m).join(' ');
  return result;
}
   
// keep this function call here 
console.log(FizzBuzz(readline()));

// html elements
function HTMLElements(str) {
  var regex = /<.*?>/g;
  const stri = str.match(regex).map((s) => s.split('<').filter((f) => f !== '').join(''));
  const stt = stri.map((s) => s.split('>').filter((f) => f !== '').join(''));
  let newA = stt;
  const pa = [];

  // stt.forEach((m, i) => {
  //   const findd = stt.findIndex((f) => f === `/${m}`);
  //   if (findd >= 0) {
  //     pa.push(findd);
  //     pa.push(i);
  //   }
  // })

  // newAB = stt.filter((val, i) => {
  //   const inn = stt.indexOf(`/${val}`);
  //   if (inn !== -1) {
  //     pa.push(inn);
  //     pa.push(i);
  //   }
  // })

  stt.forEach((val, i) => {
    const inn = stt.indexOf(`/${val}`);
    if (inn !== -1 && pa.indexOf(inn) === -1) {
      pa.push(inn);
      pa.push(i);
    }
  })

  newAB = stt.filter((value, index) => { 
            return pa.indexOf(index) === -1; 
          });
  const reg = /\/\w*/g;
  // tags with / filtered, but
  const nn = newAB.filter((f) => !f.match(reg))[0] || undefined;
  if (nn) {
    console.log(nn, 'nn');
    return nn;
  }
  console.log('else');
  return 'true'
}
   
// keep this function call here 
// console.log(HTMLElements(readline()));
HTMLElements(readline());

// Final HTML elements code
function HTMLElements(str) {
  // breaks the string to array elements with <> tags
  var regex = /<.*?>/g;

  const elementArray = str.match(regex);

  const changedArray = elementArray.map(a => a.substring(1, a.length - 1));
  const indexArray = [];

  // finds elements which have their closing tags and pushes the index into indexArray
  changedArray.forEach((val, i) => {
    const foundIndex = changedArray.indexOf(`/${val}`);
    if (foundIndex !== -1 && indexArray.indexOf(foundIndex) === -1) {
      indexArray.push(foundIndex);
      indexArray.push(i);
    }
  })

  // filters array with only items that dont have closing tag
  filteredArray = changedArray.filter((value, index) => { 
            return indexArray.indexOf(index) === -1; 
          });
  // this filters elements that are self closing
  const anotherRegex = /\/\w*/g;
  const resultElement = filteredArray.filter((f) => !f.match(anotherRegex))[0];
  // shows the first element that does not have a closing tag
  if (resultElement) console.log(resultElement);
  else console.log(true);
}
   
// keep this function call here 
// console.log(HTMLElements(readline()));
HTMLElements(readline());