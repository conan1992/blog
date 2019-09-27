function ScratchCard(config) {
    // 默认配置
    this.config = {
        // canvas元素
        canvas: null,
        // 直接全部刮开的百分比
        showAllPercent: 65,
        // 图片图层
        coverImg: null,
        // 纯色图层，如果图片图层值不为null，则纯色图层无效
        coverColor: null,
        // 全部刮开回调
        doneCallback: null,
        // 擦除半径
        radius: 20,
        // 屏幕倍数
        pixelRatio: 1,
        // 展现全部的淡出效果时间（ms）
        fadeOut: 2000
    }
    Object.assign(this.config, config);
    
    this.canvas = this.config.canvas
    this.ctx = null;
    this.offsetX = null;
    this.offsetY = null;
    // 是否在画布上处于按下状态
    this.isDown = false;
    // 是否已完成刮刮卡
    this.done = false;
    this._init();
}
ScratchCard.prototype = {
	_init: function(){
		var that = this;
		this.ctx = this.canvas.getContext('2d');
		this.offsetX = this.canvas.offsetLeft;
		this.offsetY = this.canvas.offsetTop;
		this._addEvent();
		if(this.config.coverImg){
			// 如果设置的图片涂层
			var coverImg = new Image();
			coverImg.src = this.config.coverImg;
			// 读取图像
			coverImg.onload = function(){
				// 绘制图像
				that.ctx.drawImage(coverImg, 0, 0);
				that.ctx.globalCompositeOperation = 'destination-out';
			}
		}else{
			// 如果没设置图片涂层，则使用纯色涂层
			this.ctx.fillStyle = this.config.coverColor;
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.globalCompositeOperation = 'destination-out';
		}
	},
	_addEvent: function() {
		this.canvas.addEventListener('touchstart', this._eventDown.bind(this), { passive: false });
		this.canvas.addEventListener('touchend', this._eventUp.bind(this), { passive: false });
		this.canvas.addEventListener('touchmove', this._scratch.bind(this), { passive: false });
		this.canvas.addEventListener('mousedown', this._eventDown.bind(this), { passive: false });
		this.canvas.addEventListener('mouseup', this._eventUp.bind(this), { passive: false });
		this.canvas.addEventListener('mousemove', this._scratch.bind(this), { passive: false });
	},
	_eventDown: function(e){
		e.preventDefault();
		this.isDown = true;
	},
	_eventUp: function(e){
		e.preventDefault();
		this.isDown = false;
	},
	_scratch: function(e) {
		e.preventDefault();
	    var that = this;
	    if (!this.done && this.isDown) {
	        if (e.changedTouches) {
	            e = e.changedTouches[e.changedTouches.length - 1];
	        }
	        var x = (e.clientX + document.body.scrollLeft || e.pageX) - this.offsetX || 0,
	            y = (e.clientY + document.body.scrollTop || e.pageY) - this.offsetY || 0;
	        with(this.ctx) {
	            beginPath()
	            arc(x * that.config.pixelRatio, y * that.config.pixelRatio, that.config.radius * that.config.pixelRatio, 0, Math.PI * 2);
	            fill();
	        }
	    }
	}

}
