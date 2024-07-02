# 消息链

每一条消息都是一条消息链，即`MessageChain`，可以通过`MessageReceiver.Message`获取

```cs
bot.MessageReceived.Subscribe(x =>
{
    // x.Message就是消息链
});
```

消息链由数个不同的消息对象构成，如表示文字消息的`TextMessage`和图片消息的`ImageMessage`

在前面，我们发送消息时都直接输入的是字符串，这是因为字符串代表纯文字，它可以转换为`MessageChain`对象

如果你需要发送复杂消息，建议使用`MessageChainBuilder`

```cs
MessageChain message = new MessageChainBuilder()
    .At(/*QQ号*/)
    .Text("Hello World")
    .Build(); // 结尾的Build方法是必要的
```

> `MessageChainBuilder`有两个链式条件控制方法`If`和`IfElse`，它们将会在满足条件时选择性添加消息，例如：

```cs
new MessageChainBuilder()
    .IfElse(DateTime.Now.DayOfWeek is DayOfWeek.Saturday or DayOfWeek.Sunday,
        x => x.Image(/*图片的路径*/).Text("周末，爽"),
        x => x.Text("加班，急"))
    .Build();
```

## 消息链处理

消息链本身继承自`List<MessageBase>`，你可以使用`Count`属性、索引器`[]`、`foreach`语句来操作它，也可以使用消息链自身提供的属性和方法

### Text

当消息链只包含一条纯文本消息时，`Text`属性将会返回该文本

否则，返回`null`

### AllText

`AllText`属性会将消息链中的所有纯文字消息拼接成一条消息返回

> `AllText`是懒加载的，只有访问它的时候它才会拼接，且只拼接一次

### CQCode

`CQCode`属性将会返回消息链的CQ码，它同样也是懒加载的

### NoReply

`NoReply`方法将会去除消息中的回复消息并返回本身

> 当消息链开头为引用消息时，去除该引用消息

> 当消息链开头为引用消息和@消息时，去除该引用消息、@消息和其后的纯文字消息开头的一个空格（如果有）

> 如果消息链开头为@消息时，去除该@消息和其后的纯文字消息开头的一个空格（如果有）

> 如果以上都不满足，不进行任何操作

这个方法有另一个版本`NoReply(out bool changed)`，`changed`表示是否对消息链进行了操作

### ==相等运算符

将消息链与字符串进行相等比较，将会在消息链只有一条纯文字消息的情况下与字符串进行比较

如果消息链并只包含一条纯文字消息且比较结果相等，返回`true`，否则返回`false`