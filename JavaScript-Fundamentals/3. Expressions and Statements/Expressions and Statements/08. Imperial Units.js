function impertialUnits([units]) {
    units = Number(units);
    let foot = Math.floor(units / 12);
    let inches = units % 12;
    console.log(`${foot}'-${inches}"`);
}
