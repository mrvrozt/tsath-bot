const Discord = require('discord.js');

const client = new Discord.Client();
//const activities_list = ["Playing", "Watching"];

//let statuses = ["with Bobbo's Penis", "with Steve and Pokie", "Nintendo Switch", "Playstation 4", "Steam", "XBOX One", "with Himself", "with His Slime"]; //Status for Playing
//let statuses = ["Hentai", "Pornhub", "my Penis Grow", "Gay Porn", "Someone Jerk Off"]; //Status for Watching
let statuses = ["as a person with plump", 
"as a person with round", 
"as a person with chunky", 
"as a person with fleshy", 
"as a person with paunchy", 
"as a person with corpulent", 
"as a person with buxom", 
"as a person with burly", 
"as a person with bulky", 
"as a person with hefty", 
"as a person with meaty", 
"as a person with heavily built", 
"as a person with solidly built", 
"as a person with thickset", 
"as a person with heavyset", 
"as a person with sturdy", 
"as a person with well built", 
"as a person with hulking", 
"as a person with tubby", 
"as a person with pudgy", 
"as a person with beefy", 
"as a person with poddy", 
"as a person with fubsy"];

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
	//client.user.setPresence({
        //game: { 
            //name: 'my Penis Grow',
            //type: 'WATCHING'
        //},
        //status: 'idle'
    //})
    //client.user.setStatus('idle')
    client.user.setPresence({
        game: {
            //name: '「東京放課後サモナーズ」',
	    //name: 'Tokyo Afterschool Summoners',
	    name: 'Chunky/Burly/Hefty/Tubby/Beefy',
            type: "STREAMING",
	    //type: "PLAYING",
	    //type: "LISTENING",
	    //type: "WATCHING",
	    //url: "https://www.twitch.tv/東京放課後サモナーズ"
            url: "https://www.twitch.tv/NeetFTW"
        }
    });
	//setInterval(function() {
		//let status = statuses[Math.floor(Math.random()*statuses.length)];
		//client.user.setPresence({ game: { name: status }, status: 'online' });
		//client.user.setPresence({ activity: { name: status }, status: 'online' });
		//client.user.setPresence({ game: { name: status, type: 'PLAYING' }, status: 'ONLINE'});
	//}, 10000);
//client.user.setActivity("TV", {type: "Watching"})
//client.user.setActivity("with Bobbo", {type: "Sleeping"})
//client.user.setActivity("Nintendo Switch")
//client.user.setActivity("with my dick")
//client.user.setActivity("with Bobbo")
//client.user.setActivity("with Steve and Pokie")
});

//client.on('message', (recievedMessage) => {
//	if (recievedMessage.author == client.user)	{
//		return
//	}
//	recievedMessage.channel.send("ZzZZzzzzz" + recievedMessage.author.toString() + ": " + recievedMessage.content)
//});

