let evens = require("./get-even-numbers");

test("Get even numbers", function () {

    // Arrange
    let input = [22, 13, 73, 82, 4];
    let unchanged = [22, 13, 73, 82, 4];
    let expected = [22, 82, 4];
    // Act
    let output = evens(input);
    // Assert
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
