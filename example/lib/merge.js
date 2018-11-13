/*
 var config = {
 position: [[0, 0], [512, 0], [0, 512], [512, 512]],
 data: [
 'http://mt3.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=27&y=10&z=5&s=Galil',
 'http://mt3.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=27&y=13&z=5&s=Galil',
 'http://mt3.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=27&y=11&z=5&s=Galil',
 'http://mt3.google.cn/vt/lyrs=y@142&hl=zh-CN&gl=cn&x=51&y=24&z=6&s=Galil'
 ],
 msg: document.getElementById('imgBox'),
 base64: [],
 canvasWidth: 1024,
 canvasHeight: 1024,
 canvasFillStyle: '#fff',
 imgWidth: 512,
 imgHeight: 512
 }

 merge()
 */

/**
 * 根据图片进行图片合并
 * */

var MergeImage = {
  merge4_4: function (opiton) {
    var canvas = document.createElement('canvas');
    canvas.width = opiton.canvasWidth;
    canvas.height = opiton.canvasHeight;

    var ctx = canvas.getContext('2d');
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = opiton.canvasFillStyle;
    ctx.fill();

    function drawing(next) {
      if (next < opiton.data.length) {
        var img = new Image;
        img.crossOrigin = 'Anonymous'; //解决跨域
        img.src = opiton.data[next];
        img.onload = function () {
          ctx.drawImage(img, opiton.position[next][0], opiton.position[next][1], opiton.imgWidth, opiton.imgHeight);
          drawing(next + 1);//递归
        }
      } else {
        // 回调
        opiton.callback(canvas.toDataURL("image/png", 1), opiton.pano)
      }
    }

    drawing(0);
  }
}
