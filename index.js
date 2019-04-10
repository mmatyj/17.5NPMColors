var os = require('os');
var colors = require('colors');

var OSinfo = require('./modules/OSInfo');


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n'.rainbow);
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n'.bgBlue.green);
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n'.underline.red);
        };
    }
});