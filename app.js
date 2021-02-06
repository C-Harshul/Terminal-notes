const yargs = require('yargs')

const notes= require('./notes')


//Customize yargs version
yargs.version('1.1.0')

//Add command
yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder :{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

//Remove command
yargs.command({
 command :'remove',
 describe:'Remove a note',
 builder :{
   title:{
       describe: 'Note title',
       demandOption: true,
       type:'string' 
   }
 },
 handler(argv) {
     notes.removeNote(argv.title)
 }
})

//List command
yargs.command({
    command:'list',
    describe:'List of notes',
    handler() {
        notes.list()
    }
})

//Read command
yargs.command({
    command : 'read',
    describe: 'Read the note',
    builder :{
        title :{
           describe : "Read a particular note",
           demandOption : true,
           type:'string'
        }
    },
    handler(argv) {
        notes.read(argv.title)
    }
})

yargs.parse()

