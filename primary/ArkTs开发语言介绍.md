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


# 状态管理




