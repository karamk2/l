module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title}انضافت على القائمة (**${playlist.tracks.length}** songs) !`);
};