module.exports = function toReadable (number){
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  const hundrets = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", 
  "six hundred", "seven hundred", "eight hundred", "nine hundred" ]; 
  
  let result;
  let onesdig = number%10;  
  let tensdg2 = Math.floor(number/10);  
  let hundretsdig = Math.floor(number/100);

    if (number <20){
        return result = ones[parseInt(number)];    
    } 
    else if (number >= 20 && number < 100 && number%10 === 0) {
         return result = `${tens[tensdg2]}`;
    }
    else if (number >= 20 && number < 100) {        
        return result = `${tens[tensdg2]} ${ones[onesdig]}`;
    }
    else{
        if (number >= 100 && number%100 === 0){
            return result = hundrets[hundretsdig];
        }
        else if (number >100 && number%100 < 20) {                                
            result = `${hundrets[hundretsdig]} ${ones[number%100]}`; 
            return result; 
        }            
        else if (number >100 && number%10 === 0){  

            result = `${hundrets[hundretsdig]} ${tens[(number/10)%10]}`;
            return result;
        }
        result = hundrets[hundretsdig] + ' ' + tens[Math.floor((number%100)/10)] + ' ' + ones[onesdig];         
        // return result;
    }   
        return result;
        // else{
        //     number = number.toString();
        // tensdg2 =  parseInt(number[1] + number[2]);
        // tensdg2 = Math.floor(tensdg2/10);
        // 
        // }        
    }          


