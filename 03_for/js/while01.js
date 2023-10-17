let mp = 100;
while (mp > 0) {
    mp = mp - 7;
    if (mp < 0) {
        console.log('残りMPは0です');
    }
    else {
        console.log(`残りMPは${mp}です`);
    }
}