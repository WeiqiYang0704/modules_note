// ♣️  ♠️  ♥️  ♦️
function Poker(color, number) {
    this.color = color;
    this.number = number;
}
Poker.prototype.toString = function () {
    let str = '';
    switch (this.color) {

        case 1:
            str = '♣️'
            break;
        case 2:
            str = '♠️'
            break;
        case 3:
            str = '♥️'
            break;
        case 4:
            str = '♦️'
            break;
    }
    if (this.number >= 2 &&this.number <= 10) {
        str += this.number
    } else if (this.number == 1) {
        str += 'A'
    }else if(this.number==11){
        str += 'J'
       // console.log('000')
    }else if(this.number==12){
        str += 'Q'
    }
    else if(this.number==13){
        str += 'K'
    }
    else if(this.number==14){
        str += 'xiaowang'
    }
    else if(this.number==15){
        str += 'dawang'
    }
    return str
}
module.exports=Poker;
