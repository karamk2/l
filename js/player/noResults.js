module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} -  مش موجود ع اليوتيوب ${query} !`);
};