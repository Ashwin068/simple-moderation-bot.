const codDevClient = require('./handle/codDevClient');
const client = new codDevClient({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(client);
require('./handle/module')(client);

client.login("NjQ1ODY1NDgyODg0NDgxMDI3.XiK2Ew.Am-8DIdptIEpytJXL9sK66TQGw8")

