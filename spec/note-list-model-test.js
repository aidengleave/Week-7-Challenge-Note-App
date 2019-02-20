function checkListOfNotes() {
  var noteList = new NoteList
  noteList.list = ['Orb is horse', 'Glass Shark']
  assert.isTrue(noteList.listAll().includes('Orb is horse', 'Glass Shark'));
};
checkListOfNotes();

