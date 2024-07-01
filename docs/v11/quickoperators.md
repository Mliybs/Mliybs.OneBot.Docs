# 快速操作

`Mliybs.OneBot`提供了一个工具类`MessageQuickOperator`，你可以通过`MessageReceiver.With(OneBot)`方法获取该对象

```cs
bot.MessageReceived
    .Subscribe(x =>
    {
        // x.With(bot)就是MessageQuickOperator
    });
```

> `MessageQuickOperator`使用的时候是不区分私聊与群聊的，它会自动判断是私聊还是群聊并进行操作

> 建议使用时直接使用`With`方法新实例化一个对象，而不是将它保存到变量内反复使用 <del>（写起来舒服）</del>

## Send

`Send`方法将在接收到消息的私聊窗口/群聊窗口中发送消息

## Reply

`Reply`方法将在`Send`方法的基础上在消息开头添加引用消息，效果相当于在手机端的私聊窗口/群聊窗口内对接收到的消息进行左划

## SendRandom

同`Send`方法，但可传入多条消息随机选择进行发送

## ReplyRandom

同`Reply`方法，但可传入多条消息随机选择进行回复

## RepliedCompare

该方法将会判断`OneBot`对象是否被回复（在消息链的开头是否被引用消息、被@、同时被引用和@），如果未被回复则返回`null`

> 该方法有返回`bool`的版本