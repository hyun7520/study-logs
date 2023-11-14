function random6() {
    return Math.floor(Math.random() * 6) + 1;
}

export function getRolls(n) {
    return Array.from({ length: n }, () => random6());
}