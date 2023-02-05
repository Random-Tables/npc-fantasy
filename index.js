const index = require("./index.json");
const dwarf = require("./dwarf.json");
const elf = require("./elf.json");

const utilityNamesFantasy = require("@random-tables/utility-names-fantasy");
const utilityNpc = require("@random-tables/utility-npc");
const utilityNpcFantasy = require("@random-tables/utility-npc-fantasy");
const utilitySenses = require("@random-tables/utility-senses");

const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const calls = {};
Object.keys(index.tables).forEach((tableGroup) => {
  index.tables[tableGroup].forEach((table) => {
    const objectKey = camelize(tableGroup) + capitalize(camelize(table));
    calls[objectKey] = `${index.collectionID}/${tableGroup}/${table}`;
  });
});

module.exports = {
  ...index,
  tableData: {
    dwarf,
    elf,
  },
  requirements: [
    utilityNamesFantasy,
    utilityNpc,
    utilityNpcFantasy,
    utilitySenses,
  ],
  calls,
};
