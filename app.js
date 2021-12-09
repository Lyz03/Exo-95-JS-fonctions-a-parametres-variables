// 1
function part1(...params) {
    let str = 'Bojour ';
    params.forEach(value => str += value + ' ');
    return str
}

document.querySelector('p').innerText = part1('param1', 'param2', 'param3') + '\n' +
    part1('param1bis', 'param2bis');

// 2
function part2(...params) {
    let calc = 0;
    params.forEach(value => {
        if (Number.isInteger(value)) {
            calc += value
        }
    });
    let div = document.createElement('div');
    div.innerText = calc.toString();
    document.body.appendChild(div);
}

part2(1 ,2, 3, 1);
part2(2, 8);
part2(5, 1, 2, 1, 3, 7);

// 3
function part3(...params) {
    let calc = 0;
    params.forEach(value => {
        if (Number.isInteger(value)) {
            calc += value
        }
    });
    calc = Math.round(calc * 11.76)
    let div = document.createElement('div');
    div.innerText = calc.toString();
    document.body.appendChild(div);
}

part3(1 ,2, 3, 1);
part3(2, 8);
part3(5, 1, 2, 1, 3, 7);

