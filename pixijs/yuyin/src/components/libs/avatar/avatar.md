## 头像

用于网页展示用户的头像。

## 基本使用

可以使用`src`属性设置图片的路径，`round`属性可以设置头像容器是否展示圆角。

```vue
<ds-avatar src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar round src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
```

## 图片适应方式

`fit`属性用于设置头像不同的使用容器方式，与原生`object-fit`属性使用相同。

```vue
<ds-avatar fit="fill" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar fit="cover" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar fit="none" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar fit="contain" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar fit="scale-down" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
```

## 不同大小

使用`size`属性可以设置不同头像的大小，当然也可以传入指定的数值，会自动转为`px`单位。

```vue
<ds-avatar size="mini" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar size="small" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar size="medium" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar size="large" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>
<ds-avatar size="50" src="https://static0.xesimg.com/super-community/public/defaultAvatar.png"/>

```

## 属性

|参数|说明|类型|必填|可选值|默认值|
|-|-|-|-|-|
|`src`|图片路径|string|是|--|--|
|`size`|图片大小|string|否|`mini`、`small`、`middle`、`large`|--|
|`alt`|图片说明|string|否|--|avatar|
|`round`|是否为圆角|boolean|否|--|`false`|
|`fit`|图片适应容器|string|否|`fill`、`contain`、`cover`、`none`、`scale-down`|--|
