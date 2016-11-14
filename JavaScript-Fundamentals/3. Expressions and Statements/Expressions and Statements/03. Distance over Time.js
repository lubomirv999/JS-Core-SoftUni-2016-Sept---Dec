function distanceOverTime([v1, v2, t]) {
    v1 = Number(v1);
    v2 = Number(v2);
    t = Number(t) / 3600;

    let s1 = v1 * t;
    let s2 = v2 * t;
    let dist = Math.abs(s1 - s2);

    console.log(dist * 1000);
}
