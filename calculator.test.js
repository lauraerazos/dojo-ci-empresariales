const calculator = require('./caculator'); //Arrange

describe('add operation', () => {
    test('adds 1 + 2 to equal 3', () => {
        var value = calculator.add(1, 2); //Act
        expect(value).toBe(3); //Assert
    });
    test('adds 5 + 5 to equal 10', () => {
        var value = calculator.add(5, 5); //Act
        expect(value).toBe(10); //Assert
    });
})

describe('subtract operation', () => {
    test('subtracts 5 - 5 equal 0', () => {
        var value = calculator.subtract(5, 5); //Act
        expect(value).toBe(0); //Assert
    });
})

