const { Solver } = require('odex');

class SIRModel {
    constructor(b, g) {
        this.b = b;
        this.g = g;
        this.solver = new Solver(3)
    }

    createModel(x, y) {

    }

    getProjections(S, I, R) {
        let projections = [];
        this.solver.denseOutput = true;
        this.solver.solve(SIR(2.2, 0.19), 0, [S, I, R], t_end, s.grid(1, (x, y) => {
            console.log(x, y);
            projections.push([x, y]);
        })).y;
        return projections
    }
}


// var SIR = function (b, g) {
//     return function (x, y) {
//         //x is time (t) ,y[0] = S y[1] = I y[2] = R
//         return [
//             -b * y[0] * y[1],
//             b * y[0] * y[1] - g * y[1],
//             g * y[1]
//         ];
//     };
// };

// let test = new SIRModel();
module.exports = test;

test.getProjections()
//initial condition
let S = 100;
let I = 10;
let R = 0;
let t_end = 10;

//scale
// S = 1;
// I = I / S;
// R = 0;

s = new Solver(3);
s.denseOutput = true;
s.solve(SIR(2.2, 0.19), 0, [S, I, R], t_end, s.grid(1, (x, y) => {
    console.log(x, y);


})).y;