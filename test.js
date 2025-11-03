console.log("Script is running");
const fs = require('fs');
console.log("Reading settings_schema.json...");
const content = fs.readFileSync('f:/frstclo/config/settings_schema.json', 'utf8');
console.log("File length:", content.length);
console.log("First 200 chars:", content.substring(0, 200));
