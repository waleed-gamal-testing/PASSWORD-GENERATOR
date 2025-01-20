const lengthElement = document.getElementById("length");
      const upperCaseElement = document.getElementById("upperCase");
      const lowerCaseElement = document.getElementById("lowerCase");
      const numbersElement = document.getElementById("numbers");
      const symbolsElement = document.getElementById("symbols");
      const generate = document.getElementById("generate");
      const resultElement = document.getElementById("result");

      const UPPER_CASE = getArray("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      const LOWER_CASE = getArray("abcdefghijklmnopqrstuvwxyz");
      const NUMBERS = getArray("1234567890");
      const SYMBOLS = getArray("~`!@#$%^&*()-_=+[{]}|;:,<>.?/");

      function getArray(str) {
        return str.split("");
      }

      generate.addEventListener("click", () => {
        const length = lengthElement.value;
        const upperChecked = upperCaseElement.checked;
        const lowerChecked = lowerCaseElement.checked;
        const numbersChecked = numbersElement.checked;
        const symbolsChecked = symbolsElement.checked;

        resultElement.innerText = generatePassword(
          length,
          upperChecked,
          lowerChecked,
          numbersChecked,
          symbolsChecked
        );
      });

      function generatePassword(
        length,
        upperChecked,
        lowerChecked,
        numbersChecked,
        symbolsChecked
      ) {
        if (length == 0) {
          alert("Invalid length. ");
        }
        let passArray = [];
        if (upperChecked) passArray = passArray.concat(UPPER_CASE);
        if (lowerChecked) passArray = passArray.concat(LOWER_CASE);
        if (numbersChecked) passArray = passArray.concat(NUMBERS);
        if (symbolsChecked) passArray = passArray.concat(SYMBOLS);

        if (passArray.length === 0) {
          alert("Please choose the box options");
        } else {
          const result = [];
          for (let i = 0; i < length; i++) {
            const randIndex = Math.floor(Math.random() * passArray.length);
            result.push(passArray[randIndex]);
          }
          return result.join("");
        }
      }