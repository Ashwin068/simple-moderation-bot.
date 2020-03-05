const codDevClient = require('./handle/codDevClient');
const client = new codDevClient({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(client);
require('./handle/module')(client);

client.login("NjQxMjk1NDkxMjMzMjE4NTg5.XmDCFg.b5YAHjJXBUYwM4UWyE2WHhAZ2Ss")

