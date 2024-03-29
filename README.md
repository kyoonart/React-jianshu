# React 学习 开发简书官网

### 所用到的技术栈

![JgdUQP.png](https://s1.ax1x.com/2020/04/26/JgdUQP.png)

### 运行本项目

```
git clone https://github.com/pengtaoa/React-jianshu.git
cd React-jianshu
npm install
npm start 或者 yarn start
```

### 项目目录结构

        ├── public                                    打包存放目录
        │   ├── api                                   mock本地数据
        │   │   ├── detail.json
        │   │   ├── headerList.json
        │   │   ├── home.json
        │   │   ├── homeList.json
        │   │   └── login.json
        │   ├── favicon.ico                           一些图标
        │   ├── index.html
        │   ├── logo192.png
        │   ├── logo512.png
        │   ├── manifest.json
        │   └── robots.txt
        ├── README.md                                 说明文档
        ├── src                                       主要代码目录
        │   ├── App.js                                根组件
        │   ├── common                                公共组件
        │   │   └── header                            头部导航栏组件
        │   │       ├── index.js                      入口
        │   │       ├── store                         herder区域需要用到的数据
        │   │       │   ├── actionCreater.js          统一管理action
        │   │       │   ├── constants.js              用常量替代所有的action的type值
        │   │       │   ├── index.js                  提供统一对外接口
        │   │       │   └── reducer.js                根据不同的action修改state
        │   │       └── style.js
        │   ├── index.js                              全局默认入口
        │   │   ├── home                              主页组件
        │   │   │   ├── components                    主页的一些相关组件
        │   │   │   │   ├── List.js
        │   │   │   │   ├── Recommed.js
        │   │   │   │   ├── TopIc.js
        │   │   │   │   └── Writer.js
        │   │   │   ├── index.js
        │   │   │   ├── store                         主页需要使用的数据
        │   │   │   │   ├── constants.js
        │   │   │   │   ├── createActions.js
        │   │   │   │   ├── index.js
        │   │   │   │   └── reducer.js
        │   │   │   └── style.js                      主页样式
        │   ├── pages                                 所有的页面
        │   │   ├── detail                            文章详情组件
        │   │   │   ├── index.js
        │   │   │   ├── loadable.js                   使用loadable包装组件，让其可异步加载代码
        │   │   │   ├── store                         详情页面需要使用的数据
        │   │   │   │   ├── constants.js
        │   │   │   │   ├── createActions.js
        │   │   │   │   ├── index.js
        │   │   │   │   └── reducer.js
        │   │   │   └── style.js                      样式
        │   │   ├── login                             登录组件
        │   │   │   ├── index.js
        │   │   │   ├── store                          登录需要使用的数据
        │   │   │   │   ├── constants.js
        │   │   │   │   ├── createActions.js
        │   │   │   │   ├── index.js
        │   │   │   │   └── reducer.js
        │   │   │   └── style.js
        │   │   └── write                             写文章组件
        │   │       └── index.js                      待完善
        │   ├── static                                静态资源文件夹
        │   │   └── iconfont                          存放一些图标
        │   │       ├── iconfont.eot
        │   │       ├── iconfont.js
        │   │       ├── iconfont.svg
        │   │       ├── iconfont.ttf
        │   │       └── iconfont.woff
        │   ├── store                                  全局数据仓库
        │   │   ├── index.js                           唯一的store
        │   │   └── reducer.js                         合并各组件的reducer
        │   └
        └── yarn.lock

### 我做了哪些功能？

1. 首页的样式与布局，没有做响应式
2. 页面头部搜索栏的动画与推荐
3. 页面头部：登陆与退出的跳转
4. 页面头部：写文章的权限验证，没有登陆会跳到登陆页面
5. 登陆页的简单布局。暂时没有验证
6. 文章详情的跳转，虽然点每一个跳过去都是同一篇文章，但发送的 ajax 请求不同

注： 所有的 mock 数据放在 puclic/api

### 项目是如何拆分的？

1. 按照页面进行拆分。 src/pages 目录下的每一个文件夹代表一个页面
2. 每一个页面的文件夹下管理它自己的数据与状态
   通过 combine-reducer ，可以将庞大的 state 分割到多个文件中，在每一个代表页面的文件夹中各自管理各自的数据，可以极大的降低合作成本，并让代码清晰
3. 将通用组件或一个不属于某一个路由的组件如 header 部分放到 src/common 文件夹中，尽可能提高服用度
4. 在 src/App.js 中管理路由
5. 在 src/store/reducer 中合并所有的 reducer

### styled-components

使用 styled-components 有以下几个好处:

1. 零件化。每一个导出的组件其实都是一个有样式的标签，可以方便的被组件使用。
2. 可以像 sass 等一样嵌套标签
3. 样式代码与布局代码分离
4. 避免样式冲突，他不会影响其他组件的样式
5. 方便的为标签添加属性

#### 在 styled-components 中定义有 CSS 样式的标签、标签属性

```javascript
export const HeaderWrapper = styled.div.attrs({
  class: "header",
})`
  height: 58px;
  .somePart {
    color: red;
  }
`;
```

#### 在 styled-components 中使用图片

图片必须先使用 import 导入，因为 webpack 会帮我们把项目打包
在使用的时候使用字符串插槽，即 \${ } 的方式

```javascript
import logoPic from "../../statics/logo.png";

export const Logo = styled.a`
  width: 100px;
  height: 56px;
  background: url(${logoPic});
`;
```

### React Transition Group

react-transition-group 会在动画执行的不同时间点动态的添加一些 class
入场时：
fade-enter
fade-enter-active
离场时：
slide-exit
slide-exit-active

### 使用 combineReducer 对数据拆分管理

如果我们将项目中所有的 reducer 函数都放在一个文件中的话有两个很大的问题：
第一，reducer 函数会变得非常长；
第二，所有的 reducer 放在一起那么合作的成本就会特别高，因为大家都在频繁修改同一文件。

使用 combineReducer 可以合并多个 reducer, 所以与 store 相连的 reducer 可以被简化为下面这个样子。

```
import { combineReducers } from 'redux'
import {reducer as headerReducer} from '../common/header/stroe'

export default combineReducers({
  header: headerReducer
})
```

combineReducer 能够使得我们可以将 reducer 拆分，我们可以把 reducer 文件放到组件对应文件夹下，让一个组件文件夹就包含了整个组件所有信息。
现在，我们就有能力在一个文件夹内就将组件的全都信息描述完整

```
│  index.js   //容器组件
│  style.js   //CSS样式 (这里使用了styled-components，描述了标签类型、标签的样式、标签原生属性)
│
└─stroe   //管理数据的文件夹
        index.js            //将actionCreator、reducer、constants导出
        actionCreators.js   //管理action的产生
        constants.js        //管理action类型，把action的type值变成常量
        reducer.js          //管理整个组件涉及到的reducer
```

### 定义一个事件需要做那几步？

1. 在组件上挂载某事件的回调函数（在 render 函数入口处使用解构运算符结构出这个函数）
2. 在 mapDispatchToProps 中定义对应的函数
3. 在 constants.js 中定义一个变量作为 aciton 的 type
4. 在 actionCreators 中定义一个的 action。
5. 在 mapDispatchToProps 中的函数中 dispatch 这个 action (这一步熟练后课合并到第二步)
6. 在 reducer 的 switch 语句中添加对这个 action 的处理

### immutable.js

immutable.js 是一个第三方的库，它可以帮助我们生成一个 immutable 对象，这个对象是不可以被改变的。如果将 store 向 reducer 传递的 state 包装成一个 immutable 对象的话就可以避免直接修改 state 这种情况的发生。

fromJS 可以把对象包装为 immutable 对象

```JavaScript
const defaultState = fromJS({
  focused: false
})
```

set 方法
immutable 对象的 set 方法会拷贝之前 immutable 对象的值和设置的新值，返回一个全新的对象，他不会去真的修改原对象。

```JavaScript
state.set('focused', true);
```

get 方法
immutable 对象不可以直接使用 “.” 或者 [] 来直接获取对象值，必须通过 get 方法

```JavaScript
let focused = header.get('focused')
```

getIn 方法

```JavaScript
state.getIn(['header','focused'])
//等价于以下代码
state.get('header').get('focused')
```

### redux-immutable

虽然使用了 immutable.js 让 combineReducer 拆出来的组件的 reducer 中的 state 变成了 immutable 对象，但是整个项目的 store 还是一个普通的 JS 对象，使用 redux-immutable 就可以让整个 store 变成一个 immutable 对象。
我们在直接连接 store 的 reducer 中用 redux-immutable 生成一个 combineReducers，用它替换 redux 自带的 combineReducers

```JavaScript
import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/stroe'

export default combineReducers({
  header: headerReducer
})
```

**immutable 中将数据设置为异步数据**
使用 fromJS 函数处理过的 state 对象是 immutable 对象，而异步请求获得的数据为普通的 JS 对象。
所以直接在把异步数据提交到 reducer 中希望创建新的 state 的时候就会出问题。
所以，我们需要将异步数据也先用 formJS 把它转为 immutable 对象后在交给 reduer 函数。这一点需要注意

immutable 向数组中添加元素
使用 concat 方法

```javascript
state.set("articleList", state.get("articleList").concat(action.value));
```

**merge 方法**
merge 方法可以更方便的一次性合并多个属性，并且合并的内容可以是原生的 JS 对象，而 set 方法在修改对象的时候必须要求心传入的值是 immutable 对象

### react-router-dom

使用 react-router-dom 来配置路由
文档地址：[https://reacttraining.com/react-router/web/example/basic](https://reacttraining.com/react-router/web/example/basic)

```javascript
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <Header></Header> {/*这里是一直出现在页面中的header部分*/}
            {/*exact表示完全匹配，不加这个的话 /detail 中也能匹配到/，就会让其他页面都展示出header */}
            {/*这里是根据路由显示的router部分*/}
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
export default App;
```

### PureComponent

为了提升页面性能，我们每次都在组件中使用 shouldComponentUpdata 来判断组件是否需要更新，但是这样的代码是很重复的，所以我们引入 PureCompoent 来简化这个操作

### react-loadable 实现异步组件

脚手架工具帮我们把一个项目的所有的代码都打包到一个 bundle.js 中，这导致在首页加载的时候其实把所有的页面都加载进来了，这样的话第一次访问网站的时候会显得很卡，而且很多页面虽然被加载进来了。
Loadable 是一个高阶组件（简单来说，就是把组件作为输入的组件。高阶函数就是把函数作为输入的函数。在 React 里，函数和组件有时是一回事），一个可以构建组件的函数（函数可以是组件），它可以很容易的在组件层面分割代码包。

简单的使用方法：
**注意：** 在使用的时候就需要引入 loadble 包装过的组件了

```javascript
//用Loadable来包装组件，让页面可以被异步加载
import React from "react"; //用来解析JSX语法
import Loadable from "react-loadable";
const LoadableBar = Loadable({
  loader: () => import("./"),
  loading() {
    return <div>Loading...</div>;
  },
});
export default () => <LoadableBar />;
```

当一个作为页面的组件被 loadabel 包装过之后，可能会出现路由相关的问题，因为在这个时候直接放在 Route 下面的这个组件已近从原来的组件变成了 loadable 包装过的组件了，它不能直接获取到路由里面的信息了。

```JavaScript
<Route path="/detail/:id" exact component={Detail} />
```

所以我们需要在原来的组件中做一些处理让他有能力获得路由信息。
使用 withRouter 包装原来的这个组件，他就可以正常的运行了

```JavaScript
import { withRouter } from 'react-router-dom'

export default withRouter(Detail)
```

### 个人总结

学习了 Vue 后再学习另外一个框架感觉上手快多了，不过 React 的这种函数式的开发让我对组件化有了新的理解，尤其是 redux 这种状态管理更是改变了我的认知。后面还有很多需要学习的，继续努力！
