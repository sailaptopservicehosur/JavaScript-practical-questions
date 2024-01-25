// Function to generate a random CAPTCHA code
function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Function to generate a new CAPTCHA
  function generateCaptcha() {
    const captchaContainer = document.getElementById('captcha');
    const captchaCode = generateRandomCode(6); // You can adjust the code length as needed
    captchaContainer.textContent = captchaCode;
  }
  
  // Function to verify the user input
  function verifyCaptcha() {
    const userInput = document.getElementById('userInput').value;
    const captchaCode = document.getElementById('captcha').textContent;
    const resultMessage = document.getElementById('result');
  
    if (userInput === captchaCode) {
      resultMessage.textContent = 'CAPTCHA verified Succesfully ';
      resultMessage.style.color = 'green';
    } else {
      resultMessage.textContent = 'CAPTCHA verification failed. Please try again.';
      resultMessage.style.color = 'red';
    }
  }
  
  // Initial CAPTCHA generation
  generateCaptcha();
  