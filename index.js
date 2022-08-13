const index = require("./index.json");
const dwarf = require("./dwarf.json");
const elf = require("./elf.json");

const utilityNamesFantasy = require("@random-tables/utility-names-fantasy");
const utilityNpc = require("@random-tables/utility-npc");
const utilityNpcFantasy = require("@random-tables/utility-npc-fantasy");
const utilitySenses = require("@random-tables/utility-senses");

exports.index = {
  ...index,
  tableData: {
    dwarf,
    elf,
  },
  requirements: [
    utilityNamesFantasy.index,
    utilityNpc.index,
    utilityNpcFantasy.index,
    utilitySenses.index,
  ],
};
