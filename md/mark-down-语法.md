
[markdown语法说明](https://www.appinn.com/markdown/#markdown-%E8%AF%AD%E6%B3%95%E8%AF%B4%E6%98%8E-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%E7%89%88)

## 一、标题

想要设置为标题的文字前面加#来表示一个#是一级标题，二个#是二级标题，以此类推。支持六级标题

# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

---

## 二、字体

加粗：要加粗的文字左右分别用两个*号包起来

斜体：要倾斜的文字左右分别用一个*号包起来

斜体加粗：要倾斜和加粗的文字左右分别用三个*号包起来

删除线：要加删除线的文字左右分别用两个~~号包起来

### 示例：

**这是加粗的文字**

*这是倾斜的文字*

***这是斜体加粗的文字***

~~这是加删除线的文字~~


---

## 三、引用

在引用的文字前加>即可。引用也可以嵌套，如加两个>>三个>>>n个...
引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：

### 示例：

>## 这是引用的内容
>>这是引用的内容
>>>>>>>>这是引用的内容

---

## 四、分割线

三个或者三个以上的 - 或者 * 都可以

### 示例：

---
----
***
*****


## 五、图片

### 语法：

    ![图片alt](图片地址 ''图片title'')

    图片alt就是显示在图片下面的文字，相当于对图片内容的解释。

    图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加

### 示例：

![](https://imonkey-courseware-prod.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%2010%403x.png)

---

## 六、超链接

### 语法：

[超链接名](超链接地址 "超链接title")  <>
title可加可不加

### 示例：

[简书](http://jianshu.com)
[百度](http://baidu.com)

注：Markdown本身语法不支持链接在新页面中打开，貌似简书做了处理，是可以的。别的平台可能就不行了，如果想要在新页面中打开的话可以用html语言的a标签代替。

<a href="超链接地址" target="_blank">超链接名</a>

### 示例
<a href="https://www.jianshu.com/u/1f5ac0cf6a8b" target="_blank">简书</a>

---

## 七、列表

### 无序列表

### 语法：
无序列表用 - + * 任何一种都可以

- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格

### 有序列表

### 语法：数字接着一个英文句点：

1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格

### 列表嵌套

上一级和下一级之间敲三个空格即可 或制表键

- 一级无序列表内容
    - 二级无序列表内容

1. 一级有序列表内容
    1. 二级有序列表内容


---

## 八、代码区块

### 语法：缩进 4 个空格或是 1 个制表符  或 单行代码：代码之间分别用一个反引号包起来  代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行

    这是一个代码区块

`单行代码`

```
多行代码   
```
---

## 九、表格

### 语法：

表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略

### 示例：

姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟


## 十、流程图





