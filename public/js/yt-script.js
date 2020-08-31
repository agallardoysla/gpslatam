/* VIDEO ID
* To obtain a youtube's video's id you need to open the video in your browser
* click in the "share" option and copy the given link. e.g.: https://youtu.be/eBU_Fxd0Jf4
* lastly select only the last part of the link which would be the video's id: eBU_Fxd0Jf4
* Replace it to the videoId propertie in the below players
*/

/* PLAYER SIZE
* Player's size are easily configurable according the below objects
* the main player's size is controlled by css
*/

let secondary_video_sizes = {
  height: 135,
  width: 240
}

function onYouTubeIframeAPIReady(){
  // Create players
  player_0 = new YT.Player('yt-player-0', {
    videoId: 'eBU_Fxd0Jf4',
  })
  player_1 = new YT.Player('yt-player-1', {
    height: secondary_video_sizes.height,
    width: secondary_video_sizes.width,
    videoId: 'eBU_Fxd0Jf4',
  })
  player_2 = new YT.Player('yt-player-2', {
    height: secondary_video_sizes.height,
    width: secondary_video_sizes.width,
    videoId: 'eBU_Fxd0Jf4',
  })
  player_3 = new YT.Player('yt-player-3', {
    height: secondary_video_sizes.height,
    width: secondary_video_sizes.width,
    videoId: 'eBU_Fxd0Jf4',
  })
  player_4 = new YT.Player('yt-player-4', {
    height: secondary_video_sizes.height,
    width: secondary_video_sizes.width,
    videoId: 'eBU_Fxd0Jf4',
  })
  player_5 = new YT.Player('yt-player-5', {
    height: secondary_video_sizes.height,
    width: secondary_video_sizes.width,
    videoId: 'eBU_Fxd0Jf4',
  })
}
