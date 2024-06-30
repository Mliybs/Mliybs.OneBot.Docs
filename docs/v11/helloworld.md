# Hello World

> 假设你已经搭建好了可以连接的OneBot框架，并使用正向Websocket方式连接

新建一个控制台应用，在`Program.cs`中输入以下代码：

```cs
using Mliybs.OneBot.V11;

using var bot = OneBot.Websocket(/*连接地址*/);

bot.MessageReceived.Subscribe(x =>
{
    Console.WriteLine(x.RawMessage);
})

Console.Read();
```

如果你收到消息时，控制台打印出消息内容，说明你成功连接到了OneBot框架

> 如果你使用HTTP或反向Websocket进行连接，请使用`OneBot.Http`或`OneBot.WebsocketReverse`

> 如果你的C#版本低于9（需要.NET5）则无法使用顶级语句，请将以上代码复制进程序的Main方法中运行