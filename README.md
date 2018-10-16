
# 基于gulp，TypeScript，tslint的react-native开发模板

> 这是一个基于当前最新版本react-native@0.57.6的开发模板，内部使用。

## 开发

```bash
# 克隆项目
git clone git@github.com:zhangtinghang/react-native-template.git

# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题。
npm install --registry=https://registry.npm.taobao.org

# 建议使用yarn安装相关依赖，npm安装react-native可能会出现失败的问题，安装yarn操作。
npm install -g yarn

# 安装完 yarn 后设置镜像源：
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

# 安装依赖
yarn install

# 若有dist文件，请先清除开始的构建缓存，安卓：cd android && ./gradlew clean IOS：同理，暂未测试
# 重新打包代码
npm run build

# 运行代码
# 运行代码前请先运行android模拟器或连接真机
react-native run-android

# 后续操作（热更新，调试等）请看官方文档
[react-native(中文官网)](https://reactnative.cn/)

```

## 文件目录
````

Dir:

    -android                安卓构建目录
    -dist                   gulp输出目录 (默认值：dist)
    -ios                    IOS构建目录
    -src                    组件库等
     -root.tsx              整合后的入口文件
    -App.js                 入口文件
    -Gulpfile.js            glup配置文件
    -index.js               挂载RN组件目录
    -package.json           依赖包文件
    -rn-cli.config.js       RN配置TypeScript依赖文件
    -tsconfig.json          TypeScript配置文件
    -tslint.json            TypeScript检查配置文件
    -yarn.lock              yarn依赖文件
    
````