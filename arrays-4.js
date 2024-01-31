const array = ['Hello', 'my', 'name', 'is :','khaled' ,'Al-hammadi', '!'];


let sentence = '';

for (let i = 0; i < array.length; i++) {
  sentence += array[i] + ' '; 
}

console.log(sentence.trim()); 