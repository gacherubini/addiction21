import React from 'react'

function AddicastSoundCloudIFrame(id) {
    
  return (
    <div className="SoundCloud">
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/neverdogs" title="neverdogs" target="_blank" style="color: #cccccc; text-decoration: none;">neverdogs</a> · <a href="https://soundcloud.com/neverdogs/neverdogs-at-bamboleo-water-park-fest-desenzano-del-garda-it-2nd-september-2023-mstrd" title="Neverdogs At Bamboleo Water Park Fest - Desenzano Del Garda (IT) 2nd September 2023" target="_blank" style="color: #cccccc; text-decoration: none;">Neverdogs At Bamboleo Water Park Fest - Desenzano Del Garda (IT) 2nd September 2023</a></div>
    </div>
  )
}

export default AddicastSoundCloudIFrame