$(document).ready(function() {
 
  var today = new Date();
  var datestamp = '<span class="datestamp">' +today.toDateString() +': </span>';
  var newNote = $('#noteInput');
  var noteList = $('#noteList');
  var deleteButton = '<button id="delete"> delete </button>';
  var editButton = '<button id="edit"> edit </button>';
  var editForm = '<form id="editNote"> <textarea id="editVal" type="text" placeholder="Begin note here..." ></textarea> <input type="submit" id="editSubmit" /> </form>';

  // submits value to noteList and appends with delete button
  $('#submit').on('click', function(e) {
    e.preventDefault();
    var noteVal = newNote.val();
    var color = $('input[name=color]:checked').val();
    noteList.append('<li style="color:' + color + '">' + datestamp + '&nbsp;' + noteVal +  deleteButton + editButton + '</li>');
    newNote.val('');
  });

  // adds functionality to each delete button
  noteList.on('click', 'li #delete', function(e) {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      $(this).parent().remove();
    }
  });

  // submits value for editing
  noteList.on('click', 'li #edit', function(e) {
    e.preventDefault();
    $(this).parent().replaceWith(editForm);

    // rewrites form with edit
    $('#editSubmit').on('click', function(e) {
      e.preventDefault();
      var editValue = $('#editVal').val();
      var color = $('input[name=color]:checked').val();
      $(this).parent().replaceWith('<li style="color:' + color + '">' + datestamp + '&nbsp;' + editValue + deleteButton + editButton + '</li>');
    });

  });

});