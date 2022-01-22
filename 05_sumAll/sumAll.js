const sumAll = function(start, end) {
    let sum = 0;
    if (typeof(start) === "number" && typeof(end) == "number"){
        if (start > end){
            placeholder = start;
            start = end;
            end = placeholder;
        }
        if (start < 0 || end < 0){
            return "ERROR";
        }
        for(let i = start; i <= end; i++){
            sum += i;
        }
        return sum;
    }
    else{
        return "ERROR";
    }
        
};

// Do not edit below this line
module.exports = sumAll;
