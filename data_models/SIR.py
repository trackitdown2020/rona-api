from scipy.integrate import odeint
import numpy as np
import os
import sys
import json
from json import JSONEncoder


class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)


def deriv(y, t, N, beta, gamma, delta):
    S, E, I, R = y
    dS = -beta * S * I / N
    dE = beta * S * I / N - delta * E
    dI = delta * E - gamma * I
    dR = gamma * I
    return dS, dE, dI, dR


def integ(y0, t, N, beta, gamma, delta):
    ret = odeint(deriv, y0, t, args=(N, beta, gamma, delta))
    S, E, I, R = ret.T
    return S, E, I, R


N = 10000

E = 1
D = 4.0  # infections lasts four days
gamma = 1.0 / D
delta = 1.0 / 5.0  # incubation period of five days
R_0 = 5.0
beta = R_0 * gamma  # R_0 = beta / gamma, so beta = R_0 * gamma
S0, E0, I0, R0 = N-E, E, 0, 0  # initial conditions: one exposed

t = np.linspace(0, 99, 100)  # Grid of time points (in days)
y0 = S0, E0, I0, R0  # Initial conditions vector
# Integrate the SIR equations over the time grid, t.
# ret = odeint(deriv, y0, t, args=(N, beta, gamma, delta))
# S, E, I, R = ret.T


S, E, I, R = integ(y0, t, N, beta, gamma, delta)
results = {
    'susceptible': S,
    'exposed': E,
    'infected': I,
    'resistant': R
}


def read_in():
    value = input()
    return json.loads(value)


def main():
    variables = read_in()
    susceptible = variables['susceptible']
    exposed = variables['exposed']
    infected = variables['infected']
    resistant = variables['resistant']
    return susceptible, exposed, infected, resistant


# Start process
if __name__ == '__main__':
    susceptible, exposed, infected, resistant = main()
    N = susceptible
    E = exposed
    D = 4.0  # infections lasts four days
    gamma = 1.0 / D
    delta = 1.0 / 5.0  # incubation period of five days
    R_0 = 5.0
    beta = R_0 * gamma  # R_0 = beta / gamma, so beta = R_0 * gamma
    S0, E0, I0, R0 = N-E, E, 0, 0  # initial conditions: one exposed

    t = np.linspace(0, 99, 100)  # Grid of time points (in days)
    y0 = S0, E0, I0, R0  # Initial conditions vector

    S, E, I, R = integ(y0, t, N, beta, gamma, delta)
    S.tolist()
    E.tolist()
    I.tolist()
    R.tolist()

    results = {
        'susceptible': S,
        'exposed': E,
        'infected': I,
        'resistant': R
    }

    results_json = json.dumps(results, cls=NumpyArrayEncoder)
    print(results_json)
    sys.stdout.flush()
