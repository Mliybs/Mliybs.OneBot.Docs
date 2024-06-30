# 主动发送消息

## 发送群聊消息

```cs
bot.SendGroupMessage(/*群号*/, "Hello World");
// 或
bot.SendMessage(OneBotMessageType.Group, /*群号*/, "Hello World");
```

## 发送私聊消息

```cs
bot.SendPrivateMessage(/*群号*/, "Hello World");
// 或
bot.SendMessage(OneBotMessageType.Private, /*群号*/, "Hello World");
```

## 备注

以上发送消息的方式**不会验证消息是否发送成功**！

如果你需要验证消息是否发送成功，请在前面加上`await`关键字，它将在发送失败时抛出`OperationFailedException`，如果不用`try-catch`捕获该异常将导致**程序崩溃**