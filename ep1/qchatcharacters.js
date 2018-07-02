var characters = [
    {
        name: "江流宛转",
        index: 0,
        actions: [
            msg(0, "在嘛"), wait(0, 500), mymsg(0, "在"), msg(0, "我问你"), msg(0, "你是不是"), msg(0, "拿了我的纸条？！"), wait(0, 1000), mymsg(0, "啊？！"), wait(0, 500), mymsg(0, "我。。。。。。"), clear(0),
            msg(0, "在嘛"), wait(0, 500), mymsg(0, "我我我。。。。。。"), msg(0, "你什么你啊"), msg(0, "我找你聊天"), mymsg(0, "哦。。。。。。"), wait(0, 500), mymsg(0, "我我想多了"), msg(0, "怎么啦"), msg(0, "是不是做了什么心虚的事？"), mymsg(0, "没有没有"), msg(0, "有啥不能说的？"), mymsg(0, "算了算了聊别的"),
            msg(0, "对了你有看见我的那张纸条嘛？"), wait(0, 250), mymsg(0, "没。。。。。。"), mymsg(0, "没有"), msg(0, "真的嘛"), msg(0, "那张纸条很重要的呢"), msg(0, "真的没有看见过嘛"), mymsg(0, "要不书包里再翻翻？"), msg(0, "翻过了啊"), msg(0, "没有"), msg(0, "啊我真的很急啊"), msg(0, "要不你帮我去问问孤铜？"), choice(0, "好的呢", "我还有事"), choice_based(0, msg(0, "谢谢呢"), msg(0, "真的嘛")), choice_based(0, opn(1), msg(0, "帮个忙嘛")), choice_based(0, blank(0), msg(0, "不然再也不和你玩了:(")), choice_based(0, blank(0), mymsg(0, "好吧")), choice_based(0, blank(0), msg(0, "谢谢呢")), choice_based(0, blank(0), opn(1)), end(0)
        ],
        latest: "",
        chatEnabled: false
    },
    {
        name: "孤铜",
        index: 0,
        actions: [
            end(1), mymsg(1, "在吗"), end(1)
        ],
        latest: "",
        chatEnabled: false
    }
]