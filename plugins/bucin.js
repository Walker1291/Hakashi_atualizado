let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.command = /^(cantada)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Solteiros são jovens que priorizam seu desenvolvimento pessoal para um amor mais elegante depois.",
  "Não procuro alguém que seja perfeito, mas procuro alguém que se torna perfeito graças à minha força.",
  "O namorado de alguém é nossa alma gêmea pendente.",
  "Os solteiros devem passar.  Todos têm um tempo, quando toda solidão se torna união com seu amante.  Seja paciente.",
  "Se você fosse a corda do violão, eu não queria ser o guitarrista.  Porque eu não quero terminar com você.",
  "Se amar você é uma ilusão, deixe-me imaginar para sempre.",
  "Querida... Meu trabalho é apenas amar você, não lutar contra o destino.",
  "Quando estou com você, parece que 1 hora é apenas 1 segundo, mas se estou longe de você, parece que 1 dia se transforma em 1 ano.",
  "Eu quero ser o único, não o único.",
  "Não posso prometer ser bom.  Mas eu prometo que sempre estarei lá para você.",
  "Se eu me tornar o representante do povo, definitivamente fracassarei, como eu gostaria de pensar no povo se tudo o que tenho em mente é você.",
  "Olhe meu jardim, cheio de flores.  Olhe nos seus olhos, meu coração está florescendo.",
  "Prometa estar comigo agora, amanhã e para sempre.",
  "A falta não surge apenas por causa da distância.  Mas também por causa de desejos que não se realizam.",
  "Você nunca estará longe de mim, onde quer que eu vá você está sempre lá, porque você está sempre no meu coração, que está longe apenas de nossos corpos, não de nossos corações.",
  "Estou sem você como uma ambulância sem wiuw wiuw.",
  "A Antártica fica bem longe.  Entre nós não."
]
