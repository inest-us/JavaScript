function makeAdjectifire(adjective) {
    return function(str) {
        return adjective + ' ' + str;
    };
}

let coolifier = makeAdjectifire('cool');
console.log(coolifier('conference'));
