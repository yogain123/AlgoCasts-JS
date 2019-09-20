console.log(1);
console.log(1);

function palindrom(a: number, b: number): void {
    let c = a + b;
    if (c > 150)
        return;
    console.log(c);
    a = b;
    b = c;
    palindrom(a, b) // Recursion
}

palindrom(1, 1);