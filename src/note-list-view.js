(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };
  NoteListView.prototype.viewNotes = function() {
    html = ["<ul>"]
    for (i = 0; i < this.noteList.listAll().length; i++) {
      html.push('<li><div>' + this.noteList.listAll()[i].viewText() + '</div></li>')
    }
    return (html.join('') + '</ul>')
  }
  exports.NoteListView = NoteListView;
})(this);