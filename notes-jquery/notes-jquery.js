const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];
let noteId = 0;

$(function(){
    setInterval(printGRDate, 1000);

    $('#addNoteBtn').on('click', function() {
        onInsertHandler($('#inputNote').val().trim());
    });

    $('#inputNote').on('keyup', function(e) {
        if (e.key === 'Enter') {
            onInsertHandler($(this).val().trim());
        }
    });
});

function printGRDate() {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const dayStr = daysGR[day];
    const monthStr = monthsGR[month];

    let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`;
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? '0' : ''}${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`;

    $('#dateTxt').html(dateStr + '<br>' + timeStr);
}

/**
 * Handler για το κλικ στο κουμπί εισαγωγής ή Enter πατημένο.
 * 
 * @param {string} data 
 */
function onInsertHandler(data) {
    insertNote(data);
    reset();
}

function insertNote(note) {
    if (!note) return;

    noteId++;

    let clone = $('.note.hidden').clone(true).removeClass('hidden');

    let cloneNoteInfo = clone.find('.note-info');
    cloneNoteInfo.children().eq(0).attr('id', 'noteCheck' + noteId);
    cloneNoteInfo.children().eq(1).attr('for', 'noteCheck' + noteId);

    clone.find('.note-text').html(note);

    clone.find('#noteCheck').on('click', function() {
        strikeThrough(clone.find('.note-text'));
    });

    clone.find('.note_del-btn').on('click', function() {
        deleteNote($(this).parent());
    });

    $('.notes-wrapper').append(clone);
}

function strikeThrough(element) {
    $(element).toggleClass('line-through');
}

function deleteNote(note) {
    $(note).remove();
}

function reset() {
    $('#inputNote').val('');
}
