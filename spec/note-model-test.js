function checkNoteText() {
  console.log('Note Model Test')
  console.log("  .viewText shows string in Note object")
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.viewText() === "My favourite language is JavaScript");
  console.log(' ')
};
checkNoteText()
