# 处理收到消息

## 自动回复

```cs
bot.MessageReceived.Subscribe(x =>
    x.With(bot).Send("Hello World"));

// 收到消息时自动发送Hello World

bot.MessageReceived.Subscribe(x =>
    x.With(bot).Reply("Hello World"));

// 收到消息时自动回复Hello World
// 相当于手机端左划消息
// 该方法不区分私聊与群聊
```

### 自动回复群消息

```cs
bot.MessageReceived
    .AtGroup()
    .Subscribe(x =>
        x.With(bot).Send("Hello World"));

// 也可以使用x.With(bot).Reply，效果如上所述
```

### 自动回复私聊消息

```cs
bot.MessageReceived
    .AtPrivate()
    .Subscribe(x =>
        x.With(bot).Send("Hello World"));

// 也可以使用x.With(bot).Reply，效果如上所述
```