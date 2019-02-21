function checkListOfNotes() {
  console.log('NoteList Model Test')
  console.log('  .listAll lists all notes in NoteList')
  var note1 = new Note('Orb is Horse')
  var note2 = new Note('Glass Shark')
  var noteList = new NoteList
  noteList.list = [note1, note2]
  assert.isTrue(noteList.listAll().includes(note1, note2));
};
checkListOfNotes();

function checkCreateNewNote() {
  console.log('  .createNote adds new Note to NoteList')
  var noteList = new NoteList
  noteList.list = []
  noteList.createNote('Orb is Horse')
  noteList.createNote('Glass Shark')
  noteList.createNote('Mbmbambino!')
  assert.isTrue(noteList.listAll().includes(
    'Orb is Horse', 
    'Glass Shark', 
    'Mbmbambino!'))
};
checkCreateNewNote()
