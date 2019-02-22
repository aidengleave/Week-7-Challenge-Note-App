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
  var note1 = new Note('Orb is Horse')
  var note2 = new Note('Glass Shark')
  var testArray = [note1, note2]
  console.log(note1)
  console.log(note2)
  console.log(testArray)
  noteList.createNote('Orb is Horse')
  noteList.createNote('Glass Shark')
  for (i = 0; i < noteList.listAll().length; i++) {
    console.log(noteList.listAll()[i].viewText())
    console.log(testArray[i].viewText())
    assert.isTrue(noteList.listAll()[i].viewText() === testArray[i].viewText())
  };
};
checkCreateNewNote()
