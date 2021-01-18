let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Akbarsans/Miray-chan')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
 [WERBERT-MODS] 


SALVE, ${name} 👋 AJUDE O CANAL OSCAR PARA AJUDAR O BOT!🤗
Exp: ${exp}

📟 hora: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

Como adicionar XP: +1 Exp / mensagem normal +10 Exp / comando

═════✪〘 Menu 〙✪═══■■■
👻👻👻👻👻👻👻👻👻👻👻       ■
═〘 Xp 〙 ═                  ■
📲 ${_p}leaderboard           ■
*📱Número de usuários do bot📱* ■
*📱junto com o nível de Exp📱*  ■
■■■■■■■■■■■■■■■■■■■
═〘 Comando 〙 ═
📲 ${_p}menu
📲 ${_p}help 
📲 ${_p}?
💣💣💣💣💣💣💣💣💣💣💣💣
═〘 Tutorial BoT 〙 ═
📲 ${_p}tutorial
💣💣💣💣💣💣💣💣💣💣💣💣
═〘 Outros 〙 ═
📲 ${_p}qr *📱texto📱*
📲 ${_p}sticker *📱📷marque a foto📸📱*
📲 ${_p}stiker *📱url📱*
📲 ${_p}toimg *■OFF■*
📲 ${_p}cantada *📱😊cantadas ou frases😘📱*
📲 ${_p}ssweb  *■OFF■*
📲 ${_p}sswebf *■OFF■*
📲 ${_p}google *■OFF■*
📲 ${_p}googlef *📱pesquisa📱*
📲 ${_p}readmore *📱texto📱 | 📱oculto📱*
📲 ${_p}musicas *📱♫músicas aleatórias♬📱*
📲 ${_p}modApk
💥💥💥💥💥💥💥💥💥💥💥💥
═〘 GRUPO 〙 ═
📲 ${_p} add *📱55xxxxxxxxx📱*
📲 ${_p} promover *📱@tagmembro📱*
📲 ${_p} despromover *📱@tagadmin📱*
📲 ${_p} linkgrup *📱link do grupo📱*
📲 ${_p} pengumuman *📱texto📱*
📲 ${_p} hidetag *📱texto📱*
📲 ${_p} listaonline *📱lista de online📱*
📲 ${_p} remover *📱@Membro📱*
📲 ${_p} grouplist *📱lista de grupo📱*
🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖
═〘 EXPERIMENTAL 〙 ═
📲 ${_p}jadibot *📱código de login se houver / vazio📱*
📲 ${_p}Pare *📱Pare📱*
📲 ${_p}gerarcodigo *📱Receber código📱*
💎💎💎💎💎💎💎💎💎💎💎💎
═〘 PROPRIETÁRIO 〙 ═
📲 ${_p}bcgc *📱texto📱*
📲 ${_p}setmenu *📱texto📱*
📲 ${_p}deletechat *📱grupo de bate-papo📱*
📲 ${_p}deletechat group *📱deletar grupo de bate-papo📱*
📲 ${_p}mutechat *📱grupo de bate-papo📱*
📲 ${_p}mutechat group *📱grupo de bate-papo mudo📱*
💤💤💤💤💤💤💤💤💤💤💤💤
═〘AJUDA O CANAL DO MEU DONO〙 ═
➥https://youtube.com/channel/UCIEuAWtpsNa2GAS65NhDUJg
═〘 Info Bot 〙 ═
➥ Name : *📡HAKASHI💡*
➥ Coded using *Nano* on Android \\w Termux
➥ ${_p}info *■INFORMAÇÕES DO BOT■*

═〘 WERBERT-MODS〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
