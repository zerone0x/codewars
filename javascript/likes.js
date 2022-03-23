function likes(names) {
    // TODO
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name},{name} and{name} like this',
      '{name},{name} and{n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{n}/g, function(val){
        return val ==='{name}' ? names.shift() : names.length;
    });
  }
  
//   ${names[0]}--> 取值
// function likes (names) {
//     return {
//       0 : 'no one likes this',
//       1 : `${names[0]} likes this`,
//       2 : `${names[0]} and ${names[1]} like this`,
//       3 : `${names[0]}, ${names[1]} and ${names[2]} like this`,
//       4 : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//     }[Math.min(4, names.length)]
//   }
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript