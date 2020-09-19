const youtubeMapper = ({
    id: {
        videoid
    },
    snippet: {
        publishedAt,
        title,
        description,
        thumbnails,
        channelTitle
    },
    ...rest
}) => {
    return ({
        id: {
            videoid
        },
        snippet: {
            publishedAt,
            title,
            description,
            channelTitle
        },
        ...rest
    })
}

module.exports = {
    youtubeMapper
}