const lineGraphFormatter = ({ data }) => {
    const col = [
        { label: "susceptible", type: "number" },
        { label: "exposed", type: "number" },
        { label: "infected", type: "number" },
        { label: "resistant", type: "number" },
    ]

    const rows = data.map(
        (point) => (
            [
                parseInt(point.susceptible, 10),
                parseInt(point.exposed, 10),
                parseInt(point.infected, 10),
                parseInt(point.resistant, 10),
            ]
        )
    )
    return [rows, col]
}
module.exports = {
    lineGraphFormatter
}