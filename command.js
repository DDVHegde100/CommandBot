const Discord=require('discord.js'); 
const client=new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix= '!';
//Unfinished Code for Bot.
client.once('ready', ()=>{ 
    console.log('Ready to be Big Brain'); 
})

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args=message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command==='embed'){
        const Embed1=new Discord.MessageEmbed()
        .setColor('#008744')
        .setTitle('Rules')
        .setURL('#')
        .setDescription('Rules of the Server')
       
        .addField(
            {name: 'Rule 1', value: 'No NSFW'},
            {name: 'Rule 2', value: 'No being Mean'},
            {name: 'Rule 3', value: 'No swallowing children'},
            {name: 'Rule 4', value: 'Do not Spam'}
        )
        .setImage('https://media.istockphoto.com/photos/happy-indian-young-call-center-executive-picture-id502005428?k=6&m=502005428&s=612x612&w=0&h=3k1wEsrNe7wNRb2K-p3er1vrpmaTvTHW4mD1lQPcOdg=')
        message.channel.send(Embed1);
    }
if(command === 'ping'){
    message.channel.send('Pong!');
}else if( command == 'hi'){
    message.channel.send('hi bye')
}else if( command == 'joke'){
    message.channel.send('Why did the Clydesdale give the pony a glass of water?')
}else if( command == 'why?'){
    message.channel.send('Because he was a little horse lol')
}else if( command == 'lol'){
    message.channel.send('<https://www.youtube.com/watch?v=xfr64zoBTAQ>')
}else if( command == 'funnysad'){
    message.channel.send('``FUNNYSAD IS A BUNNYDAD``')
}else if( command == 'reactionrole'){
    client.commands.get('reactionrole').execute(message, args, Discord, client);
}


});

client.login('ODQ2NjkyNDI4NTU1NDg1MTg1.YKzNxQ.OYlIpe6iV9yxxmue0jfg0vo1SII');
