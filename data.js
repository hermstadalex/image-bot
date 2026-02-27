// Mock Database Configuration for Podcast Asset Engine
// Add or remove clients and their corresponding asset reference URLs here.

const configData = {
    clients: [
        {
            id: 'afk',
            name: 'AFK',
            assets: {
                youtube_thumbnail: 'https://raw.githubusercontent.com/hermstadalex/n8nassets/refs/heads/main/afkYT.jpg',
                podcast_art: 'https://raw.githubusercontent.com/hermstadalex/n8nassets/refs/heads/main/image-20.jpg'
            }
        },
        {
            id: 'tyr',
            name: 'TYR',
            assets: {
                quotecard: 'https://raw.githubusercontent.com/hermstadalex/n8nassets/refs/heads/main/TYR_quotecard2.jpg'
            }
        },
        {
            id: 'any',
            name: 'ANY',
            assets: {
                podcast_art: 'https://raw.githubusercontent.com/hermstadalex/n8nassets/refs/heads/main/695e9ca06a9123d14c91070d.jpg',
                youtube_thumbnail: 'https://raw.githubusercontent.com/hermstadalex/n8nassets/refs/heads/main/anyYT1.jpg'
            }
        }
    ]
};
