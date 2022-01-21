const repeatString = function(string, num) {
    let s = "";
    if (num >= 0){
        for (let i = 0; i < num; i++){
            s += string;
        }
        return s;
    }
    else{
        return "ERROR";
    }    
};

// Do not edit below this line
module.exports = repeatString;
