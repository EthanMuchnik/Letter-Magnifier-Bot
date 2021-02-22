const Discord = require('discord.js');
const hmm = require('./hmm.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');
});

var Sm = ["    _.-'''''-._   ","  .'  _     _  '.  "," /   (o)   (o)   \\ ","|                 |", "|  \\           /  |", " \\  '.       .'  / ","  '.  `'---'`  .'  ", "    '-._____.-'    " ]; 
var Sp =['     ','     ','     ','     ','     ','     ','     ','     ',];
var a = ['       AA       ','      AAAA      ', '     AAAAAA     ','    AAA  AAA    ','   AAA    AAA   ', '  AAAAAAAAAAAA  ', ' AAA        AAA ', 'AAA          AAA'];
var b = ['BBBBBBBBBB  ','BBB     BBB ', 'BBB      BBB', 'BBBBBBBBBBB ', 'BBBBBBBBBB  ', 'BBB      BBB','BBB     BBB ','BBBBBBBBBB  '];
var c = ['   CCCCCCCC ',' CCCC    CCC','CCC         ','CCC         ','CCC         ','CCC         ',' CCCC    CCC', '   CCCCCCCC '];
var d = ['DDDDDDDD    ', 'DDDDDDDDDDD ', 'DDD     DDDD','DDD      DDD', 'DDD      DDD' , 'DDD     DDDD' , 'DDDDDDDDDDD ', 'DDDDDDDD    '];
var e = ['EEEEEEEEEEEE','EEEEEEEEEEEE','EEE         ','EEEEEEEEEEEE','EEEEEEEEEEEE','EEE         ','EEEEEEEEEEEE','EEEEEEEEEEEE'];
var f = ['FFFFFFFFFFFF','FFFFFFFFFFFF','FFF         ','FFFFFFFFFFFF','FFFFFFFFFFFF','FFF         ','FFF         ','FFF         '];
var g = ['  GGGGGGG   ','GGGGGGGGGGG ','GGG      GGG', 'GGG         ','GGG   GGGGGG','GGG      GGG','GGGGGGGGGGG ', ' GGGGGGGGG  '];
var h = ['HHH      HHH', 'HHH      HHH','HHH      HHH','HHHHHHHHHHHH', 'HHHHHHHHHHHH', 'HHH      HHH', 'HHH      HHH', 'HHH      HHH'];
var jj = ['JJJJJJJJJJJJ', 'JJJJJJJJJJJJ', '    JJJ     ','    JJJ     ','    JJJ     ', '    JJJ     ', 'JJ  JJJ     ', ' JJJJJ      ']
var k = ['KKK      KKK', 'KKK    KKK  ', 'KKK  KKK    ','KKKKKK      ', 'KKKKKK      ', 'KKK  KKK    ', 'KKK    KKK  ', 'KKK      KKK'];
var ii = ['IIIIIIIIIIII', 'IIIIIIIIIIII', '    IIII    ', '    IIII    ', '    IIII    ', '    IIII    ', 'IIIIIIIIIIII', 'IIIIIIIIIIII'];
var l = ['LLL         ', 'LLL         ', 'LLL         ', 'LLL         ', 'LLL         ','LLL         ','LLLLLLLLLLLL','LLLLLLLLLLLL'];
var m =['    MMM     MMM    ', '   MMMMM   MMMMM   ', '  MMM MMM MMM MMM  ', '  MMM  MMMMM  MMM  ',' MMM    MMM    MMM ', ' MMM           MMM ', 'MMM             MMM', 'MMM             MMM'];
var n = ['NNN      NNN','NNNNN    NNN','NNN NNN  NNN', 'NNN  NNN NNN', 'NNN   NNNNNN','NNN    NNNNN', 'NNN     NNNN','NNN      NNN' ];
var o = ['   OOOOOO   ',' OOOOOOOOOO ', 'OOO      OOO', 'OOO      OOO', 'OOO      OOO', 'OOO      OOO',' OOOOOOOOOO ', '   OOOOOO   '];
var p = ['PPPPPPPPPP  ', 'PPP     PPP ', 'PPP      PPP', 'PPP     PPP ', 'PPPPPPPPPP  ', 'PPP         ', 'PPP         ', 'PPP         '];
var q = ['   QQQQQQ   ', ' QQQQQQQQQQ ', 'QQQ      QQQ', 'QQQ      QQQ', 'QQQ      QQQ', ' QQQ QQ QQQ ', '   QQQQQQ   ', '       QQ   ']
var r = ['RRRRRRRRRRR ', 'RRR      RRR', 'RRR      RRR','RRRRRRRRR   ','RRR   RRR   ', 'RRR    RRR  ','RRR     RRR ', 'RRR      RRR' ];
var s= [' SSSSSSSSSS ','SSS      SSS', 'SSS         ', ' SSSSSSS    ','    SSSSSSS ','         SSS','SSS      SSS',' SSSSSSSSSS '];
var t = ['TTTTTTTTTTTT', 'TTTTTTTTTTTT', '    TTTT    ', '    TTTT    ','    TTTT    ','    TTTT    ','    TTTT    ','    TTTT    '];
var u = ['UUU       UUU', 'UUU       UUU','UUU       UUU', 'UUU       UUU', 'UUU       UUU', 'UUUU     UUUU', ' UUUUUUUUUUU ', '    UUUUU    ' ];
var v = ['VVV           VVV', ' VVV         VVV ', '  VVV       VVV  ', '   VVV     VVV   ', '    VVV   VVV    ', '     VVV VVV     ', '      VVVVV      ', '       VVV       '];
var w = ['WWW             WWW', 'WWW             WWW',' WWW           WWW ', ' WWW    WWW    WWW ', '  WWW  WWWWW  WWW  ', '  WWW WWW WWW WWW  ', '   WWWWW   WWWWW   ','    WWW     WWW    '];
var x = ['XXX       XXX', ' XXX     XXX ', '   XXX XXX   ', '    XXXXX    ', '    XXXXX    ', '   XXX XXX   ', ' XXX     XXX ', 'XXX       XXX'];
var y = ['YYY      YYY', ' YYY    YYY ', '  YYY  YYY  ', '   YYYYYY   ','    YYYY    ','    YYYY    ','    YYYY    ','    YYYY    '];
var z = ['ZZZZZZZZZZZZ', 'ZZZZZZZZZZZZ', '       ZZZZ ', '     ZZZZ   ', '   ZZZZ     ', ' ZZZZ       ','ZZZZZZZZZZZZ', 'ZZZZZZZZZZZZ'];

