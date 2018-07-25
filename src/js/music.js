// 加载播放音乐 实例一个对象
		var audio = new Audio();
        audio3 = audio;
        // 设置音乐路径
        audio.src = 'src/music/BIGBANG - IF YOU (2015 Made世界巡回演唱会马来西亚站).mp3';
        audio.loop = true;
        audio.id = 'myAudio3';
        audio.autoplay = true;
        audio.play();