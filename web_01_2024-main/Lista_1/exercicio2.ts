function Par(numero: number): boolean {
    return numero % 2 === 0;
}
if (Par(5)) {
    console.log("É par");
}
else
    console.log("É impar")