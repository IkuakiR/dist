let num = prompt();
num = Number(num);

if (num < 1 || num > 50) {
    console.log(`1から50の数値を入れてください`);
}
else {
    for (let i = 1; i <= num; i++) {
        console.log(`${i}回目`);
    }
}