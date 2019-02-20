function checkNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.viewText() === "My favourite language is JavaScript");
  console.log("something2")

};
checkNoteText()
