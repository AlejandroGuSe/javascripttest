function validatePIN (pin) {
    let pinvalid = Number(pin)
        if(isNaN(pinvalid)){
            return false
        }
           
        if(pin[0] === '.'){
            return false
        }
           

        if(pin.length !== 4 && pin.length !== 6){
            return false
        }
        
        return true
}

const Test = require('assert');

describe("validatePIN", function() {
    it("should return False for pins with length other than 4 or 6", function() 
   {
     Test.equal(validatePIN("1"),false, "Wrong output for '1'")
     Test.equal(validatePIN("123"),false, "Wrong output for '123'")
     Test.equal(validatePIN("1234567"),false, "Wrong output for '1234567'")
     Test.equal(validatePIN("00000000"),false, "Wrong output for '00000000'")
    });
    
     it("should return False for pins which contain characters other than digits", function() {
     Test.equal(validatePIN("a234"),false, "Wrong output for 'a234'")
     Test.equal(validatePIN(".234"),false, "Wrong output for '.234'")
     });
    
     it("should return True for valid pins", function() {
    Test.equal(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.equal(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.equal(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.equal(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.equal(validatePIN("123456"),true, "Wrong output for '123456'");
     });
   });


function persistence(num){
    let numero = num
    let contador = 0
    if(num < 10){
        return 0
    }    
    do{
        numero = evaluar(numero.toString().split(''))
        contador++
    }while(numero.length !== 1)
    
    return contador
}

function evaluar(numero){
    let mul = 1
    numero.forEach(element => {
        mul = mul * Number(element) 
    });
    return mul.toString()
}

describe('Initial Tests', function () {
    it(" returns its multiplicative persistence", function() 
    {
    Test.equal(persistence(39),3)
    Test.equal(persistence(4),0)
    Test.equal(persistence(25),2)
    Test.equal(persistence(999),4)
    })
   });
   


  function findMissingLetter(array){
    let findletter = 0;
    for (let i = 0; i < array.length; i++) {
        if((array[i].charCodeAt(0) + 1) !== array[i+1].charCodeAt(0)){
            findletter = array[i].charCodeAt(0) + 1
            break
        }
    }
   return String.fromCharCode(findletter) 
 }


   describe("FindMissingLetterTests", function(){
        it("exampleTests", function(){
            Test.equal(findMissingLetter(['a','b','c','d','f']), 'e')
            Test.equal(findMissingLetter(['O','Q','R','S']), 'P')
        })
   })
   

    function  arrayDiff(a, b){
        let elem = a
        let numele
        b.forEach(elementb => {
        elem.forEach((elementa) => {
                if(elementb === elementa){
                    numele = elem.indexOf(elementa)
                    elem = [...elem.slice(0, numele), ...elem.slice(numele+1)]
                }  
                
                });   
        });

        return elem
    }


   describe("Sample tests", function() {
    it("Array diff Sample tests", function() {
        Test.deepEqual(arrayDiff([], [4,5]), [], "a was [], b was [4,5]")
        Test.deepEqual(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]")
        Test.deepEqual(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []")
        Test.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    })
   })