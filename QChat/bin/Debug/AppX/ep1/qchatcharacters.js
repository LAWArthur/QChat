﻿var characters = [
    {
        name: "江流宛转",
        index: 0,
        actions: [
            msg(0, "在嘛"), wait(0, 500), mymsg(0, "在"), msg(0, "我问你"), msg(0, "你是不是"), msg(0, "拿了我的纸条？！"), wait(0, 1000), mymsg(0, "啊？！"), wait(0, 500), mymsg(0, "我。。。。。。"), clear(0),
            msg(0, "在嘛"), wait(0, 500), mymsg(0, "我我我。。。。。。"), msg(0, "你什么你啊"), msg(0, "我找你聊天"), mymsg(0, "哦。。。。。。"), wait(0, 500), mymsg(0, "我我想多了"), msg(0, "怎么啦"), msg(0, "是不是做了什么心虚的事？"), mymsg(0, "没有没有"), msg(0, "有啥不能说的？"), mymsg(0, "算了算了聊别的"),
            msg(0, "对了你有看见我的那张纸条嘛？"), wait(0, 250), mymsg(0, "没。。。。。。"), mymsg(0, "没有"), msg(0, "真的嘛"), msg(0, "那张纸条很重要的呢"), msg(0, "真的没有看见过嘛"), mymsg(0, "要不书包里再翻翻？"), msg(0, "翻过了啊"), msg(0, "没有"), msg(0, "啊我真的很急啊"), msg(0, "要不你帮我去问问张谷同？"), mymsg(0, "你干嘛不自己问"), msg(0, "他把我拉黑了。。。。。。"), msg(0, "好不好啦"), choice(0, "好的呢", "我还有事"), choice_based(0, msg(0, "谢谢呢"), msg(0, "真的嘛")), choice_based(0, opn(1), msg(0, "帮个忙嘛")), choice_based(0, blank(0), msg(0, "不然再也不和你玩了:(")), choice_based(0, blank(0), mymsg(0, "好吧")), choice_based(0, blank(0), msg(0, "谢谢呢")), choice_based(0, blank(0), opn(1)), end(0), 
            msg(0, "原来他也没我的纸条。。。。。。"), msg(0, "但还是谢谢你呢"), msg(0, "让他把我解黑了"), end(0)
        ],
        chatEnabled: false
    },
    {
        name: "孤铜",
        index: 0,
        actions: [
            end(1), mymsg(1, "在吗"), msg(1, "找我干嘛"), mymsg(1, "江宛清让我来问你"), mymsg(1, "你有没有见过她的一张纸条"), msg(1, "江宛清？"), msg(1, "昨天把我整成这样她还有脸来问我？！"), mymsg(1, "那个昨天的事"), choice(1, "是你不对", "是她不对", "你们两个都有错", "......"), choice_based(1, msg(1, "你怎么也帮她！"), msg(1, "当然是她的错"), msg(1, "我哪里有错了？"), msg(1, "这件事就是她的错！")), mymsg(1, "但毕竟她也不是故意的"), mymsg(1, "她就是嘴有点快"), mymsg(1, "你应该和她谈一谈"), mymsg(1, "就几句话的功夫"), msg(1, "好吧"), wait(1, 10000), msg(1, "我好像真的对她有点过分"), msg(1, "但我真的没她的纸条"), opn(0), end(1)
        ],
        chatEnabled: false
    }
]