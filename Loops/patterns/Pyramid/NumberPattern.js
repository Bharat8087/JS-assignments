let n = 7;
for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i; j >= 1; j--) {
        line += j;
    }
    console.log(line);
}