function calculaMedia(...medias: number[]): number {
    const soma: number = medias.reduce((acc, curr) => acc + curr, 0);
    const media: number = soma / medias.length;
    return media;
}

console.log(calculaMedia(7, 8, 9, 10, 5).toFixed(2));
console.log(calculaMedia(6, 8, 9, 10, 2, 7).toFixed(2));
console.log(calculaMedia(4, 5, 6, 8, 9, 10).toFixed(2));
console.log(calculaMedia(5, 6, 7, 8, 9, 10, 8).toFixed(2));
console.log(calculaMedia(3, 5, 7, 8, 9, 10, 8, 2).toFixed(2));
console.log(calculaMedia(5, 6, 7, 8, 9, 4, 10).toFixed(2));
console.log(calculaMedia(2, 5, 6, 8, 9, 10, 2, 4).toFixed(2));