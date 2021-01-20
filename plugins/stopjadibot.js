let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Por que você não vai direto para o terminal?', m)
  else {
    await conn.reply(m.chat, 'Adeus bot :\')', m)
    conn.close()
  }
}
handler.command = /^(Pare|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler



