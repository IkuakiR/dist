//残金
let wallet = 12800;
//価格
let price = 980;
let i;

for ( i = 1; wallet > 750; i++) {
    if (i > 4) {
        price = 750;
    }
    wallet = wallet - price;
    console.log(`${i}回目の買い物成功。残金は${wallet}円`);
}