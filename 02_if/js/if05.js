let pho = prompt('Photoshopの点数は?');
pho = Number(pho);
let ill = prompt('Illustratorの点数は?');
ill = Number(ill);

let ave = Number((pho + ill) / 2);

console.log(`Photoshopは${pho}点ね、Illustratorは${ill}点ね、平均${ave}点`);

if (ave >= 0 && ave <= 30) {
    console.log('がんばりなさい');
}
else if (ave >= 31 && ave <= 60) {
    console.log('まずまずね');
}
else if (ave >= 61 && ave <= 100) {
    console.log('頑張ったね');
}
else {
    console.log('嘘つくんじゃない！');
}