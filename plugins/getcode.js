let handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Este comando é apenas para bots', m)
  else global.conn.reply(conn.user.jid, `${usedPrefix}jadibot ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, m)
}
handler.command = /^(gerarcodigo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


