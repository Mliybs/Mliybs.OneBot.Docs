# 处理收到消息

## 自动回复

```cs
bot.MessageReceived.Subscribe(x =>
    x.With(bot).Send("Hello World"));

// 收到消息时自动发送Hello World
```

### 自动回复群消息

```cs
using System.Reactive.Linq;

bot.MessageReceived.OfType<GroupMessageReceiver>.Subscribe(x =>
    x.With(bot).Send("Hello World"));
```

### 自动回复私聊消息

```cs
using System.Reactive.Linq;

bot.MessageReceived.OfType<PrivateMessageReceiver>.Subscribe(x =>
    x.With(bot).Send("Hello World"));
```