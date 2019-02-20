(function(exports) {
  function NoteList() {
    this.list = []
  };
  NoteList.prototype.listAll = function() {
    return this.list;
  }  

  exports.NoteList = NoteList;
})(this)