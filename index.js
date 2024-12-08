function checkPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false; // If the number is divisible by any number between 2 and num-1, it's not prime
      }
    }
  
    return true; // If no divisors are found, the number is prime
  }
  
  function checkEvenOdd(num) {
    if (num%2==0){
    return true; // Numbers less than or equal to 1 are not prime
  }
    else{
        return false
    }
  }