client.on('message', message => {

	var sender = message.author;
	var msg = message.content.toUpperCase();
	var fs  = require(`fs`);

	var commandList = fs.readFileSync(`commands.txt`, `utf8`);

	if (sender.id === `557942571238817802`){
		return;
	}

	if (msg.startsWith(`.HELP`)){
		message.channel.send(commandList);
	}

	if (msg.includes(`:THONKK:`)){
		message.channel.send("<:thonkk:533178439646183429>:thought_balloon:");
	}
	
	if (msg.includes(`:MEH:`)){
		message.channel.send("<:meh:499959464770666547>:zzz:");
	}
	
	if (msg.includes(`:RELAXD:`)){
		message.channel.send("<:relaxd:570368847849193483>:dash:");
	}

	//if (msg.includes(`FUCK`)){
	//	message.channel.send(`${message.author} No! bad person!`);
		//message.delete();
		//message.author.send(`The word **LETTUCE** is banned`)
	//}


	if (msg.startsWith(`.NEET`)){
		message.channel.send(`${message.author} Hey look it's me :grin:`);
		number = 30;
		imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
		message.channel.send( {files: ["./tsath/" + imageNumber + ".jpg"]});
		//message.channel.send({files: ["https://pbs.twimg.com/media/D2DtzaXX0AMhTKv.jpg"]});
	}

	if (msg.startsWith(`.PINCH`)){
		message.channel.send(`${message.author} :blush:`);
		message.channel.send( {files: ["./tsath/pinch.png"]});
	}
	
	if (msg.includes(`CONGRATS`)){
		message.channel.send(":clap: :clap: :clap:");
		message.channel.send( {files: ["./tsath/clap.png"]});
	}

	//if (msg.includes(`SHIT`)){
	//	message.channel.send("EeWww!");
	//}

	if (msg.includes(`I'M SATISFIED`)){
		message.channel.send(`${message.author} I'm happy for you :relaxed:`);
	}

	if (msg.includes(`I'M SO SATISFIED`)){
		message.channel.send(`${message.author} <:luv:550567524320804875>`);
	}
	
	if (msg.includes(`HATE U TSATH`)){
		message.channel.send(`${message.author} :middle_finger:`);
	}

	//if (msg.includes(`TRASH`)){
	//	message.channel.send("Hey don't say **TRASH**! :rage:");
	//}

	if (msg.startsWith(`.PING`)){
		message.channel.send(`${message.author} Pong! :ping_pong: ` + Math.round(client.ping) + ` ms!`);
		//message.channel.send(`${message.author} Pong! `);
	}

	if (msg.startsWith(`.KISS`)){
		message.channel.send(`${message.author} :kissing_closed_eyes:`);
	}

	if (msg.startsWith(`.COFFEE`)){
		message.channel.send(":coffee:");
	}

	if (msg.startsWith(`.TEA`)){
		message.channel.send(":tea:");
	}

	if (msg.startsWith(`.DING`)){
		message.channel.send("Dong! :eggplant:");
	}
	
	//if (msg.includes(`WTF`)){
	//	message.channel.send("What so excited about that");
	//}

	//if (msg.includes(`BITCH`)){
	//	message.channel.send("Uh-oh not cool bruh");
	//}

	//if (msg.includes(`ASSHOLE`)){
	//	message.channel.send("My hole also smells great");
	//}

});

