const palindromes = function (arr) {
    var l=0
    var r=arr.length-1
    while(l<=r){
        //console.log(arr)
        //console.log(l,r)
        //console.log(arr[l],arr[r])
        if  ((arr[l].toUpperCase()!=arr[l].toLowerCase()) && (arr[r].toUpperCase()!=arr[r].toLowerCase())) 
        {
            if (arr[l].toLowerCase()!=arr[r].toLowerCase()){
                return false
            }
            l+=1
            r-=1

        }
        else
        {
            if  (arr[l].toUpperCase()==arr[l].toLowerCase()){
                l+=1
            }
            if  (arr[r].toUpperCase()==arr[r].toLowerCase()){
                r-=1
            }
        }
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
