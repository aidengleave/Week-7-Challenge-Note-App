(function(exports) {
  function NoteList() {
    this.list = [];
    var text = new Note
  };

  NoteList.prototype.listAll = function() {
    return this.list;
  }  

  NoteList.prototype.createNote = function(text) {
    this.list.push(text);
  }

  exports.NoteList = NoteList;
})(this)