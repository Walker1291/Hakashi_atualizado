let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial de criação do bot para Whatsapp:


Digitar no *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Para Github..
5) $git clone https://github.com/Walker1291/Hakashi.bot
6) $ls
7) $cd Miray-chan

estes são os *ÚLTIMOS* comandos..
instalação do cuy :)
8) npm i
9) node index.js


`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler




