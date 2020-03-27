const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '勇气',
        artist: '棉子',
        url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
        cover: '/images/5.jpg',
      }
    ]
});