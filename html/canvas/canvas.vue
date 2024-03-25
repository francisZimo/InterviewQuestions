<template>
    <view class="container">
        <cover-view v-if="isLoading" class="loading-mask ">
            <cover-view class="loading-text">加载中...</cover-view>
        </cover-view>
        <view class="filter-area">
            <uni-data-picker placeholder="可筛选座位(区域/排/座位)" popup-title="请选择" :localdata="dataTree"
                @popupopened="handleFilterOpen" @popupclosed="handleFilterClose" @change="handleFilterClick">
            </uni-data-picker>
        </view>
        <view class="main-content">
            <cover-view v-if="isShowThumbnail" :style="thumbnailStyle" class="thumbnail-box">
                <cover-image :src="tempFilePath" class="thumbnail-img"></cover-image>
                <cover-view :style="visibleAreaStyle" class="visible-area"></cover-view>
            </cover-view>

            <view class="canvas-area" :style="canvasStyle">
                <view :style="canvasStyle" class="canvas-wrapper">
                    <!-- <canvas class="canvas-box" :style="canvasStyle" id="myCanvas" canvas-id="myCanvas"
						@touchstart="onCanvasTouchStart" @touchmove="onCanvasTouchMove"
						@touchend="onCanvasTouchEnd"></canvas> -->
                    <!-- <canvas id="myCanvas1" type="2d" class="canvasCus" /> -->
                    <canvas class="canvas-box" id="myCanvas" type="2d" @touchstart="onCanvasTouchStart"
                        @touchmove="onCanvasTouchMove" @touchend="onCanvasTouchEnd"></canvas>
                    <!-- <image v-if="isShowTempImg" :src="tempCanvasImg" class="charts"></image> -->
                    <!-- 备份 -->
                    <!-- <cover-view v-if="isShowSeatImg" class="seat-view" :style="seatPosition">
						<cover-view class="seat-toast-content">
							<cover-image class="seat-img" :src="imgUrl" alt=""></cover-image>
							<cover-view class="blank-space">
								<cover-view class="seat">1楼</cover-view>
								<cover-view class="divider"></cover-view>
								<cover-view class="seat">10排</cover-view>
								<cover-view class="divider"></cover-view>
								<cover-view class="seat">20座</cover-view>
							</cover-view>
						</cover-view>
						<cover-image class="seat-anchor" src="/static/triangle-down.png"></cover-image>
					</cover-view> -->
                </view>
            </view>
            <!-- <canvas v-if="isShowTemp" class="temp-canvas-box" :style="tempStyle" id="tempCanvas"
				canvas-id="tempCanvas"></canvas> -->
            <canvas v-if="isShowTemp" class="temp-canvas-box" :style="tempStyle" id="tempCanvas" type="2d"
                canvas-id="tempCanvas"></canvas>
        </view>
        <view class="footer-area">
            <view class="btn" @click="zoomIn(0.2)">放大</view>
            <view class="btn" @click="zoomOut(0.2)">缩小</view>
            <view class="btn" @click="reset">还原</view>
        </view>
        <cover-view v-if="isShowSeatImg" class="seat-view-box" @click="handleCloseSeatInfo">
            <cover-view class="seat-view">
                <cover-view class="seat-toast-content">
                    <cover-view class="seat-img-wrapper">
                        <!-- <cover-image class="seat-img" :src="imgUrl" alt=""></cover-image> -->
                        <cover-image v-if="curSeatInfo.picture" class="seat-img" :src="curSeatInfo.picture"
                            alt=""></cover-image>
                        <cover-view v-else class="img-error-tips">暂无图片,快来上传吧~</cover-view>
                    </cover-view>
                    <cover-view class="blank-space">
                        <cover-view class="seat">{{ curSeatInfo.region }}</cover-view>
                        <cover-view class="divider"></cover-view>
                        <cover-view class="seat">{{ curSeatInfo.row }}排</cover-view>
                        <cover-view class="divider"></cover-view>
                        <cover-view class="seat">{{ curSeatInfo.seat }}座</cover-view>
                    </cover-view>
                </cover-view>
                <!-- <cover-image class="seat-anchor" src="/static/triangle-down.png"></cover-image> -->
            </cover-view>
        </cover-view>

    </view>
</template>

<script>
import CanvasBase from './utils/canvas.js'

