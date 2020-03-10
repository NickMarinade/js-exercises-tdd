let largest = require("./largest-number");

test("Get largest number", function () {

    // Arrange
    let input = [3, 21, 88, 4, 36];
    let unchanged = [3, 21, 88, 4, 36];
    let expected = 88;
    // Act
    let output = largest(input);
    // Assert
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
