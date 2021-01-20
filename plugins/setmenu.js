let handler  = async (m, { conn, args }) => {
  if (args.length > 0) {
    conn.menu = args.join` `
    conn.reply(m.chat, 'O menu foi definido com sucesso pelo gerente\n' + info, m)
  } else {
    conn.menu = ''
    delete conn.menu
    conn.reply(m.chat, 'Redefinir menu cuy', m)
  }
}
handler.command = /^set(menu|help|\?)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
%p (Prefix)
%exp (Exp)
%name (Nama)
%weton (Weton Hari ini)
%week (Hari)
%date (Tanggal)
%time (Jam)
`.trim()
