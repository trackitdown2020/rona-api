const youtubeMapper = ({
    id: {
        videoId
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
            videoId
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