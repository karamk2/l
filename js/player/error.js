module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} -  فش اشي شغال  !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} -  فوت صوت !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - معيش صلاحية افوت عروم  !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting... please wait and retry!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - في اشي غلط  : ${error}`);
    };
};
