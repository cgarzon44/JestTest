// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});



test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})



test("One Yen should be 0.006515506906437321 dollars", function(){
   
    const { fromYenToDollar } = require('./app.js')

    
    const Yen = fromYenToDollar(1)
 
   
    const expected = 1 / 1.2 / 127.9; 
    
   
     expect(fromYenToDollar(1)).toBe(0.006515506906437321); 
})


test("One Dollar should be 153.48 dollars", function(){
    
    const { fromDollarToYen } = require('./app.js')

    
    const Yen = fromDollarToYen(1)

    
    const expected = 1 * 1.2 * 127.9; 
    
    
     expect(fromDollarToYen(1)).toBe(153.48); 
})

