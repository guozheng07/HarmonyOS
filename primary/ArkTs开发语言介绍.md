# 常用装饰器
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/23de6e10-64c0-43d7-92da-41a04ecac308)
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/0750c79f-adc9-4ecd-8dee-768b0501ab4c)
@Components、@State、@Entry都是装饰器。

# 自定义组件生命周期回调函数
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/4caec624-683f-4cc1-b894-df79b454df0e)

- aboutToAppear：从创建自定义组件的实例后，到执行其build函数之前执行。可以在该函数中对UI需要展示的数据进行初始化，或者申请定时器资源等操作。
- aboutToDisAppear：在自定义组件实例被销毁时调用。可以在该函数中释放不再使用的资源，避免资源泄漏，例如释放在aboutToAppear中申请的定时器资源。

注意：以上回调函数是私有的，系统会在特定的时间下自动调用，无法手动调用。

对于页面入口组件，额外提供以下3个生命周期回调函数。
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/a4db828d-8313-400c-89a1-bfcb1966f064)

- onPageShow：用户打开应用，应用进入前台页面显示时，触发该函数。
- onPageHide：用户点击home键回到桌面，应用进入后台时，页面消失，触发该函数。
- onBackPress：通过系统方式执行返回操作时，触发该函数。
  - 返回true：页面自己返回处理逻辑，不进行页面返回。
  - 返回false：默认值，由系统处理返回逻辑。

# 渲染控制
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/e63ca7cf-1ca2-4148-8653-3fca9e2ed408)

![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/adf9b0ae-d3e3-461a-9364-d6166cf5e469)
每行是一个ListItemComponent组件，通过循环渲染出来。

# 状态管理
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/c0b459cd-e57f-45dc-afa5-064ea227ef54)
通过@State装饰器，可以实现一个组件内部数据更新UI的场景。

多个自定义组件怎么进行状态管理？
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/0d782008-ece5-48a9-a46c-249692f92a91)
通过@Link实现双向数据绑定，对于isRefreshData的更改，将同步修改父组件对应的@State变量，从而自动触发父组件的UI刷新。

怎么确定isRefreshData影响父组件中的哪个变量？
![image](https://github.com/guozheng07/HarmonyOS/assets/42236890/5c7bc6a6-317e-4cbd-a101-0b4c8889c07d)
通过$操作符创建引用，这样子组件中isRefreshData变化时，父组件中的isSwitchDataSource值也会发生变化。
