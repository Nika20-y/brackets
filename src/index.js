module.exports = function check(str, bracketsConfig) {
        let brackets = {};
        for(let i=0;i<bracketsConfig.length;i++){
            brackets[bracketsConfig[i][0]] = bracketsConfig[i][1]
        }
        let stack = [];
        for(let i = 0;i<str.length;i++){
            if (brackets[str[i]]!==undefined) {
                if(brackets[str[i]]!==str[i]){
                    stack.push(brackets[str[i]])}
                else if(stack.includes(str[i])){
                    if(str[i]===stack.pop()){
                    }
                    else{
                        return false;
                    }
                }
                else{
                    stack.push(brackets[str[i]])
                }
            } else {
                if(str[i]===stack.pop()){

                }
                else{
                    return false;
                }
            }
        }
        if(stack.length===0){
            return true;
        }
        return false;
}
