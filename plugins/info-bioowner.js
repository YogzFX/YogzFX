let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : ZennSky
*✉️ Nama RL* : Yogi
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : Private!
*🎨 Umur* : 17
*🧮 Kelas* : 12
*🧩 Hobby* : Turu
*💬 Sifat* : Ramah Dan Kalem
*🗺️ Tinggal* : Mars
*❤️ Suka* : Kamu😙
*💔 Benci* : Autis, Gay, Seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @bot_whangsaf
*🇫  Facebook* : Adison Fahri
*🏮 Chanel Youtube* : Papah-Chan
*🐈 Github:* FahriAdison

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
