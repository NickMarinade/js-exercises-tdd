let removeVowels = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  // Arrange
  let input = ["Irina", "Etza", "Daniel"];
  let unchanged = ["Irina", "Etza", "Daniel"];
  let expected = ["__i_a", "___a", "_a_ie_"];
  // Act
  let output = removeVowels(input);
  // Assert
  expect(output).toEqual(expected);
  expect(input).toEqual(unchanged);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
