function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  obj1 = {}
  obj2 = {}
  if(str1.length !== str2.length) {
    return false
  }
  for(let c of str1){
    obj1[c] = ++obj1[c] || 1
  }
  for(let c of str2){
    obj2[c] = ++obj2[c] || 1
  }
  for(let key in obj1){
    if(!obj2[key]){
      return false;
    }
    if(obj1[key] !== obj2[key]){
      return false;
    }
  }
  return true;
}

console.log(validAnagram('', '') )// true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true