let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')
let WAConnection = require('../lib/simple').WAConnection(_WAConnection)
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new WAConnection()
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
    }
    conn.on('qr', async qr => {
      let scan = await global.conn.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Scaneie este QR para se tornar um bot temporário\n\n1. Clique no ponto no canto superior direito\n2. Toque em WhatsApp Web\n3. Scaneie este QR \nQR Expira em 20 segundos\n\n *Mídia social*: \n*YouTube: OSCAR*\n BOT:HAKASHI', m)
      setTimeout(() => {
        global.conn.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.once('connection-validated', user => {
      global.conn.reply(m.chat, 'Conectado com sucesso ao seu WhatsApp.\n*NOTE: se meu bot morrer, seu bot também morrerá.*\n' + JSON.stringify(user, null, 2), m)
    })
    conn.on('message-new', global.conn.handler)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({user}) => {
      await global.conn.sendMessage(user.jid, `Você pode fazer o login sem qr com a mensagem abaixo. para obter o código completo, por favor envie *${usedPrefix}getcode* para obter um código preciso`, MessageType.extendedText)
      global.conn.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      delete global.conns[id]
    }, 60000)
    global.conns.push(conn)
  } else conn.reply(m.chat, 'Não é possível criar bots dentro de bots!\n\nhttps://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=.jadibot', m)
}
handler.command = /^jadibot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler






