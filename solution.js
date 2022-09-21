function solution(area){ 
       let emptyArray=[]
       while(area>0){
        let largestSquareSide=parseInt(area**0.5)
        let largeSq = largestSquareSide**2
        area -=largeSq
        emptyArray.push(largeSq)
        return emptyArray
       }


        // if (parseInt(Math.sqrt(area))){
    
        //     return area
       
    
        // }
        // let  largest = parseInt(Math.sqrt(area))**2
        //     return [largest]+solution(area-largest)
    
    
    }
    
    console.log(solution(45))