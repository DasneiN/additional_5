module.exports = function check(str, bracketsConfig) {

  // while (str.length > 0) {

  //   for (let j = 0; j < bracketsConfig.length; j++) {
  //     let sliced = false;
      
  //     if (str[0] == bracketsConfig[j][0]) {

  //       if (str[1] == bracketsConfig[j][1]) {
  //         str = str.slice(3);
  //         sliced = true;
  //       } else if (str[str.length - 1] == bracketsConfig[j][1]) {
  //         str = str.slice(1,-1);
  //         sliced = true;
  //       }
        
  //     }

  //     if (j == bracketsConfig.length - 1 && !sliced) {
  //       return false;
  //     }
      
  //   }
    
  // }

  while (str.length > 0) {
    let replaced = false;
    
    for (let i = 0; i < bracketsConfig.length; i++) {
      let brackets = bracketsConfig[i].join("");
      
      if (str.includes(brackets)) {
        str = str.replace(brackets, "");
        replaced = true;
      }
    }

    if (!replaced) {
      return false;
    }    
  }

  return true;
  
}
