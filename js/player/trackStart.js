module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - شغال حاليا  ${track.title} into ${message.member.voice.channel.name} ...`);
};