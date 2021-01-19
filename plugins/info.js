let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Feito em javascript via NodeJs

➥ TRADUZIDO EM PORTUGUÊS
➥ Instagram: https://instagram.com/matheus.l.o2600?igshid=3fauieovdedc
➥ YouTube: OSCAR

〘 Graças a 〙 
➥ Matheus

〘 FALE COM 〙 
➥ contato : https://wa.me/qr/KADPB6Y2CXFCN1


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






