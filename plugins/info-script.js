const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Script: Chat owner*`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/faelfilaa",
    mediaType: "VIDEO",
    description: "https://github.com/XDBot212", 
    title: 'ZyyBotzz',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['script']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler