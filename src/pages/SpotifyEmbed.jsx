
function SpotifyEmbed() {
    const embedData = {
        "html": "<iframe style=\"border-radius: 12px\" width=\"100%\" height=\"352\" title=\"Spotify Embed: Addiction 21 Records\" frameborder=\"0\" allowfullscreen allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\" src=\"https://open.spotify.com/embed/playlist/54RA0urFikxwWAUmIHFiy1?si=220c973d91a4417a&utm_source=oembed\"></iframe>",
        "width": 456,
        "height": 352,
        "version": "1.0",
        "provider_name": "Spotify",
        "provider_url": "https://spotify.com",
        "type": "rich",
        "title": "Addiction 21 Records",
        "thumbnail_url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b452748a7b8c6e8a9eae6bf7",
        "thumbnail_width": 300,
        "thumbnail_height": 300,
        "iframe_url": "https://open.spotify.com/embed/playlist/54RA0urFikxwWAUmIHFiy1?si=220c973d91a4417a&utm_source=oembed"
    };

    return (
        <div className="spotify-embed-container">
            {/* Perigo: Use dangerouslySetInnerHTML com cuidado */}
            <div dangerouslySetInnerHTML={{ __html: embedData.html }} />
        </div>
    );
}

export default SpotifyEmbed;
