let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Feito em javascript via NodeJs

➥ Github: https://github.com/Walker1291/Werbert.bot
➥ Instagram: https://instagram.com/matheus.l.o2600?igshid=3fauieovdedc
➥ YouTube: OSCAR

〘 Graças a 〙 
➥ Matheus

〘 DOAÇÃO 〙 
➥ contato : +558681787294


〘 WERBERT 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler





