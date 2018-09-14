module.exports = function check(str, bracketsConfig) {

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
