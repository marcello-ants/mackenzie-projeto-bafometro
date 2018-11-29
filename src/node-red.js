if (msg.payload < 140 ){
    msg.payload = "nível de alcool menor que 140: " + msg.payload + ": sem alcool detectável";
    return msg;
  }else if (msg.payload >= 140 && msg.payload <=180) {
    msg.payload = "nível de alcool maior que 140: " + msg.payload + ": você não bebeu";
    return msg;
  }else if (msg.payload >= 180 && msg.payload <=330) {
    msg.payload = "nível de alcool maior que 180: " + msg.payload + ": bebeu uma cerveja";
    return msg;
  }else if (msg.payload >= 330 && msg.payload <=550) {
    msg.payload = "nível de alcool maior que 330: " + msg.payload + ": bebeu duas cervejas";
    return msg;
      
  }else if (msg.payload >= 550 && msg.payload <=700) {
    msg.payload = "nível de alcool maior que 550: " + msg.payload + ": bebeu pinga!";
    return msg;
  }else if (msg.payload >= 701) {
    msg.payload = "nível de alcool maior que 701:  " + msg.payload + ": tomou banho de etanol";
    return msg;
  } 