import {
    throttle,
    convertDataToDataTree
} from './utils/tools.js'
let initialDistance = 0;
let seatInfoList = null;
let seatMapInfo = {} // 区域/行/座位 映射信息
let canvasClass = null // 自定义canvas实例
let canvasContext = null // canvas实例
// let seatInfoList = seatInfo.datas;
export default {
    data() {
        return {
            classes: '1-0',
            dataTree: [{
                text: "一年级",
                value: "1-0",
                children: [{
                    text: "1.1班",
                    value: "1-1"
                },
                {
                    text: "1.2班",
                    value: "1-2"
                }
                ]
            },
            {
                text: "二年级",
                value: "2-0",
                children: [{
                    text: "2.1班",
                    value: "2-1"
                },
                {
                    text: "2.2班",
                    value: "2-2"
                }
                ]
            },
            {
                text: "三年级",
                value: "3-0",
                disable: true
            }
            ],
            canvasContainerBox: { // 画布容器盒子宽高
                width: 700,
                height: 700
            },
            scaleBase: 1, // 初始基础缩放
            scale: 1, // 实时缩放
            preScale: 1, // 上一次缩放
            baseXPoint: 0, // 基础x坐标偏移
            baseYPoint: 0, // 基础y坐标偏移
            // canvasClass:null, // 自定义canvas实例
            maxScale: 0.8, // 最大缩放
            minScale: 0.1, // 最小缩放
            scaleStep: 0.5, // 每次缩放步长
            offset: { // 画布绘制前偏移
                x: 0,
                y: 0
            },
            curOffset: { // 绘制后的当前偏移
                x: 0,
                y: 0
            },
            mousePos: { // 中心点放大还是参照鼠标位置放大 【目前统一按照中心点放大】
                x: 0,
                y: 0
            },
            isLoading: true, // canvas loading
            widthRatio: 1, // 画布和css宽比率
            heightRatio: 1,
            startX: 0, // 手指触摸开始x坐标
            startY: 0, // 手指触摸开始y坐标
            canvasStyle: 'width: 400px; height: 400px; ', // 画布样式
            tempStyle: '', // 临时画布样式
            imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F35a87c2e-fd4b-4d46-92d8-58886d5caeea%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705415354&t=743620e4a460804f9783ad939be4912d',
            seatPosition: '', // 座位视角定位
            isShowSeatImg: false, // 座位视角是否显示
            isShowThumbnail: false, // 缩略图展示
            curSelectSeat: null, // 当前选中的座位的信息
            thumbnailInfo: { // 缩略图信息
                width: 200,
                height: 200,
                top: 0,
                left: 0,
                changeWidth: 0,
                changeHeight: 0
            },
            innerBoxInitInfo: { // 初始缩略图内部box信息
                width: 200,
                height: 200
            },
            thumbnailStyle: '', // 缩略图样式
            isShowCanvas: false,
            visibleAreaStyle: '', // 缩略图可视区域【小矩形】样式
            canvasInitInfo: { // 缩放后的画布信息
                width: 400,
                height: 400
            },
            thumbnailScale: 1, // 缩略图缩放比例
            seatBoxHeight: 330, // 座位视角盒子高度
            isTouchMoving: false, // 是否正在移动
            canvasType: '', // 当前canvas类型 cache(缓存资源:伪离屏canvas) || target(目标)
            tempFilePath: '', // 临时画布资源图片路径
            isShowTemp: true, // 是否显示缓存canvas
            boundary: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            isCancelDraw: false,
            diffOffsetY: 0, // 画布与真实座位中间的差值
            initClick: false, // 初始化点击
            curSeatInfo: { // 当前选择座位的信息
                region: '--',
                row: '--',
                seat: '--',
                index: 0,
                picture: ''
            },
            isFirstTraversal: true, // 是否第一次遍历
            tempCanvasImg: '', // 临时画布图片 
            isShowTempImg: false, // 是否显示临时画布图片
            dprCanvasInfo: {
                width: 0,
                height: 0
            },
            curScale: 1 // 累计scale
        }
    },
    onLoad() {

    },
    onReady() {

    },

    mounted() {
        this.getSeatInfo()
        // 计算弹窗盒子高度
        this.seatBoxHeight = uni.upx2px(this.seatBoxHeight);




    },
    methods: {
        getSeatInfo() {
            this.$masks.ajax({
                url: this.$masks.baseUrl + this.$masks.baseApi + '/theatre/get_seats?field_id=2',
                success: (res) => {
                    uni.hideLoading()
                    const {
                        code,
                        data
                    } = res.data
                    if (code == 1) {
                        const res = data
                        console.log(res, '===res')
                        seatInfoList = res.datas
                        // 动态获取画布容器盒子宽高
                        uni.createSelectorQuery().select('.main-content').boundingClientRect((rect) => {
                            const width = parseInt(rect.width)
                            const height = parseInt(rect.height)
                            this.canvasContainerBox = {
                                width,
                                height
                            }
                            this.init()
                        }).exec();
                        // 转换数据
                        const fieldOptions = res.field_options
                        if (fieldOptions) {
                            const {
                                regions,
                                rows,
                                seats
                            } = fieldOptions
                            const filterData = convertDataToDataTree(regions, rows, seats)
                            this.dataTree = filterData;
                        }
                    } else {
                        this.$masks.toast(res.data.msg);
                    }
                },
                finally: () => {
                    uni.hideLoading()
                }
            });

        },

        handleFilterClick(e) {
            const filterList = e.detail.value;
            const mapId = filterList.map((item) => {
                return item.value
            }).join('-')
            this.isShowSeatImg = true;
            this.isShowTempImg = false;
            this.curSeatInfo = seatMapInfo[mapId]
        },
        // 导出缩略图
        exportThumbnail() {
            // tempCanvas 作为离屏canvas
            // const tempCtx = uni.createCanvasContext('tempCanvas', this);
            // canvasContext = tempCtx;
            // tempCtx.setLineWidth(4)
            // this.canvasType = 'cache'
            // this.userDraw()
            wx.createSelectorQuery()
                .select('#tempCanvas') // 在 WXML 中填入的 id
                .fields({
                    node: true,
                    size: true
                })
                .exec((res) => {
                    // Canvas 对象
                    const canvas = res[0].node
                    // Canvas 绘制上下文
                    const ctx = canvas.getContext('2d')
                    canvasContext = ctx;
                    this.canvasType = 'cache'
                    this.userDraw()

                })

            uni.canvasToTempFilePath({
                canvasId: 'tempCanvas',
                success: (res) => {

                    this.tempFilePath = res.tempFilePath;
                    console.log('tempFilepath', tempFilePath)
                    const diffOffset = 3;
                    const width = this.thumbnailInfo.width - diffOffset;
                    const height = this.thumbnailInfo.height - diffOffset;
                    this.visibleAreaStyle =
                        `width: ${width}px; height: ${height}px;`;
                }
            }, this);
        },

        // 初始化数据
        initData() {
            const rectCanvas = this.calculateBoundingRectangle()
            console.log(rectCanvas, '==rectCanvas')

            this.canvasInfo = rectCanvas;
            const {
                x,
                y,
                width,
                height
            } = rectCanvas
            this.baseXPoint = x;
            this.baseYPoint = y;
            let scale = 1;
            scale = +(this.canvasContainerBox.width / width).toFixed(2)
            console.log(scale, '==scalexxxx')
            this.scaleBase = scale;
            this.scale = scale;
            this.preScale = scale;
            this.minScale = scale;
            // this.widthRatio = (width / this.canvasContainerBox.width).toFixed(2);
            // this.heightRatio = (height / this.canvasContainerBox.height).toFixed(2);
            this.widthRatio = 2;
            this.heightRatio = 2;

        },

        // 计算画布边界
        calculateBoundingRectangle() {
            let minX = Infinity;
            let minY = Infinity;
            let maxX = -Infinity;
            let maxY = -Infinity;
            const data = seatInfoList;
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                const x = item.p.location.x;
                const y = item.p.location.y;
                if (!item.p.width) {
                    // console.log(item)
                }
                if (!item.p.height) {
                    // console.log(item)
                }

                const width = item.p.width || 0;
                const height = item.p.height || 0;
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x + width);
                maxY = Math.max(maxY, y + height);
            }

            const width = maxX - minX;
            const height = maxY - minY;
            return {
                x: minX,
                y: minY,
                width: width,
                height: height
            };
        },
        // 初始化页面
        async init() {
            this.initData()
            this.tempStyle = `width: ${this.canvasInfo.width}px; height: ${this.canvasInfo.height}px;`
            setTimeout(() => {
                this.exportThumbnail()
                this.startTargetCanvas()
                this.isShowTemp = false;
                this.isLoading = false;
            }, 300)

        },

        // 开始绘制目标canvas
        startTargetCanvas() {
            let width = Math.round(this.canvasInfo.width * this.scale)
            let height = Math.round(this.canvasInfo.height * this.scale)
            // 反推原数据偏移
            this.diffOffsetY = (this.canvasContainerBox.height - height) / 2
            // this.baseYPoint -= this.diffOffsetY / this.scale;
            this.baseYPoint -= this.diffOffsetY;

            this.boundary = {
                left: 0,
                right: width,
                top: 0,
                bottom: height
            }
            this.canvasInitInfo = {
                width,
                height
            }
            const thumbnailScale = this.canvasInitInfo.width / this.thumbnailInfo.width;
            this.thumbnailScale = thumbnailScale


            this.thumbnailInfo.width = this.thumbnailInfo.width;
            this.thumbnailInfo.height = this.canvasInitInfo.height / thumbnailScale;
            this.thumbnailStyle =
                `width: ${this.thumbnailInfo.width}px; height: ${this.thumbnailInfo.height}px; `
            let style = `width: ${width}px; height: ${this.canvasContainerBox.height}px;`
            this.canvasStyle = style;
            // const ctx = uni.createCanvasContext('myCanvas', this);
            wx.createSelectorQuery()
                .select('#myCanvas') // 在 WXML 中填入的 id
                .fields({
                    node: true,
                    size: true
                })
                .exec((res) => {
                    // Canvas 对象
                    const canvas = res[0].node

                    // Canvas 画布的实际绘制宽高
                    // const renderWidth = res[0].width
                    // const renderHeight = res[0].height
                    const renderWidth = this.canvasInfo.width
                    const ratio = this.canvasContainerBox.width / this.canvasContainerBox.height
                    const renderHeight = renderWidth / ratio
                    // Canvas 绘制上下文
                    const ctx = canvas.getContext('2d')
                    canvasContext = ctx;
                    // 初始化画布大小
                    const dpr = wx.getWindowInfo().pixelRatio
                    console.log(dpr, '==dpr', renderWidth, renderHeight)
                    // canvas.width = renderWidth * dpr
                    // canvas.height = renderHeight * dpr
                    canvas.width = renderWidth
                    canvas.height = renderHeight
                    console.log(canvas.width, canvas.height, '==canvas.width')
                    // ctx.scale(dpr, dpr)
                    // this.curScale *= dpr
                    this.dprCanvasInfo = {
                        width: canvas.width,
                        height: canvas.height
                    }

                    // canvasContext = ctx;
                    this.canvasType = 'target'
                    // 生成自定义canvas实例
                    const canvasBase = new CanvasBase({
                        ctx: canvasContext
                    })
                    canvasClass = canvasBase;
                    this.draw()
                    this.isShowCanvas = true;


                })

        },
        // 重新绘制
        draw() {
            console.log('===draw', this.scale)
            canvasClass.reset()
            this.clearCanvas();

            if (this.scale === this.scaleBase && !this.isTouchMoving) {
                console.log('渲染', this.scale)
                canvasContext.translate(0, 0);
                // canvasContext.strokeRect(0, 0, 400, 400)
                // canvasContext.scale(this.scale, this.scale);

                // canvasContext.setLineWidth(4); // 设置边框宽度
                this.userDraw();

                // 缩略图
                this.thumbnailInfo.top = 0;
                this.thumbnailInfo.left = 0;
                this.thumbnailInfo.changeWidth = this.thumbnailInfo.width;
                this.thumbnailInfo.changeHeight = this.thumbnailInfo.height;

            } else {

                canvasContext.translate(this.offset.x, this.offset.y);
                canvasContext.scale(this.scale, this.scale);
                console.log(this.scale, this.offset, '==drawoffset')
                // canvasContext.setLineWidth(4); // 设置边框宽度
                if (this.isTouchMoving) {
                    if (this.tempFilePath) {
                        console.log("==缩略图")
                        canvasContext.drawImage(this.tempFilePath, 0, this.diffOffsetY / this.scaleBase * (this
                            .scale / this.preScale),
                            this.canvasInfo
                                .width, this.canvasInfo
                            .height);
                        canvasContext.draw()


                        console.log('j1')
                    } else {
                        console.log('===h1')
                        this.userDraw();
                    }
                } else {
                    console.log('===h2')
                    this.userDraw();
                }
                // 视角弹窗定位
                // if (this.curSelectSeat) {
                // 	const config = this.curSelectSeat
                // 	const left = config.x * this.scale + this.offset.x + 'px'
                // 	const top = config.y * this.scale + this.offset.y - config.radius * this.scale - this
                // 		.seatBoxHeight + 'px'
                // 	this.seatPosition = `left: ${left}; top: ${top};`
                // }
                // 缩略图展示
                // this.drawThumbnail()
            }

            // const overLayoutInfo = this.isOverLayout()
            // if (overLayoutInfo.left) {
            // 	this.thumbnailInfo.left = 0
            // }
            // if (overLayoutInfo.right) {
            // 	this.thumbnailInfo.left = this.thumbnailInfo.width - this.thumbnailInfo.changeWidth
            // }
            // if (overLayoutInfo.top) {
            // 	this.thumbnailInfo.top = 0
            // }
            // if (overLayoutInfo.bottom) {
            // 	this.thumbnailInfo.top = this.thumbnailInfo.height - this.thumbnailInfo.changeHeight
            // }
            // const changeStyle =
            // 	`width: ${this.thumbnailInfo.changeWidth}px; height:${this.thumbnailInfo.changeHeight}px; `
            // this.visibleAreaStyle =
            // 	`${changeStyle} left:${this.thumbnailInfo.left}px; top:${this.thumbnailInfo.top}px;`

        },
        // 缩略图展示
        drawThumbnail() {
            // 缩略图展示
            const {
                width,
                height
            } = this.thumbnailInfo;
            const diffScale = this.scale / this.scaleBase;
            const _changeWidth = width / diffScale;
            const _changeHeight = this.canvasContainerBox.height / this.thumbnailScale / diffScale;
            this.thumbnailInfo.left = -this.offset.x / this.thumbnailScale / diffScale;
            this.thumbnailInfo.changeWidth = _changeWidth > width ? width : _changeWidth;

            // 多出来的空余高度比例
            const offsetScale = this.diffOffsetY / this.canvasContainerBox.height
            const thumbnailOffsetHeight = offsetScale * (height / (1 - offsetScale * 2));
            this.thumbnailInfo.top = -thumbnailOffsetHeight + -(this.offset.y) / this.thumbnailScale / diffScale;
            this.thumbnailInfo.changeHeight = _changeHeight > height ? height : _changeHeight;

        },

        isOverLayout() {
            const {
                left,
                top,
                changeWidth,
                changeHeight,
                width,
                height
            } = this.thumbnailInfo;
            const offsetInfo = {
                left: left < 0,
                right: left + changeWidth > width,
                top: top < 0,
                bottom: top + changeHeight > height
            }
            return offsetInfo
        },

        // 放大
        zoomIn(step, isMouse = false) {
            // this.scale += step ? step : this.scaleStep;
            // // this.scale = +this.scale.toFixed(2)
            // if (this.scale > this.maxScale) {
            // 	this.scale = this.maxScale;
            // }
            // this.zoom.call(this, isMouse);
            this.scale = 1 + (step ? step : this.scaleStep);
            this.curScale *= this.scale
            // this.scale = +this.scale.toFixed(2)
            // if (this.scale > this.maxScale + 1) {
            // 	this.scale = this.maxScale + 1;
            // }
            this.zoom.call(this, isMouse);

        },

        // 缩小
        zoomOut(step, isMouse = false) {
            this.scale = 1 - (step ? step : this.scaleStep);
            this.curScale *= this.scale
            // this.scale = +this.scale.toFixed(2)

            // if (this.scale < this.minScale) {
            // 	this.scale = this.minScale;
            // }
            this.zoom.call(this, isMouse);
        },

        zoom(isMouse = false) {
            // this.preScale = 1
            // 是否居中放大
            if (isMouse) {
                this.mousePos.x = this.mousePos.x;
                this.mousePos.y = this.mousePos.y;

            } else {
                this.mousePos.x = this.canvasInitInfo.width / 2;
                this.mousePos.y = this.canvasContainerBox.height / 2;
            }

            console.log(this.mousePos.x, this.mousePos.y, '==this.mousePos.x,this.mousePos.y', this.offset.x, this.offset.y, this.scale)

            // 放大系数：this.scale / this.preScale =>n
            // 先偏移后缩放：offsetX = x*n-x;  偏移为：-offsetX
            let offsetx = -((this.mousePos.x - this.offset.x) * this.scale - (this.mousePos.x - this.offset.x));
            let offsety = -((this.mousePos.y - this.offset.y) * this.scale - (this.mousePos.y - this.offset.y))
            console.log(offsetx, offsety, '===xxxyyy')
            this.offset.x = offsetx;
            this.offset.y = offsety;
            // this.offset.x = this.mousePos.x - ((this.mousePos.x - this.offset.x) * this.scale) / this.preScale;
            // this.offset.y = this.mousePos.y - ((this.mousePos.y - this.offset.y) * this.scale) / this.preScale;
            this.draw();
            this.preScale = this.scale;
            this.curOffset.x = this.offset.x;
            this.curOffset.y = this.offset.y;
        },
        clearCanvas() {
            // canvasContext.clearRect(0, 0, this.canvasInitInfo.width, this.canvasInitInfo.height);
            // canvasContext.clearRect(0, 0);
            // canvasContext.clearRect(0, 0, this.dprCanvasInfo.width * this.curScale, this.dprCanvasInfo.height * this
            // 	.curScale);
        },
        // 还原
        reset() {
            this.clear();
            this.draw();
        },
        // 清除地图并还原对象所有设置
        clear() {
            this.clearCanvas();
            this.scale = this.scaleBase; // 当前缩放
            this.preScale = this.scaleBase; // 当前缩放
            this.offset = {
                x: 0,
                y: 0
            }; // 拖动偏移
            this.curOffset = {
                x: 0,
                y: 0
            }; // 当前偏移
            this.mousePos = { // 中心点放大还是参照鼠标位置放大 【目前统一按照中心点放大】
                x: 0,
                y: 0
            };
        },

        // 用户绘制逻辑
        userDraw(isDraw = true) {
            seatInfoList.forEach((item) => {

                if (this.isFirstTraversal) {
                    if (item['c']) {
                        const seatCoordinate = item['c']
                        const region = seatCoordinate['business.region']
                        const row = seatCoordinate['business.row']
                        const seat = seatCoordinate['business.seat']
                        if (region && row && seat) {
                            const mapkey = `${region}-${row}-${seat}`
                            seatMapInfo[mapkey] = {
                                region,
                                row,
                                seat,
                                index: -1,
                                picture: item?.angle?.picture
                            }
                        }
                    }
                }
                console.log('==遍历中')
                let type = 'seat'
                if (item.class.indexOf('StageNode') > -1) {
                    type = 'stage'
                }
                if (item.class.indexOf('RegionNode') > -1 && item.class.indexOf('ShapeRegionNode')) {
                    type = 'region'
                }
                if (item.class.indexOf('ShapeRegionNode') > -1) {
                    type = 'shapeRegion'
                }
                if (item.class.indexOf('RowNode') > -1) {
                    type = 'row'
                }
                if (item.class.indexOf('SeatNode') > -1) {
                    type = 'seat'
                }
                if (type === 'stage') {
                    this.handleStage(item)
                }

                if (type === 'region') {
                    this.handleRegion(item)
                }

                if (type === 'shapeRegion') {
                    this.handleShapeRegion(item)
                }

                if (type === 'row') {
                    this.handleRow(item)
                }
                if (type === 'seat') {
                    this.handleSeat(item)
                }
            })
            this.isFirstTraversal = false
            // isDraw && canvasContext.draw();
            console.log('绘制结束')
        },
        // 绘制矩形
        drawRectangle(payload) {
            const {
                context,
                x,
                y,
                width,
                height
            } = payload;
            // context.beginPath();
            // context.strokeStyle = 'black'; // 设置边框颜色
            // context.rect(x, y, width, height);
            // context.closePath();
            // context.stroke();
            // context.strokeStyle = 'black'
            context.strokeRect(x, y, width, height)

        },
        // 绘制文本
        drawText(payload) {
            const {
                context,
                x,
                y,
                name
            } = payload;
            context.beginPath()
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = 'black';
            context.fillText(name, x, y);
            context.closePath()

        },
        // 绘制圆形
        drawCircle(payload) {
            const {
                context,
                x,
                y,
                radius,
                isFill,
                info
            } = payload;
            const angle = info.angle;
            context.beginPath();
            context.strokeStyle = 'black'
            context.arc(x, y, radius, 0, 2 * Math.PI);
            if (isFill) {
                let curColor = angle && angle.picture ? '#CF3B34' : '#C8C8C8'
                context.lineWidth = 2;
                context.arc(x, y, radius, 0, 2 * Math.PI)
                context.closePath()
                context.fillStyle = curColor;
                context.fill();
            }
            context.stroke()

        },
        // 绘制多边形
        drawPolygon(info) {
            const {
                context,
                points
            } = info
            if (points.length < 3) {
                return;
            }
            context.beginPath();
            context.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length; i++) {
                context.lineTo(points[i].x, points[i].y);
            }
            context.strokeStyle = 'black'
            context.closePath();
            context.stroke()

        },
        handleRegion(info) {
            const style = info.s
            const position = info.p
            if (style['vector.shape'] && style['vector.shape'] === 'rectangle') {
                this.drawRectangle({
                    context: canvasContext,
                    x: position.location.x - this.baseXPoint,
                    y: position.location.y - this.baseYPoint,
                    width: position.width,
                    height: position.height,
                })
            }

            if (style['vector.shape'] && style['vector.shape'] === 'circle') {
                this.drawCircle({
                    context: canvasContext,
                    x: position.location.x - this.baseXPoint + position.width / 2,
                    y: position.location.y - this.baseYPoint + position.height / 2,
                    radius: position.height / 2,
                    isFill: false
                })
            }
        },
        // 处理座位
        handleSeat(info) {
            const position = info.p;
            const circleInfo = {
                radius: position.height / 2,
                x: position.location.x - this.baseXPoint,
                y: position.location.y - this.baseYPoint,
                info: {
                    c: info.c,
                    isSelect: info.isSelect,
                    angle: info.angle
                },
                isFill: true
            }
            if (this.canvasType === 'target') {
                canvasClass.circle(circleInfo)
                // const circleInstance = canvasClass.circle(circleInfo)
                // circleInstance.on('touchend', (shapeInfo) => {
                // 	const originData = shapeInfo.config.info
                // 	const angle = originData.angle
                // 	// 有图片才点击
                // 	if (angle && angle.picture) {
                // 		if (originData.c) {
                // 			for (let i = 0; i < seatInfoList.length; i++) {
                // 				const item = seatInfoList[i]
                // 				if (JSON.stringify(originData.c) === JSON.stringify(item.c)) {
                // 					console.log('===命中了')

                // 					seatInfoList[i].isSelect = !seatInfoList[i].isSelect;
                // 					if (seatInfoList[i].isSelect) {
                // 						const {
                // 							config
                // 						} = shapeInfo
                // 						const seatInfo = config?.info?.c || {};
                // 						this.curSeatInfo = {
                // 							region: seatInfo['business.region'] || '--',
                // 							row: seatInfo['business.row'] || '--',
                // 							seat: seatInfo['business.seat'] || '--',
                // 							index: i,
                // 							picture: angle.picture || ''
                // 						}
                // 						this.curSelectSeat = config
                // 						const left = config.x * this.scale + this.offset.x + 'px'
                // 						const top = config.y * this.scale + this.offset.y - config.radius *
                // 							this.scale - this.seatBoxHeight + 'px'
                // 						this.seatPosition = `left: ${left}; top: ${top};`
                // 						this.isShowSeatImg = true;

                // 					} else {
                // 						this.isShowSeatImg = false;
                // 					}

                // 				} else {
                // 					seatInfoList[i].isSelect = false
                // 				}
                // 			}
                // 		}

                // 		this.draw()
                // 	}
                // })
            } else {
                // 绘制圆形
                circleInfo.context = canvasContext
                this.drawCircle(circleInfo)

            }

        },
        handleShapeRegion(info) {
            const position = info.p
            const positionList = position.points;
            const points = positionList.map((item) => {
                return {
                    x: item.x - this.baseXPoint,
                    y: item.y - this.baseYPoint
                }
            })
            this.drawPolygon({
                context: canvasContext,
                points
            })
        },
        handleStage(stageInfo) {
            const StagePayload = {
                context: canvasContext,
                x: stageInfo.p.location.x - this.baseXPoint,
                y: stageInfo.p.location.y - this.baseYPoint,
                width: stageInfo.p.width,
                height: stageInfo.p.height,
            }
            this.drawRectangle(StagePayload)
            const textInfo = {
                context: canvasContext,
                name: stageInfo.p.name,
                x: StagePayload.x + StagePayload.width / 2,
                y: StagePayload.y + StagePayload.height / 2
            }
            this.drawText(textInfo)
        },
        // 处理row提示
        handleRow(info) {
            const style = info.s
            const position = info.p
            const payload = {
                context: canvasContext,
                x: position.location.x - this.baseXPoint + (style['label.xoffset'] || 0),
                y: position.location.y - this.baseYPoint + (style['label.yoffset'] || 0),
                name: position.name
            }
            this.drawText(payload)
        },
        onCanvasTouchStart(e) {
            this.isTouchMoving = false
            if (e.touches.length >= 2) {
                // 计算两点之间的距离
                let xMove = e.touches[0].x - e.touches[1].x;
                let yMove = e.touches[0].y - e.touches[1].y;
                initialDistance = Math.sqrt(xMove * xMove + yMove * yMove);

            } else {
                this.startX = e.touches[0].x
                this.startY = e.touches[0].y
                this.mousePos.x = e.touches[0].x;
                this.mousePos.y = e.touches[0].y;
                // 初始化scale点击时
                if (this.scale === this.scaleBase) {
                    // 在缩放canvas的范围内点击
                    const gap = (this.canvasContainerBox.height - this.canvasInitInfo.height) / 2
                    if (this.mousePos.y > gap && this.mousePos.y < this.canvasInitInfo.height + gap) {
                        this.initClick = true
                        this.scale = this.maxScale;
                        this.zoomIn(this.maxScale - this.scale, true)
                    }

                }
            }



        },


        onCanvasTouchMove(e) {
            this.isShowThumbnail = true;
            this.isTouchMoving = true;
            // if (this.initClick) {
            // 	return;
            // }
            if (e.touches.length >= 2) {
                let xMove = e.touches[0].x - e.touches[1].x;
                let yMove = e.touches[0].y - e.touches[1].y;

                // 新的触摸点间距离
                let distance = Math.sqrt(xMove * xMove + yMove * yMove);

                // 计算新旧触摸点间距离差异, 得到缩放值
                const scale = distance / initialDistance;

                if (scale >= 1) {
                    this.zoomIn()
                } else {
                    this.zoomOut()
                }

                initialDistance = distance;

            } else {
                // 初始无法拖动
                if (this.scaleBase === this.scale) {
                    return
                }

                let offsetX = this.curOffset.x + (e.touches[0].x - this.startX) * this.widthRatio;
                let offsetY = this.curOffset.y + (e.touches[0].y - this.startY) * this.heightRatio;

                this.drawThumbnail()
                const overLayoutInfo = this.isOverLayout()

                const oldOffsetx = this.offset.x
                const oldOffsety = this.offset.y

                if (overLayoutInfo.left) {
                    offsetX = offsetX < oldOffsetx ? offsetX : oldOffsetx
                }
                if (overLayoutInfo.right) {
                    offsetX = offsetX > oldOffsetx ? offsetX : oldOffsetx
                }

                if (overLayoutInfo.top) {
                    offsetY = offsetY < oldOffsety ? offsetY : oldOffsety
                }
                if (overLayoutInfo.bottom) {
                    offsetY = offsetY > oldOffsety ? offsetY : oldOffsety
                }
                this.offset.x = offsetX
                this.offset.y = offsetY
                console.log('touch move')
                // this.draw()
            }
        },

        onCanvasTouchEnd(e) {
            console.log('touchEnd')
            this.initClick = false;
            this.curOffset.x = this.offset.x;
            this.curOffset.y = this.offset.y;
            this.isShowThumbnail = false;
            this.isTouchMoving = false;
            console.log(this.scaleBase, this.scale, '===scalexxx')
            // if (this.scaleBase === this.scale) {
            // 	return
            // }
            // this.draw()
            // canvasClass.handleEvent(e, {
            // 	curOffset: this.curOffset,
            // 	scale: this.scale
            // })
        },
        handleCloseSeatInfo() {
            this.isShowSeatImg = false;
            this.isShowTempImg = false;
            if (this.curSeatInfo.index > -1) {
                seatInfoList[this.curSeatInfo.index].isSelect = false
                this.draw()
            }
        },
        handleFilterOpen() {
            this.isShowTempImg = true;
            // this.handleCanvarToImg(() => {
            // 	this.isShowTempImg = true;
            // })
        },
        handleFilterClose() {
            this.isShowTempImg = false;
        },
        handleCanvarToImg(cb) {
            uni.canvasToTempFilePath({
                canvasId: 'myCanvas',
                success: (res) => {
                    this.tempCanvasImg = res.tempFilePath;
                    cb && cb()
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.canvasCus {
    width: 200px;
    height: 200px;
    border: 1px solid red;
}

.container {
    width: 750rpx;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .filter-area {
        width: 100%;
        height: 100rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f8;
        text-align: center;
    }

    .footer-area {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
    }

    .main-content {
        width: 100%;
        flex: 1;
        background-color: #F5F5F5;
        position: relative;

        .canvas-area {
            position: absolute;
        }
    }

    .loading-mask {
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;

        color: red;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 99999;

        .loading-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

.content {
    width: 750rpx;
    height: 600px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    background-color: #f8f8f8;
}

.thumbnail-box {
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0px;
    right: 3px;
    z-index: 200;

    .thumbnail-img {
        width: 100%;
        height: 100%;
    }

    .visible-area {
        position: absolute;
        top: 0px;
        left: 0;
        z-index: 100;
        border: 2px solid red;
    }
}

.canvas-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.seat-view-box {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.seat-view {
    position: absolute;
    width: 434rpx;
    top: 50%;
    left: 50%;
    z-index: 200;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .seat-toast-content {
        background-color: #fff;
        box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
        border-radius: 20rpx 20rpx 20rpx 20rpx;
    }

    .seat-img-wrapper {
        width: 100%;
        height: 336rpx;
        background-color: #333;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .seat-img {
        object-fit: contain;
    }

    .img-error-tips {
        color: #fff;
        font-size: 30rpx;
    }

    .blank-space {
        width: 100%;
        height: 120rpx;
        display: flex;
        justify-content: center;
        align-items: center;

        .seat {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 34rpx;
            color: #333;
            text-align: center;
            font-family: PingFang SC, PingFang SC;
            font-weight: 500;
        }

        .divider {
            width: 0px;
            height: 44rpx;
            opacity: 0.4;
            border: 2px solid #999999;
            background-color: #ccc;
        }
    }

    // 三角形
    .seat-anchor {
        width: 28rpx;
        height: 14rpx;
        // background: url('./img/triangle-down.png') no-repeat center / 100%;
        margin: 0 auto;
    }
}

// 备份
// .seat-view {
// 	position: absolute;
// 	width: 334rpx;
// 	top: 0;
// 	left: 0;
// 	z-index: 200;
// 	transform: translateX(-50%);
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;

// 	.seat-toast-content {
// 		background-color: #fff;
// 		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
// 		border-radius: 20rpx 20rpx 20rpx 20rpx;
// 	}


// 	.seat-img {
// 		width: 100%;
// 		height: 236rpx;
// 		overflow: hidden;
// 	}

// 	.blank-space {
// 		width: 100%;
// 		height: 80rpx;
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;

// 		.seat {
// 			flex: 1;
// 			display: flex;
// 			align-items: center;
// 			justify-content: center;
// 			font-size: 24rpx;
// 			color: #333;
// 			text-align: center;
// 			height: 34rpx;
// 			font-size: 24rpx;
// 			font-family: PingFang SC, PingFang SC;
// 			font-weight: 500;
// 		}

// 		.divider {
// 			width: 0px;
// 			height: 22rpx;
// 			opacity: 0.4;
// 			border: 2px solid #999999;
// 			background-color: #ccc;
// 		}
// 	}

// 	// 三角形
// 	.seat-anchor {
// 		width: 28rpx;
// 		height: 14rpx;
// 		// background: url('./img/triangle-down.png') no-repeat center / 100%;
// 		margin: 0 auto;
// 	}
// }


.canvas-box {
    width: 750rpx;
    height: 800px;
}

.temp-canvas-box {
    width: 400px;
    height: 400px;
}

.btn {
    width: 50px;
    height: 30px;
    border: 1px solid red;
    margin-bottom: 10px;
}
</style>