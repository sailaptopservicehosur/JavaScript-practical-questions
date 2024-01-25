function removeDuplicates(arr) {
    const uniqueSet = new Set();
    const result = [];
  
    for (const item of arr) {
      if (!uniqueSet.has(item)) {
        uniqueSet.add(item);
        result.push(item);
      }
    }
  
    return result;
  }
  
  const inputArray = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
  const outputArray = removeDuplicates(inputArray);
  
  console.log(outputArray); // Output: [1, 2, 3, 4, 5, 6, 7]
  