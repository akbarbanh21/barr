/*kasihlah tqtq , Kgk mau kasih tqtq ?
oke sans rest api nya gua rusakin
ini sc buatan gua luh jan ngaku² dah,
Sc ini gratis jangan di jual
ketahuan kgk bakal gw update + pensi uplod sc
dan nama creator / pembuatan sc jangan di hapus 
susah bet emang di bilangin,
tolong jangan jual sc ini / hapus nama creator / ganti nama creator
Ini Sc Base Gua

PAHAM GAK ? 
Oke ketahuan auto gw 
kgk update / upload sc / rest api nya bakalan gw off in

Udah gede masih aja nyolong fitur
tanpa sumber ngeri sih 😱

no jual sc ini !!
sc ini gratis !!

=================*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const imgbb = require('imgbb-uploader')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const Verived = ('0@s.whatsapp.net')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { rules } = require('./setting/rules')

//══════════[ Setting ]══════════//

self = setting.self
dhakey = apikey.dhakey
Lolhuman = apikey.LolHuman
LeysKey = apikey.LeysApi
ziyApi = apikey.XziyKey
ryukey = setting.RyuKey
HardiApi = setting.HardiKey
ramdaniapi = apikey.RamdaniKey
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/dhani.jpg')
const thumb = fs.readFileSync ('./media/thumb.jpg')

    //Database Game

const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))

//══════════[ WAKTU ]══════════//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = Dhani = async (Dhani, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Dhani.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6281333603591@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? Dhani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Dhani.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        m = simple.smsg(Dhani, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? Dhani.user.jid : Dhani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Dhani.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		let bio_nya = await Dhani.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await Dhani.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		
//══════════[ Mess Dll ]══════════//

mess = {
wait: 'Proses kak',
eror: 'Maaf terjadi kesalahan !!',
success: 'Sukses️',
error: {
stick: 'Itu bukan sticker kak !!',
Iv: 'Link invalid !!'
},
only: {
nsfw: 'Fitur nsfw belum di aktifkan silakan hubungi admin untuk mengaktifkan',
group: 'Fitur khusus grup !!',
owner: 'Fitur khusus owner !!',
admin: 'Fitur khusus admin !!',
Badmin: 'Silakan jadikan bot admin dulu !!'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Dhani.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fgi
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Dhani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Dhani.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Dhani.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Dhani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = Dhani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return Dhani.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
Dhani.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Dhani.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Dhani.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Dhani.sendMessage(from, teks.trim(), extendedText, { quoted: fgi, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
Dhani.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return Dhani.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/thumb.jpg')})}
const fakeitem = (teks) => { Dhani.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/thumb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Dhani.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Dhani.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nJika Tidak Support Button Ketik #verify```'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `𝘿𝘼𝙁𝙏𝘼𝙍`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anu = await Dhani.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Dhani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/dhani.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await Dhani.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
Dhani.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
Dhani.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Dhani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Dhani.groupRemove(from, [sender])
}     
if (!m.key.fromMe && !isOwner && bad.includes(messagesD)) {
ano = fs.readFileSync('./media/sticker/toxic.webp')
Dhani.sendMessage(from, ano, sticker, { quoted: mek})
}

//══════════[ Dll ]══════════//

if (autoread){
Dhani.chatRead(from, "read")
} else if (autoketik) {
Dhani.updatePresence(from, Presence.composing)
} else if (autovn) {
Dhani.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIBADI \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !isOwner && self === true) return
switch (command) {

//══════════[ FITUR FITURNYA UY ]══════════//

case 'menu':
case 'help':
timestampe = speed();
latensie = speed() - timestampe
const { wa_version, os_version } = Dhani.user.phone
pemilik = `${owner}@s.whatsapp.net`
menu =
`*_${ucapanWaktu} @${senderr.split('@')[0]}_*

\`\`\`🔖「 WAKTU INDONESIA 」\`\`\`
🔖 ${gaya1} *Tanggal* : ${tanggal}
🔖 ${gaya1} *Wib* : ${time}
🔖 ${gaya1} *Wita* : ${timeMak}
🔖 ${gaya1} *Wit* : ${timeJay}

\`\`\`🔖「 INFO BOT 」\`\`\`
🔖 ${gaya1} *Speed* : ${latensie.toFixed(4)} Detik
🔖 ${gaya1} *Runtime* : ${runtime(process.uptime())}
🔖 ${gaya1} *Nama Bot* : ${botname}
🔖 ${gaya1} *Nama Owner* : ${ownername}
🔖 ${gaya1} *Nomor Owner* : @${pemilik.split('@')[0]}
🔖 ${gaya1} *Platform :* ${os.platform()}
🔖 ${gaya1} *Wa Version :* ${Dhani.user.phone.wa_version}
🔖 ${gaya1} *Total Pengguna :* ${_registered.length}
🔖 ${gaya1} *Mode :* ${self ? "Self" : "Public"}
🔖 ${gaya1} *Autoread* : ${autoread ? "Aktif" : "Off"}
🔖 ${gaya1} *Autoketik* : ${autoketik ? "Aktif" : "Off"}
🔖 ${gaya1} *Autovn* : ${autovn ? "Aktif" : "Off"}


\`\`\`🔖 ❏「 INFO USER 」\`\`\`
🔖 ${gaya1} *Nama* : ${pushname}
🔖 ${gaya1} *Bio* : ${bio_user}
🔖 ${gaya1} *Nomor* : @${senderr.split('@')[0]}
🔖 ${gaya1} *Status* : ${isOwner ? 'Owner' : 'User'}`
teks =
`_Dilarang Nyepam Bot_
_Jeda 3 Detik_
_Silakan Ketik ${prefix}command_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ᴄᴏᴍᴍᴀɴᴅ😈' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ🤤' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,pemilik]}}}, 'buttonsMessage')
const sound = fs.readFileSync('./media/audio.mp3')
Dhani.sendMessage(from, sound, audio, { mimetype: 'audio/mp4', ptt: true })
break
case 'command':
listMsg = {
buttonText: '𝗠𝗘𝗡𝗨',
footerText: `*© ${ownername}*`,
description: `Hai kak @${senderr.split('@')[0]}, Silahkan pilih menu disini`,
sections: [
{
"title": `${tanggal} - ${time} WIB`,
rows: [
{
"title": "ALL MENU",
"description": `Menampilkan List Fitur All Menu`,
"rowId": `${prefix}allmenu`
},
{
"title": "GROUP MENU",
"description": `Menampilkan List Fitur Khusus Group`,
"rowId": `${prefix}grupmenu`
},
{
"title": "DOWNLOAD MENU",
"description": `Menampilkan List Fitur Untuk Download`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "MAKER MENU",
"description": `Menampilkan List Fitur Untuk Membuatkan Logo`,
"rowId": `${prefix}makermenu`
},
{
"title": "RANDOM TEXT",
"description": `Menampilkan List Fitur Random Teks`,
"rowId": `${prefix}randomtext`
},
{
"title": "RANDOM IMAGE",
"description": `Menampilkan List Fitur Random Foto`,
"rowId": `${prefix}randomimage`
},
{
"title": "RANDOM VIDEO",
"description": `Menampilkan List Fitur Random Video`,
"rowId": `${prefix}randomvideo`
},
{
"title": "ASUPAN MENU",
"description": `Menampilkan List Fitur Asupan 18+`,
"rowId": `${prefix}asupanmenu`
},
{
"title": "CECAN MENU",
"description": `Menampilkan List Fitur Cecan Dan Cogan`,
"rowId": `${prefix}cecanmenu`
},
{
"title": "ANIME MENU",
"description": `Menampilkan List Fitur Anime`,
"rowId": `${prefix}animemenu`
},
{
"title": "NSFW MENU",
"description": `Menampilkan List Fitur Nsfw 18+`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": "KERANG MENU",
"description": `Menampilkan List Spongebob`,
"rowId": `${prefix}kerangmenu`
},
{
"title": "FUN MENU",
"description": `Menampilkan List Game/Bermain`,
"rowId": `${prefix}funmenu`
},
{
"title": "STICKER MENU",
"description": `Menampilkan List Fitur Sticker`,
"rowId": `${prefix}stickermenu`
},
{
"title": "OTHER MENU",
"description": `Menampilkan List Fitur Lainnya`,
"rowId": `${prefix}othermenu`
},
{
"title": "OWNER MENU",
"description": `Menampilkan List Fitur Khusus Owner`,
"rowId": `${prefix}ownermenu`
}
]
}],
listType: 1
}
Dhani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break
case 'allmenu':
menu =
`*_${ucapanWaktu} @${senderr.split('@')[0]}_*

   「 𝗪𝗔𝗞𝗧𝗨 𝗜𝗡𝗗𝗢𝗡𝗘𝗦𝗜𝗔 」
📆 ${gaya1} *Tanggal* : ${tanggal}
⏰ ${gaya1} *Wib* : ${time}
⏰ ${gaya1} *Wita* : ${timeMak}
⏰ ${gaya1} *Wit* : ${timeJay}

    「 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 」
👤 ${gaya1} *Nama* : ${pushname}
📖️ ${gaya1} *Bio* : ${bio_user}
🗣️ ${gaya1} *Nomor* : @${senderr.split('@')[0]}
🏅 ${gaya1} *Status* : ${isOwner ? 'Owner' : 'User'}

    「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」
⏲️ ${gaya1} *𝘙𝘶𝘯𝘵𝘪𝘮𝘦* :${runtime(process.uptime())}
🪀 ${gaya1} *𝘖𝘸𝘯𝘦𝘳* : ${owner}
👥 ${gaya1} *Nama Bot* : ${botname}
 
🔖 *「 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}antilink *on / off*
🔖 ${prefix}antivirtex *on / off*
🔖 ${prefix}welcome *on / off*
🔖 ${prefix}group *buka / tutup*
🔖 ${prefix}promote *@tag / reply*
🔖 ${prefix}demote *@tag / reply*
🔖 ${prefix}add *628xx*
🔖 ${prefix}kick *@tag / reply*
🔖 ${prefix}setpp *reply / cap*
🔖 ${prefix}setdesc *teks*
🔖 ${prefix}setname *teks*
🔖 ${prefix}hidetag *teks*
🔖 ${prefix}kontak _628x|Nama_
🔖 ${prefix}kontag _@tag|Nama_
🔖 ${prefix}sticktag _Reply Sticker_
🔖 ${prefix}totag _Reply Image_
🔖 ${prefix}promoteall
🔖 ${prefix}demoteall
🔖 ${prefix}listadmin
🔖 ${prefix}grupowner
🔖 ${prefix}linkgrup
🔖 ${prefix}infogrup
🔖 ${prefix}listonline
🔖 ${prefix}resetlinkgrup

🔖 *「 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}blackpink _Teks_
🔖 ${prefix}halloween _Teks_
🔖 ${prefix}halloween2 _Teks_
🔖 ${prefix}3dgradient _Teks_
🔖 ${prefix}naturalleaves _Teks_
🔖 ${prefix}dropwater _Teks_
🔖 ${prefix}blood _Teks_
🔖 ${prefix}blood2 _Teks_
🔖 ${prefix}snow _Teks_
🔖 ${prefix}cloud _Teks_
🔖 ${prefix}neondevil _Teks_
🔖 ${prefix}neon _Teks_
🔖 ${prefix}glowingneonlight _Teks_
🔖 ${prefix}neonlightglitch _Teks_
🔖 ${prefix}neonlightonbrickwall _Teks_
🔖 ${prefix}neonlight _Teks_
🔖 ${prefix}neonlight2 _Teks_
🔖 ${prefix}neonlight3 _Teks_
🔖 ${prefix}greenneon _Teks_
🔖 ${prefix}toxic _Teks_
🔖 ${prefix}matrix _Teks_
🔖 ${prefix}thunder _Teks_
🔖 ${prefix}thunder2 _Teks_
🔖 ${prefix}bokeh _Teks_
🔖 ${prefix}carbontext _Teks_
🔖 ${prefix}christmas _Teks_
🔖 ${prefix}breakwall _Teks_
🔖 ${prefix}roadwarning _Teks_
🔖 ${prefix}engraved3d _Teks_
🔖 ${prefix}embossed _Teks_
🔖 ${prefix}3dstone _Teks_
🔖 ${prefix}futuristic _Teks_
🔖 ${prefix}sketch _Teks_
🔖 ${prefix}bluecircuit _Teks_
🔖 ${prefix}space _Teks_
🔖 ${prefix}magmahot _Teks_
🔖 ${prefix}artpapercut _Teks_
🔖 ${prefix}3dluxurygold _Teks_
🔖 ${prefix}robotr2d2 _Teks_
🔖 ${prefix}harrypotter _Teks_
🔖 ${prefix}glitch3 _Teks_
🔖 ${prefix}greenhorror _Teks_
🔖 ${prefix}horrorgift _Teks_
🔖 ${prefix}erodedmetal _Teks_
🔖 ${prefix}3dglowingmetal _Teks_
🔖 ${prefix}blackmetal _Teks_
🔖 ${prefix}bluemetal _Teks_
🔖 ${prefix}shynimetal _Teks_
🔖 ${prefix}rustymetal _Teks_
🔖 ${prefix}metalpurple _Teks_
🔖 ${prefix}metalrainbow _Teks_
🔖 ${prefix}metaldarkgold _Teks_
🔖 ${prefix}colorfullluxurymetal _Teks_
🔖 ${prefix}glossybluemetal _Teks_
🔖 ${prefix}3dglossymetal _Teks_
🔖 ${prefix}3ddeepseametal _Teks_
🔖 ${prefix}leddisplayscreen _Teks_
🔖 ${prefix}metallic _Teks_
🔖 ${prefix}glossymetallic _Teks_
🔖 ${prefix}christmastree _Teks_
🔖 ${prefix}sparklesmerrychristmas _Teks_
🔖 ${prefix}countryflag3d _Teks_
🔖 ${prefix}americanflag3d _Teks_
🔖 ${prefix}3dscfi _Teks_
🔖 ${prefix}3drainbow _Teks_
🔖 ${prefix}3dwaterpipe _Teks_
🔖 ${prefix}3dchrome _Teks_
🔖 ${prefix}bluegem _Teks_
🔖 ${prefix}purplegem _Teks_
🔖 ${prefix}pinkcandy _Teks_
🔖 ${prefix}transformer _Teks_
🔖 ${prefix}berry _Teks_
🔖 ${prefix}brokenglass _Teks_
🔖 ${prefix}3drealistic _Teks_
🔖 ${prefix}3dunderwater _Teks_
🔖 ${prefix}writeinsandsummerbeach _Teks_
🔖 ${prefix}sandwriting _Teks_
🔖 ${prefix}foilballoon _Teks_
🔖 ${prefix}3dglue _Teks_
🔖 ${prefix}1917 _Teks_
🔖 ${prefix}minion _Teks_
🔖 ${prefix}doubleexposure _Teks_
🔖 ${prefix}holographic3d _Teks_
🔖 ${prefix}deluxegold _Teks_
🔖 ${prefix}deluxesilver _Teks_
🔖 ${prefix}glossycarbon _Teks_
🔖 ${prefix}fabric _Teks_
🔖 ${prefix}xmascards3d _Teks_
🔖 ${prefix}wicker _Teks_
🔖 ${prefix}fireworksparkle _Teks_
🔖 ${prefix}skeleton _Teks_
🔖 ${prefix}ultragloss _Teks_
🔖 ${prefix}denim _Teks_
🔖 ${prefix}decorategreen _Teks_
🔖 ${prefix}peridot _Teks_
🔖 ${prefix}rock _Teks_
🔖 ${prefix}lava _Teks_
🔖 ${prefix}rainbowequalizer _Teks_
🔖 ${prefix}purpleglass _Teks_
🔖 ${prefix}decorativeglass _Teks_
🔖 ${prefix}chocolatecake _Teks_
🔖 ${prefix}strawberry _Teks_
🔖 ${prefix}koifish _Teks_
🔖 ${prefix}bread _Teks_
🔖 ${prefix}3dbox _Teks_
🔖 ${prefix}freeadvancedglow _Teks_
🔖 ${prefix}honey _Teks_
🔖 ${prefix}marble _Teks_
🔖 ${prefix}marbleslabs _Teks_
🔖 ${prefix}icecold _Teks_
🔖 ${prefix}fruitjuice _Teks_
🔖 ${prefix}abstragold _Teks_
🔖 ${prefix}biscuit _Teks_
🔖 ${prefix}bagel _Teks_
🔖 ${prefix}wood _Teks_
🔖 ${prefix}hexagolden _Teks_
🔖 ${prefix}wonderfulgraffitiart _Teks_
🔖 ${prefix}8bit _Teks1&Teks2_
🔖 ${prefix}glitch _Teks1&Teks2_
🔖 ${prefix}glitch2 _Teks1&Teks2_
🔖 ${prefix}layered _Teks1&Teks2_
🔖 ${prefix}3dsteel _Teks1&Teks2_
🔖 ${prefix}realistic _Teks1&Teks2_
🔖 ${prefix}lionlogo _Teks1&Teks2_
🔖 ${prefix}ninjalogo _Teks1&Teks2_
🔖 ${prefix}wolf _Teks1&Teks2_
🔖 ${prefix}wolf2 _Teks1&Teks2_
🔖 ${prefix}halloween3 _Teks1&Teks2_
🔖 ${prefix}marvel2 _Teks1&Teks2_
🔖 ${prefix}cinematichorror _Teks1&Teks2_
🔖 ${prefix}avengers _Teks1&Teks2_
🔖 ${prefix}graffiti3 _Teks1&Teks2_
🔖 ${prefix}captainamerica _Teks1&Teks2_
🔖 ${prefix}girlneko _Teks1&Teks2_
🔖 ${prefix}sadboy _Teks1&Teks2_
🔖 ${prefix}makerkaneki _Teks1&Teks2_
🔖 ${prefix}rem _Teks1&Teks2_
🔖 ${prefix}lolimaker _Teks1&Teks2_

🔖 *「 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}luxurygold _Teks1&Teks2_
🔖 ${prefix}watercolor  _Teks1&Teks2_
🔖 ${prefix}multicolor3d
🔖 ${prefix}wetglass
🔖 ${prefix}galaxywallpaper
🔖 ${prefix}ighttext
🔖 ${prefix}beautifulflower
🔖 ${prefix}puppycute
🔖 ${prefix}royaltext
🔖 ${prefix}heartshaped
🔖 ${prefix}birthdaycake
🔖 ${prefix}galaxystyle
🔖 ${prefix}hologram3d
🔖 ${prefix}greenneon
🔖 ${prefix}glossychrome
🔖 ${prefix}greenbush
🔖 ${prefix}metallogo
🔖 ${prefix}noeltext
🔖 ${prefix}glittergold
🔖 ${prefix}textcake
🔖 ${prefix}starsnight
🔖 ${prefix}wooden3d
🔖 ${prefix}textbyname
🔖 ${prefix}writegalaxy
🔖 ${prefix}snow3d
🔖 ${prefix}birthdayday
🔖 ${prefix}goldplaybutton
🔖 ${prefix}silverplaybutton
🔖 ${prefix}freefire
🔖 ${prefix}cartoongravity
🔖 ${prefix}anonymhacker
🔖 ${prefix}mlwall
🔖 ${prefix}pubgmaskot
🔖 ${prefix}aovwall
🔖 ${prefix}logogaming
🔖 ${prefix}fpslogo
🔖 ${prefix}avatarlolnew
🔖 ${prefix}olbanner
🔖 ${prefix}avatardota
🔖 ${prefix}juventusshirt
🔖 ${prefix}cutegravity
🔖 ${prefix}ealvintage

🔖 *「 𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}alquran
🔖 ${prefix}asmaulhusna
🔖 ${prefix}alquranaudio
🔖 ${prefix}jadwalsholat
🔖 ${prefix}kisahnabi
🔖 {prefix}listsurah

🔖 *「 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}fox
🔖 ${prefix}dog
🔖 ${prefix}cat
🔖 ${prefix}panda
🔖 ${prefix}red_panda
🔖 ${prefix}birb
🔖 ${prefix}koala
🔖 ${prefix}chiisaihentai
🔖 ${prefix}trap
🔖 ${prefix}blowjob
🔖 ${prefix}yaoi
🔖 ${prefix}ecchi                
🔖 ${prefix}ahegao
🔖 ${prefix}hololewd
🔖 ${prefix}sideoppai
🔖 ${prefix}animefeets
🔖 ${prefix}animebooty
🔖 ${prefix}animethighss
🔖 ${prefix}hentaiparadise
🔖 ${prefix}animearmpits
🔖 ${prefix}hentaifemdom
🔖 ${prefix}lewdanimegirls
🔖 ${prefix}biganimetiddies
🔖 ${prefix}animebellybutton
🔖 ${prefix}hentai4everyone
🔖 ${prefix}bts
🔖 ${prefix}exo
🔖 ${prefix}elf
🔖 ${prefix}loli
🔖 ${prefix}neko
🔖 ${prefix}shota
🔖 ${prefix}sagiri
🔖 ${prefix}shinobu
🔖 ${prefix}megumin
🔖 ${prefix}wallnime

🔖 *「 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}ytmp3 *Link*
🔖 ${prefix}ytmp4 *Link*
🔖 ${prefix}tiktokaudio _Link_
🔖 ${prefix}tiktoknowm _Link_
🔖 ${prefix}play _Link_
🔖 ${prefix}pinterest

*「 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}sticker *reply / cap*
🔖 ${prefix}toimg *reply*
🔖 ${prefix}attp *teks*
🔖 ${prefix}ttp *teks*
🔖 ${prefix}toimg

*「 𝗗𝗢𝗦𝗔 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}dosa1
🔖 ${prefix}dosa2
🔖 ${prefix}dosa3
🔖 ${prefix}dosa4
🔖 ${prefix}dosa5
🔖 ${prefix}dosa6
🔖 ${prefix}dosa7
🔖 ${prefix}dosa8
🔖 ${prefix}dosa9
🔖 ${prefix}dosa10
🔖 ${prefix}dosa11
🔖 ${prefix}dosa12
🔖 ${prefix}dosa13
🔖 ${prefix}dosa14
🔖 ${prefix}dosa15
🔖 ${prefix}dosa16
🔖 ${prefix}dosa17
🔖 ${prefix}dosa18
🔖 ${prefix}dosa19
🔖 ${prefix}dosa20
🔖 ${prefix}dosa21
🔖 ${prefix}dosa22
🔖 ${prefix}dosa23
🔖 ${prefix}dosa24

🔖 *「 𝗥𝗔𝗡𝗗𝗢𝗠 𝗧𝗘𝗫𝗧 」*

🔖 ${prefix}faktaunik
🔖 ${prefix}truth
🔖 ${prefix}dare
🔖 ${prefix}pantun
🔖 ${prefix}puisi
🔖 ${prefix}quotes
🔖 ${prefix}quoteskanye
🔖 ${prefix}quotesislami
🔖 ${prefix}quotesanime
🔖 ${prefix}quotesdilan
🔖 ${prefix}quotesff
🔖 ${prefix}quotespubg
🔖 ${prefix}quoteshacker
🔖 ${prefix}katabijak
🔖 ${prefix}katailham
🔖 ${prefix}katasindiran
🔖 ${prefix}katabucin
🔖 ${prefix}katabucin2
🔖 ${prefix}kataml
🔖 ${prefix}katagalau
🔖 ${prefix}nulis

🔖 *「 𝗥𝗔𝗡𝗗𝗢𝗠 𝗜𝗠𝗔𝗚𝗘 」*

🔖 ${prefix}ppcouple
🔖 ${prefix}meme
🔖 ${prefix}memeindo
🔖 ${prefix}quotesimage
🔖 ${prefix}katakataimage
🔖 ${prefix}renungan
🔖 ${prefix}darkjokes
🔖 ${prefix}aesthetic
🔖 ${prefix}wallpaperhacker
🔖 ${prefix}wallpaperhacker2
🔖 ${prefix}wallpaperharley
🔖 ${prefix}wallpaperjoker
🔖${prefix}wallpaperpubg
🔖 ${prefix}wallpaperhp
🔖 ${prefix}wallpaperhp2
🔖 ${prefix}wallpaperkpop
🔖 ${prefix}wallpaperblackpink
🔖 ${prefix}wallpapergame

🔖 *「 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}naruto
🔖 ${prefix}loli
🔖 ${prefix}waifu
🔖 ${prefix}neko
🔖 ${prefix}husbu
🔖 ${prefix}milf
🔖 ${prefix}cosplay
🔖 ${prefix}nekonime
🔖 ${prefix}shota
🔖 ${prefix}wallml
🔖 ${prefix}akira
🔖 ${prefix}akiyama
🔖 ${prefix}ana
🔖 ${prefix}asuna
🔖 ${prefix}ayuzawa
🔖 ${prefix}boruto
🔖 ${prefix}chiho
🔖 ${prefix}chitoge
🔖 ${prefix}deidara
🔖 ${prefix}eba
🔖 ${prefix}elaina
🔖 ${prefix}emilia
🔖 ${prefix}erza
🔖 ${prefix}gremory
🔖 ${prefix}hestia
🔖 ${prefix}hinata
🔖 ${prefix}isuzu
🔖 ${prefix}itachi
🔖 ${prefix}itori
🔖 ${prefix}kagura
🔖 ${prefix}kakasih
🔖 ${prefix}kaori
🔖 ${prefix}kaneki
🔖 ${prefix}kotori
🔖 ${prefix}kurumi
🔖 ${prefix}madara
🔖 ${prefix}mikasa
🔖 ${prefix}miku
🔖 ${prefix}minato
🔖 ${prefix}nezuko
🔖 ${prefix}rize
🔖 ${prefix}sagiri
🔖 ${prefix}sakura
🔖 ${prefix}sasuke
🔖 ${prefix}shina
🔖 ${prefix}shinka
🔖 ${prefix}shinomiya
🔖 ${prefix}shizuka
🔖 ${prefix}tejina
🔖 ${prefix}toukachan
🔖 ${prefix}tsunade
🔖 ${prefix}yotsuba
🔖 ${prefix}yuki
🔖 ${prefix}yumeko
🔖 ${prefix}fanart
🔖 ${prefix}nino

🔖 *「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix} sound1
🔖 ${prefix} sound2
🔖 ${prefix} sound3
🔖 ${prefix} sound4
🔖 ${prefix} sound5
🔖 ${prefix} sound6
🔖 ${prefix} sound7
🔖 ${prefix} sound8
🔖 ${prefix} sound9
🔖 ${prefix} sound10

🔖 *「 𝗥𝗔𝗡𝗗𝗢𝗠 𝗩𝗜𝗗𝗘𝗢 」*

🔖 ${prefix}bokep
🔖 ${prefix}beatvn
🔖 ${prefix}jedagjedugff
🔖 ${prefix}jedagjedugml
🔖 ${prefix}jedagjedugpubg
🔖 ${prefix}storysholawatan
🔖 ${prefix}storywa
🔖 ${prefix}storygalau
🔖 ${prefix}storytruk
🔖 ${prefix}storybus
🔖 ${prefix}storyanime
🔖 ${prefix}storycecan
🔖 ${prefix}storymeme

🔖 *「 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}asupan
🔖 ${prefix}asupanloli
🔖 ${prefix}hijaber
🔖 ${prefix}bocil
🔖 ${prefix}rikagusriani
🔖 ${prefix}santuy
🔖 ${prefix}ukhty
🔖 ${prefix}gheayubi
🔖 ${prefix}nantalia

🔖 *「 𝗖𝗘𝗖𝗔𝗡 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}cogan
🔖 ${prefix}cecan
🔖 ${prefix}cecan2
🔖 ${prefix}cogan2
🔖 ${prefix}jeni
🔖 ${prefix}jiso
🔖 ${prefix}justina
🔖 ${prefix}lisa
🔖 ${prefix}rose
🔖 ${prefix}ryujin
🔖 ${prefix}china
🔖 ${prefix}vietnam
🔖 ${prefix}thainlad
🔖 ${prefix}indonesia
🔖 ${prefix}korea
🔖 ${prefix}japan
🔖 ${prefix}malaysia

🔖 *「 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}ass
🔖 ${prefix}ahegao
🔖 ${prefix}bdsm
🔖 ${prefix}blowjob
🔖 ${prefix}cuckold
🔖 ${prefix}cum
🔖 ${prefix}ero
🔖 ${prefix}femdom
🔖 ${prefix}foot
🔖 ${prefix}gangbang
🔖 ${prefix}glasses
🔖 ${prefix}hentai
🔖 ${prefix}jahy
🔖 ${prefix}masturbation
🔖 ${prefix}neko
🔖 ${prefix}orgy
🔖 ${prefix}panties
🔖 ${prefix}pussy
🔖 ${prefix}thighs
🔖 ${prefix}yuri

🔖 *「 𝗞𝗘𝗥𝗔𝗡𝗚 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}apakah _Teks_
🔖 ${prefix}kapankah _Teks_
🔖 ${prefix}bisakah _Teks_
🔖 ${prefix}bagaimanakah _Teks_

🔖 *「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}suit
🔖 ${prefix}cekme
🔖 ${prefix}beban
🔖 ${prefix}babi
🔖 ${prefix}ngewe
🔖 ${prefix}sange
🔖 ${prefix}gay
🔖 ${prefix}wibu
🔖 ${prefix}terganteng
🔖 ${prefix}tercantik
🔖 ${prefix}jadian
🔖 ${prefix}rate _Teks_
🔖 ${prefix}ceksange _Teks_
🔖 ${prefix}cekgay _Teks_
🔖 ${prefix}cekganteng _Teks_
🔖 ${prefix}cekcantik _Teks_
🔖 ${prefix}cekmati _Teks_
🔖 ${prefix}cekwatak _Teks_
🔖 ${prefix}cekhobby _Teks_
🔖 ${prefix}ceklesbi _Teks_

🔖 *「 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}runtime
🔖 ${prefix}speed
🔖 ${prefix}sewabot
🔖 ${prefix}payment
🔖 ${prefix}owner
🔖 ${prefix}delete _Reply pesan bot_

🔖 *「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」*

🔖 ${prefix}bc _Teks_
🔖 ${prefix}bc2 _Teks_
🔖 ${prefix}bcgc _Teks_
🔖 ${prefix}setnamabot _Teks_
🔖 ${prefix}setbio _Teks_
🔖 ${prefix}setppbot _Reply Image_
🔖 ${prefix}autoread _On / Off_
🔖 ${prefix}autoketik _On / Off_
🔖 ${prefix}autovn _On / Off_
🔖 ${prefix}spam _Teks|Jumlah_
🔖 ${prefix}mode
🔖 ${prefix}public
🔖 ${prefix} Self`
teks =
`*『 ${botname} 』*
*${tanggal}*`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ🤤' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ😈' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'grupmenu':
case 'groupmenu':
menu =
`*「 GRUP MENU 」*

${gaya2} ${prefix}antilink _on / off_
${gaya2} ${prefix}antivirtex _on / off_
${gaya2} ${prefix}welcome _on / off_
${gaya2} ${prefix}nsfw _on / off_
${gaya2} ${prefix}group _buka / tutup_
${gaya2} ${prefix}promote _@tag / reply_
${gaya2} ${prefix}demote _@tag / reply_
${gaya2} ${prefix}add _628xx_
${gaya2} ${prefix}kick _@tag / reply_
${gaya2} ${prefix}setpp _reply_
${gaya2} ${prefix}setdesc _teks_
${gaya2} ${prefix}setname _teks_
${gaya2} ${prefix}hidetag _teks_
${gaya2} ${prefix}kontak _628x|Nama_
${gaya2} ${prefix}kontag _@tag|Nama_
${gaya2} ${prefix}sticktag _Reply Sticker_
${gaya2} ${prefix}totag _Reply Image_
${gaya2} ${prefix}promoteall
${gaya2} ${prefix}demoteall
${gaya2} ${prefix}listadmin
${gaya2} ${prefix}grupowner
${gaya2} ${prefix}linkgrup
${gaya2} ${prefix}infogrup
${gaya2} ${prefix}listonline
${gaya2} ${prefix}resetlinkgrup`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':
menu =
`*「 DOWNLOAD MENU 」*

${gaya2} ${prefix}ytmp3 _Link_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}tiktok _Link_
${gaya2} ${prefix}tiktokwm _Link_
${gaya2} ${prefix}tiktoknowm _Link_
${gaya2} ${prefix}tiktokaudio _Link_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'storemenu':
menu =
`*「 STORE MENU 」*

${gaya2} ${prefix}store
${gaya2} ${prefix}proses
${gaya2} ${prefix}ml
${gaya2} ${prefix}ff`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makermenu':
menu =
`*「 MAKER MENU 」*

${gaya2} ${prefix}blackpink _Teks_
${gaya2} ${prefix}halloween _Teks_
${gaya2} ${prefix}halloween2 _Teks_
${gaya2} ${prefix}3dgradient _Teks_
${gaya2} ${prefix}naturalleaves _Teks_
${gaya2} ${prefix}dropwater _Teks_
${gaya2} ${prefix}blood _Teks_
${gaya2} ${prefix}blood2 _Teks_
${gaya2} ${prefix}snow _Teks_
${gaya2} ${prefix}cloud _Teks_
${gaya2} ${prefix}neondevil _Teks_
${gaya2} ${prefix}neon _Teks_
${gaya2} ${prefix}glowingneonlight _Teks_
${gaya2} ${prefix}neonlightglitch _Teks_
${gaya2} ${prefix}neonlightonbrickwall _Teks_
${gaya2} ${prefix}neonlight _Teks_
${gaya2} ${prefix}neonlight2 _Teks_
${gaya2} ${prefix}neonlight3 _Teks_
${gaya2} ${prefix}greenneon _Teks_
${gaya2} ${prefix}toxic _Teks_
${gaya2} ${prefix}matrix _Teks_
${gaya2} ${prefix}thunder _Teks_
${gaya2} ${prefix}thunder2 _Teks_
${gaya2} ${prefix}bokeh _Teks_
${gaya2} ${prefix}carbontext _Teks_
${gaya2} ${prefix}christmas _Teks_
${gaya2} ${prefix}breakwall _Teks_
${gaya2} ${prefix}roadwarning _Teks_
${gaya2} ${prefix}engraved3d _Teks_
${gaya2} ${prefix}embossed _Teks_
${gaya2} ${prefix}3dstone _Teks_
${gaya2} ${prefix}futuristic _Teks_
${gaya2} ${prefix}sketch _Teks_
${gaya2} ${prefix}bluecircuit _Teks_
${gaya2} ${prefix}space _Teks_
${gaya2} ${prefix}magmahot _Teks_
${gaya2} ${prefix}artpapercut _Teks_
${gaya2} ${prefix}3dluxurygold _Teks_
${gaya2} ${prefix}robotr2d2 _Teks_
${gaya2} ${prefix}harrypotter _Teks_
${gaya2} ${prefix}glitch3 _Teks_
${gaya2} ${prefix}greenhorror _Teks_
${gaya2} ${prefix}horrorgift _Teks_
${gaya2} ${prefix}erodedmetal _Teks_
${gaya2} ${prefix}3dglowingmetal _Teks_
${gaya2} ${prefix}blackmetal _Teks_
${gaya2} ${prefix}bluemetal _Teks_
${gaya2} ${prefix}shynimetal _Teks_
${gaya2} ${prefix}rustymetal _Teks_
${gaya2} ${prefix}metalpurple _Teks_
${gaya2} ${prefix}metalrainbow _Teks_
${gaya2} ${prefix}metaldarkgold _Teks_
${gaya2} ${prefix}colorfullluxurymetal _Teks_
${gaya2} ${prefix}glossybluemetal _Teks_
${gaya2} ${prefix}3dglossymetal _Teks_
${gaya2} ${prefix}3ddeepseametal _Teks_
${gaya2} ${prefix}leddisplayscreen _Teks_
${gaya2} ${prefix}metallic _Teks_
${gaya2} ${prefix}glossymetallic _Teks_
${gaya2} ${prefix}christmastree _Teks_
${gaya2} ${prefix}sparklesmerrychristmas _Teks_
${gaya2} ${prefix}countryflag3d _Teks_
${gaya2} ${prefix}americanflag3d _Teks_
${gaya2} ${prefix}3dscfi _Teks_
${gaya2} ${prefix}3drainbow _Teks_
${gaya2} ${prefix}3dwaterpipe _Teks_
${gaya2} ${prefix}3dchrome _Teks_
${gaya2} ${prefix}bluegem _Teks_
${gaya2} ${prefix}purplegem _Teks_
${gaya2} ${prefix}pinkcandy _Teks_
${gaya2} ${prefix}transformer _Teks_
${gaya2} ${prefix}berry _Teks_
${gaya2} ${prefix}brokenglass _Teks_
${gaya2} ${prefix}3drealistic _Teks_
${gaya2} ${prefix}3dunderwater _Teks_
${gaya2} ${prefix}writeinsandsummerbeach _Teks_
${gaya2} ${prefix}sandwriting _Teks_
${gaya2} ${prefix}foilballoon _Teks_
${gaya2} ${prefix}3dglue _Teks_
${gaya2} ${prefix}1917 _Teks_
${gaya2} ${prefix}minion _Teks_
${gaya2} ${prefix}doubleexposure _Teks_
${gaya2} ${prefix}holographic3d _Teks_
${gaya2} ${prefix}deluxegold _Teks_
${gaya2} ${prefix}deluxesilver _Teks_
${gaya2} ${prefix}glossycarbon _Teks_
${gaya2} ${prefix}fabric _Teks_
${gaya2} ${prefix}xmascards3d _Teks_
${gaya2} ${prefix}wicker _Teks_
${gaya2} ${prefix}fireworksparkle _Teks_
${gaya2} ${prefix}skeleton _Teks_
${gaya2} ${prefix}ultragloss _Teks_
${gaya2} ${prefix}denim _Teks_
${gaya2} ${prefix}decorategreen _Teks_
${gaya2} ${prefix}peridot _Teks_
${gaya2} ${prefix}rock _Teks_
${gaya2} ${prefix}lava _Teks_
${gaya2} ${prefix}rainbowequalizer _Teks_
${gaya2} ${prefix}purpleglass _Teks_
${gaya2} ${prefix}decorativeglass _Teks_
${gaya2} ${prefix}chocolatecake _Teks_
${gaya2} ${prefix}strawberry _Teks_
${gaya2} ${prefix}koifish _Teks_
${gaya2} ${prefix}bread _Teks_
${gaya2} ${prefix}3dbox _Teks_
${gaya2} ${prefix}freeadvancedglow _Teks_
${gaya2} ${prefix}honey _Teks_
${gaya2} ${prefix}marble _Teks_
${gaya2} ${prefix}marbleslabs _Teks_
${gaya2} ${prefix}icecold _Teks_
${gaya2} ${prefix}fruitjuice _Teks_
${gaya2} ${prefix}abstragold _Teks_
${gaya2} ${prefix}biscuit _Teks_
${gaya2} ${prefix}bagel _Teks_
${gaya2} ${prefix}wood _Teks_
${gaya2} ${prefix}hexagolden _Teks_
${gaya2} ${prefix}wonderfulgraffitiart _Teks_
${gaya2} ${prefix}8bit _Teks1&Teks2_
${gaya2} ${prefix}pornhub _Teks1&Teks2_
${gaya2} ${prefix}glitch _Teks1&Teks2_
${gaya2} ${prefix}glitch2 _Teks1&Teks2_
${gaya2} ${prefix}layered _Teks1&Teks2_
${gaya2} ${prefix}3dsteel _Teks1&Teks2_
${gaya2} ${prefix}realistic _Teks1&Teks2_
${gaya2} ${prefix}lionlogo _Teks1&Teks2_
${gaya2} ${prefix}ninjalogo _Teks1&Teks2_
${gaya2} ${prefix}wolf _Teks1&Teks2_
${gaya2} ${prefix}wolf2 _Teks1&Teks2_
${gaya2} ${prefix}halloween3 _Teks1&Teks2_
${gaya2} ${prefix}marvel _Teks1&Teks2_
${gaya2} ${prefix}marvel2 _Teks1&Teks2_
${gaya2} ${prefix}cinematichorror _Teks1&Teks2_
${gaya2} ${prefix}avengers _Teks1&Teks2_
${gaya2} ${prefix}graffiti3 _Teks1&Teks2_
${gaya2} ${prefix}captainamerica _Teks1&Teks2_
${gaya2} ${prefix}girlneko _Teks1&Teks2_
${gaya2} ${prefix}sadboy _Teks1&Teks2_
${gaya2} ${prefix}makerkaneki _Teks1&Teks2_
${gaya2} ${prefix}rem _Teks1&Teks2_
${gaya2} ${prefix}lolimaker _Teks1&Teks2_
${gaya2} ${prefix}gura _Teks1&Teks2_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomtext':
menu =
`*「 RANDOM TEXT 」*

${gaya2} ${prefix}faktaunik
${gaya2} ${prefix}truth
${gaya2} ${prefix}dare
${gaya2} ${prefix}pantun
${gaya2} ${prefix}puisi
${gaya2} ${prefix}quotes
${gaya2} ${prefix}quoteskanye
${gaya2} ${prefix}quotesislami
${gaya2} ${prefix}quotesanime
${gaya2} ${prefix}quotesdilan
${gaya2} ${prefix}quotesff
${gaya2} ${prefix}quotespubg
${gaya2} ${prefix}quoteshacker
${gaya2} ${prefix}katabijak
${gaya2} ${prefix}katailham
${gaya2} ${prefix}katasindiran
${gaya2} ${prefix}katabucin
${gaya2} ${prefix}katabucin2
${gaya2} ${prefix}kataml
${gaya2} ${prefix}katagalau
${gaya2} ${prefix}katagombal`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomimage':
menu =
`*「 RANDOM IMAGE 」*

${gaya2} ${prefix}ppcouple
${gaya2} ${prefix}meme
${gaya2} ${prefix}memeindo
${gaya2} ${prefix}quotesimage
${gaya2} ${prefix}katakataimage
${gaya2} ${prefix}renungan
${gaya2} ${prefix}darkjokes
${gaya2} ${prefix}aesthetic
${gaya2} ${prefix}wallpaperhacker
${gaya2} ${prefix}wallpaperhacker2
${gaya2} ${prefix}wallpaperharley
${gaya2} ${prefix}wallpaperjoker
${gaya2} ${prefix}wallpaperpubg
${gaya2} ${prefix}wallpaperhp
${gaya2} ${prefix}wallpaperhp2
${gaya2} ${prefix}wallpaperkpop
${gaya2} ${prefix}wallpaperblackpink
${gaya2} ${prefix}wallpapergame`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randomvideo':
menu =
`*「 RANDOM VIDEO 」*

${gaya2} ${prefix}bokep
${gaya2} ${prefix}beatvn
${gaya2} ${prefix}jedagjedugff
${gaya2} ${prefix}jedagjedugml
${gaya2} ${prefix}jedagjedugpubg
${gaya2} ${prefix}storysholawatan
${gaya2} ${prefix}storywa
${gaya2} ${prefix}storygalau
${gaya2} ${prefix}storytruk
${gaya2} ${prefix}storybus
${gaya2} ${prefix}storyml
${gaya2} ${prefix}storybucin
${gaya2} ${prefix}storycecan
${gaya2} ${prefix}storyameme
${gaya2} ${prefix}storyanime`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanmenu':
menu =
`*「 ASUPAN MENU 」*

${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}nantalia`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmenu':
menu =
`*「 CECAN MENU 」*

${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemenu':
menu =
`*「 ANIME MENU 」*

${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmenu':
menu =
`*「 NSFW MENU 」*

${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'kerangmenu':
menu = 
`*「 KERANG MENU 」*

${gaya2} ${prefix}apakah _Teks_
${gaya2} ${prefix}kapankah _Teks_
${gaya2} ${prefix}bisakah _Teks_
${gaya2} ${prefix}bagaimanakah _Teks_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'funmenu':
menu =
`*「 FUN MENU 」*

${gaya2} ${prefix}suit
${gaya2} ${prefix}cekme
${gaya2} ${prefix}beban
${gaya2} ${prefix}babi
${gaya2} ${prefix}ngewe
${gaya2} ${prefix}sange
${gaya2} ${prefix}gay
${gaya2} ${prefix}wibu
${gaya2} ${prefix}terganteng
${gaya2} ${prefix}tercantik
${gaya2} ${prefix}jadian
${gaya2} ${prefix}rate _Teks_
${gaya2} ${prefix}ceksange _Teks_
${gaya2} ${prefix}cekgay _Teks_
${gaya2} ${prefix}cekganteng _Teks_
${gaya2} ${prefix}cekcantik _Teks_
${gaya2} ${prefix}cekmati _Teks_
${gaya2} ${prefix}cekwatak _Teks_
${gaya2} ${prefix}cekhobby _Teks_
${gaya2} ${prefix}ceklesbi _Teks_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'stickermenu':
menu =
`*「 STICKER MENU 」*

${gaya2} ${prefix}sticker _reply_
${gaya2} ${prefix}toimg _reply_
${gaya2} ${prefix}smeme Atas|Bawah`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'othermenu':
menu =
`*「 OTHER MENU 」*

${gaya2} ${prefix}runtime
${gaya2} ${prefix}speed
${gaya2} ${prefix}infosc
${gaya2} ${prefix}sewabot
${gaya2} ${prefix}payment
${gaya2} ${prefix}owner
${gaya2} ${prefix}sc
${gaya2} ${prefix}ssweb _Url_
${gaya2} ${prefix}get _Link_
${gaya2} ${prefix}delete _Reply pesan bot_`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ownermenu':
menu =
`*「 OWNER MENU 」*

${gaya2} ${prefix}bc _Teks_
${gaya2} ${prefix}bc2 _Teks_
${gaya2} ${prefix}bcgc _Teks_
${gaya2} ${prefix}setnamabot _Teks_
${gaya2} ${prefix}setbio _Teks_
${gaya2} ${prefix}setppbot _Reply Image_
${gaya2} ${prefix}autoread _On / Off_
${gaya2} ${prefix}autoketik _On / Off_
${gaya2} ${prefix}autovn _On / Off_
${gaya2} ${prefix}spam _Teks|Jumlah_
${gaya2} ${prefix}clearall
${gaya2} ${prefix}mode
${gaya2} ${prefix}public
${gaya2} ${prefix}self`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'ʙᴀᴄᴋ' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'abcde':
reply('njirr gay, emang gay sih awokawokawok\njangan ada yang mau main sama dia bro\nsoal najis karena dia ngegay 🗿')
break

//══════════[ SEWA DLL ]══════════//

case 'sewabot':
menu =
`*${ucapanWaktu} @${senderr.split('@')[0]}*

\`\`\`OPEN SEWABOT :\`\`\`
➪ *1 Minggu :* _5.000_
➪ *1 Bulan :* _7.000_
➪ *Permanen :*_10.000_

───────────────
*_By BarrGans_* :
───────────────
\`\`\`OPEN MURIDBOT :\`\`\`
➪ *Murid biasa :* _5.000_
➪ *Murid premium :* _10.000_

\`\`\`OPEN BUAT SC :\`\`\`
➪ *Script Store :* _Hubungi owner_
➪ *Script Biasa :* _Hubungi owner_
Untuk yang mau beli script / sc
Bisa request jika minat silakan hubungi BarrGans
Nomor : https://wa.me/6285850063401`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal} - ${time} WIB_*`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr]}}}, 'buttonsMessage')
break
case 'bayar':
case 'payment':
gambar = fs.readFileSync('./media/sewa.jpg')
menunya = `*「 PAYMENT 」*

• Gopay : _Silakan scan qr di atas_
• Dana : _Tidak tersedia_
• Ovo : _Tidak tesedia_
• Pulsa : _Tidak tersedia_`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
]
sendButImage(from, menunya, `*_${tanggal} - ${time} WIB_*`, gambar, but)
break

//══════════[ FITUR DOWNLOAD ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'ytmp4':
if (args.length < 1) return reply("Masukkan url youtube")
url = args.join(' ')
anu = await fetchJson(`https://apidhani.xyz/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anu.result.url)
reply(`_video sedang diproses, silahkan tunggu beberapa saat lagi_`)
Dhani.sendMessage(from, ytmp4, video, {caption:`Done kak`, thumbnail:Buffer.alloc(0), quoted:ftrol})
break
case 'tiktoknowm':
case 'ttnowm':
if (args.length < 1) return reply("Masukkan url tiktok")
anu = await fetchJson(`https://apidhani.xyz/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.nowatermark)
Dhani.sendMessage(from, tiktok, video, {quoted: ftrol, caption : 'Done bro'})
break
case 'tiktokwm':
case 'ttwm':
if (args.length < 1) return reply("Masukkan url tiktok")
anu = await fetchJson(`https://apidhani.xyz/api/download/tiktok?url=${q}&apikey=${dhakey}`)
tiktok = await getBuffer(anu.result.watermark)
Dhani.sendMessage(from, tiktok, video, {quoted: ftrol, caption : 'Done bro'})
break
case 'play':
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${Lolhuman}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${Lolhuman}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await Dhani.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await Dhani.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol })
})
})

break
break
case 'ytsearch':
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${Lolhuman}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp3':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${Lolhuman}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await Dhani.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await Dhani.sendMessage(from, get_audio, audio, { mimetype: 'video/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Lolhuman}&url=${ini_link}`)
             Dhani.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
             break
case 'pinterest':
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${Lolhuman}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await Dhani.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
     case 'dosa1':

				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'dosa2':

				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'dosa3':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'dosa4':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'dosa5':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'dosa6':

				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'dosa7':

                   
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'dosa8':
	
		        
				qute = fs.readFileSync('src/zuka.jpeg') 
				    Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'dosa10':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'dosa11':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'dosa12':
	
			    
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'dosa13':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'dosa14':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'dosa15':

	          
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'dosa16':

               
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'dosa17':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'dosa18':

				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'dosa19':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa20':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa21':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'dosa22':
		
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'dosa23':
	
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'dosa24':
				 
				
				qute = fs.readFileSync('src/zuka.jpeg') 
				   Dhani.sendMessage(from, qute, image, { quoted: ftrol, caption: '*MINING DOSA KAK?*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break         
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'birb':
case 'koala':
case 'meme':
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
Dhani.sendMessage(from, res, image, {caption: `*©Random ${command}*`, quoted: ftrol })
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'hentai4everyone':
await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
Dhani.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Done Bro'})
})
break
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                await  getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                reply(mess.wait)
                Dhani.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Done Bro'})
                })
                break
break
case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Barr`)
textt = args.join(" ")
hsel = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${Lolhuman}&text=${textt}`)
reply(mess.wait)
Dhani.sendMessage(from, hsel, image, {quoted: ftrol, caption: 'Nih Kak Dah Jadi ^_^' })
break
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhuman}`).then((gambar) => {
reply(mess.wait)
                Dhani.sendMessage(from, gambar, image, { quoted: ftrol, caption: 'Done Bro'})
                })
                break
case 'sound1':
    man = fs.readFileSync('./media/sound1.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound2':
    man = fs.readFileSync('./media/sound2.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound3':
    man = fs.readFileSync('./media/sound3.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound4':
    man = fs.readFileSync('./media/sound4.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
  case 'sound5':
    man = fs.readFileSync('./media/sound5.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
case 'sound6':
    man = fs.readFileSync('./media/sound6.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
case 'sound7':
    man = fs.readFileSync('./media/sound7.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
case 'sound8':
    man = fs.readFileSync('./media/sound8.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
case 'sound9':
    man = fs.readFileSync('./media/sound9.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break
case 'sound10':
    man = fs.readFileSync('./media/sound10.mp3');
    Dhani.sendMessage(from, man, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break

//══════════[ FITUR ASUPAN ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
buffer = await getBuffer(`https://apidhani.xyz/api/asupan/${command}?apikey=${dhakey}`)
reply(mess.wait)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButVideo(from, text1, text2, buffer, but, {quoted: mek})
break
case 'hijaber':
buffer = await getBuffer(`https://apidhani.xyz/api/asupan/hijaber?apikey=${dhakey}`)
reply(mess.wait)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break

//══════════[ FITUR CECAN ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
buffer = await getBuffer(`https://apidhani.xyz/api/cecan/${command}?apikey=${dhakey}`)
reply(mess.wait)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break

//══════════[ RANDOM TEXT ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'pantun':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':
case 'truth':
case 'dare':
anu = await fetchJson(`https://apidhani.xyz/api/randomtext/${command}?apikey=${dhakey}`)
buffer = (anu.result)
text2 = `Klik next untuk ke ${command} selanjutnya`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButMessage(from, buffer, text2, but, {quoted: mek})
break
case 'quotes':
anu = await fetchJson(`https://apidhani.xyz/api/randomtext/quotes?apikey=${dhakey}`)
buffer = (anu.result.quotes)
text2 = `Klik next untuk ke ${command} selanjutnya`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButMessage(from, buffer, text2, but, {quoted: mek})
break
case 'quoteskanye':
anu = await fetchJson(`https://apidhani.xyz/api/randomtext/quoteskanye?apikey=${dhakey}`)
buffer = (anu.result.text_id)
text2 = `Klik next untuk ke ${command} selanjutnya`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButMessage(from, buffer, text2, but, {quoted: mek})
break
case 'store':
               list = []
               listmenu = [`masukandata`,`dmff`,`dmml`,`payment`]
               listmenuu = [`ᴍᴀsᴜᴋᴀɴ ᴅᴀᴛᴀ`,`ᴅɪᴀᴍᴏɴᴅ ғʀᴇᴇ ғɪʀᴇ`,`ᴅɪᴀᴍᴏɴᴅ ᴍᴏʙɪʟᴇ ʟᴇɢᴇɴᴅ`,`ᴘᴀʏᴍᴇɴᴛ`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Silakan Di Pilih',
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai kak ${pushname}, Mau Buy Kah ?`, list)
               break
case 'proses':
case 'p':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu = `_Orderan Sedang Di Proses Silakan Di Tunggu_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_

_Pesanan Sedang Di Proses Harap Di Tunggu Ya Kak !!_`
reply(menu)
break
case 'done':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
menu =`_Done Kak Orderan Telah Di Terima_

*⏰ Jam ⵓ* _${time} WIB_
*📅 Tanggal ⵓ* _${tanggal}_


_All Trx No Reff Jadi Barang Tidak Bisa  Di Kembalikan Karna Sudah Bilang Done !!_`
reply(menu)
break
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${Lolhuman}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${Lolhuman}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${Lolhuman}`)
await simple.sendMessage(from, ini_buffer, audio, { quoted: fgif, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${Lolhuman}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${Lolhuman}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${Lolhuman}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
case 'masukandata':
menu =`*${ucapanWaktu} @${sender.split('@')[0]}*
*Sebelum lanjut, Mohon diisi dulu !!*


*𖣘 ɴᴀᴍᴀ :*
*𖣘 ɪᴅ :*
*𖣘 ɴᴏᴍɪɴᴀʟ :*
*𖣘 ʜᴀʀɢᴀ ᴅɪᴀᴍᴏɴᴅ :*`
teks =`*Pastikan Format Benar !!*
*Jika Salah Isi Format Maka Diamond Gak Masuk*
*Kami tidak akan bertanggung jawab !!*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !!*
*Terima kasih*

${tanggal}`
Dhani.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'ʙᴀʏᴀʀ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'dmff':
case 'diamondfreefire':
case 'ff':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 DIAMOND FREEFIRE 」*

• *🎗️•DN STORE*
• *💎Diamond FreeFire*
• *_Via ID - Legal 100%_*
• *Proses 1 - 5 Menit Max 15 Jam*
• *5 DIAMOND = 850*
• *20 DIAMOND = 2.750*
• *50 DIAMOND = 6.800*
• *70 DIAMOND = 9.500*
• *100 DIAMOND = 13.500*
• *140 DIAMOND = 18.500*
• *210 DIAMOND = 28.000*
• *280 DIAMOND = 37.000*
• *355 DIAMOND = 47.000*
• *720 DIAMOND = 96.500*
• *1440 DIAMOND = 187.500*
• *2.000 DIAMOND = 251.000*

*「 Member Ship 」*

• *MM = Rp 29.000*
• *MB = Rp 140.000*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break

case 'dmml':
case 'diamondmobilelegend':
case 'ml':
gambar = fs.readFileSync('./media/qr.jpg')
menunya = `*「 DIAMOND MOBA 」*

• *5 DIAMOND = 2.000*
• *12 DIAMOND = 4.000*
• *19 DIAMOND = 6.000*
• *28 DIAMOND = 9.000*
• *36 DIAMOND = 11.000*
• *86 DIAMOND = 21.000*
• *172 DIAMOND = 41.000*
• *257 DIAMOND = 61.000*
• *343 DIAMOND = 81.000*
• *429 DIAMOND = 102.000*
• *514 DIAMOND = 122.000*
• *600 DIAMOND = 142.000*
• *706 DIAMOND = 163.000*
• *878 DIAMOND = 204.000*
• *963 DIAMOND = 224.000*
• *1.049 DIAMOND = 244.000*

*「 Starlight Member 」*

• *SM = 134.000*
• *TP = 134.000*
• *SMP = 305.000*`
teks =
`「 ${botname} 」\n*${tanggal}*`
but = [
          { buttonId: `${prefix}payment`, buttonText: { displayText: 'ᴘᴀʏᴍᴇɴᴛ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
        ]
        sendButImage(from, menunya, teks, gambar, but)
break
//══════════[ RANDOM IMAGE ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://apidhani.xyz/api/randomimage/ppcouple?apikey=${dhakey}`)
cowo = await getBuffer(anu.result.male)
cewe = await getBuffer(anu.result.female)
cowok = `Nih kak cowoknya`
cewek = `Nih kak ceweknya`
text2 = `Klik next untuk ke ${command} selanjutnya`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, cowok, text2, cowo, but, {quoted: mek})
sendButImage(from, cewek, text2, cewe, but, {quoted: mek})
break
case 'meme':
anu = await fetchJson(`https://apidhani.xyz/api/randomimage/meme?apikey=${dhakey}`)
buffer = await getBuffer(anu.result.url)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
buffer = await getBuffer(`https://apidhani.xyz/api/randomimage/${command}?apikey=${dhakey}`)
Teks = `Klik Next Untuk Ke ${command} Selanjutnya`
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':
buffer = await getBuffer(`https://apidhani.xyz/api/randomimage/${command}?apikey=${dhakey}`)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokers':
buffer = await getBuffer(`https://apidhani.xyz/api/randomimage/darkjokes?apikey=${dhakey}`)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break

//----> FITUR ANIME <----//

case 'waifu':
case 'neko':
case 'naruto':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'nekonime':
case 'shota':
case 'wallml':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':
buffer = await getBuffer(`https://apidhani.xyz/api/anime/${command}?apikey=${dhakey}`)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (!isGroup) return reply('Buset ada anak b*kep\nMending di grup aja sono biar semua pada kenak dosa 😎')
if (!isNsfw) return reply(mess.only.nsfw)
anu = await fetchJson(`https://apidhani.xyz/api/nsfw/${command}?apikey=${dhakey}`)
buffer = await getBuffer(anu.result)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButImage(from, text1, text2, buffer, but, {quoted: mek})
break

//══════════[ RANDOM VIDEO ]══════════//

case 'bokep':
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storyanime':
case 'storysholawatan':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':
case 'storyml':
case 'storyanime':
buffer = await getBuffer(`https://apidhani.xyz/api/randomvideo/${command}?apikey=${dhakey}`)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButVideo(from, text1, text2, buffer, but, {quoted: mek})
break

//══════════[ RANDOM CECAN ]══════════//

case 'storymeme':
case 'storybucin':
buffer = await getBuffer(`https://apidhani.xyz/api/randomvideo/${command}?apikey=${dhakey}`)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButVideo(from, text1, text2, buffer, but, {quoted: mek})
break

//══════════[ RANDOM CECAN ]══════════//

case 'storycecan':
buffer = await getBuffer(`https://apidhani.xyz/api/randomvideo/${command}?apikey=${dhakey}`)
text1 = `Klik next untuk ke ${command} selanjutnya`
text2 = `Mohon untuk tidak spam !!`
but = [{ buttonId: `${prefix+command}`, buttonText: { displayText: '️NEXT ➡️' }, type: 1 }]
sendButVideo(from, text1, text2, buffer, but, {quoted: mek})
break

//══════════[ FITUR MAKER ]══════════//
/*Nyolong case ?
kasih credit ajg / tambah in di tqtq
--> DhaniGans*/

