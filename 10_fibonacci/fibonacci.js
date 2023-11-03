const fibonacci = function(num) {

    if (num < 1){
        return "OOPS";
    }

    if (num == 1 || num == 2){
        return 1;
    }
        let firstNumber = 1;
        let secondNumber = 1;
        for(i = 1; i<num-1; i++){
            result = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = result;
        }
        return result;
};

// Do not edit below this line
module.exports = fibonacci;