client.on('message', msg => {
	
var sender = msg.author;	
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; }
	
if (sender.id === `557942571238817802`){
		return;
	}
	
if (msg.content.toLowerCase().startsWith(".8ball")) {
		var msg1 = Array(5); 
		msg1[1] = "Yes";
	    	msg1[2] = "No";
		msg1[3] = "Maybe :wink:";
		msg1[4] = "Without a doubt";
		msg1[5] = "I honestly have no idea :neutral_face:"
		msg1[6] = "Highly unlikely" 
        	var x = getRandomInt(0, 20);
		if (x < 5){ 
        	if (x < 3){
		msg.channel.send(msg1[1]);
		}
		else {
               	msg.channel.send(msg1[3]);
		}
		}
		else if (x<= 9) {
		if (x >= 7){
		msg.channel.send(msg1[2]); }
		else{
                msg.channel.send(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			msg.channel.send(msg1[5]);
		}
		else {
			msg.channel.send(msg1[6])
		}
}

	if (msg.content.toLowerCase().startsWith(".rtd")) {
		var msg1 = Array(3);
		msg1[1] = "Fire :fire:";
	    	msg1[2] = "Water :droplet:";
		msg1[3] = "Wood :seedling:"
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(msg1[1]);
		}
		else{
            	msg.channel.send(msg1[3]);
		}
		}
		else{ 
		msg.channel.send(msg1[2]);
	}
}
	if (msg.content.toLowerCase().startsWith(".stp")) {
		var msg1 = Array(3);
		msg1[1] = `${msg.author} You'll get a **3**<:starz:550571430610337794>`;
	    	msg1[2] = `${msg.author} You'll get a **4**<:starz:550571430610337794>`;
		msg1[3] = `${msg.author} :tada: You'll get a **5**<:starz:550571430610337794> :tada:`
        	var x = getRandomInt(0, 9);
		if (x < 8){
        	if (x < 7){
		msg.channel.send(msg1[1]);
		}
		else{
            	msg.channel.send(msg1[2]);
		}
		}
		else{ 
		msg.channel.send(msg1[3]);
	}
}

		if (msg.content.toLowerCase().startsWith(".rate")) {
			msg.channel.send("I'd rate this "+ getRandomInt(1, 10)+"/10");
		}

		if (msg.content.toLowerCase().startsWith(".howgay")) {
			msg.channel.send(`${msg.author} You are `+ getRandomInt(1, 100)+"% gay :gay_pride_flag:");
		}

		if (msg.content.toLowerCase().startsWith(".howsmyluck")) {
			msg.channel.send(`${msg.author} Your luck is `+ getRandomInt(1, 100)+"% :four_leaf_clover:");
		}

		//if (msg.content.toLowerCase().startsWith(".stp")) {
		//	msg.channel.send("You'll get a "+ getRandomInt(3, 5)+"<:starz:550571430610337794>");
		//}

      	if (msg.content.toLowerCase().startsWith(".coinflip")) { 
		var msg2 = Array(2);
		msg2[1] = "Heads";
	    	msg2[2] = "Tails";
        	var x = getRandomInt(0, 8);
		if (x < 4){
			msg.channel.send(msg2[1]);
		}
		else{
			msg.channel.send(msg2[2]);
		}
	}
	
	if (msg.content.toLowerCase().includes("bitch")) {
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(`${msg.author} Uh-oh not cool bruh!`);
		}
		else{
            	msg.channel.send(`${msg.author} Hey respek!`);
		}
		}
		else{ 
		msg.channel.send(`${msg.author} No, Don't say that!`);
	}
}
	
	if (msg.content.toLowerCase().includes("asshole")) {
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(`${msg.author} My hole also smells great!`);
		}
		else{
            	msg.channel.send(`${msg.author} Jesus christ!`);
		}
		}
		else{ 
		msg.channel.send(`${msg.author} Oh dude, I like that hole!`);
	}
}	

	if (msg.content.toLowerCase().includes("fuck")) {
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(`${msg.author} Yo, no F word!`);
		}
		else{
            	msg.channel.send(`${msg.author} You know you can't say that on public, right?`);
		}
		}
		else{ 
		msg.channel.send(`${msg.author} Ummmm what?`);
	}
}

	if (msg.content.toLowerCase().includes("wtf")) {
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(`${msg.author} What so excited about that <:thonkk:533178439646183429>`);
		}
		else{
            	msg.channel.send(`${msg.author} Is that spanish?`);
		}
		}
		else{ 
		msg.channel.send(`${msg.author} Nice story!`);
	}
}	

	if (msg.content.toLowerCase().includes("trash")) {
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(`${msg.author} Hey don't say **TRASH**! :rage:`);
		}
		else{
            	msg.channel.send(`${msg.author} You're **TRASH**! :rage:`);
		}
		}
		else{ 
		msg.channel.send(`${msg.author} No U :rage:`);
	}
}	

	if (msg.content.toLowerCase().includes("shit")) {
        	var x = getRandomInt(0, 9);
		if (x < 6){
        	if (x < 3){
		msg.channel.send(`${msg.author} EeWww! :nauseated_face:`);
		}
		else{
            	msg.channel.send(`${msg.author} Yo that's nasty! :nauseated_face:`);
		}
		}
		else{ 
		msg.channel.send(`${msg.author} Is that a poop? :nauseated_face:`);
	}
}	
	
      	if (msg.content.toLowerCase().startsWith(".f")) { 
        	var x = getRandomInt(0, 8);
		if (x < 4){
		msg.channel.send(`**F**`);
		}
		else{
		msg.channel.send(`Press **F** to Pay Respects`);
	}
}	
	
});


client.login(process.env.BOT_TOKEN);
