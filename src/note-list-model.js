(function(exports) {
  function NoteList() {
    this.list = [];
  };
  
  NoteList.prototype.listAll = function() {
    return this.list;
  }  
  
  NoteList.prototype.createNote = function(text) {
    var note = new Note(text)
    this.list.push(note);
    return note
  }

  exports.NoteList = NoteList;
})(this)