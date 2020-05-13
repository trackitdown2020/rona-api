const googleNewsMapper = ({
    source: {
        id,
        name
    },
    ...rest
}) => {
    return ({
        sourceId: id,
        sourceName: name,
        ...rest
    })
}

module.exports = {
    googleNewsMapper
}