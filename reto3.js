function findNaughtyStep(original, modified) {
    let result = "";
   const a= Math.max(original.length, modified.length)
    for (let i = 0; i < a; i++) {
      const charInOriginal = original[i];
      const charInModified = modified[i];
  
      if (charInOriginal !== charInModified) {
        result = charInModified || charInOriginal;
      break; 
      }
    }
  
    for (const gift of original) {
      for (const char of gift) {
        if (!modified.includes(char)) {
          result = char;
          return result;
        }
      }
    }
    return result;
  }