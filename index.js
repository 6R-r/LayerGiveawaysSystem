const { GiveawaysManager } = require('discord-giveaways');
    const ms = require('ms');
  client.giveawaysManager = new GiveawaysManager(client, {
      updateCountdownEvery: 5000,
      default: {
          botsCanWin: false,
          exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
          embedColor: "#FF0000",
          reaction: "🎉"
      }
  });
  let prefix = 'g!';
var _0x9e79=["\x6D\x65\x73\x73\x61\x67\x65","\x67\x75\x69\x6C\x64","\x63\x68\x61\x6E\x6E\x65\x6C","\x73\x74\x61\x72\x74","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x63\x6F\x6E\x74\x65\x6E\x74","\x4D\x41\x4E\x41\x47\x45\x5F\x4D\x45\x53\x53\x41\x47\x45\x53","\x68\x61\x73\x50\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E","\x6D\x65\x6D\x62\x65\x72","\x59\x6F\x75\x20\x61\x72\x65\x20\x6E\x6F\x74\x20\x61\x6C\x6C\x6F\x77\x65\x64\x20\x74\x6F\x20\x73\x74\x61\x72\x74\x20\x67\x69\x76\x65\x61\x77\x61\x79\x73","\x73\x65\x6E\x64","\x73\x70\x6C\x69\x74","\x74\x72\x69\x6D","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x66\x69\x72\x73\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x50\x6C\x65\x61\x73\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x61\x20\x63\x68\x61\x6E\x6E\x65\x6C","\x50\x6C\x65\x61\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x64\x75\x72\x61\x74\x69\x6F\x6E","\x50\x6C\x65\x61\x73\x65\x20\x70\x72\x6F\x76\x69\x64\x65\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x6E\x75\x6D\x62\x65\x72\x20\x6F\x66\x20\x77\x69\x6E\x6E\x65\x72\x73\x21","\x20","\x6A\x6F\x69\x6E","\x4F\x6B\x20\x74\x68\x65\x6E\x2C\x20\x49\x27\x6C\x6C\x20\x67\x69\x76\x65\x20\x61\x77\x61\x79\x20\x6E\x6F\x74\x68\x69\x6E\x67","\x61\x75\x74\x68\x6F\x72","\x40\x65\x76\x65\x72\x79\x6F\x6E\x65\x0A\x0A","","\uD83C\uDF89\x20\x47\x49\x56\x45\x41\x57\x41\x59\x20\uD83C\uDF89","\x47\x49\x56\x45\x41\x57\x41\x59\x20\x45\x4E\x44\x45\x44","\x54\x69\x6D\x65\x20\x72\x65\x6D\x61\x69\x6E\x69\x6E\x67\x3A\x20\x2A\x2A\x7B\x64\x75\x72\x61\x74\x69\x6F\x6E\x7D\x2A\x2A","\x52\x65\x61\x63\x74\x20\x77\x69\x74\x68\x20\uD83C\uDF89\x20\x74\x6F\x20\x65\x6E\x74\x65\x72","\x43\x6F\x6E\x67\x72\x61\x74\x73\x20\x7B\x77\x69\x6E\x6E\x65\x72\x73\x7D\x2C\x20\x79\x6F\x75\x20\x77\x6F\x6E\x20\x2A\x2A\x7B\x70\x72\x69\x7A\x65\x7D\x2A\x2A","\x47\x69\x76\x65\x61\x77\x61\x79\x20\x74\x69\x6D\x65\x21","\x43\x6F\x75\x6C\x64\x6E\x27\x74\x20\x64\x65\x74\x65\x72\x6D\x69\x6E\x65\x20\x61\x20\x77\x69\x6E\x6E\x65\x72","\x48\x6F\x73\x74\x65\x64\x20\x62\x79\x20\x7B\x75\x73\x65\x72\x7D","\x77\x69\x6E\x6E\x65\x72\x28\x73\x29","\x45\x6E\x64\x73\x20\x61\x74","\x73\x65\x63\x6F\x6E\x64\x73","\x6D\x69\x6E\x75\x74\x65\x73","\x68\x6F\x75\x72\x73","\x64\x61\x79\x73","\x67\x69\x76\x65\x61\x77\x61\x79\x73\x4D\x61\x6E\x61\x67\x65\x72","\uD83C\uDF89\x20\x47\x69\x76\x65\x61\x77\x61\x79\x20\x73\x74\x61\x72\x74\x69\x6E\x67\x20\x69\x6E\x20","\x20\x48\x6F\x73\x74\x65\x64\x20\x62\x79\x20\x3C\x40","\x69\x64","\x3E\x2E","\x6F\x6E","\x65\x6E\x64","\x3A\x78\x3A\x20\x59\x6F\x75\x20\x6E\x65\x65\x64\x20\x74\x6F\x20\x68\x61\x76\x65\x20\x74\x68\x65\x20\x6D\x61\x6E\x61\x67\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x73\x20\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x73\x20\x74\x6F\x20\x72\x65\x72\x6F\x6C\x6C\x20\x67\x69\x76\x65\x61\x77\x61\x79\x73\x2E","\x3A\x78\x3A\x20\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x74\x6F\x20\x73\x70\x65\x63\x69\x66\x79\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x49\x44\x21","\x70\x72\x69\x7A\x65","\x66\x69\x6E\x64","\x67\x69\x76\x65\x61\x77\x61\x79\x73","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x55\x6E\x61\x62\x6C\x65\x20\x74\x6F\x20\x66\x69\x6E\x64\x20\x61\x20\x67\x69\x76\x65\x61\x77\x61\x79\x20\x66\x6F\x72\x20\x2A\x2A\x60","\x60\x2A\x2A\x2E","\x47\x69\x76\x65\x61\x77\x61\x79\x20\x77\x69\x74\x68\x20\x6D\x65\x73\x73\x61\x67\x65\x20\x49\x44\x20\x2A\x2A","\x2A\x2A\x20\x69\x73\x20\x61\x6C\x72\x65\x61\x64\x79\x20\x65\x6E\x64\x65\x64\x2E","\x54\x68\x69\x73\x20\x67\x69\x76\x65\x61\x77\x61\x79\x20\x69\x73\x20\x61\x6C\x72\x65\x61\x64\x79\x20\x65\x6E\x64\x65\x64\x21","\x65\x72\x72\x6F\x72","\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x65\x64\x2E\x2E\x2E","\x63\x61\x74\x63\x68","\x47\x69\x76\x65\x61\x77\x61\x79\x20\x77\x69\x6C\x6C\x20\x65\x6E\x64\x20\x69\x6E\x20\x6C\x65\x73\x73\x20\x74\x68\x61\x6E\x20\x2A\x2A","\x75\x70\x64\x61\x74\x65\x43\x6F\x75\x6E\x74\x64\x6F\x77\x6E\x45\x76\x65\x72\x79","\x6F\x70\x74\x69\x6F\x6E\x73","\x20\x73\x65\x63\x6F\x6E\x64\x73\x2E\x2E\x2E\x2A\x2A","\x74\x68\x65\x6E","\x6E\x6F\x77","\x65\x64\x69\x74"];var _0xea6b=[_0x9e79[0],_0x9e79[1],_0x9e79[2],_0x9e79[3],_0x9e79[4],_0x9e79[5],_0x9e79[6],_0x9e79[7],_0x9e79[8],_0x9e79[9],_0x9e79[10],_0x9e79[11],_0x9e79[12],_0x9e79[13],_0x9e79[14],_0x9e79[15],_0x9e79[16],_0x9e79[17],_0x9e79[18],_0x9e79[19],_0x9e79[20],_0x9e79[21],_0x9e79[22],_0x9e79[23],_0x9e79[24],_0x9e79[25],_0x9e79[26],_0x9e79[27],_0x9e79[28],_0x9e79[29],_0x9e79[30],_0x9e79[31],_0x9e79[32],_0x9e79[33],_0x9e79[34],_0x9e79[35],_0x9e79[36],_0x9e79[37],_0x9e79[38],_0x9e79[39],_0x9e79[40],_0x9e79[41],_0x9e79[42],_0x9e79[43],_0x9e79[44],_0x9e79[45],_0x9e79[46],_0x9e79[47],_0x9e79[48],_0x9e79[49],_0x9e79[50],_0x9e79[51],_0x9e79[52],_0x9e79[53],_0x9e79[54],_0x9e79[55],_0x9e79[56],_0x9e79[57],_0x9e79[58],_0x9e79[59],_0x9e79[60],_0x9e79[61],_0x9e79[62],_0x9e79[63],_0x9e79[64],_0x9e79[65],_0x9e79[66],_0x9e79[67],_0x9e79[68]];var _0x5822=[_0xea6b[0],_0xea6b[1],_0xea6b[2],_0xea6b[3],_0xea6b[4],_0xea6b[5],_0xea6b[6],_0xea6b[7],_0xea6b[8],_0xea6b[9],_0xea6b[10],_0xea6b[11],_0xea6b[12],_0xea6b[13],_0xea6b[14],_0xea6b[15],_0xea6b[16],_0xea6b[17],_0xea6b[18],_0xea6b[19],_0xea6b[20],_0xea6b[21],_0xea6b[22],_0xea6b[23],_0xea6b[24],_0xea6b[25],_0xea6b[26],_0xea6b[27],_0xea6b[28],_0xea6b[29],_0xea6b[30],_0xea6b[31],_0xea6b[32],_0xea6b[33],_0xea6b[34],_0xea6b[35],_0xea6b[36],_0xea6b[37],_0xea6b[38],_0xea6b[39],_0xea6b[40],_0xea6b[41],_0xea6b[42],_0xea6b[43],_0xea6b[44],_0xea6b[45],_0xea6b[46],_0xea6b[47],_0xea6b[48],_0xea6b[49],_0xea6b[50],_0xea6b[51],_0xea6b[52],_0xea6b[53],_0xea6b[54],_0xea6b[55],_0xea6b[56],_0xea6b[57],_0xea6b[58],_0xea6b[59],_0xea6b[60],_0xea6b[61],_0xea6b[62],_0xea6b[63],_0xea6b[64],_0xea6b[65],_0xea6b[66],_0xea6b[67],_0xea6b[68]];var _0x8653=[_0x5822[0],_0x5822[1],_0x5822[2],_0x5822[3],_0x5822[4],_0x5822[5],_0x5822[6],_0x5822[7],_0x5822[8],_0x5822[9],_0x5822[10],_0x5822[11],_0x5822[12],_0x5822[13],_0x5822[14],_0x5822[15],_0x5822[16],_0x5822[17],_0x5822[18],_0x5822[19],_0x5822[20],_0x5822[21],_0x5822[22],_0x5822[23],_0x5822[24],_0x5822[25],_0x5822[26],_0x5822[27],_0x5822[28],_0x5822[29],_0x5822[30],_0x5822[31],_0x5822[32],_0x5822[33],_0x5822[34],_0x5822[35],_0x5822[36],_0x5822[37],_0x5822[38],_0x5822[39],_0x5822[40],_0x5822[41],_0x5822[42],_0x5822[43],_0x5822[44],_0x5822[45],_0x5822[46],_0x5822[47],_0x5822[48],_0x5822[49],_0x5822[50],_0x5822[51],_0x5822[52],_0x5822[53],_0x5822[54],_0x5822[55],_0x5822[56],_0x5822[57],_0x5822[58],_0x5822[59],_0x5822[60],_0x5822[61],_0x5822[62],_0x5822[63],_0x5822[64],_0x5822[65],_0x5822[66],_0x5822[67],_0x5822[68]];var _0xfb5f=[_0x8653[0],_0x8653[1],_0x8653[2],_0x8653[3],_0x8653[4],_0x8653[5],_0x8653[6],_0x8653[7],_0x8653[8],_0x8653[9],_0x8653[10],_0x8653[11],_0x8653[12],_0x8653[13],_0x8653[14],_0x8653[15],_0x8653[16],_0x8653[17],_0x8653[18],_0x8653[19],_0x8653[20],_0x8653[21],_0x8653[22],_0x8653[23],_0x8653[24],_0x8653[25],_0x8653[26],_0x8653[27],_0x8653[28],_0x8653[29],_0x8653[30],_0x8653[31],_0x8653[32],_0x8653[33],_0x8653[34],_0x8653[35],_0x8653[36],_0x8653[37],_0x8653[38],_0x8653[39],_0x8653[40],_0x8653[41],_0x8653[42],_0x8653[43],_0x8653[44],_0x8653[45],_0x8653[46],_0x8653[47],_0x8653[48],_0x8653[49],_0x8653[50],_0x8653[51],_0x8653[52],_0x8653[53],_0x8653[54],_0x8653[55],_0x8653[56],_0x8653[57],_0x8653[58],_0x8653[59],_0x8653[60],_0x8653[61],_0x8653[62],_0x8653[63],_0x8653[64],_0x8653[65],_0x8653[66],_0x8653[67],_0x8653[68]];var _0xa567=[_0xfb5f[0],_0xfb5f[1],_0xfb5f[2],_0xfb5f[3],_0xfb5f[4],_0xfb5f[5],_0xfb5f[6],_0xfb5f[7],_0xfb5f[8],_0xfb5f[9],_0xfb5f[10],_0xfb5f[11],_0xfb5f[12],_0xfb5f[13],_0xfb5f[14],_0xfb5f[15],_0xfb5f[16],_0xfb5f[17],_0xfb5f[18],_0xfb5f[19],_0xfb5f[20],_0xfb5f[21],_0xfb5f[22],_0xfb5f[23],_0xfb5f[24],_0xfb5f[25],_0xfb5f[26],_0xfb5f[27],_0xfb5f[28],_0xfb5f[29],_0xfb5f[30],_0xfb5f[31],_0xfb5f[32],_0xfb5f[33],_0xfb5f[34],_0xfb5f[35],_0xfb5f[36],_0xfb5f[37],_0xfb5f[38],_0xfb5f[39],_0xfb5f[40],_0xfb5f[41],_0xfb5f[42],_0xfb5f[43],_0xfb5f[44],_0xfb5f[45],_0xfb5f[46],_0xfb5f[47],_0xfb5f[48],_0xfb5f[49],_0xfb5f[50],_0xfb5f[51],_0xfb5f[52],_0xfb5f[53],_0xfb5f[54],_0xfb5f[55],_0xfb5f[56],_0xfb5f[57],_0xfb5f[58],_0xfb5f[59],_0xfb5f[60],_0xfb5f[61],_0xfb5f[62],_0xfb5f[63],_0xfb5f[64],_0xfb5f[65],_0xfb5f[66],_0xfb5f[67],_0xfb5f[68]];var _0x290b=[_0xa567[0],_0xa567[1],_0xa567[2],_0xa567[3],_0xa567[4],_0xa567[5],_0xa567[6],_0xa567[7],_0xa567[8],_0xa567[9],_0xa567[10],_0xa567[11],_0xa567[12],_0xa567[13],_0xa567[14],_0xa567[15],_0xa567[16],_0xa567[17],_0xa567[18],_0xa567[19],_0xa567[20],_0xa567[21],_0xa567[22],_0xa567[23],_0xa567[24],_0xa567[25],_0xa567[26],_0xa567[27],_0xa567[28],_0xa567[29],_0xa567[30],_0xa567[31],_0xa567[32],_0xa567[33],_0xa567[34],_0xa567[35],_0xa567[36],_0xa567[37],_0xa567[38],_0xa567[39],_0xa567[40],_0xa567[41],_0xa567[42],_0xa567[43],_0xa567[44],_0xa567[45],_0xa567[46],_0xa567[47],_0xa567[48],_0xa567[49],_0xa567[50],_0xa567[51],_0xa567[52],_0xa567[53],_0xa567[54],_0xa567[55],_0xa567[56],_0xa567[57],_0xa567[58],_0xa567[59],_0xa567[60],_0xa567[61],_0xa567[62],_0xa567[63],_0xa567[64],_0xa567[65],_0xa567[66],_0xa567[67],_0xa567[68]];client[_0x290b[46]](_0x290b[0],(_0xd34ex7)=>{if(!_0xd34ex7[_0x290b[2]][_0x290b[1]]){return};if(_0xd34ex7[_0x290b[5]][_0x290b[4]](prefix+ _0x290b[3])){if(!_0xd34ex7[_0x290b[8]][_0x290b[7]](_0x290b[6])){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[9])};let _0xd34ex8=_0xd34ex7[_0x290b[5]][_0x290b[14]](prefix[_0x290b[13]])[_0x290b[12]]()[_0x290b[11]](/ +/g);let _0xd34ex9=_0xd34ex7[_0x290b[17]][_0x290b[16]][_0x290b[15]]();if(!_0xd34ex9){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[18])};let _0xd34exa=_0xd34ex8[2];if(!_0xd34exa|| isNaN(ms(_0xd34exa))){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[19])};let _0xd34exb=_0xd34ex8[3];if(isNaN(_0xd34exb)|| (parseInt(_0xd34exb)<= 0)){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[20])};let _0xd34exc=_0xd34ex8[_0x290b[14]](4)[_0x290b[22]](_0x290b[21]);if(!_0xd34exc){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[23])};client[_0x290b[41]][_0x290b[3]](_0xd34ex9,{time:ms(_0xd34exa),prize:_0xd34exc,winnerCount:_0xd34exb,hostedBy:true?_0xd34ex7[_0x290b[24]]:null,messages:{giveaway:(false?_0x290b[25]:_0x290b[26])+ _0x290b[27],giveawayEned:(true?_0x290b[25]:_0x290b[26])+ _0x290b[28],timeRemaining:_0x290b[29],inviteToParticipate:_0x290b[30],winMessage:_0x290b[31],embedFooter:_0x290b[32],noWinner:_0x290b[33],hostedBy:_0x290b[34],winners:_0x290b[35],endedAt:_0x290b[36],units:{seconds:_0x290b[37],minutes:_0x290b[38],hours:_0x290b[39],days:_0x290b[40],pluralS:false}}});_0xd34ex7[_0x290b[2]][_0x290b[10]](`${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x290b[42]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xd34ex9}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x290b[43]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xd34ex7[_0x290b[24]][_0x290b[44]]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x290b[45]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}`)}});client[_0x290b[46]](_0x290b[0],(_0xd34ex7)=>{if(!_0xd34ex7[_0x290b[2]][_0x290b[1]]){return};if(_0xd34ex7[_0x290b[5]][_0x290b[4]](prefix+ _0x290b[47])){let _0xd34exd=_0xd34ex7[_0x290b[5]][_0x290b[11]](_0x290b[21])[_0x290b[14]](1)[_0x290b[22]](_0x290b[21]);if(!_0xd34ex7[_0x290b[8]][_0x290b[7]](_0x290b[6])){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[48])};if(!_0xd34exd){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[49])};let _0xd34exe=client[_0x290b[41]][_0x290b[52]][_0x290b[51]]((_0xd34exf)=>{return _0xd34exf[_0x290b[50]]=== _0xd34exd})|| client[_0x290b[41]][_0x290b[52]][_0x290b[51]]((_0xd34exf)=>{return _0xd34exf[_0x290b[53]]=== _0xd34exd});if(!_0xd34exe){return _0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[54]+ _0xd34exd+ _0x290b[55])};client[_0x290b[41]][_0x290b[68]](_0xd34exe[_0x290b[53]],{setEndTimestamp:Date[_0x290b[67]]()})[_0x290b[66]](()=>{_0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[62]+ (client[_0x290b[41]][_0x290b[64]][_0x290b[63]]/ 1000)+ _0x290b[65])})[_0x290b[61]]((_0xd34ex10)=>{if(_0xd34ex10[_0x290b[4]](`${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x290b[56]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xd34exe[_0x290b[53]]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x290b[57]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xa567[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0xfb5f[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x8653[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}${_0x5822[26]}${_0x9e79[26]}${_0xea6b[26]}${_0x9e79[26]}`)){_0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[58])}else {console[_0x290b[59]](_0xd34ex10);_0xd34ex7[_0x290b[2]][_0x290b[10]](_0x290b[60])}})}})
