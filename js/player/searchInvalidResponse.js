module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - The selection has been **cancelled** !`);
    } else message.channel.send(`${client.emotes.error} - حط رقم من  **1** الى **${tracks.length}** !`);
};