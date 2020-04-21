const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {

        name: '南城',
        artist: '陈柏霖',
        url: 'https://sharefs.yun.kugou.com/202003031726/4f7017924dcd3e8a50c1cb06b2f0f4e4/G093/M09/18/1F/_YYBAFlsCkKAbcrTAEs2nh7uDS0206.mp3',
        cover: 'http://q6eshhifg.bkt.clouddn.com/17aec2113d5695641ab8b50a20cda797.jpg',
      },
     {
        name: '嗜好',
        artist: '戾格',
        url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_82309107&response=res&type=convert_url&',
        cover: 'http://q6eshhifg.bkt.clouddn.com/9abf87aff436cc76627353c2cc28ed82.jpg',
      },
      {
        name: '北木南',
        artist: '花僮',
        url: 'https://sharefs.yun.kugou.com/202003031717/be997c82c567b171a7301c635226b6e3/G164/M0A/01/11/5A0DAF1koB-ADlszADDY5U51IdE005.mp3',
        cover: 'http://q6eshhifg.bkt.clouddn.com/c836dec325d182b704ef6d2c56496fe6.jpeg',
      },
      {
        name: '云烟成雨',
        artist: '房东的猫',
        url: 'https://sharefs.yun.kugou.com/202003031716/34fa3f5d80641dd38bedad2df716bcec/G109/M05/05/13/rQ0DAFnpY2SAAvIbADrNO6PRQ7A835.mp3',
        cover: 'http://q6eshhifg.bkt.clouddn.com/40796d61ac0fdfab5c7e22ffdd8b1f5c.jpg',
      }
    ]
});