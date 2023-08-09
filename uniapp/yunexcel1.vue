<template>
  <view class="content">
    <button @click="callNativeExportExcel">导出Excel单Sheet</button>
    <button @click="callNativeReadExcel">读取Xls文件</button>
    <button @click="callNativeExportExcelMoreSheet">导出Excel多Sheet</button>
    <button @click="callNativeReadExcelMoreSheets">读取Excel多Sheet</button>
    <button @click="callNativeExportExcelMerge">
      导出Excel单Sheet合并单元格
    </button>
    <button @click="callNativeExportExcelXlsx">导出Excel多Sheet Xlsx</button>
    <button @click="callNativeReadExcelXlsx">读取Xlsx文件</button>
    <view class="text-area">
      <text class="title">数据返回:{{ title }}</text>
    </view>
  </view>
</template>

<script>
// 获取 module
var getModel = uni.requireNativePlugin('yuange-YGExcelModule');
//单sheetName导出json格式
var json = {
  excelData: [
    {
      sheetName: '名单',
      cell_title: '姓名',
      cell_title_font_size: '12',
      cell_title_color: '9',
      cell_title_bg_color: '12',
      cell_title_align: '2',
      cell_title_border_color: '0',
      cell_value_font_size: '10',
      cell_value_color: '32767',
      cell_value_bg_color: '9',
      cell_value_align: '2',
      cell_value_border_color: '0',
      cell_title_rowHight: '350',
      cell_value_rowHight: '350',
      cell_columWidth: '15',
      cell_value: ['王二', '张三', '李四', '老七'],
      picture_path: '/sdcard/pic.png',
      picture_cellRow: '5',
      picture_cellCol: '5',
    },
    {
      sheetName: '名单',
      cell_title: '年级',
      cell_title_font_size: '12',
      cell_title_color: '9',
      cell_title_bg_color: '12',
      cell_title_align: '2',
      cell_title_border_color: '0',
      cell_value_font_size: '10',
      cell_value_color: '32767',
      cell_value_bg_color: '9',
      cell_value_align: '2',
      cell_value_border_color: '0',
      cell_title_rowHight: '350',
      cell_value_rowHight: '350',
      cell_value: ['一年级', '二年级', '三年级', '四年级'],
    },
    {
      sheetName: 'sheetName2',
      cell_title: '年龄',
      cell_title_font_size: '12',
      cell_title_color: '9',
      cell_title_bg_color: '12',
      cell_title_align: '2',
      cell_title_border_color: '0',
      cell_value_font_size: '10',
      cell_value_color: '32767',
      cell_value_bg_color: '9',
      cell_value_align: '2',
      cell_value_border_color: '0',
      cell_title_rowHight: '350',
      cell_value_rowHight: '350',
      cell_value: ['7岁', '8岁', '9岁', '10岁'],
    },
  ],
};

//多sheetName导出json格式
var jsonMoreSheet = {
  data: [
    {
      excelData: [
        {
          sheetName: '名单',
          cell_title: '姓名',
          cell_title_font_size: '12',
          cell_title_color: '9',
          cell_title_bg_color: '12',
          cell_title_align: '2',
          cell_title_border_color: '0',
          cell_value_font_size: '10',
          cell_value_color: '32767',
          cell_value_bg_color: '9',
          cell_value_align: '2',
          cell_value_border_color: '0',
          cell_title_rowHight: '350',
          cell_value_rowHight: '350',
          cell_columWidth: '15',
          cell_value: ['王二', '张三', '李四', '老七'],
          picture_path: '/sdcard/pic.png',
          picture_cellRow: '5',
          picture_cellCol: '5',
        },
      ],
    },
    {
      excelData: [
        {
          sheetName: '成绩',
          cell_title: '分数',
          cell_title_font_size: '12',
          cell_title_color: '9',
          cell_title_bg_color: '12',
          cell_title_align: '2',
          cell_title_border_color: '0',
          cell_value_font_size: '10',
          cell_value_color: '32767',
          cell_value_bg_color: '9',
          cell_value_align: '2',
          cell_value_border_color: '0',
          cell_title_rowHight: '350',
          cell_value_rowHight: '350',
          cell_columWidth: '15',
          cell_value: ['90', '85', '100', '89'],
        },
      ],
    },
  ],
};

