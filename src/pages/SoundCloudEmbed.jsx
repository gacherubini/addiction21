function SoundCloudEmbed() {
    return (
        <div>
            <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1683448938&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
            </iframe>
            <div style={{
                fontSize: '10px',
                color: '#cccccc',
                lineBreak: 'anywhere',
                wordBreak: 'normal',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                fontWeight: 100
            }}>
                <a href="https://soundcloud.com/addictionlabel21" title="Addiction 21" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>
                    Addiction 21
                </a>
                &nbsp;·&nbsp;
                <a href="https://soundcloud.com/addictionlabel21/sets/addiction-records-ep-the-first" title="EP: L.A. Odyssey - Addiction 21 Records (ADD001)" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>
                    EP: L.A. Odyssey - Addiction 21 Records (ADD001)
                </a>
            </div>
        </div>
    );
}

export default SoundCloudEmbed;