var letterArr = [];
client.on('message', message => {
	var begMsg = message;
	var begArray = [];
	if(message.content==="$:)"){
		var smiley ="";
		for(i= 0; i<8;i++){
			smiley+=Sm[i];
			smiley+=`\n`;
		}
		message.channel.send("```" + smiley +  "```");
	}
	else if(message.content==="$help"){
		message.channel.send(" Just write the $ prefix and then write a word or phrase that is 5 characters or less. You can also call a smiley face by typing $:)")
	}
	else if(message.content.length>0 && message.content.startsWith("$")&& message.content.length<7){
		for(i = 0; i< message.content.length; i++){
			begArray.push(message.content.charAt(i));
		}
		var fullMsg = "";
		for(i= 0;i<8; i++){
			for( j = 1; j<begArray.length;j++){
				letterArr = [];
				PickLetter(begArray[j]);
				fullMsg += `${letterArr[i]}     `;
			}
			fullMsg+=`\n`;
		}
			message.channel.send("```" + fullMsg +  "```");
	}
	else if(message.content.length>5 && message.content.startsWith("$")){
		console.log(message.content);
		message.channel.send("Your word is too long smh. 5 characters or less please");
	}
});

function PickLetter( letter){

	if(letter===' '){
		letterArr = Sp;
	}
	else if(letter==='a' || letter==='A'){
		letterArr = a;
	}
	else if(letter==='b' || letter==='B'){
		letterArr = b;
	}
	else if(letter==='c' || letter==='C'){
		letterArr = c;
	}
	else if(letter==='d' || letter==='D'){
		letterArr = d;
	}
	else if(letter==='e' || letter==='E'){
		letterArr = e;
	}
	else if(letter==='f' || letter==='F'){
		letterArr = f;
	}
	else if(letter==='g' || letter==='G'){
		letterArr = g;
	}
	else if(letter==='h' || letter==='H'){
		letterArr = h;
	}
	else if(letter==='i' || letter==='I'){
		letterArr = ii;
	}
	else if(letter==='j' || letter==='J'){
		letterArr = jj;
	}
	else if(letter==='k' || letter==='K'){
		letterArr = k;
	}
	else if(letter==='l' || letter==='L'){
		letterArr = l;
	}
	else if(letter==='m' || letter==='M'){
		letterArr = m;
	}
	else if(letter==='n' || letter==='N'){
		letterArr = n;
	}
	else if(letter==='o' || letter==='O'){
		letterArr = o;
	}
	else if(letter==='p' || letter==='p'){
		letterArr = p;
	}
	else if(letter==='q' || letter==='Q'){
		letterArr = q;
	}
	else if(letter==='r' || letter==='R'){
		letterArr = r;
	}
	else if(letter==='s' || letter==='S'){
		letterArr = s;
	}
	else if(letter==='t' || letter==='T'){
		letterArr = t;
	}
	else if(letter==='u' || letter==='U'){
		letterArr = u;
	}
	else if(letter==='v' || letter==='V'){
		letterArr = v;
	}
	else if(letter==='w' || letter==='W'){
		letterArr = w;
	}
	else if(letter==='x' || letter==='X'){
		letterArr = x;
	}
	else if(letter==='y' || letter==='Y'){
		letterArr = y;
	}
	else if(letter==='z' || letter==='Z'){
		letterArr = z;
	}

	else {
		letterArr = o;
	}
	
}

client.login(hmm.token);