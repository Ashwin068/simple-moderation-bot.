const codDevClient = require('./handle/codDevClient');
const client = new codDevClient({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(client);
require('./handle/module')(client);

client.login("NjU3OTg2NDQwODI2NzE2MTc4.Xf5Zxg.tUdSXXShHQZZVW7MlWiGu7atUQo")

