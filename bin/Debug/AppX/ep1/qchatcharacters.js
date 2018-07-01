var characters = [
    {
        name: "demo",
        index: 0,
        actions: [msg(0, "在嘛"), mymsg(0, "在"), msg(0, "找你聊天"), choice(0, "好", "不好"), choice_based(0, msg(0, "好啊"), msg(0,"好吧。。。。。。")), opn(1), end(0)],
        latest: "",
        chatEnabled: false
    },
    {
        name: "XXX",
        index: 0,
        actions: [end(1),msg(1,"HAHA"),end(1)],
        latest: "",
        chatEnabled: false
    }
]