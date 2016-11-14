function distin3d([x1, y1, z1, x2, y2, z2]) {
    x1 = Number(x1);
    y1 = Number(y1);
    z1 = Number(z1);
    x2 = Number(x2);
    y2 = Number(y2);
    z2 = Number(z2);

    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);
    let z = Math.abs(z1 - z2);

    let dist = Math.sqrt(x * x + y * y + z * z);
    console.log(dist);
}
