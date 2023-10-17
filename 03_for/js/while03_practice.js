//残金
let wallet = 12800;
//価格
let price = 980;
let i = 1;

while (wallet > 750) {
    if (i > 4) {
        price = 750;
    }
    wallet = wallet - price;
    console.log(`${i}回目の買い物成功。残金は${wallet}円`);
    i++;
}