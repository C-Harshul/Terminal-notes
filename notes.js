const fs = require('fs')
const chalk = require('chalk')


const addNote = (title,body) =>{
  
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)
  if(duplicateNotes.length === 0) {
    notes.push({
      title : title,
      body: body
    })
    console.log('New note added')
  } else {
    console.log('Title taken')
  }  
  
  saveNotes(notes);

}

const removeNote = (title) =>{
  try {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)
    saveNotes(updatedNotes)
    if(notes.length > updatedNotes.length){
      console.log(chalk.green.inverse('Note removed'))
    } else {
      console.log(chalk.red.inverse('Note not found'))
    }
  } catch(e) {
    console.log(e)
  }
}

const list = () => {
   const notes = loadNotes()
   console.log(chalk.blue("Your Notes ..."))
   notes.forEach( note => {
     console.log(note.title)
   });
}

const read = (title) =>{
  
  const notes = loadNotes()
  if(title !== ''){
   const matchingNote = notes.find( note => note.title === title)

      if (matchingNote) {
       console.log(chalk.white.bold.inverse("FOUND MATCH"))
       console.log("TITLE :" , matchingNote.title)
       console.log("BODY:" ,matchingNote.body)
    } else {
      console.log(chalk.red.inverse("Sorry no notes found :("))
   }
  } 

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('Notes.json',dataJSON)
}

const loadNotes = () => {
  
  try {   
    const noteJSON = JSON.parse(fs.readFileSync('Notes.json').toString())
    return noteJSON
   } catch (e){
    return []
  }

}

module.exports = {
  addNote:addNote,
  removeNote:removeNote,
  list:list,
  read:read
}