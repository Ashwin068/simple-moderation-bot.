const codDevClient = require('./handle/codDevClient');
const client = new codDevClient({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handle/events')(client);
require('./handle/module')(client);

client.login("NjQyNDMwNjE5NDE4MDk5NzEy.Xf8zWw.2JzLgDYB8cAbuPu4krvTFyQHpoI")

