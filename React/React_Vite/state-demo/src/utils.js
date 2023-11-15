function random6() {
    return Math.floor(Math.random() * 6) + 1;
}

function getRolls(n) {
    return Array.from({ length: n }, () => random6());
}

function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0);
}

export { random6, getRolls, sum };