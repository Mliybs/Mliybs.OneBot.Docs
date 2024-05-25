# 快速开始

## 安装`Mliybs.OneBot.V11`

你可以通过[`NuGet`](https://www.nuget.org/packages/Mliybs.OneBot.V11)下载安装`Mliybs.OneBot.V11`，或通过下述的几个方法来下载安装

### VisualStudio

在VS中，可以通过`工具`菜单的`NuGet包管理器`中搜索`Mliybs.OneBot.V11`并下载安装

### .NET CLI

在具有`.NET CLI`的环境中（如安装了`.NET SDK`后），可以在项目目录中在终端输入`dotnet add package Mliybs.OneBot.V11`进行下载安装

## 实例化`OneBot`对象

```C#
//Websocket，创建后自动连接
var bot = OneBot.Websocket(/*URL*/);

//HTTP，创建后自动监听
var bot = OneBot.Http(/*URL*/, /*监听地址*/);

//反向Websocket，创建后自动监听
var bot = OneBot.WebsocketReverse(/*监听地址*/);
```

## 处理收到消息

`Mliybs.OneBot.V11`使用了`Rx.NET`来通知消息事件以及其他事件

对于消息事件，你可以通过订阅`MessageReceived`来进行处理

```C#
bot.MessageReceived.Subscribe(x =>
{
    // 其他逻辑
});
```

消息事件的参数为抽象类`MessageReceiver`，消息内容存储在`Message`属性中，它的类型为消息链`MessageChain`，由多种不同的消息段（如@、回复、图片等）组成

你可以使用`GetPlainText`方法将**所有的纯文本消息**拼接在一起作为字符串返回并与其他字符串比较，也可以直接将`MessageChain`与字符串用比较运算符`==`进行比较，这个方法将在消息链**只包含一条纯文本消息且与字符串相等**的情况下返回`true`，其余都为`false`

```C#
x.GetPlainText() == "111";
// 或
x == "111";
```

`MessageReceiver`有两个派生类分别为`GroupMessageReceiver`和`PrivateMessageReceiver`，分别表示收到群聊消息和私聊消息，消息事件的参数只会为这两个派生类的其中一个

可以使用`is`关键字判断参数类型，如：

```C#
if (x is GroupMessageReceiver receiver)
{
    // 其他逻辑
}
```

或在文件开头使用`using System.Reactive.Linq;`，通过调用`OfType`操作符进行筛选，如：

```C#
bot.MessageReceived
    .OfType<GroupMessageReceiver>()
    .Subscribe(x =>
    {
        // 其他逻辑
    });
```

`Mliybs.OneBot.V11`同时还提供了一个工具类来快速对收到的消息进行回复，通过`With`方法获取工具对象，省去了判断消息类型的麻烦

```C#
// 在收到消息时自动向对方（或群内）发送消息
bot.MessageReceived
    .Subscribe(x => x.With(bot).Send("114514"));
```

## 主动发送消息

`OneBot`类封装了一系列API进行操作，其中发送消息的为`SendMessage`方法，你也可以使用只针对群聊或私聊的`SendGroupMessage`和`SendPrivateMessage`

发送的消息内容用消息链`MessageChain`表示，如果你的消息是纯文本，可以直接使用字符串代替，如果不是则可以使用`MessageChainBuilder`，快速构建一个消息链

```C#
var message = new MessageChainBuilder()
    .At(/*QQ号*/)
    .Text(" 亻尔女子")
    .Build(); // 结尾的Build方法是必要的
```

所有的API都为异步方法，使用`await`关键字会验证操作是否成功并返回它们的操作结果，**不成功则会抛出`OperationFailedException`异常**，如果你不关心是否成功与返回结果，不要使用`await`关键字

```C#
await bot.SendGroupMessage(/*群号*/, "114514");
```

## 阻塞主线程

为了使程序持续运行，必须阻塞主线程，防止程序结束

一个简单的例子是你可以使用`Console.Read`方法，它会在你在控制台键入下一个字符前阻塞运行

除此以外还可以使用`TaskCompletionSource`、`AutoResetEvent`、`ManualResetEvent`等，这里不再赘述