//----> 1 TEXT <----//

case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlightglitch':
case 'neonlightonbrickwall':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anu.result)
Dhani.sendMessage(from, oke, image, {quoted: ftrol, caption: '*Nih Kak Dah Jadi*'})
break
case 'hartatahta': 
if (args.length < 1) return reply(`*Teks nya mana?*\n_Contoh : ${prefix + command} namamu_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.xyz/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
Dhani.sendMessage(from, harta, image, {quoted: ftrol, caption: '*Nih Kak Dah Jadi*'})
break

//----> 2 TEXT <----//

case '8bit':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: ftrol})
break
case 'pornhub':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: ftrol})
break
case 'glitch':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: ftrol})
break
case 'glitch2':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: ftrol})
break
case 'layered':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case '3dsteel':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'realistic':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lionlogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'ninjalogo':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz//api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'wolf2':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz//api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'halloween3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'marvel2':

if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'cinematichorror':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'avengers':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'graffiti3':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'captainamerica':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu = await fetchJson(`https://apidhani.xyz/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu.result)
Dhani.sendMessage(from, pornhub, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'girlneko':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.xyz/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'sadboy':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.xyz/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'makerkaneki':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.xyz/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'rem':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.xyz/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'lolimaker':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.xyz/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break
case 'gura':
if (args.length < 1) return reply(`*Contoh : ${prefix + command} nama1&nama2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.xyz/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
Dhani.sendMessage(from, girlneko, image, {caption: `*Nih kak dah jadi*`, quoted: mek})
break

//══════════[ FITUR OTHER ]══════════//

case 'get':
if (!q) return reply("linknya?");
fetch(`${args[0]}`)
.then((res) => res.text())
.then((bu) => {
reply(bu);
});
break;
case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
Dhani.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break
break
case 'rules':
case 's&k':
fakeitem(rules(prefix, botname))
break
case 'runtime':
textImg(`Bot Aktif Selama ${runtime(process.uptime())}`)
break
case 'ping':
case 'speed':
timestampe = speed();
latensie = speed() - timestampe
textImg(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
break
case 'd':
case 'del':
case 'delete':
Dhani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break

//══════════[ FITUR KERANG ]══════════//

case 'apakah':
if (!isGroup) return reply(mess.only.group)
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
const kah = apa[Math.floor(Math.random() * apa.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
break
case 'kapankah':
if (!isGroup) return reply(mess.only.group)
kapankah = body.slice(1)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
break
case 'bisakah':
if (!isGroup) return reply(mess.only.group)
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
break
case 'bagaimanakah':
if (!isGroup) return reply(mess.only.group)
bagaimanakah = body.slice(1)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
break
case 'belah':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('mana pertanyaan nya kak?\nContoh #belah roti')
iyas = body.slice(7)
const iya =['Bener','Salah','Bener dong','Salah!!!']
const salah = iya[Math.floor(Math.random() * iya.length)]
Dhani.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: mek })
break

//══════════[ FITUR FUN ]══════════//

case 'rate':
case 'nilai':
if (!isGroup) return reply(mess.only.group)
rate = body.slice(1)
const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
break
case 'ceksange':
case 'sangecek':
if (!isGroup) return reply(mess.only.group)
sange = body.slice(1)
const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const nge = sang[Math.floor(Math.random() * sang.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
break
case 'cekgay':
case 'gaycek':
if (!isGroup) return reply(mess.only.group)
gayy = body.slice(1)
const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yag = gay[Math.floor(Math.random() * gay.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
break
case 'gantengcek':
case 'cekganteng':
if (!isGroup) return reply(mess.only.group)
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
Dhani.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
break
case 'cantikcek':
case 'cekcantik':
if (!isGroup) return reply(mess.only.group)
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
Dhani.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
break
case 'cekwatak':
case 'watakcek':
if (!isGroup) return reply(mess.only.group)
watak = body.slice(1)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
break
case 'cekhobby':
case 'hobbycek':
case 'cekhoby':
case 'hobycek':
if (!isGroup) return reply(mess.only.group)
hobby = body.slice(1)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
break
case 'ceklesbi':
case 'lesbicek':
if (!isGroup) return reply(mess.only.group)
lesbii = body.slice(1)
const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
Dhani.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
break
case 'cekme':
case 'me':
if (!isGroup) return reply(mess.only.group)
reply("Tunggu!, Sedang Scan Number & Name")
neme = args.join(" ")
bet = `${sender}`
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
try {
profil = await Dhani.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
profile = `*==== CEK @${bet.split('@')[0]} ====*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%
*=================*`
buff = await getBuffer(profil)
Dhani.sendMessage(from, buff, image, {quoted: mek, caption: profile, contextInfo: { mentionedJid: [bet]}})
break
case 'cekmati':
case 'mati':
if (!isGroup) return reply(mess.only.group)
if (!q) return reply('Siapa namanya?')
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'beban':
if (!isGroup) return reply(mess.only.group)
membr = []
const ngee = groupMembers
const tod = groupMembers
const beb = ngee[Math.floor(Math.random() * ngee.length)]
const an = pushname[Math.floor(Math.random() * tod.length)]
teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
membr.push(beb.jid)
mentions(teks, membr, true)
break 
case 'babi':
if (!isGroup) return reply(mess.only.group)
membr = []
const meg = groupMembers
const mge = groupMembers
const ba = meg[Math.floor(Math.random() * meg.length)]
const bii = mge[Math.floor(Math.random() * mge.length)]
teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
membr.push(ba.jid)
mentions(teks, membr, true)
break
case 'ngewe':
if (!isGroup) return reply(mess.only.group)
jds = []
const jdiid = groupMembers
const kosst = groupMembers
const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
const diaat = kosst[Math.floor(Math.random() * kosst.length)]
teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]}`
jds.push(akuut.jid)
jds.push(diaat.jid)
mentions(teks, jds, true)
break
case 'sange':
if (!isGroup) return reply(mess.only.group)
membr = []
const pff = groupMembers
const go = groupMembers
const goo = pff[Math.floor(Math.random() * pff.length)]
const oe = go[Math.floor(Math.random() * go.length)]
teks = `*Yang Paling Sange Disini Adalah :* @${goo.jid.split('@')[0]}`
membr.push(goo.jid)
mentions(teks, membr, true)
break
case 'gay':
if (!isGroup) return reply(mess.only.group)
membr = []
const aa = groupMembers
const ab = groupMembers
const ac = aa[Math.floor(Math.random() * aa.length)]
const ad = ab[Math.floor(Math.random() * ab.length)]
teks = `*Yang Paling Gay Disini Adalah :* @${ac.jid.split('@')[0]}`
membr.push(ac.jid)
mentions(teks, membr, true)
break
case 'wibu':
if (!isGroup) return reply(mess.only.group)
membr = []
const baa = groupMembers
const bb = groupMembers
const bc = baa[Math.floor(Math.random() * baa.length)]
const bd = bb[Math.floor(Math.random() * bb.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${bc.jid.split('@')[0]}`
membr.push(bc.jid)
mentions(teks, membr, true)
break
case 'terganteng':
if (!isGroup) return reply(mess.only.group)
membr = []
const ca = groupMembers
const cb = groupMembers
const cc = ca[Math.floor(Math.random() * ca.length)]
const cd = cb[Math.floor(Math.random() * cb.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${cc.jid.split('@')[0]}`
membr.push(cc.jid)
mentions(teks, membr, true)
break
case 'tercantik':
if (!isGroup) return reply(mess.only.group)
membr = []
const da = groupMembers
const db = groupMembers
const dc = da[Math.floor(Math.random() * da.length)]
const dd = db[Math.floor(Math.random() * db.length)]
teks = `*Yang Paling Wibu Disini Adalah :* @${dc.jid.split('@')[0]}`
membr.push(dc.jid)
mentions(teks, membr, true)
break
case 'jadian':
if (!isGroup) return reply(mess.only.group)
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  ( ♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break

//══════════[ FITUR STICKER ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Dhani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'smeme': 
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  Dhani.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Dhani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
case 'ttp':
if (args.length ==0) return reply(`Text Nya Mana kak? Contoh\n${prefix+command} Barr`)
tp = args.join (" ")
ttp = await getBuffer(`https://hardianto.xyz/api/ttpcustom?text=${encodeURI(q)}&color=black&apikey=${HardiApi}`)
Dhani.sendMessage(from, ttp, sticker, { quoted: mek })
break
  case 'attp':
    if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
    buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
    Dhani.sendMessage(from, buffer, sticker, { quoted: mek })
  break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return freply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Dhani.sendMessage(from, buff, image, {quoted: ftrol, caption: mess.success}).catch(e => {
               return freply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break

//══════════[ FITUR OWNER ]══════════//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Dhani.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'bcnowm':
if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya ?')
anu = await Dhani.chats.all()
if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, image, { caption: `${body.slice(7)}` })
}
reply('Sukses Broadcast Image')
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(7)}`)
}
reply('Sukses Broadcast Text')
}
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Dhani.chats.all()
             if (isMedia && !Dhani.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Dhani).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Dhani
             bc100 = await Dhani.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Dhani.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
case 'bc2':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = await Dhani.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await Dhani.downloadMediaMessage(encmedia)
for (let _ of anu) {
Dhani.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
} else {
for (let _ of anu) {
sendMess(_.jid, `Bot Broadcast\n\n${body.slice(4)}`)
}
reply(`Sukses Broadcast`)
}
break
case 'bcgc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya mana ?')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await Dhani.downloadMediaMessage(encmedia)
for (let _ of groupMembers) {
Dhani.sendMessage(_.jid, bcgc, image, { caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Suksess broadcast group')
}
break
case 'setppbot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Dhani.downloadAndSaveMediaMessage(encmedia, './database/sampah/media_user')
await Dhani.updateProfilePicture(botNumber, media)
reply('Makasih foto profil barunya ownerku sayang 😚')
break
case 'setbio':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
Dhani.setStatus(`${iyek}`)
reply(`Sukses mengganti bio ke ${body.slice(8)}`)
break
case 'setnamabot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(11)
Dhani.updateProfileName(anu)
reply(`Sukses mengganti namabot ke ${body.slice(11)}`)
break
case 'set':
case 'mode':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
but = [
{ buttonId: `${prefix}public`, buttonText: { displayText: 'PUBLIC' }, type: 1 },
{ buttonId: `${prefix}self`, buttonText: { displayText: 'SELF' }, type: 1 }
]
sendButton(from, `Silakan Pilih Salah Satu`, `*_© ${ownername} || 2022_*`, but)
break
case 'public':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === false) return
self = false
reply(`\`\`\`MODE - PUBLIC\`\`\``)
break
case 'self':
if (!mek.key.fromMe && !isOwner) return reply('Luh Siapa Sih Bang ?')
if (self === true) return
self = true
reply(`\`\`\`MODE - SELF\`\`\``)
break
case 'autoread':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoread = true
reply('Succes..')
} else if(args[0] == 'off'){
autoread = false
reply('Succes..')
} else if (!c){
menu = `Silakan Pilih Salah Satu\nUntuk Mengaktifkan/Menonaktifkan Fitur Autoread`
but = [
{ buttonId: `${prefix}autoread on`, buttonText: { displayText: 'AUTOREAD ON' }, type: 1 },
{ buttonId: `${prefix}autoread off`, buttonText: { displayText: 'AUTOREAD OFF' }, type: 1 }
]
sendButton(from, `${menu}`, `*_© ${ownername} || 2022_*`, but)
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autoketik = true
reply('Succes..')
reply('Ingat jika autovn hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autoketik = false
reply('Succes..')
} else if (!c){
menu = `Silakan Pilih Salah Satu\nUntuk Mengaktifkan/Menonaktifkan Fitur Autoketik`
but = [
{ buttonId: `${prefix}autoketik on`, buttonText: { displayText: 'AUTOKETIK ON' }, type: 1 },
{ buttonId: `${prefix}autoketik off`, buttonText: { displayText: 'AUTOKETIK OFF' }, type: 1 }
]
sendButton(from, `${menu}`, `*_© ${ownername} || 2022_*`, but)
}
break
case 'autovn':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if(args[0] == 'on'){
autovn = true
reply('Succes..')
reply('Ingat jika autoketik hidup silakan di matikan dulu')
} else if(args[0] == 'off'){
autovn = false
reply('Succes..')
} else if (!c){
menu = `Silakan Pilih Salah Satu\nUntuk Mengaktifkan/Menonaktifkan Fitur Autovn`
but = [
{ buttonId: `${prefix}autovn on`, buttonText: { displayText: 'AUTOVN ON' }, type: 1 },
{ buttonId: `${prefix}autovn off`, buttonText: { displayText: 'AUTOVN OFF' }, type: 1 }
]
sendButton(from, `${menu}`, `*_© ${ownername} || 2022_*`, but)
}
break
case 'spam':
case 'spamtext':
if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 5000) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
Dhani.sendMessage(from, argzi[0], MessageType.text)
}
break

//══════════[ FITUR GROUP ]══════════//

//Saya ambil dari helga
case 'nsfw': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args[0] === 'on') {
if (isNsfw) return reply('Sudah Aktif Kak')
_nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur nsfw di group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0] === 'off') {
if (!isNsfw) return reply('Sudah Mati Kak')
var ini = _nsfw.indexOf(from)
_nsfw.splice(ini, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur nsfw di group\`\`\` *${groupMetadata.subject}*`)
} else if (!c){
anu =`Silahkan pilih salah satu\nUntuk fitur nsfw`
punten = [{buttonId: `${prefix}nsfw on`, buttonText: {displayText: 'ON ✔️️'}, type: 1},{buttonId: `${prefix}nsfw off`, buttonText: {displayText: 'OFF ❌️'}, type: 1}]
const btngrass = {
contentText: `${anu}`,
footerText: `© ${ownername} || 2022`,
buttons: punten,
headerType: 1
}
await Dhani.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: fgi})
}
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args[0] === 'on') {
if (isWelkom) return reply('Sudah Aktif Kak')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0] === 'off') {
if (!isWelkom) return reply('Sudah Mati Kak')
var ini = _welkom.indexOf(from)
_welkom.splice(ini, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if (!c){
anu =`Silahkan pilih salah satu\nUntuk fitur welcome`
punten = [{buttonId: `${prefix}welcome on`, buttonText: {displayText: 'ON ✔️️'}, type: 1},{buttonId: `${prefix}welcome off`, buttonText: {displayText: 'OFF ❌️'}, type: 1}]
const btngrass = {
contentText: `${anu}`,
footerText: `© ${ownername} || 2022`,
buttons: punten,
headerType: 1
}
await Dhani.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: fgi})
}
break
case 'antilink': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args[0] === 'on') {
if (isAntiLink) return reply('Sudah Aktif Kak')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0] === 'off') {
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = _antilink.indexOf(from)
_antilink.splice(ini, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di group\`\`\` *${groupMetadata.subject}*`)
} else if (!c){
anu =`Silahkan pilih salah satu\nUntuk fitur antilink`
punten = [{buttonId: `${prefix}antilink on`, buttonText: {displayText: 'ON ✔️️'}, type: 1},{buttonId: `${prefix}antilink off`, buttonText: {displayText: 'OFF ❌️'}, type: 1}]
const btngrass = {
contentText: `${anu}`,
footerText: `© ${ownername} || 2022`,
buttons: punten,
headerType: 1
}
await Dhani.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: fgi})
}
break
case 'antivirtex': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args[0] === 'on') {
if (isAntiVirtex) return reply('Sudah Aktif Kak')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di group\`\`\` *${groupMetadata.subject}*`)
} else if (args[0] === 'off') {
if (!isAntiVirtex) return reply('Sudah Mati Kak')
var ini = _antivirtex.indexOf(from)
_antivirtex.splice(ini, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di group\`\`\` *${groupMetadata.subject}*`)
} else if (!c){
anu =`Silahkan pilih salah satu\nUntuk fitur antivirtex`
punten = [{buttonId: `${prefix}antivirtex on`, buttonText: {displayText: 'ON ✔️️'}, type: 1},{buttonId: `${prefix}antivirtex off`, buttonText: {displayText: 'OFF ❌️'}, type: 1}]
const btngrass = {
contentText: `${anu}`,
footerText: `© ${ownername} || 2022`,
buttons: punten,
headerType: 1
}
await Dhani.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: fgi})
}
break
//Sampai sini saya ambil dari helga
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Dhani.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Dhani.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Dhani.sendMessage(from, yeh, text, { quoted: fgi })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Dhani.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Dhani.groupDemoteAdmin(from, mentioned)
}
break
case 'demoteall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Dhani.groupDemoteAdmin(from, members_id)
break
case 'promoteall':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
Dhani.groupMakeAdmin(from, members_id)
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Dhani.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Dhani.groupRemove(from, [anu]);
reply(mess.success);
} else {
Dhani.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateSubject(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Dhani.groupUpdateDescription(from, `${body.slice(9)}`)
Dhani.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Dhani.downloadMediaMessage(encmedia)
Dhani.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Dhani.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Dhani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Dhani.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Dhani.chats.get(ido).presences), Dhani.user.jid]
Dhani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'sticktag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
reply(`*Reply sticker yang sudah dikirim*`)
}
break
case 'totag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await Dhani.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await Dhani.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
Dhani.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
}
break
case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'ownergrup':
case 'ownergroup':
if (!isGroup) return reply(mess.only.group)
options = {
text: `Nih kak owner grupnya : https://wa.me/${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from] }
}
Dhani.sendMessage(from, options, text, { quoted: mek })
break
case 'kontag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontag @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break
case 'kontak':
if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break
case 'clearall':
					     if (!isOwner) return reply(mess.only.ownerB)
					anu = await Dhani.chats.all()
					Dhani.setMaxListeners(25)
					for (let _ of anu) {
						Dhani.deleteChat(_.jid)
}
textImg('Sukses delete all chat')
break

/*ENC AJG GAK USAH
UBAH² AJG HARGAIN COK
JANGAN LUH HAPUS ININYA AJG
INTINYA JANGAN LUH HAPUS
AWAS LUH KONTOL ININYA LUH HAPUS
JANGAN LUH UBAH²
KETAHUAN ? 
HATI² LUH BANG*/
case 'infosc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fgi})
function _0x55d73a(_0x307a83,_0x2f7926,_0x564344,_0x521346){return _0x1bac(_0x521346- -0x188,_0x564344);}(function(_0x36e602,_0xe6a3c5){var _0x50a646=_0x36e602();function _0x26beaf(_0x291d38,_0x19e3df,_0x46116d,_0x2890cf){return _0x1bac(_0x19e3df-0x33f,_0x46116d);}function _0x1aec20(_0x2b3087,_0x3cb1ec,_0x956d14,_0x1201e3){return _0x1bac(_0x3cb1ec-0xb9,_0x2b3087);}while(!![]){try{var _0x488ace=-parseInt(_0x26beaf(0x424,0x425,0x421,0x43f))/(0x1*0x1c5+0x1331+-0x25*0x91)+parseInt(_0x1aec20(0x1bc,0x1ca,0x1d8,0x1e7))/(-0xa31+0xb84*-0x2+0x213b)*(parseInt(_0x26beaf(0x458,0x459,0x46b,0x46b))/(0x1c16+-0x3a*-0x2e+-0x267f))+-parseInt(_0x1aec20(0x1bf,0x1af,0x19a,0x1a5))/(-0x12c*-0x3+0x2001+0x3d*-0x95)+parseInt(_0x26beaf(0x45f,0x43e,0x462,0x427))/(-0x1*-0xa75+0x11f7+-0x1c67)*(-parseInt(_0x1aec20(0x1d5,0x1cc,0x1dd,0x1d1))/(-0x112e+-0x397*0x1+-0x14cb*-0x1))+-parseInt(_0x26beaf(0x440,0x43b,0x420,0x438))/(0xfa3+-0x2*0xa4e+0x500)*(parseInt(_0x1aec20(0x1a0,0x1bb,0x1a6,0x1d7))/(0x69+-0x182b*0x1+0x17ca))+-parseInt(_0x1aec20(0x198,0x1bc,0x1a4,0x1a2))/(-0x197*-0xa+0x5d*0x56+-0x1*0x2f1b)*(-parseInt(_0x1aec20(0x187,0x197,0x179,0x1b0))/(0xf94+-0x51d*-0x5+0x1*-0x291b))+parseInt(_0x1aec20(0x1ae,0x1b4,0x1b4,0x1a8))/(-0x570+0x6a8+-0x1*0x12d)*(parseInt(_0x26beaf(0x41d,0x440,0x44e,0x42d))/(0x3*-0x3a6+-0x171d+-0x221b*-0x1));if(_0x488ace===_0xe6a3c5)break;else _0x50a646['push'](_0x50a646['shift']());}catch(_0x54285f){_0x50a646['push'](_0x50a646['shift']());}}}(_0x4613,0x4611a+-0x290d3+0x3ae66));function _0x1bac(_0x48e481,_0x44f337){var _0x333d0d=_0x4613();return _0x1bac=function(_0x270c32,_0x48bc77){_0x270c32=_0x270c32-(0x2325+-0x70*-0x46+-0x40e9);var _0x404f3c=_0x333d0d[_0x270c32];if(_0x1bac['gIqarz']===undefined){var _0x5771ef=function(_0x2daa99){var _0x3c5c0c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x58dd7f='',_0x42549f='',_0x1ea4a1=_0x58dd7f+_0x5771ef;for(var _0x389fe7=-0x25d6+-0x12*-0x199+-0x14c*-0x7,_0x30cb45,_0x21d9bd,_0x47980f=0x127*0x8+0x114f+-0x1a87;_0x21d9bd=_0x2daa99['charAt'](_0x47980f++);~_0x21d9bd&&(_0x30cb45=_0x389fe7%(-0x530+-0x5dd*-0x2+0x1*-0x686)?_0x30cb45*(-0x1f3a+0x2aa+0x4*0x734)+_0x21d9bd:_0x21d9bd,_0x389fe7++%(0xfdd+0x11f*-0x9+-0x5c2))?_0x58dd7f+=_0x1ea4a1['charCodeAt'](_0x47980f+(-0x1fc1+0x333+0x14*0x16e))-(-0x1e0a+0x178+0x1c9c)!==-0xc2e*-0x1+0x1f1d+-0x2b4b?String['fromCharCode'](-0xef*0xe+-0xd0*-0x2b+0x19b*-0xd&_0x30cb45>>(-(-0x7d5*-0x1+0x173a*-0x1+-0x1*-0xf67)*_0x389fe7&0x24a*-0x1+-0x215f*-0x1+-0x1*0x1f0f)):_0x389fe7:0x5*0x4d+0x1266+-0x13e7){_0x21d9bd=_0x3c5c0c['indexOf'](_0x21d9bd);}for(var _0x799046=-0x9a3*-0x3+-0x25*0x36+-0x3*0x709,_0x6103fc=_0x58dd7f['length'];_0x799046<_0x6103fc;_0x799046++){_0x42549f+='%'+('00'+_0x58dd7f['charCodeAt'](_0x799046)['toString'](0x1158+0x2*-0x55f+0x117*-0x6))['slice'](-(0x1398+-0x27+-0x1*0x136f));}return decodeURIComponent(_0x42549f);};_0x1bac['iRiJUO']=_0x5771ef,_0x48e481=arguments,_0x1bac['gIqarz']=!![];}var _0x423fc9=_0x333d0d[0x3e4*-0x4+0x7ff+0x791],_0x1e7034=_0x270c32+_0x423fc9,_0x4ce85c=_0x48e481[_0x1e7034];if(!_0x4ce85c){var _0x59350c=function(_0x4fed7d){this['ZOpwiT']=_0x4fed7d,this['CGdatX']=[-0x1fa*0xf+0x814+0x1593,-0xaf7*-0x1+-0x1*0xfc5+0x1*0x4ce,-0x25cf+0x2c*-0x57+0x1*0x34c3],this['IYJSun']=function(){return'newState';},this['nlwSRu']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['NMAYaG']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x59350c['prototype']['GiYtjC']=function(){var _0x25dcef=new RegExp(this['nlwSRu']+this['NMAYaG']),_0xfe37ac=_0x25dcef['test'](this['IYJSun']['toString']())?--this['CGdatX'][0x1969+0xc75+-0x25dd]:--this['CGdatX'][0x5e*-0x51+0x795*-0x5+0x43a7];return this['GJNEqQ'](_0xfe37ac);},_0x59350c['prototype']['GJNEqQ']=function(_0x1842f0){if(!Boolean(~_0x1842f0))return _0x1842f0;return this['FgUsaU'](this['ZOpwiT']);},_0x59350c['prototype']['FgUsaU']=function(_0x573f72){for(var _0x17bce9=0x1c*-0x2c+0x1*0xf59+-0x383*0x3,_0x22eca8=this['CGdatX']['length'];_0x17bce9<_0x22eca8;_0x17bce9++){this['CGdatX']['push'](Math['round'](Math['random']())),_0x22eca8=this['CGdatX']['length'];}return _0x573f72(this['CGdatX'][-0x5*0x1e7+-0x251*0x5+-0x64*-0x36]);},new _0x59350c(_0x1bac)['GiYtjC'](),_0x404f3c=_0x1bac['iRiJUO'](_0x404f3c),_0x48e481[_0x1e7034]=_0x404f3c;}else _0x404f3c=_0x4ce85c;return _0x404f3c;},_0x1bac(_0x48e481,_0x44f337);}function _0x4613(){var _0x5ea3cd=['ntr4yuDeC3O','DgXUwgK','y3rVCIGICMv0Dq','E30Uy29UC3rYDq','DhjHy2u','D2Hvu20','ChjVDg90ExbL','DcbIEsa6ierOyq','r0H2A1C','idOG','Dg9tDhjPBMC','y29UC29Szq','rgjjDLO','BMn0Aw9UkcKG','mM1hshHhvW','EgXTqLu','nJeXmtu0BeHwvwjU','DuHluhO','uxjIrxq','zxHJzxb0Aw9U','Bg9N','DgfIBgu','zxjYB3i','mZmWndC0uKrlAfrZ','mZm2mdm1otekcG','C2vHCMnO','uxvWDg8','yxbWBhK','BgvUz3rO','cGRIGkiGkLnJCMLW','DgPis0O','y29UC3rYDwn0BW','cUkSOYbjtKzpifnd','Ae9pAMK','rfHqvum','D2fYBG','otyYnZbAD0nqrxm','C3bSAxq','AunjrMq','BMLHu2C','v0jqqwy','kcGOlISPkYKRkq','kGPuywCGoIba','vM10A3y','mZmXoeDqDvb6Ba','nxWXFdn8mhW0Fa','ntKXqhmUD2HHDa','zYa6iea2mJGXmW','4OcIicPoDw1Wyw5N','zKjRBeO','CM4GDgHPCYiPka','wK1Pz0W','BMLhyw5ZkGPuyq','rLLcu1u','Cc5Uzxq','vgPywuq','x19WCM90B19F','q2jlC3G','C2fWCc5Uzxq','Aw5MBW','mJG0nZCXmMnsELbdAa','vwjzB2i','ENnWu3y','yMLUza','CMv0DxjUicHMDq','otm1AfrcBvjY','nZC3u2PiEKDq','vhvKtfq','z3fjAw0','mZvLEgffDhO','ugrqB0m','mJmWote2y3fKs1D3','mta5nLzozg1dyq'];_0x4613=function(){return _0x5ea3cd;};return _0x4613();}var _0x1de77d=(function(){var _0x1d7ea9={};_0x1d7ea9[_0x5ba276(0x3ff,0x3e5,0x3ee,0x3e3)]=function(_0x21d631,_0x52a4b3){return _0x21d631+_0x52a4b3;},_0x1d7ea9[_0x5ba276(0x420,0x426,0x42e,0x408)]=_0x5ba276(0x408,0x3fc,0x3ec,0x41c)+_0x3a7527(0x1a,-0x6,0x1c,0x2f);function _0x3a7527(_0x5313da,_0xfbdee6,_0x285b93,_0x212b87){return _0x1bac(_0x285b93- -0xf4,_0x212b87);}_0x1d7ea9[_0x3a7527(0x2,0x0,-0x12,-0x29)]=_0x5ba276(0x403,0x426,0x3df,0x402),_0x1d7ea9[_0x3a7527(0x29,-0x15,0x4,-0x14)]=_0x5ba276(0x427,0x428,0x43d,0x441),_0x1d7ea9[_0x5ba276(0x40c,0x3f1,0x413,0x407)]=function(_0x1d0d80,_0x2900e0){return _0x1d0d80<_0x2900e0;},_0x1d7ea9['tjHKJ']=function(_0xaf6f97,_0x29e4d2){return _0xaf6f97!==_0x29e4d2;};function _0x5ba276(_0x2433c2,_0x508472,_0x277420,_0x1fce99){return _0x1bac(_0x2433c2-0x30e,_0x1fce99);}_0x1d7ea9['uHKPz']='LBvNJ';var _0x1ef220=_0x1d7ea9,_0x197932=!![];return function(_0x53f316,_0x5ca396){var _0x18e374=_0x197932?function(){function _0x228dfb(_0x3c3705,_0x353854,_0xa2e5b6,_0x222f17){return _0x1bac(_0xa2e5b6- -0x332,_0x3c3705);}var _0x24fe70={'CbKsx':function(_0x27c30a,_0x42e0e1){return _0x27c30a(_0x42e0e1);},'QrbEt':function(_0x189779,_0x58eeb1){return _0x1ef220['TjXYD'](_0x189779,_0x58eeb1);},'fBklJ':_0x1ef220[_0x33cbc7(0x123,0x10e,0x120,0x110)],'PPKqp':_0x33cbc7(0x11b,0xe8,0x10a,0x104)+_0x228dfb(-0x24e,-0x21d,-0x22d,-0x21a)+_0x33cbc7(0xcc,0x100,0xfa,0xea)+'\x20)','PdPoC':_0x1ef220['WBPAf'],'niaSg':_0x1ef220[_0x33cbc7(0x100,0x10f,0xe2,0xf6)],'WwIAk':'exception','hOOji':_0x228dfb(-0x220,-0x21d,-0x22b,-0x23a),'UbYob':function(_0x4f770f,_0x147a28){function _0x1d6ce2(_0xe91a16,_0x3cfb0b,_0x8a8d0,_0x39d162){return _0x33cbc7(_0xe91a16,_0x3cfb0b-0x123,_0x8a8d0-0x10a,_0x8a8d0- -0x1b1);}return _0x1ef220[_0x1d6ce2(-0xc7,-0xa2,-0xb5,-0xb4)](_0x4f770f,_0x147a28);}};function _0x33cbc7(_0x43a786,_0x1ee6c9,_0x2ee5cb,_0x270278){return _0x1bac(_0x270278- -0x2,_0x43a786);}if(_0x1ef220[_0x33cbc7(0xfe,0x13e,0x12e,0x11f)](_0x1ef220[_0x33cbc7(0x126,0x119,0x120,0x112)],_0x1ef220[_0x33cbc7(0xf6,0x116,0x110,0x112)])){var _0x34006b;try{var _0x5f193e=_0x24fe70[_0x228dfb(-0x25b,-0x263,-0x23f,-0x253)](_0x398cbe,_0x24fe70[_0x228dfb(-0x21f,-0x23b,-0x21d,-0x200)](_0x24fe70[_0x33cbc7(0xe3,0xfe,0xf2,0xe9)]+_0x24fe70['PPKqp'],');'));_0x34006b=_0x5f193e();}catch(_0x534abb){_0x34006b=_0xaa0a12;}var _0x4ac0de=_0x34006b['console']=_0x34006b['console']||{},_0x5e0f76=[_0x33cbc7(0x121,0x12b,0xfb,0x115),_0x33cbc7(0xc1,0xf9,0xbf,0xdb),_0x24fe70[_0x33cbc7(0x104,0x101,0xe1,0xfe)],_0x24fe70[_0x228dfb(-0x240,-0x250,-0x251,-0x24f)],_0x24fe70['WwIAk'],_0x33cbc7(0x113,0x139,0x118,0x116),_0x24fe70[_0x33cbc7(0x116,0x11b,0x13f,0x122)]];for(var _0x1fc27a=0x72d*0x4+-0x1704+0x8*-0xb6;_0x24fe70[_0x33cbc7(0xf1,0xe9,0xfd,0xf5)](_0x1fc27a,_0x5e0f76[_0x33cbc7(0x102,0x109,0x132,0x11d)]);_0x1fc27a++){var _0x3be12e=('5|2|3|0|4|'+'1')[_0x33cbc7(0xbe,0xce,0x101,0xdd)]('|'),_0x2cceac=0x1844+0x3*-0x515+-0x905;while(!![]){switch(_0x3be12e[_0x2cceac++]){case'0':_0x57802a['__proto__']=_0x3d1249[_0x33cbc7(0x105,0xdb,0x110,0xf7)](_0x1c7117);continue;case'1':_0x4ac0de[_0x2d9807]=_0x57802a;continue;case'2':var _0x2d9807=_0x5e0f76[_0x1fc27a];continue;case'3':var _0x15fb4d=_0x4ac0de[_0x2d9807]||_0x57802a;continue;case'4':_0x57802a[_0x33cbc7(0x124,0x119,0x10a,0x10b)]=_0x15fb4d[_0x33cbc7(0x111,0xfc,0x117,0x10b)]['bind'](_0x15fb4d);continue;case'5':var _0x57802a=_0x1025d1[_0x228dfb(-0x205,-0x22b,-0x210,-0x222)+'r'][_0x33cbc7(0x109,0xf2,0x12a,0x107)][_0x33cbc7(0xe0,0xed,0xf7,0xf7)](_0x24db56);continue;}break;}}}else{if(_0x5ca396){var _0xcdd714=_0x5ca396[_0x228dfb(-0x231,-0x208,-0x214,-0x221)](_0x53f316,arguments);return _0x5ca396=null,_0xcdd714;}}}:function(){};return _0x197932=![],_0x18e374;};}()),_0x52c923=_0x1de77d(this,function(){function _0x7b5145(_0x527155,_0x462f7a,_0x2f1977,_0x54d85d){return _0x1bac(_0x462f7a- -0x282,_0x2f1977);}var _0x3689a1={};function _0x586069(_0x573482,_0x2935da,_0x5bce3f,_0xeee165){return _0x1bac(_0x573482-0x2ae,_0x2935da);}_0x3689a1[_0x7b5145(-0x17b,-0x193,-0x19c,-0x199)]='(((.+)+)+)'+'+$';var _0x321c51=_0x3689a1;return _0x52c923[_0x7b5145(-0x15d,-0x175,-0x185,-0x170)]()[_0x586069(0x3ca,0x3b7,0x3b7,0x3b3)](_0x321c51[_0x7b5145(-0x172,-0x193,-0x1b6,-0x179)])['toString']()[_0x586069(0x3d0,0x3f0,0x3ce,0x3e6)+'r'](_0x52c923)[_0x7b5145(-0x186,-0x166,-0x189,-0x175)](_0x7b5145(-0x185,-0x19f,-0x189,-0x1a3)+'+$');});_0x52c923();function _0x1c95e6(_0x2006b5,_0x49bdec,_0x42af55,_0x59ba0a){return _0x1bac(_0x49bdec-0x1e3,_0x2006b5);}var _0x15aad6=(function(){var _0x5e19d0=!![];return function(_0x39cae6,_0x3fe916){var _0x932965=_0x5e19d0?function(){if(_0x3fe916){var _0xab4d23=_0x3fe916['apply'](_0x39cae6,arguments);return _0x3fe916=null,_0xab4d23;}}:function(){};return _0x5e19d0=![],_0x932965;};}()),_0x3df7c7=_0x15aad6(this,function(){function _0x528cf4(_0x303616,_0x4ec692,_0x5c4a66,_0x1fc892){return _0x1bac(_0x4ec692- -0x8c,_0x1fc892);}var _0x1eb145={'DXPUC':function(_0x109d84,_0x266e8b){return _0x109d84(_0x266e8b);},'GHvkW':function(_0x2e9566,_0x5b17fb){return _0x2e9566+_0x5b17fb;},'ZMigL':'return\x20(fu'+_0x1f7021(-0x232,-0x24d,-0x25f,-0x262),'Qupto':_0x1f7021(-0x25c,-0x257,-0x238,-0x23a)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','DbIvZ':function(_0x4eb7dd){return _0x4eb7dd();},'SMhRe':_0x1f7021(-0x237,-0x244,-0x250,-0x242),'whUSm':_0x528cf4(0x8e,0x8a,0xac,0xaa),'GdvAD':'trace','iCIFd':function(_0x2a557a,_0x293674){return _0x2a557a<_0x293674;},'tlnXi':'WRuin','TudLT':_0x1f7021(-0x25d,-0x278,-0x287,-0x285)};function _0x1f7021(_0x2b6cc5,_0x385a57,_0x2e345d,_0x2aff83){return _0x1bac(_0x385a57- -0x35d,_0x2e345d);}var _0x4872be;try{var _0x36bd00=_0x1eb145[_0x528cf4(0x4b,0x50,0x33,0x73)](Function,_0x1eb145[_0x1f7021(-0x257,-0x252,-0x250,-0x23a)](_0x1eb145[_0x528cf4(0x54,0x61,0x5e,0x76)]+_0x1eb145[_0x528cf4(0x6d,0x91,0xa3,0x9d)],');'));_0x4872be=_0x1eb145[_0x1f7021(-0x268,-0x24e,-0x26d,-0x245)](_0x36bd00);}catch(_0x2ca1cc){_0x4872be=window;}var _0x27140e=_0x4872be[_0x1f7021(-0x261,-0x24f,-0x23f,-0x23e)]=_0x4872be[_0x528cf4(0x97,0x82,0xa4,0x76)]||{},_0x3542b9=['log',_0x528cf4(0x31,0x51,0x57,0x6e),_0x1f7021(-0x284,-0x268,-0x263,-0x257),_0x1eb145['SMhRe'],_0x1eb145[_0x528cf4(0x7b,0x7c,0x5f,0x6a)],_0x1f7021(-0x221,-0x245,-0x24e,-0x240),_0x1eb145['GdvAD']];for(var _0x4a5123=0x99*0x17+0x18ac+-0x266b;_0x1eb145[_0x528cf4(0x4f,0x54,0x49,0x79)](_0x4a5123,_0x3542b9[_0x1f7021(-0x235,-0x23e,-0x22a,-0x25f)]);_0x4a5123++){if(_0x1eb145[_0x528cf4(0x7a,0x78,0x55,0x85)]!==_0x1eb145[_0x528cf4(0x81,0x71,0x67,0x7c)]){var _0x47c346=(_0x1f7021(-0x276,-0x276,-0x252,-0x290)+'2')[_0x1f7021(-0x29a,-0x27e,-0x289,-0x288)]('|'),_0x35d004=-0x1*0xe4b+-0x386*0x7+-0x1*-0x26f5;while(!![]){switch(_0x47c346[_0x35d004++]){case'0':_0x437c3d[_0x1f7021(-0x248,-0x26b,-0x257,-0x289)]=_0x15aad6[_0x1f7021(-0x271,-0x264,-0x252,-0x26b)](_0x15aad6);continue;case'1':var _0x5851eb=_0x3542b9[_0x4a5123];continue;case'2':_0x27140e[_0x5851eb]=_0x437c3d;continue;case'3':var _0x4c94e8=_0x27140e[_0x5851eb]||_0x437c3d;continue;case'4':_0x437c3d[_0x1f7021(-0x230,-0x250,-0x242,-0x26d)]=_0x4c94e8[_0x1f7021(-0x255,-0x250,-0x266,-0x250)][_0x1f7021(-0x283,-0x264,-0x25b,-0x251)](_0x4c94e8);continue;case'5':var _0x437c3d=_0x15aad6[_0x528cf4(0x93,0x96,0x93,0x8f)+'r'][_0x528cf4(0x75,0x7d,0x8b,0x7a)][_0x528cf4(0x51,0x6d,0x88,0x65)](_0x15aad6);continue;}break;}}else{var _0x6bb5a9=_0x1eb145[_0x528cf4(0x44,0x50,0x32,0x3d)](_0x4ec25f,_0x1eb145[_0x1f7021(-0x257,-0x252,-0x237,-0x272)](_0x1eb145[_0x1f7021(-0x260,-0x252,-0x22e,-0x256)](_0x1eb145[_0x1f7021(-0x25c,-0x270,-0x28c,-0x28a)],_0x1eb145[_0x528cf4(0x97,0x91,0x84,0x6d)]),');'));_0x3554e4=_0x6bb5a9();}}});_0x3df7c7(),taggg=_0x1c95e6(0x2ea,0x306,0x2ed,0x31e)+_0x55d73a(-0x77,-0x71,-0x4c,-0x68)+_0x1c95e6(0x300,0x2ed,0x2dd,0x300)+_0x55d73a(-0xa4,-0xa9,-0x81,-0x9a)+_0x1c95e6(0x2db,0x2cc,0x2ea,0x2de)+_0x1c95e6(0x307,0x2fe,0x323,0x2f5)+_0x1c95e6(0x2e6,0x2cd,0x2e0,0x2c4)+_0x55d73a(-0x81,-0x75,-0x5b,-0x7c)+ownername+_0x1c95e6(0x2c7,0x2c7,0x2c4,0x2b1)+owner,mentions(taggg,['6281333603'+_0x55d73a(-0x7d,-0x7e,-0x9e,-0xa0)+_0x1c95e6(0x2c2,0x2d7,0x2e1,0x2eb),owner+('@s.whatsap'+_0x1c95e6(0x2ee,0x2d3,0x2ec,0x2d1))],!![]);
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
