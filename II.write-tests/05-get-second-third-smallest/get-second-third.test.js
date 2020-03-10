let secondThird = require("./get-second-third");

test("Get second third of an array", function () {

    // Arrange
    let input = [90, 5, 11, 8, 6];
    let unchanged = [90, 5, 11, 8, 6];
    let expected = [6, 8];
    // Act
    let output = secondThird(input);
    // Assert
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
