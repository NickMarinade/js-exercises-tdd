var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {

    // Arrange
    let input = [4, 10, 32, 9, 21];
    let unchanged = [4, 10, 32, 9, 21];
    let expected = [32, 21];
    // Act
    let output = largerThanTen(input);
    // Assert
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
