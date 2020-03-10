let removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  let name = 'samuel';
  let unchanged = 'samuel';
  let expected = '_a_ue_';
  // Act
  let result = removeVowels('samuel');
  // Assert
  expect(result).toEqual(expected);
  expect(name).toEqual(unchanged);
});
