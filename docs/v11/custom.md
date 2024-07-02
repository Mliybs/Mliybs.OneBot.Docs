# 自定义

## 自定义调用API

`OneBot`类提供了`Custom`方法来实现自定义调用API，如：

```cs
await bot.Custom("file", { file_path: /*本地路径*/ })

// 这只是一个示例，不是一个被支持的API
```

> 请在`Custom`方法的data参数中填入匿名类，匿名类的属性名即为被序列化的JSON的键名

## 自定义事件

对于消息、通知和请求等，它们的类型参数都存放于`Mliybs.OneBot.V11.Utils.UtilHelpers`类的静态字典中

如果你需要实现自定义事件，请自定义一个类并修改字典

该自定义类必须实现事件基类，添加`CustomTypeIdentifierAttribute`特性，如：

```cs
[CustomTypeIdentifier("notification")]
public class NotificationNoticeReceiver : NoticeReceiver
{
    public override string NoticeType => "notification";

    [JsonPropertyName("content")]
    public string Content { get; set; }
}
```

> `Mliybs.OneBot.V11`使用`System.Text.Json`库进行JSON序列化和反序列化，关于详细的自定义需求请查看微软文档

最后，将这个自定义类添加到相对应的字典中，即可完成

### 事件字典类

`MessageReceivers`为消息接收器，有群消息和私聊消息两种

`NoticeReceivers`为通知接收器

`RequestReceivers`为请求接收器

`MetaReceivers`为元事件接收器

`MessageTypes`为具体的消息类型（即图片、纯文字、语音等）