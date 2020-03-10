let greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  let mentors = ['Irina', 'Ashleigh', 'Etza'];
  let unchanged = ['Irina', 'Ashleigh', 'Etza'];
  let expected = 'Hello IrinaAshleighEtza';
  // Act
  let result = greetPeople(mentors);
  // Assert
  expect(result).toEqual(expected);
  expect(mentors).toEqual(unchanged);
});
