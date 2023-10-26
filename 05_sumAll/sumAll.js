const sumAll = function(start, end) {

    if ( ((typeof start !== "number") || (typeof end !== "number")) || (start < 0 || end < 0)) {
        return "ERROR";
    }

    if (start > end){
        let temp = start;
        start = end;
        end = temp;
    }


    let returnSum = 0;
    for (let i = start; i <= end; i++){
        returnSum += i;
    }

    return returnSum;

};

// Do not edit below this line
module.exports = sumAll;
