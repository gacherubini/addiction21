import React from 'react';

function AddicastSoundCloudIFrame(props) {
  return (
    <div className="SoundCloud">
      <iframe
        width="100%%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
          fontWeight: '100',
        }}
      >
        <a
          href="https://soundcloud.com/neverdogs"
          title="neverdogs"
          target="_blank"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          neverdogs
        </a>{' '}
        ·{' '}
        <a
          href="https://soundcloud.com/neverdogs/neverdogs-at-bamboleo-water-park-fest-desenzano-del-garda-it-2nd-september-2023-mstrd"
          title="Neverdogs At Bamboleo Water Park Fest - Desenzano Del Garda (IT) 2nd September 2023"
          target="_blank"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          Neverdogs At Bamboleo Water Park Fest - Desenzano Del Garda (IT) 2nd September 2023
        </a>
      </div>
    </div>
  );
}

export default AddicastSoundCloudIFrame;
