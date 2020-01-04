var rooms = ['H1', 'H2', 'H3'];
var newRooms = rooms.map(function(room) {
    if (room === 'H3') {
        return 'H4';
    } else {
        return room;
    }
});

console.log(newRooms); //["H1", "H2", "H4"]
console.log(rooms); //["H1", "H2", "H3"]
