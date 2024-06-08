function hasContiguousSubarraySum(arr, target) {
    let currentSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      currentSum += arr[end];
  
      while (currentSum > target && start < end) {
        currentSum -= arr[start];
        start++;
      }
  
      if (currentSum === target) {
        return true;
      }
    }
  
    return false;
  }
  
  // Get input from the user
  function getArrayInput() {
    const input = prompt("Enter 6 array numbers (Separated by comma):");
    const arr = input.split(",").map(Number);
  
    if (arr.some(isNaN)) {
      throw new Error("Invalid input. Please try to enter numbers only.");
    }
  
    return arr;
  }
  
  function getTargetInput() {
    const input = prompt("Enter the target sum:");
    const target = parseInt(input, 10);
  
    if (isNaN(target)) {
      throw new Error("Invalid input. Please Enter a Number for The target Sum.");
    }
  
    return target;
  }
  
  try {
    const arr = getArrayInput();
    const target = getTargetInput();
  
    const result = hasContiguousSubarraySum(arr, target);
    console.log(result ? "True (Subarray Found)" : "False (No Subarray Found)");
  } catch (error) {
    console.error(error.message);
  }  