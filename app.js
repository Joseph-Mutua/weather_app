const log = console.log;

log("Starting!");

setTimeout(() => {
    log("@233");
}, 2000);

setTimeout(() => {
    log("0 sec Timer")
}, 0);

log("Stopping!");



const fs = require('fs')
const chalk = require('chalk')
const log = console.log;


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        log(chalk.green.inverse('New note added!'))
    }
    else {
        log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else {
        log(chalk.red.inverse('No note found!'))
    }
};

const listNotes = () => {
    const notes = loadNotes();
    log(chalk.inverse("YOUR NOTES"));
    notes.forEach((note) => {
        log(chalk.bold.yellow.underline(note.title));
        log(chalk.blue(note.body));
    });
}
