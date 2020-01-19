const codDevClient = require('./handle/codDevClient');
const client = new codDevClient({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(client);
require('./handle/module')(client);

client.login("NjU3OTAwMDM3Njc4MDM5MDQw.XiTj3w.fkLf4B_iO_likc9tksTrYJyBdlI")

