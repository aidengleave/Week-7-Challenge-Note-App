function checkNoteText() {
  var note = new Note();
  assert.isTrue(note.viewText() === "My favourite language is JavaScript");
};
checkNoteText();
