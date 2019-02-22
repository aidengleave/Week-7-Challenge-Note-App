function testListView() {
  console.log("Test List View")
  console.log("  returns HTML string")
  var noteList = new NoteList()
  noteList.createNote('Spoons')
  console.log(noteList.listAll())
  var newView = new NoteListView(noteList)
  console.log(newView.viewNotes())
  assert.isTrue(newView.viewNotes() === '<ul><li><div>Spoons</div></li></ul>') 
};
testListView()