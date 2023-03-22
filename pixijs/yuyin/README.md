# 项目目录结构

```shell
├──mocks                                   # mocks 相关
    └──proxy.js                             # 代理配置
└──src
    ├── api                             # 后端接口管理
    │   ├── index.ts                    # 接口管理出入口
    │   └── ...                         # 具体的不同业务/服务接口文件
    ├── assets                          # 项目依赖资源管理
    │   ├── images                      # 图片资源
    │   ├── styles                      # 样式资源
    │   └── scripts                     # 依赖的第三方 sdk 之类的 js 资源
    ├── components                      # 项目组件目录
    │   ├── public                      # 公共组件/基础组件（比如基础的按钮/输入框等）
    │   │   ├── index.ts                # 基础组件的注册文件【可选】
    │   │   ├── README.md               # 组件使用说明文档【可选】
    │   │   └── ...                     # 组件
    │   └── ....                        # 基础性的业务组件
    ├── hooks                           # 公共钩子函数
    ├── pages                           # 多页面（router）使用
    │   ├── modules                     # 具体业务所归属的文件夹（可以用业务名称作为文件夹名字）
    │   │   ├── components              # 业务所用到的组件
    │   │   ├── views                   # 业务的所有页面
    │   │   ├── utils                   # 业务的工具集
    │   │   ├── static                  # 业务所用到的静态资源
    │   │   ├── service                 # 业务的后端接口管理
    │   │   ├── store                   # 业务所用到的状态库（本结构基于Vue，这里是业务的Vuex）
    │   │   └── index.ts                # 业务的唯一出口（包含路由与状态库）
    │   └── ....                        # 其他业务
    ├── router                          # vue-router 配置文件
    ├── views                           # 单页面（非router）使用
    ├── utils                           # 项目所用的工具集（封装的请求，表单的验证函数，时间格式化.....的工具）
    │   ├── index.ts                    # 工具的入口
    │   └── ...                         # 具体的各个工具（请求封装、正则、验证......）【U-1】
    ├── index.ts
    ├── App.vue
```

## 项目约定

- 文件夹名统一小写命名，使用`-`分隔，如：`top-bar`
- Vue文件统一使用大驼峰形式，首字母大写，多文件时可使用文件夹下使用index作为主文件

## mock使用说明

--line=proxy 参数会使接口发向本地
通过proxy转发，详情请查看proxy/index.js

## eruda使用说明

开发环境执行 npm run dev 自动开启 eruda
测试环境 k8s 执行 npm run build:test 开启 eruda
