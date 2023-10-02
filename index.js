const yargs = require("yargs");
const { getNote, addNote } = require("./notes.controller");

yargs.command({
  command: "add",
  describe: "add new note to list",
  builder: {
    title: { type: "string", describe: "Note title", demandOption: true },
  },
  async handler({ title }) {
    await addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    const notes = await getNote();
    console.log(notes);
  },
});

yargs.parse();