var jsonMerge = {
  //处理合并单元格:
  //注意如果业务需要处理合并单元格，第一个索引的对象是设置标题，如果不需要合并，请设置hasMerge=false,接下来列值的合并从第二个索引开始计算
  //如果都不需要合并单元格此对象不传即可
  mergeExcelData: [
    {
      leftTopCol: 0, //最左上角的列号
      leftTopRow: 0, //最左上角的行号
      rigthBottomCol: 2, //最右角的列号
      rigthBottomRow: 0, //最右下角的行号
      hasMerge: true, //是否设置合并
    },
    {
      leftTopCol: 0,
      leftTopRow: 1,
      rigthBottomCol: 2,
      rigthBottomRow: 2,
      hasMerge: true,
    },
  ],
  excelData: [
    {
      sheetName: '名单',
      cell_title: '姓名',
      cell_title_font_size: '12',
      cell_title_color: '9',
      cell_title_bg_color: '12',
      cell_title_align: '2',
      cell_title_border_color: '0',
      cell_value_font_size: '10',
      cell_value_color: '32767',
      cell_value_bg_color: '9',
      cell_value_align: '2',
      cell_value_border_color: '0',
      cell_title_rowHight: '350',
      cell_value_rowHight: '350',
      cell_columWidth: '15',
      cell_value: ['王二', '张三', '李四', '老七'],
      picture_path: '/sdcard/pic.png',
      picture_cellRow: '5',
      picture_cellCol: '5',
    },
    {
      sheetName: '名单',
      cell_title: '年级',
      cell_title_font_size: '12',
      cell_title_color: '9',
      cell_title_bg_color: '12',
      cell_title_align: '2',
      cell_title_border_color: '0',
      cell_value_font_size: '10',
      cell_value_color: '32767',
      cell_value_bg_color: '9',
      cell_value_align: '2',
      cell_value_border_color: '0',
      cell_title_rowHight: '350',
      cell_value_rowHight: '350',
      cell_value: ['一年级', '二年级', '三年级', '四年级'],
    },
    {
      sheetName: 'sheetName2',
      cell_title: '年龄',
      cell_title_font_size: '12',
      cell_title_color: '9',
      cell_title_bg_color: '12',
      cell_title_align: '2',
      cell_title_border_color: '0',
      cell_value_font_size: '10',
      cell_value_color: '32767',
      cell_value_bg_color: '9',
      cell_value_align: '2',
      cell_value_border_color: '0',
      cell_title_rowHight: '350',
      cell_value_rowHight: '350',
      cell_value: ['7岁', '8岁', '9岁', '10岁'],
    },
  ],
};

export default {
  onLoad() {},
  data() {
    return {
      title: '',
    };
  },
  methods: {
    callNativeExportExcel() {
      const _this = this;
      getModel.callNativeExportExcel(
        {
          outFilePath: '/sdcard/aaa.xls',
          inExcelData: json,
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
    callNativeReadExcel() {
      const _this = this;

      var ret = getModel.callNativeReadExcel(
        {
          inFilePath: '/sdcard/aaa.xls',
          columTitles: '姓名,年级,年龄',
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
    callNativeReadExcelMoreSheets() {
      const _this = this;
      var ret = getModel.callNativeReadExcelMoreSheets(
        {
          inFilePath: '/sdcard/ddd.xls',
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
    callNativeExportExcelMoreSheet() {
      const _this = this;
      getModel.callNativeExportExcelMoreSheet(
        {
          outFilePath: '/sdcard/ddd.xls',
          inExcelData: jsonMoreSheet,
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
    callNativeExportExcelMerge() {
      const _this = this;
      getModel.callNativeExportExcel(
        {
          outFilePath: '/sdcard/eee.xls',
          inExcelData: jsonMerge,
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
    callNativeExportExcelXlsx() {
      const _this = this;
      getModel.callNativeExportExcelMoreSheetXlsx(
        {
          outFilePath: '/sdcard/bbb.xlsx',
          inExcelData: jsonMoreSheet,
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
    callNativeReadExcelXlsx() {
      const _this = this;
      var ret = getModel.callNativeReadExcelXlsx(
        {
          inFilePath: '/sdcard/bbb.xlsx',
          columTitles: '姓名',
        },
        (ret) => {
          _this.title = JSON.stringify(ret);
        }
      );
    },
  },
};
</script>
