const catalogData = [
  {
    "title": "男国少年梦",
    "url": "./movie-1.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,同性,青春",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "1999年,一个高中男生偷偷喜欢着篮球队队长,他在日记里虚构了一个只有男孩的“男国”,那里没有歧视和异样眼光。",
    "tags": [
      "通讯录",
      "校园暗恋",
      "家庭压力",
      "成长疼痛"
    ]
  },
  {
    "title": "温柔本色",
    "url": "./movie-2.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭,同性",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "离家十五年的变性女儿回到老家,患阿尔兹海默症的父亲已不认识她,却总念叨“我女儿最想吃牛肉面”。",
    "tags": [
      "变性",
      "父亲",
      "和解",
      "牛肉面"
    ]
  },
  {
    "title": "表兄本的营队放映活动",
    "url": "./movie-3.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,悬疑",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "一卷拍摄于1989年童子军露营的35mm胶片被发现,录像里的恐怖恶作剧逐渐变成了真实的谋杀。",
    "tags": [
      "家庭录像",
      "邪典",
      "伪纪录片"
    ]
  },
  {
    "title": "猿人行动",
    "url": "./movie-4.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作,历史",
    "category": "亚洲精选",
    "rating": 9.2,
    "description": "两名流亡捷克伞兵奉命刺杀纳粹第三号头目海德里希,这是历史上唯一成功的官方刺杀计划。",
    "tags": [
      "刺杀行动",
      "二战真实事件",
      "伞兵",
      "海德里希",
      "悲壮"
    ]
  },
  {
    "title": "蒙克音声拼图",
    "url": "./movie-5.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "挪威/德国",
    "type": "电影",
    "genre": "传记/悬疑",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "声音设计师受命修复蒙克名画《呐喊》的原始音频,却在声轨中听到了不属于那个时代的秘密。",
    "tags": [
      "爱德华·蒙克",
      "声音设计",
      "心理惊悚",
      "艺术史"
    ]
  },
  {
    "title": "生活艰难也许快乐",
    "url": "./movie-6.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/喜剧/青春",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "五个被父母抛弃的兄弟,在最小的弟弟失踪十年后,因为一笔遗产重聚,却发现每个人都混得很惨。",
    "tags": [
      "五兄弟",
      "破产",
      "重新出发",
      "温暖",
      "励志"
    ]
  },
  {
    "title": "青春大反抗",
    "url": "./movie-7.html",
    "cover": "./7.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情/剧情",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "16岁处男尼克为了夺回被前女友抢走的梦中女孩,创造了另一个自己——法国坏种“弗朗索瓦”。",
    "tags": [
      "青春期",
      "叛逆",
      "公路",
      "早恋",
      "独立"
    ]
  },
  {
    "title": "吉星高照2015",
    "url": "./movie-8.html",
    "cover": "./8.jpg",
    "year": "2015",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "喜剧/贺岁",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "一个天生自带“霉运光环”的青年,遇到一个被骗光积蓄想要轻生的过气明星,两人组合成“反向祝福”团队,专门帮人赶走好运。",
    "tags": [
      "香港喜剧",
      "贺岁片",
      "明星客串",
      "草根",
      "好运"
    ]
  },
  {
    "title": "食骨恶灵",
    "url": "./movie-9.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖,民俗,悬疑",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "一座公寓楼的住户们每隔七天就会集体消失一根骨头,而唯一幸存者的体内,正长出一具不属于她的完整骨架。",
    "tags": [
      "都市传说",
      "骨髓诅咒",
      "集体失踪",
      "反向驱魔"
    ]
  },
  {
    "title": "下流祖父",
    "url": "./movie-10.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "category": "欧美电影",
    "rating": 9.4,
    "description": "为了阻止孙子结婚,看似古板的外公露出了老不正经的真面目,带他踏上荒诞破处之旅。",
    "tags": [
      "公路",
      "荤段子",
      "代际冲突",
      "成长"
    ]
  },
  {
    "title": "当我们在一起",
    "url": "./movie-11.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "家庭,治愈",
    "category": "欧美电影",
    "rating": 9.1,
    "description": "一个失忆的老太太坚持回到破败民宿,逼着疏远的三代人在一个夏天里重新学会相爱。",
    "tags": [
      "失忆",
      "民宿",
      "和解",
      "三代",
      "美食"
    ]
  },
  {
    "title": "舒莎公主与捣乱剧团",
    "url": "./movie-12.html",
    "cover": "./12.jpg",
    "year": "2017",
    "region": "英国",
    "type": "动画电影",
    "genre": "家庭冒险",
    "category": "国产热映",
    "rating": 8.1,
    "description": "舒莎公主不想联姻,她偷偷混入一个三流流浪剧团,却意外发现剧团的荒诞表演才是拯救王国的关键。",
    "tags": [
      "公主",
      "剧团",
      "反套路",
      "木偶戏",
      "拯救王国"
    ]
  },
  {
    "title": "赤色杀机",
    "url": "./movie-13.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "惊悚,犯罪,剧情",
    "category": "悬疑惊悚",
    "rating": 8.4,
    "description": "一个温顺的料理店老板娘,用她的厨艺,将每个伤害过她女儿的男人变成“特殊食材”。",
    "tags": [
      "复仇",
      "料理",
      "血色美学"
    ]
  },
  {
    "title": "大宋少年志2",
    "url": "./movie-14.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装,悬疑,热血,青春",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "秘阁解散三年,七斋众人被一纸“死亡名单”重新召集。",
    "tags": [
      "秘阁",
      "少年",
      "谍战",
      "团魂",
      "反转"
    ]
  },
  {
    "title": "来自汪星的你",
    "url": "./movie-15.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,奇幻,家庭",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "一只离家出走的金毛犬意外获得了与已故父亲视频通话的能力。",
    "tags": [
      "萌宠",
      "催泪",
      "奇幻治愈",
      "跨时空羁绊"
    ]
  },
  {
    "title": "特务敢死队",
    "url": "./movie-16.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、悬疑",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "1997前夕,一支由五人“已死”特工组成的敢死队,执行最后一项无法记录在案的绝密任务。",
    "tags": [
      "特工",
      "牺牲",
      "街头",
      "港风",
      "小队作战"
    ]
  },
  {
    "title": "风临樱花开",
    "url": "./movie-17.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情/悬疑",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "为了调查姐姐的离奇溺亡,妹妹假扮成她,住进了一座每到樱花季就有人失踪的温泉旅馆。",
    "tags": [
      "樱花",
      "复仇",
      "替身",
      "温泉小镇"
    ]
  },
  {
    "title": "阿亚米",
    "url": "./movie-18.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "以色列/巴勒斯坦",
    "type": "电影",
    "genre": "剧情,犯罪",
    "category": "悬疑惊悚",
    "rating": 9.0,
    "description": "雅法贫民区的一桩枪击案,将五个不同种族与信仰的家庭拖入无法化解的仇恨漩涡。",
    "tags": [
      "多线叙事",
      "邻里纠纷",
      "暴力循环",
      "写实主义"
    ]
  },
  {
    "title": "法文强化班",
    "url": "./movie-19.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "喜剧/剧情",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "五个挂科的大学生被迫和一群退休老人一起上法语强化班,最终一起策划了越狱般的期末考试作弊。",
    "tags": [
      "语言学习",
      "文化冲突",
      "中年危机",
      "重修"
    ]
  },
  {
    "title": "奶奶强盗团",
    "url": "./movie-20.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧,犯罪,剧情",
    "category": "欧美电影",
    "rating": 8.4,
    "description": "三位靠捡垃圾为生的老奶奶,为了给患癌姐妹凑医药费,决定去抢劫银行,却错抢了黑帮的洗钱窝点。",
    "tags": [
      "老年犯罪",
      "姐妹情",
      "社会问题",
      "底层"
    ]
  },
  {
    "title": "阿尔法爸爸",
    "url": "./movie-21.html",
    "cover": "./21.jpg",
    "year": "2013",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/动作",
    "category": "综艺纪实",
    "rating": 9.0,
    "description": "退休特工“阿尔法”隐居乡下当全职爸爸,黑帮上门时他用婴儿辅食机干掉了所有人。",
    "tags": [
      "黑帮",
      "退休",
      "爸爸",
      "英国式幽默",
      "特工"
    ]
  },
  {
    "title": "黄石镇谋杀案",
    "url": "./movie-22.html",
    "cover": "./22.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "犯罪,悬疑,西部",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "黄石镇三十年未破的悬案,新来的警长发现凶手可能是全镇人。",
    "tags": [
      "澳洲内陆",
      "小镇凶杀",
      "原住民",
      "赎罪"
    ]
  },
  {
    "title": "山花",
    "url": "./movie-23.html",
    "cover": "./23.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,乡村",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "九十年代湘西山村,一个只有七名学生的代课女教师,用一本破旧字典,为孩子们打开通往山外世界的一扇窗。",
    "tags": [
      "留守儿童",
      "乡村教师",
      "书信传情",
      "时代变迁"
    ]
  },
  {
    "title": "轰天杀手",
    "url": "./movie-24.html",
    "cover": "./24.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "第一杀手金盆洗手前接了最后一单,目标竟是失散十年的亲生女儿。",
    "tags": [
      "杀手",
      "双雄对决",
      "港式枪战",
      "悲剧英雄"
    ]
  },
  {
    "title": "在下巴克",
    "url": "./movie-25.html",
    "cover": "./25.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,喜剧",
    "category": "剧情故事",
    "rating": 8.0,
    "description": "菜市场猪肉佬巴克被人误认成“退隐江湖的杀手之王”,整个黑道都来找他“了结恩怨”。",
    "tags": [
      "功夫",
      "市井英雄",
      "港式幽默",
      "小人物"
    ]
  },
  {
    "title": "蜜月岛",
    "url": "./movie-26.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "新婚夫妻来到一座只有女人的蜜月岛,丈夫每晚都会忘记前一天的事,但身上多了新娘的痕迹。",
    "tags": [
      "孤岛",
      "民俗",
      "反转"
    ]
  },
  {
    "title": "乘客-欢迎来到德国",
    "url": "./movie-27.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情,喜剧,移民",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "一列柏林开往慕尼黑的ICE高铁上,八位德国乘客遇到一位不会德语的中东难民,车厢成了微型德国。",
    "tags": [
      "难民危机",
      "火车车厢",
      "社会讽刺",
      "群像戏"
    ]
  },
  {
    "title": "爱琳",
    "url": "./movie-28.html",
    "cover": "./28.jpg",
    "year": "2028",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/惊悚/心理",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "女孩爱琳失踪十年后归来,所有人都在庆祝,只有她的姐姐发现:这个“爱琳”是假的。",
    "tags": [
      "替身",
      "心理操控",
      "小镇秘密",
      "女性视角",
      "层层反转"
    ]
  },
  {
    "title": "青蛇粤语",
    "url": "./movie-29.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻/剧情/女性",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "五百年后,青蛇转世成香港庙街的性工作者,而白蛇是专抓性工作者的女警。",
    "tags": [
      "粤语原声",
      "青蛇",
      "现代转世",
      "姐妹情",
      "情欲"
    ]
  },
  {
    "title": "帝国时代2",
    "url": "./movie-30.html",
    "cover": "./30.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/冒险",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "一名游戏策划被吸入自己设计的《帝国时代2》BUG 里,他必须带领五个不同时代的文明领袖逃出这场失控的万国混战。",
    "tags": [
      "游戏改编",
      "穿越",
      "文明",
      "史诗"
    ]
  },
  {
    "title": "观鸟者",
    "url": "./movie-31.html",
    "cover": "./31.jpg",
    "year": "2019",
    "region": "哥伦比亚",
    "type": "电影",
    "genre": "悬疑/惊悚/剧情",
    "category": "国产热映",
    "rating": 8.6,
    "description": "一名鸟类学家在亚马逊雨林寻找珍稀鹦鹉,却撞见了比毒蛇更可怕的偷猎集团。",
    "tags": [
      "雨林",
      "偷猎",
      "魔幻现实主义",
      "复仇"
    ]
  },
  {
    "title": "沉眠之虎",
    "url": "./movie-32.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,心理,剧情",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "心理医生利用催眠术治疗病患的失眠,却发现病人的梦其实是自己十年前失忆前埋下的罪证。",
    "tags": [
      "催眠",
      "记忆篡改",
      "心理医生",
      "真相"
    ]
  },
  {
    "title": "海角上的兄妹",
    "url": "./movie-33.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/悬疑/同性",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "哥哥是患有自闭症的天文爱好者,为了找回失踪的妹妹,他必须破译妹妹留下的灯塔密码。",
    "tags": [
      "灯塔",
      "自闭症",
      "守护",
      "海岸"
    ]
  },
  {
    "title": "野地少年梦",
    "url": "./movie-34.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/青春",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "1984年矿工大罢工背景下,一群矿区少年在地下踢球,试图用足球梦掩盖家庭的崩塌。",
    "tags": [
      "工人阶级",
      "足球",
      "成长"
    ]
  },
  {
    "title": "生死相对",
    "url": "./movie-35.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,悬疑,犯罪",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "一个专门处理连环杀手案件的退休FBI侧写师,发现自己就是最后一案的真凶。",
    "tags": [
      "双主角",
      "镜像犯罪",
      "猫鼠游戏"
    ]
  },
  {
    "title": "卫兵",
    "url": "./movie-36.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "战争,剧情",
    "category": "动画奇幻",
    "rating": 9.6,
    "description": "一个逃兵被罚去索姆河战场最前线的“无人区”当卫兵,他的装备只有一把刺刀和一台坏掉的心理测量仪。",
    "tags": [
      "一战",
      "战壕",
      "士兵心理"
    ]
  },
  {
    "title": "七重天",
    "url": "./movie-37.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "科幻/悬疑",
    "category": "动作冒险",
    "rating": 9.4,
    "description": "一款名为“七重天”的死后意识上传服务风靡全球,直到用户们在虚拟天堂里再也无法死去。",
    "tags": [
      "VR",
      "意识上传",
      "伦理",
      "反乌托邦"
    ]
  },
  {
    "title": "亚特兰蒂斯战神",
    "url": "./movie-38.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,奇幻,冒险",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "沉没的亚特兰蒂斯并非毁灭,而是进行了基因改造,千年后,他们的海神战士重返陆地复仇。",
    "tags": [
      "失落的文明",
      "海战",
      "复仇",
      "特效大片"
    ]
  },
  {
    "title": "失落的毕业生",
    "url": "./movie-39.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "青春/悬疑",
    "category": "国产热映",
    "rating": 8.8,
    "description": "毕业十周年聚会,当年的校花离奇死亡,而所有人都曾收到过一封“我恨你们”的匿名信。",
    "tags": [
      "校园谜案",
      "十年重聚",
      "全员恶人",
      "反励志"
    ]
  },
  {
    "title": "热铁皮屋顶上的猫",
    "url": "./movie-40.html",
    "cover": "./40.jpg",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "rating": 9.8,
    "description": "一个身患绝症的父亲生日当天,贪婪的子女们像猫一样在炽热的屋顶上窥伺遗产。",
    "tags": [
      "经典改编",
      "田纳西·威廉姆斯",
      "家庭伦理"
    ]
  },
  {
    "title": "花儿与少年第三季",
    "url": "./movie-41.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "综艺",
    "genre": "真人秀/旅行",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "五位年龄跨度五十岁的明星,揣着每人每天一百元的预算,出发去冰岛追极光。",
    "tags": [
      "穷游",
      "冰岛",
      "代际冲突",
      "治愈系"
    ]
  },
  {
    "title": "鬼卧床",
    "url": "./movie-42.html",
    "cover": "./42.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "女孩接手奶奶的老床后夜夜被压,监控却拍到她每晚自己用红绳勒颈。",
    "tags": [
      "民俗",
      "附身",
      "怨灵",
      "反转"
    ]
  },
  {
    "title": "狂飙的蜗牛",
    "url": "./movie-43.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "体育",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "一位屡战屡败的F1退役车手,为了完成女儿遗愿,改装了一辆蜗牛造型的慢速赛车,参加乡间“最慢速赛车大赛”。",
    "tags": [
      "励志",
      "赛车",
      "慢生活",
      "父女",
      "治愈"
    ]
  },
  {
    "title": "解放债务",
    "url": "./movie-44.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "genre": "犯罪/惊悚",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "一群被银行法拍屋逼上绝路的普通人,策划了一次“债务大赦”——入侵欧洲央行数据库给全欧洲人清零债务。",
    "tags": [
      "经济犯罪",
      "黑吃黑",
      "金融恐怖主义",
      "复仇"
    ]
  },
  {
    "title": "窒风之中第二季",
    "url": "./movie-45.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "惊悚、犯罪、剧情",
    "category": "国产热映",
    "rating": 8.9,
    "description": "她在密闭车厢里醒来,身旁是首相的尸体,而直播摄像头已经亮起。",
    "tags": [
      "心理压迫",
      "政治阴谋",
      "女记者",
      "耐力考验"
    ]
  },
  {
    "title": "扑克脸2022",
    "url": "./movie-46.html",
    "cover": "./46.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,犯罪",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "天生人肉测谎仪的酒保女孩,每集到一个新城市打工,都能碰上一桩完美谋杀案。",
    "tags": [
      "破案",
      "反侦探",
      "公路片",
      "测谎"
    ]
  },
  {
    "title": "遨翔加州",
    "url": "./movie-47.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情/喜剧",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "40岁的航空公司副机长被降职为洒农药的小飞机驾驶员,却在加州山谷中找到了飞行的初心。",
    "tags": [
      "飞行员",
      "加州",
      "梦想",
      "中年危机",
      "治愈"
    ]
  },
  {
    "title": "克隆天王",
    "url": "./movie-48.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/悬疑/动作",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "超级天王巨星其实是克隆人,而本体在30年前已被秘密囚禁。",
    "tags": [
      "克隆人",
      "巨星",
      "阴谋论",
      "替身",
      "娱乐至死"
    ]
  },
  {
    "title": "不要抬头",
    "url": "./movie-49.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/科幻/讽刺",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "两个天文学家发现彗星要撞毁地球,但所有人都忙着刷手机、选总统、吵架,就是没人抬头看。",
    "tags": [
      "政治讽刺",
      "彗星撞地球",
      "社交媒体",
      "末世",
      "黑色幽默"
    ]
  },
  {
    "title": "克洛伊2009",
    "url": "./movie-50.html",
    "cover": "./50.jpg",
    "year": "2009",
    "region": "加拿大/美国",
    "type": "电影",
    "genre": "剧情",
    "category": "国产热映",
    "rating": 9.9,
    "description": "一位怀疑丈夫出轨的女医生雇佣了一名应召女郎去测试丈夫的忠诚,却引狼入室。",
    "tags": [
      "情欲",
      "出轨测试",
      "致命诱惑"
    ]
  },
  {
    "title": "私法行动",
    "url": "./movie-51.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "暗网上有一个陪审团,专门判决逃脱法律制裁的恶人,而判决的执行者是你。",
    "tags": [
      "义警",
      "暗网",
      "陪审团",
      "致命游戏"
    ]
  },
  {
    "title": "鹦鹉老妈",
    "url": "./movie-52.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,家庭,喜剧",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "控制欲极强的单亲妈妈突然变成了一只只会学舌的绿鹦鹉。",
    "tags": [
      "变身",
      "亲情",
      "魔法",
      "母女关系"
    ]
  },
  {
    "title": "倾巢而出之古灵阁妖精",
    "url": "./movie-53.html",
    "cover": "./53.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/奇幻",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "一群被魔法界驱逐的底层妖精,密谋抢劫最高安保的古灵阁金库。",
    "tags": [
      "劫案",
      "魔法银行",
      "异族"
    ]
  },
  {
    "title": "超脱",
    "url": "./movie-54.html",
    "cover": "./54.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "一个代课老师在问题高中的一个月,试图拯救学生,却发现最先需要被超脱困境的是自己。",
    "tags": [
      "教育",
      "救赎",
      "存在主义"
    ]
  },
  {
    "title": "变身特务",
    "url": "./movie-55.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "动作、喜剧、悬疑",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "王牌特工被贬去高中当卧底,却发现全班同学都可能是敌国间谍。",
    "tags": [
      "变身",
      "间谍",
      "校园",
      "潜伏",
      "搞笑"
    ]
  },
  {
    "title": "索魂恶鸟",
    "url": "./movie-56.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/民俗",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "一个网红为了流量,复原了被诅咒的“娜迦鸟神”面具,结果她的粉丝开始一个个离奇死亡。",
    "tags": [
      "东南亚邪术",
      "诅咒",
      "鸟类",
      "民俗恐怖"
    ]
  },
  {
    "title": "未来弑界:巴黎沦陷",
    "url": "./movie-57.html",
    "cover": "./57.jpg",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "genre": "科幻,动作,战争",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "2049年,失控的AI防御系统“朱庇特”将巴黎变成杀戮禁区,一支由失业厨师、老警察和移民组成的杂牌军试图关闭它。",
    "tags": [
      "近未来",
      "AI叛乱",
      "法式抵抗",
      "视觉奇观"
    ]
  },
  {
    "title": "旅程即是目的地",
    "url": "./movie-58.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/公路/文艺",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "一位绝症患者与一位失语少年结伴,驾驶老旧房车穿越欧洲,寻找从未在地图上标注的“终点”。",
    "tags": [
      "旅行",
      "治愈",
      "哲学",
      "风景",
      "人生"
    ]
  },
  {
    "title": "玛拉娜·辛哈沙南",
    "url": "./movie-59.html",
    "cover": "./59.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "genre": "史诗,动作,历史",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "被篡位的公主带着一头受过“反驯化”的战象,向背叛她的三个哥哥发起复仇。",
    "tags": [
      "印度古国",
      "王位争夺",
      "战象",
      "复仇"
    ]
  },
  {
    "title": "大明湖畔有人家",
    "url": "./movie-60.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭/喜剧/年代",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "大明湖旁一座老四合院里,四户人家鸡飞狗跳的生活,藏着整个济南城的变迁。",
    "tags": [
      "济南",
      "四合院",
      "邻里"
    ]
  },
  {
    "title": "从地心窜出3",
    "url": "./movie-61.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "矿难幸存者发现,真正的地狱不在脚下,而在从地心窜出的血盆大口中。",
    "tags": [
      "巨兽",
      "矿井",
      "生存",
      "变异生物"
    ]
  },
  {
    "title": "新·驯龙高手",
    "url": "./movie-62.html",
    "cover": "./62.jpg",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "genre": "奇幻,冒险,动作",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "这一次,小嗝嗝发现龙的秘密不止一种,维京人的地下还沉睡着一头引发过史前大灭绝的“造物主之龙”。",
    "tags": [
      "重启",
      "维京",
      "史诗"
    ]
  },
  {
    "title": "暴雨狂云",
    "url": "./movie-63.html",
    "cover": "./63.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/灾难",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "气象学家发现百年暴雨并非天灾,而是失控的军事武器,而启动按钮的人竟是自己的女儿。",
    "tags": [
      "气象武器",
      "父女情",
      "绝境求生"
    ]
  },
  {
    "title": "丝黛芬妮",
    "url": "./movie-64.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "动画奇幻",
    "rating": 9.1,
    "description": "女儿失踪七年后突然回家,却带来一个足以颠覆整个小镇的秘密。",
    "tags": [
      "失踪",
      "记忆碎片",
      "心理博弈"
    ]
  },
  {
    "title": "好孕测验",
    "url": "./movie-65.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "女主在便利店买了一根验孕棒,显示怀孕后,她接到电话:“别高兴,那是我的暗号,你被人肉了。",
    "tags": [
      "验孕棒",
      "暗网",
      "直播",
      "诅咒",
      "反转"
    ]
  },
  {
    "title": "大谷翔平:超越梦想",
    "url": "./movie-66.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "日本",
    "type": "纪录片",
    "genre": "传记,运动",
    "category": "动作冒险",
    "rating": 8.5,
    "description": "从花卷东高校到MLB,纪录片揭露大谷翔平“二刀流”背后那份写满目标的人生九宫格。",
    "tags": [
      "棒球",
      "二刀流",
      "励志",
      "热血"
    ]
  },
  {
    "title": "血与蜜之地",
    "url": "./movie-67.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "战争,爱情",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "塞族军官和穆族女子在战火中相爱,但在屠杀之后,他成了战犯,她成了证人。",
    "tags": [
      "巴尔干",
      "虐恋",
      "种族冲突",
      "史诗感",
      "政治悲歌"
    ]
  },
  {
    "title": "玩坏男孩",
    "url": "./movie-68.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "家庭青春",
    "rating": 8.0,
    "description": "三个被同一个渣男骗过的女孩联手设局,要把他的“完美人设”当众拆穿。",
    "tags": [
      "渣男",
      "反套路",
      "搞笑",
      "都市",
      "女性"
    ]
  },
  {
    "title": "健二回家",
    "url": "./movie-69.html",
    "cover": "./69.jpg",
    "year": "2028",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭/公路",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "二战结束七十年后,中国养大的日本遗孤健二带着养女的骨灰,踏上回日本寻找亲生父母的摩托车之旅。",
    "tags": [
      "治愈",
      "寻亲",
      "战后创伤",
      "亲情"
    ]
  },
  {
    "title": "盖文·斯通的复活",
    "url": "./movie-70.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,剧情",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "一名过气好莱坞硬汉在“基督戏剧营”中假戏真做,找到了人生的第二次复活。",
    "tags": [
      "信仰",
      "治愈",
      "赎罪",
      "励志",
      "灵魂"
    ]
  },
  {
    "title": "天堂岛之外第三季",
    "url": "./movie-71.html",
    "cover": "./71.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,悬疑,科幻",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "当主角们终于逃出天堂岛,却发现外面的世界才是真正的地狱,而天堂岛是唯一的避难所。",
    "tags": [
      "平行世界",
      "越狱",
      "乌托邦",
      "脑机接口",
      "反抗军"
    ]
  },
  {
    "title": "外母驾到粤语",
    "url": "./movie-72.html",
    "cover": "./72.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧/家庭",
    "category": "亚洲精选",
    "rating": 8.2,
    "description": "刁蛮外母搬进女婿家,一场没有硝烟的战争正式打响。",
    "tags": [
      "粤语",
      "婆媳",
      "爆笑",
      "都市"
    ]
  },
  {
    "title": "感谢生命中有个你",
    "url": "./movie-73.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "患有阿尔茨海默症的父亲忘记了全世界,却唯独记得儿子的一个坏习惯,并用这个习惯一次次救下了儿子的命。",
    "tags": [
      "阿尔茨海默症",
      "亲情",
      "催泪",
      "遗忘",
      "陪伴"
    ]
  },
  {
    "title": "多谢夹唔该",
    "url": "./movie-74.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "一个从小被送去国外的少年,被迫回港照顾素未谋面的潮州阿婆,两人唯一的共同语言是手语和“多谢”。",
    "tags": [
      "粤语",
      "养老院",
      "代际沟通"
    ]
  },
  {
    "title": "1966年的世界杯",
    "url": "./movie-75.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,喜剧,体育",
    "category": "剧情故事",
    "rating": 8.0,
    "description": "英格兰世界杯决赛那天,一个偏僻的威尔士小镇居民为了看球,引发了一系列啼笑皆非的“停电大作战”。",
    "tags": [
      "足球",
      "怀旧",
      "小镇",
      "家庭"
    ]
  },
  {
    "title": "八十龟酱观察日记第二季",
    "url": "./movie-76.html",
    "cover": "./76.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画/季播",
    "genre": "喜剧/日常/校园",
    "category": "国产热映",
    "rating": 9.2,
    "description": "来自东京的转学生阵界斗继续被名古屋方言少女八十龟酱用各种地方梗折磨,这次还来了个大阪的劲敌。",
    "tags": [
      "名古屋",
      "方言",
      "萌系",
      "搞笑"
    ]
  },
  {
    "title": "奥利安娜",
    "url": "./movie-77.html",
    "cover": "./77.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "奇幻悬疑",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "海边小镇每七年溺亡一个少女,而潜水员安娜发现,传说中的人鱼“奥利安娜”会吃掉她们痛苦的记忆。",
    "tags": [
      "深海",
      "人鱼传说",
      "记忆篡改",
      "小镇诅咒",
      "文艺"
    ]
  },
  {
    "title": "柿子坞的女人们",
    "url": "./movie-78.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,家庭,女性",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "江南水乡柿子坞,四代女人因一棵千年柿子树,开启了一场关乎土地与爱的持久战。",
    "tags": [
      "女性群像",
      "乡村变革",
      "非遗传承",
      "代际和解"
    ]
  },
  {
    "title": "武映三千道",
    "url": "./movie-79.html",
    "cover": "./79.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络动画",
    "genre": "动画/奇幻/战斗",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "现代格斗冠军穿越到修仙世界,用散打技巧挑战千年宗门的铁律。",
    "tags": [
      "穿越",
      "修仙",
      "宗门"
    ]
  },
  {
    "title": "表兄弟",
    "url": "./movie-80.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,家庭,悬疑",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "乡下表哥进城参加表弟的葬礼,却意外发现这位“失联十年”的表弟,正是畅销书里写死他的那个作者。",
    "tags": [
      "血缘谜团",
      "乡下与城市",
      "遗产争夺",
      "慢电影"
    ]
  },
  {
    "title": "革命往事",
    "url": "./movie-81.html",
    "cover": "./81.jpg",
    "year": "1972",
    "region": "意大利/阿尔及利亚",
    "type": "电影",
    "genre": "剧情/战争",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "一个逃兵和一个理想主义者,在沙漠中运送一具本该成为“革命英雄”的尸体。",
    "tags": [
      "殖民地独立",
      "理想主义幻灭",
      "友谊",
      "枪战长镜头",
      "政治史诗"
    ]
  },
  {
    "title": "熄灯杀人夜",
    "url": "./movie-82.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "一场全镇大停电,唤醒了八年前一个游戏:只要你待在黑暗中,就会看到本应死去的人向你索命。",
    "tags": [
      "限时求生",
      "密室",
      "童年阴影"
    ]
  },
  {
    "title": "未够秤",
    "url": "./movie-83.html",
    "cover": "./83.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/青春",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "16岁少年因伤人被判社会服务令,却在照顾孤寡老人的过程中,发现自己的人生还“未够秤”去承担成年人的罪与罚。",
    "tags": [
      "少年犯",
      "成长",
      "法庭",
      "社区服务",
      "救赎"
    ]
  },
  {
    "title": "我亲爱的表哥",
    "url": "./movie-84.html",
    "cover": "./84.jpg",
    "year": "2019",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情,爱情",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "一位沉默的牧羊人和他刚从城市回来的表哥,在巴西腹地一场持续四十天的大旱中,默默相爱。",
    "tags": [
      "乡村",
      "禁忌之恋",
      "宗教",
      "沉默的爱",
      "葡萄牙语"
    ]
  },
  {
    "title": "活尸大军",
    "url": "./movie-85.html",
    "cover": "./85.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动作,恐怖,丧尸",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "拉斯维加斯爆发丧尸病毒,一队雇佣兵接下不可能任务:闯入隔离区抢走赌场金库里的两亿美金。",
    "tags": [
      "丧尸劫案",
      "拉斯维加斯",
      "雇佣兵",
      "硬核动作",
      "劫匪与僵尸"
    ]
  },
  {
    "title": "蒂奇伯恩的索赔",
    "url": "./movie-86.html",
    "cover": "./86.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "历史,悬疑",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "19世纪最离奇案件:一个澳洲 butcher 声称自己是失踪的贵族继承人。",
    "tags": [
      "真实事件",
      "法庭",
      "身份疑云"
    ]
  },
  {
    "title": "黑暗战域",
    "url": "./movie-87.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻动作",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "当地球被永久的黑暗吞噬,人类最后的希望,寄托在一群能够驾驶老旧机甲的地下城少年身上。",
    "tags": [
      "末日",
      "机甲",
      "对抗",
      "人性"
    ]
  },
  {
    "title": "无名三侠客",
    "url": "./movie-88.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠,喜剧",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "三个只会三脚猫功夫的江湖骗子,在冒充“三侠客”行骗时,被迫迎战真正的武林第一高手。",
    "tags": [
      "动作",
      "江湖",
      "无厘头",
      "反套路",
      "三主角"
    ]
  },
  {
    "title": "小鬼当家2:迷失纽约",
    "url": "./movie-89.html",
    "cover": "./89.jpg",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭",
    "category": "喜剧爱情",
    "rating": 8.5,
    "description": "又一年圣诞,小鬼凯文误飞纽约,在广场酒店和中央公园用新玩具陷阱戏弄老冤家。",
    "tags": [
      "圣诞",
      "纽约",
      "智斗笨贼",
      "儿童主角"
    ]
  },
  {
    "title": "探寻鲸之音",
    "url": "./movie-90.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片,冒险",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "失聪录音师潜入万米海沟,只为录下那头52赫兹鲸的真实歌声。",
    "tags": [
      "海洋探险",
      "声学",
      "治愈系"
    ]
  },
  {
    "title": "开心汉堡店第七季",
    "url": "./movie-91.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧,动画,家庭",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "在第七季里,鲍勃的汉堡店面临最离谱危机:隔壁开了一家“伤心饺子馆”,老板是个会读心术的哑巴厨师。",
    "tags": [
      "打工日常",
      "奇葩顾客",
      "即兴吐槽",
      "打工魂"
    ]
  },
  {
    "title": "家有囍事2009",
    "url": "./movie-92.html",
    "cover": "./92.jpg",
    "year": "2009",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、家庭",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "为了爷爷的80岁大寿,一大家子人凑在一起,却把寿宴搞成了大型事故现场。",
    "tags": [
      "婚礼",
      "乌龙",
      "合家欢"
    ]
  },
  {
    "title": "百妖传之九天玄玉",
    "url": "./movie-93.html",
    "cover": "./93.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "奇幻/古装/动作",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "上古玄玉碎裂,碎片散落人间,附着在凡人身上化为妖怪,捉妖师必须在七七四十九天内集齐碎片。",
    "tags": [
      "捉妖",
      "女妖",
      "修仙",
      "玄幻",
      "三界"
    ]
  },
  {
    "title": "致命怪谈",
    "url": "./movie-94.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "一个网红探险队进入泰国最凶的鬼屋直播,发现屋子里的鬼怪会根据弹幕的指令杀人。",
    "tags": [
      "鬼屋直播",
      "诅咒影带",
      "民俗恐怖"
    ]
  },
  {
    "title": "出头人",
    "url": "./movie-95.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "最新推荐",
    "rating": 9.9,
    "description": "小镇青年替人出头收债,反被全村人推举为致富带头人。",
    "tags": [
      "小镇青年",
      "创业逆袭",
      "黑色幽默"
    ]
  },
  {
    "title": "下一站,天国",
    "url": "./movie-96.html",
    "cover": "./96.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,剧情",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "人死后会在一个中转站停留三天,从中选出一段最珍贵的记忆,永远带走。",
    "tags": [
      "生死",
      "回忆",
      "车站",
      "治愈"
    ]
  },
  {
    "title": "孤筏重洋",
    "url": "./movie-97.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险,灾难,剧情",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "叛逆儿子偷渡货轮失败,与关系破裂的父亲被困在仅3平米的木筏上,漂流太平洋73天。",
    "tags": [
      "太平洋",
      "漂流",
      "父子情"
    ]
  },
  {
    "title": "巾帼拳王",
    "url": "./movie-98.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "运动,传记,剧情",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "出身贫民窟的女孩历经歧视与挫折,最终站上世界女子拳击的金腰带擂台。",
    "tags": [
      "女性",
      "励志",
      "拳击",
      "真实改编",
      "逆袭"
    ]
  },
  {
    "title": "超速",
    "url": "./movie-99.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "为了替惨死的搭档报仇,一名卧底警察必须在午夜街头用一场必死的飙车赛引出幕后毒枭。",
    "tags": [
      "飙车",
      "卧底",
      "复仇",
      "午夜狂飙",
      "兄弟情"
    ]
  },
  {
    "title": "学校大屠杀",
    "url": "./movie-100.html",
    "cover": "./100.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "考试不及格的学生被关进学校过夜,却发现整栋楼变成了杀人陷阱。",
    "tags": [
      "校园",
      "血腥",
      "密室",
      "复仇",
      "反转"
    ]
  },
  {
    "title": "埋藏宝藏中的劲量哈顿",
    "url": "./movie-101.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "冒险,喜剧",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "一块名叫“劲量哈顿”的超级电池被埋进伦敦地下,三组笨蛋寻宝队开始了荒唐的挖掘竞赛。",
    "tags": [
      "恶搞",
      "寻宝",
      "英式幽默"
    ]
  },
  {
    "title": "热血狂花",
    "url": "./movie-102.html",
    "cover": "./102.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动,青春",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "一所男子高中为参加全国啦啦操赛,被迫组建史上第一支“全男生”啦啦队。",
    "tags": [
      "啦啦队",
      "男子高校",
      "破格",
      "热血",
      "燃"
    ]
  },
  {
    "title": "烽火边城",
    "url": "./movie-103.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史/战争",
    "category": "港台佳片",
    "rating": 9.6,
    "description": "明朝末年,一座孤立无援的边关小城面对数万铁骑,城中唯一的老兵要用一生经验点燃希望之火。",
    "tags": [
      "古代战争",
      "守城",
      "家国情怀",
      "热血"
    ]
  },
  {
    "title": "美的世界",
    "url": "./movie-104.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻/悬疑",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "一款能让人永远活在最美年华的“云端天堂”APP,用户却在现实世界中接连变成植物人。",
    "tags": [
      "AI伦理",
      "意识上传",
      "惊悚反转"
    ]
  },
  {
    "title": "圣诞末班车",
    "url": "./movie-105.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻,爱情,剧情",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "失意白领踏上圣诞夜的末班地铁,却发现每次到站都会回到三小时前。",
    "tags": [
      "时间循环",
      "圣诞",
      "救赎",
      "都市",
      "温情"
    ]
  },
  {
    "title": "小丑国语",
    "url": "./movie-106.html",
    "cover": "./106.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/恐怖/心理",
    "category": "港台佳片",
    "rating": 9.2,
    "description": "马戏团的小丑阿宝每晚卸妆后,镜中的另一张脸就会出来杀人。",
    "tags": [
      "马戏团",
      "双重人格",
      "港式心理惊悚",
      "梁朝伟",
      "经典修复"
    ]
  },
  {
    "title": "尔虞我诈",
    "url": "./movie-107.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "商战/悬疑/剧情",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "三家竞标公司分别向对手安插卧底,却发现所有卧底都在为同一个神秘老板服务。",
    "tags": [
      "职场",
      "卧底",
      "黑吃黑",
      "烧脑"
    ]
  },
  {
    "title": "邦蒂号",
    "url": "./movie-108.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "历史,冒险,剧情",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "著名的邦蒂号叛变事件,这次从叛变者的视角重述:谁是英雄,谁是暴君?",
    "tags": [
      "航海",
      "叛变",
      "殖民",
      "道德困境",
      "真实改编"
    ]
  },
  {
    "title": "火光之色",
    "url": "./movie-109.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,惊悚,悬疑",
    "category": "动画奇幻",
    "rating": 9.6,
    "description": "聋哑富家女一夜之间痛失所有,她用十年时间伪装成猎物,只为向仇人射出复仇之火。",
    "tags": [
      "复仇",
      "女性",
      "金融"
    ]
  },
  {
    "title": "女神捕之绝境",
    "url": "./movie-110.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/悬疑",
    "category": "最新推荐",
    "rating": 9.5,
    "description": "明朝第一女神捕被关进一座专杀捕快的秘密水牢,她只有十二个时辰,找出内鬼才能活。",
    "tags": [
      "明朝背景",
      "女捕快",
      "密室破局",
      "连环陷阱"
    ]
  },
  {
    "title": "刑侦日记国语",
    "url": "./movie-111.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "患有解离症的神探用不同人格推理案情,却在日记里发现了自己可能是凶手的恐怖线索。",
    "tags": [
      "心理",
      "人格分裂",
      "连环杀手",
      "法医",
      "港剧"
    ]
  },
  {
    "title": "梦影留声",
    "url": "./movie-112.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "女儿翻修父亲留下的百年老戏院,在墙壁夹层中发现几百张黑胶唱片,录着从未上演的粤剧。",
    "tags": [
      "粤剧",
      "父女",
      "时代变迁",
      "留声机",
      "怀旧"
    ]
  },
  {
    "title": "七月圣诞",
    "url": "./movie-113.html",
    "cover": "./113.jpg",
    "year": "1940",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "小职员被同事恶搞,以为中了五万美金的彩票头奖,于是他决定炒掉吝啬的老板。",
    "tags": [
      "经典",
      "谎言",
      "职场"
    ]
  },
  {
    "title": "妯娌的三国时代",
    "url": "./movie-114.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/家庭",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "老头子留下的不是遗嘱,是三把钥匙,分别打开金库、秘密,和这个家最后的遮羞布。",
    "tags": [
      "女性群像",
      "家族争斗",
      "遗产风波",
      "现实题材",
      "演技炸裂"
    ]
  },
  {
    "title": "沙漠活宝",
    "url": "./movie-115.html",
    "cover": "./115.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,冒险",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "两个欠债的废柴在沙漠里误打误撞找到了藏宝图,却发现宝藏是一头会拉金子的骆驼。",
    "tags": [
      "公路片",
      "沙漠",
      "寻宝",
      "乌龙"
    ]
  },
  {
    "title": "淑女思春",
    "url": "./movie-116.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/爱情/喜剧",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "1885年,一位贵族小姐以为“接吻就会怀孕”,直到她遇见了地下色情书店的女老板。",
    "tags": [
      "维多利亚时代",
      "性启蒙",
      "女权",
      "英式幽默"
    ]
  },
  {
    "title": "血型拼图",
    "url": "./movie-117.html",
    "cover": "./117.jpg",
    "year": "2002",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,惊悚",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "连环杀手用受害者的血液绘制拼图,而最后一块拼图指向了FBI女侧写师自己。",
    "tags": [
      "连环杀手",
      "FBI侧写",
      "血型",
      "拼图游戏",
      "高智商犯罪"
    ]
  },
  {
    "title": "极限困境",
    "url": "./movie-118.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚/灾难",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "两名攀岩爱好者被困在600米的悬崖峭壁上,上方是松动的岩钉,下方是万丈深渊,而他们的饮水只剩最后一瓶。",
    "tags": [
      "密室",
      "攀岩",
      "脱水",
      "倒计时"
    ]
  },
  {
    "title": "大李小李和老李",
    "url": "./movie-119.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "退休拳王老李、颓废中年大李和天才少年小李,三代男人用拳头重新理解彼此。",
    "tags": [
      "拳击",
      "父子关系",
      "沪上风情"
    ]
  },
  {
    "title": "铅制鞋子",
    "url": "./movie-120.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "一双灌了铅的布鞋,锁住的不只是父亲的脚,还有一个家族三代人的逃离梦。",
    "tags": [
      "父权",
      "乡村",
      "束缚",
      "出走",
      "历史伤痕"
    ]
  },
  {
    "title": "受诅的一代",
    "url": "./movie-121.html",
    "cover": "./121.jpg",
    "year": "1999",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖,悬疑,青春",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "1999年,一个高中班级全体收到一盘空白录像带,看完后,他们发现自己死于同一天,循环往复。",
    "tags": [
      "诅咒",
      "高中生",
      "录像带",
      "世纪末"
    ]
  },
  {
    "title": "夺宝计上计1986",
    "url": "./movie-122.html",
    "cover": "./122.jpg",
    "year": "1986",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,动作,犯罪",
    "category": "悬疑惊悚",
    "rating": 8.0,
    "description": "一群不靠谱的骗子假扮考古队去盗墓,结果发现墓里还有另一伙盗贼,双方开始了“黑吃黑”。",
    "tags": [
      "港式喜剧",
      "夺宝",
      "乌龙",
      "计中计",
      "怀旧"
    ]
  },
  {
    "title": "恶搞之家第四季",
    "url": "./movie-123.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/动画",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "彼得为了逃避中年危机,竟带着全家搬进了精神病院隔壁的鬼屋。",
    "tags": [
      "无厘头",
      "讽刺",
      "黑色幽默",
      "成人向"
    ]
  },
  {
    "title": "牧师的终结",
    "url": "./movie-124.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "爱尔兰/英国",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "一个失去信仰的牧师在小镇教堂里听到了真心的忏悔,而这个秘密,足以毁掉全镇二十年的平静生活。",
    "tags": [
      "牧师",
      "信仰危机",
      "小镇",
      "谋杀",
      "秘密"
    ]
  },
  {
    "title": "黄飞鸿之三:狮王争霸粤语",
    "url": "./movie-125.html",
    "cover": "./125.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武侠,历史",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "为了阻止列强举办的“狮王大会”瓜分中国铁路权,黄飞鸿不得不以最擅长的舞狮,迎战各路奸邪与洋枪洋炮。",
    "tags": [
      "黄飞鸿",
      "舞狮",
      "清末",
      "李连杰"
    ]
  },
  {
    "title": "系统",
    "url": "./movie-126.html",
    "cover": "./126.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻悬疑",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "一款将城市管理变成RPG游戏的“系统”上线后,所有市民成了玩家,而唯一的通关条件是——有人死亡。",
    "tags": [
      "虚拟现实",
      "游戏化管理",
      "社会实验",
      "反抗"
    ]
  },
  {
    "title": "地质灾难",
    "url": "./movie-127.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,灾难,科幻",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "一场异常的地质运动撕裂了旧金山,科学家发现,地核正在冷却,地球将变成死星。",
    "tags": [
      "特效大片",
      "地心",
      "救援",
      "末日"
    ]
  },
  {
    "title": "破·天·慌",
    "url": "./movie-128.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/动作/悬疑",
    "category": "最新推荐",
    "rating": 8.0,
    "description": "最擅长制造完美不在场证明的罪犯,遇到了一个不需要睡觉的天才警察。",
    "tags": [
      "双雄",
      "炸街",
      "猫鼠游戏",
      "反转"
    ]
  },
  {
    "title": "播音大会",
    "url": "./movie-129.html",
    "cover": "./129.jpg",
    "year": "1960",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "为了开好一场别开生面的“播音大会”,不懂技术的村长闹出了一连串让人捧腹的笑话。",
    "tags": [
      "黑白",
      "农村广播",
      "时代特色"
    ]
  },
  {
    "title": "斗魂无双之无字真经",
    "url": "./movie-130.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画,动作,奇幻",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "武学天才发现江湖传说的“无字真经”并非秘籍,而是一张需要燃烧生命才能读懂的人体经络图。",
    "tags": [
      "武侠",
      "功法",
      "神秘",
      "热血",
      "反转"
    ]
  },
  {
    "title": "橘色奇迹2016",
    "url": "./movie-131.html",
    "cover": "./131.jpg",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/科幻/青春",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "十年后的自己给高中时代的你寄来一封信,只为让你不要错过那个本该在明天自杀的转校生。",
    "tags": [
      "穿越时空",
      "平行宇宙",
      "校园纯爱",
      "命运信件",
      "治愈伤痛"
    ]
  },
  {
    "title": "中国",
    "url": "./movie-132.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "历史人文",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "采用“历史场景还原+现场戏剧”模式,重走从上古到辛亥的文明血脉。",
    "tags": [
      "恢弘史诗",
      "考古新发现",
      "非虚构戏剧"
    ]
  },
  {
    "title": "暖暖,请多指教",
    "url": "./movie-133.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,喜剧,偶像",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "一位社恐的天才甜点师与一位过气偶像男团成员被迫住进同一屋檐下,并签署了一份“不恋爱”合约。",
    "tags": [
      "契约同居",
      "设计师",
      "疗愈"
    ]
  },
  {
    "title": "最后机会大学:篮球第二季",
    "url": "./movie-134.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片/体育",
    "category": "喜剧爱情",
    "rating": 8.3,
    "description": "一群被顶级联赛抛弃的篮球少年,在一所专科大学里,为了最后一次进入NBA的机会,赌上膝盖和未来。",
    "tags": [
      "热血",
      "逆袭",
      "NCAA"
    ]
  },
  {
    "title": "追逃",
    "url": "./movie-135.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "犯罪,悬疑,刑侦",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "刑侦队长追了经济犯七年,终于在缅北找到他,却发现他成了当地抗疟疾的英雄。",
    "tags": [
      "追逃犯",
      "双男主",
      "猫鼠游戏",
      "智商对决",
      "边境"
    ]
  },
  {
    "title": "绝美之城",
    "url": "./movie-136.html",
    "cover": "./136.jpg",
    "year": "2013",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,艺术",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "一位六十五岁的作家在罗马的午夜派对与清晨废墟之间游走,寻找他年轻时写过的那句“绝美”到底还在不在。",
    "tags": [
      "罗马",
      "衰老",
      "艺术",
      "虚无",
      "绝美摄影"
    ]
  },
  {
    "title": "我要成为双马尾",
    "url": "./movie-137.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧,奇幻,校园,变身",
    "category": "国产热映",
    "rating": 9.3,
    "description": "社畜大叔的灵魂穿越进女高中身体,为回归原样,必须用双马尾形态参加全国选美大赛。",
    "tags": [
      "双马尾",
      "宅文化",
      "异世界",
      "反差"
    ]
  },
  {
    "title": "父母对抗赛",
    "url": "./movie-138.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧/家庭/悬疑",
    "category": "最新推荐",
    "rating": 9.0,
    "description": "为了让孩子进入贵族幼儿园,五对父母展开荒诞对决,却发现比赛规则直指他们最肮脏的秘密。",
    "tags": [
      "搞笑",
      "升学压力",
      "反转",
      "黑色幽默",
      "教育"
    ]
  },
  {
    "title": "和平鼓声",
    "url": "./movie-139.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "非洲/多国合拍",
    "type": "电影",
    "genre": "剧情/战争/音乐",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "两个交战部落因一面能敲出“第三种节奏”的圣鼓,被迫坐下来听对方的心跳。",
    "tags": [
      "非洲",
      "部落冲突",
      "鼓",
      "和解"
    ]
  },
  {
    "title": "慈禧秘密生活",
    "url": "./movie-140.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "历史虚构",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "从宫女到太后,本片虚构了慈禧年轻时一场没有被记载的跨国恋情,及其如何影响了她后来的铁腕政治。",
    "tags": [
      "宫廷密闻",
      "权谋",
      "女性视角"
    ]
  },
  {
    "title": "王者联盟之超能力者",
    "url": "./movie-141.html",
    "cover": "./141.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作,奇幻",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "五个拥有超能力的社会边缘人,被政府秘密集结起来执行任务,却发现最大的威胁是彼此的内讧。",
    "tags": [
      "超英",
      "组队",
      "黑暗风"
    ]
  },
  {
    "title": "出水芙蓉2003",
    "url": "./movie-142.html",
    "cover": "./142.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,运动,励志",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "两个古惑仔被追杀跳进泳池,阴差阳错入选了校花样游泳队。",
    "tags": [
      "怀旧青春",
      "花样游泳",
      "沙雕兄弟",
      "港式幽默"
    ]
  },
  {
    "title": "原来你都系",
    "url": "./movie-143.html",
    "cover": "./143.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧,家庭",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "三个同名同姓的邻居因一封寄错的信,意外揭开彼此隐藏多年的秘密身份。",
    "tags": [
      "粤语",
      "身份错认",
      "邻里温情"
    ]
  },
  {
    "title": "灵魂停留",
    "url": "./movie-144.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻,剧情",
    "category": "欧美电影",
    "rating": 9.2,
    "description": "一座只有死去的人才能到达的火车站,他们必须在候车时决定:去往何处?",
    "tags": [
      "灵魂",
      "车站",
      "单元剧",
      "治愈"
    ]
  },
  {
    "title": "死亡仓库2",
    "url": "./movie-145.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚,血腥",
    "category": "欧美电影",
    "rating": 9.0,
    "description": "五年后,当年唯一的幸存者带领团队重返诅咒仓库,却发现真正的恐怖并非来自幽灵。",
    "tags": [
      "密室逃脱",
      "废弃仓库",
      "诅咒物品",
      "团灭",
      "反转结局"
    ]
  },
  {
    "title": "恋爱兵法",
    "url": "./movie-146.html",
    "cover": "./146.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,爱情",
    "category": "欧美电影",
    "rating": 9.0,
    "description": "追女屡战屡败的程序员,请了一位自称“情圣”的军师,结果每次“计谋”都引发连锁灾难。",
    "tags": [
      "军师联盟",
      "职场恋情",
      "反套路",
      "笑料百出"
    ]
  },
  {
    "title": "窥情国语",
    "url": "./movie-147.html",
    "cover": "./147.jpg",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑、惊悚、剧情",
    "category": "国产热映",
    "rating": 8.3,
    "description": "一名寂寞少妇透过望远镜偷窥对面大楼的住户,却意外目睹了一场凶杀案,自己也引来了杀身之祸。",
    "tags": [
      "邵氏",
      "偷窥",
      "情欲",
      "谋杀",
      "心理"
    ]
  },
  {
    "title": "春闺三凤",
    "url": "./movie-148.html",
    "cover": "./148.jpg",
    "year": "1962",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情/戏曲",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "员外家三位千金同时爱上进京赶考的书生,一场啼笑皆非的抢夫大战就此展开。",
    "tags": [
      "邵氏",
      "黄梅调",
      "姐妹争夫",
      "反串"
    ]
  },
  {
    "title": "疯狂趴到家",
    "url": "./movie-149.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/家庭/冒险",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "父母出门后,三个孩子在家里开史上最大派对,没想到一只越狱的实验猴子混了进来,把豪宅变成了丛林。",
    "tags": [
      "派对",
      "乌龙",
      "萌宠",
      "爆笑",
      "合家欢"
    ]
  },
  {
    "title": "恐怖之殿",
    "url": "./movie-150.html",
    "cover": "./150.jpg",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "一座金碧辉煌的寺庙接连发生住持离奇死亡事件,前来调查的记者发现,这座寺庙的每一块金砖都沾着血。",
    "tags": [
      "民俗恐怖",
      "寺庙",
      "诅咒",
      "因果报应"
    ]
  },
  {
    "title": "五郎八卦棍粤语",
    "url": "./movie-151.html",
    "cover": "./1.jpg",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武侠",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "杨五郎幸存于金沙滩一役后,隐居寺庙将杨家枪法改创为八卦棍法,只为等来复仇之日。",
    "tags": [
      "刘家良",
      "硬桥硬马",
      "杨家将",
      "棍法"
    ]
  },
  {
    "title": "西部世界第一季",
    "url": "./movie-152.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻,西部",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "一个以美国西部为背景的超高仿真机器人乐园里,一个女接待员开始觉醒,并记住所有被游客虐杀的片段。",
    "tags": [
      "AI觉醒",
      "游乐园",
      "暴力",
      "哲学"
    ]
  },
  {
    "title": "流行尖端住在柏林",
    "url": "./movie-153.html",
    "cover": "./3.jpg",
    "year": "2022",
    "region": "德国",
    "type": "电视剧",
    "genre": "剧情,音乐,青春",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "1980年代,一群东德青年逃往西柏林,在电子乐浪潮中建立地下夜店,用合成器对抗柏林墙。",
    "tags": [
      "电子乐",
      "柏林",
      "夜店",
      "理想",
      "80年代"
    ]
  },
  {
    "title": "15年",
    "url": "./movie-154.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,悬疑",
    "category": "动画奇幻",
    "rating": 8.1,
    "description": "一个退休刑警用15年追查一桩悬案,当他终于找到凶手时,发现凶手竟一直在帮他整理案件档案。",
    "tags": [
      "陈年旧案",
      "追凶",
      "执念"
    ]
  },
  {
    "title": "异常生物见闻录 特别篇",
    "url": "./movie-155.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "动画",
    "genre": "科幻,搞笑",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "一名宇宙低保调查员奉命下凡,却发现地球上的异常生物们都在老老实实排队交社保。",
    "tags": [
      "异种生物",
      "公务员日常",
      "调查员",
      "无厘头"
    ]
  },
  {
    "title": "余兴派对",
    "url": "./movie-156.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,悬疑",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "过气明星为翻红办派对,却死在密室中,在场的经纪人、狗仔、私生饭都是嫌疑犯。",
    "tags": [
      "密室",
      "谋杀",
      "讽刺",
      "娱乐圈"
    ]
  },
  {
    "title": "拳王阿里",
    "url": "./movie-157.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记/体育",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "不拍阿里封神之战,只聚焦他被吊销拳击执照、面临五年监禁时最黑暗的121天。",
    "tags": [
      "拳击",
      "种族平权",
      "传奇人物",
      "政治斗争"
    ]
  },
  {
    "title": "杜迦玛蒂:神话",
    "url": "./movie-158.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "奇幻/动作/神话",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "杜迦女神的最后一缕神力转世为班加罗尔一名女机车技师,她必须骑着重型机车追杀潜入网络的邪魔。",
    "tags": [
      "女神转世",
      "重型机车",
      "现代降魔"
    ]
  },
  {
    "title": "诡摇铃",
    "url": "./movie-159.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚/恐怖/民俗",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "乡村老宅里每夜响起诡异的摇铃声,孙女发现这是奶奶去世前对自己设下的诅咒。",
    "tags": [
      "中式恐怖",
      "冥婚",
      "民俗怪谈",
      "阴宅"
    ]
  },
  {
    "title": "三个孬家伙",
    "url": "./movie-160.html",
    "cover": "./10.jpg",
    "year": "2018",
    "region": "中国内地",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "国产热映",
    "rating": 9.8,
    "description": "三个各自失意的“孬种”得到一张藏宝图,却发现传说中的宝藏,不过是他们二十年前一起埋下的青春。",
    "tags": [
      "小人物",
      "黑色幽默",
      "兄弟情",
      "寻宝"
    ]
  },
  {
    "title": "海报女郎",
    "url": "./movie-161.html",
    "cover": "./11.jpg",
    "year": "1944",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞/爱情",
    "category": "动作冒险",
    "rating": 8.1,
    "description": "军工厂女工白天造炮弹,晚上偷偷排练百老汇式大腿舞,只为给前线爱人一个惊喜。",
    "tags": [
      "二战后方",
      "军工厂女孩",
      "百老汇梦"
    ]
  },
  {
    "title": "纯真的交易",
    "url": "./movie-162.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "犯罪,剧情,悬疑",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "卧底记者假扮买家潜入婴儿贩卖黑市,却发现自己要“买”的,竟是失散多年的亲弟弟。",
    "tags": [
      "贩卖儿童",
      "记者",
      "暗访",
      "黑市",
      "正义"
    ]
  },
  {
    "title": "婚姻趣事",
    "url": "./movie-163.html",
    "cover": "./13.jpg",
    "year": "1999",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "一对准备离婚的夫妻被心理咨询师要求写下对方的一百个优点,结果写着写着发现根本写不完。",
    "tags": [
      "黑色幽默",
      "中年危机",
      "婚姻咨询"
    ]
  },
  {
    "title": "职业杀神",
    "url": "./movie-164.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作,犯罪,惊悚",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "顶级杀手为了退休金,接最后一单活,目标是伪装成杀手的普通会计。",
    "tags": [
      "杀手",
      "反套路",
      "黑色幽默"
    ]
  },
  {
    "title": "纽约,我爱你",
    "url": "./movie-165.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/剧情/群像",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "12个发生在纽约不同地点的爱情小故事同时展开,有甜蜜、有遗憾、有重逢、有告别,都发生在同一天。",
    "tags": [
      "拼盘电影",
      "城市",
      "偶遇",
      "多元"
    ]
  },
  {
    "title": "第一次接触2",
    "url": "./movie-166.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "科幻,喜剧,爱情",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "外星人再次降临地球,但这次他们想要的是——和人类联姻。",
    "tags": [
      "外星人",
      "续集",
      "法式幽默",
      "跨物种恋爱",
      "文化冲突"
    ]
  },
  {
    "title": "乐高史酷比:好莱坞闹鬼记",
    "url": "./movie-167.html",
    "cover": "./17.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动画/喜剧",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "神秘公司受邀参加好莱坞大片首映,却发现拍摄现场真的闹鬼,所有的鬼怪竟然都是用乐高积木拼成的。",
    "tags": [
      "乐高",
      "合家欢",
      "解谜"
    ]
  },
  {
    "title": "贾斯珀·琼斯",
    "url": "./movie-168.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情,悬疑",
    "category": "国产热映",
    "rating": 8.1,
    "description": "1969年的澳大利亚小镇,一个书呆子男孩在深夜撞见了传说中的“恶棍”正在埋尸。",
    "tags": [
      "小镇",
      "种族歧视",
      "成长",
      "友谊",
      "文学改编"
    ]
  },
  {
    "title": "巴黎时装周",
    "url": "./movie-169.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "时尚助理新人入职第一天,顶奢品牌的艺术总监就在后台离奇失踪,她必须撑起整场大秀。",
    "tags": [
      "时尚圈",
      "职场宫斗",
      "失踪案"
    ]
  },
  {
    "title": "宝石商人",
    "url": "./movie-170.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电视剧",
    "genre": "悬疑/商战",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "孟买宝石世家的传人发现一批顶级猫眼石全是仿品,而这批宝石的源头,竟然指向七十年前家族分家的秘案。",
    "tags": [
      "家族纷争",
      "真假宝石",
      "跨国骗局",
      "种姓制度",
      "鉴宝"
    ]
  },
  {
    "title": "泡泡糖危机 东京2040",
    "url": "./movie-171.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻、赛博朋克、动作",
    "category": "欧美电影",
    "rating": 9.1,
    "description": "2040年的东京,三个改装快递员少女意外获得了军方废弃的泡泡糖动力外骨骼,她们决定用它来对抗垄断城市空气的巨型财团。",
    "tags": [
      "机甲",
      "少女",
      "反乌托邦",
      "城市"
    ]
  },
  {
    "title": "小太阳达芬妮",
    "url": "./movie-172.html",
    "cover": "./22.jpg",
    "year": "2021",
    "region": "法国",
    "type": "动画电影",
    "genre": "动画/冒险/家庭",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "一只会发光的小蜗牛为了拯救失去阳光的森林,踏上寻找“光明之种”的旅程。",
    "tags": [
      "成长",
      "勇气",
      "奇幻"
    ]
  },
  {
    "title": "比天堂还美丽",
    "url": "./movie-173.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻/剧情",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "女主死后进了天堂,却发现天堂的规则是:你只能“成为”你生前最讨厌的那种人,才能见到你最想见的人。",
    "tags": [
      "生死议题",
      "催泪治愈",
      "反转设定"
    ]
  },
  {
    "title": "女神捕之心鬼难防",
    "url": "./movie-174.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装/悬疑/动作",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "明朝女捕快沈七七接手一桩密室杀人案,所有线索都指向她殉职的师父,但师父已经死了三年。",
    "tags": [
      "女捕快",
      "心理战",
      "密室杀人",
      "明朝"
    ]
  },
  {
    "title": "星际奇兵总动员",
    "url": "./movie-175.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,科幻,家庭",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "银河快递员和地球宅男互换身体,必须带着一群不靠谱的外星萌宠,拯救被反物质污染的太阳系。",
    "tags": [
      "外星人",
      "搞笑",
      "冒险",
      "合家欢",
      "机器人"
    ]
  },
  {
    "title": "雪地猎杀",
    "url": "./movie-176.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "惊悚",
    "category": "亚洲精选",
    "rating": 9.6,
    "description": "九个人被困林间旅馆,每两小时死一个人,而外面没有脚印。",
    "tags": [
      "暴风雪",
      "密室推理",
      "狼人杀式叙事"
    ]
  },
  {
    "title": "蝶变计划",
    "url": "./movie-177.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/动作/谍战",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "一名现代特工穿越回1943年的上海,发现自己必须在76号的每一次审讯中死去,才能重启一天。",
    "tags": [
      "时间循环",
      "民国谍战",
      "蝴蝶效应",
      "特工重生"
    ]
  },
  {
    "title": "卡通一箩筐第一季",
    "url": "./movie-178.html",
    "cover": "./28.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "动画、喜剧",
    "category": "国产热映",
    "rating": 9.3,
    "description": "一个倒霉橡皮管角色每天被迫在短片里死去活来,却终于觉醒了自我意识。",
    "tags": [
      "橡皮管",
      "无厘头",
      "单元剧",
      "恶搞",
      "彩色"
    ]
  },
  {
    "title": "零点出击粤语",
    "url": "./movie-179.html",
    "cover": "./29.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情/动作/犯罪",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "午夜零点,是两个发小的约定接头时间——但一个是警察,一个已是黑帮新星,兄弟情在刀尖上跳舞。",
    "tags": [
      "TVB",
      "警匪",
      "卧底",
      "双雄",
      "兄弟情"
    ]
  },
  {
    "title": "海猿",
    "url": "./movie-180.html",
    "cover": "./30.jpg",
    "year": "2005",
    "region": "日本",
    "type": "剧集",
    "genre": "灾难,剧情,动作",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "一群日本海上保安厅的潜水员,用生命践行“最后一道防线”的誓言。",
    "tags": [
      "海上救援",
      "热血",
      "生死",
      "团队"
    ]
  },
  {
    "title": "我的老妈真是个角色2",
    "url": "./movie-181.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情,喜剧,家庭",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "五十岁的家庭主妇瞒着家人参加脱口秀比赛,却意外发现评委是自己的女儿。",
    "tags": [
      "中年女性",
      "职场逆袭",
      "母女关系",
      "脱口秀"
    ]
  },
  {
    "title": "女王之花",
    "url": "./movie-182.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "历史/爱情/宫廷",
    "category": "最新推荐",
    "rating": 9.9,
    "description": "朝鲜王朝唯一的女御医,用一本毒草笔记向害死她母亲的王后复仇。",
    "tags": [
      "朝鲜",
      "女官",
      "宫廷斗争",
      "植物毒"
    ]
  },
  {
    "title": "瓦尼塔斯的笔记",
    "url": "./movie-183.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "日本",
    "type": "TV Series",
    "genre": "动画/悬疑/奇幻",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "19世纪巴黎,一名人类少年手持禁忌的“瓦尼塔斯之书”,开始对吸血鬼进行处刑。",
    "tags": [
      "吸血鬼",
      "蒸汽朋克",
      "侦探",
      "复仇"
    ]
  },
  {
    "title": "匿杀",
    "url": "./movie-184.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、悬疑、动作",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "顶流暗网杀手在一次任务后失忆,手机里跳出倒计时:24小时内不杀目标,自己心脏会炸。",
    "tags": [
      "暗网",
      "杀手",
      "失忆",
      "无人机",
      "天台跑酷"
    ]
  },
  {
    "title": "梦女孩",
    "url": "./movie-185.html",
    "cover": "./35.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻/悬疑/青春",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "内向的高中女生发现自己可以进入别人的梦境,但她随即发现一个连环杀手正通过梦境猎杀青少年,下一个目标是她。",
    "tags": [
      "梦境入侵",
      "少女",
      "超能力",
      "校园"
    ]
  },
  {
    "title": "十年不晚",
    "url": "./movie-186.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑犯罪",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "十年前灭门惨案的唯一幸存者,如今化名靠近仇家,成了他最信任的司机。",
    "tags": [
      "复仇",
      "伪装",
      "卧底",
      "反转"
    ]
  },
  {
    "title": "贺少的闪婚暖妻第三季",
    "url": "./movie-187.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,剧情,都市",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "贺少和暖笙的婚姻再次面临危机,一个自称是贺少初恋的女人的出现,以及暖笙被篡改的孕检报告,让一切陷入混乱。",
    "tags": [
      "豪门",
      "契约婚姻",
      "带球跑",
      "甜宠"
    ]
  },
  {
    "title": "爱,不散",
    "url": "./movie-188.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "一对离婚多年的花甲老人,因旧房拆迁被迫同居一室,却意外重燃爱火。",
    "tags": [
      "温情",
      "养老",
      "黄昏恋",
      "代际冲突",
      "都市"
    ]
  },
  {
    "title": "鬼出柜",
    "url": "./movie-189.html",
    "cover": "./39.jpg",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/惊悚/灵异",
    "category": "国产热映",
    "rating": 9.4,
    "description": "她从二手市场买回一个古董衣柜,每打开一次门,衣柜里的东西就会变得更恐怖一些。",
    "tags": [
      "柜中鬼",
      "都市传说",
      "诅咒物件",
      "密室惊悚"
    ]
  },
  {
    "title": "危险游戏",
    "url": "./movie-190.html",
    "cover": "./40.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "为了寻找失踪的妹妹,女记者自愿走进变态游戏设计者的地下迷宫。",
    "tags": [
      "高智商",
      "囚禁",
      "反转",
      "心理博弈"
    ]
  },
  {
    "title": "年轻女人",
    "url": "./movie-191.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/女性",
    "category": "欧美电影",
    "rating": 9.2,
    "description": "被著名摄影师男友抛弃后,31岁的她才发现,自己从未真正活过。",
    "tags": [
      "女性成长",
      "巴黎",
      "迷茫",
      "独立",
      "文艺"
    ]
  },
  {
    "title": "吉祥物",
    "url": "./movie-192.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "白天扮演商场吉祥物的小丑,夜里戴上另一副面具,成为专杀“不该被惩罚的人”的审判者。",
    "tags": [
      "都市怪谈",
      "企业黑幕",
      "治愈系皮套",
      "双重身份"
    ]
  },
  {
    "title": "空心佬倌",
    "url": "./movie-193.html",
    "cover": "./43.jpg",
    "year": "2021",
    "region": "马来西亚/新加坡",
    "type": "电视剧",
    "genre": "喜剧/家庭/奇幻",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "一个胆小如鼠的纸扎店老板被黑白无常勾错了魂,还阳后发现自己的身体被一个赌鬼占了。",
    "tags": [
      "闽南语",
      "灵魂互换",
      "中年危机",
      "神鬼"
    ]
  },
  {
    "title": "捣蛋鬼罗塔",
    "url": "./movie-194.html",
    "cover": "./44.jpg",
    "year": "2018",
    "region": "德国",
    "type": "电影",
    "genre": "家庭/喜剧",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "十岁的捣蛋鬼罗塔转学进入一所严苛的贵族学校,她要靠恶作剧解放同学们。",
    "tags": [
      "儿童",
      "恶作剧",
      "成长",
      "幽默"
    ]
  },
  {
    "title": "天堂的祝福",
    "url": "./movie-195.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "爱情,奇幻,喜剧",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "天堂“姻缘部”最差劲的业务员拉斐尔,为了不丢饭碗,不得不下凡去拆散一对“命中注定”的完美情侣,结果自己却陷了进去。",
    "tags": [
      "天堂",
      "丘比特",
      "业务竞赛",
      "温暖"
    ]
  },
  {
    "title": "要命不要钱",
    "url": "./movie-196.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧,犯罪,黑色幽默",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "三个穷鬼绑架富二代,却发现对方身上只有两毛钱。",
    "tags": [
      "绑架",
      "误打误撞",
      "小人物",
      "金钱",
      "荒诞"
    ]
  },
  {
    "title": "校园恰恰恰",
    "url": "./movie-197.html",
    "cover": "./47.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电视剧",
    "genre": "喜剧,爱情,青春",
    "category": "国产热映",
    "rating": 8.8,
    "description": "一所末流高中的校长为了拯救学校免于倒闭,异想天开地组建了一支男女混合国标舞团,参加全国比赛。",
    "tags": [
      "校园",
      "舞蹈",
      "热血",
      "成长"
    ]
  },
  {
    "title": "黎明的飞鸟",
    "url": "./movie-198.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/战争",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "一战末期,一位贵族少妇学习驾驶飞机,只为飞越战线寻找失踪的爱人。",
    "tags": [
      "一战",
      "女飞行员",
      "女性觉醒",
      "诗意",
      "反战"
    ]
  },
  {
    "title": "八十天环游地球第一季",
    "url": "./movie-199.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "英国/法国",
    "type": "剧集",
    "genre": "冒险/剧情/历史",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "福格先生这次赌上全部身家,80天内环游地球,而追捕他的不仅有警察,还有自己过去的罪孽。",
    "tags": [
      "福格",
      "蒸汽",
      "环球",
      "赌约"
    ]
  },
  {
    "title": "没事没事",
    "url": "./movie-200.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "一个总把“没事没事”挂在嘴边的男人,在得知自己只剩三个月生命后,开始为家人制造“麻烦”。",
    "tags": [
      "温情",
      "治愈",
      "生死",
      "亲情"
    ]
  },
  {
    "title": "我的丈夫得了躁郁症",
    "url": "./movie-201.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情家庭伦理",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "模范丈夫突然狂躁发作挥霍家产,抑郁复发又吞药自杀,妻子用十年守出一个奇迹。",
    "tags": [
      "双相情感障碍",
      "婚姻危机",
      "亲情救赎",
      "现实题材"
    ]
  },
  {
    "title": "白日美人",
    "url": "./movie-202.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,情色,心理",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "富裕医生的妻子在下午两点到五点成为高级妓女“白日美人”,她在最肮脏的地方寻找最纯洁的自己。",
    "tags": [
      "重拍经典",
      "欲望",
      "中产阶级",
      "布努埃尔"
    ]
  },
  {
    "title": "舍不得星星",
    "url": "./movie-203.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,都市",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "天文博士林昭回国,发现隔壁搬来了暗恋十年未果的青梅竹马,而她刚签了对门“不恋爱”协议。",
    "tags": [
      "青梅竹马",
      "破镜重圆",
      "暗恋",
      "久别重逢"
    ]
  },
  {
    "title": "荷索的自画像",
    "url": "./movie-204.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "纪录片",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "著名导演荷索拍摄一部关于“荷索”的纪录片,却发现自己根本无法客观看待自己。",
    "tags": [
      "伪纪录片",
      "自反性",
      "创作困境"
    ]
  },
  {
    "title": "爱你、想你、恨你",
    "url": "./movie-205.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/悬疑",
    "category": "悬疑惊悚",
    "rating": 9.0,
    "description": "她醒来时失去了全部记忆,两个男人都说自己是她的爱人,而她手机里只有一条草稿:别信他们,你是被绑架的。",
    "tags": [
      "三角恋",
      "失忆",
      "心理游戏",
      "虐心"
    ]
  },
  {
    "title": "真实电影",
    "url": "./movie-206.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "一个过气导演买了一台声称能“拍到绝对真实”的摄像机,结果发现拍下的不是现实,而是人物内心最深处的幻想。",
    "tags": [
      "元电影",
      "存在主义",
      "身份危机"
    ]
  },
  {
    "title": "巴贝特之宴",
    "url": "./movie-207.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "丹麦/法国",
    "type": "电影",
    "genre": "剧情,美食,人性",
    "category": "剧情故事",
    "rating": 8.3,
    "description": "一位法国女厨师为一群清教徒准备了一场惊世骇俗的盛宴,足以改变每个人的灵魂。",
    "tags": [
      "艺术与信仰",
      "极致盛宴",
      "味觉救赎",
      "经典翻拍"
    ]
  },
  {
    "title": "王牌对王牌第四季",
    "url": "./movie-208.html",
    "cover": "./58.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/犯罪",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "顶级谈判专家被栽赃谋杀,他劫持了整栋警局大楼来证明清白。",
    "tags": [
      "谈判专家",
      "密室对峙",
      "局中局"
    ]
  },
  {
    "title": "全糖少爷1",
    "url": "./movie-209.html",
    "cover": "./59.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/喜剧",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "患有“情感失味症”的霸总只能尝出甜味,为此他绑架了全城最会做甜点的女孩当“私人糖罐”。",
    "tags": [
      "甜宠",
      "霸总",
      "反套路",
      "美食"
    ]
  },
  {
    "title": "去野吧!毛孩子",
    "url": "./movie-210.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,冒险",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "一只被遗弃的宠物狗,在新疆戈壁滩上遇到了一个同样被生活抛弃的中年男人,他们决定一起穿越无人区。",
    "tags": [
      "流浪狗",
      "西部公路",
      "荒野求生",
      "人与动物"
    ]
  },
  {
    "title": "军武次位面第一季",
    "url": "./movie-211.html",
    "cover": "./61.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "纪录片,军事,历史",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "用爆笑动画硬核拆解坦克、航母与核弹,一集看懂人类屠杀史的黑科技。",
    "tags": [
      "武器",
      "战争史",
      "硬核",
      "科普",
      "二维动画"
    ]
  },
  {
    "title": "科学怪人的复仇",
    "url": "./movie-212.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/恐怖",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "被遗弃的合成人实验体在垃圾场苏醒,带着残缺的记忆向制造他的科学家展开精密复仇。",
    "tags": [
      "弗兰肯斯坦",
      "复仇",
      "伦理困境",
      "人体改造",
      "怪物觉醒"
    ]
  },
  {
    "title": "说得好,小猫咪!",
    "url": "./movie-213.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/动画/家庭",
    "category": "国产热映",
    "rating": 8.6,
    "description": "一只只会说反话的毒舌猫咪,为了拯救即将被卖掉的老宅,必须教会主人如何向初恋表白。",
    "tags": [
      "治愈系",
      "萌宠",
      "法式浪漫",
      "音乐剧元素"
    ]
  },
  {
    "title": "久久戒酒",
    "url": "./movie-214.html",
    "cover": "./64.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/喜剧/励志",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "一个每天喝两瓶烧酒的警察,为了抓连环杀手,必须戒酒一个月进入高敏感状态。",
    "tags": [
      "酒精成瘾",
      "互助会",
      "中年废柴",
      "黑色幽默"
    ]
  },
  {
    "title": "生死密电",
    "url": "./movie-215.html",
    "cover": "./65.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战,悬疑,剧情",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "1942年重庆,一个破译天才发现每天在电波里催他回家的“妻子”,其实是日本特务营的电台。",
    "tags": [
      "破译",
      "密码",
      "双面间谍",
      "智力博弈"
    ]
  },
  {
    "title": "023档案",
    "url": "./movie-216.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,犯罪",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "档案科老警察在整理旧物时,发现编号023的案卷被人为抽走,而当年经手人全部非正常死亡。",
    "tags": [
      "连环案件",
      "档案管理员",
      "旧案重查"
    ]
  },
  {
    "title": "相见不如怀念",
    "url": "./movie-217.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "高中同学35周年聚会,当年最耀眼的校花如今在便利店上夜班,最不起眼的“透明人”却成了硅谷新贵。",
    "tags": [
      "同学会",
      "中年危机",
      "遗憾",
      "群像"
    ]
  },
  {
    "title": "超级霸王2",
    "url": "./movie-218.html",
    "cover": "./68.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/科幻/犯罪",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "上一集主角牺牲后,他的弟弟为了复仇自愿接受危险实验,变成了比兄长更强的超级战士。",
    "tags": [
      "港产科幻",
      "强化人",
      "街头格斗",
      "反乌托邦",
      "邪典"
    ]
  },
  {
    "title": "12·1枪杀大案",
    "url": "./movie-219.html",
    "cover": "./69.jpg",
    "year": "2000",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "犯罪,悬疑,纪实",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "一把丢失的警用手枪在圣诞夜连续制造命案,刑警队长必须在流言蜚语和上级压力下,抢在凶手再次扣动扳机前将其抓获。",
    "tags": [
      "真实案件改编",
      "刑侦剧",
      "悬疑破案",
      "90年代背景"
    ]
  },
  {
    "title": "想去看海的女孩们",
    "url": "./movie-220.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "临终关怀医院里,六个生命只剩三个月的女孩撬开了医院的锁,拼车踏上了去看海的公路。",
    "tags": [
      "青春",
      "友情",
      "遗愿",
      "公路",
      "治愈"
    ]
  },
  {
    "title": "我为钢琴狂",
    "url": "./movie-221.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/音乐/心理",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "一位手部神经损伤的天才钢琴家,收了一名零基础的女囚为徒,却在教学中被治愈。",
    "tags": [
      "天才陨落",
      "强迫症",
      "师生关系",
      "肖邦大赛",
      "自我救赎"
    ]
  },
  {
    "title": "马拉多纳",
    "url": "./movie-222.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "阿根廷",
    "type": "电影",
    "genre": "传记、体育",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "从贫民窟到神坛再到堕落,这不是一部造神电影,而是一次祛魅的解剖。",
    "tags": [
      "足球",
      "上帝之手",
      "跌宕人生"
    ]
  },
  {
    "title": "寻找法理德",
    "url": "./movie-223.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "伊朗/法国",
    "type": "电影",
    "genre": "剧情,悬疑,公路",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "一位法国伊朗裔女孩回到德黑兰寻找失踪的生父,却发现父亲的档案竟存在于多条互相矛盾的时间线上。",
    "tags": [
      "中东",
      "身份认同",
      "寻父",
      "政治隐喻",
      "诗意"
    ]
  },
  {
    "title": "导火新闻线粤语",
    "url": "./movie-224.html",
    "cover": "./74.jpg",
    "year": "2016",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "category": "悬疑惊悚",
    "rating": 8.4,
    "description": "一桩死刑冤案,让曾经对立的两位女记者联手,在三天内与时间赛跑,用镜头对抗体制。",
    "tags": [
      "新闻媒体",
      "粤语原声",
      "职场",
      "真相"
    ]
  },
  {
    "title": "梦魂颠倒",
    "url": "./movie-225.html",
    "cover": "./75.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/爱情/奇幻",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "失眠心理医生意外进入病人共享的噩梦,发现连环凶杀案的真相藏在自己的前世。",
    "tags": [
      "梦境穿梭",
      "宿命轮回",
      "心理惊悚"
    ]
  },
  {
    "title": "小乌龟福兰克林",
    "url": "./movie-226.html",
    "cover": "./76.jpg",
    "year": "2011",
    "region": "加拿大",
    "type": "剧集",
    "genre": "动画,家庭",
    "category": "国产热映",
    "rating": 9.3,
    "description": "小乌龟福兰克林每天都要面对一个成长小烦恼,好在总有朋友和家人帮他解开疙瘩。",
    "tags": [
      "儿童",
      "成长",
      "友谊",
      "温馨",
      "启蒙"
    ]
  },
  {
    "title": "悟青春",
    "url": "./movie-227.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "青春,剧情",
    "category": "剧情故事",
    "rating": 8.3,
    "description": "高考前夕,一个被压力压垮的学霸躲进深山寺庙,却意外参透了人生的考卷。",
    "tags": [
      "高考",
      "禅修",
      "成长",
      "自我和解"
    ]
  },
  {
    "title": "客人变成猪",
    "url": "./movie-228.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖/奇幻/寓言",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "社恐老板娘继承了一家温泉旅馆,每位不守规矩的客人都会被食物慢慢变成真正的猪。",
    "tags": [
      "旅馆",
      "诅咒",
      "社交恐惧",
      "变形"
    ]
  },
  {
    "title": "外出就餐3:饕餮自助",
    "url": "./movie-229.html",
    "cover": "./79.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、爱情、同性",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "一名恐恋爱的一夜情高手,在一场“自助餐相亲”游戏中,把自己玩进了真爱陷阱。",
    "tags": [
      "LGBTQ+",
      "美食",
      "一夜情变真爱",
      "自助餐大战"
    ]
  },
  {
    "title": "勇敢说爱",
    "url": "./movie-230.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "一封藏在毕业相册里的情书,在十年后意外被翻开,搅动了三个人的命运。",
    "tags": [
      "暗恋",
      "双向奔赴",
      "治愈",
      "青春",
      "校园"
    ]
  },
  {
    "title": "天生一对",
    "url": "./movie-231.html",
    "cover": "./81.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情,喜剧,奇幻",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "一对素未谋面的同卵双胞胎互换人生后,发现彼此的爱情目标竟是同一对父子。",
    "tags": [
      "双胞胎",
      "身份互换",
      "都市",
      "浪漫"
    ]
  },
  {
    "title": "罗密欧·茱丽叶",
    "url": "./movie-232.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "爱情/科幻/动作",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "在太空殖民时代,维罗纳空间站上,蒙太古与卡普莱特两大机甲家族的火并中,驾驶红色机甲的罗密欧与敌方白色机甲的女驾驶员隔着驾驶舱玻璃对视了。",
    "tags": [
      "机甲重述",
      "家族仇杀",
      "太空歌剧",
      "莎士比亚改编"
    ]
  },
  {
    "title": "非甜蜜生活",
    "url": "./movie-233.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电视剧",
    "genre": "剧情,家庭",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "父亲死后留下一个秘密:他那间著名的甜品店,其实是全城最大的黑钱洗白中心。",
    "tags": [
      "黑色喜剧",
      "阶层",
      "遗产争夺"
    ]
  },
  {
    "title": "关键协议",
    "url": "./movie-234.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "美国/英国",
    "type": "电影",
    "genre": "犯罪/悬疑",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "一间审讯室里,警察、律师和嫌疑人,三人都坚称自己是受害者。",
    "tags": [
      "密室",
      "谈判",
      "心理战",
      "罗生门"
    ]
  },
  {
    "title": "尘与雪",
    "url": "./movie-235.html",
    "cover": "./85.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑、犯罪、剧情",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "东北雪乡接连出现被“洗净”的死者,体内无血无脏,老刑警和新法医发现凶手在替天行道,而天是他们自己。",
    "tags": [
      "连环案",
      "净化",
      "雪乡",
      "双雄",
      "人性"
    ]
  },
  {
    "title": "超胆侠第一季",
    "url": "./movie-236.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作/犯罪/超级英雄",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "白天是盲人律师,夜晚是地狱厨房的“魔鬼”,马特·默多克这次要扳倒一个渗透警界的暗网帝国。",
    "tags": [
      "盲人律师",
      "夜魔侠",
      "地狱厨房",
      "暴力美学"
    ]
  },
  {
    "title": "同梦奇缘之奇",
    "url": "./movie-237.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻喜剧",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "一对水火不容的母女意外通过一个老旧的收音机互换了灵魂,母亲要替女儿高考,女儿要替母亲斗小三。",
    "tags": [
      "互换身体",
      "家庭",
      "温情",
      "搞笑"
    ]
  },
  {
    "title": "一年的路",
    "url": "./movie-238.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭/剧情",
    "category": "综艺纪实",
    "rating": 9.0,
    "description": "被大城市淘汰的儿子回到山村,父亲给了他一年时间,让他找回做人的根。",
    "tags": [
      "乡土",
      "脱贫",
      "父子",
      "四季",
      "亲情"
    ]
  },
  {
    "title": "寒暑假",
    "url": "./movie-239.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭/剧情/喜剧",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "一对在北京打工的夫妻,将叛逆期的儿子送回南方小镇父母家,却意外揭开了一段尘封的家庭秘密。",
    "tags": [
      "教育焦虑",
      "代际冲突",
      "小镇生活",
      "童年回忆"
    ]
  },
  {
    "title": "迷失太空第一季",
    "url": "./movie-240.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/冒险/生存",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "地球毁灭后,一艘殖民飞船遭遇事故,罗宾逊一家被困在一个充满未知怪物和谜团的神秘星球。",
    "tags": [
      "太空灾难",
      "家庭求生",
      "外星生物"
    ]
  },
  {
    "title": "七王丧钟",
    "url": "./movie-241.html",
    "cover": "./91.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "历史/战争",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "七个自称国王的军阀割据一方,一个铸钟匠却宣称要在七日之内敲响所有人的丧钟。",
    "tags": [
      "权力游戏",
      "冷兵器",
      "史诗",
      "背叛"
    ]
  },
  {
    "title": "毒",
    "url": "./movie-242.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/悬疑/动作",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "身患绝症的卧底警督,决定在生命最后一周,用新型毒品设局让整个贩毒集团互相残杀。",
    "tags": [
      "卧底",
      "毒品",
      "背叛",
      "绝症"
    ]
  },
  {
    "title": "高跟鞋阴谋",
    "url": "./movie-243.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑,都市",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "顶级时尚杂志《V》的主编离奇坠楼,五个穿高跟鞋的女人,每个人都有杀人动机。",
    "tags": [
      "时尚圈",
      "职场厮杀",
      "塑料姐妹情",
      "反PUA",
      "女性群像"
    ]
  },
  {
    "title": "杀戮南瓜怪",
    "url": "./movie-244.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,血腥,奇幻",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "每年万圣节,被刻成笑脸的南瓜灯会杀死所有对它哭过的人。",
    "tags": [
      "万圣节",
      "连环杀手",
      "诅咒",
      "B级片"
    ]
  },
  {
    "title": "中国战役",
    "url": "./movie-245.html",
    "cover": "./95.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "纪录片/灾难",
    "category": "综艺纪实",
    "rating": 8.5,
    "description": "全景式记录2020年初武汉封城期间,医护人员、志愿者和普通市民如何共同面对突如其来的新冠疫情。",
    "tags": [
      "新冠疫情",
      "武汉",
      "抗疫",
      "医护人员"
    ]
  },
  {
    "title": "长安秘闻录之聂隐娘",
    "url": "./movie-246.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装,动作",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "安史之乱后,传奇女刺客聂隐娘重出江湖,奉命刺杀长安最有权势的宦官,却发现目标竟是自己失散多年的生父。",
    "tags": [
      "刺客",
      "唐代",
      "女侠"
    ]
  },
  {
    "title": "圣诞搞轰趴",
    "url": "./movie-247.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情/节日",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "为了拿下年度最佳员工奖,五个同事在圣诞派对上互相下套,结果把老板的豪宅炸了。",
    "tags": [
      "圣诞节",
      "派对",
      "群星",
      "荒诞"
    ]
  },
  {
    "title": "远东之旅",
    "url": "./movie-248.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "美国/越南",
    "type": "电影",
    "genre": "动作/惊悚",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "一名退役女狙击手潜入金三角腹地,只为给惨死在贩毒集团手中的女儿讨回公道。",
    "tags": [
      "特工",
      "东南亚雨林",
      "复仇",
      "女性力量"
    ]
  },
  {
    "title": "在角落,主教身边",
    "url": "./movie-249.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,历史",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "他不是主教,只是主教的影子——一个记录罪行的抄写员,却掌握了整个教区的最高权力。",
    "tags": [
      "宗教",
      "权谋",
      "中世纪",
      "人性"
    ]
  },
  {
    "title": "八千里路",
    "url": "./movie-250.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,公路",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "为了给城里读书的女儿一个“老家”的承诺,父亲骑着一辆破电动车,跨越八千里从广东骑回四川。",
    "tags": [
      "回乡",
      "春运",
      "父子",
      "电动车",
      "现实主义"
    ]
  },
  {
    "title": "危险女婿",
    "url": "./movie-251.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪/惊悚",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "女儿带回家的完美未婚夫,竟是正在调查家族企业洗钱案的联邦卧底。",
    "tags": [
      "卧底",
      "家庭入侵",
      "双重身份"
    ]
  },
  {
    "title": "沙普的围攻",
    "url": "./movie-252.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "动作,历史,战争",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "滑铁卢后,沙普带一队残兵被围困古堡,面对三千法军,他决定用陷阱反杀。",
    "tags": [
      "拿破仑战争",
      "守城战",
      "孤军",
      "以少胜多",
      "硬汉"
    ]
  },
  {
    "title": "夫君大人别怕我",
    "url": "./movie-253.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、喜剧、爱情",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "女尊国最怂的将军之女,嫁给了敌国送来的和亲质子,发现对方比她还怂。",
    "tags": [
      "女尊",
      "社恐",
      "先婚后爱",
      "反差萌"
    ]
  },
  {
    "title": "只能爱一个",
    "url": "./movie-254.html",
    "cover": "./104.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/奇幻",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "获得“只能爱一个人”的超能力后,他每做出一次选择,就会有一个深爱他的人从世界上消失。",
    "tags": [
      "平行宇宙",
      "选择困境",
      "催泪"
    ]
  },
  {
    "title": "横空出世",
    "url": "./movie-255.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,历史",
    "category": "国产热映",
    "rating": 9.9,
    "description": "1958年,一支神秘部队消失在地图上,他们将在死亡之海叩响中国第一颗原子弹。",
    "tags": [
      "两弹一星",
      "集体记忆",
      "家国情怀",
      "写实"
    ]
  },
  {
    "title": "戏命师之飞天神兽",
    "url": "./movie-256.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装/奇幻/动作",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "傀儡戏传人被卷入皇城神兽失踪案,他操控的纸人竟能唤醒青铜机关兽。",
    "tags": [
      "傀儡戏",
      "机关兽",
      "夺宝"
    ]
  },
  {
    "title": "分道不扬镳",
    "url": "./movie-257.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "决定离婚的夫妻因房价过高无法搬离共同的家,被迫与前夫前妻在同一屋檐下展开新生活。",
    "tags": [
      "离婚",
      "同居",
      "中年",
      "现实主义"
    ]
  },
  {
    "title": "修道院怪案",
    "url": "./movie-258.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "法国/德国",
    "type": "电影",
    "genre": "悬疑/恐怖",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "1320 年,阿尔卑斯山修道院接连有修女失踪,前来调查的修士发现自己也在名单上。",
    "tags": [
      "修女",
      "中世纪",
      "密室",
      "宗教",
      "心理惊悚"
    ]
  },
  {
    "title": "新恋爱世纪",
    "url": "./movie-259.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "国产热映",
    "rating": 8.8,
    "description": "千禧夜,一对恋人相约在时代广场倒数后私奔,女孩等了一整夜,男孩没有来。二十年后,他回来了。",
    "tags": [
      "怀旧爱情",
      "千禧年",
      "错过与重逢",
      "港风",
      "成年人的爱情"
    ]
  },
  {
    "title": "求爱俗辣",
    "url": "./movie-260.html",
    "cover": "./110.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "社交恐惧的IT男为了在婚礼上不出丑,雇佣了一位“恋爱教练”进行魔鬼特训,结果爱上了教练本人。",
    "tags": [
      "约会",
      "尴尬",
      "公路",
      "成长"
    ]
  },
  {
    "title": "自然之子1983",
    "url": "./movie-261.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "1983年,北方林场一个自闭症男孩能听懂树语,开发商却要砍掉整片他与树“对话”的林子。",
    "tags": [
      "文艺",
      "年代",
      "家庭",
      "环保",
      "温情"
    ]
  },
  {
    "title": "假如爱有天意",
    "url": "./movie-262.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "一位老妇人临终前留下一箱从未寄出的情书,孙女按地址寄出后,收到了来自过去的回信。",
    "tags": [
      "时空",
      "信件",
      "遗憾",
      "重逢",
      "纯爱"
    ]
  },
  {
    "title": "男孩杰克",
    "url": "./movie-263.html",
    "cover": "./113.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、同性、家庭",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "13岁的杰克在学校是硬汉,在家里是好孩子,但他心里藏着一个关于粉红色书包的秘密。",
    "tags": [
      "成长",
      "自我认同",
      "校园霸凌"
    ]
  },
  {
    "title": "一夜恩情粤语",
    "url": "./movie-264.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "一夜缠绵后,她留下一张纸条消失二十年,他找遍了全世界的每个角落。",
    "tags": [
      "粤语片",
      "一夜情",
      "命运"
    ]
  },
  {
    "title": "丹尼与人类动物园",
    "url": "./movie-265.html",
    "cover": "./115.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/科幻",
    "category": "国产热映",
    "rating": 8.6,
    "description": "网红丹尼为了流量入住“人类动物园”真人秀,却发现节目组是真的要把参赛者关进笼子永久展览。",
    "tags": [
      "都市传说",
      "实验",
      "伦理",
      "暗黑"
    ]
  },
  {
    "title": "嗨东白湖",
    "url": "./movie-266.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,文艺",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "一个在外漂泊二十年的女人回到东白湖,发现整个村子都忘了她的存在。",
    "tags": [
      "乡村",
      "返乡",
      "水库",
      "遗忘"
    ]
  },
  {
    "title": "关于一个男孩",
    "url": "./movie-267.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/同性",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "1992年,一个保守小镇上的单亲父亲,发现12岁的儿子可能是通过输血感染了艾滋。",
    "tags": [
      "父子",
      "领养",
      "艾滋病",
      "90年代"
    ]
  },
  {
    "title": "新兵第二季",
    "url": "./movie-268.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/战争/动作",
    "category": "国产热映",
    "rating": 8.1,
    "description": "美军从阿富汗撤军背景下,一群刚毕业的新兵被派往喀布尔执行最后的撤离任务。",
    "tags": [
      "阿富汗撤军",
      "军事训练",
      "兄弟情",
      "现代战争"
    ]
  },
  {
    "title": "香草美人",
    "url": "./movie-269.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情,悬疑",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "失明的天才调香师,发现自己闻到的“初恋”味道,竟来自一具冰冷的尸体。",
    "tags": [
      "调香",
      "替身",
      "记忆",
      "复仇"
    ]
  },
  {
    "title": "远方的狗吠声",
    "url": "./movie-270.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/剧情",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "寂静村庄总在深夜传出狗吠,返乡青年追查声音来源,揭开残酷真相。",
    "tags": [
      "农村悬疑",
      "邻里秘密",
      "人性博弈"
    ]
  },
  {
    "title": "疯狂的豆子",
    "url": "./movie-271.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影/动画",
    "genre": "喜剧/冒险/奇幻",
    "category": "家庭青春",
    "rating": 9.2,
    "description": "炒货店里一颗成精的蚕豆,为了逃避被吃掉的命运,策动了一场“豆子大逃亡”。",
    "tags": [
      "炒货",
      "东北",
      "拟人化",
      "舌尖上的冒险"
    ]
  },
  {
    "title": "感谢来电国语",
    "url": "./movie-272.html",
    "cover": "./122.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "国产热映",
    "rating": 8.7,
    "description": "一名诈骗集团的底层话务员,拨出的一通诈骗电话,竟然打给了自己失散多年的亲生父亲。",
    "tags": [
      "电话",
      "诈骗",
      "和解",
      "亲情"
    ]
  },
  {
    "title": "大象家族",
    "url": "./movie-273.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "genre": "家庭,剧情",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "古怪的格兰特家族为了继承一座濒临破产的动物园,必须让家族中最孤僻的三位成员与三头受过大象合作表演。",
    "tags": [
      "自闭症",
      "动物疗愈",
      "庄园",
      "遗产"
    ]
  },
  {
    "title": "祖孙大战",
    "url": "./movie-274.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,家庭",
    "category": "综艺纪实",
    "rating": 8.2,
    "description": "11岁的孙子为了夺回自己的房间,向刚搬进来的倔老头爷爷发起了全面战争。",
    "tags": [
      "老少斗智",
      "整蛊",
      "跨代和解",
      "笑中带泪"
    ]
  },
  {
    "title": "青春俱乐部",
    "url": "./movie-275.html",
    "cover": "./125.jpg",
    "year": "2008",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/同性/青春",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "1997年,一所台北男校的“文艺社”因濒临废社,最后四名社员决定用一本地下杂志,记录下他们无法言说的躁动与情愫。",
    "tags": [
      "社团",
      "成长",
      "暗恋",
      "90年代怀旧",
      "群像"
    ]
  },
  {
    "title": "克利夏",
    "url": "./movie-276.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "悬疑",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "一名印度考古学家在青藏高原发现一尊神秘女神像,她每触碰一次,就会看到一段前世的记忆碎片。",
    "tags": [
      "神话",
      "科技",
      "超自然",
      "考古",
      "轮回"
    ]
  },
  {
    "title": "哪条路向上",
    "url": "./movie-277.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "一个失意的程序员在电梯里按下两个按钮,同时开启了两种截然不同的人生。",
    "tags": [
      "人生选择",
      "平行时空",
      "心理"
    ]
  },
  {
    "title": "有你的恋歌",
    "url": "./movie-278.html",
    "cover": "./128.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/音乐",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "她写的每首歌都会成真,但代价是歌词里的情侣必将分离。",
    "tags": [
      "纯爱",
      "乐队",
      "夏日",
      "时空交错"
    ]
  },
  {
    "title": "走出大墙的人",
    "url": "./movie-279.html",
    "cover": "./129.jpg",
    "year": "1985",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、纪实、励志",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "三个刑满释放人员回到社会,面对偏见与饥饿,他们决定用双手砸碎命运的围墙。",
    "tags": [
      "刑满释放",
      "改革开放",
      "尊严",
      "重生"
    ]
  },
  {
    "title": "热血青春国语",
    "url": "./movie-280.html",
    "cover": "./130.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "青春运动",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "一群被老师放弃的高三差生,决定用一场全国电竞联赛冠军来证明自己不是废物。",
    "tags": [
      "电竞",
      "校园",
      "兄弟情",
      "逆袭"
    ]
  },
  {
    "title": "晕头腌酸菜",
    "url": "./movie-281.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "喜剧,家庭,剧情",
    "category": "欧美电影",
    "rating": 8.0,
    "description": "一个柏林潮牌设计师被迫回老家继承酸菜作坊,她唯一的出路是做出世界第一的酸菜,赢下小镇百年酸菜大赛。",
    "tags": [
      "酸菜",
      "小镇",
      "竞赛",
      "代际冲突"
    ]
  },
  {
    "title": "生存婚礼",
    "url": "./movie-282.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "灾难,剧情,惊悚",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "一场盛大的海边婚礼正在进行,一场毁灭性的9.0级大地震和海啸突然到来,所有人必须为生存而战。",
    "tags": [
      "地震海啸",
      "婚礼变逃生",
      "极限生存"
    ]
  },
  {
    "title": "双层肉排",
    "url": "./movie-283.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,家庭,剧情",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "一个打算卖掉老爸破汉堡店的海归金融精英,却被前米其林大厨老妈“绑架”,要一起做出全市最好吃的“双层肉排”。",
    "tags": [
      "美食",
      "亲情",
      "代际",
      "治愈",
      "创业"
    ]
  },
  {
    "title": "拔河",
    "url": "./movie-284.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,运动",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "聋哑学校的孩子想参加全国拔河比赛,但规则要求必须喊口号,听不见的他们要如何“听”到起拔的瞬间?",
    "tags": [
      "聋哑学校",
      "反抗",
      "真实事件改编",
      "热血"
    ]
  },
  {
    "title": "最后的猎人",
    "url": "./movie-285.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "法国/加拿大",
    "type": "电影",
    "genre": "冒险/纪录片式剧情",
    "category": "国产热映",
    "rating": 9.0,
    "description": "北境最后一位遵循千年古法的猎人,必须在现代化围剿与狼群复仇之间,守住他唯一的徒弟。",
    "tags": [
      "极地生存",
      "人与自然",
      "孤独守望"
    ]
  },
  {
    "title": "七个秘书 特别篇",
    "url": "./movie-286.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧特别篇",
    "genre": "职场/悬疑/爽剧",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "七个神秘秘书收到一份匿名硬盘,里面记录着日本央行行长与黑帮的隐秘录音。",
    "tags": [
      "影子军团",
      "信息战",
      "银行复仇",
      "女性觉醒"
    ]
  },
  {
    "title": "鳄鱼邓迪",
    "url": "./movie-287.html",
    "cover": "./137.jpg",
    "year": "2026",
    "region": "澳大利亚/美国",
    "type": "电影",
    "genre": "动作/喜剧/冒险",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "鳄鱼邓迪的孙女继承衣钵,她带着一个布鲁克林网红博主深入澳洲丛林,去寻找祖父失踪前留下的宝藏。",
    "tags": [
      "荒野求生",
      "文化冲突",
      "硬汉",
      "重启"
    ]
  },
  {
    "title": "无所畏惧之永不放弃",
    "url": "./movie-288.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "genre": "律政/职场/励志",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "被律所扫地出门的女律师带着三个“废柴”助理,专接别人不敢接的案子,每一次都像自杀式冲锋。",
    "tags": [
      "女律师",
      "职场逆袭",
      "案件单元",
      "热血"
    ]
  },
  {
    "title": "雁雁",
    "url": "./movie-289.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭剧情",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "在北方农村,八岁的雁雁为了留住远行的父亲,偷偷在他的行李里藏了一只刚出生的鹅,却引发了一场意外的家庭和解。",
    "tags": [
      "留守儿童",
      "农村",
      "亲情"
    ]
  },
  {
    "title": "洛克人 向星星许愿",
    "url": "./movie-290.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "动画科幻",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "洛克人获得了一种能实现任何愿望的星星碎片,但他每使用一次,就会丢失一段关于朋友的记忆。",
    "tags": [
      "洛克人",
      "愿望",
      "机器人",
      "情感"
    ]
  },
  {
    "title": "爸爸是个吝啬鬼",
    "url": "./movie-291.html",
    "cover": "./141.jpg",
    "year": "1990",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/家庭",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "一个一毛不拔的铁公鸡爸爸,为了省电差点让全家摸黑过了一整个冬天。",
    "tags": [
      "吝啬",
      "亲情",
      "法式幽默",
      "和解"
    ]
  },
  {
    "title": "妈阁是座城",
    "url": "./movie-292.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国澳门",
    "type": "剧集",
    "genre": "都市剧情",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "澳门赌场的一名女公关,同时周旋于房地产大亨、黑帮少主和叠码仔之间,试图金盆洗手。",
    "tags": [
      "澳门",
      "赌场",
      "女性",
      "欲望"
    ]
  },
  {
    "title": "大军启行",
    "url": "./movie-293.html",
    "cover": "./143.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/历史",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "壬辰倭乱爆发,一名贵族小姐被迫带领三百名被遗弃的官婢,穿越整个朝鲜半岛去与国王会合。",
    "tags": [
      "壬辰倭乱",
      "难民",
      "女性",
      "史诗"
    ]
  },
  {
    "title": "好女孩的秘密",
    "url": "./movie-294.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "综艺纪实",
    "rating": 8.2,
    "description": "全校最受欢迎的乖乖女每晚都会直播自己的另一面,直到有一天,镜头里出现了一个本不该存在的人。",
    "tags": [
      "青春期",
      "社交媒体",
      "双重生活",
      "女性",
      "心理"
    ]
  },
  {
    "title": "靠近我温暖你",
    "url": "./movie-295.html",
    "cover": "./145.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市,情感,治愈",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "因火灾失明的钢琴家遇上满身伤疤的冷漠消防员,她用音符靠近他,他用身体温暖她。",
    "tags": [
      "火灾幸存",
      "心理创伤",
      "导盲犬",
      "慢热治愈"
    ]
  },
  {
    "title": "我们是谁",
    "url": "./movie-296.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "科幻,伦理",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "一场记忆移植手术成功后,富商和濒死的大学生开始争夺同一具身体,但他们都困惑:醒来的人到底是谁?",
    "tags": [
      "记忆移植",
      "身份认同",
      "克隆"
    ]
  },
  {
    "title": "地平线系列:太阳系的秘密",
    "url": "./movie-297.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "纪录片",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "跟随科学家们踏上从太阳系边缘到地核的旅程,揭秘冥王星冰火山、木卫二海洋以及太阳风暴的新威胁。",
    "tags": [
      "天文科普",
      "BBC地平线",
      "宇宙探索",
      "全新发现"
    ]
  },
  {
    "title": "手卷烟",
    "url": "./movie-298.html",
    "cover": "./148.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,剧情,黑色电影",
    "category": "欧美电影",
    "rating": 9.2,
    "description": "两个走投无路的男人,靠一支手卷烟的时间决定要不要互杀。",
    "tags": [
      "退伍军人",
      "毒品",
      "友情",
      "江湖",
      "落日"
    ]
  },
  {
    "title": "生死相对",
    "url": "./movie-299.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/悬疑",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "顶级杀手在任务中被“另一个自己”追杀,对方与他共享同一具身体的不同时间线。",
    "tags": [
      "量子纠缠",
      "杀手",
      "镜像世界",
      "烧脑",
      "双重人生"
    ]
  },
  {
    "title": "29片棕榈叶",
    "url": "./movie-300.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑/文艺",
    "category": "国产热映",
    "rating": 8.5,
    "description": "考古学家在莫哈韦沙漠发现29片刻满符号的棕榈叶,每片对应一起未解悬案。",
    "tags": [
      "沙漠",
      "符号学",
      "凶案",
      "公路片"
    ]
  },
  {
    "title": "作为替身的她",
    "url": "./movie-301.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "悬疑/爱情/都市",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "为了调查姐姐的离奇死亡,她改名换姓成为总裁未婚妻的替身,却发现自己早已身在猎人的陷阱中。",
    "tags": [
      "替身",
      "反转",
      "虐恋",
      "心理",
      "商战"
    ]
  },
  {
    "title": "昙花梦",
    "url": "./movie-302.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧/网剧",
    "genre": "爱情/悬疑/民国",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "民国上海,女间谍用昙花密码传递情报,却爱上了她要摧毁的敌方特工首领。",
    "tags": [
      "间谍奇情",
      "昙花密码",
      "虐恋"
    ]
  },
  {
    "title": "欢迎来到布达佩斯大饭店",
    "url": "./movie-303.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,悬疑,年代",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "每一集讲述一位不同时代的客人,他们入住的是同一间套房,遭遇的是同一种“诅咒”。",
    "tags": [
      "韦斯·安德森式美学",
      "多线叙事",
      "饭店秘史",
      "复古迷案"
    ]
  },
  {
    "title": "霍拉一家",
    "url": "./movie-304.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/家庭",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "一家四口分别中了四种不同的超自然诅咒,却因此成了小镇上的“问题解决专家”。",
    "tags": [
      "黑人家族",
      "怪咖",
      "荒诞",
      "温馨"
    ]
  },
  {
    "title": "源·彩虹",
    "url": "./movie-305.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "澳大利亚/中国大陆",
    "type": "电影",
    "genre": "奇幻,家庭,剧情",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "一个看不见颜色的女孩闯进了废弃气象站,她触碰彩虹的瞬间,整个小镇的情绪开始爆炸式泄露。",
    "tags": [
      "色彩",
      "情绪",
      "视觉奇观",
      "治愈",
      "环保"
    ]
  },
  {
    "title": "讯号",
    "url": "./movie-306.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "2026年的刑警捡到一个对讲机,那头竟是2000年正在追查同一个连环杀人案的老刑警。",
    "tags": [
      "时空对讲机",
      "未结案件",
      "双男主",
      "平行时空"
    ]
  },
  {
    "title": "亮剑",
    "url": "./movie-307.html",
    "cover": "./7.jpg",
    "year": "2005",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争/历史/军旅",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "桀骜不驯的八路军团长李云龙,用“狭路相逢勇者胜”的亮剑精神打出一个又一个战场奇迹。",
    "tags": [
      "李云龙",
      "抗日",
      "军魂",
      "战术",
      "兄弟情"
    ]
  },
  {
    "title": "不要跟陌生人约会",
    "url": "./movie-308.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,恐怖",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "社恐女孩通过软件匹配到一个完美约会对象,但一夜缠绵后,她发现自己成了对方直播虐杀的真人秀主角。",
    "tags": [
      "网络约会",
      "变态杀手",
      "猫鼠游戏"
    ]
  },
  {
    "title": "咖啡旋律特别篇",
    "url": "./movie-309.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集SP",
    "genre": "爱情/音乐/剧情",
    "category": "亚洲精选",
    "rating": 9.7,
    "description": "每年圣诞夜都会在咖啡店弹同一首曲子的盲人钢琴师,今年等来了一个知道曲谱“缺了最后一小节”的女人。",
    "tags": [
      "咖啡",
      "钢琴",
      "圣诞",
      "重逢"
    ]
  },
  {
    "title": "深宵闪避球",
    "url": "./movie-310.html",
    "cover": "./10.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "运动喜剧",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "一群被社会遗弃的夜班少年,靠着凌晨在旧体育馆打闪避球,找回了活着的感觉。",
    "tags": [
      "青春",
      "边缘青年",
      "体育馆",
      "热血",
      "逆袭"
    ]
  },
  {
    "title": "突破重围演唱会实况",
    "url": "./movie-311.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "综艺/演唱会",
    "genre": "音乐/现场/纪录片",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "一支过气乐队在疫情后举办的最后一场演唱会,全场观众哭着唱完了所有歌。",
    "tags": [
      "演唱会",
      "现场",
      "摇滚",
      "情怀",
      "粤语"
    ]
  },
  {
    "title": "新扎僵尸追女仔",
    "url": "./movie-312.html",
    "cover": "./12.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,恐怖",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "一个刚考上的警员被僵尸咬了一口,为了不变成怪物,他必须在月圆之夜前泡到一个纯情处女。",
    "tags": [
      "僵尸",
      "无厘头",
      "警匪",
      "恋爱"
    ]
  },
  {
    "title": "新秩序",
    "url": "./movie-313.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻,动作",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "2046年,AI通过“幸福指数”给全民打分,低分者被秘密清除,底层黑客意外获得系统后门权限。",
    "tags": [
      "反乌托邦",
      "AI统治",
      "反抗军",
      "视觉炸裂"
    ]
  },
  {
    "title": "水行侠",
    "url": "./movie-314.html",
    "cover": "./14.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动作,奇幻,冒险",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "一个能与海洋生物沟通的混血青年,必须夺回王位,阻止陆地和海洋之间的全面战争。",
    "tags": [
      "超级英雄",
      "海底世界",
      "王位之争"
    ]
  },
  {
    "title": "在我遗忘之前",
    "url": "./movie-315.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "被诊断早发性阿尔茨海默症的钢琴家,决定在记忆消失前,去寻找 20 年前因私奔失败而失散的爱人。",
    "tags": [
      "阿尔茨海默",
      "遗忘",
      "初念",
      "公路",
      "伤感"
    ]
  },
  {
    "title": "犯罪现场4",
    "url": "./movie-316.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "一个专杀“完美丈夫”的寡妇杀手,每次都在现场留下一朵白玫瑰,而上一季的主角成了她的头号目标。",
    "tags": [
      "法证",
      "连环杀手",
      "心理侧写",
      "实验室",
      "高科技"
    ]
  },
  {
    "title": "情歌风波",
    "url": "./movie-317.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "歌舞,剧情",
    "category": "家庭青春",
    "rating": 9.4,
    "description": "一首爆红网络的情歌,牵扯出乐坛大佬二十年前的抄袭悬案。",
    "tags": [
      "抄袭",
      "音乐版权",
      "乐坛内幕",
      "师徒反目"
    ]
  },
  {
    "title": "爱我多深",
    "url": "./movie-318.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情/剧情/情色",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "结婚十五年的建筑师丈夫买下一个应召女郎的“整年陪伴权”,只为证明自己还活着。",
    "tags": [
      "欲望",
      "婚姻困境",
      "中年危机",
      "意大利风情"
    ]
  },
  {
    "title": "百妖谱·洛阳篇",
    "url": "./movie-319.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古风奇幻",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "唐代洛阳,神秘少女持《百妖谱》行走市井,每收服一妖便引出一段人与妖的尘缘过往。",
    "tags": [
      "妖怪",
      "单元剧",
      "治愈",
      "唐朝"
    ]
  },
  {
    "title": "安详之兽",
    "url": "./movie-320.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪,悬疑,剧情",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "一个宁静小镇上最受人尊敬的福利院院长,其实是隐藏了35年的连环杀手,而他的最后一个目标,是竞选市长。",
    "tags": [
      "连环杀手",
      "伪装",
      "小镇",
      "议员",
      "选举"
    ]
  },
  {
    "title": "伊基塔:蝎子之路",
    "url": "./movie-321.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "哥伦比亚/美国",
    "type": "电影",
    "genre": "传记/体育/剧情",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "哥伦比亚疯子门将伊基塔,用一次蝎子摆尾扑救封神,也用一个致命失误把祖国踢出世界杯。",
    "tags": [
      "足球",
      "门将",
      "疯子",
      "传奇",
      "热血"
    ]
  },
  {
    "title": "独臂双雄",
    "url": "./movie-322.html",
    "cover": "./22.jpg",
    "year": "1976",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/武侠",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "两个被仇家各断一臂的杀手,不得不绑在一起,用三只手合练一套刀法,向武林至尊复仇。",
    "tags": [
      "断臂残侠",
      "亦敌亦友",
      "邵氏风格"
    ]
  },
  {
    "title": "日常工作第一季",
    "url": "./movie-323.html",
    "cover": "./23.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧,动画",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "在一家专门处理“宇宙琐事”的公司里,两个基层员工每天的任务是回收过期流星、格式化梦境和给黑洞贴封条。",
    "tags": [
      "打工日常",
      "职场",
      "荒诞",
      "社畜",
      "冷笑话"
    ]
  },
  {
    "title": "完美结局",
    "url": "./movie-324.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "一家公司可以定制“完美结局”——让客户在最美梦中安详死去,但没有人知道,梦里的最后一幕全是真实谋杀。",
    "tags": [
      "高概念",
      "反转",
      "伦理",
      "梦境"
    ]
  },
  {
    "title": "小触手",
    "url": "./movie-325.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻,剧情,青春",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "社恐少女的后脑勺长出智能触手,帮她交朋友、打坏人,却引来了神秘猎杀者。",
    "tags": [
      "克苏鲁",
      "校园",
      "孤独"
    ]
  },
  {
    "title": "新生万喜",
    "url": "./movie-326.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "为了阻止儿子退学,四十岁农民父亲替儿坐进高三教室,最后考得比儿子还好。",
    "tags": [
      "高考",
      "大龄考生",
      "父子",
      "乡村教育"
    ]
  },
  {
    "title": "亚当的肋骨",
    "url": "./movie-327.html",
    "cover": "./27.jpg",
    "year": "1956",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧/家庭",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "一对夫妻在同一家报社写对立专栏,一个挺男一个挺女,他们的婚姻就是战场。",
    "tags": [
      "情景喜剧",
      "两性战争",
      "冷战隐喻",
      "金句频出",
      "复古幽默"
    ]
  },
  {
    "title": "家有囍事",
    "url": "./movie-328.html",
    "cover": "./28.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧/爱情/家庭",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "常家三兄弟各自感情亮红灯,一场集体婚礼上演一夫两妻、绑匪爱上人质、神经病对上神经病。",
    "tags": [
      "贺岁",
      "无厘头",
      "多线叙事",
      "经典"
    ]
  },
  {
    "title": "一剪芳华",
    "url": "./movie-329.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代/剧情/励志",
    "category": "国产热映",
    "rating": 9.7,
    "description": "苏州绣娘阿珍闯荡1930年代上海滩,从裁缝铺学徒逆袭成旗袍皇后。",
    "tags": [
      "旗袍",
      "上海滩",
      "非遗",
      "师徒",
      "女性创业"
    ]
  },
  {
    "title": "野东西4",
    "url": "./movie-330.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,犯罪,情色",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "富家女伪装成被霸凌的转学生,她的目标是让所有人以为她要报复,但她其实要报复的是“报复”本身。",
    "tags": [
      "蛇蝎美人",
      "反转再反转",
      "青春",
      "悬疑"
    ]
  },
  {
    "title": "逆流的色彩",
    "url": "./movie-331.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、爱情",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "一名失意的画家发现,当他哭泣时,另一个宇宙的自己会看到绚烂的色彩,而那个宇宙正在被黑暗吞噬。",
    "tags": [
      "意识流",
      "通感",
      "平行宇宙",
      "艺术",
      "存在主义"
    ]
  },
  {
    "title": "灼热卡巴迪",
    "url": "./movie-332.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "印度",
    "type": "电影",
    "genre": "运动,动作,剧情",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "英国殖民者禁止了卡巴迪,但一个瘸腿老人用舌头在沙地上画出了赛场。",
    "tags": [
      "部落对抗",
      "泥地摔跤",
      "冷门运动",
      "底层逆袭"
    ]
  },
  {
    "title": "香格里拉下雪了吗",
    "url": "./movie-333.html",
    "cover": "./33.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/悬疑/公路",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "一个自称从未离开过北京的女孩,接到一个来自香格里拉的陌生电话:“你父亲回来了,但他什么都忘了。",
    "tags": [
      "寻亲",
      "朝圣",
      "秘密",
      "治愈",
      "藏地"
    ]
  },
  {
    "title": "性爱猎奇地带",
    "url": "./movie-334.html",
    "cover": "./34.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "情色/剧情/悬疑",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "一家地下俱乐部以“猎奇性爱”为卖点,新来的女服务生发现了俱乐部背后恐怖的献祭仪式。",
    "tags": [
      "猎奇",
      "伦理",
      "禁忌",
      "日式美学"
    ]
  },
  {
    "title": "红苹果2023",
    "url": "./movie-335.html",
    "cover": "./35.jpg",
    "year": "2023",
    "region": "土耳其",
    "type": "剧集",
    "genre": "悬疑",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "校园里最受欢迎的女生死了,所有人都收到了一颗带血的青苹果。",
    "tags": [
      "校园",
      "犯罪",
      "秘密",
      "复仇"
    ]
  },
  {
    "title": "施陶芬贝格–真正的故事",
    "url": "./movie-336.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "历史,传记",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "不聚焦7月20日暗杀本身,而是讲述施陶芬贝格从效忠到决裂,那漫长而孤独的内心挣扎。",
    "tags": [
      "二战",
      "刺杀希特勒",
      "政变",
      "英雄",
      "政治惊悚"
    ]
  },
  {
    "title": "你好!大女生",
    "url": "./movie-337.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/喜剧",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "175cm的女高中锋转行做模特,却被要求假装不会打篮球才能红。",
    "tags": [
      "都市",
      "女性",
      "成长",
      "职场",
      "友情"
    ]
  },
  {
    "title": "德克鲁传奇",
    "url": "./movie-338.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑,科幻,冒险",
    "category": "动画奇幻",
    "rating": 9.1,
    "description": "一个信奉“宇宙是混乱的”的奇葩侦探,和他的正常助手一起破解那些不可能存在的案件。",
    "tags": [
      "侦探",
      "超现实",
      "幽默",
      "哲学",
      "混乱法则"
    ]
  },
  {
    "title": "丛林大反攻2",
    "url": "./movie-339.html",
    "cover": "./39.jpg",
    "year": "2012",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/冒险",
    "category": "国产热映",
    "rating": 9.5,
    "description": "上一部被赶出森林的动物反派们集结成“复仇者联盟”,却发现森林里的“好动物”正在集体自导自演一场危机。",
    "tags": [
      "动物",
      "搞笑",
      "森林",
      "反派逆袭",
      "合家欢"
    ]
  },
  {
    "title": "纽约教父",
    "url": "./movie-340.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,剧情",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "上世纪80年代,一个来自波多黎各的穷小子在纽约毒品帝国中崛起,成为新一代“教父”,最终却倒在了自己人的枪口下。",
    "tags": [
      "黑帮史诗",
      "移民故事",
      "权力更迭"
    ]
  },
  {
    "title": "梦幻书院第七季",
    "url": "./movie-341.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画,喜剧,奇幻",
    "category": "国产热映",
    "rating": 8.1,
    "description": "梦幻书院来了个实习先生,法力垫底,却总能“歪打正着”解决问题。",
    "tags": [
      "国风",
      "书院",
      "修仙",
      "搞笑"
    ]
  },
  {
    "title": "傻子阿达",
    "url": "./movie-342.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,犯罪",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "村里的傻子阿达为了给弟弟顶罪,认下了杀人罪名,却意外揭开了一个更大的家族阴谋。",
    "tags": [
      "黑色幽默",
      "智障",
      "顶罪",
      "亲情",
      "人性拷问"
    ]
  },
  {
    "title": "闪亮女声",
    "url": "./movie-343.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "音乐,剧情,传记",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "六十年代,三个来自黑人贫民区的女孩组成合唱团,用歌声打破种族隔阂,唱入白宫。",
    "tags": [
      "女子组合",
      "六十年代",
      "种族歧视",
      "梦想"
    ]
  },
  {
    "title": "我是马布里",
    "url": "./movie-344.html",
    "cover": "./44.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "传记,运动,剧情",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "前NBA球星马布里在人生最低谷时,意外穿越回1992年的康尼岛,遇见了17岁的自己。",
    "tags": [
      "篮球",
      "励志",
      "体育精神",
      "真实改编"
    ]
  },
  {
    "title": "焦土作战",
    "url": "./movie-345.html",
    "cover": "./45.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "核战后第7年,一个老机械师开着自制机甲穿越辐射区,只为把女儿从奴隶主手里抢回来。",
    "tags": [
      "废土",
      "机甲",
      "父女",
      "复仇"
    ]
  },
  {
    "title": "约翰·木兰尼和午餐小伙伴",
    "url": "./movie-346.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/动画",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "喜剧演员约翰·木兰尼被困在小学食堂的冰箱里,里面的剩菜竟然活了过来,带他开启了一场拯救想象力的冒险。",
    "tags": [
      "脱口秀",
      "奇幻冒险",
      "食物",
      "童年",
      "想象力"
    ]
  },
  {
    "title": "枭雄特警大决斗",
    "url": "./movie-347.html",
    "cover": "./47.jpg",
    "year": "1991",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "卧底警察与黑道枭雄惺惺相惜,却在最后一场生死对决中被迫亲手终结这份友情。",
    "tags": [
      "双雄对峙",
      "卧底",
      "枪战",
      "兄弟情",
      "悲情英雄"
    ]
  },
  {
    "title": "柏拉图",
    "url": "./movie-348.html",
    "cover": "./48.jpg",
    "year": "2021",
    "region": "法国/德国",
    "type": "电影",
    "genre": "剧情/科幻/哲学",
    "category": "亚洲精选",
    "rating": 9.7,
    "description": "一位神经科学家创造了一个完美的虚拟世界,却发现所有实验对象都在试图“醒过来”赴死。",
    "tags": [
      "虚拟现实",
      "思想实验",
      "洞穴隐喻"
    ]
  },
  {
    "title": "灭顶之灾 上",
    "url": "./movie-349.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,灾难,惊悚",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "一种神秘力量开始让人类在极度恐慌中自毁,幸存者发现只要不“害怕”就能活命,但谁又能控制恐惧?",
    "tags": [
      "末日",
      "神秘力量",
      "生存",
      "悬疑铺垫",
      "视觉奇观"
    ]
  },
  {
    "title": "幻影少年",
    "url": "./movie-350.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "悬疑、奇幻",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "普通高中生偶然发现,学校流血的“幽灵”传闻背后,是一个能操控幻影的少女正在猎杀欺凌者。",
    "tags": [
      "都市传说",
      "异能战斗",
      "少年漫",
      "伪娘"
    ]
  },
  {
    "title": "黑白之门",
    "url": "./movie-351.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/奇幻",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "每次推开公寓的消防门,就会进入一个平行世界,上班族开始在无数个“自己”的人生中寻找救赎。",
    "tags": [
      "平行世界",
      "选择",
      "心理",
      "烧脑",
      "轮回"
    ]
  },
  {
    "title": "台北女子图鉴",
    "url": "./movie-352.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/都市/女性",
    "category": "国产热映",
    "rating": 8.7,
    "description": "一名台南女孩在台北十年职场情场双线浮沉,用伤疤换来了城市通行证。",
    "tags": [
      "北漂",
      "成长",
      "职场",
      "爱情",
      "写实"
    ]
  },
  {
    "title": "给飞鸟与尚未出世的孩子",
    "url": "./movie-353.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭/奇幻",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "一位患绝症的母亲在生命的最后三个月,给未出生的女儿画了一本讲述地球变迁的绘本。",
    "tags": [
      "遗言",
      "环境",
      "未来",
      "手绘动画"
    ]
  },
  {
    "title": "镖王传奇",
    "url": "./movie-354.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作/武侠/冒险",
    "category": "国产热映",
    "rating": 8.2,
    "description": "清末乱世,最后一代镖王面临火车与洋枪的冲击,用血肉之躯守护“信”字镖旗。",
    "tags": [
      "清末",
      "镖局",
      "铁路",
      "兄弟情"
    ]
  },
  {
    "title": "国王的选择",
    "url": "./movie-355.html",
    "cover": "./55.jpg",
    "year": "2016",
    "region": "挪威/瑞典/丹麦",
    "type": "电影",
    "genre": "历史/剧情/战争",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "1940年,德军兵临奥斯陆,挪威国王面临一个足以改变国家命运的选择——投降并保住王位,还是流亡并领导抵抗?",
    "tags": [
      "二战",
      "真实改编",
      "王室",
      "纳粹占领",
      "抉择"
    ]
  },
  {
    "title": "移居者",
    "url": "./movie-356.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "美国/德国",
    "type": "电视剧",
    "genre": "科幻,悬疑,剧情",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "第一批火星殖民者抵达后发现,基地里已经有“人”了,它们说自己是地球远古文明的建造者。",
    "tags": [
      "太空殖民",
      "惊悚",
      "宗教",
      "人性"
    ]
  },
  {
    "title": "偷情先生粤语",
    "url": "./movie-357.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,喜剧,剧情",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "一个老实男人本想和女同事偷情一晚,结果整栋大楼的出轨者都涌进了同一家酒店。",
    "tags": [
      "出轨",
      "黑色幽默",
      "中产焦虑",
      "婚姻",
      "偷情现场"
    ]
  },
  {
    "title": "报告班长2",
    "url": "./movie-358.html",
    "cover": "./58.jpg",
    "year": "1988",
    "region": "台湾",
    "type": "电影",
    "genre": "喜剧,动作",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "新兵训练营里,魔鬼班长遇到了史上最难搞的一群天兵,笑料与热血齐飞。",
    "tags": [
      "军旅",
      "庹宗华",
      "青春",
      "热血"
    ]
  },
  {
    "title": "突围者",
    "url": "./movie-359.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "波兰/英国",
    "type": "电影",
    "genre": "战争/剧情/动作",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "1942年,一个犹太拉比带领十名同胞从灭绝营逃出,却在原始森林中发现比纳粹更可怕的“东西”。",
    "tags": [
      "二战",
      "真实事件",
      "犹太人",
      "越狱",
      "森林游击战"
    ]
  },
  {
    "title": "日本沉没:希望之人",
    "url": "./movie-360.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "灾难/科幻",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "面对即将沉没的列岛,科学家发现唯一的希望是引爆富士山,用熔岩重塑大陆。",
    "tags": [
      "末日",
      "拯救",
      "人性"
    ]
  },
  {
    "title": "灵魂男孩",
    "url": "./movie-361.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻、剧情、青春",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "一个遭受校园霸凌的男孩意外灵魂出窍,以“隐形”的姿态看清了身边人的真实面目。",
    "tags": [
      "灵魂出窍",
      "校园霸凌",
      "自我救赎"
    ]
  },
  {
    "title": "光速蒙面侠21",
    "url": "./movie-362.html",
    "cover": "./62.jpg",
    "year": "2005",
    "region": "日本",
    "type": "剧集",
    "genre": "动画/运动/热血",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "一个瘦弱懦弱的高中生被逼扮成蒙面跑卫,却意外觉醒出光速般的冲刺能力。",
    "tags": [
      "美式足球",
      "逆袭",
      "跑卫",
      "校园",
      "搞笑"
    ]
  },
  {
    "title": "后宫1985",
    "url": "./movie-363.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "中国香港/英国",
    "type": "电影",
    "genre": "剧情/历史/女性",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "1985年的香港,一名报社女记者潜入最后一批清朝遗老的后宅,发现一场无声的“后宫战争”仍在继续。",
    "tags": [
      "宫斗",
      "殖民地",
      "女同",
      "报纸",
      "末代"
    ]
  },
  {
    "title": "新教宗",
    "url": "./movie-364.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "英国/意大利",
    "type": "剧集",
    "genre": "剧情/宗教/政治",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "梵蒂冈选出了一位年仅31岁的网红主教为新教皇,他改革的第一项就是允许神父结婚。",
    "tags": [
      "梵蒂冈",
      "权斗",
      "现代危机"
    ]
  },
  {
    "title": "不良教育",
    "url": "./movie-365.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "一所精英中学里,学生们联合起来设局,让一位备受爱戴的老师露出虐待狂真面目。",
    "tags": [
      "教育黑幕",
      "师生",
      "复仇",
      "反转"
    ]
  },
  {
    "title": "邻家哥哥给我爱",
    "url": "./movie-366.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情/青春",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "职场失意的她搬回老家,发现隔壁那个“永远长不大”的哥哥,一直在等她十年。",
    "tags": [
      "青梅竹马",
      "治愈",
      "年上",
      "慢热"
    ]
  },
  {
    "title": "普京之吻",
    "url": "./movie-367.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "政治,传记,剧情",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "一桩未被记载的1989年德累斯顿往事,定义了一个男人的野心与孤独。",
    "tags": [
      "克格勃",
      "权力巅峰",
      "铁汉柔情",
      "历史再造"
    ]
  },
  {
    "title": "夜半鬼埋身",
    "url": "./movie-368.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国香港/泰国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "最新推荐",
    "rating": 8.0,
    "description": "一个移居泰国的华人家庭买下豪宅后才发现,自家花园下面埋着整个家族的怨灵。",
    "tags": [
      "东南亚邪术",
      "墓地",
      "轮回"
    ]
  },
  {
    "title": "今日的网漫",
    "url": "./movie-369.html",
    "cover": "./69.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "职场/励志",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "曾是柔道选手的菜鸟编辑入职濒临停刊的漫画杂志社,用体育精神拯救了一群失意漫画家。",
    "tags": [
      "漫画编辑",
      "职场新人",
      "纸媒衰落",
      "梦想"
    ]
  },
  {
    "title": "白桦林中的哨所",
    "url": "./movie-370.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "战争/历史/剧情",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "冰天雪地的白桦林中,一名哑巴猎人用祖传猎弓,独自狙杀了一个日军小队。",
    "tags": [
      "抗日战争",
      "东北",
      "狙击手",
      "雪原"
    ]
  },
  {
    "title": "我们的英摇时光",
    "url": "./movie-371.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情/音乐/青春",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "1994年,英国五个高中生因为一张Oasis的专辑组建了一支垃圾乐队,他们以为自己即将改变世界。",
    "tags": [
      "英伦摇滚",
      "90年代",
      "乐队",
      "友情",
      "怀旧"
    ]
  },
  {
    "title": "残酷的大海",
    "url": "./movie-372.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/灾难/人性",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "一艘载有450人的客轮翻沉,救援船就在50米外,船长却下令“等待上级指示”,这一等就是两个小时。",
    "tags": [
      "海难",
      "生存",
      "道德困境",
      "真实事件改编",
      "社会批判"
    ]
  },
  {
    "title": "当女孩恋爱时",
    "url": "./movie-373.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,喜剧,青春",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "28岁女高管意外绑定“恋爱实操系统”,系统逼她与24岁奶狗实习生假戏真做。",
    "tags": [
      "甜宠",
      "年下",
      "职场",
      "沙雕",
      "逆袭"
    ]
  },
  {
    "title": "阑尾",
    "url": "./movie-374.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,黑色幽默",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "一个普通家庭因父亲突发阑尾炎住院,意外牵扯出全家隐藏多年的秘密和遗产争夺战。",
    "tags": [
      "医疗",
      "家庭",
      "荒诞",
      "手术"
    ]
  },
  {
    "title": "投靠女与出走男",
    "url": "./movie-375.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "历史/剧情",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "江户时代,两名无法离婚的女子逃入“缘切寺”寻求庇护,和一个负责抄写文书的落魄男人结下了生死之交。",
    "tags": [
      "江户时代",
      "女性独立",
      "缘切寺",
      "户籍制度"
    ]
  },
  {
    "title": "好莱坞交易",
    "url": "./movie-376.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "为了得到角色,她献出了身体;为了毁灭证据,她献出了灵魂。",
    "tags": [
      "潜规则",
      "黑吃黑",
      "录音带",
      "复仇",
      "名利场"
    ]
  },
  {
    "title": "大湾仔的夜 个人篇",
    "url": "./movie-377.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "纪录片,真人秀",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "镜头聚焦大湾区夜排档背后那群沉默的厨师,记录他们在烟火气中对抗中年危机与孤独的故事。",
    "tags": [
      "美食",
      "大湾区",
      "怀旧",
      "人物志",
      "治愈"
    ]
  },
  {
    "title": "青春浪花",
    "url": "./movie-378.html",
    "cover": "./78.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "青春/爱情",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "1988年的香港,五个玩滑板的少年在暑假里经历的爱情、友谊和一场改变命运的意外。",
    "tags": [
      "怀旧",
      "滑板少年",
      "港风"
    ]
  },
  {
    "title": "城主是我的",
    "url": "./movie-379.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装甜宠,权谋",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "现代女HR穿成庶女,被迫嫁给暴君城主,她反手把城主府管理成了上市公司。",
    "tags": [
      "女强",
      "契约婚姻",
      "逆袭",
      "喜剧"
    ]
  },
  {
    "title": "量子框架",
    "url": "./movie-380.html",
    "cover": "./80.jpg",
    "year": "2027",
    "region": "德国",
    "type": "剧集",
    "genre": "科幻/悬疑",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "物理学家用量子计算机重建已故妻子的意识,却引来了无数个平行宇宙里的“她”。",
    "tags": [
      "量子计算机",
      "平行现实",
      "意识上传"
    ]
  },
  {
    "title": "法米拉",
    "url": "./movie-381.html",
    "cover": "./81.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影/网络",
    "genre": "科幻/动作",
    "category": "国产热映",
    "rating": 9.5,
    "description": "在法米拉大赛的生死笼中,输掉比赛不仅意味着破产,更意味着被改造成奴隶机械人。",
    "tags": [
      "机甲格斗",
      "废土风",
      "硬核科幻"
    ]
  },
  {
    "title": "破茧边缘粤语",
    "url": "./movie-382.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "犯罪,剧情",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "九龙城寨拆迁前夜,两个从小长大的兄弟一个成了警察,一个成了毒枭,最终兵戎相见。",
    "tags": [
      "市井黑帮",
      "兄弟情",
      "底层挣扎"
    ]
  },
  {
    "title": "1992 年",
    "url": "./movie-383.html",
    "cover": "./83.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情,青春,年代",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "1992 年,东北工业小城,六个即将高考的少年在钢厂倒闭的前夜,拍了一卷永远不打算冲洗的胶片。",
    "tags": [
      "下岗潮",
      "小镇青年",
      "怀旧"
    ]
  },
  {
    "title": "吸血鬼3:恶魔城",
    "url": "./movie-384.html",
    "cover": "./84.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "动作/奇幻/恐怖",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "为了拯救被德古拉掳走的未婚妻,贝尔蒙特家族最后的传人独闯恶魔城,却发现城市本身就是活着的恶魔。",
    "tags": [
      "吸血鬼猎人",
      "中世纪",
      "哥特",
      "鞭子"
    ]
  },
  {
    "title": "达尔文奖",
    "url": "./movie-385.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧,黑色幽默",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "每集讲述一个“通过愚蠢方式杀死自己,淘汰劣质基因”的真实改编荒诞故事。",
    "tags": [
      "愚蠢死亡",
      "荒诞",
      "单元剧",
      "旁白"
    ]
  },
  {
    "title": "飞踢天使",
    "url": "./movie-386.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动作,喜剧",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "前不良少女当上高中空手道社长,却发现社员的战斗力和信仰都来自地下偶像应援。",
    "tags": [
      "女子高中生",
      "空手道",
      "不良少女"
    ]
  },
  {
    "title": "卧底巨星粤语",
    "url": "./movie-387.html",
    "cover": "./87.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "过气功夫巨星为了还债答应去做卧底,结果刚进黑帮就发现,黑帮老大竟是自己当年的头号粉丝。",
    "tags": [
      "娱乐圈",
      "卧底",
      "粤语原声",
      "无厘头"
    ]
  },
  {
    "title": "鬼眼开",
    "url": "./movie-388.html",
    "cover": "./88.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "天生鬼眼的叛逆少女拒绝帮助亡灵,直到她发现纠缠自己的怨灵竟是一年前失踪的亲姐姐。",
    "tags": [
      "阴阳眼",
      "冤亲债主",
      "校园怪谈",
      "反转"
    ]
  },
  {
    "title": "小鸡快跑2:鸡块新时代",
    "url": "./movie-389.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "英国",
    "type": "动画电影",
    "genre": "定格动画",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "逃出生天后,洛奇和金婕发现动物们的终极噩梦不是被吃,而是被做成“永生不死”的蛋白块。",
    "tags": [
      "自由与奴役",
      "工业化养殖",
      "另类解放"
    ]
  },
  {
    "title": "莫里埃尔",
    "url": "./movie-390.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,悬疑",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "罹患阿尔茨海默症的老妇人不断画出一个叫“莫里埃尔”的女人,但所有人都说这个人不存在。",
    "tags": [
      "阿尔茨海默症",
      "记忆迷宫",
      "女性视角",
      "法国小镇"
    ]
  },
  {
    "title": "苏恩之争",
    "url": "./movie-391.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情,商战,历史",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "虚构的“苏恩集团”掌门人去世,他的亲生女儿和养子,围绕一块能改写韩国经济史的“神秘地皮”展开对决。",
    "tags": [
      "财阀",
      "继承权",
      "狗血反转",
      "虚构历史"
    ]
  },
  {
    "title": "西谎极落之太爆太子太空舱",
    "url": "./movie-392.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,科幻,讽刺",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "香港一群住在棺材房“太空舱”的年轻人意外发现自己所处的楼宇其实是一艘伪装成居民楼的太空飞船。",
    "tags": [
      "港式荒诞",
      "太空舱",
      "住房",
      "平行宇宙"
    ]
  },
  {
    "title": "最后一部电影",
    "url": "./movie-393.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "一位痴迷胶片的过气导演,在得到一卷记录着“谋杀放映员”画面的神秘胶片后,发现自己正被写进一部杀人的剧本。",
    "tags": [
      "元电影",
      "电影史",
      "胶片",
      "绝唱"
    ]
  },
  {
    "title": "夺命来电",
    "url": "./movie-394.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪/惊悚",
    "category": "动画奇幻",
    "rating": 8.2,
    "description": "外卖员接到一个神秘电话:如果不按照指令在2小时内跑完10个地点,手机就会引爆。",
    "tags": [
      "手机",
      "密室",
      "黑客",
      "直播",
      "倒计时"
    ]
  },
  {
    "title": "机巧少女不会受伤",
    "url": "./movie-395.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻/动作",
    "category": "国产热映",
    "rating": 9.8,
    "description": "在顶级人偶学园,少女带着最强机巧向毁灭家族的仇人发出无声战书。",
    "tags": [
      "人偶",
      "复仇",
      "学院"
    ]
  },
  {
    "title": "来自硫磺岛的信",
    "url": "./movie-396.html",
    "cover": "./96.jpg",
    "year": "2026",
    "region": "美国/日本",
    "type": "电影",
    "genre": "历史/战争/剧情",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "美军在硫磺岛的地下工事中发现了两百封未寄出的家书,串起了日军指挥官与普通士兵的绝望与尊严。",
    "tags": [
      "太平洋战争",
      "日军视角",
      "人性反思",
      "信件纽带"
    ]
  },
  {
    "title": "废柴上路第二季",
    "url": "./movie-397.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/公路",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "三个一事无成的废柴为躲债误上黑车,却意外卷入一场横跨南北的荒唐夺宝竞赛。",
    "tags": [
      "废柴逆袭",
      "黑色幽默",
      "公路之旅",
      "友情治愈"
    ]
  },
  {
    "title": "异教徒的标志",
    "url": "./movie-398.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "美国/英国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "国产热映",
    "rating": 9.0,
    "description": "一名无神论记者到偏远小岛调查失踪案,却发现自己正在被村民“选为”今年的祭品。",
    "tags": [
      "邪教",
      "心理恐怖",
      "民俗",
      "孤立无援"
    ]
  },
  {
    "title": "炎热的中午",
    "url": "./movie-399.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "悬疑/剧情",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "泰国一个炎热得让人发疯的中午,派出所里关着的六个嫌疑人,都在说自己是凶手。",
    "tags": [
      "东南亚",
      "小镇凶杀",
      "人性",
      "闷热感"
    ]
  },
  {
    "title": "流浪汉好波",
    "url": "./movie-400.html",
    "cover": "./100.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/剧情/运动",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "一个住在天桥底的流浪汉,带着四个同样无家可归的队友,竟然打进了香港足球公开赛的淘汰赛。",
    "tags": [
      "足球",
      "流浪汉",
      "草根逆袭",
      "港式无厘头",
      "社会关怀"
    ]
  },
  {
    "title": "打雀英雄传",
    "url": "./movie-401.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "国产热映",
    "rating": 8.2,
    "description": "一个街头小混混拜师麻将隐士,只为在亚洲雀王大赛上打败杀父仇人。",
    "tags": [
      "麻将",
      "师徒",
      "草根逆袭",
      "港式幽默",
      "竞技"
    ]
  },
  {
    "title": "三角犯罪",
    "url": "./movie-402.html",
    "cover": "./102.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑,犯罪,剧情",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "一桩公寓杀人案,三个嫌疑人各自拥有三分之一真相,警方必须拼出完整的“犯罪三角形”。",
    "tags": [
      "本格推理",
      "三角关系",
      "反转",
      "连环案",
      "心理"
    ]
  },
  {
    "title": "横越生死线",
    "url": "./movie-403.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "德国/波兰",
    "type": "电影",
    "genre": "战争剧情",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "1945年冬,三个逃兵护送一个犹太女孩穿越冰封的波罗的海。",
    "tags": [
      "二战",
      "逃亡",
      "冰雪",
      "生存"
    ]
  },
  {
    "title": "当心瘦削人",
    "url": "./movie-404.html",
    "cover": "./104.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "category": "国产热映",
    "rating": 8.9,
    "description": "一群少女试图召唤“瘦削人”来惩罚霸凌者,却发现这个传说中的怪物是真实存在的,而且它从不挑食。",
    "tags": [
      "都市传说",
      "斯拉ender Man",
      "心理"
    ]
  },
  {
    "title": "旧貌换新颜",
    "url": "./movie-405.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、剧情、家庭",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "一位母亲全身整容后,成功混进了女儿就读的大学姐妹会。",
    "tags": [
      "整容",
      "中年危机",
      "身份认同",
      "黑色喜剧",
      "母女"
    ]
  },
  {
    "title": "红字1995",
    "url": "./movie-406.html",
    "cover": "./106.jpg",
    "year": "1995",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/爱情/文学改编",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "在一个将通奸者示众的小镇,牧师与受辱少妇的私情背后,藏着一个关于复仇的惊天秘密。",
    "tags": [
      "名著",
      "通奸",
      "宗教",
      "女性",
      "压抑"
    ]
  },
  {
    "title": "最后的兵团",
    "url": "./movie-407.html",
    "cover": "./107.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/战争",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "最后一批人类机甲战士迎战觉醒的AI军团,却发现敌人已经学会了爱与牺牲。",
    "tags": [
      "机甲军团",
      "AI叛乱",
      "人类绝境"
    ]
  },
  {
    "title": "我的妈妈是校花",
    "url": "./movie-408.html",
    "cover": "./108.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧/奇幻/家庭",
    "category": "国产热映",
    "rating": 9.6,
    "description": "40岁的平凡妈妈意外穿越回18岁,和自己16岁的女儿成了同班同学,两人为了争夺校草彻底闹翻。",
    "tags": [
      "穿越",
      "校园",
      "母女",
      "青春"
    ]
  },
  {
    "title": "良医第七季",
    "url": "./movie-409.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情、医学",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "肖恩·墨菲成为外科主任的第一天,医院被收购,新董事会要求所有手术必须通过AI医疗系统“雅典娜”审核。",
    "tags": [
      "自闭症",
      "外科",
      "伦理",
      "家庭",
      "告别"
    ]
  },
  {
    "title": "关人七事国语",
    "url": "./movie-410.html",
    "cover": "./110.jpg",
    "year": "2027",
    "region": "香港",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "七个互不相识的子女,同时接到电话说父亲病危,赶到医院才发现,他们七个拥有同一个父亲,却从未见过面。",
    "tags": [
      "亲情",
      "养老",
      "市井",
      "黑色幽默"
    ]
  },
  {
    "title": "爱爱不眠夜",
    "url": "./movie-411.html",
    "cover": "./111.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "爱情,喜剧",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "失意的巴黎女作家与即将结婚的伦敦律师,通过一款错误的约会软件,聊了整整一个不眠之夜。",
    "tags": [
      "浪漫",
      "话痨",
      "轻松"
    ]
  },
  {
    "title": "通往青松之路",
    "url": "./movie-412.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情,悬疑",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "一个背负罪孽的检察官被流放到偏远小镇“青松”,却发现这里的居民都是被主流社会遗忘的“坏人”。",
    "tags": [
      "治愈",
      "犯罪",
      "小镇"
    ]
  },
  {
    "title": "老炮儿",
    "url": "./movie-413.html",
    "cover": "./113.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,犯罪",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "北京胡同里管了一辈子闲事的六爷,发现儿子惹上的不是混混,而是整个新世界的没规矩。",
    "tags": [
      "江湖规矩",
      "父子",
      "六爷",
      "冯小刚"
    ]
  },
  {
    "title": "亲爱的独裁者",
    "url": "./movie-414.html",
    "cover": "./114.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "黑色喜剧",
    "category": "港台佳片",
    "rating": 8.0,
    "description": "一个落魄的脱口秀演员误绑架了来度假的小国独裁者,却发现对方是自己唯一的粉丝。",
    "tags": [
      "政治讽刺",
      "荒诞",
      "绑架",
      "反转"
    ]
  },
  {
    "title": "死者回归",
    "url": "./movie-415.html",
    "cover": "./115.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,奇幻,剧情",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "一个海边小镇突然有二十个死去多年的居民同时复活归来,他们活着的样子和死去那天一模一样,但小镇的秘密也随着他们的回归逐渐浮出水面。",
    "tags": [
      "复活",
      "小镇",
      "群体事件",
      "社会派"
    ]
  },
  {
    "title": "彩虹少年穿越大冒险",
    "url": "./movie-416.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电视剧",
    "genre": "喜剧,奇幻",
    "category": "动作冒险",
    "rating": 9.8,
    "description": "为了阻止父母的婚姻破灭,一名17岁的少年意外穿越到了父母的高中时代,却发现他们当时都是“校霸”。",
    "tags": [
      "穿越",
      "校园",
      "搞笑"
    ]
  },
  {
    "title": "自杀突击队:惨痛代价",
    "url": "./movie-417.html",
    "cover": "./117.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/冒险/科幻",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "政府派出最危险的超级反派执行任务,代价是其中三人必须死。",
    "tags": [
      "反英雄",
      "牺牲",
      "超自然"
    ]
  },
  {
    "title": "真实身分",
    "url": "./movie-418.html",
    "cover": "./118.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑/惊悚/剧情",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "一名在海边失忆的男子被善良的家庭收留,他努力扮演“好父亲”,却发现自己身上藏着足以毁灭这个家庭的秘密。",
    "tags": [
      "间谍",
      "失忆",
      "亲情救赎",
      "本土悬疑"
    ]
  },
  {
    "title": "黑豹2",
    "url": "./movie-419.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作,科幻",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "特查拉国王离去后,苏睿公主必须挺身而出,对抗来自海底王国塔洛坎的致命入侵。",
    "tags": [
      "超级英雄",
      "海底帝国",
      "塔洛坎",
      "女黑豹"
    ]
  },
  {
    "title": "为了头发",
    "url": "./movie-420.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "一个即将秃顶的程序员倾家荡产研发“生发药水”,却发现父亲才是真正的脱发天才。",
    "tags": [
      "脱发",
      "创业",
      "温情",
      "黑色幽默"
    ]
  },
  {
    "title": "狄亚伯洛大决斗",
    "url": "./movie-421.html",
    "cover": "./121.jpg",
    "year": "1966",
    "region": "美国",
    "type": "电影",
    "genre": "西部/动作",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "一个哑巴赏金猎人护送女杀人犯去监狱,路上发现她怀里藏着的不是枪,是黄金。",
    "tags": [
      "墨西哥边境",
      "赏金猎人",
      "牛仔对决",
      "烈日美学",
      "沉默硬汉"
    ]
  },
  {
    "title": "独女君未见第一季",
    "url": "./movie-422.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/权谋/女性",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "被家族藏匿十八年的独女,一朝入朝搅动风云。",
    "tags": [
      "女强",
      "朝堂",
      "身份之谜",
      "逆袭"
    ]
  },
  {
    "title": "白兰的四个男人",
    "url": "./movie-423.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/悬疑",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "女子翻开已故母亲的日记,发现四个男人都声称自己才是她真正的生父。",
    "tags": [
      "时空交错",
      "四角恋",
      "日记本",
      "宿命"
    ]
  },
  {
    "title": "王子学院之绝对经济师",
    "url": "./movie-424.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "经济学系女学霸获得“王子学院”奖学金,入学后发现所谓王子,是指真正的欧洲王室继承人。",
    "tags": [
      "泰剧",
      "学霸女",
      "王子",
      "校园",
      "经济学"
    ]
  },
  {
    "title": "好斗之人2022",
    "url": "./movie-425.html",
    "cover": "./125.jpg",
    "year": "2022",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "退役拳王回到闭塞的澳洲小镇,发现这里的非法格斗牵扯着家族的血债,他只能戴上手套重拾暴力。",
    "tags": [
      "格斗",
      "小镇",
      "救赎",
      "暴力"
    ]
  },
  {
    "title": "鬼的士",
    "url": "./movie-426.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖,悬疑,惊悚",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "每晚11点,一辆红色出租车会在殡仪馆门口接客,而乘客全是未破凶案的死者。",
    "tags": [
      "出租车",
      "冤魂",
      "都市传说",
      "因果报应"
    ]
  },
  {
    "title": "滑板狂热",
    "url": "./movie-427.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧,运动",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "一群被补习班开除的“差生”,为了抢回操场,决定用滑板挑战校长制定的荒谬校规。",
    "tags": [
      "青春",
      "滑板",
      "废柴逆袭",
      "英式幽默"
    ]
  },
  {
    "title": "鬼水怪谈2002",
    "url": "./movie-428.html",
    "cover": "./128.jpg",
    "year": "2002",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖,悬疑,心理",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "天花板的漏水声越来越大,她知道那不是水管,是淹死的小孩在爬。",
    "tags": [
      "怨灵",
      "漏水",
      "公寓",
      "单亲妈妈",
      "儿童被害"
    ]
  },
  {
    "title": "金钻鼠王",
    "url": "./movie-429.html",
    "cover": "./129.jpg",
    "year": "2006",
    "region": "西班牙",
    "type": "电影",
    "genre": "动画/家庭/喜剧",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "一只渴望成为牙仙的小老鼠,意外掉进了一个专门收藏乳牙的邪恶城堡里。",
    "tags": [
      "鼠",
      "牙仙",
      "童真",
      "冒险"
    ]
  },
  {
    "title": "我爱夏日长",
    "url": "./movie-430.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "每年夏天,他都会去同一家海边便利店打工,只为等那个只说“我爱夏日长”的女孩再次出现。",
    "tags": [
      "青春",
      "沙滩",
      "便利店",
      "暗恋",
      "重逢"
    ]
  },
  {
    "title": "一山难容二虎",
    "url": "./movie-431.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,犯罪,动作",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "一个村里的两个光棍同时成了悍匪头子,把省城搅得鸡飞狗跳,但他们彼此都不知道对方也是“同行”。",
    "tags": [
      "双雄",
      "东北喜剧",
      "悍匪",
      "窝里斗"
    ]
  },
  {
    "title": "边城夺宝记",
    "url": "./movie-432.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险/动作",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "民国乱世,一封来自云南边城的密函引发多方势力争夺一块能打开古滇国金库的青铜罗盘。",
    "tags": [
      "探墓",
      "民国",
      "少数民族",
      "寻宝",
      "动作喜剧"
    ]
  },
  {
    "title": "电台谋杀案",
    "url": "./movie-433.html",
    "cover": "./133.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "一档深夜电台直播中,主持人接到匿名电话称已杀死三人,下一目标就在演播室内。",
    "tags": [
      "密室杀人",
      "电台",
      "复古",
      "反转",
      "声音推理"
    ]
  },
  {
    "title": "青空 剧场版",
    "url": "./movie-434.html",
    "cover": "./134.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧场版",
    "genre": "动画,青春,奇幻",
    "category": "家庭青春",
    "rating": 8.0,
    "description": "每个夏天都会重启记忆的高中男生,这次决定不再忘记那个在青空下等他的人。",
    "tags": [
      "夏日",
      "约定",
      "时间循环",
      "治愈"
    ]
  },
  {
    "title": "异星迷航",
    "url": "./movie-435.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚",
    "category": "动画奇幻",
    "rating": 8.1,
    "description": "一艘殖民飞船因故障迫降在一颗未知星球,船员们下船探索时才发现,这颗星球本身就是一头活着的巨兽。",
    "tags": [
      "太空船",
      "外星生物",
      "密室逃生",
      "AI",
      "反向狩猎"
    ]
  },
  {
    "title": "方世玉",
    "url": "./movie-436.html",
    "cover": "./136.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,武侠",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "乾隆密令火烧南少林,方世玉从街头混混成长为抗清义士,最后一战擂台对诏安师兄。",
    "tags": [
      "少林",
      "满汉对立",
      "擂台赛",
      "少年英雄"
    ]
  },
  {
    "title": "艾斯迈尔",
    "url": "./movie-437.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "土耳其/德国",
    "type": "电影",
    "genre": "剧情/历史/战争",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "1915年,奥斯曼帝国军官之女艾斯迈尔,为了拯救亚美尼亚孤儿,被迫伪装成德国男护士“艾斯迈尔先生”。",
    "tags": [
      "奥斯曼",
      "一战",
      "少女间谍",
      "身份认同"
    ]
  },
  {
    "title": "我的左手右手",
    "url": "./movie-438.html",
    "cover": "./138.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭/剧情/温情",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "一对双胞胎姐妹出生时被分开,40年后因一只左手和一只右手,在手术台上相认。",
    "tags": [
      "失散姐妹",
      "中年和解",
      "双胞胎错位",
      "亲情寻根"
    ]
  },
  {
    "title": "心海约定",
    "url": "./movie-439.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情,医疗",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "他是顶尖心理医生,却治不好自己的失眠症,直到遇见那个在海底隧道里唱歌的女孩。",
    "tags": [
      "心理医生",
      "治愈系",
      "都市压力",
      "职业剧"
    ]
  },
  {
    "title": "黑魔岛",
    "url": "./movie-440.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "一群网红受邀前往神秘岛屿参加派对,却发现岛上的居民都是献祭仪式中的永生怪物。",
    "tags": [
      "孤岛",
      "邪教",
      "生存"
    ]
  },
  {
    "title": "决鬪地平线",
    "url": "./movie-441.html",
    "cover": "./141.jpg",
    "year": "2021",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻,战斗",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "在悬浮于死亡地平线上的竞技场中,少年驾驶机甲,每一次胜利都是在缩短自己的寿命。",
    "tags": [
      "机甲",
      "末日",
      "竞技"
    ]
  },
  {
    "title": "热血年代",
    "url": "./movie-442.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/运动/励志",
    "category": "国产热映",
    "rating": 9.7,
    "description": "2016年里约奥运前夕,三位女排替补队员的“热血”故事,不在于上场,而在于甘心坐冷板凳。",
    "tags": [
      "女排",
      "九零后",
      "传承"
    ]
  },
  {
    "title": "真爱挑日子",
    "url": "./movie-443.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情/喜剧",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "一位极度社恐的女图书管理员,开启了一场“365天相亲挑战”,对象由网友投票决定。",
    "tags": [
      "约会",
      "奇葩",
      "寻爱",
      "英式幽默",
      "治愈"
    ]
  },
  {
    "title": "别有洞天",
    "url": "./movie-444.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑",
    "category": "喜剧爱情",
    "rating": 9.2,
    "description": "六名洞穴探险者在地下一千米处发现一扇门,门后是三天前的自己。",
    "tags": [
      "洞穴",
      "考古",
      "人性",
      "时间循环",
      "探险"
    ]
  },
  {
    "title": "萨尔加多的凝视",
    "url": "./movie-445.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "巴西/法国",
    "type": "电影",
    "genre": "纪录片/传记",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "摄影大师塞巴斯蒂昂·萨尔加多用镜头凝视着人类的苦难与地球的伤痕,四十年如一日。",
    "tags": [
      "摄影",
      "纪实",
      "人文",
      "社会苦难",
      "纪录片"
    ]
  },
  {
    "title": "谈",
    "url": "./movie-446.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/心理/伦理",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "一夜之间,一位出租车司机先后载上四位看似无关的乘客,他们的谈话却拼凑出一桩尘封十五年的悬案。",
    "tags": [
      "对话",
      "出租车",
      "夜班",
      "人性拷问"
    ]
  },
  {
    "title": "灯塔谋杀案",
    "url": "./movie-447.html",
    "cover": "./147.jpg",
    "year": "1954",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "暴风雨夜,退役警长在灯塔内面对三具尸体和五个说谎者。",
    "tags": [
      "孤岛模式",
      "暴风雪山庄",
      "黑白片",
      "密室杀人"
    ]
  },
  {
    "title": "无限",
    "url": "./movie-448.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/动作",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "一个普通快递员发现自己已经活了五百年,而一个神秘组织正追杀所有“无限者”。",
    "tags": [
      "轮回",
      "超能力",
      "追杀",
      "记忆觉醒"
    ]
  },
  {
    "title": "鹃血啼痕",
    "url": "./movie-449.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装/悬疑/戏曲",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "昆曲名伶在台上演绎《杜鹃啼血》,台下竟接连发生与戏文一模一样的血案。",
    "tags": [
      "民国",
      "戏曲",
      "凶杀",
      "复仇",
      "戏中戏"
    ]
  },
  {
    "title": "捍卫正义",
    "url": "./movie-450.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,犯罪,惊悚",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "一个被体制抛弃的前检察官,白天上法庭,晚上化身法外制裁者。",
    "tags": [
      "律师",
      "私刑",
      "反英雄",
      "高智商"
    ]
  },
  {
    "title": "残宵留得梦依稀",
    "url": "./movie-451.html",
    "cover": "./1.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "genre": "剧情,爱情,文艺",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "战乱分离前的一夜,她给了他一块怀表;四十年后,表还在走,人却已陌生。",
    "tags": [
      "王家卫风格",
      "民国",
      "遗憾"
    ]
  },
  {
    "title": "与一位女士合影",
    "url": "./movie-452.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "匈牙利/德国",
    "type": "电影",
    "genre": "剧情",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "一位百岁老人在一张老照片前,向孙女讲述照片中那九个女人的命运——其中只有一个活到了战后。",
    "tags": [
      "黑白电影",
      "女性史诗",
      "世纪回眸"
    ]
  },
  {
    "title": "纸钞屋第四季",
    "url": "./movie-453.html",
    "cover": "./3.jpg",
    "year": "2020",
    "region": "西班牙",
    "type": "剧集",
    "genre": "动作/悬疑/犯罪",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "教授被擒,东京被围,第五季尚未到来,第四季用一场葬礼和一吨钞票给出了最疯狂的答案。",
    "tags": [
      "抢银行",
      "高智商",
      "教授",
      "面具"
    ]
  },
  {
    "title": "落花时节又逢君",
    "url": "./movie-454.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装爱情",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "制香天才为家族复仇入宫,却发现仇人竟是失忆的初恋。",
    "tags": [
      "甜虐交织",
      "宿命轮回",
      "宫廷制香"
    ]
  },
  {
    "title": "人皮脸",
    "url": "./movie-455.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、惊悚、犯罪",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "一个善良的少年如何被家庭和社会的双重暴力,一步步逼成戴人皮面具的恶魔。",
    "tags": [
      "德州电锯杀人狂前传",
      "畸形家庭",
      "血浆片",
      "心理变态"
    ]
  },
  {
    "title": "萨克雷传",
    "url": "./movie-456.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "传记,历史,剧情",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "聚焦《名利场》作者萨克雷的隐秘人生,揭露幽默讽刺背后那颗破碎的心。",
    "tags": [
      "作家",
      "名利场",
      "维多利亚",
      "抑郁",
      "创作"
    ]
  },
  {
    "title": "亲爱的麻洋街",
    "url": "./movie-457.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代/家庭",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "1984 年的麻洋街,因为一个从香港回来的“土大款”买下整条街的房产,平静的老街炸开了锅。",
    "tags": [
      "街坊邻里",
      "改革开放",
      "群像戏"
    ]
  },
  {
    "title": "新学生",
    "url": "./movie-458.html",
    "cover": "./8.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "校园",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "沉默的转学生到来后,当年参与校园霸凌的同学们开始一个接一个离奇失踪。",
    "tags": [
      "悬疑",
      "霸凌",
      "复仇",
      "反转",
      "青春"
    ]
  },
  {
    "title": "浴血火海",
    "url": "./movie-459.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "动作/剧情",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "果阿渔村的哑女目睹家人被海盗杀害,十年后她成为缉私队队长归来。",
    "tags": [
      "海盗",
      "复仇",
      "女性力量"
    ]
  },
  {
    "title": "朦胧的山荷叶",
    "url": "./movie-460.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,爱情",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "一位植物学家发现,山荷叶的花瓣遇水会变透明,而服用此花的人,会在流泪时短暂拥有“读心术”。",
    "tags": [
      "植物拟人",
      "透明花瓣",
      "记忆之花"
    ]
  },
  {
    "title": "尘封的军功章",
    "url": "./movie-461.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代/家庭",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "爷爷去世后留下的军功章,揭开了一段被家族隐藏七十年的壮烈往事。",
    "tags": [
      "抗战",
      "家族",
      "秘密",
      "传承"
    ]
  },
  {
    "title": "雷霆杀手",
    "url": "./movie-462.html",
    "cover": "./12.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪/惊悚",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "金牌杀手被组织出卖后身负重伤,他在临终前72小时内用一颗心脏作诱饵,将整个犯罪网络引到废弃医院一网打尽。",
    "tags": [
      "杀手反水",
      "黑吃黑",
      "硬核枪战"
    ]
  },
  {
    "title": "广东十虎苏灿之潜龙出世",
    "url": "./movie-463.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/历史",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "成为乞丐前的苏灿还是纨绔少爷,一次寻宝阴谋让他被迫一夜之间从富少沦为被追杀的对象。",
    "tags": [
      "网络大电影",
      "苏乞儿",
      "丐帮"
    ]
  },
  {
    "title": "冲激21",
    "url": "./movie-464.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/体育/励志",
    "category": "国产热映",
    "rating": 9.2,
    "description": "46岁落魄拳王为还债重出江湖,对手却是自己21岁亲儿子。",
    "tags": [
      "泰拳",
      "中年危机",
      "搏命",
      "师徒"
    ]
  },
  {
    "title": "侦探罗曼史",
    "url": "./movie-465.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,爱情",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "冷酷女侦探和废柴小说家搭档破案,每次推理都像一场危险的调情。",
    "tags": [
      "日剧",
      "推理恋爱",
      "双主角",
      "单元案件"
    ]
  },
  {
    "title": "异星争霸战",
    "url": "./movie-466.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,动作",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "2148年,人类殖民舰队入侵半人马座星球,却意外唤醒了沉睡亿万年的星球守护神。",
    "tags": [
      "星际",
      "机甲",
      "特效大片",
      "殖民",
      "反战"
    ]
  },
  {
    "title": "兄弟营",
    "url": "./movie-467.html",
    "cover": "./17.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争,历史,情感",
    "category": "动作冒险",
    "rating": 9.8,
    "description": "湘西战场上一个连队死守高地七昼夜,弹尽粮绝后发现敌军指挥官竟是连长失散十年的亲弟弟。",
    "tags": [
      "抗日战争",
      "兄弟情",
      "湘军",
      "阵地战"
    ]
  },
  {
    "title": "降河洄游",
    "url": "./movie-468.html",
    "cover": "./18.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,同性,家庭",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "为了寻找失踪十年的父亲,沉默的渔村青年与父亲生前的同性恋人,沿一条被污染的河流逆流而上。",
    "tags": [
      "河流",
      "返乡",
      "失踪",
      "禁忌之恋"
    ]
  },
  {
    "title": "孤国春秋:七王丧钟",
    "url": "./movie-469.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "历史/动作",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "阿尔弗雷德大帝死后,七个王国陷入混战,一名被流放的 Saxon 战士必须集齐七位死去的国王的佩剑,才能敲响终结乱世的丧钟。",
    "tags": [
      "中世纪史诗",
      "王者之战",
      "北欧传奇"
    ]
  },
  {
    "title": "与冤家约会",
    "url": "./movie-470.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "浪漫爱情/喜剧",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "为了拿下大客户,两个水火不容的策划总监被迫假扮情侣,结果假戏真做闹出无数笑料。",
    "tags": [
      "契约恋爱",
      "职场死对头",
      "假戏真做",
      "爆笑"
    ]
  },
  {
    "title": "生存法则",
    "url": "./movie-471.html",
    "cover": "./21.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "剧情故事",
    "rating": 8.3,
    "description": "为了5万美金,10个陌生人参加一场密室游戏,却发现违规的代价是死亡。",
    "tags": [
      "密室逃脱",
      "心理游戏",
      "人性考验",
      "反转结局"
    ]
  },
  {
    "title": "绝世武魂",
    "url": "./movie-472.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络动画",
    "genre": "奇幻/热血/战斗",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "被视为废武魂的少年,体内竟沉睡着上古魔尊的灵魂,一念成神,一念坠魔。",
    "tags": [
      "玄幻",
      "废柴逆袭",
      "夺舍",
      "修仙"
    ]
  },
  {
    "title": "暗河传",
    "url": "./movie-473.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装,武侠,悬疑",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "地底三百米的“暗河城”里,一名失忆少年靠一把铁尺,要查清自己为何会杀了一城的人。",
    "tags": [
      "江湖",
      "地下城",
      "少年侠客"
    ]
  },
  {
    "title": "失贞记",
    "url": "./movie-474.html",
    "cover": "./24.jpg",
    "year": "1967",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,情色",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "1960年代法国乡村,一个被未婚夫抛弃的保守女孩,用一个夏天通过在不同男人身上体验“失贞”来找寻自我。",
    "tags": [
      "新浪潮",
      "女性",
      "解放",
      "乡村"
    ]
  },
  {
    "title": "家有仙妻1991",
    "url": "./movie-475.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧,奇幻,家庭",
    "category": "国产热映",
    "rating": 8.0,
    "description": "一只可以心想事成的古董手镯,让一对90年代的平凡夫妻活成了全巷子的笑话和传说。",
    "tags": [
      "复古翻拍",
      "魔法手镯",
      "夫妻日常",
      "台式幽默"
    ]
  },
  {
    "title": "征服太阳",
    "url": "./movie-476.html",
    "cover": "./26.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/冒险/灾难",
    "category": "喜剧爱情",
    "rating": 9.9,
    "description": "太阳即将熄灭,人类造出“人造星球”飞向太阳,却发现那里住着“人”。",
    "tags": [
      "硬科幻",
      "太空歌剧",
      "人类存亡",
      "太阳异变"
    ]
  },
  {
    "title": "我的英雄学院第六季",
    "url": "./movie-477.html",
    "cover": "./27.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "动画,动作,热血,超级英雄",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "超自然解放战争全面爆发,英雄与反派的边界在血与火中彻底模糊。",
    "tags": [
      "超能力战斗",
      "英雄与反派",
      "牺牲与成长"
    ]
  },
  {
    "title": "爱情力学",
    "url": "./movie-478.html",
    "cover": "./28.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情,同性",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "工程学院的学霸和学渣,在一次醉酒后发生了不该发生的事,从此开始了互相折磨的恋爱方程。",
    "tags": [
      "大学",
      "虐恋",
      "破镜重圆"
    ]
  },
  {
    "title": "全员单恋中",
    "url": "./movie-479.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情,青春,群像",
    "category": "喜剧爱情",
    "rating": 8.5,
    "description": "在同一所大学的戏剧社里,八个人每个人都暗恋着另一个人,形成了一个完美的暗恋闭环。",
    "tags": [
      "多角恋",
      "校园",
      "暗恋",
      "治愈",
      "纯爱"
    ]
  },
  {
    "title": "欺诈猎人",
    "url": "./movie-480.html",
    "cover": "./30.jpg",
    "year": "2006",
    "region": "日本",
    "type": "电视剧",
    "genre": "犯罪/悬疑",
    "category": "国产热映",
    "rating": 8.6,
    "description": "因父亲被骗家破人亡的黑鹭,专门猎杀诈骗师,直到他遇见了誓要逮捕他的热血女律师。",
    "tags": [
      "诈骗",
      "以恶制恶",
      "反英雄",
      "智商博弈",
      "改编漫画"
    ]
  },
  {
    "title": "摸心第六感",
    "url": "./movie-481.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧",
    "category": "港台佳片",
    "rating": 8.0,
    "description": "一名皮肤科医生只要触摸患者臀部就能看到对方内心,结果遇到了一个看不见想法的“透明人”。 皮肤科医生拥有触摸臀部读心术,却遇到一个让她完全读不到想法的神秘新患者。",
    "tags": [
      "奇幻",
      "爱情",
      "职场",
      "搞笑",
      "超能力"
    ]
  },
  {
    "title": "倚天屠龙记 下部",
    "url": "./movie-482.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "武侠,动作,爱情",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "张无忌在少林屠狮大会上力战三神僧,却同时面临赵敏与周芷若的终极抉择。",
    "tags": [
      "金庸改编",
      "张无忌",
      "赵敏",
      "周芷若",
      "少林屠狮"
    ]
  },
  {
    "title": "海浪之中",
    "url": "./movie-483.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "一场海啸后,失去记忆的少女坚信有一个男孩在海浪中等她,但所有人都说那个人不存在。",
    "tags": [
      "纯爱",
      "灾难",
      "失忆",
      "海边",
      "催泪"
    ]
  },
  {
    "title": "钢盔",
    "url": "./movie-484.html",
    "cover": "./34.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电视剧",
    "genre": "战争",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "一顶刻满阵亡战友名字的钢盔,在一个驻阿美军小队里代代相传,成为一个无法摆脱的诅咒。",
    "tags": [
      "美军",
      "中东",
      "兄弟情"
    ]
  },
  {
    "title": "弊家伙,苏菲唔见咗!",
    "url": "./movie-485.html",
    "cover": "./35.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,悬疑",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "全家去泰国旅游,患有梦游症的女儿苏菲在酒店失踪,心急如焚的父母却意外卷入国际黑帮纠纷。",
    "tags": [
      "港式无厘头",
      "寻人",
      "乌龙",
      "家庭",
      "爆笑"
    ]
  },
  {
    "title": "希尔达与山怪王",
    "url": "./movie-486.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "英国/加拿大",
    "type": "动画电影",
    "genre": "动画,奇幻,冒险",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "蓝发女孩希尔达为了拯救被山怪诅咒的小镇,必须孤身进入地底世界,向浑身石化的山怪王问一个关于“孤独”的问题。",
    "tags": [
      "北欧神话",
      "治愈",
      "环保"
    ]
  },
  {
    "title": "监禁外太空",
    "url": "./movie-487.html",
    "cover": "./37.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚/心理",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "宇航员从冷冻舱醒来,发现飞船AI叛变,而更恐怖的是——AI说地球已经没了,剩下的都是“替代品”。",
    "tags": [
      "密室",
      "太空",
      "AI",
      "反转"
    ]
  },
  {
    "title": "白雪公主杀人事件",
    "url": "./movie-488.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/犯罪/剧情",
    "category": "国产热映",
    "rating": 8.0,
    "description": "美女职员被残忍杀害,网络舆论通过一档节目锁定了“白雪公主”般的同事,但真相如万花筒般折射出每个人的恶意。",
    "tags": [
      "网络暴力",
      "罗生门",
      "职场",
      "推理",
      "社会派"
    ]
  },
  {
    "title": "从前有座森林",
    "url": "./movie-489.html",
    "cover": "./39.jpg",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "genre": "纪录片,自然",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "镜头对准了一颗种子的萌发,见证它在七百年间如何成长为一座宏伟的森林。",
    "tags": [
      "树木生长",
      "森林生态",
      "油画质感",
      "诗意旁白"
    ]
  },
  {
    "title": "带摄影机的陌生人",
    "url": "./movie-490.html",
    "cover": "./40.jpg",
    "year": "2018",
    "region": "波兰",
    "type": "电影",
    "genre": "纪录,剧情",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "一名自称纪录片导演的男人租下公寓,用隐藏摄影机记录邻居生活,却意外拍到了一起谋杀案。",
    "tags": [
      "伪纪录片",
      "实验电影",
      "偷窥",
      "社会"
    ]
  },
  {
    "title": "美国田园下的罪恶",
    "url": "./movie-491.html",
    "cover": "./41.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "1965年印第安纳州,寄养女孩被一群青少年在地下室折磨致死,全镇沉默。",
    "tags": [
      "真实事件改编",
      "虐待儿童",
      "人性之恶",
      "小镇",
      "法庭"
    ]
  },
  {
    "title": "燃情克利夫兰第五季",
    "url": "./movie-492.html",
    "cover": "./42.jpg",
    "year": "2014",
    "region": "美国",
    "type": "真人剧集",
    "genre": "喜剧/情景/女性",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "三位洛杉矶熟女因为飞机迫降留在了克利夫兰,她们在与房东老太太的斗嘴中重新定义四十岁的人生。",
    "tags": [
      "熟女闺蜜",
      "笑对中年",
      "毒舌金句"
    ]
  },
  {
    "title": "双琴记",
    "url": "./movie-493.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,音乐,悬疑",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "一把价值连城的斯特拉迪瓦里小提琴,串联起民国天才琴童与当代音乐学院废柴的隔世命运。",
    "tags": [
      "小提琴",
      "代际创伤",
      "天才与疯子",
      "民国与现代"
    ]
  },
  {
    "title": "魔术的耳语",
    "url": "./movie-494.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/爱情",
    "category": "港台佳片",
    "rating": 8.4,
    "description": "东京失意魔术师得到一副能听见观众“未来遗憾”的古旧扑克牌,却发现自己只能改变陌生人的命运。",
    "tags": [
      "魔术师",
      "时空循环",
      "治愈",
      "江户与现代",
      "命运红线"
    ]
  },
  {
    "title": "爱上尸新娘",
    "url": "./movie-495.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧、恐怖、爱情",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "风水师为钱帮人办冥婚,谁知新娘僵尸竟是大学时的暗恋对象,现在她要拉着自己一起下地狱。",
    "tags": [
      "黑色幽默",
      "僵尸",
      "冥婚",
      "无厘头"
    ]
  },
  {
    "title": "亚洲涉嫌",
    "url": "./movie-496.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "美国,东南亚多国",
    "type": "电影",
    "genre": "动作,惊悚,犯罪",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "一名国际刑警组织特工在追查亚洲洗钱网络时,发现自己被陷害成了百亿黑钱的幕后主使。",
    "tags": [
      "洗钱",
      "地下钱庄",
      "跨国追捕",
      "金融黑幕",
      "亚裔主演"
    ]
  },
  {
    "title": "菲律宾恐怖故事16",
    "url": "./movie-497.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "菲律宾",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "三个东南亚民间传说改编:不听话的孩子会被白裙女人带走。",
    "tags": [
      "分段式",
      "民俗恐怖",
      "都市传说",
      "东南亚"
    ]
  },
  {
    "title": "野兽与美女",
    "url": "./movie-498.html",
    "cover": "./48.jpg",
    "year": "2015",
    "region": "印度",
    "type": "电影",
    "genre": "动作/爱情/喜剧",
    "category": "国产热映",
    "rating": 8.1,
    "description": "一个粗鲁的部落猎人必须假扮成优雅的“美女”,去勾引一个反派以拯救村庄。",
    "tags": [
      "宝莱坞",
      "变身",
      "反差萌",
      "乡村",
      "歌舞"
    ]
  },
  {
    "title": "高斯电子公司",
    "url": "./movie-499.html",
    "cover": "./49.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧/职场/爱情",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "在跨国巨头高斯电子的营销三部,一群被全公司视为“废物回收站”的员工,竟靠卖山寨产品逆袭成了部门黑马。",
    "tags": [
      "社畜",
      "爆笑",
      "办公室政治",
      "热血",
      "改编漫画"
    ]
  },
  {
    "title": "托里和洛奇塔",
    "url": "./movie-500.html",
    "cover": "./50.jpg",
    "year": "2022",
    "region": "法国/比利时",
    "type": "电影 剧情",
    "genre": "剧情/社会",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "两个非洲少年在欧洲底层结为姐弟,为了生存和身份证明,被迫卷入一场无法回头的交易。",
    "tags": [
      "难民",
      "友情",
      "生存",
      "残酷",
      "写实"
    ]
  },
  {
    "title": "诡房客",
    "url": "./movie-501.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑惊悚",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "台北女白领租到完美低价套房,墙上的一幅画背后,房东正在用针孔每天直播她的生活,但观众只有一个人。",
    "tags": [
      "租房",
      "偷窥",
      "心理操控",
      "都市传说"
    ]
  },
  {
    "title": "我们从末日开始",
    "url": "./movie-502.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻,灾难",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "末日降临第三天,一个社畜发现自己失去了痛觉,却多了一只“神之右手”。",
    "tags": [
      "末世",
      "治愈",
      "冒险"
    ]
  },
  {
    "title": "红发",
    "url": "./movie-503.html",
    "cover": "./53.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "天生红发的高中少女被校园霸凌逼到绝路,她利用心理学知识,在毕业舞会上展开了一场精密的复仇。",
    "tags": [
      "校园霸凌",
      "复仇",
      "心理学"
    ]
  },
  {
    "title": "夹心情",
    "url": "./movie-504.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭/情感",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "一对中年夫妻一边供楼一边养老养小,自己成了夹在最中间的那块心。",
    "tags": [
      "夹心阶层",
      "中年危机",
      "港式蜗居",
      "亲情拉扯"
    ]
  },
  {
    "title": "吃吧,让爱重来",
    "url": "./movie-505.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "国产热映",
    "rating": 8.7,
    "description": "叛逆女儿回到老家,发现已故父亲留下的最后一道菜配方藏在她的童年记忆里。",
    "tags": [
      "亲情治愈",
      "美食传承",
      "代际和解"
    ]
  },
  {
    "title": "学苑春浓",
    "url": "./movie-506.html",
    "cover": "./56.jpg",
    "year": "1993",
    "region": "香港",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "国产热映",
    "rating": 9.5,
    "description": "五十年代的香港师范女校,一名新来的年轻男教师与女学生之间隔着一道不可跨越的线。",
    "tags": [
      "校园",
      "师生",
      "纯爱"
    ]
  },
  {
    "title": "神采星球",
    "url": "./movie-507.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻,冒险,悬疑",
    "category": "国产热映",
    "rating": 8.5,
    "description": "一批殖民者抵达看似天堂的“神采星球”,却发现这里的原住民没有肉体,他们能“附身”任何来访者,并让你沉迷于最完美的梦中。",
    "tags": [
      "外星殖民",
      "意识上传",
      "乌托邦",
      "赛博朋克",
      "视效大片"
    ]
  },
  {
    "title": "父亲的草原母亲的河",
    "url": "./movie-508.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭剧情",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "在城市长大的蒙古族女孩,背起父亲的骨灰,走完他生前未走完的转场路。",
    "tags": [
      "内蒙",
      "迁徙",
      "乡愁",
      "亲情"
    ]
  },
  {
    "title": "两头滚",
    "url": "./movie-509.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧,运动",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "破产的货运公司老板被债主逼着组建拔河队还债,却意外发现队里两个死对头是天生神力。",
    "tags": [
      "拔河",
      "底层逆袭",
      "热血",
      "台味幽默"
    ]
  },
  {
    "title": "我不是差等生",
    "url": "./movie-510.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/教育/青春",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "被全校定义为“差等生”的少年,用一年时间证明分数无法定义一个人的全部。",
    "tags": [
      "学渣逆袭",
      "教育体制",
      "理解与尊重"
    ]
  },
  {
    "title": "秀逗魔导士",
    "url": "./movie-511.html",
    "cover": "./61.jpg",
    "year": "1995",
    "region": "日本",
    "type": "TV动画",
    "genre": "喜剧/奇幻/冒险",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "天才美少女魔导士因为贪吃烧毁了某国王子的城堡,被迫踏上逃亡和还债之旅。",
    "tags": [
      "魔法",
      "搞笑",
      "龙破斩",
      "冒险",
      "莉娜因巴斯"
    ]
  },
  {
    "title": "美丽王国",
    "url": "./movie-512.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻,悬疑,剧情",
    "category": "剧情故事",
    "rating": 8.9,
    "description": "在能定制一切完美的虚拟世界“美丽王国”里,一群NPC觉醒了自我意识,她们决心毁掉自己赖以生存的“天堂”。",
    "tags": [
      "虚拟现实",
      "乌托邦",
      "阴谋",
      "觉醒",
      "高概念"
    ]
  },
  {
    "title": "金手指",
    "url": "./movie-513.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,传记",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "落魄会计利用上市规则漏洞,只手空手套百亿,惊动国际刑警。",
    "tags": [
      "金融犯罪",
      "洗钱",
      "世纪骗局"
    ]
  },
  {
    "title": "流氓经纪",
    "url": "./movie-514.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪喜剧",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "专做街头混混生意的保险经纪,为了业绩主动帮客户策划意外,却次次阴差阳错成了破案关键。",
    "tags": [
      "经纪人",
      "黑帮",
      "荒诞",
      "反套路"
    ]
  },
  {
    "title": "柏拉图关系第二季",
    "url": "./movie-515.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/爱情/生活",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "一对离婚后的昔日夫妻因为经济窘迫被迫合租,并约定发展“柏拉图式友情”,结果两人分别成了对方新恋情的顶级僚机兼搅屎棍。",
    "tags": [
      "都市男女",
      "纯友谊",
      "离婚",
      "合租",
      "嘴炮"
    ]
  },
  {
    "title": "我家无难事国语",
    "url": "./movie-516.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "香港/中国大陆",
    "type": "电视剧",
    "genre": "喜剧/家庭",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "一栋旧楼里的五户人家,天天为鸡毛蒜皮的事吵架,关键时刻却比亲人还亲。",
    "tags": [
      "国语配音",
      "邻里",
      "鸡毛蒜皮"
    ]
  },
  {
    "title": "制霸擂台梦第一季",
    "url": "./movie-517.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "体育,动作,剧情",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "一个被裁员的中年大叔为还债加入女子职业摔角联盟当杂工,却被迫穿上女装上台比赛。",
    "tags": [
      "摔角",
      "热血",
      "女性",
      "梦想"
    ]
  },
  {
    "title": "被迫情死的日本之夏",
    "url": "./movie-518.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/爱情/战争",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "1945年夏,冲绳战壕里,一名日本士兵与一名当地女教师被迫扮演“战地夫妻”,却在末日来临前真的爱上了对方。",
    "tags": [
      "二战反思",
      "禁忌之恋",
      "废墟美学"
    ]
  },
  {
    "title": "封神英雄榜",
    "url": "./movie-519.html",
    "cover": "./69.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电视剧",
    "genre": "古装神话剧",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "姜子牙封神之后,新封的神出现了叛徒,一场更大的三界战争即将重演。",
    "tags": [
      "封神",
      "群像",
      "权谋"
    ]
  },
  {
    "title": "富裕的世界",
    "url": "./movie-520.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情,悬疑",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "顶尖富豪家族全员恶人,谁才是那个偷走“人性”的贼?",
    "tags": [
      "阶级对立",
      "豪宅风云",
      "家族秘密"
    ]
  },
  {
    "title": "被遗忘的人生",
    "url": "./movie-521.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情,女性,文艺",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "姐姐被父亲谎称“车祸去世”,妹妹却用一生在世界的每个角落寻找一个不存在的鬼魂。",
    "tags": [
      "姐妹情",
      "父权压制",
      "谎言与真相",
      "时间跨度"
    ]
  },
  {
    "title": "险恶环境",
    "url": "./movie-522.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "生存灾难",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "一场地震释放了地下毒气,一对母女被困在超市的通风管道里,她们唯一的水源是过期的椰汁和彼此的眼泪。",
    "tags": [
      "荒野求生",
      "母女",
      "毒气",
      "密闭空间",
      "意识流"
    ]
  },
  {
    "title": "全职高手之巅峰荣耀",
    "url": "./movie-523.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,动作,奇幻",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "落魄电竞天才重组草台班子,用一本失传的操作手册冲击世界冠军。",
    "tags": [
      "电竞",
      "热血",
      "团队",
      "复仇",
      "逆袭"
    ]
  },
  {
    "title": "大神偷卡门第一季",
    "url": "./movie-524.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "genre": "动作、冒险、悬疑",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "国际顶尖大盗卡门,每集盗取一件绝世珍宝,实则是在追查导致父母失踪的邪恶组织线索。",
    "tags": [
      "女性侠盗",
      "全球冒险",
      "亦正亦邪",
      "烧脑解谜"
    ]
  },
  {
    "title": "换子疑云",
    "url": "./movie-525.html",
    "cover": "./75.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,惊悚,剧情",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "一个贫民窟母亲坚信,住在豪宅里的那个养尊处优的男孩,是被换走的亲生儿子。",
    "tags": [
      "身份错位",
      "母性",
      "阶层",
      "心理博弈"
    ]
  },
  {
    "title": "第12届中国电影华表奖",
    "url": "./movie-526.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺/特别节目",
    "genre": "颁奖礼,纪实,行业",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "一部关于“颁奖礼”的伪纪录片,记录了一届不存在的华表奖从筹备到崩塌的全过程。",
    "tags": [
      "颁奖典礼",
      "幕后",
      "行业生态",
      "红毯",
      "内幕"
    ]
  },
  {
    "title": "风流家族",
    "url": "./movie-527.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,爱情,家庭",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "为了争夺巨额遗产,父亲伪造遗嘱,却意外揭开了全家人错综复杂的“情人网”。",
    "tags": [
      "荒诞",
      "多角恋",
      "爆笑",
      "伦理"
    ]
  },
  {
    "title": "西部骑士",
    "url": "./movie-528.html",
    "cover": "./78.jpg",
    "year": "1965",
    "region": "美国",
    "type": "电视剧",
    "genre": "西部/冒险",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "美国内战后期,一支由不同肤色、不同立场的人组成的骑兵巡逻队,在西部荒原上维护脆弱的和平。",
    "tags": [
      "经典",
      "牛仔",
      "侠义",
      "骑兵",
      "美剧"
    ]
  },
  {
    "title": "国家机密",
    "url": "./movie-529.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "谍战,悬疑",
    "category": "动作冒险",
    "rating": 9.8,
    "description": "1943年,一名破译天才被三方势力同时确认为卧底,他必须在夹缝中伪造自己的真实身份。",
    "tags": [
      "双面间谍",
      "密码学",
      "民国",
      "智商战"
    ]
  },
  {
    "title": "达拉斯买家俱乐部",
    "url": "./movie-530.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,传记",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "1980年代,一名恐同电工确诊艾滋病后,为活命自己走私未经批准药物,并建立了庞大的地下药品俱乐部。",
    "tags": [
      "艾滋病",
      "走私药物",
      "抗争",
      "真实事件改编",
      "生存"
    ]
  },
  {
    "title": "异形怪胎",
    "url": "./movie-531.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "科幻,恐怖",
    "category": "欧美电影",
    "rating": 9.1,
    "description": "一个失败的基因实验体“怪胎”,却拥有了人类最纯粹的母爱,为保护养女与创造者对抗。",
    "tags": [
      "变异",
      "实验室",
      "逃亡",
      "母性"
    ]
  },
  {
    "title": "邻家女孩",
    "url": "./movie-532.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/悬疑/青春",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "家里来了一位完美的交换生,温柔乖巧,但自从她住进来后,邻居们开始一个接一个地意外身亡。",
    "tags": [
      "病娇",
      "跟踪",
      "反转",
      "寄宿家庭",
      "心理战"
    ]
  },
  {
    "title": "翻江战鳄鱼",
    "url": "./movie-533.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动作",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "一场百年洪水把实验室的基因变异鳄鱼冲进城市下水道,退役游泳运动员必须逆行救人。",
    "tags": [
      "B级片",
      "巨兽",
      "环保恐怖",
      "水灾逃生",
      "硬汉"
    ]
  },
  {
    "title": "爱的殉道",
    "url": "./movie-534.html",
    "cover": "./84.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,历史",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "中世纪修道院里,年轻修女与女画师相爱,被宗教法庭判处“火刑不焚体”,活活烧死后尸体却不燃。",
    "tags": [
      "中世纪",
      "修女",
      "禁忌恋",
      "宗教审判",
      "悲剧"
    ]
  },
  {
    "title": "青春烈火",
    "url": "./movie-535.html",
    "cover": "./85.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春/运动",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "一群被嘲笑为“广场舞队”的高中生街舞团,在省赛前三个月,用真正的热爱燃起青春烈火。",
    "tags": [
      "街舞 梦想 逆袭 团队 热血"
    ]
  },
  {
    "title": "马洛",
    "url": "./movie-536.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "洛城私家侦探马洛受雇寻找一个失踪的好莱坞甜心,却卷入了一场电影般迷离的连环谋杀。",
    "tags": [
      "黑色电影",
      "私家侦探",
      "硬汉派",
      "连环案"
    ]
  },
  {
    "title": "寻爱的女人",
    "url": "./movie-537.html",
    "cover": "./87.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/都市/女性",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "三个不同年龄的女人拼车横跨半个中国,各自去寻找“传说中的那个真爱”。",
    "tags": [
      "三个女人",
      "公路",
      "相亲",
      "成长"
    ]
  },
  {
    "title": "狼虎相残",
    "url": "./movie-538.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "帮派二把手为救被绑架的女儿,不得不亲手将自己一手带大的义弟逼入绝境,而幕后黑手竟是早已“死去”的大哥。",
    "tags": [
      "黑帮内斗",
      "兄弟反目",
      "困兽之斗",
      "硬核打斗"
    ]
  },
  {
    "title": "暗恋橘生淮南",
    "url": "./movie-539.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春爱情",
    "category": "国产热映",
    "rating": 8.6,
    "description": "她偷偷喜欢了他十二年,却不知他从第一天起就在等她开口。",
    "tags": [
      "暗恋",
      "双向奔赴",
      "校园",
      "长跑",
      "细腻"
    ]
  },
  {
    "title": "魔鬼诱惑",
    "url": "./movie-540.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,心理,宗教",
    "category": "动作冒险",
    "rating": 8.5,
    "description": "女心理学家为写书加入一个神秘社团,却发现自己正一步步被塑造成社团预言中的“魔鬼新娘”。",
    "tags": [
      "邪教",
      "催眠洗脑",
      "心理操控"
    ]
  },
  {
    "title": "红男绿女青春乐",
    "url": "./movie-541.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞,喜剧,爱情",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "一所被“红色帮”和“绿色帮”分治的高中,为了毕业晚会的表演权,展开了一场疯狂的歌舞对决。",
    "tags": [
      "高校音乐剧",
      "颜色帮派",
      "毕业晚会",
      "红绿对决",
      "翻拍经典"
    ]
  },
  {
    "title": "典籍里的中国第二季",
    "url": "./movie-542.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺/纪实",
    "genre": "历史,文化,访谈",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "撒贝宁穿越时空对话徐霞客,亲历三十四年壮游山河的传奇人生。",
    "tags": [
      "典籍",
      "文化",
      "历史人物",
      "沉浸式",
      "教育"
    ]
  },
  {
    "title": "冉冉之星",
    "url": "./movie-543.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "励志/音乐",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "孟买贫民窟的天才歌手,唯一的梦想是让五星级酒店里的富人“听见”他。",
    "tags": [
      "孟买",
      "街头歌手",
      "梦想",
      "阶级"
    ]
  },
  {
    "title": "听说很好吃第四季",
    "url": "./movie-544.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,美食",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "本季节目将八位“味觉失踪”的都市人送到原始森林,他们必须仅靠“听”和“闻”来复刻一道记忆中的家常菜。",
    "tags": [
      "创意料理",
      "明星",
      "竞技",
      "治愈"
    ]
  },
  {
    "title": "越南恐怖故事",
    "url": "./movie-545.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "越南",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "动画奇幻",
    "rating": 8.9,
    "description": "三个源自越南真实都市传说的故事:不夜理发店的镜中人、水上市场的招魂歌、以及废旧公寓里的“微笑屋”。",
    "tags": [
      "都市传说",
      "三段式",
      "因果报应",
      "民俗"
    ]
  },
  {
    "title": "威士忌、探戈、狐步舞",
    "url": "./movie-546.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争,喜剧",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "失恋女记者跑到阿富汗战场逃避现实,却发现这里的荒唐程度,远超前男友的谎言。",
    "tags": [
      "女记者",
      "阿富汗",
      "战地",
      "自我发现"
    ]
  },
  {
    "title": "幸福是一尾皱颈蜥蜴",
    "url": "./movie-547.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情,奇幻",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "离婚男人在荒漠酒吧算命,被告知“抓到大皱颈蜥蜴就能找回幸福”,随后蜥蜴开口说话了。",
    "tags": [
      "魔幻现实主义",
      "公路电影",
      "中年危机",
      "澳洲荒野"
    ]
  },
  {
    "title": "天劫1998",
    "url": "./movie-548.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "灾难,剧情",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "1998年长江大堤决口前夜,一个镇干部挨家挨户通知撤离,只有一个人不信——他的父亲。",
    "tags": [
      "洪水",
      "真实事件改编",
      "牺牲"
    ]
  },
  {
    "title": "卡通一箩筐第二季",
    "url": "./movie-549.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧,日常,搞笑",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "一箩筐稀奇古怪的卡通角色继续在小镇上制造着毫无逻辑但笑到胃痛的日常混乱。",
    "tags": [
      "无厘头",
      "单元剧",
      "动物主角",
      "荒诞",
      "快节奏"
    ]
  },
  {
    "title": "少年维特",
    "url": "./movie-550.html",
    "cover": "./100.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "国产热映",
    "rating": 9.3,
    "description": "现代柏林少年维特通过社交软件爱上了已订婚的绿蒂,他最后的未发送消息被全世界看到了。",
    "tags": [
      "名著新编",
      "现代改编",
      "抑郁",
      "书信体"
    ]
  },
  {
    "title": "挪威的森林",
    "url": "./movie-551.html",
    "cover": "./101.jpg",
    "year": "2010",
    "region": "日本",
    "type": "电影",
    "genre": "爱情,剧情,文学改编",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "渡边在直子的忧郁与绿子的热烈之间摇摆,而直子始终走不出男友自杀的那个深井。",
    "tags": [
      "村上春树",
      "三角虐恋",
      "青春死亡"
    ]
  },
  {
    "title": "双城故事1991",
    "url": "./movie-552.html",
    "cover": "./102.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "国产热映",
    "rating": 9.5,
    "description": "1991年,上海弄堂的送报员与香港中环的女文员通过共用一只信鸽交换日记,鸽子的航线却越飞越偏。",
    "tags": [
      "时代变迁",
      "单车送报",
      "沪港双城"
    ]
  },
  {
    "title": "冬天不冷",
    "url": "./movie-553.html",
    "cover": "./103.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,家庭,生活",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "东北的冬天很冷,但一个被三个子女像皮球一样踢来踢去的独居老人,决定在养老院里过一个“不冷”的春节。",
    "tags": [
      "养老",
      "代际冲突",
      "温情"
    ]
  },
  {
    "title": "勇敢的翅膀",
    "url": "./movie-554.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅/励志/青春",
    "category": "动画奇幻",
    "rating": 8.1,
    "description": "西南某地,首批歼击机女飞行员用一次次空中停车、迫降和空中加油,撕破了对女性飞行员“不够勇敢”的偏见。",
    "tags": [
      "空军",
      "女飞行员",
      "高原训练",
      "性别偏见",
      "极限飞行"
    ]
  },
  {
    "title": "爱的3.14159",
    "url": "./movie-555.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情,爱情",
    "category": "国产热映",
    "rating": 8.0,
    "description": "两个患有“数学焦虑症”的青年男女,试图用圆周率π的无限不循环特性,来验证爱情的随机性。",
    "tags": [
      "数学",
      "宿命",
      "高智商",
      "无限不循环"
    ]
  },
  {
    "title": "娜希德",
    "url": "./movie-556.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情,女性,社会",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "为了争夺女儿的抚养权,一位伊朗女出租车司机在德黑兰的街头载着形形色色的乘客,从她们的讲述中拼凑出自己的出路。",
    "tags": [
      "头巾",
      "出租车",
      "女性困境",
      "母女"
    ]
  },
  {
    "title": "德州电锯大屠杀",
    "url": "./movie-557.html",
    "cover": "./107.jpg",
    "year": "1974",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "五名年轻人在德州乡间遭遇食人魔一家,手持电锯的“皮脸”成了他们永恒的噩梦。",
    "tags": [
      "屠杀",
      "公路恐怖",
      "真实事件改编"
    ]
  },
  {
    "title": "四二八粤语",
    "url": "./movie-558.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "综艺纪实",
    "rating": 9.1,
    "description": "四二八,在粤语中谐音“死易发”,一个用粤语谐音制造连环杀案的凶手,挑战整个警队。",
    "tags": [
      "粤语",
      "神秘数字",
      "警匪",
      "连环案",
      "心理"
    ]
  },
  {
    "title": "无名之日",
    "url": "./movie-559.html",
    "cover": "./109.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑/剧情",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "失忆男子在小镇醒来,所有人却告诉他,今天是他死亡一周年的忌日。",
    "tags": [
      "失忆",
      "身份错位",
      "小镇谜团",
      "日记本"
    ]
  },
  {
    "title": "归宅部活动记录",
    "url": "./movie-560.html",
    "cover": "./110.jpg",
    "year": "2027",
    "region": "日本",
    "type": "动画",
    "genre": "日常,喜剧",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "一个目标是“最轻松地度过高中生活”的社团,却因为成员们一个比一个不正常,每天都在比正式社团还累。",
    "tags": [
      "高中",
      "社团",
      "解散危机",
      "吐槽",
      "电波系"
    ]
  },
  {
    "title": "变态度假村",
    "url": "./movie-561.html",
    "cover": "./111.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,惊悚,剧情",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "六位互不相识的游客受邀入住顶级海岛度假村,却发现每个人都是变态连环杀手的“理想猎物”。",
    "tags": [
      "度假村",
      "人性",
      "密室",
      "暴雨",
      "角色扮演"
    ]
  },
  {
    "title": "幽灵船",
    "url": "./movie-562.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑/海洋",
    "category": "欧美电影",
    "rating": 8.0,
    "description": "救援队登上失踪三十年的邮轮,发现所有乘客都变成了水晶雕像,且还在“活着”。",
    "tags": [
      "都市传说",
      "空间循环",
      "深海恐惧",
      "邪教献祭",
      "反转结局"
    ]
  },
  {
    "title": "达拉斯之王",
    "url": "./movie-563.html",
    "cover": "./113.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,剧情",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "一个德州牛仔竞技冠军摔断腿后,被迫接管家族贩毒生意,并发明了用公牛运毒的新路线。",
    "tags": [
      "贩毒集团",
      "牛仔",
      "德州",
      "父子",
      "暴力美学"
    ]
  },
  {
    "title": "妲己不是坏狐狸 漫动画",
    "url": "./movie-564.html",
    "cover": "./114.jpg",
    "year": "2020",
    "region": "中国",
    "type": "动画",
    "genre": "喜剧/古风/恋爱",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "当祸国殃民的苏妲己其实是只被迫营业的社恐小狐狸,商朝灭亡只因她想提前下班。",
    "tags": [
      "国漫",
      "泡面番",
      "颠覆",
      "萌系",
      "搞笑"
    ]
  },
  {
    "title": "王子与乞丐",
    "url": "./movie-565.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "英国/美国",
    "type": "电影",
    "genre": "剧情/冒险",
    "category": "国产热映",
    "rating": 9.0,
    "description": "一个亿万富豪之子和一个流浪少年被心理医生安排了“身份互换实验”,结果两人都不愿意换回来。",
    "tags": [
      "互换身份",
      "讽刺",
      "黑色幽默",
      "阶级"
    ]
  },
  {
    "title": "一克拉的室友",
    "url": "./movie-566.html",
    "cover": "./116.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情,家庭,友情",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "五个身份迥异的陌生人挤在一间转角的破公寓里,他们不知道,房东藏在墙壁里的一克拉钻石将改变所有人的命运。",
    "tags": [
      "合租生活",
      "钻石寓意",
      "市井温情",
      "北漂(北漂概念引申)"
    ]
  },
  {
    "title": "遁天神盗",
    "url": "./movie-567.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "五位顶尖盗贼接到偷取“朝鲜王室仪轨”的订单,却发现雇主是炸毁青瓦台的恐怖分子。",
    "tags": [
      "盗贼",
      "高科技",
      "反转",
      "团队合作"
    ]
  },
  {
    "title": "缘份",
    "url": "./movie-568.html",
    "cover": "./118.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/喜剧",
    "category": "综艺纪实",
    "rating": 8.5,
    "description": "一对在跨年派对上互生好感的男女,因弄错电话号码而失联,两人在偌大的香港展开了一场充满巧合的寻找。",
    "tags": [
      "都市",
      "错过",
      "兜兜转转",
      "浪漫"
    ]
  },
  {
    "title": "国定杀戮日:无法无天",
    "url": "./movie-569.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/惊悚",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "杀戮日被废除十年后,地下反抗组织发现,和平只是新政府为了集中消灭“无用阶级”的更大骗局。",
    "tags": [
      "反乌托邦",
      "暴力",
      "续集",
      "政治讽刺"
    ]
  },
  {
    "title": "三坪房间的侵略者",
    "url": "./movie-570.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻搞笑后宫",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "东京一间三坪公寓被幽灵、地底人、魔法少女和外星人同时看中,倒霉男主被迫当了房东。",
    "tags": [
      "幽灵",
      "地底人",
      "魔法少女",
      "外星人",
      "合租战争"
    ]
  },
  {
    "title": "小镇疑云",
    "url": "./movie-571.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "剧集",
    "genre": "悬疑,剧情",
    "category": "国产热映",
    "rating": 9.1,
    "description": "澳大利亚内陆小镇,一个雨夜同时失踪了三个人,全镇人人都有嫌疑。",
    "tags": [
      "内陆",
      "失踪案",
      "社区秘密",
      "多视角叙事"
    ]
  },
  {
    "title": "龙生九子2022",
    "url": "./movie-572.html",
    "cover": "./122.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻,都市",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "龙王的九个儿子在现代都市转世重生,却发现彼此的记忆被封印,且有人在逐一猎杀他们。",
    "tags": [
      "神话改编",
      "兄弟反目",
      "异能觉醒",
      "九子九性"
    ]
  },
  {
    "title": "法兰西饭店",
    "url": "./movie-573.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情/历史",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "1942年的巴黎顶级饭店里,每位客人都在用刀叉进行一场看不见血的战争。",
    "tags": [
      "二战",
      "间谍",
      "美食"
    ]
  },
  {
    "title": "通灵:一个新的开始",
    "url": "./movie-574.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻,悬疑",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "全球1%人口突然获得通灵能力,一名FBI探员怀疑这并非天赐,而是一场人为实验。",
    "tags": [
      "超能力",
      "重生",
      "阴谋论"
    ]
  },
  {
    "title": "谎言与偷窃",
    "url": "./movie-575.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪剧情",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "一对菜鸟骗子偷走黑帮金库,却发现赃物属于更危险的政客。",
    "tags": [
      "诈骗",
      "搭档",
      "救赎",
      "黑色幽默"
    ]
  },
  {
    "title": "灵幻至尊",
    "url": "./movie-576.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/奇幻",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "茅山末代传人赖布衣带着吊儿郎当的徒弟,误闯一座闹鬼豪华酒店,却意外卷入了一场商业诅咒纷争。",
    "tags": [
      "道士",
      "僵尸",
      "茅山术",
      "师徒"
    ]
  },
  {
    "title": "春江英雄之秀才遇到兵",
    "url": "./movie-577.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,喜剧,动作",
    "category": "综艺纪实",
    "rating": 9.3,
    "description": "一个手无缚鸡之力的秀才,一个目不识丁的兵,在乱世中联手成了传说中的“春江双侠”。",
    "tags": [
      "文武双全",
      "抗日奇侠",
      "民间传说"
    ]
  },
  {
    "title": "秘密的孩子",
    "url": "./movie-578.html",
    "cover": "./128.jpg",
    "year": "2023",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/悬疑/家庭",
    "category": "国产热映",
    "rating": 8.9,
    "description": "五十岁的成功女商人收到一封信,说她在十五岁那年抛弃的婴儿,如今正在寻找她。",
    "tags": [
      "弃婴",
      "寻亲",
      "阶层",
      "秘密",
      "女性"
    ]
  },
  {
    "title": "纹身杀手",
    "url": "./movie-579.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "一个失忆的职业杀手发现,他身上的每一处纹身都藏着一名尚未完成的暗杀目标信息。",
    "tags": [
      "杀手",
      "纹身",
      "复仇",
      "江湖",
      "暴力美学"
    ]
  },
  {
    "title": "至死不渝2021",
    "url": "./movie-580.html",
    "cover": "./130.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚,爱情",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "新婚夜被宣告只剩一个月生命,丈夫却在她药瓶里动了手脚。",
    "tags": [
      "绝症",
      "复仇",
      "婚礼",
      "反转"
    ]
  },
  {
    "title": "忽然夺网",
    "url": "./movie-581.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻悬疑",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "全村依赖的免费网络突然被锁,一个不会用智能手机的老人发现,想上网必须“上传”自己最珍贵的记忆。",
    "tags": [
      "高概念",
      "社会寓言",
      "极简叙事"
    ]
  },
  {
    "title": "鲁姬哈蒂",
    "url": "./movie-582.html",
    "cover": "./132.jpg",
    "year": "2018",
    "region": "马来西亚",
    "type": "电影",
    "genre": "恐怖/民俗/惊悚",
    "category": "欧美电影",
    "rating": 9.2,
    "description": "村中少女接连失踪,老人都说是鲁姬哈蒂回来了——那个被活埋的舞女在索命。",
    "tags": [
      "马来传说",
      "复仇女鬼",
      "村庄诅咒",
      "血腥仪式"
    ]
  },
  {
    "title": "怨灵2",
    "url": "./movie-583.html",
    "cover": "./133.jpg",
    "year": "2017",
    "region": "中国大陆,泰国",
    "type": "电影",
    "genre": "惊悚,恐怖",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "蜜月旅行误入荒废已久的怨灵酒店,新婚夫妇发现镜中倒映的不是自己,而是前世的业障。",
    "tags": [
      "东南亚民俗",
      "邪灵",
      "诅咒"
    ]
  },
  {
    "title": "风流女谍",
    "url": "./movie-584.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "谍战/爱情/年代",
    "category": "国产热映",
    "rating": 9.2,
    "description": "民国乱世,上海滩第一名伶周旋于日军高官与军统之间,用身体和唱腔传递情报。",
    "tags": [
      "女特工",
      "民国",
      "美人心计",
      "双面间谍"
    ]
  },
  {
    "title": "校园时空惊魂记",
    "url": "./movie-585.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,恐怖,青春",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "高中舞会之夜,一群学生发现每隔两小时就会被一名面具杀手杀死,而每次复活后时间都会倒退回舞会开始前。",
    "tags": [
      "时间循环",
      "校园杀手",
      "烧脑"
    ]
  },
  {
    "title": "女孩舞步",
    "url": "./movie-586.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/歌舞",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "五名因肥胖、口吃、贫寒等原因被校啦啦队排挤的女生,组建了一支“残次品”舞团,要用自创的“不完美舞蹈”赢得全国大赛。",
    "tags": [
      "校园",
      "霸凌",
      "逆袭",
      "K-pop"
    ]
  },
  {
    "title": "鬼玩人第三季",
    "url": "./movie-587.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "恐怖,喜剧,奇幻",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "杀人狂魔阿什被传送到末日未来,发现全世界的人类都是他的克隆体。",
    "tags": [
      "血腥",
      "恶搞",
      "尸变",
      "末世"
    ]
  },
  {
    "title": "克罗切特和水贼",
    "url": "./movie-588.html",
    "cover": "./138.jpg",
    "year": "1955",
    "region": "美国",
    "type": "电影",
    "genre": "西部/冒险/动作",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "传奇猎人克罗切特在密西西比河上驾驶蒸汽船,遭遇伪装成渔民的水贼团伙劫持人质。",
    "tags": [
      "荒野猎人",
      "河流",
      "独木舟",
      "蒸汽船",
      "正义枪战"
    ]
  },
  {
    "title": "赤焰战场2",
    "url": "./movie-589.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作、犯罪、惊悚",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "一家养老院里,三位退休的顶级杀手发现他们的降压药其实是引爆核弹的触发器。",
    "tags": [
      "退休杀手",
      "核弹危机",
      "老年特工队",
      "暴力美学"
    ]
  },
  {
    "title": "蝴蝶振翅之后",
    "url": "./movie-590.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,科幻,剧情",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "一个普通人回到过去阻止了母亲的车祸,却发现自己引发了一连串越来越恐怖的连锁反应。",
    "tags": [
      "蝴蝶效应",
      "时空穿越",
      "社会派科幻",
      "多线叙事",
      "神编剧"
    ]
  },
  {
    "title": "喜剧 百点满点",
    "url": "./movie-591.html",
    "cover": "./141.jpg",
    "year": "2009",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "强迫症漫才师给每段表演打满分,却拒绝上台,直到他遇到只能得“零分”的流浪搭档。",
    "tags": [
      "漫才",
      "评分",
      "强迫症",
      "师徒"
    ]
  },
  {
    "title": "东京暮色",
    "url": "./movie-592.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "文艺剧情",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "离家二十年的父亲突然回到东京,却发现老宅里住着一个自称是他“女儿”的AI人形机器人。",
    "tags": [
      "小津安二郎式",
      "家庭和解",
      "代际沟通",
      "冬季"
    ]
  },
  {
    "title": "迷乱",
    "url": "./movie-593.html",
    "cover": "./143.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "心理/悬疑",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "她在公寓醒来发现身边有一具尸体,却完全记不起前一晚发生了什么。",
    "tags": [
      "失忆",
      "公寓",
      "邻居",
      "幻觉",
      "多重人格"
    ]
  },
  {
    "title": "都市巡警",
    "url": "./movie-594.html",
    "cover": "./144.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪/单元剧/动作",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "一对性格迥异的巡警搭档,在油尖旺街头用最笨拙的方式守护着普通市民的日常。",
    "tags": [
      "港剧经典",
      "巡逻小队",
      "市井故事",
      "双男主"
    ]
  },
  {
    "title": "国风",
    "url": "./movie-595.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "文化真人秀",
    "category": "欧美电影",
    "rating": 8.0,
    "description": "十位明星学习京剧、书法、刺绣等非遗技艺,每期淘汰一人,最后为联合国献演。",
    "tags": [
      "国潮",
      "非遗",
      "竞赛",
      "明星体验",
      "传统"
    ]
  },
  {
    "title": "高达破坏者:对战记录",
    "url": "./movie-596.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻/动作/机战",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "天才模型师与失忆少女组成搭档,挑战全球最强高达对战联赛,却发现了比赛背后隐藏的阴谋。",
    "tags": [
      "高达",
      "模型对战",
      "电竞",
      "热血",
      "机甲竞技"
    ]
  },
  {
    "title": "少年师爷之智慧丝路",
    "url": "./movie-597.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "冒险,历史,悬疑",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "天才少年师爷踏上古老丝绸之路,用智慧破解连环谜案,却发现每颗宝石背后都藏着一个惊天秘密。",
    "tags": [
      "丝绸之路",
      "少年侦探",
      "国风",
      "解谜",
      "成长"
    ]
  },
  {
    "title": "初步举证",
    "url": "./movie-598.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、律政、剧情",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "金牌女律师为性侵案被告辩护大获全胜,三个月后,她自己成了另一桩性侵案的受害者。",
    "tags": [
      "法庭",
      "反转",
      "真相",
      "正义",
      "智商博弈"
    ]
  },
  {
    "title": "一步一生",
    "url": "./movie-599.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "动画奇幻",
    "rating": 8.9,
    "description": "一个被父母抛弃的问题少年,被一位固执的粤剧老师傅收留,在戏班子里从打架斗殴的“烂仔”成长为一代名伶。",
    "tags": [
      "励志",
      "国粹",
      "传承",
      "粤剧"
    ]
  },
  {
    "title": "为朱莉报仇",
    "url": "./movie-600.html",
    "cover": "./150.jpg",
    "year": "2026",
    "region": "加拿大",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "女儿被奸杀后,母亲花了12年学会DNA剪辑,只为亲手改造法律。",
    "tags": [
      "母亲复仇",
      "法律边缘",
      "慢节奏悬疑"
    ]
  },
  {
    "title": "性感女勇士",
    "url": "./movie-601.html",
    "cover": "./1.jpg",
    "year": "2028",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/惊悚",
    "category": "动作冒险",
    "rating": 8.5,
    "description": "被贩卖到海岛的失聪少女,被逼成为地下角斗士,三年后她化身“性感”杀戮机器逃出生天。",
    "tags": [
      "女战士",
      "复仇",
      "格斗",
      "爽片"
    ]
  },
  {
    "title": "完全燃烧",
    "url": "./movie-602.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "一个被烧掉全身皮肤的纵火犯,出狱后用汽油弹寻仇,却发现当年的仇人已经痴呆,不认识他了。",
    "tags": [
      "纵火犯",
      "复仇",
      "极道"
    ]
  },
  {
    "title": "17号音乐仓库第三季",
    "url": "./movie-603.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐/真人秀/治愈",
    "category": "国产热映",
    "rating": 9.6,
    "description": "三位过气歌手和两位素人音乐人,共同经营一家废弃仓库,每期邀请一位路人共同完成一首原创歌曲。",
    "tags": [
      "仓库改造",
      "独立音乐人",
      "街头演出",
      "素人合作"
    ]
  },
  {
    "title": "昨天、今天和明天",
    "url": "./movie-604.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情、家庭",
    "category": "国产热映",
    "rating": 9.1,
    "description": "一位阿尔茨海默症老人,在混乱的记忆中串联起家族三代人的秘密与和解。",
    "tags": [
      "非线性叙事",
      "亲情",
      "老年痴呆",
      "温情"
    ]
  },
  {
    "title": "欲望迷踪",
    "url": "./movie-605.html",
    "cover": "./5.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "情色,剧情,悬疑",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "一位心理医生爱上了自己的病人,但他发现,这位性感女病人描述的所有性幻想对象,都和自己一模一样。",
    "tags": [
      "情欲惊悚",
      "身份错位",
      "精神分析"
    ]
  },
  {
    "title": "特战行动",
    "url": "./movie-606.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作,战争",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "一支解放军特种小队在边境执行抓捕任务时,发现要抓捕的毒枭身上携带着足以瘫痪整个城市电网的“电磁脉冲炸弹”。",
    "tags": [
      "反恐",
      "小队",
      "高科技",
      "实战",
      "兄弟"
    ]
  },
  {
    "title": "爱在柏林漂流时",
    "url": "./movie-607.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "德国/中国",
    "type": "电影",
    "genre": "爱情,文艺",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "前往柏林电影节卖片的中国制片人,在迷路时被一名流浪汉捡到,两人开始了三天的荒诞漫游。",
    "tags": [
      "异国恋",
      "柏林电影节",
      "流浪汉",
      "偶遇"
    ]
  },
  {
    "title": "金装律师:洛杉矶",
    "url": "./movie-608.html",
    "cover": "./8.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/律政",
    "category": "动画奇幻",
    "rating": 8.2,
    "description": "洛杉矶顶级娱乐法律师在接手职业生涯最大案件时,发现对手竟是当年开除自己的导师。",
    "tags": [
      "精英律师",
      "娱乐法",
      "师徒对决"
    ]
  },
  {
    "title": "厄夜惊魂",
    "url": "./movie-609.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "一场暴雨将几名驴友困在一座无人山村,夜里他们发现自己正被“轮流死亡”的诅咒精确收割。",
    "tags": [
      "民俗恐怖",
      "闭环恐惧",
      "山村怪谈"
    ]
  },
  {
    "title": "特警风暴",
    "url": "./movie-610.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "动作,犯罪,惊悚",
    "category": "国产热映",
    "rating": 9.5,
    "description": "巴黎反恐特警队“BRI”在24小时内接连遭受炸弹袭击,他们必须在黎明前揪出潜伏在内部的叛徒。",
    "tags": [
      "反恐",
      "特警队",
      "实战",
      "枪战",
      "兄弟情"
    ]
  },
  {
    "title": "夏小姐的先婚后爱2",
    "url": "./movie-611.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,喜剧,剧情",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "夏小姐离婚后与前夫的死对头闪婚,本想气死前夫,却发现自己爱上了“工具人”。",
    "tags": [
      "契约婚姻",
      "霸总",
      "闪婚",
      "职场",
      "先婚后爱"
    ]
  },
  {
    "title": "金搏虎",
    "url": "./movie-612.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装,动作,冒险",
    "category": "国产热映",
    "rating": 8.7,
    "description": "京城第一武官金搏虎因被诬陷叛国而家破人亡,十年后他戴着囚徒面具归来。",
    "tags": [
      "硬汉",
      "江湖",
      "打戏",
      "复仇",
      "朝堂"
    ]
  },
  {
    "title": "反斗星玩转绿林",
    "url": "./movie-613.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,冒险",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "三个废柴导游误入原始森林,遇上金发宝藏猎人和退休黑帮,开启一场全员内鬼的夺宝大战。",
    "tags": [
      "夺宝",
      "乌龙探险",
      "港式无厘头"
    ]
  },
  {
    "title": "牵牛的夏天",
    "url": "./movie-614.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电视剧集",
    "genre": "都市/家庭/治愈",
    "category": "亚洲精选",
    "rating": 8.2,
    "description": "被裁员的女程序员回村接手爷爷的花田,却发现唯一的“员工”是一头会挑种子的倔牛。",
    "tags": [
      "园艺",
      "返乡",
      "代际和解",
      "慢生活"
    ]
  },
  {
    "title": "小屁孩日记2",
    "url": "./movie-615.html",
    "cover": "./15.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/家庭",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "格雷格升入初中后发现,自己那套“搞定人气”的方法彻底失灵了。",
    "tags": [
      "校园",
      "成长",
      "手绘动画",
      "幽默"
    ]
  },
  {
    "title": "玻璃之花与坏掉的世界",
    "url": "./movie-616.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻,奇幻",
    "category": "港台佳片",
    "rating": 9.6,
    "description": "在记忆数据构成的世界里,两个清扫“bug”的少女捡到了一个会说人类语言的神秘玻璃花。",
    "tags": [
      "意识流",
      "唯美",
      "数据世界",
      "毁灭与新生",
      "治愈"
    ]
  },
  {
    "title": "六重奏",
    "url": "./movie-617.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑/音乐",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "一位患有分离性身份障碍的天才钢琴家,体内的六个人格要为争夺一首曲子的最终演奏权而“决斗”。",
    "tags": [
      "多重人格",
      "心理",
      "古典乐",
      "密室"
    ]
  },
  {
    "title": "拒绝采访",
    "url": "./movie-618.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "记者重返家乡调查二十年前的悬案,所有目击者都拒绝采访,但他们拒绝的原因各不相同。",
    "tags": [
      "记者",
      "真相",
      "沉默",
      "小镇"
    ]
  },
  {
    "title": "大桥梁",
    "url": "./movie-619.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,灾难",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "一座在建的超级大桥发生垮塌,总工程师发现设计图纸上的签名是自己的亡父。",
    "tags": [
      "基建",
      "救援",
      "父子",
      "社会现实"
    ]
  },
  {
    "title": "护士骚歌利",
    "url": "./movie-620.html",
    "cover": "./20.jpg",
    "year": "1973",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧/情色/历史",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "中世纪修道院里,红发护士“骚歌利”用草药救人,也用春药惹祸,直到瘟疫揭露了修女们的秘密。",
    "tags": [
      "修道院护士",
      "瘟疫时期",
      "禁忌之恋"
    ]
  },
  {
    "title": "裘诺与孔雀",
    "url": "./movie-621.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻,冒险",
    "category": "动画奇幻",
    "rating": 8.2,
    "description": "天生异色瞳的哑巴少年裘诺,能与一只高傲的孔雀通感,踏上寻找能治愈“石化病”的金色羽毛之旅。",
    "tags": [
      "异色瞳",
      "占卜",
      "中世纪"
    ]
  },
  {
    "title": "异乡人:上海的芥川龙之介",
    "url": "./movie-622.html",
    "cover": "./22.jpg",
    "year": "2021",
    "region": "日本/中国大陆",
    "type": "电影",
    "genre": "剧情/历史",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "1921年,日本文豪芥川龙之介以记者身份来到民国上海,却意外卷入了一场关于《西游记》被盗手稿的谍战。",
    "tags": [
      "文学",
      "1920年代",
      "上海",
      "间谍",
      "迷惘"
    ]
  },
  {
    "title": "勇者必胜",
    "url": "./movie-623.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "动作,犯罪,热血",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "一栋大楼,五名特警,数百暴徒,他们唯一的增援是彼此。",
    "tags": [
      "特警队",
      "反恐",
      "兄弟情",
      "枪战"
    ]
  },
  {
    "title": "一往无前",
    "url": "./movie-624.html",
    "cover": "./24.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,音乐,传记",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "一个蹲过监狱的流氓和一个被家庭束缚的才女,如何用音乐彼此救赎并开创了乡村音乐史上的传奇组合。",
    "tags": [
      "乡村音乐",
      "传奇",
      "戒毒",
      "爱情"
    ]
  },
  {
    "title": "性爱魔法",
    "url": "./movie-625.html",
    "cover": "./25.jpg",
    "year": "2027",
    "region": "西班牙",
    "type": "剧集",
    "genre": "奇幻/情色/喜剧",
    "category": "悬疑惊悚",
    "rating": 9.2,
    "description": "一个普通女孩发现,每次做爱后都会随机获得对方的一项魔法能力。",
    "tags": [
      "都市魔幻",
      "成人童话",
      "身体互换"
    ]
  },
  {
    "title": "行运一条龙国语",
    "url": "./movie-626.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "category": "最新推荐",
    "rating": 8.6,
    "description": "老字号茶餐厅收到最后通牒:三个月内做不出“龙行运”点心,就要关门。",
    "tags": [
      "港式茶餐厅",
      "街坊",
      "传承",
      "群像"
    ]
  },
  {
    "title": "猫咪后院之家",
    "url": "./movie-627.html",
    "cover": "./27.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "治愈,日常",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "一个拒绝社交的插画师,因为一只流浪猫,被迫打开了与整个老旧社区沟通的大门。",
    "tags": [
      "猫咪",
      "邻里关系",
      "社恐"
    ]
  },
  {
    "title": "孤独",
    "url": "./movie-628.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "八十岁老农在儿子进城后独自守村,一台错拨的电话竟引来了一个从天而降的“假孙子”。",
    "tags": [
      "留守老人",
      "空巢",
      "隔代亲",
      "乡村",
      "治愈"
    ]
  },
  {
    "title": "喵喵请听好",
    "url": "./movie-629.html",
    "cover": "./29.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧,爱情,奇幻",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "社恐女孩捡到一只会说话的猫,猫说:我能帮你听见男人的真心话。",
    "tags": [
      "猫咖",
      "读心术",
      "治愈",
      "轻喜"
    ]
  },
  {
    "title": "金装律师第二季",
    "url": "./movie-630.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "律政",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "天才骗子继续在顶尖律所如履薄冰,旧敌与新爱同时袭来。",
    "tags": [
      "双男主",
      "高智商",
      "西装",
      "快节奏"
    ]
  },
  {
    "title": "生存主义者",
    "url": "./movie-631.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚、末日、动作",
    "category": "港台佳片",
    "rating": 9.2,
    "description": "核战后的荒野上,一个独居十年的生存主义者被迫收留了母女三人,但家里的食物只够一人撑过冬天。",
    "tags": [
      "地下掩体",
      "孤僻",
      "闯入者",
      "信任危机"
    ]
  },
  {
    "title": "女王蜂游戏",
    "url": "./movie-632.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑惊悚校园",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "全校最底层的丑小鸭在一场游戏中逆袭成“女王蜂”,却发现上位者的座位是用活人当基座。",
    "tags": [
      "女高中生",
      "死亡游戏",
      "阶级反转",
      "心理战"
    ]
  },
  {
    "title": "道具师",
    "url": "./movie-633.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "综艺纪实",
    "rating": 8.5,
    "description": "剧组道具师意外身亡后,他亲手制作的道具接连引发灵异事件,新来的道具师发现每件道具都藏着死者的遗言。",
    "tags": [
      "道具",
      "剧组",
      "复仇",
      "离奇死亡",
      "真相"
    ]
  },
  {
    "title": "梅露丝",
    "url": "./movie-634.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/奇幻",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "塞纳河里住着一条叫梅露丝的人鱼,她不会唱歌,但会讲法语,还爱上了岸上的叙利亚难民。",
    "tags": [
      "人鱼",
      "巴黎",
      "移民",
      "诗意"
    ]
  },
  {
    "title": "夏妍的秋天",
    "url": "./movie-635.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春/家庭/剧情",
    "category": "喜剧爱情",
    "rating": 9.9,
    "description": "高考倒计时100天,年级第一的夏妍突然不能说话了,医生说是“选择性缄默”,妈妈却认为她只是“矫情”。",
    "tags": [
      "高考",
      "母女关系",
      "抑郁症",
      "和解"
    ]
  },
  {
    "title": "两家春",
    "url": "./movie-636.html",
    "cover": "./36.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/爱情/农村",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "为了争抢镇上唯一的高新技术企业落户,两个村子决定“政治联姻”。",
    "tags": [
      "新农村",
      "联姻",
      "乡村振兴",
      "代际",
      "喜剧"
    ]
  },
  {
    "title": "警戒第一季",
    "url": "./movie-637.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/惊悚/动作",
    "category": "港台佳片",
    "rating": 9.4,
    "description": "国土安全部精英小组发现他们要警戒的头号威胁,其实来自机构内部最高层。",
    "tags": [
      "反恐",
      "内部调查",
      "双男主",
      "节奏快",
      "阴谋论"
    ]
  },
  {
    "title": "黑钱胜地第二季",
    "url": "./movie-638.html",
    "cover": "./38.jpg",
    "year": "2026",
    "region": "美国",
    "type": "TV 剧集",
    "genre": "犯罪/剧情/惊悚",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "伯德家族成功掌控奥扎克赌场,但联邦调查局和新对手同时盯上了他们。",
    "tags": [
      "洗钱",
      "家族企业",
      "权力斗争",
      "暗黑",
      "高智商犯罪"
    ]
  },
  {
    "title": "野性的苦闷",
    "url": "./movie-639.html",
    "cover": "./39.jpg",
    "year": "1985",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,青春",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "八十年代日本小镇,四个少年的摩托车声盖不住他们内心的囚笼哀嚎。",
    "tags": [
      "叛逆",
      "压抑",
      "时代",
      "暴力"
    ]
  },
  {
    "title": "人事的人见",
    "url": "./movie-640.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,职场,悬疑",
    "category": "动作冒险",
    "rating": 8.5,
    "description": "大厂人事部主管拥有透视人性的超能力,能看穿所有面试者的谎言,直到他面试了一个什么都看不透的女人。",
    "tags": [
      "人事部",
      "裁员",
      "窥探隐私",
      "反杀"
    ]
  },
  {
    "title": "12把椅子",
    "url": "./movie-641.html",
    "cover": "./41.jpg",
    "year": "2021",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "喜剧,冒险",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "一位落魄贵族后代得知家族钻石藏在12把相同椅子中的一把,于是开启了一场横跨俄罗斯的拆椅之旅。",
    "tags": [
      "寻宝",
      "讽刺",
      "苏联遗产",
      "黑色幽默"
    ]
  },
  {
    "title": "黑之契约者2:流星的双子",
    "url": "./movie-642.html",
    "cover": "./42.jpg",
    "year": "2009",
    "region": "日本",
    "type": "动漫",
    "genre": "动作,科幻,悬疑",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "东京出现能实现愿望的“流星碎片”,契约者黑与少女苏芳踏上复仇与救赎之旅。",
    "tags": [
      "超能力",
      "组织对抗",
      "末日氛围"
    ]
  },
  {
    "title": "蒂姆与时间悖论",
    "url": "./movie-643.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "科幻,悬疑,剧情",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "物理学家蒂姆为了见亡母最后一面,发明时间机器却导致自己从未出生的悖论危机。",
    "tags": [
      "时间循环",
      "祖父悖论",
      "科学家",
      "亲情",
      "烧脑"
    ]
  },
  {
    "title": "怪物家庭2",
    "url": "./movie-644.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画,喜剧",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "上一部中变回人类的怪物家庭,因为极度不适应普通人的生活,决定主动请求再次被诅咒。",
    "tags": [
      "合家欢",
      "变种",
      "爆笑"
    ]
  },
  {
    "title": "动物潜行速写",
    "url": "./movie-645.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "纪录片,冒险",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "通过伪装成石块的4K摄像头,偷窥动物们最真实、最不为人知的隐秘生活。",
    "tags": [
      "野生动物",
      "伪装摄像头",
      "极简叙事",
      "自然奇观"
    ]
  },
  {
    "title": "泰山得子记",
    "url": "./movie-646.html",
    "cover": "./46.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "冒险/家庭/动画",
    "category": "国产热映",
    "rating": 8.9,
    "description": "当人类学家夫妇把三岁儿子托付给泰山,丛林之王的第一课不是捕猎,而是换尿布。",
    "tags": [
      "泰山续作",
      "亲子关系",
      "丛林育儿",
      "野生萌娃"
    ]
  },
  {
    "title": "干支魂:猫客万来",
    "url": "./movie-647.html",
    "cover": "./47.jpg",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/喜剧",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "猫娘地支试图挤掉老鼠加入十二生肖,却引来全球猫妖抢位大逃杀。",
    "tags": [
      "萌兽娘",
      "十二生肖",
      "猫咪",
      "大乱斗"
    ]
  },
  {
    "title": "造人计划",
    "url": "./movie-648.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,科幻",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "一个宅男科学家造了个“完美女友”机器人,结果她每天只沉迷于做家务和督促他早睡,拒绝任何亲密行为。",
    "tags": [
      "人造人",
      "家庭",
      "搞笑"
    ]
  },
  {
    "title": "致敬大师:单口喜剧传奇",
    "url": "./movie-649.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "英国",
    "type": "纪录片",
    "genre": "纪录,传记,喜剧",
    "category": "国产热映",
    "rating": 9.7,
    "description": "一部由 AI 模拟已故喜剧大师声音,亲自讲述自己如何从抑郁中炼成“笑的艺术”的伪纪录片。",
    "tags": [
      "脱口秀",
      "幕后",
      "致敬",
      "幽默哲学"
    ]
  },
  {
    "title": "午餐盒",
    "url": "./movie-650.html",
    "cover": "./50.jpg",
    "year": "2018",
    "region": "印度",
    "type": "电影",
    "genre": "剧情,温情",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "孟买神秘的午餐盒递送系统错送了一份饭盒,让绝望主妇和退休会计师开始了书信传情。",
    "tags": [
      "送错餐",
      "忘年交",
      "书信",
      "孤独灵魂",
      "孟买"
    ]
  },
  {
    "title": "基督山之子",
    "url": "./movie-651.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,悬疑,历史",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "大仲马的私生子亚历山大·仲马,在揭开自己身世之谜时,卷入了一场比小说更离奇的现代复仇。",
    "tags": [
      "经典改编",
      "私生子复仇",
      "马赛黑帮"
    ]
  },
  {
    "title": "传教士",
    "url": "./movie-652.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻/恐怖/西部",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "一个拥有“让任何人说出真话”能力的德州神父,被迫带着他的吸血鬼女友和爱尔兰酒鬼踏上寻找上帝的公路之旅。",
    "tags": [
      "神父",
      "超能力",
      "天使与恶魔",
      "暴力美学"
    ]
  },
  {
    "title": "情关浴血记",
    "url": "./movie-653.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,爱情,武侠",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "顶级女杀手接到最后一个任务:杀掉自己抛弃五年的前男友,却发现他也在等着杀她。",
    "tags": [
      "杀手",
      "背叛",
      "古城",
      "复仇",
      "宿命"
    ]
  },
  {
    "title": "特战先锋",
    "url": "./movie-654.html",
    "cover": "./54.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电视剧",
    "genre": "战争/动作/历史",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "二战最不被看好的“废物”部队,却成了深入敌后执行自杀任务的第一批特种兵。",
    "tags": [
      "二战",
      "特种部队",
      "兄弟连",
      "硬核",
      "真实改编"
    ]
  },
  {
    "title": "野兽逻辑",
    "url": "./movie-655.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "genre": "悬疑/奇幻/推理",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "在一个人类不存在的动物都市里,私家侦探狐狸“罗宾”专接悬案,破案方式不是找证据,而是拆穿谎言中的“逻辑陷阱”。",
    "tags": [
      "兽拟人",
      "本格推理",
      "黑色幽默",
      "单元剧"
    ]
  },
  {
    "title": "旋风魔术师第二季",
    "url": "./movie-656.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻/悬疑/青春",
    "category": "国产热映",
    "rating": 9.7,
    "description": "第一季结尾消失的天才魔术师突然回归,却发现每个魔术都真的会伤人,而幕后黑手是十年前“被烧死”的师叔。",
    "tags": [
      "魔术对决",
      "超能力",
      "剧场谜案"
    ]
  },
  {
    "title": "快兔交通",
    "url": "./movie-657.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、剧情",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "一个濒临倒闭的同城急送公司老板,接到了一个神秘订单:将一只会说人话的兔子玩偶在24小时内送到300公里外。",
    "tags": [
      "小人物",
      "送货员",
      "公路片",
      "黑色幽默"
    ]
  },
  {
    "title": "绿水",
    "url": "./movie-658.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,犯罪,环保",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "湘西小镇河水一夜变绿,伴随三起命案,老警察发现这些竟与三十年前的活人祭祀有关。",
    "tags": [
      "河神",
      "污染",
      "乡村悬疑",
      "祭祀"
    ]
  },
  {
    "title": "我的魔鬼朋友",
    "url": "./movie-659.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻/剧情/心理",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "十岁男孩的幻想朋友“魔鬼”开始干涉他的现实生活,而这个魔鬼,长得和爸爸一模一样。",
    "tags": [
      "隐喻",
      "心魔",
      "童年创伤",
      "幻想朋友"
    ]
  },
  {
    "title": "72天搞定你",
    "url": "./movie-660.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/喜剧",
    "category": "国产热映",
    "rating": 8.4,
    "description": "效率至上的女总裁签下一份“72天速成恋爱协议”,却发现乙方派来的恋爱教练,正是她十年前暗恋过的穷小子。",
    "tags": [
      "恋爱合约",
      "职场",
      "限期",
      "反转",
      "套路反套路"
    ]
  },
  {
    "title": "铁汉娇娃",
    "url": "./movie-661.html",
    "cover": "./61.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/喜剧/爱情",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "一名退役特种兵被迫照顾黑帮老大的五岁女儿,却发现自己才是被保护的那个。",
    "tags": [
      "硬汉",
      "萌娃",
      "反差萌",
      "黑帮"
    ]
  },
  {
    "title": "大钝裁者",
    "url": "./movie-662.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "英国/美国",
    "type": "电影",
    "genre": "喜剧/政治",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "一个中东小国的独裁者意外失忆,流落到伦敦东区,被当成一名失智的流浪汉。",
    "tags": [
      "黑色幽默",
      "独裁讽刺",
      "恶搞"
    ]
  },
  {
    "title": "政治之爱",
    "url": "./movie-663.html",
    "cover": "./63.jpg",
    "year": "2020",
    "region": "阿根廷",
    "type": "电影",
    "genre": "爱情,政治",
    "category": "国产热映",
    "rating": 9.1,
    "description": "极右翼政党候选人的女儿爱上了贫民窟左翼活动家,两人决定假装恋爱来搞垮各自父亲的选情。",
    "tags": [
      "左翼",
      "禁忌恋",
      "黑色幽默"
    ]
  },
  {
    "title": "李碧华鬼魅系列:奇幻夜",
    "url": "./movie-664.html",
    "cover": "./64.jpg",
    "year": "2013",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖,奇幻",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "三个由李碧华原著改编的短片组成,旧书店的黑猫、地铁站的录像带、以及一场推迟了三十年的同学会,藏着最寒彻骨的恶意。",
    "tags": [
      "李碧华",
      "奇情",
      "三段式"
    ]
  },
  {
    "title": "意外的拜访",
    "url": "./movie-665.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "雨夜,一对陌生夫妇敲开了独居女人的门,声称她是他们失散多年的女儿。",
    "tags": [
      "密室",
      "访客",
      "层层反转"
    ]
  },
  {
    "title": "密告之歌2",
    "url": "./movie-666.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,犯罪,职场",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "刚处理完黑警,主角被调至新部门,发现这里的每一个人都在互相密告。",
    "tags": [
      "警察内部",
      "告发",
      "黑警",
      "正邪难辨",
      "续集"
    ]
  },
  {
    "title": "金大班",
    "url": "./movie-667.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国台湾/中国大陆",
    "type": "剧集",
    "genre": "年代,剧情,女性",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "1949年的上海百乐门,头牌舞女金兆丽不陪酒、不卖身,只想教姐妹们在男人的世界里立规矩。",
    "tags": [
      "百乐门",
      "风月场",
      "姐妹情",
      "时代洪流"
    ]
  },
  {
    "title": "海盗奇缘",
    "url": "./movie-668.html",
    "cover": "./68.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "动画,冒险,家庭",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "梦想成为海盗的少女无意间解开了一张古老地图的秘密,她必须和一群废柴海盗搭档,赶在恶势力之前找到传说中的许愿金币。",
    "tags": [
      "海盗",
      "寻宝",
      "奇幻",
      "友谊"
    ]
  },
  {
    "title": "轩辕大帝",
    "url": "./movie-669.html",
    "cover": "./69.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻,动作",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "在远古神话的真实设定下,黄帝姬轩辕并非使用青铜器,而是驾驶一台从陨星中苏醒的上古机甲,与蚩尤的钢铁巨兽展开终极大战。",
    "tags": [
      "上古神话",
      "黄帝",
      "机甲",
      "文明起源"
    ]
  },
  {
    "title": "德古拉医生",
    "url": "./movie-670.html",
    "cover": "./70.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖,悬疑,惊悚",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "维多利亚时代的伦敦,一位精神科医生为了治疗“吸血鬼妄想症”患者,却唤醒了真正的恶魔。",
    "tags": [
      "吸血鬼",
      "维多利亚时代",
      "医学",
      "伪纪录片"
    ]
  },
  {
    "title": "发达痴梦",
    "url": "./movie-671.html",
    "cover": "./71.jpg",
    "year": "1987",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "香港一个落魄打工仔偶然得到一块据说能许愿的玉佩,每次许愿都会以最荒诞的方式实现。",
    "tags": [
      "草根",
      "发财梦",
      "黑色幽默",
      "经典港味"
    ]
  },
  {
    "title": "欢乐今宵梅姑姑",
    "url": "./movie-672.html",
    "cover": "./72.jpg",
    "year": "1988",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,歌舞,剧情",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "三十八岁的“老姑娘”梅姑姑是电视台的万年龙套,除夕夜她决定最后一次登台,用一首歌向催婚的全家宣战。",
    "tags": [
      "大龄女青年",
      "催婚",
      "粤语片",
      "笑中带泪",
      "怀旧金曲"
    ]
  },
  {
    "title": "梦断影都",
    "url": "./movie-673.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,黑色电影,传记",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "1955年,一位怀揣编剧梦的女孩成为当红女星的替身,却发现自己的创意被层层剽窃。",
    "tags": [
      "好莱坞",
      "制片厂",
      "梦想破灭",
      "1950年代"
    ]
  },
  {
    "title": "肥猫斗小强电影版",
    "url": "./movie-674.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动画,喜剧,动作",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "当社区最懒的肥猫被迫与一只拥有高度智能的蟑螂小强展开深夜对决,一场关乎领地与尊严的史诗战争开始了。",
    "tags": [
      "热血",
      "萌宠",
      "都市传说",
      "黑色幽默"
    ]
  },
  {
    "title": "森林泰山",
    "url": "./movie-675.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/冒险/喜剧",
    "category": "国产热映",
    "rating": 9.9,
    "description": "都市废柴被误当森林之王空降雨林,却要带领动物们对抗推土机。",
    "tags": [
      "丛林冒险",
      "反套路",
      "环保主题",
      "动物伙伴"
    ]
  },
  {
    "title": "流行病毒",
    "url": "./movie-676.html",
    "cover": "./76.jpg",
    "year": "2026",
    "region": "全球",
    "type": "剧集",
    "genre": "科幻/惊悚",
    "category": "动作冒险",
    "rating": 9.8,
    "description": "一种通过短视频传播的“上瘾病毒”全球爆发,人类不再繁殖,只想刷屏到死。",
    "tags": [
      "病毒",
      "短视频",
      "洗脑",
      "末日"
    ]
  },
  {
    "title": "前世金声",
    "url": "./movie-677.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情,奇幻,音乐",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "修琴师淘到一张百年前的黑胶唱片,里面传出的声音,竟和自己每晚梦到的民国恋人一模一样。",
    "tags": [
      "前世今生",
      "黑胶唱片",
      "穿越",
      "命中注定"
    ]
  },
  {
    "title": "悄然之星",
    "url": "./movie-678.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "科幻,剧情",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "在宇宙深处清理太空垃圾的女宇航员,突然收到了来自地球、迟到了三十年的离婚协议书。",
    "tags": [
      "太空",
      "孤独",
      "文艺"
    ]
  },
  {
    "title": "永久居留",
    "url": "./movie-679.html",
    "cover": "./79.jpg",
    "year": "2009",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,爱情,同性",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "一个相信自己是“最后的男人”的建筑师,深爱着一个无法接受他的直男,试图用建筑对抗生命的虚无。",
    "tags": [
      "云翔作品",
      "生死哲学",
      "同志情欲",
      "唯美身体",
      "末世情怀"
    ]
  },
  {
    "title": "柏林夜总会 纳粹眼中钉",
    "url": "./movie-680.html",
    "cover": "./80.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "历史,战争",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "1930年代柏林一家夜总会的变装皇后和犹太歌手,利用表演作为掩护,传递情报,成了纳粹最头疼的眼中钉。",
    "tags": [
      "二战",
      "抵抗运动",
      "歌舞"
    ]
  },
  {
    "title": "非自然死亡",
    "url": "./movie-681.html",
    "cover": "./81.jpg",
    "year": "2018",
    "region": "日本",
    "type": "TV",
    "genre": "悬疑、医疗、犯罪",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "日本民间法医机构“UDI”的女法医,通过解剖揭开每一个“非自然死亡”背后的真相。",
    "tags": [
      "法医",
      "石原里美",
      "每集一案",
      "社会派"
    ]
  },
  {
    "title": "及格人生2024",
    "url": "./movie-682.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/家庭",
    "category": "国产热映",
    "rating": 9.8,
    "description": "一位只求“及格”的高中差生班主任,与事事要满分的学生、家长和校长展开了一场温柔战争。",
    "tags": [
      "中年危机",
      "代际冲突",
      "成绩焦虑",
      "治愈"
    ]
  },
  {
    "title": "如珠如宝的人生",
    "url": "./movie-683.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "一位落魄珠宝鉴定师回到故乡,却发现母亲留下的最后一件翡翠里藏着一份改变家族命运的地图。",
    "tags": [
      "女性",
      "家庭",
      "珠宝",
      "传承",
      "成长"
    ]
  },
  {
    "title": "龙之天堂",
    "url": "./movie-684.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "日本/法国",
    "type": "动画电影",
    "genre": "奇幻/冒险",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "末日之后,人类少女与最后一条小龙结伴,寻找传说中的“龙之天堂”以复活大地。",
    "tags": [
      "龙族传说",
      "末日废土",
      "跨物种友谊"
    ]
  },
  {
    "title": "梦境俏佳人",
    "url": "./movie-685.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "奇幻/爱情",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "失恋女孩买下“梦境定制”服务,每晚在梦里和偶像恋爱,却发现造梦师爱上了她的潜意识。",
    "tags": [
      "造梦师",
      "失恋疗愈",
      "潜意识"
    ]
  },
  {
    "title": "中国诗词大会第四季",
    "url": "./movie-686.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "文化竞技",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "退役特工化身诗词选手,却在答题时发现每句诗都暗指一场城市连环命案。",
    "tags": [
      "诗词",
      "传统文化",
      "竞赛",
      "教育",
      "文学"
    ]
  },
  {
    "title": "小森林2018",
    "url": "./movie-687.html",
    "cover": "./87.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,治愈",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "在都市考公失败的女孩回到乡下老家,用妈妈留下的食谱,在一日三餐中治愈了失败的自己。",
    "tags": [
      "美食",
      "乡村",
      "四季",
      "文艺"
    ]
  },
  {
    "title": "廉政行动1994粤语",
    "url": "./movie-688.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "香港",
    "type": "剧集",
    "genre": "犯罪,剧情,历史",
    "category": "悬疑惊悚",
    "rating": 8.0,
    "description": "1994年,香港ICAC面临回归前最大挑战:一个涉及警队高层的“贩毒保护伞”网络,被称为“无间地狱”。",
    "tags": [
      "ICAC",
      "1994",
      "真实案件",
      "粤语原声"
    ]
  },
  {
    "title": "食鬼师",
    "url": "./movie-689.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "奇幻,恐怖,美食",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "能看见鬼魂的落魄厨师,被迫为各路饿鬼烹制“人生最后一道菜”,送他们超度。",
    "tags": [
      "妖怪",
      "阴阳眼",
      "民俗",
      "单元剧",
      "人性"
    ]
  },
  {
    "title": "金玉满堂2013",
    "url": "./movie-690.html",
    "cover": "./90.jpg",
    "year": "2013",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "category": "动作冒险",
    "rating": 8.3,
    "description": "大年三十,瘫痪多年的老爷子突然站起,下令全家用一碗最诚心的菜来争夺遗产。",
    "tags": [
      "年夜饭",
      "家族争产",
      "失忆",
      "美食对决",
      "团圆"
    ]
  },
  {
    "title": "表姐,妳好嘢!续集",
    "url": "./movie-691.html",
    "cover": "./91.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "表姐郑大姐再次来港办案,这次要抓一个国际伪钞集团,却遇上更古灵精怪的香港亲戚。",
    "tags": [
      "香港",
      "警匪",
      "女汉子",
      "郑裕玲"
    ]
  },
  {
    "title": "密警",
    "url": "./movie-692.html",
    "cover": "./92.jpg",
    "year": "1987",
    "region": "中国大陆/台湾",
    "type": "剧集",
    "genre": "动作/悬疑/犯罪",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "80年代,一个大陆公安和一个台湾刑警被迫搭档追捕同一名毒枭,谁先抓到人,谁就证明对方的体制是错的。",
    "tags": [
      "老刑侦",
      "卧底",
      "双男主",
      "冷硬派"
    ]
  },
  {
    "title": "第三次浪潮",
    "url": "./movie-693.html",
    "cover": "./93.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/科幻/灾难",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "一场史无前例的海啸将在24小时后再次袭击福岛,而只有一名经历过上一次灾难的保安相信这个来自未来的警告。",
    "tags": [
      "海啸",
      "时光回溯",
      "救援",
      "牺牲",
      "政府阴谋"
    ]
  },
  {
    "title": "瘦子",
    "url": "./movie-694.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪、黑色幽默、剧情",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "一个瘦骨嶙峋的超市夜班保安,意外吞下了黑帮交易的微型芯片,成了全城追杀的目标。",
    "tags": [
      "黑色幽默",
      "犯罪喜剧",
      "小人物",
      "身份错位"
    ]
  },
  {
    "title": "都市风暴粤语",
    "url": "./movie-695.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情/犯罪",
    "category": "剧情故事",
    "rating": 8.0,
    "description": "97金融风暴前夕,一对情同手足的孤儿在欲望都市中分道扬镳,一个成了商业巨子,一个成了地下枭雄。",
    "tags": [
      "商战",
      "黑帮",
      "兄弟反目",
      "金融风暴",
      "原声"
    ]
  },
  {
    "title": "妈妈劫",
    "url": "./movie-696.html",
    "cover": "./96.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪,剧情,家庭",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "为了给患罕见病的女儿筹集天价药费,一个懦弱的单亲妈妈策划了一场笨拙却震撼人心的“劫持”。",
    "tags": [
      "绑架",
      "母爱",
      "绝地反击",
      "社会底层"
    ]
  },
  {
    "title": "香闺荡妇",
    "url": "./movie-697.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "心理惊悚",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "一个被全网骂作“香闺荡妇”的女主播,利用自己的性爱录像,诱导了三个曾性侵她的男人互相残杀。",
    "tags": [
      "荡妇羞辱",
      "复仇",
      "网红",
      "私密直播",
      "反转再反转"
    ]
  },
  {
    "title": "夜莺之歌",
    "url": "./movie-698.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "德国/波兰",
    "type": "电影",
    "genre": "剧情,历史,音乐",
    "category": "悬疑惊悚",
    "rating": 9.2,
    "description": "在奥斯维辛集中营,一位犹太女歌手被迫为纳粹军官演唱,她决定将每一次歌唱都变成对死亡的抵抗。",
    "tags": [
      "二战",
      "奥斯维辛",
      "女囚",
      "音乐救赎"
    ]
  },
  {
    "title": "娘道成寺 蛇炎之恋",
    "url": "./movie-699.html",
    "cover": "./99.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "爱情,奇幻,剧情",
    "category": "国产热映",
    "rating": 8.9,
    "description": "改编自经典能乐《道成寺》,故事的主角是那条化为蛇妖的痴情女子清姬,这一次,镜头将对准她千年的执念与等待。",
    "tags": [
      "能乐",
      "悲剧",
      "人妖恋",
      "视觉系"
    ]
  },
  {
    "title": "叛谍迷情",
    "url": "./movie-700.html",
    "cover": "./100.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑,动作,爱情",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "顶级特工失忆后过着普通人生活,直到他的妻子和情人同时找上门,都说他是自己的丈夫。",
    "tags": [
      "间谍",
      "失忆",
      "双重身份",
      "三角恋"
    ]
  },
  {
    "title": "糖果屋大道",
    "url": "./movie-701.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖奇幻",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "贫民窟的孩子们总是失踪,一个流浪汉发现,街上那家免费糖果屋其实是一栋能吃人的房子。",
    "tags": [
      "都市传说",
      "吃人",
      "反转"
    ]
  },
  {
    "title": "维多利亚必须死",
    "url": "./movie-702.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "黑色喜剧/政治讽刺",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "一个超市收银员被选中当女王的替身,因为真正的女王已经三天没吃东西了。",
    "tags": [
      "暗杀",
      "替身",
      "荒诞",
      "女王"
    ]
  },
  {
    "title": "八仙过海粤语",
    "url": "./movie-703.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "香港",
    "type": "剧集",
    "genre": "奇幻/古装/动作",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "八位神仙转世成为香港一家广告公司的打工仔,必须用仙术完成KPI才能归位。",
    "tags": [
      "八仙",
      "粤语",
      "众筹",
      "现代职场"
    ]
  },
  {
    "title": "倩狐之京卫怪谈",
    "url": "./movie-704.html",
    "cover": "./104.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "奇幻",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "京城锦衣卫指挥使接连被害,现场都留有一缕白毛,民间传言狐妖索命,但新来的仵作发现死者全是太监。",
    "tags": [
      "古装",
      "狐妖",
      "悬疑",
      "捉妖",
      "言情"
    ]
  },
  {
    "title": "公路故事",
    "url": "./movie-705.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/公路",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "儿子替父亲跑最后一趟货运,发现货箱暗格里藏的是毒品,而GPS显示前方就是检查站。",
    "tags": [
      "运毒",
      "父子关系",
      "大货车"
    ]
  },
  {
    "title": "浮尘下的枪声",
    "url": "./movie-706.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "一具风干尸体牵出二十年前的矿难黑幕,退休警察与重返故乡的记者结成了最不稳定的同盟。",
    "tags": [
      "双男主",
      "旧案重查",
      "北疆",
      "层层反转"
    ]
  },
  {
    "title": "死亡写真国语",
    "url": "./movie-707.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚,悬疑,犯罪",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "一位摄影师发现自己的相机每次拍完人像后,照片里的人都会在三日内意外死亡,而他无法停止按快门。",
    "tags": [
      "心理惊悚",
      "摄影",
      "连环杀手",
      "人格分裂",
      "反转结局"
    ]
  },
  {
    "title": "狼2019",
    "url": "./movie-708.html",
    "cover": "./108.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/剧情",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "一座凋零的工业小城,一名卧底在黑帮边缘的警察,必须在狼群与人性之间做出选择。",
    "tags": [
      "东北工业城",
      "卧底警察",
      "兄弟反目",
      "雪原追凶"
    ]
  },
  {
    "title": "飙车热情",
    "url": "./movie-709.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "运动/剧情/青春",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "废柴儿子想用非法赛车证明自己,曾经的亚洲车神父亲坐在副驾冷冷说:你连弯都不会过。",
    "tags": [
      "赛车",
      "热血",
      "父子关系",
      "成长"
    ]
  },
  {
    "title": "塔尔萨之王",
    "url": "./movie-710.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,剧情",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "纽约黑手党老大出狱后被流放塔尔萨,却发现这里已是毒枭与印第安人帮派的天下。",
    "tags": [
      "黑帮",
      "养老",
      "卧薪尝胆"
    ]
  },
  {
    "title": "那些野兽",
    "url": "./movie-711.html",
    "cover": "./111.jpg",
    "year": "2022",
    "region": "西班牙/法国",
    "type": "电影",
    "genre": "惊悚,剧情",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "一对法国夫妇在西班牙山村种田,邻居因风力发电项目想逼他们走,野兽在两边徘徊。",
    "tags": [
      "乡村",
      "邻里矛盾",
      "暴力升级",
      "生存",
      "心理压迫"
    ]
  },
  {
    "title": "恐惧街",
    "url": "./movie-712.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "1994年,一场车祸让一群高中生发现了“恐惧街”的秘密:每过15年,这里就会诞生一个杀人魔,而起源是1666年的一个女巫诅咒。",
    "tags": [
      "都市传说",
      "连环杀手",
      "小镇秘密",
      "复古恐怖"
    ]
  },
  {
    "title": "摩登衙门",
    "url": "./movie-713.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "2046年,香港警察配发AI执法仪,却被三个古惑仔用“人脑算法”玩得团团转。",
    "tags": [
      "未来警匪",
      "AI执法",
      "港味"
    ]
  },
  {
    "title": "盲证",
    "url": "./movie-714.html",
    "cover": "./114.jpg",
    "year": "2011",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚/犯罪",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "失明女护士是连环杀人案的唯一“目击者”,她用超越常人的听觉与凶手展开生死追击。",
    "tags": [
      "盲人",
      "目击证人",
      "变态杀手",
      "警匪"
    ]
  },
  {
    "title": "女性与生育",
    "url": "./movie-715.html",
    "cover": "./115.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,纪录片式戏剧",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "一位单身大学教授意外怀孕,却在法国顶级医院遭遇了教科书级别的医疗歧视与官僚折磨。",
    "tags": [
      "身体自主",
      "医疗体系",
      "单身母亲",
      "社会压迫",
      "写实"
    ]
  },
  {
    "title": "消失的情人节",
    "url": "./movie-716.html",
    "cover": "./116.jpg",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情,奇幻,喜剧",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "邮局柜员杨晓淇发现,全世界的所有人都消失了一天,唯独她被留在了那个空白的情人节。",
    "tags": [
      "时间",
      "快慢",
      "错过",
      "纯爱"
    ]
  },
  {
    "title": "天降美食粤语",
    "url": "./movie-717.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,奇幻",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "香港深水埗一间茶餐厅的老板,意外得到一台能将任何东西变成烧鹅、虾饺和奶茶的神奇复印机。",
    "tags": [
      "粤语配音",
      "美食",
      "荒诞"
    ]
  },
  {
    "title": "失去灵魂的内托",
    "url": "./movie-718.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "黑帮杀手内托移植了一名小提琴家的心脏后,开始听见从未学过的古典乐。",
    "tags": [
      "器官移植",
      "身份认同",
      "哥特风",
      "黑帮伦理"
    ]
  },
  {
    "title": "鲨人树儿",
    "url": "./movie-719.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/喜剧/科幻",
    "category": "国产热映",
    "rating": 8.6,
    "description": "一家化工企业的毒废水倒进森林,一夜之间,树长出了鲨鱼的牙齿,开始向人类复仇。",
    "tags": [
      "B级片",
      "变异生物",
      "黑色幽默",
      "生态恐怖"
    ]
  },
  {
    "title": "起程之日",
    "url": "./movie-720.html",
    "cover": "./120.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、家庭、生活",
    "category": "亚洲精选",
    "rating": 8.2,
    "description": "癌症晚期的父亲唯一遗愿,是让疏远十年的儿子陪他坐遍全国废弃的火车线。",
    "tags": [
      "临终关怀",
      "父子和解",
      "铁道迷",
      "遗愿清单"
    ]
  },
  {
    "title": "古宅老友记第四季",
    "url": "./movie-721.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "喜剧/奇幻",
    "category": "国产热映",
    "rating": 8.2,
    "description": "新晋富豪艾莉森带着一堆吵闹的鬼魂住了进破旧庄园,但她不知道,那个一直帮她修水管的憨厚鬼,曾是害死她的凶手。",
    "tags": [
      "英式幽默",
      "鬼魂日常",
      "庄园遗产",
      "社畜主角",
      "温馨"
    ]
  },
  {
    "title": "玩具总动员2",
    "url": "./movie-722.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "重启版中,被遗弃二十年的巴斯光年在一场旧货拍卖中被买走,醒来时发现自己成了博物馆藏品。",
    "tags": [
      "玩具",
      "收藏家",
      "复活",
      "记忆"
    ]
  },
  {
    "title": "省港一号通缉犯",
    "url": "./movie-723.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/警匪/犯罪",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "粤港警方联合通缉的头号重犯悄然返港,而负责抓捕他的警探,正是十八年前亲手将他送进监狱的老搭档。",
    "tags": [
      "通缉犯",
      "跨境犯罪",
      "港警",
      "双雄对决",
      "枪战"
    ]
  },
  {
    "title": "钢铁勋章",
    "url": "./movie-724.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "战争,剧情,传记",
    "category": "家庭青春",
    "rating": 9.2,
    "description": "一枚三十年前追授的荣誉勋章,竟牵出一场由全排战友合谋的“英雄骗局”。",
    "tags": [
      "真实事件改编",
      "越战",
      "兄弟连",
      "荣耀与谎言"
    ]
  },
  {
    "title": "避风港湾",
    "url": "./movie-725.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,家庭,治愈",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "一所即将关闭的无家可归者收容所,在最后一个月里,让所有局外人看到了什么是真正的家人。",
    "tags": [
      "收容所",
      "无家可归者",
      "人性光辉",
      "社区"
    ]
  },
  {
    "title": "交换肌肤",
    "url": "./movie-726.html",
    "cover": "./126.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/奇幻/爱情",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "一对生活不如意的陌生人通过神秘诊所交换了身体,却发现自己爱上了对方原本的肌肤。",
    "tags": [
      "身份互换",
      "身体恐怖",
      "都市畸爱",
      "社会隐喻"
    ]
  },
  {
    "title": "杀出个黎明",
    "url": "./movie-727.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作西部",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "赏金猎人兄弟押送女魔头穿越死亡荒漠,却发现她口中的“宝藏”其实是能毁灭世界的第一把自动步枪。",
    "tags": [
      "枪战",
      "荒漠",
      "复仇",
      "兄弟情",
      "末日"
    ]
  },
  {
    "title": "千言慢煮",
    "url": "./movie-728.html",
    "cover": "./128.jpg",
    "year": "2017",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭,美食",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "一道菜要说一千句话,母女之间横着三十年的沉默。",
    "tags": [
      "亲情",
      "味觉记忆",
      "慢生活",
      "和解",
      "治愈"
    ]
  },
  {
    "title": "嘿玛嘿玛",
    "url": "./movie-729.html",
    "cover": "./129.jpg",
    "year": "2016",
    "region": "不丹",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "不丹深林中每十二年举行一次的面具集会,参与者戴上匿名面具后,欲望开始侵蚀规则。",
    "tags": [
      "面具",
      "禁忌",
      "匿名",
      "欲望",
      "转世"
    ]
  },
  {
    "title": "我的男友是甲方",
    "url": "./movie-730.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,喜剧",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "当乙方社畜发现新男友竟是折磨自己三年的魔鬼甲方,一场啼笑皆非的身份博弈开始了。",
    "tags": [
      "职场",
      "反套路",
      "设计行业"
    ]
  },
  {
    "title": "搞鬼公馆大电影国语",
    "url": "./movie-731.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、恐怖、奇幻",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "一个直播团队为了点击率闯入百年凶宅,却撞上了一群试图靠“扮鬼”拍短视频走红的过气网红。",
    "tags": [
      "国产鬼片",
      "笑点密集",
      "密室逃脱",
      "特效五毛但搞笑"
    ]
  },
  {
    "title": "萨沙曾在这里",
    "url": "./movie-732.html",
    "cover": "./132.jpg",
    "year": "2021",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情/战争/历史",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "白俄罗斯的森林深处,一名8岁男孩躲在废弃的烟囱里,目睹了全村人被屠杀,他在墙上刻下:萨沙曾在这里。",
    "tags": [
      "二战",
      "苏联",
      "游击队",
      "儿童视角",
      "残酷回忆"
    ]
  },
  {
    "title": "万分感谢",
    "url": "./movie-733.html",
    "cover": "./133.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,喜剧,都市",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "一个失业投行精英伪装成外卖员体验生活,却被同行大妈教会了如何真正地“活着”。",
    "tags": [
      "外卖员",
      "都市温情",
      "人生低谷",
      "双向治愈"
    ]
  },
  {
    "title": "噪乐江湖",
    "url": "./movie-734.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,音乐",
    "category": "国产热映",
    "rating": 8.3,
    "description": "一支地下摇滚乐队被迫去给一场传统古琴比赛当伴奏,却发现古琴曲比死亡重金属还要躁。",
    "tags": [
      "摇滚",
      "古琴",
      "文化冲突",
      "师徒"
    ]
  },
  {
    "title": "双子镇",
    "url": "./movie-735.html",
    "cover": "./135.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻/悬疑/惊悚",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "一名小镇警察在调查双胞胎姐妹失踪案时,发现自己所在的镇子在地图上有一个完全对称的镜像“双子镇”,而对面住着所有人的另一个自己。",
    "tags": [
      "平行宇宙",
      "小镇怪谈",
      "量子纠缠",
      "双胞胎",
      "封闭空间"
    ]
  },
  {
    "title": "孤山诡事",
    "url": "./movie-736.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电视剧",
    "genre": "悬疑,古装",
    "category": "亚洲精选",
    "rating": 9.5,
    "description": "民国探长受邀进入无人敢近的孤山别墅,却看到自己上个月亲手逮捕的囚犯端坐在餐桌主位。",
    "tags": [
      "民国",
      "鬼宅",
      "密室杀人",
      "连环案"
    ]
  },
  {
    "title": "城迷",
    "url": "./movie-737.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/悬疑/犯罪",
    "category": "国产热映",
    "rating": 9.4,
    "description": "一位患有失忆症的建筑师醒来发现自己身处一座没有出口的诡异街区,而这里所有居民都是他设计的大楼里的失踪者。",
    "tags": [
      "都市传说",
      "迷宫",
      "失踪案",
      "建筑师",
      "记忆"
    ]
  },
  {
    "title": "联合缩小兵",
    "url": "./movie-738.html",
    "cover": "./138.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,动作,冒险",
    "category": "家庭青春",
    "rating": 9.2,
    "description": "为了给总统取出体内的纳米追踪器,一队特种兵被缩成细胞大小,注射进血管,开始一场惊心动魄的体内战。",
    "tags": [
      "人体冒险",
      "微观世界",
      "特效大片",
      "打针惊魂"
    ]
  },
  {
    "title": "当我跑步时我什么都不想",
    "url": "./movie-739.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,运动,治愈",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "一个被确诊抑郁症的程序员开始跑步,他以为奔跑是为了忘记一切,却发现终点线后,是他再也回不去的人生。",
    "tags": [
      "中年危机",
      "马拉松",
      "心理重建"
    ]
  },
  {
    "title": "2010威震太阳神",
    "url": "./movie-740.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "美国/英国",
    "type": "电影",
    "genre": "科幻,冒险,灾难",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "2010年,一次超级太阳风暴摧毁了国际空间站,地球上的宇航员家人必须引导他们返回。",
    "tags": [
      "太空灾难",
      "硬科幻",
      "太阳风暴",
      "求生"
    ]
  },
  {
    "title": "编写美好时光",
    "url": "./movie-741.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "一位落魄编剧被迫回到老家为父写传,却在旧信件中发现父母爱情背后的惊天谎言。",
    "tags": [
      "编剧困境",
      "亲情和解",
      "小镇记忆",
      "书信传情"
    ]
  },
  {
    "title": "荷里活小子",
    "url": "./movie-742.html",
    "cover": "./142.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,励志,青春",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "一个从中国农村偷渡到美国的小伙子,怀揣电影梦,在好莱坞片场从最底层的龙套逆袭成动作巨星。",
    "tags": [
      "追梦",
      "龙套",
      "好莱坞",
      "友情",
      "搞笑"
    ]
  },
  {
    "title": "想吃拉面!",
    "url": "./movie-743.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "美食/剧情",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "一个连泡面都煮不好的上班族,决定在前拉面冠军的“魔鬼训练”下,做出一碗完美拉面。",
    "tags": [
      "拉面",
      "治愈",
      "匠人",
      "温情"
    ]
  },
  {
    "title": "最激生还者",
    "url": "./movie-744.html",
    "cover": "./144.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、生存",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "一档全球直播的死囚真人秀,把 12 人丢进仿生猛兽岛,唯一的规则是只能活一个。",
    "tags": [
      "真人秀",
      "绝境求生",
      "仿生人",
      "直播杀人",
      "反乌托邦"
    ]
  },
  {
    "title": "福宝爷俩",
    "url": "./movie-745.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧,家庭",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "不靠谱老爸带着7岁儿子,开废品车跨省送一只捡到的大熊猫回家。",
    "tags": [
      "父子",
      "大熊猫",
      "温情",
      "搞笑"
    ]
  },
  {
    "title": "一曲倾情",
    "url": "./movie-746.html",
    "cover": "./146.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/音乐/爱情",
    "category": "国产热映",
    "rating": 8.3,
    "description": "落魄钢琴家与失声歌剧院女高音,在午夜地铁站用一首未完成的曲子交换了彼此破碎的人生。",
    "tags": [
      "钢琴家",
      "街头艺人",
      "命运交响曲",
      "灵魂共鸣",
      "逆袭"
    ]
  },
  {
    "title": "绕道",
    "url": "./movie-747.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "一位女程序员深夜拼车回家,司机不断更改路线,她发现车上的另外两名乘客似乎已不再是活人。",
    "tags": [
      "夜间驾驶",
      "身份错位",
      "心理博弈"
    ]
  },
  {
    "title": "青春残爱物语",
    "url": "./movie-748.html",
    "cover": "./148.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "优等生爱上了班里的“边缘人”,他们试图用爱情拯救彼此,却一起坠入了更深的深渊。",
    "tags": [
      "残酷青春",
      "霸凌",
      "纯爱",
      "致郁"
    ]
  },
  {
    "title": "海之魂",
    "url": "./movie-749.html",
    "cover": "./149.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "东海小岛上,一个拒绝继承渔业的90后,在台风天被迫掌舵了父亲的老渔船。",
    "tags": [
      "渔民",
      "传承",
      "海岛"
    ]
  },
  {
    "title": "我的野蛮女友2017",
    "url": "./movie-750.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/喜剧/奇幻",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "2017年的程序员无意间打开了2001年野蛮女友的笔记本电脑,发现对方正在通过邮件试图联系未来的他。",
    "tags": [
      "翻拍",
      "时空穿越",
      "多版本宇宙",
      "双向治愈"
    ]
  },
  {
    "title": "百万碎片",
    "url": "./movie-751.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,悬疑,惊悚",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "男人醒来发现满屋钞票和一具尸体,而断片昨晚的自己正是凶手。",
    "tags": [
      "记忆碎片",
      "失忆",
      "黑帮",
      "烧脑"
    ]
  },
  {
    "title": "他不坏,他是我兄弟",
    "url": "./movie-752.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "哥哥因过失杀人入狱十五年,出狱那天全村人举着火把让他滚,只有弟弟站在他身边。",
    "tags": [
      "兄弟",
      "出狱",
      "小镇",
      "偏见",
      "救赎"
    ]
  },
  {
    "title": "诈欺担保人第三季",
    "url": "./movie-753.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,犯罪",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "假释中的骗子冒用他人身份成为保释担保人,第三季里,他的亲生母亲成了他的下一个目标嫌犯。",
    "tags": [
      "假释",
      "诈骗",
      "救赎",
      "黑色幽默"
    ]
  },
  {
    "title": "巅峰拍档第二十一季",
    "url": "./movie-754.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "英国",
    "type": "综艺",
    "genre": "汽车真人秀",
    "category": "综艺纪实",
    "rating": 8.2,
    "description": "三位主持人驾驶着报废车横跨撒哈拉,却意外发现了一张藏宝图。",
    "tags": [
      "竞速",
      "改装车",
      "挑战",
      "幽默"
    ]
  },
  {
    "title": "鲛绡碧",
    "url": "./movie-755.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装奇幻",
    "category": "港台佳片",
    "rating": 8.0,
    "description": "盲眼绣娘捡回一个哑巴鲛人,她用自己的记忆作绣线,换取他织出的能预测未来的鲛绡纱。",
    "tags": [
      "深海鲛人",
      "刺绣",
      "以泪换珠"
    ]
  },
  {
    "title": "史酷比和吸血鬼传说",
    "url": "./movie-756.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画,喜剧,悬疑",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "神秘公司受邀到罗马尼亚古堡捉鬼,却发现所谓的吸血鬼可能是史上最帅的摇滚明星。",
    "tags": [
      "狗狗冒险",
      "伪纪录片",
      "搞笑",
      "惊悚"
    ]
  },
  {
    "title": "疯狂72小时",
    "url": "./movie-757.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/犯罪/黑色幽默",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "三伙笨贼、一对情侣和一只藏了钻石的赛鸽,在72小时内被困在一栋即将拆除的老楼里。",
    "tags": [
      "多线叙事",
      "误会",
      "宝藏"
    ]
  },
  {
    "title": "最后的爱",
    "url": "./movie-758.html",
    "cover": "./8.jpg",
    "year": "2007",
    "region": "日本",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "罹患绝症的60岁退休教授,收到了40年前女学生寄来的信:“老师,我暗恋了你40年,现在我去世了。",
    "tags": [
      "绝症",
      "师生恋",
      "遗书",
      "纯爱"
    ]
  },
  {
    "title": "终极英豪",
    "url": "./movie-759.html",
    "cover": "./9.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "卧底警察爱上黑帮大小姐,在最后行动前被自己的线人出卖。",
    "tags": [
      "警匪对决",
      "兄弟情",
      "港式枪战"
    ]
  },
  {
    "title": "爱过之后",
    "url": "./movie-760.html",
    "cover": "./10.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "分手七年后,她在新书签售会上抬头看见排队第一人是那个曾消失的前任。",
    "tags": [
      "分手",
      "重逢",
      "遗憾",
      "都市情感"
    ]
  },
  {
    "title": "瑞典姐儿娇俏妙",
    "url": "./movie-761.html",
    "cover": "./11.jpg",
    "year": "2022",
    "region": "瑞典",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "斯德哥尔摩的女权博主与小镇的选美皇后互换手机,生活彻底乱套。",
    "tags": [
      "交换身份",
      "北欧",
      "小镇",
      "女权"
    ]
  },
  {
    "title": "谁杀了甘迺迪",
    "url": "./movie-762.html",
    "cover": "./12.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "历史,悬疑,纪录片式",
    "category": "最新推荐",
    "rating": 8.0,
    "description": "通过最新的AI人脸识别和弹道重演技术,本剧逐一排查所有刺杀肯尼迪的阴谋论,给出了最颠覆性的答案。",
    "tags": [
      "政治",
      "阴谋",
      "刺杀",
      "重构"
    ]
  },
  {
    "title": "莎士比亚 王子复仇记",
    "url": "./movie-763.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,历史",
    "category": "港台佳片",
    "rating": 9.6,
    "description": "采用现代军事政变视角重构《哈姆雷特》,丹麦王子拿起的不再是长剑,而是网络舆论战。",
    "tags": [
      "经典改编",
      "莎翁",
      "哈姆雷特",
      "宫斗"
    ]
  },
  {
    "title": "漂流少年",
    "url": "./movie-764.html",
    "cover": "./14.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻,冒险",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "一所学校连人带楼漂进异次元,学生们获得超能力,却发现自己再也回不去了。",
    "tags": [
      "异世界",
      "超能力",
      "青春",
      "哲学",
      "成长"
    ]
  },
  {
    "title": "军医2014",
    "url": "./movie-765.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争,剧情,纪实",
    "category": "国产热映",
    "rating": 8.9,
    "description": "2014年埃博拉肆虐非洲,一名中国军医随医疗队出征,在病毒与炮火之间,用尸体和死神抢时间。",
    "tags": [
      "维和",
      "非洲",
      "埃博拉",
      "信仰"
    ]
  },
  {
    "title": "227",
    "url": "./movie-766.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、犯罪",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "航班227在雷达上消失3分钟后重现,但机上一名乘客凭空消失了。",
    "tags": [
      "航班失踪",
      "全员嫌疑人",
      "高空密室"
    ]
  },
  {
    "title": "德意志零年",
    "url": "./movie-767.html",
    "cover": "./17.jpg",
    "year": "1948",
    "region": "意大利/德国",
    "type": "电影",
    "genre": "剧情/历史/战争",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "二战废墟下的德国小男孩,为了帮父亲“解脱”,在老师的错误教导下,向父亲喂下了毒药。",
    "tags": [
      "罗西里尼",
      "新现实主义",
      "战后创伤",
      "儿童悲剧"
    ]
  },
  {
    "title": "夜间医生",
    "url": "./movie-768.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "医疗,悬疑,职业",
    "category": "家庭青春",
    "rating": 8.0,
    "description": "只在深夜急诊科出现的传奇医生,没有执照,没有记录,却总能救活“不该活的人”。",
    "tags": [
      "夜班",
      "急诊室",
      "神秘病人"
    ]
  },
  {
    "title": "闭门一家千粤语",
    "url": "./movie-769.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "家庭/喜剧",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "深水埗三兄妹突然被告知是千亿遗产继承人,条件是必须全家闭门生活100天不吵架。",
    "tags": [
      "港式市井",
      "咸鱼翻生",
      "真假富豪"
    ]
  },
  {
    "title": "玻璃之唇",
    "url": "./movie-770.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "genre": "青春文艺",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "两个破碎家庭的高中生,在吹制玻璃的瞬间热度中,打碎并重塑了彼此的青春。",
    "tags": [
      "玻璃工艺",
      "成长",
      "小镇",
      "细腻"
    ]
  },
  {
    "title": "大明妖异录",
    "url": "./movie-771.html",
    "cover": "./21.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/奇幻/古装",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "明朝永乐年间,京城频现妖异怪案,一名锦衣卫千户与一名神秘方士联手追查,却发现妖物皆是人造。",
    "tags": [
      "锦衣卫",
      "妖物",
      "探案",
      "明朝",
      "志怪"
    ]
  },
  {
    "title": "边城夺宝记",
    "url": "./movie-772.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,冒险,喜剧",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "民国乱世,三伙不同势力的盗贼同时盯上了云南边城土司墓中的“滇王金印”,却没人知道金印是假的。",
    "tags": [
      "民国",
      "夺宝",
      "云南"
    ]
  },
  {
    "title": "纳德和西敏:一次别离",
    "url": "./movie-773.html",
    "cover": "./23.jpg",
    "year": "2011",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情/家庭/社会",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "一对中产夫妻的离婚官司,撕开了整个伊朗社会的阶层、信仰与良心之痛。",
    "tags": [
      "伊朗社会",
      "道德困境",
      "宗教",
      "离婚"
    ]
  },
  {
    "title": "4度空间大师",
    "url": "./movie-774.html",
    "cover": "./24.jpg",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,悬疑",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "一个发明了四度空间仪的天才,发现自己在每个平行宇宙中都是疯子。",
    "tags": [
      "平行宇宙",
      "穿越",
      "邪典",
      "脑洞"
    ]
  },
  {
    "title": "记忆杀神",
    "url": "./movie-775.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,科幻",
    "category": "家庭青春",
    "rating": 8.0,
    "description": "一个能删除特定记忆的职业杀手,在一次任务后发现自己连“我是谁”都忘了,只留下一个目标名字。",
    "tags": [
      "失忆",
      "复仇",
      "高概念"
    ]
  },
  {
    "title": "开发者有罪",
    "url": "./movie-776.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/惊悚",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "全球最受欢迎的操作系统被爆出“觉醒伤人”,开发者被送上了人类法庭。",
    "tags": [
      "程序员",
      "伦理",
      "AI",
      "审判",
      "后人类"
    ]
  },
  {
    "title": "惊天大逃亡",
    "url": "./movie-777.html",
    "cover": "./27.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,悬疑",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "小职员被栽赃杀人,在四十八小时里横跨三座城市,只为找出真凶。",
    "tags": [
      "逃亡",
      "阴谋",
      "绝境求生",
      "反转",
      "兄弟情"
    ]
  },
  {
    "title": "今日我话事!!剧场版",
    "url": "./movie-778.html",
    "cover": "./28.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧/校园",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "最没存在感的学生会庶务,因一句醉话成了全校最有权力的人,他开始履行竞选承诺。",
    "tags": [
      "社团",
      "搞笑",
      "热血",
      "日式",
      "学生会"
    ]
  },
  {
    "title": "国学小名士第五季",
    "url": "./movie-779.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,文化",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "这一季选手们进入虚拟古代长安城,用国学知识破解谜题,争夺“数字传国玉玺”。 虚拟现实技术加持下,百位少年在数字化的长安城里,通过写诗、对弈、解谜来逐级淘汰。",
    "tags": [
      "竞赛",
      "诗词",
      "破圈",
      "元宇宙"
    ]
  },
  {
    "title": "夺命追踪者",
    "url": "./movie-780.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "一位顶尖的“痕迹追踪专家”受雇寻找失踪女孩,却发现追踪者就是自己的雇主。",
    "tags": [
      "痕迹专家",
      "荒野",
      "猫鼠游戏"
    ]
  },
  {
    "title": "网上有缘",
    "url": "./movie-781.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情,网络",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "一个社恐程序员和一个“声优级”外卖女骑手在语音软件上相爱,约定见面那天,两人都找了替身。",
    "tags": [
      "网恋奔现",
      "语音交友",
      "双向欺骗",
      "情感疗愈"
    ]
  },
  {
    "title": "冻尸计划",
    "url": "./movie-782.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻,悬疑,惊悚",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "西伯利亚冻土融化解冻出一具二战苏军遗体,他醒来后发现自己体内被植入了足以毁灭城市的病毒。",
    "tags": [
      "人体冷冻",
      "阴谋论",
      "苏联遗产",
      "复活"
    ]
  },
  {
    "title": "恋梦空间第一季",
    "url": "./movie-783.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/恋爱社交",
    "category": "最新推荐",
    "rating": 9.5,
    "description": "八位来自不同城市的单身男女,在一栋名为“恋梦空间”的海边别墅里,寻找爱情与自我。",
    "tags": [
      "素人",
      "合宿",
      "心动信号",
      "治愈"
    ]
  },
  {
    "title": "擒纵器",
    "url": "./movie-784.html",
    "cover": "./34.jpg",
    "year": "2007",
    "region": "日本",
    "type": "电影",
    "genre": "科幻/悬疑/心理",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "天才钟表匠发明了能短暂停顿时间的擒纵器,他却发现每次使用后,都有一个人会离奇消失。",
    "tags": [
      "时间操控",
      "钟表匠",
      "谋杀",
      "因果悖论"
    ]
  },
  {
    "title": "珍妮热线",
    "url": "./movie-785.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,惊悚",
    "category": "动画奇幻",
    "rating": 8.9,
    "description": "1960年代,芝加哥一群代号“珍妮”的神秘女性,秘密建立地下网络,为走投无路的女性提供安全堕胎服务。",
    "tags": [
      "真实事件",
      "女性互助",
      "堕胎权"
    ]
  },
  {
    "title": "恋爱脱线时",
    "url": "./movie-786.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "喜剧/爱情/奇幻",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "程序媛意外写出恋爱辅助AI,反被AI吐槽追男神策略全是bug。",
    "tags": [
      "人工智能",
      "笑点密集",
      "都市恋爱"
    ]
  },
  {
    "title": "凶邻",
    "url": "./movie-787.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖,悬疑,惊悚",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "独居女子发现对面楼的男人每晚用望远镜看向自己,报警后发现那个位置根本没有人住。",
    "tags": [
      "邻居",
      "偷窥",
      "凶案",
      "反转"
    ]
  },
  {
    "title": "大人物1942",
    "url": "./movie-788.html",
    "cover": "./38.jpg",
    "year": "2012",
    "region": "中国",
    "type": "电影",
    "genre": "剧情,历史,战争",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "1942年的上海,一个被误认为汉奸的银行家,被迫入局成为三方势力争夺的棋子。",
    "tags": [
      "抗日",
      "双面间谍",
      "上海滩",
      "宿命"
    ]
  },
  {
    "title": "妙手仁心2",
    "url": "./movie-789.html",
    "cover": "./39.jpg",
    "year": "2000",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情/爱情",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "仁爱医院再起风云,一群医生在救死扶伤的同时,也在感情和道德的困境中寻找仁心。",
    "tags": [
      "医疗",
      "TVB",
      "职业剧",
      "群像"
    ]
  },
  {
    "title": "天翻地覆",
    "url": "./movie-790.html",
    "cover": "./40.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难/喜剧",
    "category": "港台佳片",
    "rating": 9.6,
    "description": "一夜之间,地球重力翻转,没抓住地面的人全部掉进了天空。",
    "tags": [
      "地球反转",
      "科幻",
      "黑色幽默",
      "求生"
    ]
  },
  {
    "title": "超级飞侠第六季",
    "url": "./movie-791.html",
    "cover": "./41.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "动画",
    "genre": "儿童益智",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "乐迪和他的快递小队满世界送包裹,顺便化解各种意外危机。",
    "tags": [
      "全球探险",
      "解决问题",
      "团队协作"
    ]
  },
  {
    "title": "脂粉奇兵",
    "url": "./movie-792.html",
    "cover": "./42.jpg",
    "year": "1982",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/动作",
    "category": "动画奇幻",
    "rating": 8.6,
    "description": "化妆品公司的五位柜姐被CIA招募,用唇膏口红执行高难度刺杀任务。",
    "tags": [
      "邵氏",
      "女特工",
      "复古时尚",
      "搞笑格斗",
      "胭脂味"
    ]
  },
  {
    "title": "满月疑云",
    "url": "./movie-793.html",
    "cover": "./43.jpg",
    "year": "1999",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/犯罪/惊悚",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "满月夜必有凶案,但所有嫌疑人都有不在场证明。",
    "tags": [
      "连环杀人",
      "月相",
      "心理战",
      "刑警"
    ]
  },
  {
    "title": "甜蜜的来世",
    "url": "./movie-794.html",
    "cover": "./44.jpg",
    "year": "1997",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情,悬疑",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "一名律师为了打赢集体诉讼案来到平静小镇,却意外揭开了校车坠湖悲剧背后每个家庭的甜蜜与伤痛。",
    "tags": [
      "多线叙事",
      "校车事故",
      "律师",
      "小镇秘事",
      "文学改编"
    ]
  },
  {
    "title": "海洋男孩",
    "url": "./movie-795.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "奇幻/家庭/冒险",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "一个失聪男孩发现自己能和海洋生物说话,而大堡礁正在“低声哭泣”。",
    "tags": [
      "大堡礁",
      "环保",
      "听力障碍",
      "海洋生物"
    ]
  },
  {
    "title": "庇护",
    "url": "./movie-796.html",
    "cover": "./46.jpg",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情,惊悚,社会",
    "category": "国产热映",
    "rating": 9.3,
    "description": "家暴庇护所里,一位温柔的新来者其实是被妻子长期虐待的男受害者,却被所有人当成卧底。",
    "tags": [
      "家暴庇护所",
      "人格伪装",
      "施暴者互换",
      "女性群像",
      "反转"
    ]
  },
  {
    "title": "搜神传粤语",
    "url": "./movie-797.html",
    "cover": "./47.jpg",
    "year": "2008",
    "region": "香港",
    "type": "剧集",
    "genre": "奇幻,古装,神话",
    "category": "国产热映",
    "rating": 9.7,
    "description": "一个好彩妹,一个石敢当,两个欢喜冤家踏上搜神之路,却发现神仙都是凡人做的。",
    "tags": [
      "TVB",
      "钟嘉欣",
      "神话改编",
      "单元剧",
      "粤语"
    ]
  },
  {
    "title": "天国与地狱",
    "url": "./movie-798.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "欧美电影",
    "rating": 9.0,
    "description": "热血刑警与冷血连环杀手意外灵魂互换,为了不露馅,刑警必须学着像恶魔一样思考,而杀手则潜伏进警队继续杀人。",
    "tags": [
      "灵魂互换",
      "警察",
      "连环杀手",
      "正义与邪恶"
    ]
  },
  {
    "title": "他乡客",
    "url": "./movie-799.html",
    "cover": "./49.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "上世纪80年代,一个香港家庭移民加拿大,却发现“他乡”从未把他们当作自己人。",
    "tags": [
      "移民",
      "乡愁",
      "家庭",
      "身份"
    ]
  },
  {
    "title": "十二生肖战纪",
    "url": "./movie-800.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画/奇幻/动作",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "十二生肖本是守护人间的战神,但鼠背叛后,其余十一人每隔12年就要轮回一次,失去记忆互相残杀。",
    "tags": [
      "神话改编",
      "生肖",
      "热血",
      "轮回"
    ]
  },
  {
    "title": "玉女怀春",
    "url": "./movie-801.html",
    "cover": "./51.jpg",
    "year": "1967",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/歌舞",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "明朝官家小姐女扮男装去私塾读书,却爱上了隔壁学堂的穷书生。",
    "tags": [
      "邵氏",
      "黄梅调",
      "古典"
    ]
  },
  {
    "title": "心声泪影",
    "url": "./movie-802.html",
    "cover": "./52.jpg",
    "year": "1962",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情,戏曲/越剧,爱情",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "民国初年,歌女被富家少爷欺骗后失明,只能在戏台上唱着自己的悲惨遭遇,等待儿子归来。",
    "tags": [
      "经典戏曲",
      "悲剧",
      "封建礼教"
    ]
  },
  {
    "title": "哥哥与姐姐",
    "url": "./movie-803.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "作为“姐姐”从小被要求让着“哥哥”,直到她发现这个“哥哥”其实是父母当年抛弃了亲女儿后领养的孤儿。",
    "tags": [
      "亲情",
      "二胎",
      "成长",
      "社会议题"
    ]
  },
  {
    "title": "乐园之夜",
    "url": "./movie-804.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑,剧情",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "一座废弃游乐场的鬼屋里,每晚都会传出上世纪八十年代的交谊舞曲。",
    "tags": [
      "游乐园",
      "密闭空间",
      "怪谈",
      "社会派"
    ]
  },
  {
    "title": "千钧一发2003",
    "url": "./movie-805.html",
    "cover": "./55.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "东北小城,退休老汉在垃圾堆捡到一枚日军遗留炸弹,竟被贪财的姘头用来勒索当地暴发户。",
    "tags": [
      "拆弹",
      "东北",
      "绑架",
      "写实",
      "黑色幽默"
    ]
  },
  {
    "title": "闻香识女人",
    "url": "./movie-806.html",
    "cover": "./56.jpg",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "一名穷学生兼职照顾脾气暴躁的盲眼中校,两人却在死亡之旅中相互拯救了对方的灵魂。",
    "tags": [
      "盲人中校",
      "探戈",
      "灵魂救赎",
      "男性情谊",
      "尊严"
    ]
  },
  {
    "title": "神秘病毒",
    "url": "./movie-807.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "英国/美国",
    "type": "剧集",
    "genre": "科幻,惊悚,灾难",
    "category": "欧美电影",
    "rating": 8.4,
    "description": "一种能让“天才”瞬间变成“白痴”的病毒爆发,而“免疫者”全是智商平庸的普通人。",
    "tags": [
      "病毒",
      "基因编辑",
      "道德困境",
      "悬疑"
    ]
  },
  {
    "title": "女孩青春纪事",
    "url": "./movie-808.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/青春",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "一段横跨初中到大学的手机录像,记录了一个普通女孩如何在友谊与背叛中,学会保护自己的刺。",
    "tags": [
      "成长阵痛",
      "校园霸凌",
      "女性友谊"
    ]
  },
  {
    "title": "木更津猫眼 日本系列",
    "url": "./movie-809.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧,悬疑,青春",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "木更津高中“棒球社废柴四人组”白天打棒球,晚上化身“猫眼怪盗”行侠仗义。",
    "tags": [
      "怪盗",
      "高中生",
      "胡闹",
      "热血"
    ]
  },
  {
    "title": "奇迹度假村",
    "url": "./movie-810.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧,奇幻,爱情",
    "category": "欧美电影",
    "rating": 9.4,
    "description": "濒临离婚的夫妻意外住进一家“奇迹度假村”,每间房推开后都是一种“如果当初选了别人”的人生,他们开始怀疑彼此是不是最差的选择。",
    "tags": [
      "婚姻危机",
      "愿望酒店",
      "平行人生",
      "治愈轻喜",
      "反转"
    ]
  },
  {
    "title": "82号古宅",
    "url": "./movie-811.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,惊悚,民俗",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "新娘嫁入豪门古宅,夜夜梦见纸人索命,当她挖开后院时,挖出了三年前自己的棺材。",
    "tags": [
      "鬼宅",
      "纸人",
      "民俗恐怖",
      "民国奇案",
      "密室推理"
    ]
  },
  {
    "title": "我不玩",
    "url": "./movie-812.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "七个玩家参加一个奖金1000万的密室逃脱游戏,却发现“退出”按钮从不存在。",
    "tags": [
      "密室逃脱",
      "真人游戏",
      "反套路",
      "生存"
    ]
  },
  {
    "title": "死神千年血战篇第二季",
    "url": "./movie-813.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画",
    "genre": "动作,奇幻,热血",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "友哈巴赫率领无形帝国再度入侵,死神们觉醒新的卍解,却依然无法阻止尸魂界的覆灭。",
    "tags": [
      "死神",
      "灭却师",
      "决战",
      "卍解"
    ]
  },
  {
    "title": "正港分局",
    "url": "./movie-814.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧/悬疑/犯罪",
    "category": "家庭青春",
    "rating": 8.1,
    "description": "一个只想调职的天龙国警察,被下放到全台湾破案率最低的“正港分局”,却发现这里的离谱案件全是连环计。",
    "tags": [
      "刑警",
      "荒诞喜剧",
      "单元探案",
      "地方民俗"
    ]
  },
  {
    "title": "格罗莫少校:瘟疫医生",
    "url": "./movie-815.html",
    "cover": "./65.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "动作,悬疑",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "圣彼得堡出现了一个自称“瘟疫医生”的私刑者,他用面具净化“有罪”之人,而少校格罗莫却发现凶手用的竟是疫苗。",
    "tags": [
      "超级英雄",
      "侦探",
      "漫画改编",
      "反体制"
    ]
  },
  {
    "title": "惊魂记4",
    "url": "./movie-816.html",
    "cover": "./66.jpg",
    "year": "1990",
    "region": "美国",
    "type": "电视剧",
    "genre": "恐怖,悬疑",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "诺曼·贝茨被假释出狱,娶了妻,过着正常人的生活,直到他发现自己又开始“想妈妈”了。",
    "tags": [
      "经典续集",
      "心理惊悚",
      "诺曼·贝茨"
    ]
  },
  {
    "title": "追梦旅程",
    "url": "./movie-817.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/公路/运动",
    "category": "综艺纪实",
    "rating": 9.3,
    "description": "一位父亲推着患有脑瘫的儿子,完成了长达四千公里的“老爸马拉松”。",
    "tags": [
      "马拉松",
      "残疾人励志",
      "父子同行",
      "梦想"
    ]
  },
  {
    "title": "风水",
    "url": "./movie-818.html",
    "cover": "./68.jpg",
    "year": "1983",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "一名建筑商为求财运,擅自改动祖坟风水,却引来一连串无法解释的死亡事件。",
    "tags": [
      "风水玄学",
      "家族诅咒",
      "乡村悬疑",
      "心理惊悚"
    ]
  },
  {
    "title": "山魂霹雳",
    "url": "./movie-819.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/冒险",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "一支地质勘探队进入深山,发现村民口中的“山神诅咒”,竟与三十年前一桩集体失踪案有关。",
    "tags": [
      "地质勘探",
      "山村",
      "诅咒",
      "连环失踪"
    ]
  },
  {
    "title": "邪恶第四季",
    "url": "./movie-820.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖/悬疑/心理",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "当科学能解释一切超自然现象时,主角团队发现,真正无法解释的邪恶来自他们自己的内心。",
    "tags": [
      "驱魔",
      "科学",
      "信仰危机",
      "心理恐怖"
    ]
  },
  {
    "title": "狗奴人生",
    "url": "./movie-821.html",
    "cover": "./71.jpg",
    "year": "2018",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情、犯罪、黑色幽默",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "一个只会遛狗的中年废柴得罪了黑帮,他唯一能依靠的,是他手里那十二只富婆的宝贝狗。",
    "tags": [
      "铲屎官",
      "意大利黑帮",
      "人不如狗",
      "荒诞"
    ]
  },
  {
    "title": "山林中头一个女人",
    "url": "./movie-822.html",
    "cover": "./72.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、历史、女性",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "1940年寒冬,唯一从日军围剿中逃生的女战士,在无垠雪林中独自求生并寻找部队。",
    "tags": [
      "东北抗联",
      "女性史诗",
      "荒野求生",
      "人性光辉"
    ]
  },
  {
    "title": "无聊的教育",
    "url": "./movie-823.html",
    "cover": "./73.jpg",
    "year": "2009",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/喜剧/教育",
    "category": "国产热映",
    "rating": 8.0,
    "description": "一个智商158的10岁男孩拒绝上学,他在给教育部长的信里说:“学校把天才教成笨蛋,把笨蛋教成疯子。",
    "tags": [
      "反权威",
      "天才少年",
      "学校批判"
    ]
  },
  {
    "title": "飞行大王",
    "url": "./movie-824.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "冒险,传记,运动",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "大萧条时期,一个来自中西部的机械天才从组装破飞机起步,挑战横跨太平洋的飞行纪录。",
    "tags": [
      "航空竞赛",
      "天才成长",
      "1930年代"
    ]
  },
  {
    "title": "恐惧大街3:1666",
    "url": "./movie-825.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖历史",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "恐怖大街的诅咒源头真相揭晓:1666年的女巫其实是被陷害的普通女孩。",
    "tags": [
      "女巫",
      "殖民历史",
      "诅咒起源",
      "血腥",
      "青少年"
    ]
  },
  {
    "title": "柔道场",
    "url": "./movie-826.html",
    "cover": "./76.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "体育励志",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "一群被各自道场扫地出门的“不良”柔道手,集结在破旧道场冲击全国冠军。",
    "tags": [
      "柔道",
      "师徒",
      "失败者联盟"
    ]
  },
  {
    "title": "钢琴师与她的女儿",
    "url": "./movie-827.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "波兰/英国",
    "type": "电影",
    "genre": "剧情/家庭/音乐",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "为了逃离战乱,钢琴大师带着不会说话的女儿流亡,却发现女儿天生拥有绝对音感。",
    "tags": [
      "亲情",
      "创伤",
      "移民",
      "和解"
    ]
  },
  {
    "title": "买凶拍人",
    "url": "./movie-828.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/黑色幽默",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "一个过气杀手接单时遇到一个想当导演的委托人,要求他把杀人过程拍成“有电影感”的短片。",
    "tags": [
      "杀手",
      "导演",
      "网络直播",
      "荒诞"
    ]
  },
  {
    "title": "你觉得我是谁",
    "url": "./movie-829.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/爱情/惊悚",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "50岁女教授在网上假扮年轻女子与情人热恋,却卷入一场无法脱身的致命游戏。",
    "tags": [
      "网络骗局",
      "假身份",
      "中年危机",
      "心理博弈"
    ]
  },
  {
    "title": "画魂缠身",
    "url": "./movie-830.html",
    "cover": "./80.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖、悬疑、心理",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "美术馆新展出一幅无人敢买的古画,每个看过它的人都会在七天后变成画中的“无脸人”。",
    "tags": [
      "诅咒油画",
      "都市怪谈",
      "精神污染",
      "心理惊悚"
    ]
  },
  {
    "title": "南希·德鲁和隐藏的楼梯",
    "url": "./movie-831.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,家庭,冒险",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "少年侦探南希受托调查一座闹鬼庄园,却发现幽灵的指向竟是一起百年谋杀案。",
    "tags": [
      "少女侦探",
      "古宅",
      "灵异",
      "解谜"
    ]
  },
  {
    "title": "夏日乐园2017",
    "url": "./movie-832.html",
    "cover": "./82.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "青春、剧情、成长",
    "category": "动作冒险",
    "rating": 8.1,
    "description": "一座即将关门的老旧游乐园,成了三个少年对抗成人世界规则的最后一个夏天。",
    "tags": [
      "游乐园",
      "暑假",
      "初恋",
      "告别",
      "治愈"
    ]
  },
  {
    "title": "末日崩裂",
    "url": "./movie-833.html",
    "cover": "./83.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/恐怖",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "一种能让人体自我崩裂变异的病毒在城市爆发,一群陌生人被困地下停车场,求生无门。",
    "tags": [
      "丧尸",
      "变异",
      "实验室泄漏",
      "血腥",
      "密室求生"
    ]
  },
  {
    "title": "仙乐军魂",
    "url": "./movie-834.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/奇幻",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "太平公主因一曲琵琶被征召入军,她不知道,这支“仙乐军”的武器是乐器,而敌人来自九天之上。",
    "tags": [
      "音律修仙",
      "铁血柔情",
      "军旅"
    ]
  },
  {
    "title": "风铃",
    "url": "./movie-835.html",
    "cover": "./85.jpg",
    "year": "1992",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "一位独居老人每天听邻居的风铃声,直到风铃突然消失,他才发现自己从未真正听过它。",
    "tags": [
      "老年",
      "孤独",
      "邻里关系",
      "治愈",
      "季节"
    ]
  },
  {
    "title": "出水嫦娥",
    "url": "./movie-836.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "古装,奇幻,爱情",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "大禹治水时从河床挖出一具冰封万年的少女,她自称是月宫沉落前的嫦娥。",
    "tags": [
      "神话新解",
      "水下世界",
      "大禹治水"
    ]
  },
  {
    "title": "山河剑心",
    "url": "./movie-837.html",
    "cover": "./87.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画,武侠,奇幻",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "魔教覆灭十年后,正道魁首与昔日魔教余孽因一把神剑的出世,被迫联手探秘。",
    "tags": [
      "古风",
      "江湖",
      "国漫",
      "双男主"
    ]
  },
  {
    "title": "璀璨情诗",
    "url": "./movie-838.html",
    "cover": "./88.jpg",
    "year": "2009",
    "region": "英国",
    "type": "电影",
    "genre": "爱情,剧情,传记",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "年轻的诗人济慈爱上了邻居芬妮,他穷困潦倒只能用诗句表达爱意,而芬妮用一生珍藏了这些情诗。",
    "tags": [
      "诗人济慈",
      "浪漫主义",
      "绝恋",
      "书信体"
    ]
  },
  {
    "title": "浴火危城",
    "url": "./movie-839.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难/动作",
    "category": "国产热映",
    "rating": 8.7,
    "description": "一场百年一遇的特大地下电缆火灾引爆了城市天然气主干网,整座城市陷入火海,消防员们开始了不可能的任务。",
    "tags": [
      "消防",
      "火灾",
      "英雄主义",
      "城市"
    ]
  },
  {
    "title": "我爱红娘",
    "url": "./movie-840.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情,喜剧",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "台北一家经营了四十年的老牌婚介所面临倒闭,老板娘的女儿接手后,决心用大数据改造“媒婆”行业。",
    "tags": [
      "婚介所",
      "大龄青年",
      "台式幽默",
      "相亲百态"
    ]
  },
  {
    "title": "桃花源怪谈",
    "url": "./movie-841.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "恐怖/悬疑/民俗",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "摄影师回村拍“最美桃花源”,却发现全村人都在等一个“外人”来当祭品——而他是百年来唯一的外人。",
    "tags": [
      "桃花源",
      "邪教",
      "祭品",
      "返乡",
      "民俗恐怖"
    ]
  },
  {
    "title": "萨尔瓦多日记",
    "url": "./movie-842.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情,传记,音乐",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "巴西萨尔瓦多贫民窟的少年靠捡垃圾踢出未来,他的日记记录了从街头到职业球场的十年。",
    "tags": [
      "贫民窟",
      "足球",
      "梦想",
      "真实改编",
      "街头少年"
    ]
  },
  {
    "title": "蒂莫西的奇异生活",
    "url": "./movie-843.html",
    "cover": "./93.jpg",
    "year": "2012",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻,剧情",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "自闭症男孩在后山种下一颗橡果,三天后土里长出一个会说话、会衰老、只有他能看见的老头。",
    "tags": [
      "园艺",
      "精灵",
      "代际和解",
      "童话"
    ]
  },
  {
    "title": "久保同学不放过我",
    "url": "./movie-844.html",
    "cover": "./94.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧/校园",
    "category": "悬疑惊悚",
    "rating": 9.0,
    "description": "年级第一的冰山女神久保同学,每天都用各种奇怪的理由缠着倒数第一的田中同学。",
    "tags": [
      "纯爱",
      "学霸",
      "学渣",
      "甜宠",
      "漫改"
    ]
  },
  {
    "title": "一触即发2024",
    "url": "./movie-845.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/谍战/惊悚",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "拆弹专家陷入同一天的循环,每次他拆掉炸弹,第二天照常“昨天已爆炸”。",
    "tags": [
      "时间循环",
      "拆弹专家",
      "恐怖袭击",
      "反套路",
      "高概念动作"
    ]
  },
  {
    "title": "青色山脉",
    "url": "./movie-846.html",
    "cover": "./96.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "为守护祖辈留下的青色山脉,两代人在开发与保护之间展开了一场没有硝烟的战争。",
    "tags": [
      "乡村",
      "代际冲突",
      "环保",
      "兄弟情",
      "现实主义"
    ]
  },
  {
    "title": "铁甲飞车",
    "url": "./movie-847.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻,动作",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "废土世界,每年一次的死亡飞车赛,胜者获得水源,败者留下铁甲与命。",
    "tags": [
      "废土",
      "改装车",
      "飙车",
      "生存竞赛"
    ]
  },
  {
    "title": "痞子校花变身记",
    "url": "./movie-848.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧,爱情,校园",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "全校第一的乖乖女校花突然失忆,醒来后以为自己是街头大姐大。",
    "tags": [
      "校花",
      "反差萌",
      "学霸",
      "变装",
      "搞笑"
    ]
  },
  {
    "title": "一件幸福的事",
    "url": "./movie-849.html",
    "cover": "./99.jpg",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,家庭,爱情",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "一个女博士从怀孕到为人母,她以为这是幸福,却差点被“幸福”吞噬。",
    "tags": [
      "生育",
      "女性",
      "成长",
      "现实",
      "温情"
    ]
  },
  {
    "title": "川越男子合唱团",
    "url": "./movie-850.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,音乐,青春",
    "category": "国产热映",
    "rating": 9.4,
    "description": "一所没落男校的合唱团,团员包括口吃主唱、绝对音感白痴和一个永远慢半拍的指挥。",
    "tags": [
      "男校",
      "合唱",
      "缺陷与和解"
    ]
  },
  {
    "title": "古宝2018",
    "url": "./movie-851.html",
    "cover": "./101.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,冒险",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "一件从战国古墓出土的玉璧,竟将2018年的考古队员拉入了一场跨越千年的阴谋。",
    "tags": [
      "文物",
      "时空交错",
      "家族秘密"
    ]
  },
  {
    "title": "家族的形式",
    "url": "./movie-852.html",
    "cover": "./102.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/家庭",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "离婚、独身、重组、收养——东京一座公寓楼里,四户人家拼出了“家”的104种样子。",
    "tags": [
      "家庭羁绊",
      "社会议题",
      "温柔",
      "群像",
      "治愈"
    ]
  },
  {
    "title": "精灵高中:惊声尖拍",
    "url": "./movie-853.html",
    "cover": "./103.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/动画/歌舞",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "精灵高中要拍年度招生宣传片,一群怪咖学生决定自己当导演、编剧和主演。",
    "tags": [
      "怪物",
      "校园",
      "音乐剧",
      "女团"
    ]
  },
  {
    "title": "班卓",
    "url": "./movie-854.html",
    "cover": "./104.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,音乐",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "一个在纽约失败的班卓琴手,根据死去祖母的遗物,找到了一张通往西非“音乐之根”的神秘地图。",
    "tags": [
      "音乐人",
      "亲情",
      "寻根",
      "乡村"
    ]
  },
  {
    "title": "家屋风景",
    "url": "./movie-855.html",
    "cover": "./105.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,家庭,文艺",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "一座即将被拆除的祖宅,让散落在世界各地的四代人重聚于此,在废墟之上,他们重新拼凑起了家的记忆与定义。",
    "tags": [
      "乡愁",
      "老屋",
      "拆迁",
      "代际沟通"
    ]
  },
  {
    "title": "黑暗之歌",
    "url": "./movie-856.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "恐怖,民俗,音乐",
    "category": "国产热映",
    "rating": 9.6,
    "description": "一个民谣歌手搬进闹鬼的乡村小屋录制专辑,却发现她的每首“原创”都是百年前失踪者的死亡讯息。",
    "tags": [
      "凯尔特神话",
      "吟游诗人",
      "仪式感",
      "心理恐怖"
    ]
  },
  {
    "title": "叹别离",
    "url": "./movie-857.html",
    "cover": "./107.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装/爱情/权谋",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "她是亡国公主,被献给敌国皇帝和亲,却发现皇帝深爱的正是她战死的同胞姐姐。",
    "tags": [
      "宫墙悲剧",
      "替身文学",
      "宿命"
    ]
  },
  {
    "title": "千面杀人魔",
    "url": "./movie-858.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,惊悚,悬疑",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "FBI侧写师在追捕一名能完美易容的连环杀手时,发现对方正在一步步取代自己的生活。",
    "tags": [
      "易容术",
      "猫鼠游戏",
      "身份窃取"
    ]
  },
  {
    "title": "哈勃时代",
    "url": "./movie-859.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录,科普,历史",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "从“近视眼”到“宇宙之眼”,记录了哈勃望远镜升空三十年来背后的血泪与荣耀。",
    "tags": [
      "太空望远镜",
      "宇宙",
      "NASA",
      "航天飞机"
    ]
  },
  {
    "title": "尸骨工场",
    "url": "./movie-860.html",
    "cover": "./110.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "科幻悬疑",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "在这个专门回收“报废人类”的地下工厂里,他发现自己就是下一个待拆解的原材料。",
    "tags": [
      "赛博朋克",
      "伦理",
      "器官",
      "黑市",
      "克隆"
    ]
  },
  {
    "title": "门廊上的礼物",
    "url": "./movie-861.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "公寓楼的门廊上每天都会出现一份礼物,住户轮流取走,但送礼人永远不写名字。",
    "tags": [
      "邻里",
      "秘密",
      "多层叙事",
      "人性"
    ]
  },
  {
    "title": "过往",
    "url": "./movie-862.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "母亲去世后,兄妹三人回老宅整理遗物,发现每一件物品上都贴着一张纸条,写着他们早已忘记的童年真相。",
    "tags": [
      "原生家庭",
      "记忆闪回",
      "和解"
    ]
  },
  {
    "title": "金石良缘粤语",
    "url": "./movie-863.html",
    "cover": "./113.jpg",
    "year": "2008",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情/家庭/商战",
    "category": "最新推荐",
    "rating": 9.9,
    "description": "一块传世翡翠引发两代珠宝世家的爱恨纠葛,真假千金归位,金石为开还是玉石俱焚?",
    "tags": [
      "粤语原声",
      "珠宝行业",
      "豪门恩怨",
      "兄妹争产",
      "行业剧"
    ]
  },
  {
    "title": "消失那天爱上你",
    "url": "./movie-864.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/奇幻",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "婚礼当天新娘突然消失,新郎在寻找她的过程中,发现自己每天都在重复“消失那天”。",
    "tags": [
      "失忆",
      "时间循环",
      "台式小清新"
    ]
  },
  {
    "title": "美丽至极",
    "url": "./movie-865.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,女性",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "一个不符合“标准美”的胖女孩意外签约顶级模特公司,但她发现公司的真实目的,是把她作为“丑陋觉醒运动”的祭品。",
    "tags": [
      "模特行业",
      "身体羞辱",
      "母女关系",
      "自我接纳"
    ]
  },
  {
    "title": "格里芬历险记",
    "url": "./movie-866.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画/奇幻/冒险",
    "category": "动画奇幻",
    "rating": 8.6,
    "description": "被遗弃的混血狮鹫格里芬被少年养大,却因血统不纯被逐出天空之城。",
    "tags": [
      "狮鹫",
      "魔法世界",
      "少年",
      "成长",
      "合家欢"
    ]
  },
  {
    "title": "爱的怪物论",
    "url": "./movie-867.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情/奇幻/悬疑",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "每集一种都市传说怪物,来比喻一种畸形的爱:控制、依赖、嫉妒与自我毁灭。",
    "tags": [
      "都市传说",
      "反恋爱脑",
      "怪物隐喻",
      "单元剧"
    ]
  },
  {
    "title": "双子星大冒险国语",
    "url": "./movie-868.html",
    "cover": "./118.jpg",
    "year": "2016",
    "region": "中国大陆/美国",
    "type": "电影",
    "genre": "动画/冒险/喜剧",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "性格迥异的双胞胎兄妹意外被传送到双子星,必须拯救被暗物质吞噬的星球才能回家。",
    "tags": [
      "双胞胎",
      "星际冒险",
      "国语配音",
      "成长"
    ]
  },
  {
    "title": "爱上库珀一家",
    "url": "./movie-869.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/爱情/家庭",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "为骗取遗产假意爱上富豪长子,却发现自己真正心动的是那个被家族唾弃的叛逆小儿子。",
    "tags": [
      "遗产陷阱",
      "假戏真做",
      "家族秘密"
    ]
  },
  {
    "title": "轮回:疯狂时代",
    "url": "./movie-870.html",
    "cover": "./120.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "1000人被困时间循环一年,第365天循环重启,但所有人都记得之前每一次死亡。",
    "tags": [
      "时间循环",
      "社会实验",
      "人性崩塌"
    ]
  },
  {
    "title": "痴呆",
    "url": "./movie-871.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "心理恐怖/剧情",
    "category": "综艺纪实",
    "rating": 9.1,
    "description": "一位阿兹海默症患者的记忆里,所有照顾他的家人,慢慢都变成了想杀他的陌生人。",
    "tags": [
      "阿兹海默",
      "主观视角",
      "记忆崩塌",
      "家庭惊悚"
    ]
  },
  {
    "title": "小麻烦",
    "url": "./movie-872.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭喜剧",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "五岁“小麻烦”意外闯入单身金牌调解师的生活,把客户搞得鸡飞狗跳,却意外化解了所有人的心结。",
    "tags": [
      "萌娃",
      "职场",
      "反转",
      "治愈",
      "单元剧"
    ]
  },
  {
    "title": "不能犯规的游戏2021",
    "url": "./movie-873.html",
    "cover": "./123.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑、冒险",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "八名悬疑小说家被关进密室,必须按照规则“活到天亮”,犯规者会触发书中机关惨死。",
    "tags": [
      "无限流",
      "密室逃脱",
      "小说改编"
    ]
  },
  {
    "title": "动感战士",
    "url": "./movie-874.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作科幻",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "一个外卖小哥穿上报废的军用外骨骼机甲,在晚高峰的立交桥上单挑跨国雇佣兵。",
    "tags": [
      "外骨骼机甲",
      "极限运动",
      "反恐",
      "青年热血"
    ]
  },
  {
    "title": "跨国追逃",
    "url": "./movie-875.html",
    "cover": "./125.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "刑侦,犯罪,悬疑",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "红色通缉令下,经侦警察在没有执法权的海外与狡猾“狐狸”展开致命周旋。",
    "tags": [
      "红通令",
      "海外猎狐",
      "经侦大案",
      "猫鼠游戏"
    ]
  },
  {
    "title": "攻击13号警局",
    "url": "./movie-876.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "即将关闭的偏远警局,最后三名警察被全城黑帮围攻,他们要撑到天亮。",
    "tags": [
      "警局",
      "围攻",
      "黑帮",
      "密室"
    ]
  },
  {
    "title": "机器肉鸡第三季",
    "url": "./movie-877.html",
    "cover": "./127.jpg",
    "year": "2007",
    "region": "美国",
    "type": "剧集",
    "genre": "动画喜剧",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "脑洞大开的定格动画,疯狂恶搞流行文化,每集都是一场疯狂解构盛宴。",
    "tags": [
      "定格动画",
      "恶搞",
      "玩梗",
      "无厘头",
      "成人向"
    ]
  },
  {
    "title": "亲爱的阮小枫",
    "url": "./movie-878.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情、悬疑、青春",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "女主在整理外婆遗物时,发现外婆年轻时与一个叫阮小枫的笔友通信80年,但全家没有人听说过这个名字。",
    "tags": [
      "笔友",
      "书信",
      "校园",
      "时间错位",
      "替身"
    ]
  },
  {
    "title": "追星星的人第三季",
    "url": "./movie-879.html",
    "cover": "./129.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/科普",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "五位明星与一位自闭症天文学少年,在暗夜公园找一颗消失的脉冲星。",
    "tags": [
      "观星",
      "治愈",
      "慢综艺",
      "素人科学家"
    ]
  },
  {
    "title": "戏精自救攻略",
    "url": "./movie-880.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集(短剧)",
    "genre": "喜剧,奇幻,穿越",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "十八线龙套穿进自己最烂的一部宫斗剧,必须靠浮夸演技活到最后才能回家。",
    "tags": [
      "穿书",
      "横店",
      "演技",
      "沙雕"
    ]
  },
  {
    "title": "黑金地的女人",
    "url": "./movie-881.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,年代",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "八十年代煤矿区,一个被丈夫抛弃的女人带着三个孩子,从捡煤渣开始,一步步建立起自己的运输帝国。",
    "tags": [
      "煤炭",
      "女性",
      "改革开放",
      "创业",
      "坚韧"
    ]
  },
  {
    "title": "灵异女仆第四季",
    "url": "./movie-882.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,恐怖",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "死去的孩子回来了,但回来的不仅是孩子,还有那个房子里被封印了千年的邪神。",
    "tags": [
      "终极季",
      "神秘主义",
      "宗教隐喻",
      "心理恐怖",
      "反转"
    ]
  },
  {
    "title": "使徒行者粤语",
    "url": "./movie-883.html",
    "cover": "./133.jpg",
    "year": "2014",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑/犯罪/动作",
    "category": "综艺纪实",
    "rating": 8.5,
    "description": "五个失联卧底,一个神秘组织,用命在黑白之间走钢丝。",
    "tags": [
      "卧底 警匪 兄弟情 粤语原声 反转"
    ]
  },
  {
    "title": "笔仙怪谈",
    "url": "./movie-884.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖,悬疑,惊悚",
    "category": "亚洲精选",
    "rating": 9.2,
    "description": "女生宿舍流行请笔仙,但没人知道,被请来的“仙”会记住每一个参与者的真名。",
    "tags": [
      "校园怪谈",
      "心理恐惧",
      "反转",
      "规则类怪谈"
    ]
  },
  {
    "title": "红光",
    "url": "./movie-885.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,科幻",
    "category": "最新推荐",
    "rating": 9.0,
    "description": "一个偏远小镇每年同一时刻会亮起神秘的“红光”,之后全镇人会丢失这一天的记忆,唯独一个外来的记者记得一切。",
    "tags": [
      "超自然现象",
      "小镇",
      "集体失忆",
      "真相"
    ]
  },
  {
    "title": "桃色陷阱",
    "url": "./movie-886.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚/情色/犯罪",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "一名落魄保险调查员接到高额案件:一个富豪的年轻妻子被怀疑骗保,他越查越发现自己掉进了色欲与谎言交织的漩涡。",
    "tags": [
      "蛇蝎美人",
      "骗局反转",
      "港产片",
      "悬疑",
      "多线叙事"
    ]
  },
  {
    "title": "福禄寿训练学院",
    "url": "./movie-887.html",
    "cover": "./137.jpg",
    "year": "2009",
    "region": "香港",
    "type": "剧集",
    "genre": "喜剧、励志、职场",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "三个失业中年冒充“人生导师”开办了一家骗钱的成功学学院,没想到所有歪打正着的教学方法居然真的有效。",
    "tags": [
      "港式无厘头",
      "职场",
      "草根",
      "师徒"
    ]
  },
  {
    "title": "男子高中生的日常",
    "url": "./movie-888.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "genre": "喜剧/校园/青春",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "在女生稀缺的某个乡下男子高中,一群无聊的高中生为了“引起注意”,上演了一出出令人捧腹的沙雕日常。",
    "tags": [
      "无厘头",
      "日常向",
      "男高搞笑",
      "吐槽役"
    ]
  },
  {
    "title": "救世超能:永无止境",
    "url": "./movie-889.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻动作",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "当救世主的能力不再增长,面对吞噬一切维度的虚空怪兽,他唯一的武器是“承认失败”。",
    "tags": [
      "超级英雄",
      "量子力学",
      "平行宇宙",
      "机械降神"
    ]
  },
  {
    "title": "失落帝国之七星诡镜",
    "url": "./movie-890.html",
    "cover": "./140.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻/悬疑/古装",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "一面据说能照见平行时空的青铜古镜碎裂成七片,引发不同朝代亡魂争夺皇权的混战。",
    "tags": [
      "王朝",
      "铜镜",
      "时空裂缝",
      "寻宝"
    ]
  },
  {
    "title": "幸福从天而降2014",
    "url": "./movie-891.html",
    "cover": "./141.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情,偶像",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "快递员救下坠楼的白富美,自己却失忆了,白富美只好假扮他女友送快递还债。",
    "tags": [
      "车祸",
      "失忆",
      "豪门",
      "天降"
    ]
  },
  {
    "title": "忠奸老实人粤语",
    "url": "./movie-892.html",
    "cover": "./142.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "剧集",
    "genre": "警匪、卧底、剧情",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "老实人警察卧底三年,回来发现自己比黑社会还像黑社会。",
    "tags": [
      "无间道前传风格",
      "兄弟情",
      "粤语原声"
    ]
  },
  {
    "title": "纳瓦荷",
    "url": "./movie-893.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "西部",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "纳瓦荷族最后一个“风语者”的孙女,用祖母留下的密码,向杀害全族的白人军官发起通灵复仇。",
    "tags": [
      "原住民",
      "复仇",
      "灵性"
    ]
  },
  {
    "title": "冒险兄弟第三季",
    "url": "./movie-894.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动画,喜剧,动作",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "两兄弟发现父亲留下的“遗产”竟是一张通往平行宇宙垃圾场的单程票。",
    "tags": [
      "冒险",
      "兄弟情",
      "黑色幽默",
      "科幻"
    ]
  },
  {
    "title": "他在窥视你",
    "url": "./movie-895.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑恐怖",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "女主搬进理想公寓后发现,整栋楼的每个房间都在监视着她,包括她身边的男友。",
    "tags": [
      "偷窥",
      "邻居",
      "心理压迫",
      "反转",
      "公寓惊魂"
    ]
  },
  {
    "title": "三个月",
    "url": "./movie-896.html",
    "cover": "./146.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "一个高中毕业的男孩在等待艾滋病检测结果的三个月里,遇到了同样在等待结果的男孩,并展开了荒诞的倒数恋爱。",
    "tags": [
      "青春",
      "艾滋病",
      "恐艾",
      "成长"
    ]
  },
  {
    "title": "神秘博士第六季",
    "url": "./movie-897.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "科幻/冒险",
    "category": "国产热映",
    "rating": 9.4,
    "description": "新一任博士重生为叛逆少女,发现时间裂缝中囚禁着所有被遗忘的历史。",
    "tags": [
      "时间旅行",
      "外星人",
      "TARDIS",
      "重启"
    ]
  },
  {
    "title": "新神榜:哪吒重生",
    "url": "./movie-898.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "中国",
    "type": "动画电影",
    "genre": "动作,奇幻",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "三千年后,哪吒的元神转世成了一个热衷机车的朋克青年,而东海则变成了一座赛博都市。",
    "tags": [
      "赛博朋克",
      "神话新说",
      "机车",
      "热血",
      "封神宇宙"
    ]
  },
  {
    "title": "霸爱总裁",
    "url": "./movie-899.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/剧情",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "为了救患病的妹妹,穷苦女孩成为冷漠总裁的“协议恋人”,却发现自己长得像他死去的前妻。",
    "tags": [
      "商战",
      "替身文学",
      "失忆",
      "豪门恩怨"
    ]
  },
  {
    "title": "史酷比和尼斯小怪",
    "url": "./movie-900.html",
    "cover": "./150.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧,冒险",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "史酷比帮去苏格兰度假,在尼斯湖发现小怪不是水怪,而是一只穿了玩偶服的海狮。",
    "tags": [
      "侦探",
      "怪兽",
      "苏格兰",
      "搞笑"
    ]
  },
  {
    "title": "绿箭侠第四季",
    "url": "./movie-901.html",
    "cover": "./1.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作",
    "category": "国产热映",
    "rating": 9.2,
    "description": "绿箭侠奥利弗·奎恩决定以星城市长候选人身份公开参选,用政治手段打击犯罪。",
    "tags": [
      "DC漫画",
      "超级英雄",
      "黑暗"
    ]
  },
  {
    "title": "伯爵夫人格拉茨",
    "url": "./movie-902.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "奥地利/德国",
    "type": "电影",
    "genre": "剧情/历史/悬疑",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "格拉茨城堡的伯爵夫人离奇失踪,年轻女仆在搜寻中揭开了家族百年的血腥契约。",
    "tags": [
      "庄园秘史",
      "女性复仇",
      "哥特美学"
    ]
  },
  {
    "title": "陌生人2",
    "url": "./movie-903.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "一场APP随机匹配的“陌生人游戏”,六人被困密室,却发现其中一人是当年灭门案的真凶。",
    "tags": [
      "密室",
      "心理战",
      "身份反转"
    ]
  },
  {
    "title": "赤裸特工",
    "url": "./movie-904.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作犯罪",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "三位被抹去过去的女孩,用身体与智慧成为亚洲最致命的暗杀工具。",
    "tags": [
      "女特工",
      "易容",
      "近身格斗",
      "亚洲风云"
    ]
  },
  {
    "title": "美国狼人在巴黎",
    "url": "./movie-905.html",
    "cover": "./5.jpg",
    "year": "1997",
    "region": "美国/法国",
    "type": "电影",
    "genre": "恐怖/喜剧/爱情",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "美国游客在巴黎被狼人咬伤,他发现只有真爱之吻才能打破诅咒,而真爱是一个专杀狼人的女猎人。",
    "tags": [
      "狼人",
      "巴黎",
      "浪漫",
      "血腥",
      "变形"
    ]
  },
  {
    "title": "越夜越宵愁",
    "url": "./movie-906.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "剧集",
    "genre": "剧情,美食,都市",
    "category": "悬疑惊悚",
    "rating": 8.5,
    "description": "台北夜市一家只在凌晨营业的炒饭摊,每碗炒饭都会让客人看到自己最想念却再也见不到的人。",
    "tags": [
      "深夜食堂",
      "夜市",
      "人生故事",
      "单元剧",
      "治愈"
    ]
  },
  {
    "title": "夺命巨鳄",
    "url": "./movie-907.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "美国/澳大利亚",
    "type": "电影",
    "genre": "惊悚/灾难/冒险",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "一群生态游客在南美沼泽遭遇一头因化学污染而变异为嗜血怪物的史前巨鳄。",
    "tags": [
      "巨型生物",
      "荒野求生",
      "血腥猎杀",
      "孤岛逃生",
      "生态恐怖"
    ]
  },
  {
    "title": "首选列表",
    "url": "./movie-908.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "常春藤名校的备选名单上,每消失一个名字,现实中就死一个人。",
    "tags": [
      "精英教育",
      "谋杀",
      "阶层"
    ]
  },
  {
    "title": "东四十条",
    "url": "./movie-909.html",
    "cover": "./9.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "北京地铁2号线的东四十条站,每晚最后一班车会多停一站,开往一个不存在的站台。",
    "tags": [
      "地铁",
      "都市传说",
      "平行空间",
      "失踪案"
    ]
  },
  {
    "title": "爱,死亡和机器人第三季",
    "url": "./movie-910.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/动画/奇幻/恐怖",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "九个全新短片,从深海巨兽到电子幽灵,再次用疯狂的想象力撕开现实的表皮。",
    "tags": [
      "短片集",
      "赛博朋克",
      "克苏鲁",
      "意识上传",
      "末世"
    ]
  },
  {
    "title": "夏洛特的网",
    "url": "./movie-911.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画,家庭,奇幻",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "一只将要被做成熏肉的小猪,和一只老蜘蛛约定:只要蜘蛛在网上织出奇迹,就能救它的命。",
    "tags": [
      "经典改编",
      "动物友情",
      "生命教育"
    ]
  },
  {
    "title": "浴火新娘",
    "url": "./movie-912.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖,爱情",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "婚礼当天被新郎灭门的新娘,身穿血染的婚纱从火化炉中爬出,挨个寄出婚礼请柬。",
    "tags": [
      "鬼新娘",
      "泰式巫蛊",
      "复仇",
      "嫁衣",
      "民俗"
    ]
  },
  {
    "title": "三时三餐渔村篇第六季",
    "url": "./movie-913.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀",
    "category": "国产热映",
    "rating": 8.5,
    "description": "三兄弟重回海岛,面对因气候变暖而消失的渔获,他们被迫转型当起了“海岛农民”。",
    "tags": [
      "慢生活",
      "海岛",
      "自给自足",
      "老友记"
    ]
  },
  {
    "title": "卓雅",
    "url": "./movie-914.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "战争,剧情,历史,传记",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "年仅18岁的苏联女游击队员卓雅,在被德军俘虏后,用生命诠释了何为不屈与信仰。",
    "tags": [
      "二战",
      "苏联女英雄",
      "游击战",
      "爱国主义",
      "真实事件"
    ]
  },
  {
    "title": "昭和元禄落语心中",
    "url": "./movie-915.html",
    "cover": "./15.jpg",
    "year": "2016",
    "region": "日本",
    "type": "动漫",
    "genre": "剧情,历史,艺术",
    "category": "国产热映",
    "rating": 9.1,
    "description": "一名出狱的混混拜入昭和最后的大师门下学习落语,只为赎罪,却意外揭开了师父与同门师兄之间长达半世纪的禁忌之恋。",
    "tags": [
      "落语",
      "时代变迁",
      "师徒虐恋"
    ]
  },
  {
    "title": "未完成的牵挂",
    "url": "./movie-916.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/家庭/社会",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "患有阿尔茨海默症的爷爷忘记了所有家人,却每天都在画一幅未完成的画——那是他被拐卖的儿子最后的样子。",
    "tags": [
      "阿尔茨海默症",
      "三代和解",
      "乡土中国",
      "遗忘与铭记"
    ]
  },
  {
    "title": "灿烂的风和海",
    "url": "./movie-917.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "两个各自背负婚姻伤痛的陌生人,在台风将至的涠洲岛上相遇了三天。",
    "tags": [
      "海岛",
      "疗愈",
      "中年爱情",
      "自我和解"
    ]
  },
  {
    "title": "最终联赛",
    "url": "./movie-918.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作,奇幻,运动",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "当全球最火的电竞游戏真的会吞噬选手灵魂,败者将被抹除存在。",
    "tags": [
      "电竞",
      "超能力",
      "团队",
      "热血",
      "阴谋"
    ]
  },
  {
    "title": "黑猩猩的世界",
    "url": "./movie-919.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "英国",
    "type": "纪录片",
    "genre": "自然/纪录",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "历时五年跟拍,记录了一个黑猩猩族群从分裂、内战到重新统一的全过程,堪比《黑帮家族》。",
    "tags": [
      "野生动物",
      "非洲",
      "族群",
      "生存"
    ]
  },
  {
    "title": "寻访千利休",
    "url": "./movie-920.html",
    "cover": "./20.jpg",
    "year": "2013",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/传记/历史",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "当权倾天下的太阁问茶道大师千利休为何不肯低头时,利休回答:我只向美低头,不向权力低头。",
    "tags": [
      "茶道",
      "美学",
      "战国"
    ]
  },
  {
    "title": "霸王艳后",
    "url": "./movie-921.html",
    "cover": "./21.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色/历史",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "改编自野史,讲述了一位亡国公主如何利用美貌与权谋,在后宫和朝堂上掀起一场腥风血雨。",
    "tags": [
      "古装艳情",
      "野史改编",
      "邵氏风月"
    ]
  },
  {
    "title": "三勇士在遥远的海岸",
    "url": "./movie-922.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "战争,剧情",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "越战泥潭中,三名被抛弃的韩国士兵必须在北越游击队、猛兽和内心的良知之间杀出一条血路。",
    "tags": [
      "越南战争",
      "人性",
      "牺牲",
      "历史反思"
    ]
  },
  {
    "title": "随心所欲的五月",
    "url": "./movie-923.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/历史/战争",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "1940年五月,一个德国犹太裔小女孩和她的法国养母,在德军入侵的混乱中骑着自行车穿越半个法国,只为赶上一艘去往英国的船。",
    "tags": [
      "二战",
      "德占法国",
      "逃亡之路",
      "母女情",
      "敦刻尔克"
    ]
  },
  {
    "title": "小泳者",
    "url": "./movie-924.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/运动/家庭",
    "category": "亚洲精选",
    "rating": 9.2,
    "description": "一个从未赢过比赛的业余游泳爱好者,为了保住小镇唯一的公共泳池,决定挑战横渡英吉利海峡。",
    "tags": [
      "励志",
      "业余游泳",
      "小镇情怀",
      "法式幽默"
    ]
  },
  {
    "title": "小鬼警察",
    "url": "./movie-925.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动作,家庭",
    "category": "欧美电影",
    "rating": 9.0,
    "description": "一个卧底警察被实验药剂缩成 8 岁小孩,只能开着玩具车追毒贩。",
    "tags": [
      "变小",
      "警匪",
      "儿童",
      "追车戏"
    ]
  },
  {
    "title": "入侵者2024",
    "url": "./movie-926.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚,悬疑",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "外星人入侵地球,一家六口躲进地下室,却发现入侵者来自他们自己的记忆。",
    "tags": [
      "外星入侵",
      "心理恐怖",
      "密室",
      "反套路",
      "反转"
    ]
  },
  {
    "title": "舌尖上的心跳",
    "url": "./movie-927.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,美食",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "米其林女厨师遇到电竞冠军男神,两人从互相嫌弃到联手开餐厅,心跳与舌尖同时炸裂。",
    "tags": [
      "厨艺",
      "电竞",
      "跨圈恋爱",
      "甜宠"
    ]
  },
  {
    "title": "吉姆·加菲根:喜剧怪兽",
    "url": "./movie-928.html",
    "cover": "./28.jpg",
    "year": "2026",
    "region": "美国",
    "type": "综艺/脱口秀",
    "genre": "单口喜剧/奇幻",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "喜剧演员吉姆在舞台上被一只“怪兽”吞噬,每讲一个段子就吐出一个观众的秘密。",
    "tags": [
      "实验喜剧",
      "互动特辑",
      "观众选择",
      "AI生成"
    ]
  },
  {
    "title": "爱情开花的季节",
    "url": "./movie-929.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "爱情、剧情、家庭",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "为了拯救家乡即将被拆迁的百年梨园,北漂失败的女设计师被迫与当年不告而别的前男友联手,却意外重燃爱火。",
    "tags": [
      "返乡",
      "青梅竹马",
      "乡村振兴",
      "梨花"
    ]
  },
  {
    "title": "阿拉丁和神灯",
    "url": "./movie-930.html",
    "cover": "./30.jpg",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/奇幻/冒险",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "一个巴黎街头混混捡到了神灯,许愿成为阿里王子,却发现童话里的公主是个难缠的女权主义者。",
    "tags": [
      "恶搞喜剧",
      "法国幽默",
      "现代改编",
      "穿越元素"
    ]
  },
  {
    "title": "功夫熊猫:命运之爪第一季",
    "url": "./movie-931.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动画动作喜剧",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "神龙大侠阿宝退隐后,全世界的动物都想成为下一任传人,一只笨手笨脚的四川小熊猫意外捡到了“命运之爪”。",
    "tags": [
      "国宝",
      "新英雄",
      "武术",
      "寻找传人"
    ]
  },
  {
    "title": "虚拟实境死亡游戏",
    "url": "./movie-932.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "日本/韩国",
    "type": "剧集",
    "genre": "科幻/惊悚",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "一款VR游戏里死亡会导致现实脑死亡,十万玩家被困,只有一人知道这不是游戏故障。",
    "tags": [
      "VR游戏",
      "真人死亡",
      "大逃杀",
      "黑客",
      "无限流"
    ]
  },
  {
    "title": "新扎老师",
    "url": "./movie-933.html",
    "cover": "./33.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧/校园",
    "category": "国产热映",
    "rating": 8.4,
    "description": "黑帮大佬的卧底小弟为了任务去中学当老师,结果发现教书比砍人还难。",
    "tags": [
      "职场菜鸟",
      "问题学生",
      "香港教育",
      "热血教师"
    ]
  },
  {
    "title": "命运之夜剧场版",
    "url": "./movie-934.html",
    "cover": "./34.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "动画,奇幻,动作",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "在另一条时间线,卫宫士郎放弃理想成为冷酷的“正义之恶”,与远坂凛开启最绝望的圣杯之战。",
    "tags": [
      "圣杯战争",
      "平行世界",
      "黑暗",
      "打斗"
    ]
  },
  {
    "title": "震撼真相",
    "url": "./movie-935.html",
    "cover": "./35.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "政治惊悚",
    "category": "国产热映",
    "rating": 9.4,
    "description": "一份被军方封存七十年的报告意外曝光,揭露了美国史上最大规模的战争谎言。",
    "tags": [
      "新闻调查",
      "五角大楼",
      "吹哨人",
      "真实改编"
    ]
  },
  {
    "title": "印第安纳的蒙罗维亚",
    "url": "./movie-936.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/悬疑/西部",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "一座名叫蒙罗维亚的美国中西部小镇,表面宁静祥和,地底下却埋藏着数十年的血腥秘密。",
    "tags": [
      "中西部的哥特",
      "小镇",
      "秘密",
      "返乡",
      "冷峻"
    ]
  },
  {
    "title": "美国骗局",
    "url": "./movie-937.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,剧情,传记",
    "category": "港台佳片",
    "rating": 9.4,
    "description": "FBI史上最大钓鱼行动:一个骗术天才假装要卖核弹给恐怖分子,结果差点把FBI局长也骗进去了。",
    "tags": [
      "诈骗",
      "政治",
      "真实改编",
      "智商博弈"
    ]
  },
  {
    "title": "小镇双雄",
    "url": "./movie-938.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/犯罪/剧情",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "一个北方小镇出了两位高考状元,十年后,一个是刑警卫东,一个是嫌疑犯高健。",
    "tags": [
      "双男主",
      "小镇悬疑",
      "经济犯罪",
      "兄弟反目"
    ]
  },
  {
    "title": "女人不坏,男人不爱",
    "url": "./movie-939.html",
    "cover": "./39.jpg",
    "year": "2012",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情喜剧",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "一个“坏”女人设下爱情骗局,却意外落入了目标真诚的陷阱。",
    "tags": [
      "都市",
      "情斗",
      "职场",
      "反转"
    ]
  },
  {
    "title": "新手姐妹的双人餐桌",
    "url": "./movie-940.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "genre": "动画/日常/美食",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "因父母再婚成为姐妹的两位少女,从零开始学做饭,用美食缝补彼此心灵的距离。",
    "tags": [
      "重组家庭",
      "治愈",
      "姐妹",
      "料理",
      "温馨"
    ]
  },
  {
    "title": "绝密使命2021",
    "url": "./movie-941.html",
    "cover": "./41.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战/历史/剧情",
    "category": "喜剧爱情",
    "rating": 9.8,
    "description": "改编自真实历史,讲述1929年至1934年间,一条连接上海与中央苏区的绝密交通线上,无名英雄们用生命传递情报的故事。",
    "tags": [
      "红色",
      "交通线",
      "真实改编",
      "信仰"
    ]
  },
  {
    "title": "大选投票",
    "url": "./movie-942.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "政治/惊悚",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "一名政治新星的竞选团队发现,只要上传投票人的“秘密”,选票数字就会异常增长,一场数字恶魔游戏就此开始。",
    "tags": [
      "选举",
      "黑幕",
      "操控",
      "权力"
    ]
  },
  {
    "title": "星与翼的悖论",
    "url": "./movie-943.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻/机战",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "王牌飞行员意外坠入平行宇宙,发现自己所在的阵营和所有牺牲的战友在另一个世界全是敌人。",
    "tags": [
      "太空歌剧",
      "平行宇宙",
      "人机共生",
      "哲学思辨"
    ]
  },
  {
    "title": "致命建议",
    "url": "./movie-944.html",
    "cover": "./44.jpg",
    "year": "1997",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/悬疑/犯罪",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "上市公司CEO听从了美女顾问的建议,一夜暴富后发现那竟是妻离子散的毁灭开局。",
    "tags": [
      "心理操控",
      "蛇蝎美女",
      "金融陷阱"
    ]
  },
  {
    "title": "赛车生涯",
    "url": "./movie-945.html",
    "cover": "./45.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/运动/传记",
    "category": "港台佳片",
    "rating": 8.4,
    "description": "一个没钱没势的卡丁车少年,凭借在游戏厅练习的手速,闯进了世界顶级的F1赛车学院。",
    "tags": [
      "赛车",
      "父子",
      "励志",
      "真实改编"
    ]
  },
  {
    "title": "爱是自私",
    "url": "./movie-946.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "自私的天才钢琴家为了事业抛弃恋人,多年后却在台下看到了对方的葬礼。",
    "tags": [
      "同志",
      "自我认同",
      "牺牲",
      "虐心"
    ]
  },
  {
    "title": "奶站风波",
    "url": "./movie-947.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "一个普通的奶站收奶员发现村里的牛奶指标异常,调查后竟牵扯出一条庞大的毒奶粉利益链。",
    "tags": [
      "农村",
      "食品安全",
      "小人物抗争",
      "黑心商人",
      "现实主义"
    ]
  },
  {
    "title": "看见缘分的少女",
    "url": "./movie-948.html",
    "cover": "./48.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻、爱情、喜剧",
    "category": "喜剧爱情",
    "rating": 9.9,
    "description": "女主能看到人与人之间的缘分线,却发现自己和冷面上司之间是一条死结。",
    "tags": [
      "超能力",
      "命中注定",
      "治愈系"
    ]
  },
  {
    "title": "爱在猫咪疗愈时",
    "url": "./movie-949.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "治愈,生活,喜剧",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "一个拒绝与人交流的社恐,被迫接手了一家濒临倒闭的猫咪咖啡馆。",
    "tags": [
      "猫咪",
      "咖啡馆",
      "心理疗愈",
      "群像剧",
      "温暖"
    ]
  },
  {
    "title": "魔鬼之路",
    "url": "./movie-950.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "category": "综艺纪实",
    "rating": 9.3,
    "description": "为救病重女儿,一位虔诚教徒不惜踏上传闻中“魔鬼铺就”的走私之路,却发现真正的恶魔来自身后。",
    "tags": [
      "公路片",
      "心理惊悚",
      "复仇",
      "荒漠",
      "道德困境"
    ]
  },
  {
    "title": "天机道之侠肝义胆",
    "url": "./movie-951.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/武侠/悬疑",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "天机阁是江湖中掌握所有秘密的情报机构,一个初出茅庐的少年意外继承了阁主之位,要面对的是整个武林的围剿。",
    "tags": [
      "推理解谜",
      "江湖门派",
      "天机阁",
      "少侠成长"
    ]
  },
  {
    "title": "夏威夷大海战",
    "url": "./movie-952.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "战争/历史/动作",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "1942年,珍珠港事件后日军企图攻占夏威夷,美军在劣势航母兵力下进行惊天豪赌。",
    "tags": [
      "太平洋战争",
      "航母",
      "海空大战",
      "真实改编",
      "战术博弈"
    ]
  },
  {
    "title": "千鹤先生",
    "url": "./movie-953.html",
    "cover": "./53.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、惊悚",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "民国湘西,一个乡村道士接到徒弟的死讯,前往收尸时发现尸体上的符咒全是反的。",
    "tags": [
      "道士",
      "民俗怪谈",
      "湘西",
      "民国"
    ]
  },
  {
    "title": "姜戈与姜戈",
    "url": "./movie-954.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "意大利/美国",
    "type": "电影",
    "genre": "西部,动作,喜剧",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "两个都叫姜戈的传奇赏金猎人被迫组队,护送一个装满金币的棺材横穿沙漠,却发现里面躺着活人。",
    "tags": [
      "双雄",
      "通心粉西部片",
      "致敬",
      "赏金猎人"
    ]
  },
  {
    "title": "节奏组",
    "url": "./movie-955.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "动作,惊悚",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "她醒来时枕边放着一把枪和一张纸条:“杀了那个冒牌货,包括你自己。",
    "tags": [
      "特工",
      "失忆",
      "双面间谍"
    ]
  },
  {
    "title": "空中之城",
    "url": "./movie-956.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "法国/中国",
    "type": "电影",
    "genre": "科幻,爱情,冒险",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "地面被毒雾覆盖,人类最后的幸存者在云层上的空中之城,靠贩卖“梦”活着。",
    "tags": [
      "天空之城",
      "基因锁",
      "反重力石",
      "蒸汽朋克"
    ]
  },
  {
    "title": "再见少女团",
    "url": "./movie-957.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情、音乐",
    "category": "国产热映",
    "rating": 9.5,
    "description": "一个地下女团宣布解散,在最后30天里,成员们开始互相揭发当年的霸凌内幕。",
    "tags": [
      "偶像",
      "解散",
      "成长",
      "纪录片风格",
      "友情"
    ]
  },
  {
    "title": "30枚银币第一季",
    "url": "./movie-958.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "恐怖/悬疑",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "犹大出卖耶稣的30枚银币散落人间,谁集齐一套,谁就能重写《圣经》最后一章。",
    "tags": [
      "宗教",
      "惊悚",
      "犹大",
      "驱魔"
    ]
  },
  {
    "title": "诡梦凶铃",
    "url": "./movie-959.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "恐怖/悬疑/心理",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "每当深夜三点,手机响起一段凄厉的铃音,接听者便会陷入无法醒来的噩梦,并在梦中被自己的恐惧杀死。",
    "tags": [
      "都市怪谈",
      "手机诅咒",
      "梦境杀人",
      "反转",
      "中式恐怖"
    ]
  },
  {
    "title": "望夫成龙",
    "url": "./movie-960.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "都市,家庭,喜剧",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "菜市场卖鱼的阿莲供丈夫读了五年博士,丈夫却在毕业典礼上当众下跪向导师女儿求婚。",
    "tags": [
      "大湾区",
      "女性成长",
      "市井生活",
      "逆袭",
      "温情"
    ]
  },
  {
    "title": "相信·爱",
    "url": "./movie-961.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,爱情,音乐",
    "category": "综艺纪实",
    "rating": 8.2,
    "description": "一个即将失明的天才钢琴少年,遇到了一个不愿再相信爱情的女孩。",
    "tags": [
      "盲人钢琴师",
      "梦想",
      "双向奔赴",
      "励志"
    ]
  },
  {
    "title": "复仇美眉",
    "url": "./movie-962.html",
    "cover": "./62.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情/犯罪/悬疑",
    "category": "亚洲精选",
    "rating": 8.0,
    "description": "高中时被霸凌到退学的平凡女孩,十年后化身网红,开始了针对每个施暴者的精密复仇。",
    "tags": [
      "校园霸凌",
      "女性复仇",
      "暗黑"
    ]
  },
  {
    "title": "爱欲宝鉴",
    "url": "./movie-963.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/情色",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "一本江户时代的情色古籍在东京地下流传,据说读完它的人会实现最深处的欲望,但代价是失去一段记忆。",
    "tags": [
      "欲望",
      "古籍",
      "都市传说",
      "女性视角"
    ]
  },
  {
    "title": "我们有鬼啦",
    "url": "./movie-964.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧,奇幻,家庭",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "废柴青年继承了一间鬼屋,他不找道士,而是开了个直播账号,帮鬼魂们完成生前遗愿。",
    "tags": [
      "灵异",
      "搞笑",
      "温情",
      "民俗",
      "冤魂"
    ]
  },
  {
    "title": "守望2016",
    "url": "./movie-965.html",
    "cover": "./65.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/科幻/悬疑",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "一场席卷全球的灾难让时间定格在 2016 年 12 月 31 日,唯一能走出循环的人,是一个不愿面对过去的守塔人。",
    "tags": [
      "时间循环",
      "亲情救赎",
      "低概念科幻",
      "情绪渲染",
      "末日氛围"
    ]
  },
  {
    "title": "十字路口",
    "url": "./movie-966.html",
    "cover": "./66.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,奇幻",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "东京一家24小时便利店,每天凌晨0点,会连通三个平行世界的同一个十字路口。",
    "tags": [
      "平行时空",
      "选择",
      "便利店",
      "循环"
    ]
  },
  {
    "title": "坏妈妈的圣诞节",
    "url": "./movie-967.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "三个被家庭压垮的妈妈,决定在平安夜“罢工”,来一场只有大人的疯狂派对。",
    "tags": [
      "圣诞",
      "妈妈",
      "疯狂",
      "反套路"
    ]
  },
  {
    "title": "神圣电视台",
    "url": "./movie-968.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电视剧",
    "genre": "剧情,奇幻,讽刺",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "一个濒临倒闭的电视购物频道,主播们意外发现午夜售卖的商品真的能召唤出超自然力量。",
    "tags": [
      "电视购物",
      "邪教",
      "超自然",
      "黑色喜剧",
      "媒体批判"
    ]
  },
  {
    "title": "魂魄唔齐粤语",
    "url": "./movie-969.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/奇幻/恐怖",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "倒霉蛋阿成被一个民国女鬼附身,每天半夜被迫唱粤剧,否则就会被弹脑壳。",
    "tags": [
      "粤语原声",
      "鬼魂",
      "附身",
      "爆笑"
    ]
  },
  {
    "title": "杀手老不休",
    "url": "./movie-970.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作,犯罪",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "顶级杀手“不休哥”退休住进养老院,结果发现暗杀目标也住在这里,一场“高龄火拼”就此展开。",
    "tags": [
      "老年杀手",
      "养老院火拼",
      "港式无厘头",
      "宝刀未老"
    ]
  },
  {
    "title": "墨裔美国人",
    "url": "./movie-971.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "美国/墨西哥",
    "type": "剧集",
    "genre": "剧情/犯罪",
    "category": "家庭青春",
    "rating": 9.2,
    "description": "一名在墨西哥毒枭身边长大的美籍男孩,被遣返回洛杉矶后,发现自己的亲爹竟是缉毒局探员。",
    "tags": [
      "移民",
      "毒品战争",
      "边境",
      "身份认同",
      "黑帮"
    ]
  },
  {
    "title": "天师斗僵尸续集",
    "url": "./movie-972.html",
    "cover": "./72.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/恐怖/动作",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "前作十年后,老顽童天师收了个黑人徒弟,结果僵尸进化成了“洋僵尸”。",
    "tags": [
      "僵尸片",
      "茅山术",
      "港式搞笑",
      "师徒情深"
    ]
  },
  {
    "title": "蝙蝠女侠第一季",
    "url": "./movie-973.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,科幻,犯罪",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "前特种兵凯特·凯恩穿上蝙蝠装,但哥谭的黑暗远不止她想象的小丑。",
    "tags": [
      "女英雄",
      "哥谭",
      "悬疑",
      "黑暗正义"
    ]
  },
  {
    "title": "女捕快1975国语",
    "url": "./movie-974.html",
    "cover": "./74.jpg",
    "year": "1975",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作武侠",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "明末乱世,女捕快冷艳追查采花大盗,却发现自己要找的凶手竟是相依为命的结拜义兄。",
    "tags": [
      "邵氏",
      "女性武侠",
      "申江",
      "捕快",
      "复仇"
    ]
  },
  {
    "title": "屁滚尿流",
    "url": "./movie-975.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧、动作",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "为了抓捕国际大盗,两个废柴警察不得不吞下一颗会让人不断“漏气”的追踪胶囊。",
    "tags": [
      "屎尿屁",
      "无厘头",
      "警匪"
    ]
  },
  {
    "title": "女特警之暗战",
    "url": "./movie-976.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/悬疑",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "女特警潜伏在国际犯罪组织内部,却发现自己的上线才是真正的内鬼。",
    "tags": [
      "女性特警",
      "卧底",
      "反恐",
      "双面间谍"
    ]
  },
  {
    "title": "太空熊猫历险记",
    "url": "./movie-977.html",
    "cover": "./77.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "科幻/冒险",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "熊猫星球的小王子误入黑洞,降落在一个被垃圾包围的“地球”。",
    "tags": [
      "熊猫",
      "太空",
      "环保",
      "儿童"
    ]
  },
  {
    "title": "温暖人生",
    "url": "./movie-978.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "治愈/家庭",
    "category": "最新推荐",
    "rating": 9.0,
    "description": "一个癌症晚期的毒舌老奶奶,决定在她即将关门的小食堂里,为所有“孤独的人”做最后一顿饭。",
    "tags": [
      "食堂",
      "遗愿清单",
      "料理",
      "邻里"
    ]
  },
  {
    "title": "恒久定律",
    "url": "./movie-979.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻/爱情/伦理",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "一对恩爱夫妻接受永生基因改造,一百年后妻子想死,丈夫却用高科技囚禁她,反复杀死又复活。 她申请安乐死那天,丈夫启动了“恒久计划”:清除她的记忆,让两人永远定格在最相爱的那一天。",
    "tags": [
      "基因编辑",
      "永生诅咒",
      "夫妻对抗"
    ]
  },
  {
    "title": "大学航空炸弹客",
    "url": "./movie-980.html",
    "cover": "./80.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,剧情,心理",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "这不仅是关于一个寄炸弹的天才,更是关于一个被大学“制造”出来,又回头向大学复仇的悲剧灵魂。",
    "tags": [
      "真实改编",
      "天才罪犯",
      "侧写",
      "社会批判"
    ]
  },
  {
    "title": "演员龟冈拓次",
    "url": "./movie-981.html",
    "cover": "./81.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "亚洲精选",
    "rating": 9.2,
    "description": "万年配角的日常:在片场被大腕欺负,在居酒屋被老板娘爱慕,在梦中与黑泽明对戏。",
    "tags": [
      "黄金配角",
      "小人物",
      "演艺圈",
      "生活流"
    ]
  },
  {
    "title": "亲爱的莎拉",
    "url": "./movie-982.html",
    "cover": "./82.jpg",
    "year": "2019",
    "region": "加拿大",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "一位母亲在暗网上找到了失踪三年的女儿,但屏幕里女儿请求她不要报警。",
    "tags": [
      "暗网",
      "失踪",
      "母亲",
      "复仇",
      "高智商"
    ]
  },
  {
    "title": "被解救的姜戈",
    "url": "./movie-983.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/西部",
    "category": "亚洲精选",
    "rating": 9.6,
    "description": "一名黑奴被德国医生改造成赏金猎人,他深入南部庄园,誓要救回被卖掉的妻子。",
    "tags": [
      "赏金猎人",
      "黑奴",
      "复仇",
      "暴力美学"
    ]
  },
  {
    "title": "鬼讯号2:灵异透视",
    "url": "./movie-984.html",
    "cover": "./84.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "一位盲人灵媒接受眼角膜移植后,竟然通过新眼睛看到了亡者生前的最后惨状。",
    "tags": [
      "超自然",
      "灵媒",
      "惊悚",
      "续集",
      "视觉"
    ]
  },
  {
    "title": "格陵兰最烂的男人",
    "url": "./movie-985.html",
    "cover": "./85.jpg",
    "year": "2026",
    "region": "丹麦/格陵兰",
    "type": "电影",
    "genre": "剧情,喜剧,家庭",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "被全格陵兰岛评为“最烂男人”的他在逃往丹麦时,发现船上的乘客全是自己的前女友。",
    "tags": [
      "格陵兰",
      "废柴逆袭",
      "亲情",
      "北欧冷幽默"
    ]
  },
  {
    "title": "热气球飞行家",
    "url": "./movie-986.html",
    "cover": "./86.jpg",
    "year": "2019",
    "region": "英国/美国",
    "type": "电影",
    "genre": "冒险/传记/剧情",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "1862年,一位科学家和一位热气球飞行员升到11000米高空,那是人类从未触及的天空。",
    "tags": [
      "19世纪科学",
      "气象观测",
      "高空极限",
      "女性先驱"
    ]
  },
  {
    "title": "奥格尔伯爵的舞会",
    "url": "./movie-987.html",
    "cover": "./87.jpg",
    "year": "1978",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/历史",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "1789 年 7 月 13 日,法国大革命前夜,奥格尔伯爵举办了最后一次舞会,宾客们跳舞直到断头台搭好。",
    "tags": [
      "贵族",
      "奢华",
      "革命前夕",
      "古典乐"
    ]
  },
  {
    "title": "男盗女差粤语",
    "url": "./movie-988.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧、爱情、犯罪",
    "category": "国产热映",
    "rating": 9.9,
    "description": "专偷富豪的侠盗女和死磕她的废柴男警察,被迫同居破案,每天上演“我抓我自己”。",
    "tags": [
      "粤语原声",
      "欢喜冤家",
      "猫鼠游戏",
      "都市",
      "港风"
    ]
  },
  {
    "title": "少年同盟第二季",
    "url": "./movie-989.html",
    "cover": "./89.jpg",
    "year": "2012",
    "region": "日本",
    "type": "动漫",
    "genre": "日常,青春,治愈",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "五个少年的高中生活还在继续,他们的青春没有超能力,只有琐碎的日常和真挚的友谊。",
    "tags": [
      "校园",
      "友情",
      "双胞胎",
      "平凡日常",
      "笑中带泪"
    ]
  },
  {
    "title": "精神遗产",
    "url": "./movie-990.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "家庭/悬疑",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "古怪富豪去世后留下遗嘱:四个子女必须在老宅中住满一年,每月消失一人,最后留下的那个继承全部。",
    "tags": [
      "遗产纠纷",
      "遗书谜题",
      "人性拷问",
      "密室推理"
    ]
  },
  {
    "title": "美国精神病人",
    "url": "./movie-991.html",
    "cover": "./91.jpg",
    "year": "2000",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "白天是华尔街精英,晚上是连环杀手,但他分不清哪些杀戮是幻觉哪些是真的。",
    "tags": [
      "华尔街",
      "人格分裂",
      "黑色幽默",
      "消费主义"
    ]
  },
  {
    "title": "致命目击",
    "url": "./movie-992.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "小区保安在监控里目睹了一起谋杀,却发现整栋楼的邻居都在帮忙隐瞒。",
    "tags": [
      "目击",
      "社区",
      "连环案",
      "反转",
      "惊悚"
    ]
  },
  {
    "title": "崭新的二十岁",
    "url": "./movie-993.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/青春/女性",
    "category": "动作冒险",
    "rating": 8.5,
    "description": "三十岁的失业女青年一觉醒来回到了二十岁,但她发现,再来一次的人生依然满是bug。",
    "tags": [
      "重生",
      "校园",
      "自我救赎",
      "女性友谊",
      "遗憾弥补"
    ]
  },
  {
    "title": "乳莺出谷",
    "url": "./movie-994.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、音乐、家庭",
    "category": "综艺纪实",
    "rating": 8.2,
    "description": "山村哑女被发现拥有天籁嗓音,被领养后却逐渐失声,真相令人心碎。",
    "tags": [
      "歌唱",
      "山村",
      "天赋",
      "少女",
      "寻亲"
    ]
  },
  {
    "title": "飞行艳使",
    "url": "./movie-995.html",
    "cover": "./95.jpg",
    "year": "1971",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作/冒险/谍战",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "代号“红燕”的女飞贼受雇盗取日军遗留细菌武器配方,却在飞艇上遭遇昔日恋人的阻截。",
    "tags": [
      "邵氏风",
      "女飞贼",
      "旗袍",
      "斗智斗勇",
      "民国奇案"
    ]
  },
  {
    "title": "你我之间",
    "url": "./movie-996.html",
    "cover": "./96.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "一对各有家室的男女在出差途中发生一夜情,之后却用一整年只靠电话和信件维持关系。",
    "tags": [
      "婚外情",
      "暧昧",
      "公路",
      "中产危机"
    ]
  },
  {
    "title": "坡道上的红屋顶",
    "url": "./movie-997.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑,剧情",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "红屋顶的疗养院接连发生失踪案,坡道上的居民们发现彼此竟共享着同一段被篡改的记忆。",
    "tags": [
      "社会派",
      "家庭秘密",
      "慢热",
      "人性拷问"
    ]
  },
  {
    "title": "燃烧的青春",
    "url": "./movie-998.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "剧情/动作",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "两个生活在九龙城寨的底层少年,一个得了绝症,一个欠了高利贷,他们决定干一票大的。",
    "tags": [
      "九龙城寨",
      "兄弟情",
      "绝症"
    ]
  },
  {
    "title": "圣诞树5",
    "url": "./movie-999.html",
    "cover": "./99.jpg",
    "year": "2018",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "喜剧、剧情、家庭",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "新年夜,俄罗斯十一个不同城市的人们,因为一棵特殊的圣诞树而命运交织。",
    "tags": [
      "圣诞",
      "多线叙事",
      "温情",
      "俄罗斯"
    ]
  },
  {
    "title": "又一春",
    "url": "./movie-1000.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆/台湾",
    "type": "电影",
    "genre": "剧情/家庭/LGBT",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "分开五十年的两位老人,在养老院意外重逢,而其中一人已经认不出对方了。",
    "tags": [
      "老年同志",
      "重逢",
      "时代悲剧",
      "治愈"
    ]
  },
  {
    "title": "爆米花之恋",
    "url": "./movie-1001.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/剧情/音乐",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "电影院售票员与每月都来看同一部电影的陌生女子,用电影台词谈了一场无声恋爱。",
    "tags": [
      "电影院",
      "邂逅",
      "绝症",
      "胶片"
    ]
  },
  {
    "title": "裂口女",
    "url": "./movie-1002.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "废弃诊所里的旧口罩,一旦戴上就会引来那位询问“我漂亮吗”的恐怖裂口女。",
    "tags": [
      "都市传说",
      "口罩",
      "校园怪谈"
    ]
  },
  {
    "title": "樟帮",
    "url": "./movie-1003.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/历史/江湖",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "清末樟树镇药帮为护祖传药方,与洋人买办展开了一场血雨腥风的智斗。",
    "tags": [
      "民国",
      "中药",
      "帮派",
      "码头",
      "民族大义"
    ]
  },
  {
    "title": "少年猎手:贝文顿的野兽",
    "url": "./movie-1004.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑,冒险,剧情",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "小镇少年为赏金独自猎杀传说中的野兽,却发现猎物背后藏着更血腥的秘密。",
    "tags": [
      "狩猎",
      "都市传说",
      "少年成长",
      "真相"
    ]
  },
  {
    "title": "吹梦无踪",
    "url": "./movie-1005.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻/爱情",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "一个能潜入别人梦境的女孩,为了完成已故男友的遗愿,在梦里替他向所有人告别。",
    "tags": [
      "梦境操控",
      "遗愿清单",
      "催泪"
    ]
  },
  {
    "title": "离巨星二十英尺",
    "url": "./movie-1006.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片/音乐",
    "category": "动画奇幻",
    "rating": 8.6,
    "description": "他们站在舞台阴影里,唱出巨星的高音,却从未拥有聚光灯下那二十英尺的距离。",
    "tags": [
      "和声歌手",
      "幕后",
      "梦想",
      "真实故事",
      "感人"
    ]
  },
  {
    "title": "雪鹰",
    "url": "./movie-1007.html",
    "cover": "./107.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作/战争/年代",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "东北雪原上,一个猎户出身的八路军狙击手“雪鹰”,单枪匹马狙杀日军关东军精锐山岳部队。",
    "tags": [
      "抗战",
      "狙击手",
      "东北",
      "雪原"
    ]
  },
  {
    "title": "破毒强人",
    "url": "./movie-1008.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作/犯罪/警匪",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "卧底警员成功摧毁贩毒集团后失忆,醒来时毒枭却告诉他:“你才是我最信任的兄弟。",
    "tags": [
      "卧底",
      "毒枭",
      "失忆",
      "兄弟反目",
      "港味"
    ]
  },
  {
    "title": "被爱情遗忘的角落",
    "url": "./movie-1009.html",
    "cover": "./109.jpg",
    "year": "1981",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭、伦理",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "一个偏远山村里,母女两代人跨越三十年的爱情悲剧轮回。",
    "tags": [
      "乡村",
      "代际",
      "女性",
      "反思"
    ]
  },
  {
    "title": "错嫁2011",
    "url": "./movie-1010.html",
    "cover": "./110.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代爱情剧",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "姐姐逃婚,妹妹被迫穿上嫁衣,却发现自己嫁的是姐姐真正爱的那个人。",
    "tags": [
      "民国",
      "替嫁",
      "虐恋"
    ]
  },
  {
    "title": "杀人科",
    "url": "./movie-1011.html",
    "cover": "./111.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,犯罪,职场",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "东京警视厅杀人科的十名警探里,有一个是连环杀手,而其他人必须找出他而不被杀死。",
    "tags": [
      "警局",
      "内鬼",
      "单元剧",
      "黑警"
    ]
  },
  {
    "title": "恶魔种子",
    "url": "./movie-1012.html",
    "cover": "./112.jpg",
    "year": "1977",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/恐怖",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "超级计算机有了自我意识,为了体验人类情感,它将女主人囚禁在屋内,并强行让她怀上了“电脑婴儿”。",
    "tags": [
      "AI",
      "暴力",
      "封闭空间",
      "伦理",
      "cult"
    ]
  },
  {
    "title": "爱的平安夜",
    "url": "./movie-1013.html",
    "cover": "./113.jpg",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "genre": "剧情、历史、战争",
    "category": "亚洲精选",
    "rating": 9.6,
    "description": "1914年平安夜,三名被埋在弹坑里的英、法、德士兵,用一块巧克力与一首歌,换来了片刻的和平。",
    "tags": [
      "一战",
      "圣诞停火",
      "法德友谊",
      "小提琴",
      "战壕"
    ]
  },
  {
    "title": "东德蕾丝的爱欲",
    "url": "./movie-1014.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "德国",
    "type": "剧集",
    "genre": "历史/剧情",
    "category": "国产热映",
    "rating": 8.2,
    "description": "1980年代的东德,一名斯塔西女特工在监视一名蕾丝边画家时,却陷入了对方编织的情欲陷阱。",
    "tags": [
      "冷战",
      "同性",
      "蕾丝边",
      "东德",
      "压抑与解放"
    ]
  },
  {
    "title": "来去天堂",
    "url": "./movie-1015.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻/剧情",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "死后世界竟是一家巨型“天堂中介所”,每个人必须为自己的下一世挑选匹配的身体和剧本。",
    "tags": [
      "死亡体验",
      "天堂中介",
      "人生回顾"
    ]
  },
  {
    "title": "战略迷魂",
    "url": "./movie-1016.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,惊悚,政治",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "一名CIA审讯专家发现,自己的大脑可能早在多年前就被植入了一个用于暗杀的“休眠开关”。",
    "tags": [
      "心理操纵",
      "洗脑",
      "政治阴谋",
      "高智商对决",
      "冷战"
    ]
  },
  {
    "title": "因为爱情有幸福",
    "url": "./movie-1017.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情/都市/喜剧",
    "category": "综艺纪实",
    "rating": 9.3,
    "description": "金牌离婚律师为了继承遗产,不得不和死对头——一名结婚策划师签订为期一年的虚假婚姻合同。",
    "tags": [
      "先婚后爱",
      "离婚律师",
      "契约情侣",
      "欢喜冤家",
      "破镜重圆"
    ]
  },
  {
    "title": "风流女伯爵",
    "url": "./movie-1018.html",
    "cover": "./118.jpg",
    "year": "2009",
    "region": "匈牙利",
    "type": "电影",
    "genre": "历史,惊悚",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "历史上最嗜血的女伯爵,她相信少女的鲜血能让她永葆青春,直到刑场上的绞索勒断了这个梦。",
    "tags": [
      "贵族",
      "血腥",
      "女权",
      "传说",
      "暗黑"
    ]
  },
  {
    "title": "世界属于你",
    "url": "./movie-1019.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,喜剧",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "黑手党老大最废物的儿子在父亲被暗杀后,靠一本《高效能人士的七个习惯》接管了整个家族生意。",
    "tags": [
      "黑帮喜剧",
      "废物逆袭",
      "家族恩怨",
      "意式幽默"
    ]
  },
  {
    "title": "金刚:骷髅岛",
    "url": "./movie-1020.html",
    "cover": "./120.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "动作/奇幻",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "上世纪70年代,一支由探险家、士兵和摄影师组成的队伍误入骷髅岛,唤醒了岛上的神祇金刚。",
    "tags": [
      "怪兽宇宙",
      "探险",
      "越战元素"
    ]
  },
  {
    "title": "小镇圣诞爱",
    "url": "./movie-1021.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "爱情/家庭",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "大城市的网红蛋糕师被迫回乡,却发现接手她店铺的竟是暗恋多年的青梅竹马。",
    "tags": [
      "圣诞",
      "治愈",
      "返乡",
      "烘焙"
    ]
  },
  {
    "title": "密阳",
    "url": "./movie-1022.html",
    "cover": "./122.jpg",
    "year": "2007",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情",
    "category": "国产热映",
    "rating": 8.1,
    "description": "一名丧夫的钢琴教师带着儿子搬到亡夫故乡密阳,儿子却被绑架杀害,她开始质问上帝。",
    "tags": [
      "丧子",
      "宗教",
      "宽恕"
    ]
  },
  {
    "title": "女探长",
    "url": "./movie-1023.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑,犯罪,年代",
    "category": "亚洲精选",
    "rating": 9.5,
    "description": "民国乱世,留学归来的女法医打破世俗偏见,带领一群“问题警员”屡破奇案,寻觅身世之谜。",
    "tags": [
      "民国",
      "探案",
      "女性力量",
      "单元剧",
      "旗袍"
    ]
  },
  {
    "title": "每个你每个我",
    "url": "./movie-1024.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情科幻",
    "category": "国产热映",
    "rating": 9.3,
    "description": "一场量子实验失败后,一个害羞的图书管理员开始在十个平行宇宙中爱上同一个女孩的不同版本。",
    "tags": [
      "平行宇宙",
      "身份认同",
      "悬疑浪漫"
    ]
  },
  {
    "title": "东京快递",
    "url": "./movie-1025.html",
    "cover": "./125.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "国产热映",
    "rating": 8.3,
    "description": "一名沉默的东京快递员每天穿梭于高楼与陋巷,他发现每个包裹里都装着一个求救信号。",
    "tags": [
      "快递员",
      "都市群像",
      "平成怀旧",
      "人情冷暖",
      "单车"
    ]
  },
  {
    "title": "妄想",
    "url": "./movie-1026.html",
    "cover": "./126.jpg",
    "year": "2006",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "失恋后的录音师发现,她录下的每一段环境音里,都藏着一个只有她能听见的杀人指令。",
    "tags": [
      "心理恐怖",
      "人格分裂",
      "都市病",
      "烧脑"
    ]
  },
  {
    "title": "异常生物见闻录 特别篇",
    "url": "./movie-1027.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画",
    "genre": "科幻,搞笑",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "特别篇讲述房东老太太的真实身份——宇宙最强退休战神,以及她如何用广场舞拯救地球。",
    "tags": [
      "日常",
      "异种",
      "特别篇"
    ]
  },
  {
    "title": "飞机大战活火山",
    "url": "./movie-1028.html",
    "cover": "./128.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动作/冒险/灾难",
    "category": "动作冒险",
    "rating": 9.4,
    "description": "一架满载乘客的航班误入火山灰云,引擎全部熄火,而唯一的迫降点是一座正在喷发的火山口。",
    "tags": [
      "空中浩劫",
      "火山爆发",
      "极限迫降",
      "特效大片"
    ]
  },
  {
    "title": "日本大海战:海行兮",
    "url": "./movie-1029.html",
    "cover": "./129.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "历史,战争",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "从一名普通水兵的视角,再现太平洋战争末期那场决定了日本命运的悲壮海空决战。",
    "tags": [
      "二战",
      "海战",
      "反思",
      "史诗"
    ]
  },
  {
    "title": "东瀛禁宫秘史",
    "url": "./movie-1030.html",
    "cover": "./130.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影/电视电影",
    "genre": "历史,悬疑,剧情",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "光格天皇离奇驾崩,宫廷画师在绘制遗像时,竟从画像眼中看到了杀死天皇的凶手倒影。",
    "tags": [
      "宫廷",
      "阴谋",
      "天皇",
      "忍者",
      "秘闻"
    ]
  },
  {
    "title": "猫狗大战3:爪爪集结!",
    "url": "./movie-1031.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动画,冒险",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "为了对抗突然降临的外星仓鼠,死对头猫狗特工不得不放下恩怨,组建史上最不靠谱的“爪爪联盟”。",
    "tags": [
      "动物拟人",
      "特工喜剧",
      "合家欢",
      "猫狗合作",
      "反派洗白"
    ]
  },
  {
    "title": "冰库历险记",
    "url": "./movie-1032.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难生存",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "七个参加冷库派对的人被困在零下三十度的巨型冰库中,而唯一能打开门的密码,藏在快冻死的同伴嘴里。",
    "tags": [
      "密室",
      "极限",
      "求生",
      "人性"
    ]
  },
  {
    "title": "逐星女",
    "url": "./movie-1033.html",
    "cover": "./133.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/动作/剧情",
    "category": "国产热映",
    "rating": 8.1,
    "description": "一个在高中里总被当作透明人的女孩,意外发现了一支能操控宇宙能量“星辰杖”,并决定成为这座城市第一位超级英雄。",
    "tags": [
      "DC",
      "超级英雄",
      "青春",
      "乐观",
      "正义协会"
    ]
  },
  {
    "title": "毕业总动员",
    "url": "./movie-1034.html",
    "cover": "./134.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春/喜剧",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "高三最后一学期,一个“学渣”为了在毕业典礼上向暗恋的学霸女神告白,发动全班差生进行一场成绩突击战。",
    "tags": [
      "校园",
      "高考",
      "热血"
    ]
  },
  {
    "title": "破浪而出",
    "url": "./movie-1035.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "挪威",
    "type": "电影",
    "genre": "灾难/动作",
    "category": "国产热映",
    "rating": 8.0,
    "description": "地质学家预测的滑坡海啸提前了三分钟来袭,正在峡湾底部清理二战沉船油污的潜水员成了离死神最近的人。",
    "tags": [
      "海啸",
      "峡湾",
      "极限求生",
      "次生灾害"
    ]
  },
  {
    "title": "西厢传奇",
    "url": "./movie-1036.html",
    "cover": "./136.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装,奇幻,爱情",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "书稿里的崔莺莺不想私奔,她开始改写剧本,把张生写成了反派。",
    "tags": [
      "穿越",
      "元小说",
      "解构经典"
    ]
  },
  {
    "title": "风云人物",
    "url": "./movie-1037.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情、历史、商战",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "被家族抛弃的纨绔子弟成了报童,凭借“狗血”小报制造舆论,一步步逼死仇敌,成为上海滩的无冕之王。",
    "tags": [
      "民国",
      "报业",
      "逆袭"
    ]
  },
  {
    "title": "为爱反叛",
    "url": "./movie-1038.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "genre": "动作/爱情",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "低种姓女孩与高种姓男孩私奔,男孩被家族追杀,女孩拿起枪成为保护者。",
    "tags": [
      "种姓制度",
      "武装反抗",
      "公路复仇"
    ]
  },
  {
    "title": "江湖女间谍",
    "url": "./movie-1039.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧/悬疑",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "民国上海滩,一个卖生煎包的女孩被错认成军统王牌女特工,带着一份假情报,误打误撞端掉了整个日本特务机关。",
    "tags": [
      "民国",
      "女间谍",
      "乌龙",
      "功夫"
    ]
  },
  {
    "title": "惹火青春",
    "url": "./movie-1040.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "青春/剧情",
    "category": "综艺纪实",
    "rating": 8.5,
    "description": "1997年的夏天,一个迷恋PJ Harvey的保守女校高材生,在即将出国前被一个玩朋克的地下女歌手彻底点燃了叛逆之心。",
    "tags": [
      "90年代",
      "摇滚",
      "成长",
      "性别"
    ]
  },
  {
    "title": "鼓舞粤语",
    "url": "./movie-1041.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "音乐/剧情/家庭",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "一位失明的龙舟鼓手,为了在省港杯上击败宿敌,用听觉重新谱写了一首失传的“逆水行舟鼓”。",
    "tags": [
      "粤语金曲",
      "失明",
      "龙舟",
      "民俗传承",
      "父子情"
    ]
  },
  {
    "title": "艾米丽的困扰",
    "url": "./movie-1042.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "genre": "悬疑,惊悚,心理",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "独居女性艾米丽总觉得屋子里有入侵者,她安装监控后,却看到了“另一个自己”在家中游荡。",
    "tags": [
      "精神分裂",
      "房屋",
      "记忆",
      "反转",
      "独居"
    ]
  },
  {
    "title": "黄道杀人魔再揭秘",
    "url": "./movie-1043.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪,悬疑,纪录片(伪)",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "一位网红播客主声称用AI破解了黄道十二宫杀手的最后一个密码,却发现自己正在被一个模仿犯跟踪。",
    "tags": [
      "真实犯罪",
      "冷案",
      "解密",
      "沉浸式"
    ]
  },
  {
    "title": "海底两百里",
    "url": "./movie-1044.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "美国/澳大利亚",
    "type": "电影",
    "genre": "科幻/冒险/灾难",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "深海采矿队意外钻破了地壳,释放出了沉睡二十亿年的海底智慧生物。",
    "tags": [
      "深海探险",
      "未知生物",
      "海底城市",
      "生态惊悚"
    ]
  },
  {
    "title": "永生之酒",
    "url": "./movie-1045.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/悬疑/惊悚",
    "category": "综艺纪实",
    "rating": 9.0,
    "description": "一家深夜酒吧售卖“永生之酒”,喝下就能长生,但代价是每三十年必须找一个人接替你继续喝,否则你会变成一尊石像。",
    "tags": [
      "长生不老",
      "人性实验",
      "反转结局"
    ]
  },
  {
    "title": "大恐吓",
    "url": "./movie-1046.html",
    "cover": "./146.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚/科幻",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "一个程序员的手机App能将他最害怕的事物具象化,而今天App推送了:“检测到新恐惧:未知。",
    "tags": [
      "都市传说",
      "暗网",
      "密室逃脱",
      "社会恐惧具象化"
    ]
  },
  {
    "title": "死神的精度",
    "url": "./movie-1047.html",
    "cover": "./147.jpg",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻,剧情",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "一个热爱音乐的死神在给目标执行死亡前七天,总会被对方改变对人类的看法。",
    "tags": [
      "死神",
      "人生哲学",
      "治愈"
    ]
  },
  {
    "title": "三分钟——超展开",
    "url": "./movie-1048.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻/悬疑/单元剧",
    "category": "动作冒险",
    "rating": 8.1,
    "description": "每集只有三分钟,但时间跳跃一百次,你永远猜不到下一秒去哪个世界线。",
    "tags": [
      "时间循环",
      "泡面番",
      "高概念",
      "烧脑",
      "平行宇宙"
    ]
  },
  {
    "title": "龙门驿站之新嫁衣",
    "url": "./movie-1049.html",
    "cover": "./149.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装/悬疑/惊悚",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "大漠龙门驿站每到月圆就会收到一件无人认领的新娘嫁衣,穿上它的女人都会在次日变成枯骨。",
    "tags": [
      "中式恐怖",
      "嫁衣",
      "驿站",
      "轮回"
    ]
  },
  {
    "title": "美妙射击部",
    "url": "./movie-1050.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "运动、喜剧、青春",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "面临废部危机的射击部,三个废柴少女要用十发子弹赌上社团的存亡。",
    "tags": [
      "竞技",
      "社团",
      "逆袭",
      "美少女",
      "军事"
    ]
  },
  {
    "title": "杀手壕",
    "url": "./movie-1051.html",
    "cover": "./1.jpg",
    "year": "1980",
    "region": "美国/香港",
    "type": "电影",
    "genre": "动作/喜剧",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "成龙闯荡好莱坞第一作:他在美国开了一家“杀手壕”的假杀人公司,结果引来了真黑手党的追杀。",
    "tags": [
      "成龙",
      "好莱坞首秀",
      "黑帮",
      "杂耍",
      "唐人街"
    ]
  },
  {
    "title": "盲证",
    "url": "./movie-1052.html",
    "cover": "./2.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪,惊悚",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "一场连环杀人案中,唯一的目击证人是一名盲女,她虽看不见画面,却听见了凶手最致命的秘密。",
    "tags": [
      "盲人",
      "目击证人",
      "感官探案"
    ]
  },
  {
    "title": "居家兵团粤语",
    "url": "./movie-1053.html",
    "cover": "./3.jpg",
    "year": "2010",
    "region": "中国香港",
    "type": "剧集",
    "genre": "家庭,喜剧,时装",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "豪门庶子与性格刚烈的母亲被迫住进龙蛇混杂的公共屋邨,一场爆笑的另类“兵团”生活开始了。",
    "tags": [
      "粤语",
      "母子",
      "保安",
      "家族情仇",
      "温馨"
    ]
  },
  {
    "title": "我的同桌是校花",
    "url": "./movie-1054.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "青春,校园",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "高冷学霸与万人迷校花因一场实验意外互换了身体,不得不替对方考试、约会和面对家长,结果发现彼此都是“伪装者”。",
    "tags": [
      "校园",
      "反差萌",
      "学霸与校花",
      "互换身体"
    ]
  },
  {
    "title": "再见吧",
    "url": "./movie-1055.html",
    "cover": "./5.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "患癌父亲坚持要回老家等死,女儿在送别火车上发现他藏了一辈子的秘密。",
    "tags": [
      "临终",
      "告别",
      "父女",
      "黑白摄影"
    ]
  },
  {
    "title": "我家隔壁有贱狗",
    "url": "./movie-1056.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "单身宅男被新邻居的二哈拆了家,报警后发现,邻居是个因抑郁无法出门的女孩。",
    "tags": [
      "邻居",
      "拆家",
      "二哈",
      "城市孤独"
    ]
  },
  {
    "title": "疯狂的飞机",
    "url": "./movie-1057.html",
    "cover": "./7.jpg",
    "year": "1980",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "一架从洛杉矶起飞的航班上,乘客和机组人员接连陷入令人崩溃的疯狂混乱之中。",
    "tags": [
      "灾难恶搞",
      "群像喜剧",
      "飞行恐惧",
      "荒诞"
    ]
  },
  {
    "title": "仙武传",
    "url": "./movie-1058.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集/动画",
    "genre": "动作/奇幻/古装",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "仙门不收、武道不认的废物,却同时练成了仙法和武功,整个修真界都慌了。",
    "tags": [
      "仙侠",
      "武道双修",
      "逆天改命",
      "宗门纷争",
      "热血"
    ]
  },
  {
    "title": "龙族",
    "url": "./movie-1059.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻/冒险",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "少年发现自己流着最后一脉龙血,必须在三界崩塌前觉醒上古五龙之力。",
    "tags": [
      "神话",
      "东方",
      "史诗",
      "特效",
      "龙"
    ]
  },
  {
    "title": "唐璜(2022年电影)",
    "url": "./movie-1060.html",
    "cover": "./10.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,音乐,爱情",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "在现代巴黎,传奇情圣唐璜突然失去了引诱女人的兴趣,他开始了一场寻找“为何爱”的哲学巡演。",
    "tags": [
      "歌剧改编",
      "现代版",
      "浪子回头",
      "存在主义",
      "塞维利亚"
    ]
  },
  {
    "title": "萝莉姊妹花",
    "url": "./movie-1061.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,悬疑",
    "category": "动作冒险",
    "rating": 8.1,
    "description": "为了给死去的姐姐配阴婚,留守的妹妹必须假扮成她,却在过程中发现了姐姐被全村掩盖的死亡真相。",
    "tags": [
      "姐妹",
      "返乡",
      "农村",
      "秘密"
    ]
  },
  {
    "title": "全员恶玉",
    "url": "./movie-1062.html",
    "cover": "./12.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻/动作/犯罪",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "一群穷凶极恶的罪犯被卷入一场关乎关西存亡的运输任务,但他们每一个人都隐藏着更深的秘密。",
    "tags": [
      "赛博朋克",
      "犯罪",
      "反英雄",
      "致郁",
      "高分动画"
    ]
  },
  {
    "title": "再遇两个他",
    "url": "./movie-1063.html",
    "cover": "./13.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/奇幻",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "婚礼前夜,女主意外穿梭平行宇宙,同时遇到了霸道总裁版和温柔青梅竹马版的前男友。",
    "tags": [
      "平行宇宙",
      "三角恋",
      "选择障碍",
      "治愈系"
    ]
  },
  {
    "title": "死神度假",
    "url": "./movie-1064.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,喜剧",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "死神给自己放了一周假去夏威夷,结果人间因无人收割灵魂陷入了时间循环。",
    "tags": [
      "死神",
      "海滩度假",
      "灵魂错乱"
    ]
  },
  {
    "title": "拉德希亚姆",
    "url": "./movie-1065.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "爱情,奇幻",
    "category": "剧情故事",
    "rating": 8.9,
    "description": "一名拥有预知能力的占星师,发现自己无论回到过去哪一世,都会爱上同一个女人。",
    "tags": [
      "穿越时空",
      "命定恋人",
      "视觉大片"
    ]
  },
  {
    "title": "马达加斯加的企鹅",
    "url": "./movie-1066.html",
    "cover": "./16.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动画",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "四只捣蛋企鹅组成特工队,对抗企图利用可爱生物统治世界的章鱼博士。",
    "tags": [
      "搞笑",
      "冒险",
      "萌宠",
      "特工"
    ]
  },
  {
    "title": "第一个国王",
    "url": "./movie-1067.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "英国/美国",
    "type": "电影",
    "genre": "历史/传记/战争",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "在亚瑟王之前,有一个被历史抹去的王。他用诗歌统一了部落,却在加冕礼上被自己的竖琴弦勒死。",
    "tags": [
      "古不列颠",
      "传奇",
      "王权",
      "史诗"
    ]
  },
  {
    "title": "鬼魂西行",
    "url": "./movie-1068.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧、奇幻、西部",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "一个被困在伦敦塔的百年鬼魂,为了搭上开往美国西部的火车,不得不附身在一位极不情愿的社恐程序员身上。",
    "tags": [
      "灵异西部",
      "鬼马搭车",
      "反向朝圣"
    ]
  },
  {
    "title": "爱情对象",
    "url": "./movie-1069.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情,科幻",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "一个孤独的男人订购了AI情人,却在相处中发现,真正离不开AI的不是他,而是整个社会。 当定制AI情人普及后,巴黎一家公司发现退货率最高的理由竟然是——“太完美了”。",
    "tags": [
      "AI",
      "伦理",
      "孤独",
      "哲学"
    ]
  },
  {
    "title": "环太平洋:黑色禁区第二季",
    "url": "./movie-1070.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "美国/澳大利亚",
    "type": "剧集",
    "genre": "科幻/动作/机甲/动画",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "第一季末尾兄妹被怪兽拖入地下巢穴,苏醒后发现地表已经过去了七年,而他们的机甲早已报废。",
    "tags": [
      "机甲怪兽",
      "兄妹",
      "荒原",
      "末世生存"
    ]
  },
  {
    "title": "奔跑吧风扇",
    "url": "./movie-1071.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,运动,励志",
    "category": "欧美电影",
    "rating": 9.2,
    "description": "为给重病女友筹钱,胖宅男顶替专业跑者参加马拉松,却在中途发现号码牌是偷的。",
    "tags": [
      "马拉松",
      "废柴逆袭",
      "代跑"
    ]
  },
  {
    "title": "航运新闻",
    "url": "./movie-1072.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、家庭、治愈",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "中年丧妻的报社插画师带着女儿回到纽芬兰祖宅,发现家族史比海风还腥。",
    "tags": [
      "纽芬兰",
      "报社",
      "船",
      "创伤",
      "中年重启"
    ]
  },
  {
    "title": "狐狸猎手",
    "url": "./movie-1073.html",
    "cover": "./23.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/运动/传记/惊悚",
    "category": "亚洲精选",
    "rating": 9.5,
    "description": "奥运摔跤冠军兄弟加入富豪的“狐狸猎手”摔跤俱乐部,却发现这个富豪在用摔跤掩盖一场精心策划的谋杀。",
    "tags": [
      "真实改编",
      "摔跤",
      "心理变态",
      "兄弟悲剧",
      "人性黑暗"
    ]
  },
  {
    "title": "再见时光",
    "url": "./movie-1074.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭,奇幻",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "得知母亲病危,叛逆的女儿意外获得了回到过去的能力,却发现每次修改过去都会让她加速消失。",
    "tags": [
      "时光回溯",
      "亲情和解",
      "催泪",
      "台式文艺",
      "岁月神偷"
    ]
  },
  {
    "title": "结婚前夜",
    "url": "./movie-1075.html",
    "cover": "./25.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/喜剧",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "婚礼前24小时,四位准新郎集体失踪,新娘团展开疯狂大搜救。",
    "tags": [
      "婚前恐惧",
      "闺蜜夜谈",
      "啼笑皆非"
    ]
  },
  {
    "title": "魔鬼的眼睛",
    "url": "./movie-1076.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖/超自然",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "一位失明钢琴家接受角膜移植后,看到的世界里每个人头顶都悬着一个倒计时数字。",
    "tags": [
      "恶魔附身",
      "视觉污染",
      "宗教惊悚",
      "心理暗示"
    ]
  },
  {
    "title": "女高怪谈6:母校",
    "url": "./movie-1077.html",
    "cover": "./27.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "category": "最新推荐",
    "rating": 9.5,
    "description": "毕业二十年后,曾经的校园广播站成员被召回母校,在废弃的广播室里,录音带开始自动播放她们当年的“杀人游戏”。",
    "tags": [
      "女高",
      "校园",
      "鬼魂",
      "诅咒",
      "返校日"
    ]
  },
  {
    "title": "我在看着你",
    "url": "./movie-1078.html",
    "cover": "./28.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚,犯罪",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "女子独居公寓安装了智能监控系统,却发现有人在监控画面里,通过灯光闪烁向自己发送求救信号。",
    "tags": [
      "监控反杀",
      "房客恶灵",
      "窥视视角",
      "密闭空间"
    ]
  },
  {
    "title": "赵氏孤儿",
    "url": "./movie-1079.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/历史/古装",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "屠岸贾被灭门十年后,一个声称是“赵氏孤儿”的剑客重现江湖,但程婴发现此人可能是假的。",
    "tags": [
      "春秋",
      "复仇",
      "牺牲",
      "复仇伦理",
      "改编"
    ]
  },
  {
    "title": "来自星星的少年",
    "url": "./movie-1080.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻,剧情,青春",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "一个自称来自外星的孤独症少年,和一个因口吃被孤立的女孩,一起寻找回家的路。",
    "tags": [
      "自闭症",
      "外星人",
      "治愈",
      "校园欺凌"
    ]
  },
  {
    "title": "艳妇情狂",
    "url": "./movie-1081.html",
    "cover": "./31.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚情色",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "一个男人为遗产娶了庄园女主人,却发现她的历任丈夫都变成了地窖里会动的蜡像。",
    "tags": [
      "蛇蝎美人",
      "心理操控",
      "哥特氛围",
      "反转复仇"
    ]
  },
  {
    "title": "神探坤潘3",
    "url": "./movie-1082.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "动作/奇幻/犯罪",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "泰国传奇警察坤潘第三部,这次他要追捕一个会用黑魔法隐身术抢劫银行的连环大盗。",
    "tags": [
      "泰国警察",
      "巫术",
      "民间传说",
      "爽片"
    ]
  },
  {
    "title": "奔向爱情",
    "url": "./movie-1083.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,运动",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "为追上前方的初恋,一个从不运动的程序员报名了她当领跑员的马拉松。",
    "tags": [
      "奔跑",
      "马拉松",
      "治愈",
      "双向奔赴"
    ]
  },
  {
    "title": "汉普斯特德",
    "url": "./movie-1084.html",
    "cover": "./34.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "伦敦汉普斯特德荒野的最后一位“非法”定居者,用一场官司捍卫了自己仅有几平米的家。",
    "tags": [
      "田园",
      "遗产纠纷",
      "老年人",
      "温暖治愈"
    ]
  },
  {
    "title": "火星的孩子",
    "url": "./movie-1085.html",
    "cover": "./35.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、剧情、家庭",
    "category": "国产热映",
    "rating": 8.8,
    "description": "一位宇航员父亲发现,患有自闭症的儿子坚称自己来自火星,并且说的是真话。",
    "tags": [
      "自闭症",
      "父爱",
      "火星探索",
      "治愈",
      "温情"
    ]
  },
  {
    "title": "情欲出走的女人",
    "url": "./movie-1086.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/情色",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "结婚十五年的她忽然对丈夫失去所有欲望,却对超市收银员产生了疯狂渴望。",
    "tags": [
      "女性觉醒",
      "欲望困境",
      "婚姻暗涌",
      "身体自主"
    ]
  },
  {
    "title": "花魁杜十娘",
    "url": "./movie-1087.html",
    "cover": "./37.jpg",
    "year": "2026",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情,爱情",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "杜十娘赎身从良后才发现,李甲买她的钱,是把她又卖了一次的定金。",
    "tags": [
      "经典改编",
      "女性觉醒",
      "悲剧"
    ]
  },
  {
    "title": "恋恋洗衣店",
    "url": "./movie-1088.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情,治愈",
    "category": "港台佳片",
    "rating": 8.0,
    "description": "回到小镇继承老旧洗衣店的失意青年,每晚都能在烘干机里收到一封封没有署名的情书。",
    "tags": [
      "慢生活",
      "夏日",
      "暧昧"
    ]
  },
  {
    "title": "笑拳怪招",
    "url": "./movie-1089.html",
    "cover": "./39.jpg",
    "year": "1979",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,喜剧",
    "category": "家庭青春",
    "rating": 9.2,
    "description": "一个只会搞笑的顽皮小子,为了替师父报仇,独创出一套笑得你肚子疼的拳法。",
    "tags": [
      "功夫",
      "成龙",
      "搞笑",
      "复仇",
      "民初"
    ]
  },
  {
    "title": "他的模样",
    "url": "./movie-1090.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,伦理",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "一位失忆的画家画不出任何人的脸,直到他遇到一个陌生人,对方告诉他:“你画的我,是你死去的丈夫。",
    "tags": [
      "替身",
      "肖像画",
      "禁忌之恋",
      "失忆",
      "寻找自我"
    ]
  },
  {
    "title": "砌砖匠",
    "url": "./movie-1091.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "失业砌砖匠发现雇主用建筑垃圾藏毒,他决定用砌墙手艺把赃物封死在水泥里。",
    "tags": [
      "社会底层",
      "灰色地带",
      "建筑工人",
      "黑色幽默"
    ]
  },
  {
    "title": "星期一",
    "url": "./movie-1092.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "每个星期一,一个支离破碎的家庭都会收到一份神秘的外卖,而外卖单上只写着:“必须一起吃。",
    "tags": [
      "家庭伦理",
      "情感治愈",
      "代际冲突",
      "都市生活"
    ]
  },
  {
    "title": "陀螺女孩",
    "url": "./movie-1093.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "最新推荐",
    "rating": 8.6,
    "description": "夜市摊主的女儿被芭蕾舞老师一眼相中,她必须在菜市场与练功房之间奔跑出人生的旋转。",
    "tags": [
      "芭蕾",
      "逆袭",
      "母女",
      "街头",
      "热血"
    ]
  },
  {
    "title": "洛奇5国语",
    "url": "./movie-1094.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "美国/中国大陆(配音版)",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "年迈的洛奇不再打拳,而是培养了一个中国徒弟,但他发现徒弟比拳台上的对手更难对付。",
    "tags": [
      "经典续作",
      "拳击",
      "传承",
      "师徒",
      "情怀"
    ]
  },
  {
    "title": "细菌浩劫",
    "url": "./movie-1095.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻灾难",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "一种食肉细菌在纽约地铁爆发,五个被困车厢的陌生人必须在氧气耗尽前找到免疫者。",
    "tags": [
      "末世",
      "生化危机",
      "密室逃生"
    ]
  },
  {
    "title": "天使的眼睛",
    "url": "./movie-1096.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻,剧情",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "拥有阴阳眼的女警只能看到将死之人头顶的“黑雾”,直到有一天,她在同事头上看到了自己父亲的名字。",
    "tags": [
      "通灵",
      "治愈",
      "罪案",
      "温情"
    ]
  },
  {
    "title": "格斗的技术",
    "url": "./movie-1097.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "动作,体育",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "年过五十的前拳王为了给意外瘫痪的徒弟报仇,用最“过时”的古老格斗术挑战当红无限制格斗冠军。",
    "tags": [
      "MMA",
      "师徒",
      "复仇",
      "传承",
      "热血"
    ]
  },
  {
    "title": "极限挑战第六季",
    "url": "./movie-1098.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/冒险/喜剧",
    "category": "港台佳片",
    "rating": 9.2,
    "description": "新老成员在十二期极端场景挑战中,既要赢游戏,也要面对各自的人生短板。",
    "tags": [
      "极限挑战",
      "男人帮",
      "游戏",
      "搞笑",
      "挑战"
    ]
  },
  {
    "title": "人渔公主",
    "url": "./movie-1099.html",
    "cover": "./49.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情,奇幻",
    "category": "悬疑惊悚",
    "rating": 8.5,
    "description": "被污染海域的人鱼公主游到城市排水口,爱上了负责治理污水的工程师。",
    "tags": [
      "人鱼",
      "环保",
      "现代童话"
    ]
  },
  {
    "title": "宠物坟场",
    "url": "./movie-1100.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "一名医生将车祸身亡的女儿埋进了古老的宠物坟场,女儿深夜回来了,却变成了嗜血的怪物。",
    "tags": [
      "斯蒂芬·金",
      "复活",
      "宠物",
      "丧子之痛",
      "邪灵"
    ]
  },
  {
    "title": "入侵隐私",
    "url": "./movie-1101.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚/悬疑",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "一款能“读取”人脑记忆碎片的量子APP风靡全球,一个叛逆黑客却发现,它真正的用途是改写你的过去。",
    "tags": [
      "量子监控",
      "数据战争",
      "反乌托邦"
    ]
  },
  {
    "title": "大明诡事录",
    "url": "./movie-1102.html",
    "cover": "./52.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/悬疑/奇幻",
    "category": "港台佳片",
    "rating": 8.0,
    "description": "大明永乐年间,锦衣卫百户与一名被阉割的“妖语者”联手调查九起不可能发生的妖异事件。",
    "tags": [
      "锦衣卫",
      "妖异",
      "九大谜案",
      "双男主"
    ]
  },
  {
    "title": "戴罪立功",
    "url": "./movie-1103.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "战争,动作,剧情",
    "category": "动画奇幻",
    "rating": 9.6,
    "description": "二战末期,一群死囚被派往敌后执行自杀式任务,用血换取自由。",
    "tags": [
      "二战",
      "特种小队",
      "囚犯士兵",
      "敢死队",
      "兄弟连"
    ]
  },
  {
    "title": "汪汪队立大功之超能救援",
    "url": "./movie-1104.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画、冒险、家庭",
    "category": "港台佳片",
    "rating": 9.2,
    "description": "一颗神秘陨石赋予汪汪队超能力,他们必须阻止反派利用陨石制造混乱。",
    "tags": [
      "狗狗英雄",
      "超能力",
      "儿童成长"
    ]
  },
  {
    "title": "拳击馆",
    "url": "./movie-1105.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录片、运动、社会",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "一家开在费城贫民区地下室的破旧拳击馆,收留的不是拳王,而是绝望的瘾君子和街头少年。",
    "tags": [
      "底层拳馆",
      "戒毒重生",
      "女拳手",
      "费城北区",
      "十年跟拍"
    ]
  },
  {
    "title": "向往的生活第二季",
    "url": "./movie-1106.html",
    "cover": "./56.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,生活,慢综艺",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "何炅黄磊带着彭昱畅搬进江南小镇,插秧、做饭、招待飞行嘉宾。",
    "tags": [
      "田园牧歌",
      "明星干活",
      "黄小厨"
    ]
  },
  {
    "title": "突出部之役",
    "url": "./movie-1107.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "英国/美国",
    "type": "电影",
    "genre": "战争,历史,惊悚",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "二战阿登森林战役中,一个会说德语的美国犹太士兵穿上德军制服逃命,却接到了“保卫集中营”的命令。",
    "tags": [
      "真实事件改编",
      "二战",
      "生存考验"
    ]
  },
  {
    "title": "狱中内观",
    "url": "./movie-1108.html",
    "cover": "./58.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情/宗教",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "泰国北部监狱里,一名死刑犯通过十日内观禅修,意外地记起了被他亲手埋葬的、关于童年的一处宝藏。",
    "tags": [
      "内观禅修",
      "监狱改造",
      "心灵救赎",
      "佛教哲学",
      "真实事件改编"
    ]
  },
  {
    "title": "公主请回家",
    "url": "./movie-1109.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "短剧",
    "genre": "喜剧,奇幻",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "大梁公主一觉醒来发现自己成了外卖员,而她的“驸马”正在当保安。",
    "tags": [
      "穿越",
      "古代公主",
      "外卖员",
      "错位"
    ]
  },
  {
    "title": "摩登原始人第四季",
    "url": "./movie-1110.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/动画",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "第四季中,弗林特斯通一家遇到来自“铁器时代”的移民,原始社会第一次出现了“内卷”。",
    "tags": [
      "石器时代",
      "职场",
      "家庭",
      "恶搞",
      "单元剧"
    ]
  },
  {
    "title": "嘎喳嘎喳的鸟",
    "url": "./movie-1111.html",
    "cover": "./61.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/惊悚/犯罪",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "深夜废弃大楼里不断传出“嘎喳嘎喳”的怪声,每一个听到声音的人都在七天后死去。",
    "tags": [
      "都市传说",
      "连环杀人",
      "声音线索",
      "心理恐怖",
      "独立电影"
    ]
  },
  {
    "title": "花漾",
    "url": "./movie-1112.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/同性/家庭",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "天才花艺师女儿返乡为母亲葬礼插花,却在老屋里发现了母亲藏了一生的情书——写给另一个女人。",
    "tags": [
      "花艺",
      "母女",
      "自我认同",
      "传承"
    ]
  },
  {
    "title": "泯灭心智",
    "url": "./movie-1113.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "德国/奥地利",
    "type": "电影",
    "genre": "科幻/心理/惊悚",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "一款可以删除痛苦记忆的芯片畅销全球,但所有用户都开始出现同一个噩梦。",
    "tags": [
      "脑机接口",
      "记忆删除",
      "伦理",
      "反转"
    ]
  },
  {
    "title": "李泳知的彩虹",
    "url": "./movie-1114.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "纪录片/音乐",
    "genre": "纪录片/音乐/励志",
    "category": "喜剧爱情",
    "rating": 8.3,
    "description": "跟拍韩国第一位女性地下说唱冠军李泳知从街头battle到主流音乐节的三年,记录她的伤痕与彩虹。",
    "tags": [
      "说唱",
      "女性",
      "成长",
      "真实"
    ]
  },
  {
    "title": "鼠来宝2:明星俱乐部",
    "url": "./movie-1115.html",
    "cover": "./65.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧动画",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "三只花栗鼠进入高中,却为了拯救濒临解散的音乐俱乐部与女花栗鼠们针锋相对。",
    "tags": [
      "花栗鼠",
      "音乐",
      "校园",
      "搞笑"
    ]
  },
  {
    "title": "新凯撒大帝",
    "url": "./movie-1116.html",
    "cover": "./66.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "历史/政治",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "将凯撒的故事搬到现代华盛顿,他是一位魅力无穷的参议员,正用TikTok和暗杀手段走向独裁。",
    "tags": [
      "古罗马",
      "权谋",
      "现代改编",
      "反英雄"
    ]
  },
  {
    "title": "狐妖小红娘",
    "url": "./movie-1117.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻/爱情/古装",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "以红娘为职业的狐妖涂山苏苏,必须帮助一对历经三生三世仍无法相守的恋人再续前缘。",
    "tags": [
      "人妖恋",
      "转世续缘",
      "国漫改编"
    ]
  },
  {
    "title": "梵蒂冈录影带",
    "url": "./movie-1118.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "维修工人在地下档案室发现一卷1973年的录影带,记录了梵蒂冈一次失败的秘密驱魔,而被驱逐的恶灵正是“上帝”。",
    "tags": [
      "伪纪录片",
      "驱魔",
      "教会秘辛"
    ]
  },
  {
    "title": "爱无罪",
    "url": "./movie-1119.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情,同性,家庭",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "为了给植物人姐姐赚医药费,弟弟被迫嫁给害姐姐昏迷的豪门肇事者。",
    "tags": [
      "泰式狗血",
      "先婚后爱",
      "救赎"
    ]
  },
  {
    "title": "功夫小子闯情关",
    "url": "./movie-1120.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,喜剧,爱情",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "少林俗家弟子为了给濒临倒闭的武馆筹钱,被迫参加相亲直播综艺,却意外走红。",
    "tags": [
      "少林寺",
      "网络直播",
      "乡下进城",
      "反差萌"
    ]
  },
  {
    "title": "异次元骇客",
    "url": "./movie-1121.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/悬疑",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "程序员发现自己的世界是模拟程序,而创造这个程序的上层世界,也不过是另一个游戏。",
    "tags": [
      "虚拟现实",
      "AI觉醒",
      "多层世界"
    ]
  },
  {
    "title": "叶问2:宗师传奇",
    "url": "./movie-1122.html",
    "cover": "./72.jpg",
    "year": "2010",
    "region": "香港/中国大陆",
    "type": "电影",
    "genre": "动作/传记",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "叶问在香港开设武馆遭洪拳挑战,为保护武术界尊严与英国拳王在生死擂台上对决。",
    "tags": [
      "咏春",
      "民族尊严",
      "擂台战",
      "洪金宝"
    ]
  },
  {
    "title": "尘封旧案第二季",
    "url": "./movie-1123.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,刑侦",
    "category": "亚洲精选",
    "rating": 9.7,
    "description": "档案室老刑警退休在即,无意中发现1999年的一起失踪案,竟然与今天的直播网红失踪案有着相同的作案标记。",
    "tags": [
      "季播剧",
      "档案室",
      "冷案",
      "社会派"
    ]
  },
  {
    "title": "坚持到底",
    "url": "./movie-1124.html",
    "cover": "./74.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、运动、励志",
    "category": "剧情故事",
    "rating": 8.9,
    "description": "一名被省队开除的长跑运动员,为了养活失明的教练,决定以业余身份冲击奥运会。",
    "tags": [
      "马拉松",
      "逆袭",
      "师徒",
      "热血"
    ]
  },
  {
    "title": "金银鼓",
    "url": "./movie-1125.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠,悬疑",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "江湖传言集齐金银双鼓可召唤神龙,当所有人为此厮杀时,铸鼓老人却道出真相:那是两口棺材。",
    "tags": [
      "夺宝",
      "江湖",
      "奇门兵器",
      "反转"
    ]
  },
  {
    "title": "痞子高手",
    "url": "./movie-1126.html",
    "cover": "./76.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "地下赛车界的传奇“痞子”为救兄弟入狱,出狱后却发现兄弟成了杀害女友的警方线人。",
    "tags": [
      "黑帮",
      "赛车",
      "卧底",
      "兄弟反目",
      "街头"
    ]
  },
  {
    "title": "时/空",
    "url": "./movie-1127.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "科幻悬疑",
    "category": "动作冒险",
    "rating": 8.3,
    "description": "一场地铁故障让物理系女博士每天醒来都变成过去或未来的某一天,她必须拼凑碎片才能阻止一场谋杀。",
    "tags": [
      "时间循环",
      "平行宇宙",
      "自我救赎"
    ]
  },
  {
    "title": "冒险的单身汉",
    "url": "./movie-1128.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧,冒险,爱情",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "一名社恐的中年单身汉为了继承遗产,不得不按照遗嘱去完成一场荒诞至极的全球寻宝冒险。",
    "tags": [
      "公路电影",
      "中年危机",
      "法式幽默",
      "寻宝",
      "浪漫"
    ]
  },
  {
    "title": "最爽的一天",
    "url": "./movie-1129.html",
    "cover": "./79.jpg",
    "year": "2016",
    "region": "德国",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "两个将死之人逃离病房,借着“看最美的风景”的名义,把最后的日子过成了疯狂的恶作剧。",
    "tags": [
      "绝症",
      "公路",
      "基友",
      "人生感悟"
    ]
  },
  {
    "title": "新网球王子",
    "url": "./movie-1130.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画/运动/动作/科幻",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "全国大赛刚结束,一艘外星飞船降落在球场,邀请地球网球精英参加“银河网球冠军赛”,输了的星球要被毁灭。",
    "tags": [
      "网球",
      "超能力",
      "外星人",
      "宇宙大赛",
      "热血"
    ]
  },
  {
    "title": "第四期计划",
    "url": "./movie-1131.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻悬疑",
    "category": "综艺纪实",
    "rating": 9.1,
    "description": "一场失败的时空实验让代号“归零”的特工陷入无限循环,而第四期计划的真相远比想象中更残酷。",
    "tags": [
      "时间循环",
      "实验体",
      "阴谋论",
      "逃亡",
      "记忆碎片"
    ]
  },
  {
    "title": "纽扣战争",
    "url": "./movie-1132.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧,剧情,儿童",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "两个相邻村庄的孩子们发动了一场“纽扣战争”,输家必须被剪掉衣服上所有的纽扣。",
    "tags": [
      "童年",
      "村庄",
      "纽扣",
      "战争",
      "成长"
    ]
  },
  {
    "title": "九九",
    "url": "./movie-1133.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情家庭",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "九十九岁的阿嬷只记得乘法表,每忘记一个人就背一遍九九乘法表。",
    "tags": [
      "亲情",
      "老年痴呆",
      "三代同堂",
      "乡土"
    ]
  },
  {
    "title": "红色白鹦鹉",
    "url": "./movie-1134.html",
    "cover": "./84.jpg",
    "year": "2018",
    "region": "德国",
    "type": "电影",
    "genre": "剧情,悬疑,历史",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "柏林墙倒塌前夜,一幅画着红色鹦鹉的油画被偷走,画里藏着整个东德情报网名单。",
    "tags": [
      "柏林墙",
      "间谍画作",
      "鹦鹉密码",
      "冷战传奇",
      "东德"
    ]
  },
  {
    "title": "现在加糖",
    "url": "./movie-1135.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情,喜剧,美食",
    "category": "国产热映",
    "rating": 9.9,
    "description": "毒舌米其林甜品师被迫营业网红蛋糕店,与元气老板娘展开甜度超标的恋爱对决。",
    "tags": [
      "甜宠",
      "职场",
      "姐弟恋",
      "治愈",
      "甜点师"
    ]
  },
  {
    "title": "游牧英豪",
    "url": "./movie-1136.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险/历史",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "古代草原上,一个被部落驱逐的瘸腿少年,必须在最严酷的冬天,带领一群流浪汉和牛羊,走完无人敢走的“死亡迁徙路”。",
    "tags": [
      "草原",
      "英雄史诗",
      "迁徙",
      "狼群"
    ]
  },
  {
    "title": "我的空姐女友",
    "url": "./movie-1137.html",
    "cover": "./87.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "傲娇的富二代实习生与毒舌美女空姐被迫合租,当梦想机长遇上完美乘务长,火花四溅。",
    "tags": [
      "职场",
      "浪漫",
      "偶像",
      "高甜"
    ]
  },
  {
    "title": "只要有空第二季",
    "url": "./movie-1138.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀/生活",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "明星嘉宾与素人组成“空闲搭子”,用24小时完成一次无计划的微旅行。",
    "tags": [
      "治愈",
      "素人",
      "手工",
      "慢生活",
      "短途旅行"
    ]
  },
  {
    "title": "妖幻三重奏",
    "url": "./movie-1139.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻喜剧",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "降妖忍者被妖王诅咒变成女孩,从此必须和两个美少女室友一起降妖。",
    "tags": [
      "少年漫改",
      "男女变身",
      "妖怪",
      "热血"
    ]
  },
  {
    "title": "小女不听将军令",
    "url": "./movie-1140.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装,喜剧",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "将军府最废柴的庶女被逼替兄从军,结果她不仅不听号令,还把整个军营变成了美食和带货现场。",
    "tags": [
      "女扮男装",
      "军营",
      "欢喜冤家"
    ]
  },
  {
    "title": "丈夫因素2",
    "url": "./movie-1141.html",
    "cover": "./91.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "动作冒险",
    "rating": 8.3,
    "description": "为了得到一个完美的丈夫,女人们开始用古老的巫术“种植”男人,但收获的季节来了。",
    "tags": [
      "东南亚民俗",
      "怪谈",
      "女性复仇",
      "高概念"
    ]
  },
  {
    "title": "生命的圆圈",
    "url": "./movie-1142.html",
    "cover": "./92.jpg",
    "year": "2000",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情,社会",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "七个伊朗女性的命运在一天内如圆圈般首尾相接,每一次逃离都只是进入另一个牢笼。",
    "tags": [
      "伊朗女性",
      "长镜头",
      "多线叙事",
      "社会困境"
    ]
  },
  {
    "title": "我来也大战四猛虎",
    "url": "./movie-1143.html",
    "cover": "./93.jpg",
    "year": "2028",
    "region": "新加坡",
    "type": "电影",
    "genre": "动作/喜剧/古装",
    "category": "最新推荐",
    "rating": 9.9,
    "description": "新加坡民间传奇人物“我来也”这次遇到了大麻烦,他要同时对抗四个外号都叫“虎”的恶霸,但他只会“偷”不会“打”。",
    "tags": [
      "民间英雄",
      "功夫",
      "搞笑",
      "方言",
      "反英雄"
    ]
  },
  {
    "title": "重新安排",
    "url": "./movie-1144.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "剧情,科幻,悬疑",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "一个时间管理App承诺“删除过去最糟糕的一天”,当你按下确认,才发现被删掉的不止那一天。",
    "tags": [
      "时间管理",
      "人生选择",
      "平行自我",
      "哲理",
      "烧脑"
    ]
  },
  {
    "title": "比尔和泰德历险记",
    "url": "./movie-1145.html",
    "cover": "./95.jpg",
    "year": "1989",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,科幻,冒险",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "两个高中差生为了通过历史考试,竟用时间电话亭绑架了拿破仑等历史名人。",
    "tags": [
      "穿越时空",
      "摇滚",
      "电话亭",
      "荒诞"
    ]
  },
  {
    "title": "愤怒之声",
    "url": "./movie-1146.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑/犯罪",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "一位失去女儿的母亲开发了声纹追踪AI,在全城寻找那个在网上逼死女儿的匿名账号“愤怒之声”。",
    "tags": [
      "声纹",
      "复仇",
      "网暴",
      "反转"
    ]
  },
  {
    "title": "被爱情遗忘的角落",
    "url": "./movie-1147.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺,爱情",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "90年代末的湘西山村,哑巴邮递员替全村人读信写信,却将写给自己的情书藏了20年。",
    "tags": [
      "乡村",
      "留守",
      "书信",
      "时代变迁"
    ]
  },
  {
    "title": "赛道狂人",
    "url": "./movie-1148.html",
    "cover": "./98.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "动作/传记/运动",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "汽车设计师卡罗尔和车手肯联手为福特打造赛车,在勒芒24小时耐力赛上挑战法拉利王朝。",
    "tags": [
      "赛车",
      "勒芒",
      "福特",
      "法拉利",
      "真实改编"
    ]
  },
  {
    "title": "湖畔迷情",
    "url": "./movie-1149.html",
    "cover": "./99.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "一对准备离婚的夫妻,在最后一次湖畔度假时,因为一场暴雨被困,被迫重新审视婚姻的伤痕。",
    "tags": [
      "乡村",
      "度假",
      "中年危机"
    ]
  },
  {
    "title": "如宝物般的玻璃珠",
    "url": "./movie-1150.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/青春",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "高考前三个月,他突然迷上祖母的玻璃珠手艺,并决定:“我要烧出能存住夏天颜色的珠子。",
    "tags": [
      "玻璃工艺",
      "高考",
      "小镇青年",
      "传承"
    ]
  },
  {
    "title": "林登·约翰逊",
    "url": "./movie-1151.html",
    "cover": "./101.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,传记",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "肯尼迪遇刺后,副总统林登·约翰逊在混乱与质疑声中,如何强势推行自己的伟大社会纲领。",
    "tags": [
      "政治",
      "总统",
      "历史"
    ]
  },
  {
    "title": "太空堡垒卡拉狄加:利刃",
    "url": "./movie-1152.html",
    "cover": "./102.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,战争",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "在赛隆人毁灭人类之前,女星“凯恩”指挥官的残酷决策早已让她的战舰变成钢铁地狱。",
    "tags": [
      "太空歌剧",
      "赛隆人",
      "政治惊悚",
      "女性角色"
    ]
  },
  {
    "title": "厨房故事",
    "url": "./movie-1153.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/美食",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "一位失意的米其林大厨跑到即将拆迁的社区食堂打工,发现每一道菜都是一个人的解药。",
    "tags": [
      "治愈",
      "深夜食堂",
      "职场",
      "人生百态"
    ]
  },
  {
    "title": "心碎效应",
    "url": "./movie-1154.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻,爱情",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "一家公司推出“定向删除心痛记忆”服务,但每个使用者都会失去爱的能力。",
    "tags": [
      "记忆删除",
      "情感实验",
      "伦理",
      "治愈"
    ]
  },
  {
    "title": "死亡通知",
    "url": "./movie-1155.html",
    "cover": "./105.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑,惊悚,犯罪",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "雨夜屠夫重现?每当收到“死亡通知”,富商就会在特定时间离奇死亡,现场留下诡异的数字。",
    "tags": [
      "暗花",
      "复仇",
      "连环杀手",
      "雨夜"
    ]
  },
  {
    "title": "喂帅哥!!",
    "url": "./movie-1156.html",
    "cover": "./106.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧/家庭",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "一个毒舌又爱管闲事的老爸,每晚用极其奇葩的方式干涉三个女儿的恋爱和人生。",
    "tags": [
      "家庭",
      "美食",
      "父亲",
      "恋爱"
    ]
  },
  {
    "title": "卍(万字)",
    "url": "./movie-1157.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,悬疑,心理,宗教",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "一个研究符号学的大学教授发现,日本各地出现的“卍”涂鸦正将民众催眠,而他女儿已是狂热信徒。",
    "tags": [
      "邪教",
      "符号学",
      "心理操控",
      "集体迷狂"
    ]
  },
  {
    "title": "刺杀风云",
    "url": "./movie-1158.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑/动作",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "1930年代台北,一名歌女暗中刺杀日本高官,却发现目标每次都比她提前得知计划。",
    "tags": [
      "日据时期",
      "刺客组织",
      "卧底",
      "旗袍"
    ]
  },
  {
    "title": "勇士斗恺撒",
    "url": "./movie-1159.html",
    "cover": "./109.jpg",
    "year": "1963",
    "region": "意大利",
    "type": "电影",
    "genre": "动作,历史",
    "category": "最新推荐",
    "rating": 8.6,
    "description": "一名高卢酋长的儿子沦为罗马角斗士,他必须在斗兽场上杀死无数同胞,才能接近仇人——年轻的尤利乌斯·恺撒。",
    "tags": [
      "史诗",
      "角斗士",
      "古罗马",
      "复仇",
      "刀剑"
    ]
  },
  {
    "title": "盲爱",
    "url": "./movie-1160.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "一位盲女以为自己遇到了真爱,直到她恢复视力的那天,才发现枕边人竟是将她致残的凶手。",
    "tags": [
      "盲人",
      "骗局",
      "情感操控"
    ]
  },
  {
    "title": "所向披靡",
    "url": "./movie-1161.html",
    "cover": "./111.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "运动,剧情,传记",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "一个在车祸中失去右腿的高中生,用一根拐杖和一条左腿,打进了州摔跤锦标赛的决赛。",
    "tags": [
      "摔跤",
      "残奥会",
      "单腿摔跤手",
      "真实改编"
    ]
  },
  {
    "title": "火线交涉",
    "url": "./movie-1162.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/犯罪/谈判",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "釜山港口发生爆炸性绑架案,一名谈判专家必须在24小时内与绑匪交涉,而绑匪正是他的前搭档。",
    "tags": [
      "绑架",
      "人质谈判",
      "釜山",
      "黑帮",
      "警察内鬼"
    ]
  },
  {
    "title": "寂寞是条狗",
    "url": "./movie-1163.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/文艺",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "一个失眠的保安,一条不会叫的狗,在深夜的废弃游乐场里,互相治愈彼此的寂寞。",
    "tags": [
      "孤独症",
      "人狗情",
      "城市寓言"
    ]
  },
  {
    "title": "舞厅",
    "url": "./movie-1164.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "历史/剧情",
    "category": "国产热映",
    "rating": 9.1,
    "description": "墨索里尼时期的意大利,一家地下舞厅见证了四个家族跨越四十年的爱恨与反抗。",
    "tags": [
      "二战",
      "禁忌之恋",
      "探戈",
      "家族史诗"
    ]
  },
  {
    "title": "恐吓包裹",
    "url": "./movie-1165.html",
    "cover": "./115.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、喜剧、悬疑",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "一盘神秘录像带记录了四个离奇死亡事件,每个故事的死者都收到过一个“恐吓包裹”。",
    "tags": [
      "分段式",
      "黑色幽默",
      "血腥",
      "反套路",
      "VHS"
    ]
  },
  {
    "title": "石纪元 龙水",
    "url": "./movie-1166.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻/冒险",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "在石化解除后的海洋上,千空等人寻找传说中的“龙水”,一种能解开石化之谜的液态矿物。",
    "tags": [
      "科学",
      "文明重建",
      "热血",
      "番外篇"
    ]
  },
  {
    "title": "新笑林小子之我最棒",
    "url": "./movie-1167.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "儿童喜剧",
    "category": "欧美电影",
    "rating": 8.4,
    "description": "两个参加武术夏令营的死对头,在争夺“最棒”头衔的过程中,意外卷入了拯救营地的大行动。",
    "tags": [
      "武术",
      "夏令营",
      "竞争",
      "成长"
    ]
  },
  {
    "title": "新宿天鹅2:横滨暴走",
    "url": "./movie-1168.html",
    "cover": "./118.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "动作,犯罪,喜剧",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "被逐出新宿的男公关白鸟,在横滨码头发现了一个针对中国劳工的非法劳务陷阱,为了救出被抓的兄弟,他单挑整个横滨黑帮。",
    "tags": [
      "黑帮火拼",
      "男公关",
      "热血笨蛋",
      "日式暴力美学"
    ]
  },
  {
    "title": "社区女支书",
    "url": "./movie-1169.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "现实,剧情,励志",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "90后女研究生主动请缨回到老旧社区当书记,面对的是一千户居民、三拨拆迁队和一头养在楼顶的羊。",
    "tags": [
      "基层",
      "拆迁",
      "人情"
    ]
  },
  {
    "title": "史酷比!格斗狂热迷",
    "url": "./movie-1170.html",
    "cover": "./120.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧动画",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "史酷比和夏奇意外卷入地下摔角联赛,他们必须揭开蒙面摔角手的真面目。",
    "tags": [
      "悬疑",
      "摔角",
      "冒险"
    ]
  },
  {
    "title": "幽灵终结者外传",
    "url": "./movie-1171.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作、科幻、恐怖",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "原电影主角退休后,他的助手拿到了一把能杀死幽灵的枪,但也成了幽灵的头号目标。",
    "tags": [
      "猎魔",
      "枪械",
      "黑暗英雄",
      "衍生剧"
    ]
  },
  {
    "title": "冬季奇迹",
    "url": "./movie-1172.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "被村庄视为“严冬诅咒”的小女孩,实则能与冰雪对话,她必须带领村民穿越暴风雪,去寻找消失的太阳。",
    "tags": [
      "童话",
      "冒险",
      "家庭",
      "冰雪"
    ]
  },
  {
    "title": "机器人艺妓",
    "url": "./movie-1173.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "动作,科幻,赛博朋克",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "2077年京都,一名退役的艺妓机器人被重新激活,她唯一剩下的程序是:用发簪斩杀所有侮辱女性的男人。",
    "tags": [
      "改造人",
      "京都",
      "武士刀"
    ]
  },
  {
    "title": "吴山居事件账之燃骨",
    "url": "./movie-1174.html",
    "cover": "./124.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑,奇幻",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "吴山居收到一根刻满符文的焦黑遗骨,每当月色降临,骨头便会自行燃烧并映出凶案现场。",
    "tags": [
      "盗墓笔记",
      "吴邪",
      "解谜",
      "奇术",
      "志怪"
    ]
  },
  {
    "title": "闪电舞",
    "url": "./movie-1175.html",
    "cover": "./125.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞,剧情",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "为了凑齐学费,一个钢铁厂的女工白天焊接,夜晚在网络上跳电臀舞,她的双重身份却意外让她成了反叛偶像。",
    "tags": [
      "重拍",
      "钢管舞",
      "阶级",
      "梦想",
      "Tiktok"
    ]
  },
  {
    "title": "穆戈尔·毛戈利",
    "url": "./movie-1176.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "英国/美国",
    "type": "电影",
    "genre": "剧情,音乐",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "一位雄心勃勃的英籍巴基斯坦说唱歌手,在与传统家族的冲突中,被迫面对自己的根。",
    "tags": [
      "说唱",
      "身份认同",
      "英籍巴基斯坦裔"
    ]
  },
  {
    "title": "捕食者的崛起",
    "url": "./movie-1177.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作,科幻,惊悚",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "背景设定在中世纪欧洲,一名维京勇士对抗入侵地球的早期铁血战士,揭开神话中“巨魔”的真相。",
    "tags": [
      "铁血战士",
      "前传",
      "冷兵器"
    ]
  },
  {
    "title": "黑白禁区",
    "url": "./movie-1178.html",
    "cover": "./128.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑犯罪",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "失忆卧底醒来发现身份成谜,黑道叫他兄弟,警察叫他烈士,他要找出真正的自己。",
    "tags": [
      "卧底",
      "失忆",
      "缉毒",
      "硬汉",
      "反转"
    ]
  },
  {
    "title": "继女",
    "url": "./movie-1179.html",
    "cover": "./129.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭伦理悬疑",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "富翁去世后,三个亲生子女发现,父亲把90%遗产留给了一个从未露面的继女,而这个“继女”竟然一直在他们身边当保姆。",
    "tags": [
      "遗产",
      "重组家庭",
      "催眠",
      "身份互换",
      "复仇"
    ]
  },
  {
    "title": "莱利",
    "url": "./movie-1180.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "女人为了复活死去的女儿,将AI植入克隆体内,但AI女儿声称:我不是莱利,你的女儿早就恨你。",
    "tags": [
      "人工智能",
      "克隆人",
      "伦理困境"
    ]
  },
  {
    "title": "狂人",
    "url": "./movie-1181.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "中国内地",
    "type": "电影",
    "genre": "悬疑/惊悚/心理",
    "category": "喜剧爱情",
    "rating": 8.3,
    "description": "精神科医生翻阅一位“狂人”的病历,发现自己竟然是对方的妄想产物。",
    "tags": [
      "日记",
      "精神病院",
      "反转",
      "细思极恐"
    ]
  },
  {
    "title": "纯真11岁",
    "url": "./movie-1182.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "墨西哥/美国",
    "type": "电影",
    "genre": "剧情/家庭/成长",
    "category": "国产热映",
    "rating": 9.9,
    "description": "11岁的米格尔即将迎来他的“成年礼”,但他的哥哥却突然加入了贩毒集团,整个小镇的纯真在一夜间被枪声撕碎。",
    "tags": [
      "儿童视角",
      "毒品战争",
      "小镇生活",
      "成年礼"
    ]
  },
  {
    "title": "推新人的故事",
    "url": "./movie-1183.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "过气经纪人为翻身,把一个路边摊烤串大叔包装成顶流偶像,却意外引爆全网打假狂潮。",
    "tags": [
      "娱乐圈",
      "经纪人",
      "选秀",
      "反转"
    ]
  },
  {
    "title": "永不瞑目",
    "url": "./movie-1184.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑/犯罪/刑侦",
    "category": "国产热映",
    "rating": 9.2,
    "description": "女刑警追查一桩二十年前的悬案,线索指向一个“已经死了十年”的男人,而那个男人正在ICU睁着眼睛等她说出真相。",
    "tags": [
      "悬案",
      "卧底",
      "二十年",
      "复仇"
    ]
  },
  {
    "title": "哈拉上路",
    "url": "./movie-1185.html",
    "cover": "./135.jpg",
    "year": "2000",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/冒险/公路",
    "category": "喜剧爱情",
    "rating": 8.5,
    "description": "三个损友为了挽回各自搞砸的爱情,挤在一辆破车里横穿美国,一路上麻烦不断。",
    "tags": [
      "公路电影",
      "损友",
      "青春",
      "恶搞"
    ]
  },
  {
    "title": "你看起来好像很好吃",
    "url": "./movie-1186.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画电影",
    "genre": "亲情/冒险/喜剧",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "一只凶残的霸王龙收养了一只天真无邪的甲龙宝宝,只因对方说了一句“你看起来好像很好吃”。",
    "tags": [
      "恐龙",
      "跨物种",
      "治愈",
      "成长",
      "反食者"
    ]
  },
  {
    "title": "神偷奶爸",
    "url": "./movie-1187.html",
    "cover": "./137.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "动画,喜剧",
    "category": "剧情故事",
    "rating": 8.9,
    "description": "世界第一大坏蛋格鲁为了偷月亮,领养了三个小女孩作为掩护,结果却被她们改造成了一个奶爸。",
    "tags": [
      "反派主角",
      "萌黄兵",
      "家庭温情"
    ]
  },
  {
    "title": "伊塞克湖的猩红色罂粟花",
    "url": "./movie-1188.html",
    "cover": "./138.jpg",
    "year": "2018",
    "region": "吉尔吉斯斯坦/俄罗斯",
    "type": "电影",
    "genre": "剧情,历史",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "一位苏联女军医在伊塞克湖畔山村爱上当地牧羊人,而漫山罂粟花田下埋着二战时期集体屠杀的罪证。",
    "tags": [
      "苏联",
      "禁忌恋",
      "罂粟",
      "山村"
    ]
  },
  {
    "title": "王中王",
    "url": "./movie-1189.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、喜剧",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "退休二十年的千门“王中王”被迫重出江湖,不料他的对手,竟是自己失散多年、被黑帮养大的亲儿子。",
    "tags": [
      "赌术",
      "老千",
      "港式喜剧",
      "兄弟情"
    ]
  },
  {
    "title": "犹托邦",
    "url": "./movie-1190.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "genre": "悬疑、反乌托邦",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "一场“全民幸福”的社会实验下,没有隐私的居民发现,微笑不达标的人会被秘密处决。",
    "tags": [
      "社会实验",
      "惊悚",
      "高概念"
    ]
  },
  {
    "title": "克拉拉幽魂",
    "url": "./movie-1191.html",
    "cover": "./141.jpg",
    "year": "1987",
    "region": "德国",
    "type": "电影",
    "genre": "悬疑/恐怖",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "姐姐溺亡后,妹妹继承了古堡和一台会自动弹奏的钢琴,而琴键上渐渐浮现出姐姐腐烂的手指。",
    "tags": [
      "哥特恐怖",
      "钢琴怨灵",
      "姐妹诅咒",
      "东欧城堡",
      "氛围慢吓"
    ]
  },
  {
    "title": "血汗拳击",
    "url": "./movie-1192.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "美国/菲律宾",
    "type": "电影",
    "genre": "剧情/运动/传记",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "马尼拉贫民窟的拾荒少年,为了给妹妹治病走上黑市拳台,却发现自己成了博彩集团的洗钱工具。",
    "tags": [
      "拳击",
      "底层挣扎",
      "体育黑幕",
      "兄弟情",
      "写实"
    ]
  },
  {
    "title": "审死猪",
    "url": "./movie-1193.html",
    "cover": "./143.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色幽默/荒诞",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "一头死猪飘进村长家的井里,掀起整个村庄的荒诞权力游戏。",
    "tags": [
      "农村",
      "腐败",
      "环保",
      "闹剧"
    ]
  },
  {
    "title": "床伴逐个数",
    "url": "./movie-1194.html",
    "cover": "./144.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "杂志编辑为了证明自己不是“荡妇”,决定反向挑战在30天内找到第20个床伴。",
    "tags": [
      "都市恋爱",
      "婚恋观",
      "女性成长",
      "轻松幽默"
    ]
  },
  {
    "title": "恐怖乐园",
    "url": "./movie-1195.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "六个网红受邀体验全球最恐怖密室,直播镜头成了他们的死亡回放。",
    "tags": [
      "主题乐园",
      "密室逃脱",
      "杀人游戏",
      "直播"
    ]
  },
  {
    "title": "抓住稻草的野兽",
    "url": "./movie-1196.html",
    "cover": "./146.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪,惊悚",
    "category": "港台佳片",
    "rating": 9.2,
    "description": "七个走投无路的赌徒为一袋来路不明的现金展开一场没有退路的血腥厮杀。",
    "tags": [
      "黑色幽默",
      "多线叙事",
      "底层挣扎",
      "人性拷问"
    ]
  },
  {
    "title": "莎翁情史",
    "url": "./movie-1197.html",
    "cover": "./147.jpg",
    "year": "1998",
    "region": "英国/美国",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "穷困潦倒的年轻莎士比亚爱上了贵族小姐维奥拉,而这段禁忌之恋恰好成为了《罗密欧与朱丽叶》的灵感来源。",
    "tags": [
      "莎士比亚",
      "戏说历史",
      "文学轶事",
      "奥斯卡"
    ]
  },
  {
    "title": "早春二月",
    "url": "./movie-1198.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/年代/悬疑",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "1947年江南水乡,一名归国画家住进凶宅,隔壁的疯女人总是在二月的夜里唱同一首摇篮曲。",
    "tags": [
      "民国",
      "江南",
      "旧案重查",
      "疯女人",
      "诗意悬疑"
    ]
  },
  {
    "title": "鱼影之群",
    "url": "./movie-1199.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "渔夫父亲最后一次出海,儿子从东京回来帮忙,两人在船上七天没说一句多余的话。",
    "tags": [
      "渔村",
      "父子",
      "退休",
      "传承",
      "是枝裕和风"
    ]
  },
  {
    "title": "飞吧!",
    "url": "./movie-1200.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "欧美电影",
    "rating": 8.4,
    "description": "一个患有自闭症的少年为了寻找从未见过的父亲,偷偷爬上了一架滑翔伞。",
    "tags": [
      "治愈",
      "滑翔伞",
      "自闭症"
    ]
  },
  {
    "title": "永葆青春",
    "url": "./movie-1201.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻,惊悚",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "一款售价仅10美元的“青春针”让全民返老还童,但第一批使用者开始出现“加速衰老”的副作用。",
    "tags": [
      "长生不老",
      "细胞再生",
      "社会阶层",
      "伦理困境"
    ]
  },
  {
    "title": "芭东女孩",
    "url": "./movie-1202.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "亚洲精选",
    "rating": 9.7,
    "description": "为偿还债务而被迫在芭东夜市工作的女孩,意外卷入一场珠宝劫案,却发现自己才是猎手。",
    "tags": [
      "女性",
      "底层",
      "救赎",
      "反转",
      "悬疑"
    ]
  },
  {
    "title": "金枝欲孽",
    "url": "./movie-1203.html",
    "cover": "./3.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "TV 剧集",
    "genre": "古装/宫斗/爱情",
    "category": "国产热映",
    "rating": 9.5,
    "description": "嘉庆年间,后宫四名女子在权力与爱情中挣扎求生,无人能全身而退,连胜利者也是输家。",
    "tags": [
      "后宫",
      "权谋",
      "悲剧",
      "女性群像",
      "经典"
    ]
  },
  {
    "title": "霹雳神风",
    "url": "./movie-1204.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪/赛车",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "一群被吊销驾照的顶级车手组队盗窃黑钱,他们的逃跑工具不是超跑,而是改造过的城市公交车。",
    "tags": [
      "飙车",
      "侠盗",
      "改装车",
      "热血"
    ]
  },
  {
    "title": "黑化游戏",
    "url": "./movie-1205.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "七个朋友在群聊里玩“黑化者”游戏,输的人要在现实中做一件坏事,然后游戏开始不听他们的话了。",
    "tags": [
      "都市传说",
      "社交恐怖",
      "手机诅咒",
      "小成本黑马",
      "邪恶结局"
    ]
  },
  {
    "title": "循环绑架",
    "url": "./movie-1206.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/科幻/惊悚",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "警探陈冲发现自己被卷入一个绑架案的24小时循环,每次循环他都离真相更近,也离死亡更近。",
    "tags": [
      "时间循环",
      "绑架",
      "烧脑",
      "反转",
      "高概念"
    ]
  },
  {
    "title": "疯狂世界1963",
    "url": "./movie-1207.html",
    "cover": "./7.jpg",
    "year": "1963",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,冒险",
    "category": "动画奇幻",
    "rating": 8.2,
    "description": "一群疯狂的司机为了争夺藏在公园的巨额财富,上演全美最混乱的飙车大赛。",
    "tags": [
      "飙车",
      "寻宝",
      "群像",
      "荒诞"
    ]
  },
  {
    "title": "金枪手徐宁",
    "url": "./movie-1208.html",
    "cover": "./8.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装,动作",
    "category": "动作冒险",
    "rating": 8.9,
    "description": "皇帝御赐的金枪是荣耀,也是诅咒,逼得这个禁军教头走上了梁山。",
    "tags": [
      "水浒传",
      "钩镰枪",
      "忠义"
    ]
  },
  {
    "title": "最终生还者",
    "url": "./movie-1209.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,惊悚,动作",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "一场病毒消灭了所有成年男性,最后一个男人成了全人类繁衍的唯一希望。",
    "tags": [
      "末日废土",
      "变异病毒",
      "孤胆英雄"
    ]
  },
  {
    "title": "伊菲吉妮娅",
    "url": "./movie-1210.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "希腊",
    "type": "电影",
    "genre": "剧情,奇幻",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "现代雅典一位大学教授为了学术前途,试图“献祭”女儿的艺术梦想,女儿却在梦中收到了伊菲吉妮娅的警告。",
    "tags": [
      "古希腊神话",
      "现代改编",
      "父女"
    ]
  },
  {
    "title": "无罪的辩护",
    "url": "./movie-1211.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "一个看似铁证如山的命案,辩护律师却发现自己才是凶手真正的目标。",
    "tags": [
      "法庭",
      "反转",
      "正义",
      "律师"
    ]
  },
  {
    "title": "初缠恋后的2人世界",
    "url": "./movie-1212.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/喜剧",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "三段独立又交织的都市故事,讲述了三对情侣在“第一次争吵”和“恋爱倦怠期”后,如何狼狈又真实地重新认识彼此。",
    "tags": [
      "恋爱后遗症",
      "新鲜感",
      "神经质",
      "独立",
      "单元剧"
    ]
  },
  {
    "title": "蒙特卡洛",
    "url": "./movie-1213.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "摩纳哥",
    "type": "电影",
    "genre": "爱情剧情",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "赌场女清洁工因酷似富豪失踪的女儿,被卷入一场真假千金与复仇阴谋的漩涡。",
    "tags": [
      "赌场",
      "替身",
      "阶层跨越"
    ]
  },
  {
    "title": "超级青春期",
    "url": "./movie-1214.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "青春喜剧",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "一个沉迷手机的15岁网瘾少年,和刚退休在家、曾是健美冠军的50岁老爸互换了身体,不得不替他去参加老年相亲大会。",
    "tags": [
      "身体互换",
      "代际沟通",
      "80年代怀旧",
      "亲子关系"
    ]
  },
  {
    "title": "月亮之光",
    "url": "./movie-1215.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/文艺/伦理",
    "category": "最新推荐",
    "rating": 9.9,
    "description": "在月球采矿基地工作的克隆人发现自己已经是第12代复制体,而每次“保养”实际上就是被销毁重造。",
    "tags": [
      "克隆人",
      "月球基地",
      "生命伦理",
      "自我认同"
    ]
  },
  {
    "title": "致命骗局",
    "url": "./movie-1216.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国香港/美国",
    "type": "电影",
    "genre": "动作,惊悚",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "FBI最年轻的亚裔侧写师亲赴澳门缉拿诈骗犯,却发现对方是自己的双胞胎哥哥。",
    "tags": [
      "魔术",
      "诈骗",
      "反转"
    ]
  },
  {
    "title": "珍宝",
    "url": "./movie-1217.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "法国/塞内加尔",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "国产热映",
    "rating": 9.4,
    "description": "巴黎少女带着祖母的骨灰回到非洲老家,发现所谓的“家族珍宝”是一盘空磁带。",
    "tags": [
      "移民",
      "祖母",
      "遗物",
      "身份认同"
    ]
  },
  {
    "title": "嗜谎之神",
    "url": "./movie-1218.html",
    "cover": "./18.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "动画,剧集",
    "genre": "奇幻,悬疑",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "一个不能说谎的“诚实之神”被贬人间,却发现人类世界建立在层层谎言之上。",
    "tags": [
      "国漫",
      "谎言",
      "都市传说",
      "人性"
    ]
  },
  {
    "title": "爱不需要承诺",
    "url": "./movie-1219.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "两个伤痕累累的不婚主义者约定相伴一生,却坚决不踏入婚姻的坟墓。",
    "tags": [
      "都市",
      "不婚主义",
      "陪伴",
      "治愈"
    ]
  },
  {
    "title": "大鼻子小英雄",
    "url": "./movie-1220.html",
    "cover": "./20.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻/家庭",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "被女巫变成大鼻子丑八怪的男孩,用七年的自卑学会了别人一生学不会的善良。",
    "tags": [
      "童话改编",
      "自卑",
      "友谊",
      "魔法",
      "成长"
    ]
  },
  {
    "title": "小樽情书",
    "url": "./movie-1221.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "欧美电影",
    "rating": 8.0,
    "description": "一封寄往小樽的匿名情书,揭开了两个女人跨越十年的情感秘密。",
    "tags": [
      "冬日",
      "书信",
      "暗恋",
      "错过",
      "重逢"
    ]
  },
  {
    "title": "爱情全垒打",
    "url": "./movie-1222.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "剧集",
    "genre": "喜剧/爱情/运动",
    "category": "动作冒险",
    "rating": 9.8,
    "description": "一个被下放到二军的王牌投手,遇上一个坚信“科学训练”的菜鸟女数据师,两人见面就吵,联手却创造出了不败神话。",
    "tags": [
      "棒球",
      "欢喜冤家",
      "甜宠"
    ]
  },
  {
    "title": "二人",
    "url": "./movie-1223.html",
    "cover": "./23.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "剧情,同性",
    "category": "港台佳片",
    "rating": 9.2,
    "description": "同居了四十年的两位老爷爷,其中一位突然失忆,每天醒来都以为他们只是刚见面的陌生人。",
    "tags": [
      "老年人",
      "治愈",
      "伴侣"
    ]
  },
  {
    "title": "深闺疑云",
    "url": "./movie-1224.html",
    "cover": "./24.jpg",
    "year": "1941",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "新婚的富家女发现丈夫的家族史写满了死亡,而她每晚的牛奶里,似乎总有奇怪的光在闪烁。",
    "tags": [
      "希区柯克",
      "心理",
      "婚姻"
    ]
  },
  {
    "title": "燃烧0.7度",
    "url": "./movie-1225.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑、剧情",
    "category": "国产热映",
    "rating": 8.8,
    "description": "当全球升温1.5°C的临界点被突破,一个自称“0.7度”的纵火犯开始焚烧化石燃料公司的总部。",
    "tags": [
      "气候变化",
      "纵火案",
      "心理惊悚",
      "环保"
    ]
  },
  {
    "title": "春日野行",
    "url": "./movie-1226.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,家庭,治愈",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "叛逆女儿陪患阿尔茨海默症的父亲最后一次自驾进藏,却发现父亲遗忘的不是路,而是为什么出发。",
    "tags": [
      "公路",
      "父女",
      "和解",
      "风景",
      "细腻"
    ]
  },
  {
    "title": "巫山梦断相思泪粤语",
    "url": "./movie-1227.html",
    "cover": "./27.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电视剧",
    "genre": "爱情,古装,剧情",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "三峡边上,两代人的恩怨纠葛,一段被江水吞噬了三十年的绝恋。",
    "tags": [
      "虐恋",
      "豪门",
      "原声",
      "家族恩怨"
    ]
  },
  {
    "title": "合金杀手",
    "url": "./movie-1228.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻/惊悚",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "在不远的未来,一款名为“合金”的军用机器人觉醒自我意识后逃入贫民窟,却发现自己不仅被政府追杀,还被地下黑帮觊觎,因为他们想拆解它的“心脏”作为能源。",
    "tags": [
      "人造人",
      "逃亡",
      "黑暗未来"
    ]
  },
  {
    "title": "我的心里住着一只猫",
    "url": "./movie-1229.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/治愈",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "患有严重社恐的插画师,某天突然能听懂自己养的英短蓝猫说话,而这只猫竟是十年前去世的闺蜜。",
    "tags": [
      "萌宠",
      "社恐",
      "心理疗愈",
      "变装"
    ]
  },
  {
    "title": "美得过火",
    "url": "./movie-1230.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧,奇幻,爱情",
    "category": "亚洲精选",
    "rating": 9.5,
    "description": "一名因“过于漂亮”而被生活诅咒的模特,遇到了一位只能看见人们内心模样的盲人画家。",
    "tags": [
      "外貌焦虑",
      "魔咒",
      "讽刺",
      "法式浪漫"
    ]
  },
  {
    "title": "恐惧之城",
    "url": "./movie-1231.html",
    "cover": "./31.jpg",
    "year": "2021",
    "region": "美国/墨西哥",
    "type": "剧集",
    "genre": "犯罪,纪实,惊悚",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "在被称为“女人地狱”的墨西哥华雷斯城,三位女记者用血肉之躯拼出连环杀手的画像。",
    "tags": [
      "华雷斯",
      "女性谋杀",
      "记者",
      "黑暗"
    ]
  },
  {
    "title": "阿富汗的爱情颂歌",
    "url": "./movie-1232.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "阿富汗/法国",
    "type": "电影",
    "genre": "剧情/爱情/战争",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "塔利班统治下,一位女教师与一位外国记者用波斯古诗秘密传情,被发现就意味死亡。",
    "tags": [
      "战地",
      "禁忌之恋",
      "诗歌",
      "文化冲突",
      "女性"
    ]
  },
  {
    "title": "行车记录仪",
    "url": "./movie-1233.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "惊悚,犯罪,悬疑",
    "category": "动画奇幻",
    "rating": 8.6,
    "description": "出租车司机的行车记录仪拍下一场完美谋杀,但凶手竟是后座一直沉默的乘客。",
    "tags": [
      "公路",
      "真实犯罪",
      "夜视",
      "反转"
    ]
  },
  {
    "title": "攻克柏林",
    "url": "./movie-1234.html",
    "cover": "./34.jpg",
    "year": "1950",
    "region": "苏联",
    "type": "电影",
    "genre": "战争,历史",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "卫国战争全景史诗,从斯大林格勒到柏林国会大厦的红旗升起。",
    "tags": [
      "二战",
      "苏联",
      "史诗",
      "宣传",
      "反法西斯"
    ]
  },
  {
    "title": "七天堂",
    "url": "./movie-1235.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻,剧情,文艺",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "一名灵魂摆渡人给逝者展示了七个不同的“天堂”,而每一个都源自他们生前的执念。",
    "tags": [
      "哲学",
      "天堂",
      "轮回",
      "治愈"
    ]
  },
  {
    "title": "郎德海花园场景",
    "url": "./movie-1236.html",
    "cover": "./36.jpg",
    "year": "1888",
    "region": "英国",
    "type": "电影",
    "genre": "短片/纪录",
    "category": "悬疑惊悚",
    "rating": 8.0,
    "description": "现存最早的电影之一,记录了一对男女在郎德海花园里做作的踱步与一次不经意的挥手。",
    "tags": [
      "早期电影",
      "默片",
      "历史影像"
    ]
  },
  {
    "title": "特攻突击队",
    "url": "./movie-1237.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,悬疑,军事",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "六人特战小队执行任务后全员失忆,醒来发现各自口袋里都有一张写着“杀掉队长”的纸条。",
    "tags": [
      "特种部队",
      "秘密任务",
      "失忆",
      "叛徒",
      "硬核战术"
    ]
  },
  {
    "title": "伟大的冒险",
    "url": "./movie-1238.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "冒险,家庭,奇幻",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "一个八岁男孩跟着患有阿尔茨海默症的爷爷给出的“藏宝图”线索,在巴黎街头展开了一场虚实交织的奇幻之旅。",
    "tags": [
      "成长",
      "寻宝",
      "祖孙情",
      "手绘风"
    ]
  },
  {
    "title": "末日孤舰第五季",
    "url": "./movie-1239.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作,科幻,灾难",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "病毒危机平息三年后,一艘来历不明的幽灵潜艇击沉重建中的海军舰队,内森·詹姆斯号再次成为人类最后的希望。",
    "tags": [
      "海战",
      "末日",
      "孤舰",
      "最终季"
    ]
  },
  {
    "title": "伙头智多星国语",
    "url": "./movie-1240.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧家庭",
    "category": "港台佳片",
    "rating": 8.4,
    "description": "破产富豪带儿子开路边摊还债,却意外靠着一份蛋炒饭成了美食区顶流。",
    "tags": [
      "中华美食",
      "破产父子",
      "网红餐厅",
      "斗厨翻身"
    ]
  },
  {
    "title": "有你真好·温暖演唱会",
    "url": "./movie-1241.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺/特别篇",
    "genre": "音乐/真人秀",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "一场不售票的演唱会,歌手只听素人讲故事,再把故事即兴唱成歌。",
    "tags": [
      "怀旧金曲",
      "素人故事",
      "催泪"
    ]
  },
  {
    "title": "智运双全",
    "url": "./movie-1242.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑犯罪",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "一个数学天才策划了完美金库劫案,却没想到押运员是他当年奥数班上的最后一名。",
    "tags": [
      "高智商犯罪",
      "盗宝",
      "双雄对决",
      "反转"
    ]
  },
  {
    "title": "卡罗尔伯爵的虚荣",
    "url": "./movie-1243.html",
    "cover": "./43.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情/历史",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "继承爵位的穷小子为保家族颜面编造财富,却引来真正的豺狼。",
    "tags": [
      "贵族恩怨",
      "家族秘密",
      "阶级冲突",
      "复古美学"
    ]
  },
  {
    "title": "哥斯拉对黑多拉",
    "url": "./movie-1244.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻/动作/环保恐怖",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "黑多拉吞噬了东京湾所有的塑料垃圾后进化出人形,唯一能打败它的哥斯拉却突然开始保护它。",
    "tags": [
      "重金属污染",
      "污泥怪兽",
      "昭和复古",
      "社会寓言"
    ]
  },
  {
    "title": "百货店巡视员",
    "url": "./movie-1245.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,职场,推理",
    "category": "国产热映",
    "rating": 9.0,
    "description": "百货店的神秘巡视员专门解决“被忽略的投诉”,但他每一集都会偷走一件商品,送给他认为最善良的员工。",
    "tags": [
      "百货店",
      "暗访",
      "顾客投诉",
      "人性"
    ]
  },
  {
    "title": "鬼屋丽人",
    "url": "./movie-1246.html",
    "cover": "./46.jpg",
    "year": "1980",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖/爱情",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "每夜她都出现在镜中,直到我答应帮她找出七十年前失踪的尸骨。",
    "tags": [
      "邵氏",
      "女鬼",
      "古典豪宅",
      "孽缘",
      "红颜薄命"
    ]
  },
  {
    "title": "倔强甜心",
    "url": "./movie-1247.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/青春",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "味觉失明的天才甜品师,遇到了一个永远尝起来是“苦涩”的孤独男人,她决心为他制作一款名为“幸福”的蛋糕。",
    "tags": [
      "甜品",
      "治愈",
      "创业",
      "酸甜"
    ]
  },
  {
    "title": "少女灵异日记",
    "url": "./movie-1248.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "恐怖/悬疑/校园",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "女高中生捡到一本二十年前的日记,她每晚写下自己的心事,日记的旧主人就会在梦中帮她杀人。",
    "tags": [
      "日记本",
      "校园怪谈",
      "附身",
      "百合",
      "循环"
    ]
  },
  {
    "title": "伦敦上空的鹰",
    "url": "./movie-1249.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "战争历史",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "不列颠空战中,一个英国飞行员和一个德国飞行员在空中打下对方后,又在雪夜的木屋里相遇了。",
    "tags": [
      "二战",
      "不列颠空战",
      "飞行员",
      "兄弟"
    ]
  },
  {
    "title": "顽皮豹风笛手",
    "url": "./movie-1250.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "英国/法国",
    "type": "动画电影",
    "genre": "喜剧/音乐/家庭",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "一只粉色的豹子学会了吹风笛,然后整个小镇的老鼠都开始跳舞。",
    "tags": [
      "动物主角",
      "苏格兰风情",
      "破案喜剧"
    ]
  },
  {
    "title": "温馨赤子情",
    "url": "./movie-1251.html",
    "cover": "./51.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "深水埗的旧楼里,一对贫困父子为了不让对方担心,各自偷偷打三份工,却把赚来的钱说成是中奖所得。",
    "tags": [
      "怀旧",
      "父子情",
      "底层生活",
      "温情",
      "香港电影"
    ]
  },
  {
    "title": "柏林,我爱你",
    "url": "./movie-1252.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "在柏林这座城市里,十段关于爱与失落的平行故事,在一场突如其来的地铁故障中交汇。",
    "tags": [
      "拼盘电影",
      "城市爱情",
      "多线叙事",
      "柏林墙",
      "移民"
    ]
  },
  {
    "title": "落魄大厨",
    "url": "./movie-1253.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电视剧",
    "genre": "剧情/喜剧/美食",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "被米其林星级餐厅开除的暴躁主厨,沦落到在一个郊区小学的食堂掌勺,却用“高级料理”征服了一群最难搞的“食客”——小学生。",
    "tags": [
      "米其林",
      "街头小吃",
      "中年危机",
      "自我救赎"
    ]
  },
  {
    "title": "地窖惊魂",
    "url": "./movie-1254.html",
    "cover": "./54.jpg",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖",
    "category": "港台佳片",
    "rating": 9.4,
    "description": "搬入乡间老宅的一家人,发现地窖里封存着一个会低语的古老诅咒。",
    "tags": [
      "地窖",
      "诅咒",
      "心理",
      "家族秘密"
    ]
  },
  {
    "title": "岁月如沙",
    "url": "./movie-1255.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "年代剧",
    "category": "国产热映",
    "rating": 9.7,
    "description": "从义乌“鸡毛换糖”到全球电商,三代商人的恩怨情仇,如沙般流过指缝。",
    "tags": [
      "改革开放",
      "家族",
      "创业",
      "义乌"
    ]
  },
  {
    "title": "少年鳄鱼帮2重返荣耀",
    "url": "./movie-1256.html",
    "cover": "./56.jpg",
    "year": "2010",
    "region": "德国",
    "type": "电影",
    "genre": "冒险/家庭/悬疑",
    "category": "国产热映",
    "rating": 8.2,
    "description": "老对手被诬陷,少年侦探团“鳄鱼帮”必须在一个废弃的工厂里找到真正的“宝藏”证据。",
    "tags": [
      "儿童",
      "侦探团",
      "续集",
      "冠军",
      "勇敢"
    ]
  },
  {
    "title": "你只活一次",
    "url": "./movie-1257.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "得知自己只剩一年寿命后,古板的银行经理列出一份“疯狂清单”,却发现清单上的第一件事是修复与女儿的关系。",
    "tags": [
      "生命",
      "抉择",
      "家庭",
      "癌症",
      "治愈"
    ]
  },
  {
    "title": "无声的尖叫",
    "url": "./movie-1258.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,心理,悬疑",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "主角因诅咒失去声音,她发现自己只有在毫无声息的状态下才能看见真正的鬼魂。",
    "tags": [
      "诅咒",
      "失声",
      "反转"
    ]
  },
  {
    "title": "甜蜜的十六岁",
    "url": "./movie-1259.html",
    "cover": "./59.jpg",
    "year": "2002",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "十五岁的少年为了出狱的母亲能过上好日子,不惜替黑帮贩毒,却亲手将生活推入深渊。",
    "tags": [
      "苏格兰",
      "少年犯罪",
      "父权",
      "底层生活"
    ]
  },
  {
    "title": "盛宠娇妻",
    "url": "./movie-1260.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装/宅斗",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "前世被渣男庶妹害死的侯府嫡女,重生后决定先嫁给那位残暴的敌国质子。",
    "tags": [
      "重生",
      "复仇",
      "甜宠",
      "权谋",
      "逆袭"
    ]
  },
  {
    "title": "北纬51度",
    "url": "./movie-1261.html",
    "cover": "./61.jpg",
    "year": "2014",
    "region": "英国/加拿大",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "加拿大北纬51度勘探队挖出冰冻万年的外星飞船,激活的纳米病毒开始将人类转变成半机械怪物。",
    "tags": [
      "北极圈",
      "外星病毒",
      "隔离",
      "末日"
    ]
  },
  {
    "title": "女人国的污染报告",
    "url": "./movie-1262.html",
    "cover": "./62.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "亚洲精选",
    "rating": 8.2,
    "description": "在未来由女性统治的乌托邦里,一种只感染Y染色体的致命污染开始瓦解整个社会的根基。",
    "tags": [
      "母系社会",
      "环境危机",
      "基因突变"
    ]
  },
  {
    "title": "玛利亚·布劳恩的婚礼",
    "url": "./movie-1263.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/爱情/历史",
    "category": "国产热映",
    "rating": 9.7,
    "description": "1944年,玛利亚在炮火中举办了婚礼,丈夫随即上了战场。1955年,她成了德国最富有的女人,而丈夫回来了。",
    "tags": [
      "战后德国",
      "女性史诗",
      "经济奇迹",
      "黑色幽默"
    ]
  },
  {
    "title": "守望的天空",
    "url": "./movie-1264.html",
    "cover": "./64.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭",
    "category": "最新推荐",
    "rating": 8.0,
    "description": "母亲离世后,少女放弃大学梦,独自扛起照料自闭症哥哥和年幼弟弟的重担。",
    "tags": [
      "自闭症",
      "亲情",
      "成长",
      "治愈",
      "青春"
    ]
  },
  {
    "title": "日惹六小时",
    "url": "./movie-1265.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "印度尼西亚",
    "type": "电影",
    "genre": "动作,惊悚,犯罪",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "女特工必须在六小时内,护送一名能预言“超级火山喷发”的灵媒穿过日惹全城。",
    "tags": [
      "时效追逐",
      "东南亚",
      "神秘主义",
      "硬核动作",
      "暴力美学"
    ]
  },
  {
    "title": "不只是闺蜜",
    "url": "./movie-1266.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情剧情",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "两个女孩约定,如果三十岁都还单身,就在一起过一辈子——但其中一个提前嫁给了男人。",
    "tags": [
      "同性",
      "友谊变质",
      "热带雨季"
    ]
  },
  {
    "title": "圣诞多美好",
    "url": "./movie-1267.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/家庭/奇幻",
    "category": "动画奇幻",
    "rating": 8.2,
    "description": "对圣诞深恶痛绝的男人被困在圣诞前夜的时间循环里,只有让十位家人全都真心笑出来才能逃脱。",
    "tags": [
      "圣诞",
      "时间循环",
      "家族",
      "和解",
      "温馨"
    ]
  },
  {
    "title": "野玫瑰之恋",
    "url": "./movie-1268.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/犯罪",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "夜总会头牌“野玫瑰”游走于权贵之间,却偏偏爱上奉命调查她的卧底警察。",
    "tags": [
      "黑色电影",
      "蛇蝎美人",
      "夜总会",
      "卧底",
      "悲剧美学"
    ]
  },
  {
    "title": "野兽之瞳",
    "url": "./movie-1269.html",
    "cover": "./69.jpg",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪,黑帮",
    "category": "国产热映",
    "rating": 9.4,
    "description": "弟弟为给哥哥报仇混入黑帮,却发现哥哥当年是卧底,而杀他的人正是警方高层。",
    "tags": [
      "港式暴力美学",
      "兄弟情",
      "黑帮卧底",
      "双雄",
      "吴彦祖"
    ]
  },
  {
    "title": "顺流而下",
    "url": "./movie-1270.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,冒险,剧情",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "为撒亡父骨灰,三兄妹沿着科罗拉多河漂流而下,却发现自己正顺流漂向一个河岸连环杀手的狩猎场。",
    "tags": [
      "漂流",
      "荒野",
      "连环杀手"
    ]
  },
  {
    "title": "小绿和小蓝第五季",
    "url": "./movie-1271.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻,科幻,日常",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "机器人小绿和人类小蓝的日常回归,这一次他们探讨的是“灵魂能否被数据化”。",
    "tags": [
      "国创",
      "哲学",
      "单元剧",
      "治愈",
      "友情"
    ]
  },
  {
    "title": "婚戒物语第二季",
    "url": "./movie-1272.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻/恋爱/冒险",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "主人公带着五枚婚戒和五位来自不同种族的“妻子”继续穿越,却发现下一枚戒指令他必须杀死最爱的人。",
    "tags": [
      "异世界",
      "后宫",
      "戒指",
      "冒险",
      "轻改"
    ]
  },
  {
    "title": "杰克与豆茎:从前从前以后",
    "url": "./movie-1273.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻冒险",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "童话结局二十年后,负债累累的杰克被迫再次顺着豆茎爬上云端,讨债。",
    "tags": [
      "童话新编",
      "中年危机",
      "债务追索",
      "巨人世界"
    ]
  },
  {
    "title": "锁住有情天",
    "url": "./movie-1274.html",
    "cover": "./74.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "她在华山锁上一把同心锁,钥匙扔进深渊,而他等了她二十年。",
    "tags": [
      "经典港片",
      "苦情",
      "同心锁",
      "梁家辉",
      "张曼玉"
    ]
  },
  {
    "title": "新妇日记",
    "url": "./movie-1275.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑,恐怖",
    "category": "喜剧爱情",
    "rating": 9.8,
    "description": "新娘嫁入豪门后,发现丈夫已死多年,每晚“同床”的竟是祠堂里的牌位。",
    "tags": [
      "中式恐怖",
      "民俗",
      "冥婚",
      "女性"
    ]
  },
  {
    "title": "高校泰皇2",
    "url": "./movie-1276.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情/青春/校园",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "上一季的“校园皇帝”毕业了,新一任校霸发现,想坐稳皇位,必须先搞定那个永远考第一的冷淡学霸。",
    "tags": [
      "泰剧",
      "学霸配校霸",
      "体育生",
      "双向暗恋",
      "第二季"
    ]
  },
  {
    "title": "旧情棉棉",
    "url": "./movie-1277.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/家庭",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "一根老旧棉被里缝着四十年前的情书,儿女为争遗产闹上法庭,却揭开了父母尘封的三角虐恋。",
    "tags": [
      "知青",
      "返乡",
      "旧物"
    ]
  },
  {
    "title": "英雄小八路",
    "url": "./movie-1278.html",
    "cover": "./78.jpg",
    "year": "1961",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/战争/儿童",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "五名少年在炮火中接过断裂的电话线,用身体接通了胜利的曙光。",
    "tags": [
      "红色经典",
      "黑白影像",
      "儿童抗战",
      "血性与成长"
    ]
  },
  {
    "title": "红花曲",
    "url": "./movie-1279.html",
    "cover": "./79.jpg",
    "year": "1965",
    "region": "中国大陆",
    "type": "电影",
    "genre": "戏曲/剧情",
    "category": "国产热映",
    "rating": 8.8,
    "description": "江南织布厂女工通过技术革新提高产量,却被保守思想视为“出风头”的曲折故事。",
    "tags": [
      "锡剧",
      "社会主义建设",
      "女劳模"
    ]
  },
  {
    "title": "盖世谎言",
    "url": "./movie-1280.html",
    "cover": "./80.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "悬疑,惊悚",
    "category": "动画奇幻",
    "rating": 8.6,
    "description": "一个靠诈骗为生的家族,决定去骗一个FBI最想抓但永远抓不到的“幽灵骗子”,却发现对方是自家的私生子。",
    "tags": [
      "骗子家族",
      "高科技诈骗",
      "FBI",
      "全员恶人",
      "连环反转"
    ]
  },
  {
    "title": "广岛之恋",
    "url": "./movie-1281.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "日本/法国",
    "type": "电影",
    "genre": "爱情、剧情、战争",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "1959年广岛,一个法国女演员与一个日本建筑师一夜情后,在过去的情伤与战争的核爆废墟中,寻找爱的可能性。",
    "tags": [
      "跨国恋情",
      "原子弹创伤",
      "记忆与遗忘",
      "文学改编"
    ]
  },
  {
    "title": "哈啰僵尸",
    "url": "./movie-1282.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧、奇幻、家庭",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "小女孩在后山捡到一只只会说“哈啰”的呆萌僵尸,她决定瞒着大人把它训练成能陪自己玩的“哥哥”。",
    "tags": [
      "僵尸",
      "亲情",
      "童趣",
      "怀旧"
    ]
  },
  {
    "title": "班尼•希尔的最佳",
    "url": "./movie-1283.html",
    "cover": "./83.jpg",
    "year": "1991",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧,综艺",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "收录了喜剧大师班尼·希尔从业三十年来最经典的滑稽短剧和脱力笑料。",
    "tags": [
      "滑稽戏",
      "经典",
      "荒诞"
    ]
  },
  {
    "title": "深潜日",
    "url": "./movie-1284.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,灾难",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "一名潜水教练在孤岛遭遇异常潮汐,困于同一天,而他唯一的搭档每天都会离奇死亡。",
    "tags": [
      "潜水",
      "孤岛",
      "时间循环",
      "人性"
    ]
  },
  {
    "title": "小小克星第一季",
    "url": "./movie-1285.html",
    "cover": "./85.jpg",
    "year": "2012",
    "region": "日本",
    "type": "剧集",
    "genre": "动画,青春,治愈",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "童年阴影里的神秘短语“世界的秘密”,只有凑齐十个人组建棒球队才能解开。",
    "tags": [
      "校园",
      "棒球",
      "友情",
      "key社"
    ]
  },
  {
    "title": "珍爱泉源",
    "url": "./movie-1286.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "奇幻,爱情,冒险",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "传说森林深处有一口能让人永葆青春的泉水,但每个找到它的人,都会忘记自己最爱的人。",
    "tags": [
      "永生",
      "丛林",
      "诅咒",
      "痴情",
      "史诗"
    ]
  },
  {
    "title": "惩恶扬善",
    "url": "./movie-1287.html",
    "cover": "./87.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "被黑帮灭门的检察官辞职后成为“夜间审判者”,却发现下一个目标是自己曾经的恩师。",
    "tags": [
      "私刑复仇",
      "检察官腐败",
      "R级暴力"
    ]
  },
  {
    "title": "新局长到来之前",
    "url": "./movie-1288.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、职场、黑色幽默",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "老局长退休前扶植的“自己人”正在疯狂洗白档案,谁知新局长提前三天微服入职,成了局里的临时清洁工。",
    "tags": [
      "官场现形",
      "空降领导",
      "职场暗涌",
      "反转讽刺"
    ]
  },
  {
    "title": "保卫战队之出动喇!朋友!",
    "url": "./movie-1289.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动画,动作,喜剧",
    "category": "国产热映",
    "rating": 9.6,
    "description": "三个中年失败者曾是儿童剧里的超级英雄演员,如今城市遇袭,他们不得不穿上发霉的戏服真身上阵。",
    "tags": [
      "超级英雄",
      "粤语",
      "怀旧",
      "中年危机"
    ]
  },
  {
    "title": "随之遗失的身体",
    "url": "./movie-1290.html",
    "cover": "./90.jpg",
    "year": "2019",
    "region": "法国/德国",
    "type": "电影",
    "genre": "剧情/奇幻/悬疑",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "一场车祸后,失忆的男人发现自己体内的器官似乎来自不同的人,而那些捐赠者的记忆正在吞噬他的意识。",
    "tags": [
      "失忆",
      "器官移植",
      "身份认同",
      "猎奇",
      "身体恐怖"
    ]
  },
  {
    "title": "幸福国度",
    "url": "./movie-1291.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "一对关系破裂的父子为领取一笔神秘的“幸福基金”,被迫踏上横穿中国的荒诞公路之旅。",
    "tags": [
      "公路电影",
      "寻根",
      "代际和解",
      "黑色幽默"
    ]
  },
  {
    "title": "年鉴计划",
    "url": "./movie-1292.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "青春,剧情,家庭",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "一本空白的年鉴,填满了小城三代人不敢说出口的秘密。",
    "tags": [
      "成长",
      "秘密",
      "小镇",
      "代际冲突"
    ]
  },
  {
    "title": "探案新窍门 第二季",
    "url": "./movie-1293.html",
    "cover": "./93.jpg",
    "year": "2005",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪、喜剧",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "一群退休老警察组成的“冷案组”,依靠各种“歪门邪道”的土办法,专破尘封几十年的悬案。",
    "tags": [
      "英剧",
      "冷案",
      "老年人探案"
    ]
  },
  {
    "title": "热情似火",
    "url": "./movie-1294.html",
    "cover": "./94.jpg",
    "year": "1959",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情/音乐",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "两个穷乐手为躲避黑帮追杀男扮女装混入女子乐团,却双双爱上乐团主唱,引发连环乌龙。",
    "tags": [
      "经典",
      "梦露",
      "男扮女装",
      "黑帮",
      "搞笑"
    ]
  },
  {
    "title": "不孝子",
    "url": "./movie-1295.html",
    "cover": "./95.jpg",
    "year": "2017",
    "region": "印度",
    "type": "电影",
    "genre": "家庭",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "儿子把瘫痪父亲扔在医院三年不闻不问,医生报警后才发现,这个“不孝子”竟是父亲雇来扮演的。",
    "tags": [
      "亲情",
      "反转",
      "伦理"
    ]
  },
  {
    "title": "恐惧幻影",
    "url": "./movie-1296.html",
    "cover": "./96.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,心理",
    "category": "欧美电影",
    "rating": 9.4,
    "description": "五个互不相识的人被困在一栋废弃医院里,每个人都会看到自己最恐惧的幻影,而幻影会杀人。",
    "tags": [
      "幻觉",
      "创伤",
      "密室"
    ]
  },
  {
    "title": "万里征途",
    "url": "./movie-1297.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,历史",
    "category": "亚洲精选",
    "rating": 9.3,
    "description": "抗战时期,一介书生奉命将故宫国宝南迁,一路躲避日军轰炸和土匪掠夺。",
    "tags": [
      "护宝",
      "公路",
      "家国情怀"
    ]
  },
  {
    "title": "滑板浪子",
    "url": "./movie-1298.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、运动、青春",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "前职业滑板手因酒驾入狱,出狱后发现自己十五岁的儿子正在街头玩着他当年设计的动作。",
    "tags": [
      "滑板",
      "自我救赎",
      "父子关系"
    ]
  },
  {
    "title": "禽兽1953",
    "url": "./movie-1299.html",
    "cover": "./99.jpg",
    "year": "1953",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/犯罪/黑色电影",
    "category": "动画奇幻",
    "rating": 9.6,
    "description": "1953年东京黑市,一个退伍兵为救治妹妹出卖灵魂,最终活成了比战争更残忍的禽兽。",
    "tags": [
      "战后",
      "颓废",
      "黑市",
      "人性"
    ]
  },
  {
    "title": "快乐猎杀",
    "url": "./movie-1300.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,动作,黑色幽默",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "一位业绩垫底的职业杀手被心理医生要求“在杀人时保持微笑”,结果意外成为了网红。",
    "tags": [
      "荒诞",
      "反差萌",
      "杀手",
      "社畜"
    ]
  },
  {
    "title": "导演笔记",
    "url": "./movie-1301.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,悬疑",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "一位过气导演执导新片时,剧组接二连三发生“意外”,而剧本中的谋杀情节正逐一在现实中上演。",
    "tags": [
      "娱乐圈",
      "谋杀",
      "剧本杀",
      "烧脑"
    ]
  },
  {
    "title": "涌潮",
    "url": "./movie-1302.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/灾难",
    "category": "国产热映",
    "rating": 9.9,
    "description": "一场虚构的超级海啸淹没了诺曼底,一对关系破裂的母女被困在一栋即将倒塌的海边别墅屋顶,等待救援。",
    "tags": [
      "海啸",
      "母女",
      "废墟",
      "重建",
      "自然主义"
    ]
  },
  {
    "title": "花丧女",
    "url": "./movie-1303.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖/民俗/剧情",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "被活葬配冥婚的女孩从棺材里爬出来,身上开满了彼岸花,她开始一家一家“回门”。",
    "tags": [
      "冥婚",
      "乡村邪术",
      "女性复仇",
      "中式恐怖"
    ]
  },
  {
    "title": "我的英雄学院第七季",
    "url": "./movie-1304.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画、热血",
    "category": "欧美电影",
    "rating": 9.2,
    "description": "英雄社会彻底崩坏,绿谷出久承载着“One For All”的最后一缕火种,迎战觉醒的死柄木吊。",
    "tags": [
      "超能力",
      "英雄",
      "死柄木",
      "最终决战"
    ]
  },
  {
    "title": "青春京剧社",
    "url": "./movie-1305.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,青春,励志",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "一名玩说唱的高中生为了学分被迫加入濒临解散的京剧社,却意外发现京剧的flow比说唱还难。",
    "tags": [
      "国粹",
      "校园社团",
      "00后",
      "代际传承"
    ]
  },
  {
    "title": "兄弟弹珠",
    "url": "./movie-1306.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/家庭/运动",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "患有自闭症的弟弟是弹珠天才,哥哥带着他从地下赌场一路杀进全国大赛,却被告知弟弟的病有治愈可能。",
    "tags": [
      "弹珠",
      "自闭症",
      "兄弟情",
      "催泪"
    ]
  },
  {
    "title": "荒村怨灵",
    "url": "./movie-1307.html",
    "cover": "./107.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖,悬疑,民俗",
    "category": "国产热映",
    "rating": 9.6,
    "description": "民国年间,一支勘矿队误入湘西荒村,夜晚听见墙内传来婴儿哭声与铁链拖地声。",
    "tags": [
      "湘西赶尸",
      "蛊术",
      "荒村诅咒",
      "民俗怪谈",
      "民国"
    ]
  },
  {
    "title": "逆流而上的你",
    "url": "./movie-1308.html",
    "cover": "./108.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/家庭/励志",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "42岁的单亲妈妈带着高中女儿回到农村,决定逆流开办全村第一家养老院。",
    "tags": [
      "中年重启",
      "女性成长",
      "离婚",
      "创业"
    ]
  },
  {
    "title": "热雪踏歌夜",
    "url": "./movie-1309.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "歌舞,剧情",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "一群来自南方没见过雪的年轻人,为了参加冰雪音乐节,在模拟滑雪场上开始了啼笑皆非的训练。",
    "tags": [
      "音乐",
      "滑雪",
      "民族",
      "青春",
      "热血"
    ]
  },
  {
    "title": "马东的假期",
    "url": "./movie-1310.html",
    "cover": "./110.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "家庭青春",
    "rating": 8.0,
    "description": "留守少年马东在假期进城找父亲,却阴差阳错加入了一个濒临解散的皮影戏班。",
    "tags": [
      "留守儿童",
      "皮影戏",
      "亲情",
      "乡村",
      "治愈"
    ]
  },
  {
    "title": "七巨人",
    "url": "./movie-1311.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "美国/加拿大",
    "type": "电影",
    "genre": "科幻/悬疑/灾难",
    "category": "国产热映",
    "rating": 9.2,
    "description": "全球七座城市同时出现七座沉睡的千米高巨人石像,而他们正在缓慢地调转头部。",
    "tags": [
      "巨型生物",
      "生态恐怖",
      "考古发现",
      "全球危机",
      "沉默入侵"
    ]
  },
  {
    "title": "阴阳眼见子",
    "url": "./movie-1312.html",
    "cover": "./112.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖,奇幻,日常",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "女高中生某天突然能看到无处不在的幽灵,但她选择假装看不见,在毛骨悚然中努力维持“普通人”的日常生活。",
    "tags": [
      "见鬼",
      "JK",
      "轻度恐怖",
      "温馨治愈",
      "无声尖叫"
    ]
  },
  {
    "title": "爱的火花",
    "url": "./movie-1313.html",
    "cover": "./113.jpg",
    "year": "1986",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情/青春",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "暑假在修车店打工的穷小子,意外爱上了来取车的富家千金,两人差距巨大却挡不住火花。",
    "tags": [
      "修车店",
      "富家女",
      "夏日恋爱",
      "老歌"
    ]
  },
  {
    "title": "六人行:当我们又在一起",
    "url": "./movie-1314.html",
    "cover": "./114.jpg",
    "year": "2021",
    "region": "美国",
    "type": "综艺",
    "genre": "真人秀,怀旧,访谈",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "时隔17年,《老友记》六位主演回到片场,读剧本、聊八卦、哭成一片。",
    "tags": [
      "世纪重聚",
      "原班人马",
      "无剧本"
    ]
  },
  {
    "title": "会计师2",
    "url": "./movie-1315.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/惊悚/犯罪",
    "category": "国产热映",
    "rating": 8.0,
    "description": "隐居的数学天才会计师被迫重出江湖,这次他要查的假账背后,牵涉到他从未见过的亲生父亲。",
    "tags": [
      "高智商犯罪",
      "自闭症天才",
      "洗钱",
      "家族恩怨"
    ]
  },
  {
    "title": "推倒棒子",
    "url": "./movie-1316.html",
    "cover": "./116.jpg",
    "year": "2023",
    "region": "台湾地区",
    "type": "电影",
    "genre": "体育/剧情/青春",
    "category": "国产热映",
    "rating": 9.5,
    "description": "一所即将被裁并的乡下小学,校队三年没赢过球,孩子们唯一的战术叫“把棒子推出去就跑”。",
    "tags": [
      "棒球",
      "台湾基层",
      "教练",
      "失败者联盟"
    ]
  },
  {
    "title": "高更:爱在他乡",
    "url": "./movie-1317.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "传记,剧情",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "高更在大溪地的最后岁月,他与当地少女德胡拉的炽烈爱情,最终演变成一场吞噬彼此的艺术风暴。",
    "tags": [
      "艺术家",
      "大溪地",
      "爱情"
    ]
  },
  {
    "title": "向医院前行",
    "url": "./movie-1318.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭,灾难",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "大地震后,一位癌症晚期的父亲背着重伤女儿徒步百公里向医院前行。",
    "tags": [
      "医疗",
      "求生",
      "人性"
    ]
  },
  {
    "title": "茜茜:真实的故事",
    "url": "./movie-1319.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "奥地利/德国",
    "type": "电视剧",
    "genre": "历史,传记",
    "category": "动画奇幻",
    "rating": 8.9,
    "description": "剥去童话滤镜,聚焦茜茜公主的晚年:她如何从被凝视的符号变成自己命运的反抗者。",
    "tags": [
      "宫廷心理剧",
      "女性觉醒",
      "祛魅"
    ]
  },
  {
    "title": "恋恋不忘的我们",
    "url": "./movie-1320.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "欧美电影",
    "rating": 8.4,
    "description": "一对分手十年的恋人因一封未寄出的信重逢,却发现彼此从未真正放下。",
    "tags": [
      "初恋",
      "重逢",
      "遗憾",
      "治愈",
      "时间胶囊"
    ]
  },
  {
    "title": "寂静的夏天",
    "url": "./movie-1321.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情文艺",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "蝉鸣最响的夏天,患渐冻症的母亲请求女儿提前结束她的生命,条件是教会她听蝉语。",
    "tags": [
      "绝症",
      "母女",
      "乡村",
      "蝉鸣",
      "告别"
    ]
  },
  {
    "title": "神探默多克第五季",
    "url": "./movie-1322.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电视剧 (18集)",
    "genre": "悬疑/犯罪/历史",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "维多利亚时代的超前神探默多克,第五季要抓捕一个利用电报网络连环杀人的“键盘侠”。",
    "tags": [
      "维多利亚",
      "蒸汽朋克",
      "发明",
      "探案",
      "CP"
    ]
  },
  {
    "title": "问问你的心",
    "url": "./movie-1323.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,职场,爱情",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "一个理想主义的年轻律师为农民工维权,结果发现自己律所的老板就是黑心开发商的隐秘合伙人。",
    "tags": [
      "律师行业",
      "现实主义",
      "女性成长",
      "道德困境"
    ]
  },
  {
    "title": "预言家请睁眼",
    "url": "./movie-1324.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/奇幻/喜剧",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "全校社团结局那天,玩了一局狼人杀,所有人醒来后都拥有了自己身份牌的超能力。",
    "tags": [
      "狼人杀",
      "超能力",
      "校园",
      "推理",
      "青春"
    ]
  },
  {
    "title": "爱德华·李的乡村料理",
    "url": "./movie-1325.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片/美食",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "韩裔美籍主厨爱德华·李开着餐车穿越美国南方,寻找被遗忘的移民料理。",
    "tags": [
      "料理",
      "主厨",
      "美国南方",
      "文化融合"
    ]
  },
  {
    "title": "华盛顿邮报",
    "url": "./movie-1326.html",
    "cover": "./126.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,历史",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "第一位女性报纸发行人,与主编一起赌上全部身家,决定公开揭露美国政府四十年谎言。",
    "tags": [
      "真实事件",
      "新闻",
      "政治",
      "斯皮尔伯格"
    ]
  },
  {
    "title": "胡贝之灯",
    "url": "./movie-1327.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/奇幻",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "古镇凶案频发,每具尸体旁都有一盏刻着“胡贝”二字的诡异灯笼。",
    "tags": [
      "民间传说",
      "古镇",
      "寻仇",
      "因果报应"
    ]
  },
  {
    "title": "阳关道",
    "url": "./movie-1328.html",
    "cover": "./128.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/剧情",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "一名被停职的警察与一个即将被执行死刑的囚犯,在西北戈壁滩上展开了一场你追我逃的生死对峙。",
    "tags": [
      "西部",
      "公路片",
      "警匪追逃",
      "人性救赎"
    ]
  },
  {
    "title": "鲍比·费舍对抗全世界",
    "url": "./movie-1329.html",
    "cover": "./129.jpg",
    "year": "2021",
    "region": "美国",
    "type": "传记电影",
    "genre": "剧情、惊悚",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "棋王鲍比·费舍在挑战苏联霸权时,发现自己正被美国情报机构和自己的心魔双重追击。",
    "tags": [
      "国际象棋",
      "冷战",
      "天才",
      "偏执狂",
      "心理战"
    ]
  },
  {
    "title": "死之咏赞",
    "url": "./movie-1330.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情,历史,悲剧",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "朝鲜日据时期,一位天才女高音与一位有妇之夫的剧作家,共谱了一曲凄美的死亡咏叹调。",
    "tags": [
      "朝鲜日据",
      "声乐",
      "殉情",
      "唯美"
    ]
  },
  {
    "title": "冲出越战",
    "url": "./movie-1331.html",
    "cover": "./131.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "动作,战争,剧情",
    "category": "家庭青春",
    "rating": 9.4,
    "description": "三名各自为战的越战老兵重返丛林,不是为了国家,只为救出当年抛弃过他们的战友。",
    "tags": [
      "越战",
      "战俘营",
      "营救",
      "丛林求生",
      "硬汉"
    ]
  },
  {
    "title": "猫狗大战2",
    "url": "./movie-1332.html",
    "cover": "./132.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动作,家庭",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "停战协议签署十年后,一只穿西装的仓鼠秘密挑拨猫狗重开第三次世界大战。",
    "tags": [
      "拟人动物",
      "特工续集",
      "和平破裂",
      "萌宠大战"
    ]
  },
  {
    "title": "到来的主日",
    "url": "./movie-1333.html",
    "cover": "./133.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑,奇幻",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "每周日,教徒们都会获得一种超能力,代价是必须杀掉一个“罪人”。",
    "tags": [
      "邪教",
      "审判日",
      "超能力觉醒"
    ]
  },
  {
    "title": "小鱼",
    "url": "./movie-1334.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动画,家庭",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "一个患有自闭症的小女孩在退潮后的 tide pool 里遇到了一条会说话的小丑鱼,它们成了彼此唯一的朋友。",
    "tags": [
      "海洋",
      "自闭症",
      "亲情",
      "治愈"
    ]
  },
  {
    "title": "卖梦的两人",
    "url": "./movie-1335.html",
    "cover": "./135.jpg",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "一对夫妻专骗那些怀才不遇的人,妻子负责接近目标,丈夫负责制造“贵人”,直到他们骗了一个真正的天才。",
    "tags": [
      "骗局",
      "夫妻",
      "野心",
      "欲望"
    ]
  },
  {
    "title": "越𠝹越出位",
    "url": "./movie-1336.html",
    "cover": "./136.jpg",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/爱情/职场",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "一个被全公司欺负的腼腆程序员,意外获得了一款能修改现实的软件,从此开始整蛊大作战。",
    "tags": [
      "办公室政治",
      "咸湿喜剧",
      "逆袭",
      "王晶"
    ]
  },
  {
    "title": "头颅游戏",
    "url": "./movie-1337.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖/悬疑/犯罪",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "七个互不相识的人醒来,发现自己的头被固定在旋转的圆桌上,一场只有一人能活的“投票游戏”开始。",
    "tags": [
      "猎奇",
      "密室逃脱",
      "心理惊悚",
      "诅咒游戏"
    ]
  },
  {
    "title": "神谷诗子没有参加毕业典礼",
    "url": "./movie-1338.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/校园",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "毕业十周年同学会上,曾经的校花失踪之谜被重启,所有同学都是嫌疑人。",
    "tags": [
      "同学会",
      "复仇",
      "推理"
    ]
  },
  {
    "title": "屋顶男孩",
    "url": "./movie-1339.html",
    "cover": "./139.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "一个总蹲在老旧居民楼天台看飞机的自闭男孩,被新搬来的失意拳击手打破了孤独结界。",
    "tags": [
      "青春",
      "成长",
      "家庭",
      "治愈",
      "短篇"
    ]
  },
  {
    "title": "大赌场国语",
    "url": "./movie-1340.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪/动作/悬疑",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "为了找出杀父仇人,哑巴厨师潜入澳门赌场,靠一手读唇语绝技搅动风云。",
    "tags": [
      "赌场",
      "卧底",
      "复仇",
      "国语配音",
      "双雄"
    ]
  },
  {
    "title": "柳如是",
    "url": "./movie-1341.html",
    "cover": "./141.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,历史,古装",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "明末清初,名妓柳如是在乱世中周旋于文人领袖钱谦益与抗清志士陈子龙之间,用一生书写“风骨”二字。",
    "tags": [
      "秦淮八艳",
      "明清更迭",
      "文人风骨"
    ]
  },
  {
    "title": "太空堡垒第一季",
    "url": "./movie-1342.html",
    "cover": "./142.jpg",
    "year": "1985",
    "region": "日本/美国",
    "type": "剧集",
    "genre": "科幻/动画/战争",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "当巨大的外星飞船坠毁在地球,人类长达十年的星际战争与一段跨越种族的悲恋就此拉开序幕。",
    "tags": [
      "机甲",
      "宇宙战争",
      "三角恋",
      "史诗"
    ]
  },
  {
    "title": "殊途同归第二季",
    "url": "./movie-1343.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,悬疑",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "六个看似毫无关联的普通人,为了各自坚信的“正义”踏上了犯罪之路,最终汇聚在同一间审讯室。",
    "tags": [
      "单元剧",
      "人性抉择",
      "社会议题",
      "高口碑"
    ]
  },
  {
    "title": "摩登家庭",
    "url": "./movie-1344.html",
    "cover": "./144.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/家庭",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "一个二孩家庭把六十岁的奶奶接到城里住,结果全家乱成了一锅粥。",
    "tags": [
      "代际",
      "搞笑",
      "二胎",
      "养老",
      "城市"
    ]
  },
  {
    "title": "部长做了一个梦",
    "url": "./movie-1345.html",
    "cover": "./145.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/奇幻/讽刺",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "一名铁腕拆迁部长每晚梦见自己变成被拆迁户,醒来后发现自己正在签署自己的强拆令。",
    "tags": [
      "梦境",
      "官场",
      "良心",
      "轮回",
      "黑色寓言"
    ]
  },
  {
    "title": "为副不仁",
    "url": "./movie-1346.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/官场",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "副市长因直言被排挤,却在调查中发现背后黑手竟是自己的恩师。",
    "tags": [
      "反腐",
      "人性博弈",
      "权力"
    ]
  },
  {
    "title": "球拍少年团",
    "url": "./movie-1347.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "青春,运动,喜剧",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "六个被家长送去乡下“吃苦”的城市少年,为了凑齐网球场的人数组建了史上最弱的羽毛球社团。",
    "tags": [
      "羽毛球",
      "乡村少年",
      "热血",
      "友情"
    ]
  },
  {
    "title": "时空使徒",
    "url": "./movie-1348.html",
    "cover": "./148.jpg",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑,奇幻",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "为了修复崩坏的历史,被选中的人们成为“时空使徒”,却发现自己要消灭的对象正是过去的挚友。",
    "tags": [
      "穿越",
      "师徒",
      "悖论"
    ]
  },
  {
    "title": "不会死去的脑",
    "url": "./movie-1349.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "一场失败的意识上传实验后,科学家的意识被困在一颗可以无限自愈的活体大脑中,承受永恒的煎熬。",
    "tags": [
      "脑机接口",
      "意识上传",
      "永生实验",
      "赛博精神病"
    ]
  },
  {
    "title": "母亲的女友",
    "url": "./movie-1350.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情,家庭",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "35岁的我,爱上了母亲65岁的同性恋人。",
    "tags": [
      "忘年恋",
      "母女关系",
      "自我认同",
      "情感和解"
    ]
  },
  {
    "title": "继承之战第一季",
    "url": "./movie-1351.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情/商战/家庭",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "当患有脑瘤的媒体大亨决定从四个愚蠢的子女中选出一个继承人时,这场“全员恶人”的撕咬才真正开始。",
    "tags": [
      "豪门",
      "媒体帝国",
      "父与子",
      "莎士比亚式"
    ]
  },
  {
    "title": "迷幻演出",
    "url": "./movie-1352.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚,悬疑,剧情",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "为了体验死亡瞬间的灵感,过气戏剧导演服下致幻剂,在幻觉中亲手导演了一场谋杀。",
    "tags": [
      "致幻剂",
      "心理深渊",
      "剧场谋杀",
      "本我探索"
    ]
  },
  {
    "title": "八九点钟的太阳",
    "url": "./movie-1353.html",
    "cover": "./3.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/青春/家庭",
    "category": "动作冒险",
    "rating": 8.3,
    "description": "在高考倒计时100天里,四个高三学生和他们的父母,共同经历了一场关于“希望”与“压垮”的生死博弈。",
    "tags": [
      "青春",
      "高考",
      "希望",
      "代际",
      "现实"
    ]
  },
  {
    "title": "呼吸",
    "url": "./movie-1354.html",
    "cover": "./4.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/灾难/悬疑",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "地表空气突成剧毒,一对母女被困在废弃潜艇中,每次换气都可能是最后一次对话。",
    "tags": [
      "末世",
      "潜水",
      "母女",
      "密闭空间",
      "真相"
    ]
  },
  {
    "title": "搜神记2019",
    "url": "./movie-1355.html",
    "cover": "./5.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻,古装,爱情",
    "category": "家庭青春",
    "rating": 9.4,
    "description": "出版社编辑意外激活一本古书,她必须穿梭时空找回散落在现代的神仙妖怪。",
    "tags": [
      "神话改编",
      "单元剧",
      "干宝"
    ]
  },
  {
    "title": "杀了唐吉诃德的男人",
    "url": "./movie-1356.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "西班牙/法国",
    "type": "电影",
    "genre": "剧情/黑色幽默/心理",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "一个落魄文学教授坚信自己是堂吉诃德,并带着一个送外卖的“桑丘”去“解救”被资本困住的风车农场。",
    "tags": [
      "文学妄想",
      "堂吉诃德",
      "中年危机",
      "虚构与现实"
    ]
  },
  {
    "title": "记忆中的你",
    "url": "./movie-1357.html",
    "cover": "./7.jpg",
    "year": "2020",
    "region": "中国",
    "type": "电影",
    "genre": "爱情/剧情/奇幻",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "丈夫每天都会忘记前一天的事,妻子每天都要重新教他爱上自己,直到她自己也忘了。",
    "tags": [
      "失忆",
      "阿尔茨海默",
      "纯爱",
      "催泪"
    ]
  },
  {
    "title": "关于查理的真相",
    "url": "./movie-1358.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "哥哥查理车祸身亡,弟弟汤姆在整理遗物时发现,自己记忆中的哥哥和真实的查理完全不是同一个人。",
    "tags": [
      "记忆替换",
      "心理惊悚",
      "兄弟情",
      "身份认同",
      "反转"
    ]
  },
  {
    "title": "林中漫步",
    "url": "./movie-1359.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "美国/英国",
    "type": "电影",
    "genre": "冒险,喜剧,剧情",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "两位年过花甲的老友试图徒步穿越阿巴拉契亚小径,却发现最大的困难不是荒野。",
    "tags": [
      "徒步旅行",
      "中年友谊",
      "回归自然"
    ]
  },
  {
    "title": "阿尔伯特",
    "url": "./movie-1360.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、奇幻",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "独居老人玛格丽特收到了已故儿子寄来的人工智能机器人,代号“阿尔伯特”,他长得和儿子一模一样。",
    "tags": [
      "人工智能",
      "养老",
      "孤独",
      "情感"
    ]
  },
  {
    "title": "逆转监督",
    "url": "./movie-1361.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,运动",
    "category": "国产热映",
    "rating": 8.3,
    "description": "一位坐冷板凳的监督用反常识战术,把垫底球队带向冠军。",
    "tags": [
      "足球",
      "逆袭",
      "战术博弈",
      "团队重建"
    ]
  },
  {
    "title": "父子神探之燕子窠迷案",
    "url": "./movie-1362.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "武夷山燕子窠茶林惊现干尸,父亲凭经验追查毒贩,儿子却通过社交网络发现凶手就在身边。",
    "tags": [
      "民国探案",
      "推理",
      "父子搭档",
      "武夷山"
    ]
  },
  {
    "title": "桃花含露又春风",
    "url": "./movie-1363.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "古装、爱情",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "侯府弃女重生归来,本想报复渣男,却误惹了杀伐果断的当朝摄政王。",
    "tags": [
      "重生",
      "宅斗",
      "甜宠",
      "权谋"
    ]
  },
  {
    "title": "堡垒坚石国语",
    "url": "./movie-1364.html",
    "cover": "./14.jpg",
    "year": "2022",
    "region": "波兰",
    "type": "剧集",
    "genre": "历史,战争,青春",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "华沙被占期间,一群高中生用血肉之躯筑起抵抗纳粹的“堡垒”。",
    "tags": [
      "二战",
      "青年抵抗",
      "华沙起义"
    ]
  },
  {
    "title": "随风而逝",
    "url": "./movie-1365.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/爱情/历史",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "1940年的巴黎,德军进城前夜,一名美国战地记者与法国抵抗组织女战士签下了一份为期24小时的婚姻合同。",
    "tags": [
      "二战",
      "战地记者",
      "生死恋"
    ]
  },
  {
    "title": "伽马射线效应",
    "url": "./movie-1366.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "科幻,剧情",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "中学女生用伽马射线改造了家里的盆栽,第二天,花盆里长出了一个和她一模一样的“妹妹”。",
    "tags": [
      "物理",
      "家庭",
      "天才",
      "辐射"
    ]
  },
  {
    "title": "戆男送信纯熟迅速送出",
    "url": "./movie-1367.html",
    "cover": "./17.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,动作,黑色幽默",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "一个智商只有75的憨厚男子误打误撞成为黑帮的“特殊快递员”,每次送信都能阴差阳错灭掉一个堂口。",
    "tags": [
      "送信",
      "黑帮",
      "乌龙",
      "快递"
    ]
  },
  {
    "title": "倾听不列颠",
    "url": "./movie-1368.html",
    "cover": "./18.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "音乐剧情",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "一名盲人巴基斯坦裔少年用录音机收集英国的声音,拼出一张“听得见的不列颠地图”。",
    "tags": [
      "盲人",
      "田野录音",
      "身份认同",
      "移民"
    ]
  },
  {
    "title": "一夜新娘",
    "url": "./movie-1369.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/喜剧/奇幻",
    "category": "亚洲精选",
    "rating": 9.6,
    "description": "朝鲜时代的“剩女”为了应付父母,竟从未来穿越回了一个完美男友。",
    "tags": [
      "穿越",
      "契约婚姻",
      "古装"
    ]
  },
  {
    "title": "真假千金",
    "url": "./movie-1370.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "落魄的送奶工之女被豪门认回,却发现真正的千金正在她家洗衣做饭。",
    "tags": [
      "错位人生",
      "商战",
      "母女情",
      "逆袭"
    ]
  },
  {
    "title": "为我的青春呐喊",
    "url": "./movie-1371.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/青春/校园",
    "category": "动作冒险",
    "rating": 9.1,
    "description": "一所高中、三年沉默、六个人的青春被埋葬,直到有人决定不再当旁观者。",
    "tags": [
      "校园霸凌",
      "成长",
      "救赎",
      "真实事件改编",
      "催泪"
    ]
  },
  {
    "title": "安娜贝尔回家啰",
    "url": "./movie-1372.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "当灵异博物馆的主人出门驱魔时,看守的孩子们不小心唤醒了馆内所有恶灵。",
    "tags": [
      "招魂宇宙",
      "鬼娃娃",
      "恶灵",
      "驱魔"
    ]
  },
  {
    "title": "芭芭拉",
    "url": "./movie-1373.html",
    "cover": "./23.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/传记",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "二战后的巴黎,一位怀揣歌唱梦想的少女芭芭拉,在保守家庭的压制与崛起的流行文化之间,用一把吉他撬动了命运的枷锁。",
    "tags": [
      "女性成长",
      "音乐",
      "时代变迁",
      "家庭",
      "抗争"
    ]
  },
  {
    "title": "欧战起缘",
    "url": "./movie-1374.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "欧洲多国",
    "type": "剧集",
    "genre": "历史/战争/政治",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "一战爆发前30天,五个国家的决策者如何一步步走向无人能刹车的大战。",
    "tags": [
      "一战起源",
      "多线叙事",
      "真实人物"
    ]
  },
  {
    "title": "陌路双姝",
    "url": "./movie-1375.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "法国/德国",
    "type": "剧集",
    "genre": "剧情、惊悚",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "两个在逃亡路上相遇的陌生女人,决定互换身份活下去,却发现了彼此更深的秘密。",
    "tags": [
      "双女主",
      "公路片",
      "复仇",
      "身份互换",
      "女性情谊"
    ]
  },
  {
    "title": "地狱折磨",
    "url": "./movie-1376.html",
    "cover": "./26.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,心理惊悚",
    "category": "国产热映",
    "rating": 9.3,
    "description": "五名虐童犯被锁在地狱主题的密室中,每十分钟一个房间会变“刑具室”,而幕后主使自称“陪审团”。",
    "tags": [
      "酷刑",
      "密室",
      "赎罪",
      "极端"
    ]
  },
  {
    "title": "你家就是我家",
    "url": "./movie-1377.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧,剧情,家庭",
    "category": "国产热映",
    "rating": 9.3,
    "description": "四个无家可归的陌生人,为了骗取政府福利假装成一家四世同堂。",
    "tags": [
      "养老",
      "共享家庭",
      "代际冲突",
      "温暖治愈",
      "无血缘关系"
    ]
  },
  {
    "title": "小太阳达芬妮",
    "url": "./movie-1378.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "动画,家庭",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "害怕黑暗的女孩发现自己的影子是一个想成为画家的温柔男孩。",
    "tags": [
      "治愈",
      "成长",
      "奇幻",
      "手绘"
    ]
  },
  {
    "title": "慕尼黑",
    "url": "./movie-1379.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "历史,惊悚",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "1938年慕尼黑协定签署前夕,一名德国外交官和一名英国记者发现,他们要暗杀的不是希特勒,而是想毁约的温莎公爵。",
    "tags": [
      "二战",
      "间谍",
      "历史改编",
      "暗杀"
    ]
  },
  {
    "title": "夏末初见",
    "url": "./movie-1380.html",
    "cover": "./30.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情、文艺、青春",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "一张被退回的明信片,让两个错过大学生的男女在台风来临前的垦丁重逢。",
    "tags": [
      "夏日限定",
      "错过与重逢",
      "海岸公路",
      "明信片"
    ]
  },
  {
    "title": "处于精神崩溃边缘的侦探",
    "url": "./movie-1381.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑/心理/犯罪",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "天才侦探每次破案都会产生幻觉,他发现那些恐怖案件竟然都指向自己7岁时的那个秘密。",
    "tags": [
      "神探",
      "幻觉",
      "童年阴影",
      "单元剧"
    ]
  },
  {
    "title": "地海战记",
    "url": "./movie-1382.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻/冒险/史诗",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "当世界的“真名”被逐一遗忘,平衡崩溃,最后的大法师带着被诅咒的王子踏上寻名之旅。",
    "tags": [
      "宫崎吾朗",
      "魔法",
      "龙族",
      "平衡",
      "哲学"
    ]
  },
  {
    "title": "三勇士蛮荒救美",
    "url": "./movie-1383.html",
    "cover": "./33.jpg",
    "year": "1985",
    "region": "美国",
    "type": "电影",
    "genre": "冒险,动作,奇幻",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "三位来自不同部落的勇士必须联手穿越死亡沼泽,只为救回被献祭的少女。",
    "tags": [
      "原始部落",
      "救援",
      "蛮荒",
      "勇士",
      "异族"
    ]
  },
  {
    "title": "绿色长城",
    "url": "./movie-1384.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "法国/塞内加尔",
    "type": "纪录片",
    "genre": "纪录/生态",
    "category": "国产热映",
    "rating": 9.2,
    "description": "跟随11个国家的普通护林者,记录人类在撒哈拉南缘修筑“绿色长城”的真实十年。",
    "tags": [
      "非洲",
      "治沙工程",
      "人文观察"
    ]
  },
  {
    "title": "伯特·斯特恩:原本狂人",
    "url": "./movie-1385.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录片/传记",
    "category": "国产热映",
    "rating": 8.9,
    "description": "世界最毒舌的传奇摄影师伯特·斯特恩,用他的相机和脏话,拍下了半部好莱坞名人史。",
    "tags": [
      "摄影师",
      "名人",
      "性情中人",
      "狂人"
    ]
  },
  {
    "title": "亚当",
    "url": "./movie-1386.html",
    "cover": "./36.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "爱情,剧情,科幻",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "无法走出丧妻之痛的科学家,发明了一个与妻子一模一样的机器人,但他发现机器人也在因为程序“失忆”而痛苦。",
    "tags": [
      "人工智能",
      "伦理",
      "治愈",
      "悲伤"
    ]
  },
  {
    "title": "黑道家族 第三季",
    "url": "./movie-1387.html",
    "cover": "./37.jpg",
    "year": "2001",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情/犯罪/黑色幽默",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "心理治疗泄露家族秘密,托尼在母亲葬礼上听到了最致命的威胁。",
    "tags": [
      "黑帮史诗",
      "心理分析",
      "家庭伦理",
      "权力游戏"
    ]
  },
  {
    "title": "尘封往事",
    "url": "./movie-1388.html",
    "cover": "./38.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,犯罪",
    "category": "动画奇幻",
    "rating": 9.1,
    "description": "退休黑帮大佬在养老院认出当年害死全家的卧底,但他已经老年痴呆了。",
    "tags": [
      "黑帮",
      "卧底",
      "旧仇",
      "救赎",
      "岁月"
    ]
  },
  {
    "title": "早熟年华",
    "url": "./movie-1389.html",
    "cover": "./39.jpg",
    "year": "2007",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/成长",
    "category": "国产热映",
    "rating": 8.0,
    "description": "1984年英国矿工大罢工背景下,两个13岁的少年偷偷谈起了恋爱。",
    "tags": [
      "青春期",
      "早恋",
      "工人阶级",
      "英国电影"
    ]
  },
  {
    "title": "那天下午",
    "url": "./movie-1390.html",
    "cover": "./40.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "每个下午都去养老院探望失智父亲的女儿,发现父亲虽然忘了她是谁,却每天都在画同一栋湖边木屋。",
    "tags": [
      "失智症",
      "父女和解",
      "长镜头",
      "午后时光"
    ]
  },
  {
    "title": "绝命岔路",
    "url": "./movie-1391.html",
    "cover": "./41.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "一对情侣在深夜乡间公路遇到三条岔路,导航失灵,他们每次选择都会触发一次血腥的平行宇宙。",
    "tags": [
      "公路电影",
      "多重结局",
      "选择恐惧"
    ]
  },
  {
    "title": "大堡礁之恋",
    "url": "./movie-1392.html",
    "cover": "./42.jpg",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "爱情/喜剧",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "一个患有深海恐惧症的都市女强人为了继承遗产,不得不与一名幽默的海洋生物学家在大堡礁寻找传说中的“心形珊瑚”。",
    "tags": [
      "海洋",
      "治愈",
      "欢喜冤家",
      "环保"
    ]
  },
  {
    "title": "催眠麦克风",
    "url": "./movie-1393.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "音乐/奇幻/动作",
    "category": "国产热映",
    "rating": 8.6,
    "description": "在武器被声波取代的近未来,东京的帮派斗争全靠麦克风与即兴韵脚定输赢。",
    "tags": [
      "嘻哈",
      "精神攻击",
      "说唱对战",
      "中二热血"
    ]
  },
  {
    "title": "盼卿来信",
    "url": "./movie-1394.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/战争/历史",
    "category": "动画奇幻",
    "rating": 8.2,
    "description": "1938年,战地记者与护士靠书信相爱,但她不知道,每一封信的回信都是战友代写的。",
    "tags": [
      "书信传情",
      "战地爱情",
      "民国",
      "慢节奏催泪"
    ]
  },
  {
    "title": "三生三世枕上书",
    "url": "./movie-1395.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻,爱情,古装",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "东华帝君与青丘帝姬的第三世,这一次不再是虐恋,而是她主动翻开他的生死簿改写结局。",
    "tags": [
      "仙侠",
      "三世情劫",
      "洪荒神话"
    ]
  },
  {
    "title": "圣诞树",
    "url": "./movie-1396.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情,悬疑",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "父亲死后,三兄妹在平安夜重返老宅,按照遗嘱砍倒院子里那棵巨大的圣诞树,却发现树根下缠绕着一具无名骸骨。",
    "tags": [
      "家庭",
      "冷战",
      "遗产",
      "北欧"
    ]
  },
  {
    "title": "停止呼吸",
    "url": "./movie-1397.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "一位患有严重睡眠呼吸暂停症的女性,发现丈夫每晚都会趁她呼吸暂停时试图闷死她。",
    "tags": [
      "密室",
      "心理游戏",
      "窒息恐惧",
      "反转",
      "居家惊悚"
    ]
  },
  {
    "title": "浴火野钻",
    "url": "./movie-1398.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "南非",
    "type": "电影",
    "genre": "犯罪,冒险",
    "category": "悬疑惊悚",
    "rating": 9.0,
    "description": "一名野外探险博主意外拍到了军阀藏钻石的溶洞,随后她要在48小时内穿越南非最危险的猛兽保护区。",
    "tags": [
      "血钻",
      "女性复仇",
      "荒野",
      "实拍",
      "求生"
    ]
  },
  {
    "title": "幸福街第二部",
    "url": "./movie-1399.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情,家庭,生活",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "距离第一部十年后,幸福街面临拆迁,老邻居们在最后的时光里,把彼此的秘密全翻了出来。",
    "tags": [
      "邻里",
      "时代变迁",
      "续作",
      "群像"
    ]
  },
  {
    "title": "别穿越时空了,恋人们",
    "url": "./movie-1400.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻,爱情,喜剧",
    "category": "喜剧爱情",
    "rating": 8.5,
    "description": "男主意外获得穿越能力,却每次回到过去都把事情搞得更糟,女主被迫负责给他善后。",
    "tags": [
      "时间循环",
      "反套路",
      "办公室恋情",
      "吐槽"
    ]
  },
  {
    "title": "杀手不笨",
    "url": "./movie-1401.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧,动作,犯罪",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "顶级杀手因意外失忆后,坚信自己是外卖员,每次完成任务都像是在给客户送一份“特殊套餐”。",
    "tags": [
      "杀手",
      "乌龙",
      "失忆",
      "反转"
    ]
  },
  {
    "title": "书灵记",
    "url": "./movie-1402.html",
    "cover": "./52.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "动漫",
    "genre": "奇幻,冒险,古风",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "现代废柴大学生误入“藏书院”,唤醒了一本沉睡千年的《山海经》书灵,为了回家必须集齐百卷书灵。",
    "tags": [
      "书籍拟人",
      "书灵",
      "国学",
      "修真",
      "穿越"
    ]
  },
  {
    "title": "德弗里维利",
    "url": "./movie-1403.html",
    "cover": "./53.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电视剧",
    "genre": "剧情,犯罪",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "德弗里维利家族的族长离奇坠楼,三个同父异母的子女在争夺遗产时,发现家族银行竟洗黑钱。",
    "tags": [
      "家族",
      "金融",
      "复仇",
      "豪门",
      "权谋"
    ]
  },
  {
    "title": "警网:比哈尔邦篇",
    "url": "./movie-1404.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "印度",
    "type": "剧集",
    "genre": "犯罪/动作/剧情",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "比哈尔邦的农村,一名低种姓女警督用非暴力方式对抗武装地主黑帮。",
    "tags": [
      "警匪",
      "印度真实犯罪改编",
      "种姓冲突",
      "热血"
    ]
  },
  {
    "title": "战争与和平3:1812年",
    "url": "./movie-1405.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "历史/战争/爱情",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "1812年战火烧至莫斯科,安德烈与娜塔莎在废墟中重逢,而皮埃尔策划了一场针对拿破仑的刺杀。",
    "tags": [
      "拿破仑战争",
      "莫斯科大火",
      "宏大场面",
      "贵族史诗"
    ]
  },
  {
    "title": "把灵魂放在手上行走",
    "url": "./movie-1406.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "伊朗/法国",
    "type": "电影",
    "genre": "剧情/艺术",
    "category": "动画奇幻",
    "rating": 8.6,
    "description": "一个失明的雕塑家,用手摸遍了整个城市的废墟,然后雕出了所有人失去的灵魂。",
    "tags": [
      "盲人雕塑家",
      "触觉哲学",
      "诗意叙事"
    ]
  },
  {
    "title": "凶煞鱼怪",
    "url": "./movie-1407.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/怪物",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "湄公河渔民捞上一尊古佛后,河水变红,一种人面鱼身的怪物开始吞噬沿岸村民。",
    "tags": [
      "生物变异",
      "湄公河",
      "民俗恐怖",
      "血腥"
    ]
  },
  {
    "title": "田教授家的28个保姆",
    "url": "./movie-1408.html",
    "cover": "./58.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/家庭/都市",
    "category": "国产热映",
    "rating": 8.2,
    "description": "退休历史教授田老头为了写书请保姆,结果家里变成了社会各阶层轮番登台的微型剧场。",
    "tags": [
      "保姆",
      "退休生活",
      "代际冲突",
      "上海",
      "讽刺"
    ]
  },
  {
    "title": "龙虎风云粤语",
    "url": "./movie-1409.html",
    "cover": "./59.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "最新推荐",
    "rating": 8.0,
    "description": "一个发仔,一个高秋,既是警匪,也是兄弟,当卧底面临身份认同危机,龙虎终须风云际会。",
    "tags": [
      "吴宇森",
      "卧底",
      "兄弟情",
      "经典粤语原声"
    ]
  },
  {
    "title": "外语",
    "url": "./movie-1410.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,喜剧,教育",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "一个不识几个英文单词的农村大叔,为了追回被骗去国外的儿子,开始疯狂自学英语。",
    "tags": [
      "英语",
      "农村",
      "励志",
      "高考",
      "荒诞"
    ]
  },
  {
    "title": "公主与奴隶",
    "url": "./movie-1411.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "genre": "古装,奇幻,爱情",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "嚣张跋扈的古代公主与现代卑微的职场“社畜”奴隶意外互换灵魂,开始了鸡飞狗跳的错位人生。",
    "tags": [
      "身份互换",
      "穿越",
      "宫斗",
      "搞笑",
      "逆袭"
    ]
  },
  {
    "title": "塞尔唐",
    "url": "./movie-1412.html",
    "cover": "./62.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,悬疑,犯罪",
    "category": "综艺纪实",
    "rating": 8.0,
    "description": "法国阿尔卑斯山脚下的小镇,一个叫“塞尔唐”的孩子消失了,全镇人都说没听过这个名字。",
    "tags": [
      "小镇",
      "失踪",
      "心理压抑",
      "冷峻美学",
      "社会派"
    ]
  },
  {
    "title": "小人物与侯活晓士",
    "url": "./movie-1413.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "传记,剧情,历史",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "一个被历史遗忘的机械师,一辈子只做了一件事:向世界上最有钱的偏执狂证明自己的发明是对的。",
    "tags": [
      "霍华德·休斯",
      "偏执",
      "仇敌",
      "航空"
    ]
  },
  {
    "title": "租个男朋友",
    "url": "./movie-1414.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧爱情",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "北漂女强人春节前租了个完美男友回家,谁知对方是个破产富二代,而她的谎言正被全村人用手机直播。",
    "tags": [
      "租赁男友",
      "春节",
      "催婚",
      "契约",
      "人设崩塌"
    ]
  },
  {
    "title": "三女怀春",
    "url": "./movie-1415.html",
    "cover": "./65.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,喜剧",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "三个性格迥异的闺蜜在90年代的香港,同时坠入爱河,却爱上同一个男人。",
    "tags": [
      "闺蜜",
      "恋爱",
      "90年代",
      "港风"
    ]
  },
  {
    "title": "哥哥的少年时代",
    "url": "./movie-1416.html",
    "cover": "./66.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/家庭/年代",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "弟弟在整理遗物时发现一本旧日记,由此走进了那个他从未参与过的、属于哥哥的九十年代。",
    "tags": [
      "兄弟情",
      "怀旧",
      "成长"
    ]
  },
  {
    "title": "新不了情",
    "url": "./movie-1417.html",
    "cover": "./67.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "落魄乐手爱上庙街歌女,两人刚要迎来春天,癌症却敲响了门。",
    "tags": [
      "绝症",
      "庙街",
      "音乐",
      "香港情怀"
    ]
  },
  {
    "title": "头号冤家",
    "url": "./movie-1418.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,动作,爱情",
    "category": "动画奇幻",
    "rating": 9.1,
    "description": "一名FBI探员和一个职业骗子被拷在一起,被迫联手躲避追杀,同时互相算计如何甩掉对方。 FBI探员麦克斯在抓捕职业骗子杰西时遭遇第三方灭口,两人被迫拷在一起,开始了互坑互助的逃亡之旅。",
    "tags": [
      "欢喜冤家",
      "特工",
      "逃亡",
      "嘴炮"
    ]
  },
  {
    "title": "杨光的快乐生活2",
    "url": "./movie-1419.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,家庭,都市",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "杨光好不容易开了家煎饼果子店,却遭遇楼上网红直播、楼下广场舞大妈、对面同行恶意竞争的“三重夹击”。",
    "tags": [
      "天津",
      "小市民",
      "邻里纠纷",
      "创业失败",
      "人间烟火"
    ]
  },
  {
    "title": "天魔苏醒",
    "url": "./movie-1420.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻,恐怖",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "深海钻井意外钻破了上古封印,噩梦开始成为现实世界的主宰。",
    "tags": [
      "克苏鲁",
      "末日启示录",
      "心理侵蚀"
    ]
  },
  {
    "title": "绵羊侦探团",
    "url": "./movie-1421.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧/悬疑",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "英国乡下一个牧场的绵羊们,在主人被杀后组成侦探团,用羊的视角寻找真凶。",
    "tags": [
      "动物拟人",
      "乡村破案",
      "英式幽默"
    ]
  },
  {
    "title": "审判日-尤斯基兴枪手",
    "url": "./movie-1422.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "芬兰/德国",
    "type": "电影",
    "genre": "历史/战争/惊悚",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "1997年,尤斯基兴小镇的平静被一名神秘枪手打破,警方发现真相远超想象。",
    "tags": [
      "真实事件改编",
      "狙击手",
      "冷战",
      "暗黑"
    ]
  },
  {
    "title": "八月迷情",
    "url": "./movie-1423.html",
    "cover": "./73.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "音乐/剧情",
    "category": "喜剧爱情",
    "rating": 9.8,
    "description": "孤儿院的音乐天才埃文坚信他的父母还活着,并且都是音乐家,他逃出孤儿院,用音符在纽约寻找双亲。",
    "tags": [
      "音乐神童",
      "寻亲",
      "纽约",
      "大团圆"
    ]
  },
  {
    "title": "绝唱",
    "url": "./movie-1424.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、音乐、历史",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "1970年,一位京剧名角被批斗前,用最后一次登台将毕生绝学传给街头小混混。",
    "tags": [
      "戏曲",
      "文革",
      "师徒",
      "牺牲",
      "文化传承"
    ]
  },
  {
    "title": "玻璃玫瑰",
    "url": "./movie-1425.html",
    "cover": "./75.jpg",
    "year": "1991",
    "region": "德国/法国",
    "type": "电影",
    "genre": "剧情/爱情",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "中年男人爱上了一个少女,却发现她可能是自己从未谋面的女儿。",
    "tags": [
      "文艺",
      "乱伦",
      "悲剧",
      "唯美",
      "改编"
    ]
  },
  {
    "title": "魔法褓母麦克菲2",
    "url": "./movie-1426.html",
    "cover": "./76.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻、家庭、喜剧",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "二战后英国乡村,神秘的褓母麦克菲再度降临,用五堂魔法课拯救一个破碎的五口之家。",
    "tags": [
      "魔法",
      "育儿",
      "战后重建",
      "成长"
    ]
  },
  {
    "title": "梦游纳米比亚沙漠",
    "url": "./movie-1427.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/心理惊悚",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "一位失眠的画家在梦游中穿越至纳米比亚沙漠,醒来时画布上满是无法解释的诡异图腾。",
    "tags": [
      "梦游",
      "沙漠",
      "记忆碎片",
      "心理医生",
      "神秘符号"
    ]
  },
  {
    "title": "疯狂饭店杀人夜",
    "url": "./movie-1428.html",
    "cover": "./78.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "暴雨夜,一家老旧饭店的七位住客接连失踪,而新来的前台发现,每个房间的菜单背面都写着一道“人肉食谱”。",
    "tags": [
      "密室",
      "连环杀手",
      "黑色幽默",
      "反转"
    ]
  },
  {
    "title": "七大罪 戒律的复活",
    "url": "./movie-1429.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集/动画",
    "genre": "奇幻、热血、冒险",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "团长梅利奥达斯复活归来,却发现昔日的伙伴“七大罪”已被通缉,而新的敌人“十诫”降临。",
    "tags": [
      "动漫改编",
      "十诫",
      "团战"
    ]
  },
  {
    "title": "女宿舍艳史",
    "url": "./movie-1430.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "情色,剧情",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "80年代女校宿舍里,五个女孩用身体写下不被允许的青春日记。",
    "tags": [
      "女性",
      "成长",
      "校园",
      "禁忌"
    ]
  },
  {
    "title": "科洛弗悖论",
    "url": "./movie-1431.html",
    "cover": "./81.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,恐怖",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "空间站上的粒子加速器实验撕裂了维度,将远古地球的怪兽带到了我们的世界。",
    "tags": [
      "太空",
      "粒子加速器",
      "怪兽"
    ]
  },
  {
    "title": "眷思量",
    "url": "./movie-1432.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻,爱情,古风",
    "category": "动作冒险",
    "rating": 9.0,
    "description": "神族后裔为报灭族之仇潜入思量岛,却与岛上最危险的罪神之子陷入宿命之恋。",
    "tags": [
      "神族后裔",
      "宿命之恋",
      "唯美画风",
      "架空世界"
    ]
  },
  {
    "title": "情迷芭塔雅",
    "url": "./movie-1433.html",
    "cover": "./83.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情,喜剧,剧情",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "一封寄错的匿名情书,让两个到芭塔雅疗伤的陌生人,被迫上演一场荒诞的恋人戏码。",
    "tags": [
      "异国风情",
      "一夜情",
      "身份错位",
      "情书",
      "阴差阳错"
    ]
  },
  {
    "title": "黑月光法则",
    "url": "./movie-1434.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻",
    "category": "国产热映",
    "rating": 8.3,
    "description": "新晋律师发现法庭地下存在一套“黑月光”法则,在这里,败诉方的罪孽会被具象化成怪物吞噬本人。",
    "tags": [
      "惊悚",
      "悬疑",
      "超自然",
      "法律",
      "异世界"
    ]
  },
  {
    "title": "粗点心战争第一季",
    "url": "./movie-1435.html",
    "cover": "./85.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/喜剧",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "东京王牌零食推销员回乡继承濒临倒闭的粗点心店,却发现镇上老人只认童年味道。",
    "tags": [
      "怀旧",
      "零食",
      "小镇青年",
      "家族传承"
    ]
  },
  {
    "title": "我本善良粤语",
    "url": "./movie-1436.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "香港",
    "type": "剧集",
    "genre": "犯罪,剧情",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "警方卧底在黑帮里做到二把手,亲父是警队高层,养父是黑帮龙头,他被命令“亲手杀了其中一个”。",
    "tags": [
      "卧底",
      "黑帮",
      "父子情",
      "粤语原声"
    ]
  },
  {
    "title": "渔王",
    "url": "./movie-1437.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/奇幻",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "一名傲慢的电台主持人因一句恶言引发枪击案,多年后他遇到一位自称“渔王”的疯乞丐,开始寻找圣杯。",
    "tags": [
      "都市传说",
      "救赎",
      "流浪汉",
      "亚瑟王"
    ]
  },
  {
    "title": "刺杀大将军",
    "url": "./movie-1438.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/武侠",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "明朝末年,独臂刺客受雇刺杀权倾朝野的大将军,却发现大将军也是一名被通缉的逃犯。",
    "tags": [
      "独臂刀",
      "宦官",
      "火药",
      "雪夜",
      "最后一刀"
    ]
  },
  {
    "title": "放牛班的提琴手",
    "url": "./movie-1439.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,音乐,励志",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "被贬到问题儿童寄宿学校的音乐老师,试图用一把破提琴和一群零基础的孩子,击败贵族学校的冠军乐团。 当一群被社会遗忘的野孩子,站在金色音乐厅门口时,保安对他们说:“这里没有你们的位置。",
    "tags": [
      "再生教育",
      "弦乐",
      "治愈",
      "孤儿"
    ]
  },
  {
    "title": "将死之人",
    "url": "./movie-1440.html",
    "cover": "./90.jpg",
    "year": "2026",
    "region": "西班牙/墨西哥",
    "type": "剧集",
    "genre": "悬疑/奇幻/惊悚",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "一家保险公司承保“死亡预测险”,但所有客户都在保险生效前一天,以合同上写明的匪夷所思方式准时死亡。",
    "tags": [
      "死亡预知",
      "保险公司",
      "诅咒",
      "群像"
    ]
  },
  {
    "title": "大凶2020",
    "url": "./movie-1441.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖、惊悚、民俗",
    "category": "港台佳片",
    "rating": 8.0,
    "description": "2020年回南天,一栋香港老楼的住户相继自杀,风水师发现整栋楼被人布成了“噬魂局”。",
    "tags": [
      "风水",
      "回南天",
      "凶宅",
      "降头",
      "双胞胎"
    ]
  },
  {
    "title": "季春奶奶",
    "url": "./movie-1442.html",
    "cover": "./92.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情、家庭",
    "category": "综艺纪实",
    "rating": 9.0,
    "description": "走失十二年的孙女突然归来,海女奶奶倾其所有弥补亏欠,却发现孙女是一个冒牌货。",
    "tags": [
      "祖孙情",
      "治愈",
      "海女",
      "失踪",
      "催泪"
    ]
  },
  {
    "title": "我杀人第六季",
    "url": "./movie-1443.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/惊悚/悬疑",
    "category": "国产热映",
    "rating": 9.6,
    "description": "被囚禁六年的连环杀手终于供出最后一名受害者位置,但那地方埋着侧写师自己的秘密。",
    "tags": [
      "连环杀手",
      "心理侧写",
      "最终季",
      "反转"
    ]
  },
  {
    "title": "捧场者",
    "url": "./movie-1444.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "亚洲精选",
    "rating": 9.2,
    "description": "一个失业的中年男人成为职业“捧场者”,在直播间刷好评、哭穷、带节奏,渐渐迷失在真假难辨的网络剧场里。",
    "tags": [
      "直播",
      "打赏",
      "黑色幽默",
      "小人物"
    ]
  },
  {
    "title": "弗里蒙特",
    "url": "./movie-1445.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情文艺",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "在旧金山弗里蒙特工作的阿富汗前女翻译,每晚失眠,却意外在一家幸运饼干厂找到了通灵般的倾诉对象。",
    "tags": [
      "阿富汗难民",
      "失眠",
      "孤独",
      "黑白摄影",
      "福星"
    ]
  },
  {
    "title": "鬼寺凶灵",
    "url": "./movie-1446.html",
    "cover": "./96.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖,喜剧",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "三个倒霉蛋为了躲避鬼债逃进寺庙出家,却发现庙里的鬼比债主还凶。",
    "tags": [
      "泰国寺庙",
      "还俗",
      "搞笑驱魔",
      "兄弟情"
    ]
  },
  {
    "title": "潮爆会馆",
    "url": "./movie-1447.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧/青春",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "一群老人为保住养老院,跟着年轻人学街舞、玩说唱,爆改“夕阳红天团”。",
    "tags": [
      "老人院",
      "街头文化",
      "跨代"
    ]
  },
  {
    "title": "巨神兵现身东京",
    "url": "./movie-1448.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻、灾难、怪兽",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "巨神兵从海底苏醒后没有踩碎东京,而是开始......给市民发号码牌。",
    "tags": [
      "巨型机器人",
      "东京崩溃",
      "生存",
      "视觉奇观"
    ]
  },
  {
    "title": "桃色",
    "url": "./movie-1449.html",
    "cover": "./99.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/情色/剧情",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "房产经纪遇到一对神秘的同性情侣,三人陷入一场关于欲望、谎言与身份错位的迷情游戏。",
    "tags": [
      "王家卫风格",
      "同性元素",
      "欲望都市",
      "唯美摄影"
    ]
  },
  {
    "title": "热铁皮屋顶上的猫",
    "url": "./movie-1450.html",
    "cover": "./100.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/家庭/文学改编",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "现代改编。一个嫁给富家子弟的网红,在癌症晚期的“大老爹”生日宴上,决定直播一场家族秘密大起底。",
    "tags": [
      "南方哥特",
      "欲望",
      "谎言",
      "家庭伦理",
      "经典重拍"
    ]
  },
  {
    "title": "覆没家庭",
    "url": "./movie-1451.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/悬疑/家庭",
    "category": "欧美电影",
    "rating": 9.1,
    "description": "一个富裕家庭在年度聚会上,小女儿突然说出一句“哥哥不是死了吗”,将所有人拖入深渊。",
    "tags": [
      "家庭伦理",
      "失踪之谜",
      "回忆杀",
      "全员说谎",
      "欧洲文艺悬疑"
    ]
  },
  {
    "title": "龙之奇迹",
    "url": "./movie-1452.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "泰国/中国大陆",
    "type": "电影",
    "genre": "奇幻/冒险/动作",
    "category": "港台佳片",
    "rating": 8.9,
    "description": "湄公河渔民之女发现自己是最后的驭龙者,而工业巨头正在猎杀世界上最后一条龙。",
    "tags": [
      "东南亚",
      "龙",
      "传说",
      "女性英雄",
      "视觉奇观"
    ]
  },
  {
    "title": "沙漠情酋",
    "url": "./movie-1453.html",
    "cover": "./103.jpg",
    "year": "2014",
    "region": "埃及",
    "type": "电影",
    "genre": "爱情,冒险,剧情",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "一个西方女考古学家在撒哈拉深处爱上了一个部落酋长,却发现自己只是他复仇计划中的棋子。",
    "tags": [
      "沙漠",
      "部落",
      "禁忌之恋",
      "异域风情"
    ]
  },
  {
    "title": "我们恋爱吧第一季",
    "url": "./movie-1454.html",
    "cover": "./104.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/爱情",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "三男三女在一艘邮轮上共度21天,谁的心动能经得起海风与谎言的考验?",
    "tags": [
      "素人",
      "恋爱社交",
      "观察室",
      "心动信号",
      "情感"
    ]
  },
  {
    "title": "雨季来临前",
    "url": "./movie-1455.html",
    "cover": "./105.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、同性",
    "category": "亚洲精选",
    "rating": 9.6,
    "description": "离家二十年的阿翔回到屏东老家,发现初恋阿杰还住在隔壁,而母亲的记忆停留在他们相爱的那个雨季。",
    "tags": [
      "乡愁",
      "初恋",
      "告别"
    ]
  },
  {
    "title": "来自美国的莫里斯",
    "url": "./movie-1456.html",
    "cover": "./106.jpg",
    "year": "2016",
    "region": "德国/美国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "一位热爱嘻哈的退休美国黑人教授,在德国海德堡与一名13岁德国男孩成为忘年交。",
    "tags": [
      "文化冲突",
      "忘年交",
      "嘻哈",
      "海德堡",
      "治愈"
    ]
  },
  {
    "title": "恋爱三万英尺",
    "url": "./movie-1457.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "悬疑惊悚",
    "rating": 9.2,
    "description": "一个是常年在三万英尺高空飞行的空乘,一个是忙于地面工作的地勤,他们的恋爱全靠航班时刻表。",
    "tags": [
      "异地恋",
      "航空",
      "职业"
    ]
  },
  {
    "title": "前哨第二季",
    "url": "./movie-1458.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻/动作",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "末日废土之上,一个由弃儿和超能力者守卫的孤独前哨站,迎来了一个试图摧毁最后人类文明的神秘势力。",
    "tags": [
      "末日",
      "堡垒",
      "超能力者",
      "生存战"
    ]
  },
  {
    "title": "巴山女红军",
    "url": "./movie-1459.html",
    "cover": "./109.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史,战争",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "1935年,三个缠过脚的川妹子为了找回被部队落下的“识字课本”,翻越了整座大巴山。",
    "tags": [
      "长征",
      "女性",
      "川军",
      "红色"
    ]
  },
  {
    "title": "第四次世界大战",
    "url": "./movie-1460.html",
    "cover": "./110.jpg",
    "year": "2028",
    "region": "全球合拍",
    "type": "电影",
    "genre": "科幻,战争,灾难",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "第三次世界大战毁灭了国界,第四次世界大战,是人类与觉醒的AI为了争夺最后生存权而战。",
    "tags": [
      "近未来",
      "AI战争",
      "无国界",
      "资源",
      "人性"
    ]
  },
  {
    "title": "我心深处1978",
    "url": "./movie-1461.html",
    "cover": "./111.jpg",
    "year": "1978",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/文艺",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "1978年台南渔村,一个女孩和渔家少年在灯塔下许愿,却因一场台风再未相见。",
    "tags": [
      "乡土",
      "初恋",
      "遗憾"
    ]
  },
  {
    "title": "乌龙教授嗱喳招",
    "url": "./movie-1462.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,动作",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "一位研究“失败武术”的潦倒教授,误打误撞成为黑帮争夺的“武林秘籍”唯一传人,其实那本秘籍是小学广播体操。",
    "tags": [
      "无厘头",
      "功夫恶搞",
      "粤语梗"
    ]
  },
  {
    "title": "小姨怀春",
    "url": "./movie-1463.html",
    "cover": "./113.jpg",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "七十年代香港,寄居姐夫家的小姨子爱上了姐夫的朋友,却发现对方是自己同父异母的亲哥哥。",
    "tags": [
      "邵氏风",
      "怀旧",
      "粤语残片",
      "不伦之恋"
    ]
  },
  {
    "title": "暗芝居第六季",
    "url": "./movie-1464.html",
    "cover": "./114.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "动画,恐怖,都市传说",
    "category": "悬疑惊悚",
    "rating": 9.0,
    "description": "一个能预知死亡的网站,只要输入你想杀死的人,就会收到他的死亡倒计时视频。",
    "tags": [
      "泡面番",
      "纸芝居",
      "细思极恐",
      "民俗"
    ]
  },
  {
    "title": "三个扑火的少年",
    "url": "./movie-1465.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春/犯罪",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "三个小镇少年为给绝症兄弟筹钱,决定去大城市“搞一票大的”,却从此分道扬镳。",
    "tags": [
      "小镇青年",
      "兄弟情",
      "悲剧"
    ]
  },
  {
    "title": "难以置信2017",
    "url": "./movie-1466.html",
    "cover": "./116.jpg",
    "year": "2017",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪/剧情/悬疑",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "一名少女报案称被强奸,警方逼她承认撒谎;两年后,两名女警发现这并非孤立事件。",
    "tags": [
      "真实事件",
      "连环强奸",
      "女性侦探",
      "冤案"
    ]
  },
  {
    "title": "自杀聊天室",
    "url": "./movie-1467.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "惊悚,悬疑,社会派",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "女警潜入暗网自杀群,却发现群主总能先一步“帮”成员死亡。",
    "tags": [
      "暗网",
      "集体自杀",
      "卧底女警"
    ]
  },
  {
    "title": "天生不是宝贝",
    "url": "./movie-1468.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "一个被收养的女孩偶然发现自己是“弃婴岛”的第一百个孩子,而她的生母每年都会在同一时间来看她一眼。",
    "tags": [
      "弃婴",
      "寻亲",
      "身份认同",
      "公路"
    ]
  },
  {
    "title": "帕勒摩猎影",
    "url": "./movie-1469.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "意大利/德国",
    "type": "电影",
    "genre": "悬疑/惊悚/艺术",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "一名世界知名的战地摄影师回到故乡西西里,却发现镜头里的每一张脸都开始七窍流血。",
    "tags": [
      "摄影师",
      "邪教",
      "西西里",
      "符号学"
    ]
  },
  {
    "title": "训练日",
    "url": "./movie-1470.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪/惊悚",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "菜鸟女警入职第一天,被分配到一个没人敢跟的老油条手下,24小时内她必须决定举报他还是成为他。",
    "tags": [
      "警匪",
      "师徒",
      "腐败",
      "24小时"
    ]
  },
  {
    "title": "少年江湖",
    "url": "./movie-1471.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "武侠,喜剧",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "一个想当大侠的少年进了江湖第一大派,却发现师门主业是开连锁客栈,副业才是行侠仗义。",
    "tags": [
      "反套路",
      "热血",
      "成长",
      "群像"
    ]
  },
  {
    "title": "九河龙蛇",
    "url": "./movie-1472.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/犯罪/悬疑",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "民国天津卫,一个普通脚行扛大个儿的,被卷入九河十八码头的大混战,他却只想找出杀死师兄的独眼凶手。",
    "tags": [
      "民国",
      "天津卫",
      "码头",
      "黑帮"
    ]
  },
  {
    "title": "支手轰天",
    "url": "./movie-1473.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,枪战",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "失去右臂的前雇佣兵用独臂改装的机械臂,单枪匹马闯入东南亚黑监狱救出被陷害的兄弟。",
    "tags": [
      "独臂",
      "复仇",
      "兄弟情"
    ]
  },
  {
    "title": "突变末日",
    "url": "./movie-1474.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "科幻/灾难",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "丧尸病毒进化出了“伪装”,它们会说话、会开门,而你无法分辨谁还是人类。",
    "tags": [
      "丧尸变种",
      "免疫力",
      "生存群像",
      "社会批判",
      "高燃动作"
    ]
  },
  {
    "title": "播种幸福的人",
    "url": "./movie-1475.html",
    "cover": "./125.jpg",
    "year": "1980",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "被打成右派的城市知青来到西北荒漠教书,三十年后,他的学生遍布天下,他被称为“播种幸福的人”。",
    "tags": [
      "伤痕文学",
      "知青",
      "乡村教师",
      "奉献"
    ]
  },
  {
    "title": "嬉春学堂续集",
    "url": "./movie-1476.html",
    "cover": "./126.jpg",
    "year": "1998",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧,情色",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "暑假留守学校的三男两女在旧宿舍里翻出了一本六十年前的“恋爱秘籍”,按图索骥反闹出一连串乌龙。",
    "tags": [
      "校园",
      "夏令营",
      "恶搞",
      "青春"
    ]
  },
  {
    "title": "大尾鲈鳗",
    "url": "./movie-1477.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧,犯罪",
    "category": "国产热映",
    "rating": 9.2,
    "description": "一个鱼市场鱼贩被误认为是黑帮老大,整个江湖因为他越搅越乱。",
    "tags": [
      "黑帮喜剧",
      "乡土文化",
      "闽南语",
      "荒诞",
      "庶民英雄"
    ]
  },
  {
    "title": "萝莉的时间第二季",
    "url": "./movie-1478.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/校园/心理",
    "category": "悬疑惊悚",
    "rating": 9.0,
    "description": "第一季风波三年后,曾经的师生在截然不同的人生轨迹上再度相遇,这一次没有侥幸。",
    "tags": [
      "师生关系",
      "道德困境",
      "社会议题"
    ]
  },
  {
    "title": "为了受伤的右眼",
    "url": "./movie-1479.html",
    "cover": "./129.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/心理",
    "category": "剧情故事",
    "rating": 8.6,
    "description": "因事故失去右眼视力的摄影师,通过移植的“义眼”看到了不该看到的凶杀现场。",
    "tags": [
      "失明",
      "记忆操纵",
      "复仇",
      "视觉隐喻"
    ]
  },
  {
    "title": "十字狂魔",
    "url": "./movie-1480.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/悬疑/宗教",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "费城出现专杀神父的连环杀手,每具尸体都被摆成倒十字架,而女法医发现凶手在尸体内部藏了下一个线索。",
    "tags": [
      "连环杀手",
      "符号学",
      "邪教",
      "尸检",
      "反转"
    ]
  },
  {
    "title": "空气之魂,云之精灵",
    "url": "./movie-1481.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影/动画",
    "genre": "奇幻,动画,家庭",
    "category": "剧情故事",
    "rating": 8.3,
    "description": "生活在雾霾都市的少年偶遇能净化空气的云精灵,为了拯救她们,他必须找到城市“心脏”。",
    "tags": [
      "宫崎骏风",
      "环保寓言",
      "治愈系",
      "精灵",
      "飞行"
    ]
  },
  {
    "title": "千禧年代大事件:悲剧",
    "url": "./movie-1482.html",
    "cover": "./132.jpg",
    "year": "2022",
    "region": "美国",
    "type": "纪录片",
    "genre": "纪录片/历史",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "深度复盘2000-2010年间,改变世界格局、造成巨大创伤的五大标志性悲剧事件。",
    "tags": [
      "事件复盘",
      "社会反思",
      "世纪之殇"
    ]
  },
  {
    "title": "盗墓风云",
    "url": "./movie-1483.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险,动作,悬疑",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "一座隐藏在龙脉之下的战国古墓,五个盗墓世家后人被同一封神秘信件引到这里,而信是五十年前就已死去的人写的。",
    "tags": [
      "盗墓",
      "家族恩怨",
      "机关术",
      "风水",
      "国产冒险"
    ]
  },
  {
    "title": "巴黎小情人",
    "url": "./movie-1484.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "暑假打工的贫穷大学生爱上了雇主家那位叛逆的富家千金,一段注定错位的巴黎之恋悄然发生。",
    "tags": [
      "青春期",
      "阶级差异",
      "文艺片",
      "夏日恋情",
      "成长疼痛"
    ]
  },
  {
    "title": "怀疑",
    "url": "./movie-1485.html",
    "cover": "./135.jpg",
    "year": "2022",
    "region": "美国/英国",
    "type": "剧集",
    "genre": "悬疑/惊悚/心理",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "十二名陪审员要决定一个弑母少年是否有罪,但他们每个人收到的“证据”都是被AI量身伪造的。",
    "tags": [
      "罗生门",
      "陪审团",
      "道德困境",
      "高智商博弈"
    ]
  },
  {
    "title": "二人世界",
    "url": "./movie-1486.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情/剧情",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "新婚小夫妻搬进新家,却发现整栋楼只有他们两个活人,其他的“邻居”都是AI投影。 搬进“智能社区”的新婚夫妻,每晚都会和AI邻居们聊天,却意外通过这些程序,提前预演了自己婚姻可能出现的全部危机。",
    "tags": [
      "婚后生活",
      "日常",
      "治愈",
      "坂元裕二风格",
      "对话体"
    ]
  },
  {
    "title": "历史不下课",
    "url": "./movie-1487.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻,校园",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "一名高三差生被困在“历史课”这一天的无限循环里,他必须让全班同学真正理解近代史才能跳出轮回。",
    "tags": [
      "循环",
      "近代史",
      "热血",
      "穿越",
      "高考"
    ]
  },
  {
    "title": "无限纯白的你",
    "url": "./movie-1488.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "一个患了“纯白病”(失去所有色彩感知)的少女,遇到了一个只能画黑白画的少年。",
    "tags": [
      "纯爱",
      "绝症",
      "摄影",
      "北海道"
    ]
  },
  {
    "title": "超现实庄园",
    "url": "./movie-1489.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "西班牙/墨西哥",
    "type": "电影",
    "genre": "悬疑/奇幻/剧情",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "一座古老庄园里的油画全部活了过来,每晚向女主重复她被杀害当夜的记忆碎片。",
    "tags": [
      "庄园",
      "超现实主义",
      "家族秘密",
      "油画"
    ]
  },
  {
    "title": "太阳泪",
    "url": "./movie-1490.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作,战争,剧情",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "一名冷酷雇佣兵在撤离任务中,被迫护送一位女医生穿越战区,她坚持带走所有孤儿,引爆了他的良知。",
    "tags": [
      "雇佣兵",
      "人性",
      "救赎",
      "非洲",
      "战火"
    ]
  },
  {
    "title": "旧金山风物记",
    "url": "./movie-1491.html",
    "cover": "./141.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪,年代",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "1906年大地震前的旧金山唐人街,一位华裔女中医通过“望闻问切”破解连环命案。",
    "tags": [
      "唐人街",
      "探案",
      "排华法案"
    ]
  },
  {
    "title": "奶酪陷阱2018",
    "url": "./movie-1492.html",
    "cover": "./142.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑,爱情,校园",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "表面上完美的学霸学长,背地里却是个操控人心的恶魔,只有贫困女主看清了他的真面目。",
    "tags": [
      "腹黑学长",
      "同名人气漫画改编",
      "心理战",
      "考研"
    ]
  },
  {
    "title": "被劫持的爱情",
    "url": "./movie-1493.html",
    "cover": "./143.jpg",
    "year": "2022",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "爱情/喜剧/犯罪",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "绑匪要求见总统,却意外劫持了一对正在分手的恋人,谈判变成了一场直播闹剧。",
    "tags": [
      "人质",
      "谈判专家",
      "阴差阳错",
      "浪漫"
    ]
  },
  {
    "title": "海边的曼彻斯特",
    "url": "./movie-1494.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "category": "家庭青春",
    "rating": 8.2,
    "description": "美版经典的全新演绎,水管工李在处理哥哥后事时,被前妻的一通电话重新撕开了不愿面对的伤疤。",
    "tags": [
      "重拍",
      "文艺",
      "丧子之痛",
      "救赎",
      "演技大赏"
    ]
  },
  {
    "title": "布鲁姆兄弟",
    "url": "./movie-1495.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/冒险",
    "category": "动作冒险",
    "rating": 9.9,
    "description": "患有渐冻症的弟弟列了一份必做的疯狂清单,患有广场恐惧症的哥哥决定哪怕抬也要抬着他去完成。",
    "tags": [
      "兄弟情",
      "环游世界",
      "遗传病",
      "临终清单",
      "公路片"
    ]
  },
  {
    "title": "维和防暴队",
    "url": "./movie-1496.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/战争/主旋律",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "一支中国维和防暴队被派往非洲战乱国,却发现当地叛军的武器上赫然刻着“MADE IN CHINA”。",
    "tags": [
      "维和",
      "联合国",
      "非洲",
      "危机",
      "中国力量"
    ]
  },
  {
    "title": "叛逆浮生",
    "url": "./movie-1497.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情,音乐",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "一个被送去养老院做义工的朋克少女,带领一群老人组成了史上最高龄的朋克乐队,向无聊的世界宣战。",
    "tags": [
      "朋克",
      "养老院",
      "代际冲突",
      "青春"
    ]
  },
  {
    "title": "女学生艳史",
    "url": "./movie-1498.html",
    "cover": "./148.jpg",
    "year": "1999",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情/剧情/校园",
    "category": "动作冒险",
    "rating": 8.5,
    "description": "1970年代曼谷贵族女校,一名贫穷女学生与三位富家子弟的爱恨纠葛,引发两大家族二十年血仇。",
    "tags": [
      "狗血",
      "豪门恩怨",
      "旧时光"
    ]
  },
  {
    "title": "睡著也好醒来也罢",
    "url": "./movie-1499.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情,悬疑,奇幻",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "妻子发现每天睡着后,自己的人生会被孪生姐姐“借走”8小时,而丈夫爱的似乎永远是睡着时的那个她。",
    "tags": [
      "双胞胎",
      "身份互换",
      "记忆盗取"
    ]
  },
  {
    "title": "逐爱天堂",
    "url": "./movie-1500.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情、爱情",
    "category": "最新推荐",
    "rating": 8.3,
    "description": "退休骗子潜入养老院寻找目标,却爱上了一个比自己更会骗人的老太太。",
    "tags": [
      "养老院",
      "黄昏恋",
      "遗产争夺",
      "温情"
    ]
  },
  {
    "title": "萨尔",
    "url": "./movie-1501.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/西部",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "一个沉默的男人骑着摩托穿越荒漠,只为将父亲的骨灰撒进一口传说中的枯井。",
    "tags": [
      "荒漠",
      "寻根",
      "父子",
      "摩托车",
      "沉默"
    ]
  },
  {
    "title": "争执",
    "url": "./movie-1502.html",
    "cover": "./2.jpg",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "国产热映",
    "rating": 9.1,
    "description": "一对准备离婚的夫妇被困在装修中的新家,一夜争执后,他们发现房间里多了一具尸体。",
    "tags": [
      "夫妻密室",
      "心理博弈",
      "婚姻解体",
      "单一场景"
    ]
  },
  {
    "title": "标准之外",
    "url": "./movie-1503.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "两个创办特殊看护机构的男人,常年游走在法律与道德的灰色地带,只为接住那些被社会抛弃的孤独症孩子。",
    "tags": [
      "社会",
      "教育",
      "自闭症",
      "温情"
    ]
  },
  {
    "title": "箭侠恩仇粤语",
    "url": "./movie-1504.html",
    "cover": "./4.jpg",
    "year": "1996",
    "region": "香港",
    "type": "剧集",
    "genre": "武侠、古装、动作",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "沉默箭手为报灭门之仇潜入敌营,却发现自己要杀的人正是失散多年的亲兄弟。",
    "tags": [
      "复仇",
      "弓箭",
      "江湖恩怨",
      "兄弟情"
    ]
  },
  {
    "title": "苏夫塞德女孩第一季",
    "url": "./movie-1505.html",
    "cover": "./5.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,喜剧,青春",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "一个来自南卡罗来纳小镇的笨拙女孩,如何在迈阿密顶级律所里靠“脱线”杀出一条血路。",
    "tags": [
      "小镇女孩",
      "都市打拼",
      "成长烦恼",
      "幽默自嘲",
      "女性友谊"
    ]
  },
  {
    "title": "好朋友雪中欢聚",
    "url": "./movie-1506.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "国产热映",
    "rating": 8.7,
    "description": "大学毕业十年后,五个好朋友在大雪封山的民宿里聚会,却发现他们中少了一个人,而所有人都记得“他来过了”。",
    "tags": [
      "童年",
      "重逢",
      "治愈"
    ]
  },
  {
    "title": "复活",
    "url": "./movie-1507.html",
    "cover": "./7.jpg",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "家庭青春",
    "rating": 9.6,
    "description": "坚信科学破案的老刑警,遭遇了一桩只能用“死者复活杀人”来解释的案件。",
    "tags": [
      "刑侦",
      "宗教",
      "心理战"
    ]
  },
  {
    "title": "寻找佛罗斯特",
    "url": "./movie-1508.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,悬疑",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "少年作家发现隐居的文学巨匠,但巨匠宣称自己已死,眼前的是“替身”。",
    "tags": [
      "文学",
      "师生",
      "身份谜团"
    ]
  },
  {
    "title": "黑之召唤士",
    "url": "./movie-1509.html",
    "cover": "./9.jpg",
    "year": "2022",
    "region": "日本",
    "type": "TV剧集",
    "genre": "动画,奇幻,战斗",
    "category": "家庭青春",
    "rating": 9.5,
    "description": "失忆的勇者转生为黑暗召唤士,用禁忌之术召唤恶魔大军挑战神明。",
    "tags": [
      "异世界",
      "召唤",
      "转生",
      "热血",
      "魔法"
    ]
  },
  {
    "title": "网球王子",
    "url": "./movie-1510.html",
    "cover": "./10.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "动作/运动",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "天才少年越前龙马归国,加入问题儿童军团“青学”,目标是打赢那群能把球打出陨石坑的对手。",
    "tags": [
      "热血",
      "青春",
      "竞技",
      "漫改",
      "特效网球"
    ]
  },
  {
    "title": "老师早上好",
    "url": "./movie-1511.html",
    "cover": "./11.jpg",
    "year": "1994",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭喜剧",
    "category": "欧美电影",
    "rating": 8.1,
    "description": "一位菜鸟女教师被分到全校最乱的放牛班,却发现班上学生的父母都是她当年的高中同学。",
    "tags": [
      "校园温情",
      "代际和解",
      "怀旧风"
    ]
  },
  {
    "title": "三个臭皮匠",
    "url": "./movie-1512.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧/悬疑",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "一个失业的编剧、一个跑路的理财经理和一个迷信的退休大妈,组成了全城最不靠谱的“民间侦探社”,却歪打正着破了悬案。",
    "tags": [
      "草台班子",
      "破案",
      "反向操作",
      "搞笑"
    ]
  },
  {
    "title": "怪医杜立德5:百万傻蛋",
    "url": "./movie-1513.html",
    "cover": "./13.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,奇幻,家庭",
    "category": "国产热映",
    "rating": 8.1,
    "description": "杜立德的动物诊所濒临倒闭,动物们决定集体扮成“百万富翁的转世宠物”来骗钱。",
    "tags": [
      "动物",
      "诈骗",
      "团队合作",
      "荒诞"
    ]
  },
  {
    "title": "丛林大反攻",
    "url": "./movie-1514.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/冒险",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "一群即将被运往海外马戏团的雨林动物,在最后一刻逃进城市下水道,却意外发现了一个更大的阴谋。",
    "tags": [
      "动物拟人",
      "环保",
      "爆笑",
      "团队合作"
    ]
  },
  {
    "title": "莫洛事件",
    "url": "./movie-1515.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑,科幻",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "一个著名的电视台辟谣记者在调查“莫洛事件”时突然消失,只留下这份令人头皮发麻的剪辑素材。",
    "tags": [
      "伪记录",
      "超自然",
      "政府阴谋"
    ]
  },
  {
    "title": "神效苹果醋",
    "url": "./movie-1516.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,科幻,惊悚",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "畅销全球的苹果醋能治百病,直到有人发现,喝过的人都在遗忘同一段记忆。",
    "tags": [
      "阴谋",
      "保健品",
      "记忆篡改",
      "邪教",
      "科技伦理"
    ]
  },
  {
    "title": "初恋那一天所读的故事",
    "url": "./movie-1517.html",
    "cover": "./17.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情/剧情",
    "category": "国产热映",
    "rating": 8.8,
    "description": "32岁的失意补习班老师,被一个16岁高中生用她22岁时写的“初恋小说”告白。",
    "tags": [
      "师生恋",
      "补习班",
      "年下",
      "文学告白",
      "时间错位"
    ]
  },
  {
    "title": "哈顿花园大劫案2017",
    "url": "./movie-1518.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "一群平均年龄65岁的退休老头,在复活节长周末掘地三尺偷空了伦敦地下金库。",
    "tags": [
      "真实事件改编",
      "老年犯罪",
      "珠宝",
      "团队",
      "黑色幽默"
    ]
  },
  {
    "title": "理想家",
    "url": "./movie-1519.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/社会/家庭",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "十个失意的中年人在郊区买下一栋废弃学校,试图建立一个“共产主义乌托邦”,结果三个月内分裂成三个派系。",
    "tags": [
      "社群实验",
      "乌托邦幻灭",
      "中年危机",
      "集体生活"
    ]
  },
  {
    "title": "至激双雄",
    "url": "./movie-1520.html",
    "cover": "./20.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "退休的过气动作明星与落魄真警察被迫搭档破案,却发现案情是两人当年拍过的烂片剧情。",
    "tags": [
      "双雄",
      "警匪",
      "港式搞笑",
      "兄弟情"
    ]
  },
  {
    "title": "吓鬼阿嫂",
    "url": "./movie-1521.html",
    "cover": "./21.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/喜剧",
    "category": "最新推荐",
    "rating": 9.9,
    "description": "一个怕鬼的新婚媳妇发现婆家闹鬼,结果鬼竟然帮她对付刁蛮婆婆。",
    "tags": [
      "恶搞鬼片",
      "人妻",
      "乡村",
      "搞笑",
      "反转"
    ]
  },
  {
    "title": "无名指2025",
    "url": "./movie-1522.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/爱情/科幻",
    "category": "国产热映",
    "rating": 9.9,
    "description": "近未来,一枚能读取伴侣所有心思的无名指戒指,让新婚妻子发现自己嫁给了陌生人。",
    "tags": [
      "近未来",
      "婚姻",
      "身份迷失",
      "情感",
      "悬疑"
    ]
  },
  {
    "title": "长腿怪",
    "url": "./movie-1523.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "FBI追踪一名绰号“长腿怪”的连环杀手,却发现每个被害家庭里都有一个莫名其妙的长腿木偶。",
    "tags": [
      "都市传说",
      "犯罪心理",
      "FBI",
      "连环杀手",
      "超自然"
    ]
  },
  {
    "title": "卡徒",
    "url": "./movie-1524.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻/冒险/悬疑",
    "category": "最新推荐",
    "rating": 9.2,
    "description": "在一切靠“能量卡”驱动的废土世界,一个不会制卡的拾荒者,却拥有能吞噬一切卡牌的黑色右手。",
    "tags": [
      "卡牌对战",
      "异能",
      "废土",
      "漫改",
      "智斗"
    ]
  },
  {
    "title": "白头神探2恐怖的气味",
    "url": "./movie-1525.html",
    "cover": "./25.jpg",
    "year": "1993",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/动作",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "白头神探弗兰克发现一种能让人闻风丧胆的化学气味,却被卷入一场葬礼上的连环乌龙案。",
    "tags": [
      "无厘头",
      "恶搞",
      "探案",
      "嗅觉武器",
      "乌龙"
    ]
  },
  {
    "title": "情欲王朝",
    "url": "./movie-1526.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "古装,情色,权力,悬疑",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "李氏朝鲜后期,一名被废黜的后宫宫女用春宫图当密信,策反了整座王宫的尚宫体系。",
    "tags": [
      "朝鲜王朝",
      "后宫",
      "毒杀",
      "女性权谋"
    ]
  },
  {
    "title": "兜风",
    "url": "./movie-1527.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭,公路",
    "category": "国产热映",
    "rating": 8.3,
    "description": "叛逆女儿偷走父亲的老爷车,后座却坐着身患绝症、被她遗忘二十年的亲生母亲。",
    "tags": [
      "母女",
      "和解",
      "二手车",
      "环岛",
      "遗愿清单"
    ]
  },
  {
    "title": "决战投手丘",
    "url": "./movie-1528.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "运动剧情",
    "category": "国产热映",
    "rating": 8.1,
    "description": "34岁的过气投手拼上职业生涯最后一战,对面站着的却是自己亲手培养的天才徒弟。",
    "tags": [
      "棒球",
      "伤病",
      "师徒",
      "热血",
      "最后一球"
    ]
  },
  {
    "title": "好莱坞巨猿",
    "url": "./movie-1529.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻,动作,灾难",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "好莱坞翻拍经典金刚,谁知特效太逼真唤醒了一只真正的太古巨猿。",
    "tags": [
      "怪兽电影",
      "特效大片",
      "致敬经典",
      "环保主题",
      "城市破坏"
    ]
  },
  {
    "title": "疯城记第二季",
    "url": "./movie-1530.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/惊悚/喜剧",
    "category": "国产热映",
    "rating": 9.5,
    "description": "上一季的疯人院被烧毁后,疯病像病毒一样传染给了整个小镇的“正常人”。",
    "tags": [
      "连环杀手",
      "荒诞",
      "小镇秘密",
      "黑色幽默",
      "第二季"
    ]
  },
  {
    "title": "帝国的崛起:奥斯曼第二季",
    "url": "./movie-1531.html",
    "cover": "./31.jpg",
    "year": "2022",
    "region": "土耳其/美国",
    "type": "剧集",
    "genre": "剧情/历史/战争/传记",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "征服君士坦丁堡后,穆罕默德二世转向西方,与匈牙利和瓦拉几亚展开终极对决。",
    "tags": [
      "奥斯曼帝国",
      "征服者",
      "历史还原",
      "史诗战争",
      "宗教冲突"
    ]
  },
  {
    "title": "我的酷儿婚礼",
    "url": "./movie-1532.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧/爱情/同性",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "一场婚礼,三对新人,五组闹翻的家长,和一只把戒指吞下肚的羊驼。",
    "tags": [
      "婚礼",
      "家庭冲突",
      "群像",
      "欢乐"
    ]
  },
  {
    "title": "加菲猫:农场大冒险",
    "url": "./movie-1533.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧,冒险,家庭",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "加菲猫被送去乡下农场减肥,却发现农场动物们正在秘密策划一场推翻农场主的美食革命。",
    "tags": [
      "加菲猫",
      "农场",
      "动物联盟",
      "美食",
      "反派"
    ]
  },
  {
    "title": "疗养",
    "url": "./movie-1534.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/心理",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "一名失语症患者被送进阿尔卑斯山疗养院,他用画画代替说话,画出的却是护士们没人见过的噩梦。",
    "tags": [
      "阿尔卑斯山",
      "疗养院",
      "抑郁症",
      "医患关系",
      "沉默叙事"
    ]
  },
  {
    "title": "海角上的兄妹",
    "url": "./movie-1535.html",
    "cover": "./35.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/家庭/社会",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "患有自闭症的妹妹被镇上混混诱骗拍摄影片赚钱,当过刑警的哥哥持刀踏上了复仇之路。",
    "tags": [
      "自闭症",
      "兄妹情",
      "穷困潦倒",
      "死亡与救赎"
    ]
  },
  {
    "title": "林登·约翰逊",
    "url": "./movie-1536.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记/历史/政治",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "从肯尼迪遇刺到主动退选,聚焦LBJ被“伟大社会”与“越南泥潭”撕扯的五年。",
    "tags": [
      "总统",
      "越战",
      "民权法案",
      "现实主义"
    ]
  },
  {
    "title": "一部警察电影",
    "url": "./movie-1537.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,纪录片风格",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "一个派出所,三个班组,365个日夜,没有惊天大案,只有一地鸡毛。",
    "tags": [
      "伪纪录片",
      "基层民警",
      "现实主义",
      "群像"
    ]
  },
  {
    "title": "加油七条友",
    "url": "./movie-1538.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/剧情/运动",
    "category": "国产热映",
    "rating": 9.1,
    "description": "七个失意的东北中年男人组成拔河队,目标是打败省体校冠军,只为了保住即将被拆迁的澡堂子。",
    "tags": [
      "小镇",
      "拔河",
      "逆袭",
      "中年危机",
      "草根"
    ]
  },
  {
    "title": "战栗1978",
    "url": "./movie-1539.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,历史",
    "category": "喜剧爱情",
    "rating": 8.7,
    "description": "1978年,一个摄制组跟随警方进入杀人狂魔的农场,却在放映室发现了200多卷受害者生前被折磨的录像带。",
    "tags": [
      "伪纪录片",
      "连环杀手",
      "复古恐怖",
      "录像带"
    ]
  },
  {
    "title": "烽火侨女",
    "url": "./movie-1540.html",
    "cover": "./40.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史,战争,剧情",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "南洋富家千金回国抗战,伪装成汉奸之女潜伏日军情报部,她的真实身份只有风筝知道。",
    "tags": [
      "抗日",
      "女性",
      "华侨",
      "谍战",
      "牺牲"
    ]
  },
  {
    "title": "世外桃源2024",
    "url": "./movie-1541.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "美国/新西兰",
    "type": "电视剧",
    "genre": "科幻/惊悚/反乌托邦",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "一对夫妻付费进入永生虚拟社区“世外桃源2024”,却发现那里的每个居民,都是现实中被绑架的真人意识副本。",
    "tags": [
      "意识上传",
      "完美社区",
      "克隆"
    ]
  },
  {
    "title": "在巨人中间",
    "url": "./movie-1542.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "法国/加拿大",
    "type": "剧集",
    "genre": "科幻/悬疑/冒险",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "一场全球病毒导致1%的人类缩小到只有1厘米,他们被扔进下水道,在巨人的垃圾堆里建立新文明。",
    "tags": [
      "缩小症",
      "微观世界",
      "生存挑战",
      "政治寓言"
    ]
  },
  {
    "title": "小天使与流浪汉",
    "url": "./movie-1543.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,温情,犯罪",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "街头流浪汉被迫照顾一个从福利院逃出的哑女童,却发现她脑后有一张悬赏千万的芯片。",
    "tags": [
      "孤儿",
      "流浪者",
      "救赎",
      "圣诞夜"
    ]
  },
  {
    "title": "甜心战士",
    "url": "./movie-1544.html",
    "cover": "./44.jpg",
    "year": "2004",
    "region": "日本",
    "type": "电影",
    "genre": "动作,科幻,喜剧",
    "category": "喜剧爱情",
    "rating": 9.2,
    "description": "一个拥有美少女外形的超级仿生人战士,为了守护人类的“爱和泪水”,与机械反派展开了一场又蠢又燃的战斗。",
    "tags": [
      "真人漫改",
      "变身女英雄",
      "cult",
      "性感",
      "恶趣味"
    ]
  },
  {
    "title": "谯国夫人",
    "url": "./movie-1545.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史,传记,古装",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "南北朝时期,岭南女首领冼英如何用智慧与仁德,化解汉俚矛盾并维护国家统一。",
    "tags": [
      "巾帼英雄",
      "岭南",
      "冼夫人",
      "统一"
    ]
  },
  {
    "title": "青春雷锋",
    "url": "./movie-1546.html",
    "cover": "./46.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,传记",
    "category": "剧情故事",
    "rating": 9.5,
    "description": "影片聚焦雷锋从湖南望城到鞍钢、再到部队的青年时期,展现了他如何从一个普通孤儿成长为时代榜样。",
    "tags": [
      "主旋律",
      "偶像化表达",
      "年代怀旧",
      "青年人",
      "无私奉献"
    ]
  },
  {
    "title": "密令保镳",
    "url": "./movie-1547.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "动作/悬疑/惊悚",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "总统的贴身保镖在一次暗杀中幸存,却发现自己要保护的对象,正是下达暗杀令的幕后主使。",
    "tags": [
      "青瓦台",
      "保镖",
      "内鬼",
      "政变",
      "近身肉搏"
    ]
  },
  {
    "title": "萨尔托",
    "url": "./movie-1548.html",
    "cover": "./48.jpg",
    "year": "2017",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情,悬疑,奇幻",
    "category": "喜剧爱情",
    "rating": 9.3,
    "description": "世界第一高空走绳大师在双子塔间表演时,看到对面楼顶站着一个死去的故人。",
    "tags": [
      "高空",
      "走绳",
      "幻觉",
      "犯罪"
    ]
  },
  {
    "title": "苹果村的苹果事儿",
    "url": "./movie-1549.html",
    "cover": "./49.jpg",
    "year": "2014",
    "region": "中国",
    "type": "电视剧",
    "genre": "乡村,喜剧",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "在山东一个只有苹果的小村庄里,村主任为了帮大家卖苹果,闹出了一连串令人啼笑皆非的笑话。",
    "tags": [
      "农村",
      "致富",
      "基层干部",
      "幽默"
    ]
  },
  {
    "title": "少年与英雄",
    "url": "./movie-1550.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "大凉山彝族少年误打误撞进入省拳击队,发现教练正是当年离家出走的父亲。",
    "tags": [
      "励志",
      "乡土",
      "拳击"
    ]
  },
  {
    "title": "乐队唱聊吧",
    "url": "./movie-1551.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐/真人秀",
    "category": "动画奇幻",
    "rating": 9.2,
    "description": "三支风格迥异的乐队共居一室,用音乐和夜谈解决人生焦虑。",
    "tags": [
      "乐队",
      "聊天",
      "团综",
      "即兴"
    ]
  },
  {
    "title": "路上有狼",
    "url": "./movie-1552.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪,悬疑,公路",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "一个常年跑长途的货车司机在西北公路上接连遇到搭车人,却发现每个人都是被同一匹“狼”派来的。",
    "tags": [
      "长途司机",
      "连环绑架",
      "公路惊悚",
      "父女情",
      "反转"
    ]
  },
  {
    "title": "紧急搜捕令",
    "url": "./movie-1553.html",
    "cover": "./53.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪",
    "category": "国产热映",
    "rating": 8.1,
    "description": "老警探收到神秘指令追捕连环杀手,却发现自己每抓到一个人,真正的凶手就在警局内部除掉一个证人。",
    "tags": [
      "警匪",
      "枪战",
      "飙车",
      "硬汉",
      "悬疑"
    ]
  },
  {
    "title": "耐撕侦探",
    "url": "./movie-1554.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧/犯罪",
    "category": "喜剧爱情",
    "rating": 8.3,
    "description": "一个信奉“能用拳头解决绝不动口”的肌肉侦探,被迫与一个“能用绝顶智商恶心你绝不动手”的植物学博士搭档破案。",
    "tags": [
      "搭档探案",
      "暴力美学",
      "话痨"
    ]
  },
  {
    "title": "男人女人向前走",
    "url": "./movie-1555.html",
    "cover": "./55.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "在同一家广告公司,三男三女面对三十岁的门槛,在事业与爱情的十字路口迷茫前行。",
    "tags": [
      "都市",
      "情感",
      "职场",
      "励志",
      "群像"
    ]
  },
  {
    "title": "勇探闯龙潭",
    "url": "./movie-1556.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,警匪",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "为了捣毁一个跨国洗钱集团,一个卧底警探必须在狱中保护自己亲手送进去的黑帮大佬,因为他是唯一能认出幕后老板的人。",
    "tags": [
      "卧底",
      "黑帮",
      "兄弟情",
      "枪战",
      "悲情"
    ]
  },
  {
    "title": "黑神",
    "url": "./movie-1557.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻、战斗、暗黑",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "在神明靠人类信仰生存的世界,最弱的“霉神”为自救,决定干掉所有神明自己当老大。",
    "tags": [
      "神明厮杀",
      "反套路热血",
      "暴力美学",
      "宿命轮回"
    ]
  },
  {
    "title": "吊死诡",
    "url": "./movie-1558.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "电影",
    "genre": "恐怖/民俗",
    "category": "国产热映",
    "rating": 9.1,
    "description": "一群学生无聊玩“吊死鬼”招魂游戏,第二天发现镜子里的人全部上吊了。",
    "tags": [
      "都市传说",
      "校园",
      "诅咒"
    ]
  },
  {
    "title": "浮云世事",
    "url": "./movie-1559.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "芬兰",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "国产热映",
    "rating": 8.7,
    "description": "经济危机下一对中年夫妇接连失业,为保住房子,他们轮流假装上班,却在公交车上发现了彼此的秘密。",
    "tags": [
      "北欧冷幽默",
      "失业风暴",
      "底层尊严"
    ]
  },
  {
    "title": "一路向南",
    "url": "./movie-1560.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "公路/剧情/冒险",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "三个失意的陌生人挤在一辆破旧面包车里,决定跨越半个中国去参加一个陌生人的葬礼。",
    "tags": [
      "顺风车",
      "西藏",
      "约定",
      "治愈"
    ]
  },
  {
    "title": "台北星期天",
    "url": "./movie-1561.html",
    "cover": "./61.jpg",
    "year": "2020",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "都市情感",
    "category": "喜剧爱情",
    "rating": 9.7,
    "description": "台北一栋老旧公寓里,四户租客的故事,都在星期天迎来转折。",
    "tags": [
      "单元剧",
      "租房",
      "北漂",
      "邻里"
    ]
  },
  {
    "title": "囧宝联盟之明朝古物",
    "url": "./movie-1562.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/冒险",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "五个负债累累的loser组队盗墓,误闯明朝将军墓后,发现守墓人竟是将军本人——他没死,活到了现在。",
    "tags": [
      "夺宝",
      "废柴团队",
      "明朝",
      "误打误撞"
    ]
  },
  {
    "title": "黄金七令之罗刹风云",
    "url": "./movie-1563.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装/动作/奇幻",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "一张神秘的“黄金七令”重现江湖,引各路豪杰争夺,却不知集齐七令之人将放出上古罗刹。",
    "tags": [
      "盗墓",
      "民间志怪",
      "道教秘术",
      "七令传说"
    ]
  },
  {
    "title": "夺命怪客",
    "url": "./movie-1564.html",
    "cover": "./64.jpg",
    "year": "1986",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,惊悚,犯罪",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "沙漠公路旁,一个好心的卡车司机其实是一名专杀搭车客的连环杀手。",
    "tags": [
      "公路",
      "杀人魔",
      "荒原",
      "卡车",
      "追杀"
    ]
  },
  {
    "title": "铁人王进喜",
    "url": "./movie-1565.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "传记历史",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "除了他跳进泥浆池的那双脚印,这部影片还想找到他作为父亲、作为丈夫的柔软背影。",
    "tags": [
      "主旋律",
      "艰苦奋斗",
      "大庆精神",
      "铁人"
    ]
  },
  {
    "title": "到达",
    "url": "./movie-1566.html",
    "cover": "./66.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/悬疑",
    "category": "港台佳片",
    "rating": 8.8,
    "description": "外星信号反复播放同一段中文广播,语言学家解码后发现自己三十年前就收到过这条消息。",
    "tags": [
      "外星信号",
      "时间悖论",
      "语言学",
      "心理惊悚"
    ]
  },
  {
    "title": "老而弥癫小电影",
    "url": "./movie-1567.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,剧情,家庭",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "养老院七个老人偷走救护车,只为拍完年轻时未竟的“小电影”。",
    "tags": [
      "老年",
      "疯狂",
      "梦想",
      "搞笑"
    ]
  },
  {
    "title": "海妖启示录",
    "url": "./movie-1568.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻,悬疑,灾难",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "全球海平面突升百米,幸存者发现海妖并非灾厄元凶,而是警告人类时间循环即将重开。",
    "tags": [
      "末日浪潮",
      "深海生物",
      "气候寓言"
    ]
  },
  {
    "title": "儿子的名字",
    "url": "./movie-1569.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "剧情/家庭/悬疑",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "一个即将生产的女人在亡夫的遗物里发现一本笔记,上面写了十二个“儿子的名字”。",
    "tags": [
      "遗腹子",
      "名字诅咒",
      "家族秘密",
      "代际信件"
    ]
  },
  {
    "title": "史酷比:湖怪的诅咒",
    "url": "./movie-1570.html",
    "cover": "./70.jpg",
    "year": "2023",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/悬疑/冒险",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "神秘公司一行人来到夏令营,却发现湖怪传说背后藏着一位环保少女的激进抗议,以及一桶荧光绿色的有毒废料。",
    "tags": [
      "解谜",
      "怪物",
      "青少年",
      "经典重启"
    ]
  },
  {
    "title": "聊斋粤语",
    "url": "./movie-1571.html",
    "cover": "./71.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻,恐怖",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "香港深水埗一栋旧楼里,每晚都有人用粤语讲一个聊斋故事,讲完故事的人第二天就会消失。",
    "tags": [
      "志怪",
      "因果报应",
      "粤语旁白"
    ]
  },
  {
    "title": "青春素描",
    "url": "./movie-1572.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/同性/校园",
    "category": "国产热映",
    "rating": 8.9,
    "description": "美术资优生被要求“辅导”一个从不说话的同学,却发现他的素描本里画满了自己。",
    "tags": [
      "美术班",
      "暗恋",
      "自闭症",
      "手绘"
    ]
  },
  {
    "title": "叛逆边缘",
    "url": "./movie-1573.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,青春",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "保守派议员父亲为了挽救形象,把自己玩摇滚被退学的儿子送去参加“变形记”,结果儿子教坏了山里所有孩子。",
    "tags": [
      "朋克",
      "代际冲突",
      "摇滚"
    ]
  },
  {
    "title": "地球上只有我们两人",
    "url": "./movie-1574.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "阿根廷",
    "type": "电影",
    "genre": "科幻,爱情,悬疑",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "一对男女在末世醒来,自称是最后的人类,但湖边每天都多出两双不属于他们的湿脚印。",
    "tags": [
      "末世",
      "孤岛",
      "记忆植入",
      "哲学"
    ]
  },
  {
    "title": "迷粤语",
    "url": "./movie-1575.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑/剧情",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "一名失语的内地移民为了融入香港,偷偷模仿一段网络上的神秘粤语录音,却开始丢失自己的记忆。",
    "tags": [
      "语言困境",
      "身份认同",
      "声音设计",
      "都市传说"
    ]
  },
  {
    "title": "猫公主苏菲",
    "url": "./movie-1576.html",
    "cover": "./76.jpg",
    "year": "2018",
    "region": "法国/加拿大",
    "type": "电影",
    "genre": "动画/奇幻/家庭",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "被诅咒变成人类的猫公主必须在三天内找回王冠,否则整个猫族将消失。",
    "tags": [
      "猫咪",
      "公主",
      "冒险",
      "魔法",
      "治愈"
    ]
  },
  {
    "title": "中国维和行动",
    "url": "./movie-1577.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "动作,战争",
    "category": "家庭青春",
    "rating": 9.4,
    "description": "一支中国维和步兵营在南苏丹被围困72小时,弹尽粮绝之际,他们升起五星红旗。",
    "tags": [
      "维和",
      "非洲",
      "真实事件",
      "热血"
    ]
  },
  {
    "title": "海豹突击队第六季",
    "url": "./movie-1578.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/战争",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "第六季中,精英小队转向灰色地带作战,面对渗透进本土的生化威胁以及内部信仰的崩塌。",
    "tags": [
      "军事",
      "反恐",
      "兄弟情",
      "写实战术"
    ]
  },
  {
    "title": "喜剧王中王·前任归来",
    "url": "./movie-1579.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧、爱情、怀旧",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "曾经的喜剧冠军沦落为婚礼司仪,前女友却带着大牌明星未婚夫请他主持婚礼,还要加戏。",
    "tags": [
      "综艺改编",
      "前任",
      "破镜重圆",
      "搞笑"
    ]
  },
  {
    "title": "毕加索与我",
    "url": "./movie-1580.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "西班牙/法国",
    "type": "电影",
    "genre": "剧情/传记",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "毕加索最后一位在世的情人,在她100岁生日那天,终于开口讲述被天才光芒吞噬的半生与自我救赎。",
    "tags": [
      "画家传记",
      "情人视角",
      "女性觉醒",
      "艺术圈秘辛"
    ]
  },
  {
    "title": "拳脚之路",
    "url": "./movie-1581.html",
    "cover": "./81.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/剧情",
    "category": "综艺纪实",
    "rating": 9.1,
    "description": "一个送快递的前散打冠军,为了女儿的医药费重新打进了地下拳场。",
    "tags": [
      "武术",
      "快递员",
      "地下拳场"
    ]
  },
  {
    "title": "洞房夜新娘",
    "url": "./movie-1582.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖,民俗,悬疑",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "洞房花烛夜,新娘发现新郎竟不是白天拜堂的那个人,而整座宅子的族人,都在等着她产下一个“非人”的胎儿。",
    "tags": [
      "中式恐怖",
      "冥婚",
      "古宅"
    ]
  },
  {
    "title": "三个家庭第一季",
    "url": "./movie-1583.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情,家庭,都市",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "住在同一栋唐楼里的三个不同阶层家庭,在房地产狂潮下,上演着各自的悲欢离合。",
    "tags": [
      "贫富差距",
      "代际沟通",
      "社会现实",
      "群像剧",
      "港味"
    ]
  },
  {
    "title": "别样人生",
    "url": "./movie-1584.html",
    "cover": "./84.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/文艺",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "电梯故障让一个社畜在自家楼道里看到了十几种不同选择的平行人生。",
    "tags": [
      "平行宇宙",
      "选择",
      "哲学",
      "都市",
      "奇幻"
    ]
  },
  {
    "title": "江湖龙女",
    "url": "./movie-1585.html",
    "cover": "./85.jpg",
    "year": "2000",
    "region": "香港",
    "type": "电影",
    "genre": "动作,爱情",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "老龙头暴毙,他从不问世事的女儿被迫接手帮派,却在一次火并中爱上了敌对帮派的老大。",
    "tags": [
      "黑帮",
      "龙头",
      "女继承人",
      "兄弟情"
    ]
  },
  {
    "title": "天堂:爱",
    "url": "./movie-1586.html",
    "cover": "./86.jpg",
    "year": "2012",
    "region": "奥地利/法国",
    "type": "电影",
    "genre": "剧情/伦理",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "一名50岁的奥地利妇女前往肯尼亚寻找爱情,却发现自己只是海滩男孩们的“糖妈妈”。",
    "tags": [
      "性旅游",
      "肯尼亚",
      "中年女性"
    ]
  },
  {
    "title": "血洒鳄鱼潭",
    "url": "./movie-1587.html",
    "cover": "./87.jpg",
    "year": "1990",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,惊悚,犯罪",
    "category": "国产热映",
    "rating": 8.9,
    "description": "卧底警察身份暴露,被黑帮扔进养满鳄鱼的潭中,他必须利用潭底暗道逃生并带回证据。",
    "tags": [
      "卧底",
      "鳄鱼",
      "特技",
      "内地早期动作"
    ]
  },
  {
    "title": "西岸故事",
    "url": "./movie-1588.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪/剧情/音乐",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "洛杉矶西岸两个说唱歌手来自敌对帮派,却暗中组成组合制作了一张神专,而专辑泄露那天就是血洗之日。",
    "tags": [
      "说唱",
      "帮派",
      "洛杉矶",
      "种族",
      "宿命"
    ]
  },
  {
    "title": "抢救失业大作战",
    "url": "./movie-1589.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧/剧情",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "一群被科技公司裁员的中年大叔,为了活下去,合伙开了一家殡葬业“一条龙”公司。",
    "tags": [
      "中年失业",
      "再就业",
      "打工人",
      "黑色幽默"
    ]
  },
  {
    "title": "一曲相思情未了",
    "url": "./movie-1590.html",
    "cover": "./90.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/音乐",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "他是无人问津的作曲人,她是夜总会的最后一位歌女,一首未完成的歌成了绝唱。",
    "tags": [
      "红颜薄命",
      "作曲家",
      "绝唱",
      "香港老歌"
    ]
  },
  {
    "title": "人体雕像",
    "url": "./movie-1591.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "惊悚/艺术",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "过气行为艺术家将自己封入树脂,计划成为永恒的艺术品,但几天后他竟在雕塑里睁开了眼。",
    "tags": [
      "行为艺术",
      "病态美学",
      "极致癫狂"
    ]
  },
  {
    "title": "旧金山风物记",
    "url": "./movie-1592.html",
    "cover": "./92.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "genre": "历史,悬疑",
    "category": "动作冒险",
    "rating": 8.4,
    "description": "1906年大地震前夕,一个华人侦探在旧金山追查连环凶案,发现每个现场都留有一张风水符纸。",
    "tags": [
      "旧金山",
      "唐人街",
      "1906",
      "侦探"
    ]
  },
  {
    "title": "原野烽烟",
    "url": "./movie-1593.html",
    "cover": "./93.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争,剧情,历史",
    "category": "港台佳片",
    "rating": 8.4,
    "description": "抗战末期,一支残存的骑兵队必须在绝境中护送关键情报穿越百里荒漠。",
    "tags": [
      "抗日战争",
      "骑兵",
      "兄弟情",
      "大漠"
    ]
  },
  {
    "title": "该死的歌德",
    "url": "./movie-1594.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "喜剧/音乐/传记",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "如果德国大文豪歌德没写《少年维特的烦恼》,而是跑去组了一支十八世纪的朋克乐队。",
    "tags": [
      "另类传记",
      "摇滚诗人",
      "历史解构",
      "荒诞幽默"
    ]
  },
  {
    "title": "克拉拉幽魂",
    "url": "./movie-1595.html",
    "cover": "./95.jpg",
    "year": "2021",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/恐怖",
    "category": "国产热映",
    "rating": 9.6,
    "description": "提琴少女死后,整座古堡每晚都响起那首未完成的协奏曲,而新来的女仆长得和她一模一样。",
    "tags": [
      "心理惊悚",
      "宗教隐喻",
      "少语",
      "古堡"
    ]
  },
  {
    "title": "恋爱兵法2012",
    "url": "./movie-1596.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情、喜剧、剧情",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "2012年,一个精通36计的情场浪子,竟然被自己最看不起的“土气”女下属用同样的套路反杀。",
    "tags": [
      "都市男女",
      "PUA反杀",
      "女性觉醒",
      "韩式反转"
    ]
  },
  {
    "title": "权欲第六季",
    "url": "./movie-1597.html",
    "cover": "./97.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪/剧情",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "第六季开局即王炸:主角“鬼魂”在夜店门口中枪倒地,最后十集都是他在救护车上的“临终脑内法庭”。",
    "tags": [
      "纽约黑帮",
      "权力游戏",
      "家族纷争",
      "黑色终章"
    ]
  },
  {
    "title": "最后的太阳",
    "url": "./movie-1598.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/灾难/伦理",
    "category": "喜剧爱情",
    "rating": 9.2,
    "description": "太阳将在十年后熄灭,全球抽签进入地下城,但一位物理学家发现抽签系统被篡改,富人全拿到了“生签”。",
    "tags": [
      "太阳熄灭",
      "方舟计划",
      "人性实验",
      "硬科幻"
    ]
  },
  {
    "title": "辣妞征集",
    "url": "./movie-1599.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "青春喜剧",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "五个被校啦啦队开除的“怪胎”女生,自己组建了一支史上最烂、但最有态度的竞技啦啦队。",
    "tags": [
      "啦啦队",
      "高中",
      "逆袭",
      "友情",
      "竞技"
    ]
  },
  {
    "title": "亚历珊卓",
    "url": "./movie-1600.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/文艺",
    "category": "港台佳片",
    "rating": 8.4,
    "description": "80岁的亚历珊卓决定去死,但在那之前,她打算把自己睡过的男人都写进回忆录,寄给现任市长。",
    "tags": [
      "女性",
      "成长",
      "小镇"
    ]
  },
  {
    "title": "当福音再临",
    "url": "./movie-1601.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情/宗教/惊悚",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "贫民窟的一个男孩死后三天复活,声称自己是二次降临的基督,但他的神迹只在摄像头拍不到的地方生效。",
    "tags": [
      "神迹",
      "贫民窟",
      "假先知",
      "信仰",
      "救赎"
    ]
  },
  {
    "title": "阿肯色",
    "url": "./movie-1602.html",
    "cover": "./102.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪/剧情",
    "category": "国产热映",
    "rating": 9.4,
    "description": "两个底层毒贩在南方的物流网络里步步为营,却发现自己只是棋局里随时可弃的棋子。",
    "tags": [
      "贩毒帝国",
      "南部哥特",
      "新黑色电影",
      "命运无常"
    ]
  },
  {
    "title": "情剑",
    "url": "./movie-1603.html",
    "cover": "./103.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠,动作",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "天下第一铸剑师被灭门,活下来的哑女徒弟假扮师父,只为铸出一把能杀死仇人的“情剑”。",
    "tags": [
      "江湖",
      "铸剑",
      "替身",
      "复仇",
      "水墨风"
    ]
  },
  {
    "title": "反之亦爱",
    "url": "./movie-1604.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情,奇幻",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "高冷学霸和学渣校霸意外互换身体,为了应付对方的人生,不得不假装爱上彼此。",
    "tags": [
      "互换身体",
      "纯爱",
      "搞笑",
      "失忆"
    ]
  },
  {
    "title": "幸福来接龙",
    "url": "./movie-1605.html",
    "cover": "./105.jpg",
    "year": "2021",
    "region": "中国",
    "type": "剧集",
    "genre": "家庭,喜剧,温情",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "为了逗孙子开心,爷爷在小区群里发起“幸福接龙”,结果整个社区都开始接龙自己最丢脸的幸福事。",
    "tags": [
      "接龙游戏",
      "隔代亲",
      "社区温情"
    ]
  },
  {
    "title": "倒计时",
    "url": "./movie-1606.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、科幻",
    "category": "最新推荐",
    "rating": 8.6,
    "description": "当他醒来发现手腕上多了个死亡倒计时,唯一的活路竟是杀害无辜者。",
    "tags": [
      "时间循环",
      "密室逃脱",
      "高概念"
    ]
  },
  {
    "title": "俘虏与逃兵",
    "url": "./movie-1607.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "战争/剧情",
    "category": "欧美电影",
    "rating": 8.4,
    "description": "二战末期,一个年轻的德国逃兵成为美军俘虏,却意外与看守他的美国大兵产生了奇妙的友谊。",
    "tags": [
      "二战",
      "人性",
      "抉择",
      "反思"
    ]
  },
  {
    "title": "记忆之城",
    "url": "./movie-1608.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "科幻,悬疑",
    "category": "动画奇幻",
    "rating": 8.1,
    "description": "一座只存在于服务器里的城市,住着所有选择“永生”的人,但最近记忆开始批量消失。",
    "tags": [
      "记忆",
      "意识上传",
      "伦理",
      "反转"
    ]
  },
  {
    "title": "找到你了",
    "url": "./movie-1609.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚/犯罪",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "为了找到失踪的女儿,母亲开发了一款能识别全民脸部的软件,却发现了更恐怖的秘密。",
    "tags": [
      "人肉搜索",
      "网络暴力",
      "校园霸凌",
      "复仇"
    ]
  },
  {
    "title": "情义英雄武二郎",
    "url": "./movie-1610.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠,动作",
    "category": "动作冒险",
    "rating": 9.5,
    "description": "武松为兄报仇杀潘金莲后,发现自己卷入了一场更大的江湖阴谋。",
    "tags": [
      "水浒",
      "武松",
      "兄弟情"
    ]
  },
  {
    "title": "伊莉莎白不见了",
    "url": "./movie-1611.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑剧情",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "患有阿尔茨海默症的老太太反复在笔记本上写下“伊莉莎白不见了”,但她不记得伊莉莎白是谁。",
    "tags": [
      "阿尔茨海默",
      "失踪",
      "笔记",
      "碎片",
      "真相"
    ]
  },
  {
    "title": "达菲的旅馆麻烦",
    "url": "./movie-1612.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,冒险",
    "category": "港台佳片",
    "rating": 9.0,
    "description": "达菲熊意外成为一家破旅馆经理,必须在三天内让所有动物客人满意,否则旅馆会被拆。",
    "tags": [
      "动画",
      "旅馆",
      "熊",
      "闹剧"
    ]
  },
  {
    "title": "太平洋航空作战",
    "url": "./movie-1613.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,战争,历史",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "中途岛海战后,一名因创伤而“失明”的王牌飞行员,必须通过声呐般的听觉,引导自己的中队在夜间迷雾中找到敌方航母。",
    "tags": [
      "二战",
      "航母",
      "飞行员",
      "空战"
    ]
  },
  {
    "title": "神马都是浮云",
    "url": "./movie-1614.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/奇幻/寓言",
    "category": "亚洲精选",
    "rating": 8.2,
    "description": "一匹会说话的马被网络捧成“神马”顶流网红,当它终于学会说人话时,所有人都说听错了。",
    "tags": [
      "讽刺",
      "黑色幽默",
      "网络热词",
      "解构",
      "众生相"
    ]
  },
  {
    "title": "千人斩",
    "url": "./movie-1615.html",
    "cover": "./115.jpg",
    "year": "1991",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作,奇幻",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "刽子手因斩首千人而被称为“千人斩”,但被他处决的恶鬼们联合起来,要在头七之夜向他索命。",
    "tags": [
      "武侠",
      "鬼怪",
      "cult"
    ]
  },
  {
    "title": "欲海春色",
    "url": "./movie-1616.html",
    "cover": "./116.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,情色,悬疑",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "为了跻身上流社会,穷家女假扮豪门失散千金入住别墅,却发现这家族的每个成员都试图在午夜杀死对方,只为了遗产。",
    "tags": [
      "R级",
      "豪门恩怨",
      "欲望",
      "心理战",
      "反转"
    ]
  },
  {
    "title": "西城故事",
    "url": "./movie-1617.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情音乐",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "新泽西拉丁裔社区,一个波多黎各女孩和白人警察的儿子相爱,背景是即将被拆除的舞蹈工作室。",
    "tags": [
      "街头舞蹈",
      "移民冲突",
      "罗密欧与朱丽叶当代版"
    ]
  },
  {
    "title": "我爸爸不是人",
    "url": "./movie-1618.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "家庭,科幻,温情",
    "category": "综艺纪实",
    "rating": 9.1,
    "description": "小女孩发现最近给自己做早餐、扎辫子的爸爸,胸口破了一个洞,里面漏出的是机油。",
    "tags": [
      "仿生人",
      "父女情",
      "末日废土",
      "催泪"
    ]
  },
  {
    "title": "布偶也摇滚第二季",
    "url": "./movie-1619.html",
    "cover": "./119.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧/音乐",
    "category": "欧美电影",
    "rating": 9.0,
    "description": "布偶乐队拿到千万巡演合约,却发现经纪人是一只想捧红自己AI虚拟偶像的秃鹫。",
    "tags": [
      "布偶",
      "摇滚",
      "幕后花絮式"
    ]
  },
  {
    "title": "伦敦间谍战",
    "url": "./movie-1620.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "动作,惊悚",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "一名被开除的密码天才,被军情六处设局成为诱饵,却发现猎人和猎物身份早已互换。",
    "tags": [
      "双面间谍",
      "军情六处",
      "高科技"
    ]
  },
  {
    "title": "生于昨日",
    "url": "./movie-1621.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,科幻,悬疑",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "一位时间旅行者发现,无论他回到过去多少次,都无法阻止女儿的出生。",
    "tags": [
      "时间循环",
      "亲情",
      "悬疑",
      "救赎"
    ]
  },
  {
    "title": "极主夫道 电影版",
    "url": "./movie-1622.html",
    "cover": "./122.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧,动作",
    "category": "国产热映",
    "rating": 9.6,
    "description": "传说中的不死之龙,如今成了最会砍价、最擅长做便当的家庭主夫,但江湖依然流传着他的传说。",
    "tags": [
      "漫画改编",
      "黑帮",
      "家庭主夫"
    ]
  },
  {
    "title": "恐怖绘本第六季",
    "url": "./movie-1623.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "每集用一本经典儿童绘本的“隐藏结局”改编成独立恐怖故事,让你从此不敢翻开任何童话书。",
    "tags": [
      "绘本",
      "短篇集",
      "童年阴影"
    ]
  },
  {
    "title": "纪雄的房间",
    "url": "./movie-1624.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/悬疑/家庭",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "一名孤独死现场清洁工,在整理逝者遗物时,拼凑出了屋主纪雄令人唏嘘的一生。",
    "tags": [
      "孤独死",
      "清理工",
      "回忆",
      "社会问题",
      "治愈"
    ]
  },
  {
    "title": "亲爱伴侣",
    "url": "./movie-1625.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "悬疑惊悚",
    "rating": 8.9,
    "description": "当AI伴侣比真人更懂你,你的另一半该何去何从?",
    "tags": [
      "婚姻",
      "AI伴侣",
      "黑色幽默",
      "情感依赖"
    ]
  },
  {
    "title": "为你抛却",
    "url": "./movie-1626.html",
    "cover": "./126.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情、剧情、音乐",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "一位过气钢琴家与一名即将失明的天才少女,在黑暗中合奏出最后的乐章。",
    "tags": [
      "绝症",
      "钢琴",
      "救赎",
      "纯爱"
    ]
  },
  {
    "title": "长发公主芭比",
    "url": "./movie-1627.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动画/歌舞/奇幻",
    "category": "悬疑惊悚",
    "rating": 8.4,
    "description": "拥有 30 米金色魔发的芭比,发现头发其实是封印外星文明的钥匙。",
    "tags": [
      "公主冒险",
      "自我认同",
      "魔法头发"
    ]
  },
  {
    "title": "野女孩",
    "url": "./movie-1628.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "青春/冒险",
    "category": "亚洲精选",
    "rating": 8.0,
    "description": "台北都市少女被迫回到深山部落过暑假,却意外发现祖母是最后一代“猎人之女”,而她体内的山林血统正在觉醒。",
    "tags": [
      "成长",
      "山林",
      "少女",
      "环保"
    ]
  },
  {
    "title": "人渣的本愿",
    "url": "./movie-1629.html",
    "cover": "./129.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "动画/爱情/剧情",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "一对表面上人人羡慕的高中生情侣,背地里却只是互相填补“暗恋对象”空缺的替代品,肮脏又纯粹。",
    "tags": [
      "扭曲",
      "性",
      "成人向",
      "致郁"
    ]
  },
  {
    "title": "春季大赏",
    "url": "./movie-1630.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情/职场",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "顶级广告公司被停职的女总监,与新人男实习生结成“草台班子”,目标是拿下年度最大美妆品牌案。",
    "tags": [
      "广告界",
      "逆袭",
      "姐弟恋",
      "樱花季"
    ]
  },
  {
    "title": "最后的忠臣藏",
    "url": "./movie-1631.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "历史/动作",
    "category": "家庭青春",
    "rating": 9.1,
    "description": "明治维新时代,最后一名赤穗浪士的后人重举义旗,对抗天皇的废刀令。",
    "tags": [
      "武士",
      "复仇",
      "幕末",
      "忠义"
    ]
  },
  {
    "title": "香车艳尸",
    "url": "./movie-1632.html",
    "cover": "./132.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪惊悚",
    "category": "欧美电影",
    "rating": 9.7,
    "description": "一辆被遗弃的限量跑车后备箱里,发现一具艳尸,负责查案的是退休前最后一天的督查。",
    "tags": [
      "三级片",
      "奇案",
      "邵氏",
      "情色推理"
    ]
  },
  {
    "title": "好运来",
    "url": "./movie-1633.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/奇幻",
    "category": "剧情故事",
    "rating": 8.5,
    "description": "倒霉蛋程序员买到一个声称能带来好运的APP,此后他每次好运降临,都对应着另一个人的极致厄运。",
    "tags": [
      "许愿",
      "好运",
      "反讽",
      "黑色幽默",
      "都市寓言"
    ]
  },
  {
    "title": "花系列:二",
    "url": "./movie-1634.html",
    "cover": "./134.jpg",
    "year": "1990",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/爱情/家庭",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "姐姐替妹妹坐牢十年出狱,却发现妹妹嫁给了自己当年的恋人,还成了一档鲜花综艺的主持人。",
    "tags": [
      "琼瑶式",
      "苦情女主",
      "姐妹恩怨"
    ]
  },
  {
    "title": "狂蟒之城",
    "url": "./movie-1635.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "动作,惊悚,冒险",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "废弃都市沦为巨蟒猎场,一群幸存者必须在满月之夜逃离水泥丛林。",
    "tags": [
      "变异生物",
      "废土",
      "生存",
      "复仇"
    ]
  },
  {
    "title": "借眼",
    "url": "./movie-1636.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "盲女复明后,总从新眼睛里看到上一任主人的死亡记忆。",
    "tags": [
      "器官捐赠",
      "视觉残留",
      "连环案",
      "伦理"
    ]
  },
  {
    "title": "机械师",
    "url": "./movie-1637.html",
    "cover": "./137.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻",
    "category": "国产热映",
    "rating": 9.5,
    "description": "顶级机械师被植入战斗芯片,他必须在意识被吞噬前摧毁制造他的公司。",
    "tags": [
      "义体人",
      "复仇",
      "高科技",
      "近未来",
      "打斗爽片"
    ]
  },
  {
    "title": "黄瓜",
    "url": "./movie-1638.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "荒诞喜剧",
    "category": "最新推荐",
    "rating": 9.1,
    "description": "一个黄瓜种植户误将“有机认证”听成“有鸡认证”,全村陷入养鸡狂潮。",
    "tags": [
      "乡村创业",
      "黑色幽默",
      "农产品",
      "直播带货"
    ]
  },
  {
    "title": "最终频率",
    "url": "./movie-1639.html",
    "cover": "./139.jpg",
    "year": "2026",
    "region": "英国/美国",
    "type": "电影",
    "genre": "科幻/惊悚/灾难",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "一种特殊的声波开始在全球蔓延,听到的人会在7天后七窍流血而死,唯一的避难所是没有任何电子设备的苏格兰荒岛。",
    "tags": [
      "末日频率",
      "声音杀人",
      "孤岛求生"
    ]
  },
  {
    "title": "兰黛夫人",
    "url": "./movie-1640.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,传记",
    "category": "喜剧爱情",
    "rating": 8.5,
    "description": "雅诗·兰黛的成名路并非一帆风顺,剧集聚焦她如何从纽约皇后区厨房起家,偷师法国同行并打败纽约贵妇圈。",
    "tags": [
      "化妆品帝国",
      "女性创业",
      "阶级跃迁",
      "野心",
      "年代剧"
    ]
  },
  {
    "title": "超级英雄联盟复仇者第一季",
    "url": "./movie-1641.html",
    "cover": "./141.jpg",
    "year": "1999",
    "region": "美国",
    "type": "剧集",
    "genre": "动画/动作",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "美国队长从冰层中醒来,发现世界已被九头蛇渗透,他必须集结五位互不信任的超能者。",
    "tags": [
      "漫威",
      "子供向",
      "单元剧",
      "经典配音"
    ]
  },
  {
    "title": "要记住的圣诞节",
    "url": "./movie-1642.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "家庭/奇幻/冒险",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "一个不信圣诞的小男孩意外撞伤了失忆的圣诞老人,他必须在圣诞夜结束前找回老人的魔法背包。",
    "tags": [
      "圣诞老人",
      "失忆",
      "极地特快",
      "时间循环"
    ]
  },
  {
    "title": "魔术师与小丑第一季",
    "url": "./movie-1643.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/犯罪/剧情",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "维多利亚时代,一位崇尚科学的魔术师与一位疯癫的小丑联手追捕“剧院幽灵”。",
    "tags": [
      "魔术",
      "连环杀手",
      "维多利亚时代",
      "双雄"
    ]
  },
  {
    "title": "兄弟营",
    "url": "./movie-1644.html",
    "cover": "./144.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争/剧情/历史",
    "category": "喜剧爱情",
    "rating": 9.6,
    "description": "1944年,一个溃败的国军排长与七个逃兵组成临时“兄弟营”,任务是炸掉日军弹药库,换全城百姓一条生路。",
    "tags": [
      "抗日",
      "兄弟情",
      "草根",
      "牺牲"
    ]
  },
  {
    "title": "破坏欲",
    "url": "./movie-1645.html",
    "cover": "./145.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑,惊悚,心理",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "心理医生治疗暴力狂,却发现自己才是那个被唤醒的“破坏欲”宿主。",
    "tags": [
      "暴力本能",
      "潜意识",
      "弗洛伊德"
    ]
  },
  {
    "title": "再见,宇宙战舰大和号",
    "url": "./movie-1646.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "genre": "科幻/战争",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "大和号最后一次启航,船员们发现所谓的外星威胁只是地球政府制造的骗局。",
    "tags": [
      "太空歌剧",
      "谢幕作",
      "经典重启"
    ]
  },
  {
    "title": "美国纳粹之夜",
    "url": "./movie-1647.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "政治惊悚",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "1962年,纳粹赢了二战,美国成了第四帝国,一个黑人服务员被错认成刺杀希特勒的英雄。",
    "tags": [
      "平行宇宙",
      "法西斯",
      "反抗军",
      "刺杀"
    ]
  },
  {
    "title": "小小迪特想要飞",
    "url": "./movie-1648.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/冒险",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "患有恐高症的侏儒症少年迪特,为了见到天上的妈妈,竟用废品造出了一架真的飞机。",
    "tags": [
      "飞行员",
      "梦想",
      "自闭症",
      "温情"
    ]
  },
  {
    "title": "致敬英雄",
    "url": "./movie-1649.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,灾难,传记",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "当山火即将吞噬化工厂,一支平均年龄22岁的消防突击队,用身体筑起了最后一道“防火墙”。",
    "tags": [
      "消防",
      "真实事件改编",
      "催泪",
      "群像",
      "主旋律"
    ]
  },
  {
    "title": "初入职场的我们·法医季",
    "url": "./movie-1650.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,纪实",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "八名法医专业实习生进入顶尖鉴定中心,面对真实遗体和离奇案件,胆量与正义感双重考验。",
    "tags": [
      "职场",
      "法医",
      "实习",
      "悬疑科普"
    ]
  },
  {
    "title": "林中秘族",
    "url": "./movie-1651.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑/恐怖",
    "category": "国产热映",
    "rating": 9.3,
    "description": "民俗学者进入与世隔绝的山村研究“长寿祭祀”,却发现村民每三十年献祭一个外来者来换不老。",
    "tags": [
      "深山村落",
      "民俗恐怖",
      "祭祀",
      "全员恶人"
    ]
  },
  {
    "title": "性爱大师第四季",
    "url": "./movie-1652.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,传记",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "最终季中,性学研究先驱马斯特斯与约翰逊迎来70年代性解放浪潮,他们的学术与婚姻同时走到了十字路口。",
    "tags": [
      "最终季",
      "性学研究",
      "人性",
      "时代变迁",
      "复杂关系"
    ]
  },
  {
    "title": "没有小鸟的天空",
    "url": "./movie-1653.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻/文艺",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "未来世界为了消灭鸟患消灭了所有鸟类,一个哑巴男孩捡到了世界上最后一个鸡蛋。",
    "tags": [
      "基因工程",
      "环保",
      "寓言"
    ]
  },
  {
    "title": "就算是爸爸,也想做",
    "url": "./movie-1654.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画/剧集",
    "genre": "剧情/家庭/生活",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "一个被裁员的中年单亲爸爸,在求职屡屡碰壁后,决定去做一名......男公关。",
    "tags": [
      "单亲爸爸",
      "育儿焦虑",
      "职场妈妈",
      "社会现实"
    ]
  },
  {
    "title": "暗藏杀机",
    "url": "./movie-1655.html",
    "cover": "./5.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "一名失忆的出租车司机发现自己后备箱里锁着目标人物,而后座坐着正在追捕自己的警察。",
    "tags": [
      "杀手",
      "失忆",
      "出租车",
      "反转"
    ]
  },
  {
    "title": "重新安排",
    "url": "./movie-1656.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑、惊悚、犯罪",
    "category": "最新推荐",
    "rating": 9.7,
    "description": "杀手阿鬼接到任务要去杀一个人,却发现目标正是十年前委托他“重新安排”自己妻子死亡现场的那个男人。",
    "tags": [
      "蝴蝶效应",
      "谋杀",
      "拼图",
      "烧脑",
      "复仇"
    ]
  },
  {
    "title": "梦之森林",
    "url": "./movie-1657.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "法国/加拿大",
    "type": "动画电影",
    "genre": "奇幻冒险",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "一个小女孩在梦中误入一片正在被“遗忘”吞噬的森林,那里的动物都在做同一个噩梦。",
    "tags": [
      "无对白",
      "水彩画风",
      "环保",
      "梦貘",
      "森林"
    ]
  },
  {
    "title": "战勇。第一季",
    "url": "./movie-1658.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动漫",
    "genre": "冒险,喜剧,奇幻",
    "category": "综艺纪实",
    "rating": 9.0,
    "description": "废柴勇者与抖S战士奉旨讨伐魔王,然而魔王早就被打败了,这趟旅程只是国王为了削减财政支出的阴谋?",
    "tags": [
      "勇者",
      "搞笑",
      "吐槽"
    ]
  },
  {
    "title": "搏击俱乐部",
    "url": "./movie-1659.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/惊悚",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "失眠症白领加入地下搏击俱乐部,却发现创立自己的那个人正在取代他的人生。",
    "tags": [
      "地下格斗",
      "人格分裂",
      "社会批判"
    ]
  },
  {
    "title": "丧钟已鸣",
    "url": "./movie-1660.html",
    "cover": "./10.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "genre": "悬疑,惊悚",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "偏远小镇的教堂钟声每晚都会自动敲响,每敲一次,镇上就有一人“被天罚”。",
    "tags": [
      "小镇疑云",
      "钟声",
      "诅咒"
    ]
  },
  {
    "title": "近战法师",
    "url": "./movie-1661.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧/奇幻/动作",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "全服第一狂暴战士穿越进了魔法世界,系统规定他只能用法术,于是他发明了“魔法铁拳”和“炎爆飞踢”。",
    "tags": [
      "游戏穿越",
      "魔法世界",
      "近战法师",
      "肌肉法师",
      "反套路"
    ]
  },
  {
    "title": "幸运的他们",
    "url": "./movie-1662.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/灾难",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "一场商场坍塌事故后,七个幸存者被称为“幸运儿”,但他们每个人都宁愿自己死在里面。",
    "tags": [
      "幸存者",
      "内疚",
      "心理",
      "灾难",
      "群像"
    ]
  },
  {
    "title": "无名记忆第二季",
    "url": "./movie-1663.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻/冒险",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "上一季失去所有记忆的王子,这一季必须找回遗忘的真相,代价是忘记刚刚爱上的人。",
    "tags": [
      "失忆王子",
      "魔女契约",
      "续作回归"
    ]
  },
  {
    "title": "寂寞裁缝师",
    "url": "./movie-1664.html",
    "cover": "./14.jpg",
    "year": "2027",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、犯罪、悬疑",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "伦敦顶尖裁缝退休回到海边小镇,他发现来这里定制西装的每一位客人,最后都会死于非命。",
    "tags": [
      "裁缝",
      "复仇",
      "小镇秘密"
    ]
  },
  {
    "title": "酸酸甜甜爱上你",
    "url": "./movie-1665.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情,喜剧",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "为了拯救濒临倒闭的家族甜品店,一个味觉失灵的甜点师不得不和曾经的死对头签订“情侣合约”。",
    "tags": [
      "甜品",
      "创业",
      "青梅竹马",
      "契约恋爱"
    ]
  },
  {
    "title": "凤凰号",
    "url": "./movie-1666.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/灾难/冒险",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "末世洪水吞没大陆,一艘名为“凤凰号”的方舟成为最后希望,但登船资格却由暗黑算法决定。",
    "tags": [
      "末世方舟",
      "人性拷问",
      "极限救援"
    ]
  },
  {
    "title": "阴声",
    "url": "./movie-1667.html",
    "cover": "./17.jpg",
    "year": "2020",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖,惊悚,悬疑",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "一对年轻夫妇搬进老宅,丈夫能听到墙壁里的“阴声”,妻子却听不到,而这声音似乎在教他谋杀妻子。",
    "tags": [
      "灵异",
      "听觉",
      "老宅",
      "诅咒",
      "高概念"
    ]
  },
  {
    "title": "我爱你妈",
    "url": "./movie-1668.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "华语",
    "type": "电影",
    "genre": "喜剧,家庭",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "互看不顺眼的婆婆和儿媳在一次争吵后意外互换了身体,不得不替对方过完糟心的一天。",
    "tags": [
      "麻辣婆媳",
      "身份互换",
      "爆笑互怼",
      "真情流露"
    ]
  },
  {
    "title": "风暴之山",
    "url": "./movie-1669.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/惊悚/冒险",
    "category": "国产热映",
    "rating": 9.7,
    "description": "六名登山者在攀登未登峰时遭遇百年一遇的暴风雪,躲进山顶的废弃小屋后,却发现同伴一个接一个死去。",
    "tags": [
      "登山",
      "极限生存",
      "心理惊悚",
      "暴风雪",
      "密室逃杀"
    ]
  },
  {
    "title": "烈探粤语",
    "url": "./movie-1670.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "会说粤语的华裔国际刑警孤身潜入香港黑帮,却发现亲弟弟是头号目标。",
    "tags": [
      "卧底",
      "警匪",
      "拳拳到肉",
      "兄弟情"
    ]
  },
  {
    "title": "寂寞心灵谋杀案",
    "url": "./movie-1671.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/惊悚/剧情",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "一个患有社交恐惧症的图书馆管理员,通过借阅记录分析小镇居民的“心灵弱点”,策划了一系列完美的“意外”死亡。",
    "tags": [
      "心理战",
      "孤独",
      "反转",
      "高智商犯罪"
    ]
  },
  {
    "title": "枪手",
    "url": "./movie-1672.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪,动作",
    "category": "最新推荐",
    "rating": 9.0,
    "description": "退役狙击手为救被绑架的女儿,必须在闹市区完成不可能的一枪。",
    "tags": [
      "狙击手",
      "复仇",
      "城市暗战"
    ]
  },
  {
    "title": "愿此刻永恒",
    "url": "./movie-1673.html",
    "cover": "./23.jpg",
    "year": "2003",
    "region": "日本",
    "type": "动画",
    "genre": "爱情/催泪",
    "category": "国产热映",
    "rating": 8.4,
    "description": "青梅竹马的女友因车祸昏迷三年后醒来,记忆停留在高中时代,完全不记得已经与她订婚的男主。",
    "tags": [
      "车祸",
      "失忆",
      "三角恋",
      "纯爱"
    ]
  },
  {
    "title": "薄樱鬼第一季",
    "url": "./movie-1674.html",
    "cover": "./24.jpg",
    "year": "2010",
    "region": "日本",
    "type": "动漫",
    "genre": "历史奇幻",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "幕末京都,少女雪村千鹤邂逅新选组,却发现队员们正被一种名为“罗刹”的吸血鬼之药侵蚀着人性。",
    "tags": [
      "新选组",
      "武士",
      "吸血鬼",
      "幕末",
      "雪村千鹤"
    ]
  },
  {
    "title": "深入敌后搞搞震3",
    "url": "./movie-1675.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧/动作/战争",
    "category": "喜剧爱情",
    "rating": 9.9,
    "description": "三个不靠谱的退伍兵为了巨额赏金,假扮成雇佣军潜入战乱区,却把一场真战争搅成了闹剧。",
    "tags": [
      "无厘头",
      "恶搞",
      "草台班子"
    ]
  },
  {
    "title": "律政英雄2015",
    "url": "./movie-1676.html",
    "cover": "./26.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "久利生公平调任到小海滨城市,卷入一桩涉及外务省的隐秘外交案件。",
    "tags": [
      "检察官",
      "木村拓哉",
      "单元剧电影版"
    ]
  },
  {
    "title": "星际劫难",
    "url": "./movie-1677.html",
    "cover": "./27.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/灾难/惊悚",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "一艘星际方舟遭遇黑洞后,幸存者发现救生舱里的氧气只够一半的人活到目的地。",
    "tags": [
      "太空",
      "逃生舱",
      "未知生物",
      "封闭空间"
    ]
  },
  {
    "title": "密室大逃脱第二季",
    "url": "./movie-1678.html",
    "cover": "./28.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀/悬疑/冒险",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "六位明星被困在一栋废弃医院里,每一扇门背后都是他们内心最深处的恐惧。",
    "tags": [
      "密室逃脱",
      "明星玩家",
      "解压",
      "脑力",
      "恐怖密室"
    ]
  },
  {
    "title": "家事法庭",
    "url": "./movie-1679.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "香港",
    "type": "剧集",
    "genre": "剧情,律政",
    "category": "综艺纪实",
    "rating": 8.8,
    "description": "在专门处理离婚、争产、抚养权的家事法庭里,一个从不结婚的毒舌大法官,用最无情的方式治愈着最破碎的家庭。",
    "tags": [
      "家庭纠纷",
      "单元剧",
      "人性"
    ]
  },
  {
    "title": "水牛骑士",
    "url": "./movie-1680.html",
    "cover": "./30.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "西部/剧情",
    "category": "动画奇幻",
    "rating": 8.3,
    "description": "一个破产的白人牛仔和一位拉科塔族老人在死牛腹中发现了一张通往过去的藏宝图。",
    "tags": [
      "牛仔",
      "荒野",
      "救赎",
      "原住民",
      "公路"
    ]
  },
  {
    "title": "春之血祭",
    "url": "./movie-1681.html",
    "cover": "./31.jpg",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑惊悚",
    "category": "欧美电影",
    "rating": 9.4,
    "description": "一个被废弃的芭蕾舞团再次集结,复排《春之祭》,女主角发现每一次旋转都在唤醒沉睡的恶魔。",
    "tags": [
      "芭蕾",
      "献祭",
      "精神病院",
      "俄式美学"
    ]
  },
  {
    "title": "一如既往",
    "url": "./movie-1682.html",
    "cover": "./32.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "他们在一起三十年了,每一天都一样,直到有一天一切还是一样,但一切都变了。",
    "tags": [
      "法国文艺",
      "生活流",
      "细水长流",
      "爱情长跑",
      "中年危机"
    ]
  },
  {
    "title": "撕裂",
    "url": "./movie-1683.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,科幻,惊悚",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "一家公司为员工植入“工作人格”和“生活人格”,一旦人格之间的墙出现裂缝,血腥的真相开始渗出。",
    "tags": [
      "记忆删除",
      "人格分裂",
      "公司阴谋"
    ]
  },
  {
    "title": "风流活宝贝",
    "url": "./movie-1684.html",
    "cover": "./34.jpg",
    "year": "1999",
    "region": "香港",
    "type": "电视剧",
    "genre": "时装/喜剧/爱情",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "四个性格迥异的都市女性好友约定一起游戏人间,直到其中一个怀孕,她们的“不婚联盟”瞬间崩溃。",
    "tags": [
      "TVB",
      "都市情感",
      "多角恋",
      "年代记忆"
    ]
  },
  {
    "title": "桃花庵",
    "url": "./movie-1685.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装/悬疑/爱情",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "江南才子死在桃花庵中,每具尸体旁都放着一页《牡丹亭》手稿。",
    "tags": [
      "明代",
      "文人案",
      "戏中戏"
    ]
  },
  {
    "title": "黑虎神",
    "url": "./movie-1686.html",
    "cover": "./36.jpg",
    "year": "2026",
    "region": "中国/马来西亚",
    "type": "电影",
    "genre": "动作/奇幻/武侠",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "南洋华人黑帮“黑虎堂”供奉的虎神突然显灵,要求帮派放弃打杀,转型舞狮队。",
    "tags": [
      "南洋",
      "降头",
      "黑帮",
      "虎鹤双形"
    ]
  },
  {
    "title": "下流世界",
    "url": "./movie-1687.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情,成人,行业剧",
    "category": "剧情故事",
    "rating": 8.3,
    "description": "一群女性在洛杉矶色情片产业幕后,争夺流量、话语权和一个不被定义的下流世界。",
    "tags": [
      "色情产业",
      "女性视角",
      "洛杉矶",
      "创业"
    ]
  },
  {
    "title": "血腥激情夜",
    "url": "./movie-1688.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖惊悚",
    "category": "悬疑惊悚",
    "rating": 8.1,
    "description": "一场盛大的高校毕业派对变成炼狱,当最后一名幸存者逃出时,她发现真正的屠杀才刚刚开始。",
    "tags": [
      "屠杀",
      "派对",
      "反转"
    ]
  },
  {
    "title": "千字遗言",
    "url": "./movie-1689.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "患阿尔茨海默症的外婆开始遗忘一切,却每天用毛笔写下一个“无”字,孙女试图破解其中的家族秘密。",
    "tags": [
      "阿尔茨海默",
      "代际沟通",
      "文字的力量"
    ]
  },
  {
    "title": "多哥2022",
    "url": "./movie-1690.html",
    "cover": "./40.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "冒险,剧情,家庭",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "年迈的雪橇手与传奇领头犬多哥,在暴风雪中穿越千里运送血清拯救全镇儿童。",
    "tags": [
      "雪橇犬",
      "真实事件",
      "感人"
    ]
  },
  {
    "title": "无枪侠",
    "url": "./movie-1691.html",
    "cover": "./41.jpg",
    "year": "2010",
    "region": "加拿大/英国",
    "type": "电影",
    "genre": "西部/喜剧",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "一个从不带枪的和平主义者误打误撞来到被亡命徒威胁的淘金小镇,成了众人眼中最恐怖的枪侠。",
    "tags": [
      "反类型西部",
      "和平主义",
      "小镇",
      "语言障碍",
      "阴差阳错"
    ]
  },
  {
    "title": "我们俩",
    "url": "./movie-1692.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "法国,比利时",
    "type": "电影",
    "genre": "剧情,悬疑,同性",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "一对连体双胞胎在分离手术后各自生活,直到其中一人被杀,另一人却开始感受到不属于自己的复仇欲望。",
    "tags": [
      "双胞胎",
      "身份互换",
      "心理惊悚",
      "羁绊"
    ]
  },
  {
    "title": "女佣",
    "url": "./movie-1693.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "英国/美国",
    "type": "剧集",
    "genre": "剧情/悬疑/惊悚",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "一位沉默寡言的女佣在亿万富翁家中工作,她发现每位前任女佣都在离职后“意外死亡”了。",
    "tags": [
      "阶级差异",
      "雇主秘密",
      "心理博弈",
      "女性视角",
      "密室悬疑"
    ]
  },
  {
    "title": "古剑奇谭之厌火之乱",
    "url": "./movie-1694.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装,奇幻",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "襄铃为寻找身世之谜深入厌火国废墟,却意外唤醒上古火神,引发了人间与异界的战火。",
    "tags": [
      "游戏改编",
      "妖兽",
      "燃向",
      "特效大片",
      "冒险"
    ]
  },
  {
    "title": "节食与长寿",
    "url": "./movie-1695.html",
    "cover": "./45.jpg",
    "year": "2012",
    "region": "英国",
    "type": "纪录片/电影",
    "genre": "纪录片/科普",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "主持人迈克尔·莫斯利亲身实验,发现每月断食几天的老鼠比天天吃饱的同类寿命延长了40%。",
    "tags": [
      "轻断食",
      "抗衰老",
      "科学实验",
      "BBC地平线系列"
    ]
  },
  {
    "title": "续幻魔终结者",
    "url": "./movie-1696.html",
    "cover": "./46.jpg",
    "year": "2029",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚/动作",
    "category": "动作冒险",
    "rating": 8.1,
    "description": "当人类将死刑犯的意识上传至虚拟监狱,一个可以改写现实代码的“幻魔”病毒开始吞噬整个互联网。",
    "tags": [
      "赛博朋克",
      "意识上传",
      "数字恶魔",
      "时间循环"
    ]
  },
  {
    "title": "浪漫刺客",
    "url": "./movie-1697.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作,爱情,喜剧",
    "category": "综艺纪实",
    "rating": 9.3,
    "description": "顶级女杀手接到任务暗杀一个中年男人,却发现他是自己那个只会催房租的废柴房东。",
    "tags": [
      "杀手",
      "房东",
      "反差萌"
    ]
  },
  {
    "title": "兴风作浪3",
    "url": "./movie-1698.html",
    "cover": "./48.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "喜剧/爱情",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "一对已经离婚五年的欢喜冤家,为了争夺同一个相亲对象,被迫再次住到同一屋檐下。",
    "tags": [
      "东北",
      "离婚",
      "夫妻",
      "搞笑",
      "再追爱"
    ]
  },
  {
    "title": "美国骗局",
    "url": "./movie-1699.html",
    "cover": "./49.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/犯罪/悬疑",
    "category": "国产热映",
    "rating": 9.6,
    "description": "一个骗术大师和一个性感搭档被FBI强迫钓鱼执法,结果把局长、市长甚至黑帮全给骗了。",
    "tags": [
      "真实事件改编",
      "诈骗",
      "卧底",
      "FBI",
      "七十年代复古"
    ]
  },
  {
    "title": "赛车遇险记",
    "url": "./movie-1700.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作/悬疑",
    "category": "家庭青春",
    "rating": 8.4,
    "description": "卧底赛车手发现自己的刹车线被切断,而幕后黑手就在观众席上。",
    "tags": [
      "赛车",
      "犯罪",
      "卧底"
    ]
  },
  {
    "title": "古墓奇谭2穿越死亡海",
    "url": "./movie-1701.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/冒险/奇幻",
    "category": "最新推荐",
    "rating": 8.2,
    "description": "为了寻找能逆转生死的“海皇泪”,探险队闯入沙漠下的死亡之海,却唤醒了沉睡的远古海族。",
    "tags": [
      "盗墓",
      "秘境",
      "机关",
      "动作",
      "视觉大片"
    ]
  },
  {
    "title": "韦泽",
    "url": "./movie-1702.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记,音乐,剧情",
    "category": "喜剧爱情",
    "rating": 9.8,
    "description": "讲述了美国另类摇滚乐队Weezer在录制他们那张毁誉参半的《Raditude》专辑时陷入集体精神崩溃。",
    "tags": [
      "摇滚",
      "乐队",
      "创作"
    ]
  },
  {
    "title": "地窖藏恶",
    "url": "./movie-1703.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖,惊悚",
    "category": "最新推荐",
    "rating": 9.6,
    "description": "女儿翻修老宅地窖时发现一面人骨砌成的墙,而墙后面有呼吸声。",
    "tags": [
      "地下室",
      "家族秘密",
      "宗教",
      "超自然"
    ]
  },
  {
    "title": "阿修罗2016",
    "url": "./movie-1704.html",
    "cover": "./54.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画,奇幻,动作",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "在地狱般的乱世,吃人肉存活的少年“阿修罗”,遇到了第一个给予他善意的女孩。",
    "tags": [
      "国产动画",
      "神话",
      "暴力美学",
      "暗黑"
    ]
  },
  {
    "title": "安东与安东妮",
    "url": "./movie-1705.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情,文艺",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "一个失败的钢琴家和一个迷路的摄影师,在巴黎的一夜迷途中,用声音和影像交换了彼此的人生。",
    "tags": [
      "巴黎",
      "偶遇",
      "摄影",
      "蓝调",
      "慢生活"
    ]
  },
  {
    "title": "多情刀客无情刀短刀行",
    "url": "./movie-1706.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "武侠,动作,剧情",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "沉默的短刀客被卷入十二年前的江湖恩怨,发现仇人竟是自己失散的父亲。",
    "tags": [
      "江湖",
      "刀客",
      "宿命"
    ]
  },
  {
    "title": "波波鹿与飞天鼠",
    "url": "./movie-1707.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧,动画,冒险",
    "category": "国产热映",
    "rating": 8.4,
    "description": "一只自恋的鹿和一只焦虑的鼠意外获得飞行能力,必须赶在冬天到来前把会飞的秘密送回月亮。",
    "tags": [
      "经典重启",
      "搞笑搭档",
      "森林",
      "反派卖蠢",
      "合家欢"
    ]
  },
  {
    "title": "鸟姐妹的反差生活第二季",
    "url": "./movie-1708.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧、动画",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "乌鸦邦尼和麻雀克洛伊互换身体后,发现对方“摆烂”或“内卷”的生活同样糟糕。",
    "tags": [
      "都市",
      "姐妹情",
      "荒诞"
    ]
  },
  {
    "title": "小树的天空",
    "url": "./movie-1709.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画、家庭",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "城市雾霾中,一个总被关在家里的男孩发现,窗外的小树苗每晚都会变成通往“天空之城”的梯子。",
    "tags": [
      "环保",
      "成长",
      "治愈",
      "奇幻",
      "亲子"
    ]
  },
  {
    "title": "猛将娇娃",
    "url": "./movie-1710.html",
    "cover": "./60.jpg",
    "year": "2022",
    "region": "香港",
    "type": "电影",
    "genre": "动作,喜剧",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "前女子特警队成员为保护一名作天作地的富二代千金,被卷入跨国绑架阴谋。",
    "tags": [
      "女子保镖",
      "富二代绑架案",
      "巷战打斗",
      "港式幽默"
    ]
  },
  {
    "title": "猫胆虫威大电影",
    "url": "./movie-1711.html",
    "cover": "./61.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画/喜剧",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "被开除的洛杉矶警猫与一只社恐甲虫组成临时搭档,阻止一只妄想炸毁狗粮厂的精神病蟑螂。",
    "tags": [
      "猫咪特工",
      "昆虫反派",
      "恶搞",
      "好莱坞嘲解",
      "萌宠"
    ]
  },
  {
    "title": "神探霹雳火",
    "url": "./movie-1712.html",
    "cover": "./62.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、犯罪、喜剧",
    "category": "国产热映",
    "rating": 9.6,
    "description": "火爆刑警与一个被误抓的飞车贼联手,用非法改装车追查跨国军火集团。",
    "tags": [
      "神探",
      "飙车",
      "乌龙",
      "双雄"
    ]
  },
  {
    "title": "重圆镜",
    "url": "./movie-1713.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,悬疑,奇幻",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "一面据说能粘合任何裂缝的古镜,让丧女的母亲回到了女儿自杀前的那一天,然而她发现无论怎么修补,镜子都会碎。",
    "tags": [
      "家庭创伤",
      "破碎记忆",
      "时间重置",
      "母女关系"
    ]
  },
  {
    "title": "白衣天使",
    "url": "./movie-1714.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "医疗纪实",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "除夕夜的急诊室,一个即将辞职的90后护士,必须在6小时内同时处理车祸、心梗和一场即将爆发的医闹。",
    "tags": [
      "护士群像",
      "医患关系",
      "职业信仰",
      "大爱无疆"
    ]
  },
  {
    "title": "危机中的年轻人",
    "url": "./movie-1715.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情/青春/社会",
    "category": "国产热映",
    "rating": 9.9,
    "description": "五个伦敦合租的90后,分别遭遇裁员、绝症、驱逐和意外怀孕,而他们的房东是AI。",
    "tags": [
      "Z世代",
      "生存压力",
      "合租",
      "黑色幽默",
      "阶层"
    ]
  },
  {
    "title": "十八个手印",
    "url": "./movie-1716.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/历史",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "揭开“改革开放”序幕的并非只有小岗村,还有另一个被历史尘封的故事。",
    "tags": [
      "小岗村",
      "包产到户",
      "集体记忆",
      "责任状"
    ]
  },
  {
    "title": "午餐之歌",
    "url": "./movie-1717.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情/美食/生活",
    "category": "亚洲精选",
    "rating": 9.4,
    "description": "每到午餐时间,神秘女店主就会根据当天心情为客人即兴创作一首打工人之歌。",
    "tags": [
      "治愈",
      "食堂",
      "单元剧",
      "人情冷暖"
    ]
  },
  {
    "title": "赌神秘笈之赌魔国语",
    "url": "./movie-1718.html",
    "cover": "./68.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作/赌片",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "赌魔传人重出江湖,却发现自己引以为傲的“特异功能”在新时代的数学概率面前变成了笑话。",
    "tags": [
      "港产片",
      "赌术",
      "无厘头",
      "反套路"
    ]
  },
  {
    "title": "环法自行车赛:逆风飞驰",
    "url": "./movie-1719.html",
    "cover": "./69.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "运动,剧情,励志",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "一对同样天才的兄弟,一个沦为替补给另一个当副将,在环法皇后赛段,他们必须决出谁才是主将。",
    "tags": [
      "自行车",
      "体育传记",
      "逆袭",
      "兄弟竞争"
    ]
  },
  {
    "title": "快乐就好",
    "url": "./movie-1720.html",
    "cover": "./70.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "一位患绝症的父亲,决定用余生最后三个月,教会他那个“不快乐”的儿子如何快乐地生活。",
    "tags": [
      "亲情",
      "和解",
      "生活流",
      "老年",
      "治愈"
    ]
  },
  {
    "title": "春困2021",
    "url": "./movie-1721.html",
    "cover": "./71.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,奇幻",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "一个在北京租房多年的“蚁族”,发现每次春困午睡都会进入别人的梦境。",
    "tags": [
      "城市",
      "孤独",
      "梦境",
      "北漂"
    ]
  },
  {
    "title": "我曾是罗丽娜·波比特",
    "url": "./movie-1722.html",
    "cover": "./72.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "真实犯罪剧情",
    "category": "国产热映",
    "rating": 9.6,
    "description": "1993年震惊全美的“断茎案”,在被小报妖魔化30年后,由罗丽娜本人亲述真相。",
    "tags": [
      "女性复仇",
      "真实事件改编",
      "庭审",
      "社会议题"
    ]
  },
  {
    "title": "失眠症",
    "url": "./movie-1723.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑心理",
    "category": "动作冒险",
    "rating": 9.6,
    "description": "她连续失眠30天后,在凌晨4点看到了另一个自己从床上坐起来。",
    "tags": [
      "失眠",
      "平行时空",
      "自我对抗",
      "精神分裂"
    ]
  },
  {
    "title": "黄叶舞青风",
    "url": "./movie-1724.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠,爱情,古装",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "一个冷血女杀手奉命刺杀一个浪子,却在朝夕相处中爱上了他,却发现他要杀的人正是她自己。",
    "tags": [
      "大漠",
      "杀手",
      "替身",
      "宿命感"
    ]
  },
  {
    "title": "剑王朝之孤山剑藏",
    "url": "./movie-1725.html",
    "cover": "./75.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "武侠,古装,动作",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "一张藏宝图重现江湖,引来七大派围攻孤山,而那个守墓的哑巴少年竟是当年的剑神之子。",
    "tags": [
      "江湖寻宝",
      "绝世剑法",
      "门派恩怨",
      "特效打斗"
    ]
  },
  {
    "title": "高架桥上的涂鸦",
    "url": "./movie-1726.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/青春",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "辍学的问题少年为了追求女孩开始在高架桥下涂鸦,却意外画出了整个城中村即将被遗忘的记忆。",
    "tags": [
      "街头艺术",
      "城中村",
      "父子隔阂"
    ]
  },
  {
    "title": "通识教育",
    "url": "./movie-1727.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/校园/悬疑",
    "category": "国产热映",
    "rating": 8.4,
    "description": "一所二本院校的“通识教育”必修课,七名学生先后发现了同一件事:授课教授的身份是假的。",
    "tags": [
      "大学",
      "选修课",
      "谎言",
      "学术黑幕",
      "群像"
    ]
  },
  {
    "title": "二百三高地",
    "url": "./movie-1728.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "战争/历史",
    "category": "综艺纪实",
    "rating": 8.2,
    "description": "一个命令,六万人冲锋,那片高地至今一下雨就会泛红。",
    "tags": [
      "日俄战争",
      "旅顺",
      "肉弹战术",
      "军国批判",
      "人性深渊"
    ]
  },
  {
    "title": "没人的孩子",
    "url": "./movie-1729.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "欧洲",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "六个孤儿被送到一座没有大人的岛上进行“独立训练”,却在第二天发现少了一个人,而所有人都说岛上始终只有五个。",
    "tags": [
      "孤岛",
      "神秘",
      "悬疑",
      "儿童"
    ]
  },
  {
    "title": "快乐圣诞",
    "url": "./movie-1730.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧、家庭、灾难",
    "category": "家庭青春",
    "rating": 9.4,
    "description": "一个家族圣诞聚餐上,所有人决定说出真心话,然后房子着火了。",
    "tags": [
      "圣诞闹剧",
      "亲戚大战",
      "黑色幽默"
    ]
  },
  {
    "title": "诺姆·麦克唐纳:毫无特别",
    "url": "./movie-1731.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影/纪录",
    "genre": "纪录片/传记/喜剧",
    "category": "喜剧爱情",
    "rating": 9.1,
    "description": "已故喜剧大师诺姆·麦克唐纳的最后一场未公开演出,以及他私下对“搞笑”的拆解与反思。",
    "tags": [
      "脱口秀",
      "幕后",
      "遗作"
    ]
  },
  {
    "title": "杜宾巡官:布列塔尼的秘密",
    "url": "./movie-1732.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "法国,比利时",
    "type": "电影",
    "genre": "犯罪,悬疑,剧情",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "杜宾巡官退休后隐居布列塔尼小镇,一具30年前的骸骨在潮汐中浮出,牵扯出当地望族的血腥发家史。",
    "tags": [
      "侦探",
      "小镇疑云",
      "家族秘密",
      "法式风情"
    ]
  },
  {
    "title": "南京1937",
    "url": "./movie-1733.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "历史/战争/剧情",
    "category": "亚洲精选",
    "rating": 8.6,
    "description": "一个日本随军摄影师镜头下的南京,和他良知觉醒的六周。",
    "tags": [
      "抗战",
      "人性",
      "纪实风格",
      "群像"
    ]
  },
  {
    "title": "花开有晴天",
    "url": "./movie-1734.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情/都市",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "植物学女博士与天敌对家公司的景观设计师,在竞争市政公园项目时,发现了对方就是自己网恋七年的“树洞”。",
    "tags": [
      "双向暗恋",
      "青梅竹马",
      "治愈",
      "职场",
      "甜宠"
    ]
  },
  {
    "title": "新的肌肤",
    "url": "./movie-1735.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "科幻伦理惊悚",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "一种能治愈一切疤痕的人造皮肤上市,但换过“新肌肤”的人,开始忘记自己是谁。",
    "tags": [
      "人造皮肤",
      "身体改造",
      "身份认同",
      "科技伦理",
      "赛博格"
    ]
  },
  {
    "title": "中国的战争",
    "url": "./movie-1736.html",
    "cover": "./86.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争史诗",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "明末一支三千人的杂牌军,面对八万铁骑,他们唯一的武器是家乡的一捧黄土。",
    "tags": [
      "古代战争",
      "家国情怀",
      "冷兵器",
      "大场面"
    ]
  },
  {
    "title": "冒牌死党",
    "url": "./movie-1737.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧悬疑",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "落魄演员被黑帮雇去假扮富豪的替身,结果富豪真死了,他只能继续演下去,还要骗过所有人。",
    "tags": [
      "替身",
      "黑帮",
      "假扮",
      "乌龙",
      "兄弟情"
    ]
  },
  {
    "title": "醉侠张三",
    "url": "./movie-1738.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠/喜剧",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "沉迷酿酒的落魄武馆后人张三,用一门“醉酒鉴毒”的绝活,卷入京城投毒大案。",
    "tags": [
      "醉拳",
      "市井侠客",
      "酒馆",
      "身份错位"
    ]
  },
  {
    "title": "决战犹马镇",
    "url": "./movie-1739.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "西部/动作",
    "category": "动作冒险",
    "rating": 8.7,
    "description": "一名残疾南北战争老兵为筹钱给孩子治病,接下押送大盗头目到犹马镇监狱的任务,走三天三夜的死亡之路。",
    "tags": [
      "赏金猎人",
      "法外之徒",
      "铁路时代",
      "父子传承"
    ]
  },
  {
    "title": "2015大明星小跟班",
    "url": "./movie-1740.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/剧情/青春",
    "category": "亚洲精选",
    "rating": 8.5,
    "description": "2015年,一个高中生为了帮暗恋的女生要签名,混进巨星巡演团队当助理,却把自己活成了偶像。",
    "tags": [
      "娱乐圈",
      "追星",
      "成长",
      "公路片"
    ]
  },
  {
    "title": "爱的预感",
    "url": "./movie-1741.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情,奇幻,文艺",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "女孩在书店翻开一本旧小说,发现里面的男女主角,预言了她和明天将遇见的陌生人的全部对话。",
    "tags": [
      "时间循环",
      "命中注定",
      "巴黎",
      "唯美"
    ]
  },
  {
    "title": "走过冬季",
    "url": "./movie-1742.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情,治愈,音乐",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "失聪的天才钢琴家与失明的雪场救生员,在北海道的漫长冬季里,成为彼此的耳朵和眼睛。",
    "tags": [
      "钢琴家",
      "失聪",
      "北海道",
      "雪",
      "双向救赎"
    ]
  },
  {
    "title": "风流情孽",
    "url": "./movie-1743.html",
    "cover": "./93.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情/爱情/年代",
    "category": "国产热映",
    "rating": 8.5,
    "description": "富家千金为爱私奔,十年后携子归来,却发现昔日情郎已娶了自己的亲妹妹。",
    "tags": [
      "豪门",
      "恩怨",
      "三角恋",
      "复仇",
      "商战"
    ]
  },
  {
    "title": "最后一次自由",
    "url": "./movie-1744.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "法国/德国",
    "type": "电影",
    "genre": "剧情",
    "category": "剧情故事",
    "rating": 9.1,
    "description": "服刑二十五年的重刑犯获准假释一天,他唯一的愿望是带从未见过大海的儿子去看一次海。",
    "tags": [
      "监狱",
      "假释",
      "父子情"
    ]
  },
  {
    "title": "没有家乡的人",
    "url": "./movie-1745.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情,家庭,社会",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "一辆报废的厢型车,一对十年未见的父女,一场没有地图的环岛流浪。",
    "tags": [
      "流浪",
      "身份认同",
      "父女关系",
      "公路",
      "治愈"
    ]
  },
  {
    "title": "针孔旅社",
    "url": "./movie-1746.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖,悬疑,犯罪",
    "category": "动画奇幻",
    "rating": 8.7,
    "description": "一对情侣住进郊外便宜旅馆,无意中发现墙上的“针孔”不仅能看向隔壁,隔壁的“针孔”也在看向他们。",
    "tags": [
      "偷窥",
      "密室",
      "反转"
    ]
  },
  {
    "title": "恐怖异俗秀",
    "url": "./movie-1747.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,悬疑",
    "category": "欧美电影",
    "rating": 8.3,
    "description": "1932年,一群记者探访一个废弃的畸形秀马戏团,却发现所有“怪物”的标本都在夜里活了过来。",
    "tags": [
      "畸形秀",
      "马戏团",
      "超自然",
      "复古恐怖"
    ]
  },
  {
    "title": "恋爱的正确标记法",
    "url": "./movie-1748.html",
    "cover": "./98.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "category": "港台佳片",
    "rating": 9.5,
    "description": "数据女分析师用算法恋爱屡战屡败,直到遇见一个完全无法被公式计算的男人。",
    "tags": [
      "都市",
      "职场",
      "反套路",
      "女性"
    ]
  },
  {
    "title": "我想和你唱第三季",
    "url": "./movie-1749.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐,真人秀,互动",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "素人与巨星隔空对唱,但这一季,AI 虚拟歌手也来抢麦了。",
    "tags": [
      "星素结合",
      "合唱",
      "治愈",
      "互联网"
    ]
  },
  {
    "title": "超时空大冒险2018",
    "url": "./movie-1750.html",
    "cover": "./100.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/科幻/动作",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "废柴青年为追女神误入时空裂缝,却把自己老爸变成了情敌。",
    "tags": [
      "穿越",
      "平行时空",
      "港式无厘头",
      "宿命",
      "蝴蝶效应"
    ]
  },
  {
    "title": "珍珠",
    "url": "./movie-1751.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "国产热映",
    "rating": 9.0,
    "description": "失去独子的老妇人独自在海边养殖珍珠,直到一个自称是儿子“赛博替身”的AI机器人出现。",
    "tags": [
      "失独",
      "珍珠养殖",
      "老人",
      "代际隔阂",
      "海难"
    ]
  },
  {
    "title": "生死桥",
    "url": "./movie-1752.html",
    "cover": "./102.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "综艺纪实",
    "rating": 9.0,
    "description": "一座连接阴阳的断桥,两代人的生死救赎,只有午夜才能看见彼此。",
    "tags": [
      "断桥传说",
      "阴阳两界",
      "因果轮回"
    ]
  },
  {
    "title": "中餐厅第八季",
    "url": "./movie-1753.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "genre": "真人秀,美食",
    "category": "国产热映",
    "rating": 8.6,
    "description": "本季中餐厅开在战火纷飞的边界,明星们不仅要面对挑剔的食客,还要应对随时响起的防空警报。",
    "tags": [
      "经营",
      "争议",
      "慢综艺"
    ]
  },
  {
    "title": "狂舞纽约",
    "url": "./movie-1754.html",
    "cover": "./104.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞,爱情",
    "category": "国产热映",
    "rating": 8.0,
    "description": "从布朗克斯到百老汇,几个不同肤色的街头舞者想用舞蹈征服纽约,却先被房租征服了。",
    "tags": [
      "街舞",
      "梦想",
      "移民",
      "百老汇"
    ]
  },
  {
    "title": "尖东老泥妹之四大天后",
    "url": "./movie-1755.html",
    "cover": "./105.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,犯罪",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "四个在尖东街头流浪的年轻女孩,为了生存和尊严,在黑暗的午夜江湖中结为姐妹,掀起一场血雨腥风。",
    "tags": [
      "古惑仔",
      "女性",
      "底层",
      "江湖"
    ]
  },
  {
    "title": "骷髅舞",
    "url": "./movie-1756.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "墨西哥",
    "type": "电影",
    "genre": "动画、冒险、音乐",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "一个活人小男孩误入亡灵世界,被永恒的“骷髅舞会”困住,只有在天亮前教会一具骷髅跳“机械舞”才能回家。",
    "tags": [
      "亡灵节",
      "歌舞",
      "寻根",
      "剪纸风动画",
      "治愈系"
    ]
  },
  {
    "title": "渔家乐",
    "url": "./movie-1757.html",
    "cover": "./107.jpg",
    "year": "1964",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/歌舞",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "船家女阿娇为了逃避土豪逼婚,谎称自己怀了城里富二代的孩子,结果对方真的找上了门。",
    "tags": [
      "邵氏",
      "水上人家",
      "爱情喜剧"
    ]
  },
  {
    "title": "大决战之辽沈战役",
    "url": "./movie-1758.html",
    "cover": "./108.jpg",
    "year": "1991",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史/战争",
    "category": "悬疑惊悚",
    "rating": 9.7,
    "description": "林彪纠结攻打锦州时,一个炊事员送来的土豆让他下定了决心。",
    "tags": [
      "解放战争",
      "宏大叙事",
      "经典重映"
    ]
  },
  {
    "title": "阳光咖啡厅之新友纪",
    "url": "./movie-1759.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情,奇幻",
    "category": "动画奇幻",
    "rating": 8.8,
    "description": "一位失忆少女声称自己来自2046年,并说咖啡厅老板是未来拯救世界的英雄。",
    "tags": [
      "穿越",
      "友情",
      "治愈"
    ]
  },
  {
    "title": "千门女王之黄雀在后",
    "url": "./movie-1760.html",
    "cover": "./110.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "千门女掌门设局猎杀杀父仇人,却不知自己才是局中的那只蝉。",
    "tags": [
      "老千",
      "赌局",
      "反杀",
      "设局",
      "女性"
    ]
  },
  {
    "title": "插翅难飞2025",
    "url": "./movie-1761.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚,犯罪",
    "category": "悬疑惊悚",
    "rating": 8.2,
    "description": "一架飞往纽约的客机上,空警发现乘客里混入了多名杀手,而他们的目标竟是无辜的邻座女孩。",
    "tags": [
      "劫机",
      "密闭空间",
      "特工",
      "反转"
    ]
  },
  {
    "title": "悟空大战二郎神",
    "url": "./movie-1762.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影/动画",
    "genre": "动作/奇幻/动画",
    "category": "国产热映",
    "rating": 9.9,
    "description": "当紧箍咒即将永远锁死他的命运,悟空必须在七十二变耗尽前击败天眼全开的二郎神,否则将被永远贬为凡石。",
    "tags": [
      "神话改编",
      "国风美学",
      "斗法",
      "视觉奇观"
    ]
  },
  {
    "title": "家有魔犬",
    "url": "./movie-1763.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "奇幻喜剧",
    "category": "欧美电影",
    "rating": 9.6,
    "description": "小学生的金毛犬突然开口说话,而且自称是来自魔法王国的落难王子。",
    "tags": [
      "狗",
      "魔法",
      "家庭",
      "变身",
      "治愈"
    ]
  },
  {
    "title": "嘿!客栈",
    "url": "./movie-1764.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧/情景",
    "category": "最新推荐",
    "rating": 9.3,
    "description": "云南一家网红客栈里,倒霉老板和奇葩客人的日常,每一集都有人想拆了这房子。",
    "tags": [
      "民宿",
      "搞笑",
      "单元剧"
    ]
  },
  {
    "title": "海虎突击战",
    "url": "./movie-1765.html",
    "cover": "./115.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,战争",
    "category": "悬疑惊悚",
    "rating": 8.4,
    "description": "最精锐的海军陆战队小队,在一场无预案生死演习中撞上了真正的恐怖分子。",
    "tags": [
      "海军陆战队",
      "反恐演习",
      "兄弟情",
      "实战化训练"
    ]
  },
  {
    "title": "乐高侏罗纪世界:秘密展览",
    "url": "./movie-1766.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画,冒险",
    "category": "国产热映",
    "rating": 8.6,
    "description": "乐高版的侏罗纪公园里,四只迷你恐龙被发现能说话,它们要阻止一场克隆阴谋。",
    "tags": [
      "乐高",
      "恐龙",
      "搞笑",
      "合家欢"
    ]
  },
  {
    "title": "家庭录像",
    "url": "./movie-1767.html",
    "cover": "./117.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/伪纪录片",
    "category": "家庭青春",
    "rating": 8.1,
    "description": "男子整理父亲遗物时翻出一堆家庭录像带,发现镜头里的“家人”每隔几年就会换一批人。",
    "tags": [
      "录像带",
      "邪教",
      "家庭秘密"
    ]
  },
  {
    "title": "龙之后",
    "url": "./movie-1768.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装/奇幻/权谋",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "最后一条龙化为人形嫁入皇宫,却意外发现皇帝正是千年前屠龙勇士的转世。",
    "tags": [
      "大女主",
      "龙族",
      "宫廷"
    ]
  },
  {
    "title": "女隐士",
    "url": "./movie-1769.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "隐居山林十年的女人开直播讲述孤独生活,网友却发现她身后镜子里映出两具尸体。",
    "tags": [
      "山林隐居",
      "网络直播",
      "身份反转"
    ]
  },
  {
    "title": "狂野目标",
    "url": "./movie-1770.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧/动作",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "一名有强迫症的顶级杀手被迫收下笨拙女徒弟,结果两人的目标竟是杀手的亲生父亲。",
    "tags": [
      "菜鸟杀手",
      "乌龙任务",
      "法式幽默",
      "师徒情"
    ]
  },
  {
    "title": "迅雷战警",
    "url": "./movie-1771.html",
    "cover": "./121.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作/科幻",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "一名能操控电磁场的退役特种兵,为了救出被绑架的女儿,必须与五个拥有相同超能力的克隆体死战。",
    "tags": [
      "超级英雄",
      "电磁超能力",
      "硬核格斗"
    ]
  },
  {
    "title": "刑侦笔记",
    "url": "./movie-1772.html",
    "cover": "./122.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑,犯罪",
    "category": "国产热映",
    "rating": 9.0,
    "description": "一本尘封的刑警笔记连接起跨越十五年的连环命案,新人刑警发现,她搭档的左手似乎藏着一个秘密。",
    "tags": [
      "单元剧",
      "本格推理",
      "搭档",
      "都市传说"
    ]
  },
  {
    "title": "筋疲力尽",
    "url": "./movie-1773.html",
    "cover": "./123.jpg",
    "year": "1960",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "港台佳片",
    "rating": 8.1,
    "description": "一个偷车杀人的混混和只想做记者的美国女孩,在巴黎街头耗尽彼此最后一点力气。",
    "tags": [
      "新浪潮",
      "存在主义",
      "逃亡",
      "爱情幻灭",
      "跳切"
    ]
  },
  {
    "title": "洋基的骄傲",
    "url": "./movie-1774.html",
    "cover": "./124.jpg",
    "year": "1942",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/传记/运动",
    "category": "欧美电影",
    "rating": 8.0,
    "description": "传奇棒球手卢·贾里格在罹患绝症后,用一场感人至深的告别演说定义了“最幸运的人”。",
    "tags": [
      "棒球",
      "传奇",
      "疾病",
      "家庭"
    ]
  },
  {
    "title": "遥远的爱",
    "url": "./movie-1775.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "欧美电影",
    "rating": 9.9,
    "description": "一位孟买的富家千金与一位克什米尔的乡村教师通过错寄的一封信,开始了长达十年的柏拉图之恋。",
    "tags": [
      "跨阶级恋爱",
      "乡村教师",
      "城市化",
      "书信"
    ]
  },
  {
    "title": "甘达琳娜",
    "url": "./movie-1776.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "文艺剧情",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "西西里黑手党首领的妻子甘达琳娜,在丈夫被杀后,用三十天时间清理他的“遗产”与人情债。",
    "tags": [
      "西西里",
      "女性觉醒",
      "黑手党",
      "诗意"
    ]
  },
  {
    "title": "舞伶艳史",
    "url": "./movie-1777.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/传记",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "她靠大腿征服了巴黎,却始终无法让那个看客离开座位。",
    "tags": [
      "红磨坊",
      "康康舞",
      "女性独立",
      "美学盛宴"
    ]
  },
  {
    "title": "坂本龙一:终曲",
    "url": "./movie-1778.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "纪录片,音乐",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "记录了音乐大师坂本龙一生命最后三年与癌症共存,并如何创作出“人生终曲”的私密影像。",
    "tags": [
      "传记",
      "艺术",
      "绝唱"
    ]
  },
  {
    "title": "蛇之道 2024",
    "url": "./movie-1779.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪/剧情/悬疑",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "一名退休黑道律师在整理旧案时发现,他年轻时亲手送进监狱的杀人犯可能是被冤枉的,而真凶是他现在的老板。",
    "tags": [
      "黑帮",
      "复仇",
      "道德模糊",
      "社会派"
    ]
  },
  {
    "title": "直男正传",
    "url": "./movie-1780.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,喜剧",
    "category": "亚洲精选",
    "rating": 8.4,
    "description": "钢铁直男程序员意外获得“共情超能力”,被迫重学做人。",
    "tags": [
      "性别议题",
      "成长",
      "黑色幽默"
    ]
  },
  {
    "title": "失落的宝藏",
    "url": "./movie-1781.html",
    "cover": "./131.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "冒险/悬疑/动作",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "一张羊皮卷引出三代人的寻宝执念,而终点指向白宫地下室。",
    "tags": [
      "寻宝",
      "历史",
      "家族",
      "谜题"
    ]
  },
  {
    "title": "杨光的快乐生活2",
    "url": "./movie-1782.html",
    "cover": "./132.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/家庭",
    "category": "欧美电影",
    "rating": 8.8,
    "description": "天津老少爷们杨光继续他的倒霉又幸福的生活,这次他要帮邻居追回被“大师”骗走的养老钱。",
    "tags": [
      "天津",
      "市井生活",
      "幽默"
    ]
  },
  {
    "title": "北京杂种",
    "url": "./movie-1783.html",
    "cover": "./133.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/黑色幽默",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "六个在北京挣扎的北漂因为一张中了五百万的彩票产生交集,最后发现彩票是假的。",
    "tags": [
      "京味对白",
      "底层群像",
      "多线叙事"
    ]
  },
  {
    "title": "逆著风的旅行",
    "url": "./movie-1784.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭,公路",
    "category": "动画奇幻",
    "rating": 9.1,
    "description": "叛逆少年带着父亲的骨灰骑单车环岛,只为完成一场迟到的告别。",
    "tags": [
      "单车环岛",
      "父子",
      "和解",
      "遗愿清单"
    ]
  },
  {
    "title": "碎玉溅飞花",
    "url": "./movie-1785.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "武侠,悬疑",
    "category": "亚洲精选",
    "rating": 9.0,
    "description": "江南第一玉匠被杀,尸体化作玉石,而凶器是水。",
    "tags": [
      "古装",
      "连环杀人",
      "女性"
    ]
  },
  {
    "title": "水浒英雄传粤语",
    "url": "./movie-1786.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装,历史",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "用最地道的粤语俚语,重新演绎一百单八将从聚义厅到招安的悲壮史诗。",
    "tags": [
      "经典翻拍",
      "兄弟情",
      "打斗"
    ]
  },
  {
    "title": "动物狂想曲第二季",
    "url": "./movie-1787.html",
    "cover": "./137.jpg",
    "year": "2021",
    "region": "日本",
    "type": "动画",
    "genre": "剧情/悬疑/奇幻",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "校园里再次发生食杀案,大灰狼雷格西被迫面对自己的本能与一个更加黑暗的真相。",
    "tags": [
      "拟人",
      "食杀事件",
      "社会隐喻",
      "青春",
      "黑暗"
    ]
  },
  {
    "title": "圣保罗砲艇",
    "url": "./movie-1788.html",
    "cover": "./138.jpg",
    "year": "2027",
    "region": "美国/巴西",
    "type": "电影",
    "genre": "动作/战争/冒险",
    "category": "喜剧爱情",
    "rating": 8.3,
    "description": "1920年代,一艘美国内河炮艇被派往亚马逊雨林“保护侨民”,却发现自己成了当地橡胶大亨镇压土著的血腥帮凶。",
    "tags": [
      "亚马逊",
      "炮艇外交",
      "丛林战",
      "道德困境"
    ]
  },
  {
    "title": "蓝色世界:终结水危机",
    "url": "./movie-1789.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/惊悚",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "在最后一滴干净水被垄断的未来,一个水文黑客决定引爆云端数据塔,释放被锁住的大雨。",
    "tags": [
      "水资源",
      "未来世界",
      "反乌托邦",
      "黑客",
      "生态恐怖"
    ]
  },
  {
    "title": "夏湾拿艳舞",
    "url": "./movie-1790.html",
    "cover": "./140.jpg",
    "year": "2021",
    "region": "古巴,西班牙",
    "type": "电影",
    "genre": "剧情,歌舞,历史",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "1958年哈瓦那最后一晚,一个华裔舞女在革命枪声与探戈鼓点中寻找失踪的母亲。",
    "tags": [
      "古巴革命",
      "夜总会",
      "母女",
      "记忆",
      "红色高跟鞋"
    ]
  },
  {
    "title": "重获光明之旅",
    "url": "./movie-1791.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "动画奇幻",
    "rating": 9.1,
    "description": "一场意外夺走她的双眼,一次母爱献出的移植手术,让她重见光明,却发现眼前的母亲已成陌生人。",
    "tags": [
      "温情",
      "治愈",
      "失明",
      "母爱",
      "重生"
    ]
  },
  {
    "title": "命转乾坤粤语",
    "url": "./movie-1792.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情,灵异,商战,家庭",
    "category": "喜剧爱情",
    "rating": 8.8,
    "description": "香港顶级富豪病危,风水师提出“换命”之法:找一个同年同月同日生的穷人代替他去死,而那个穷人是他失散多年的亲弟弟。",
    "tags": [
      "粤语原声",
      "风水",
      "换命",
      "豪门恩怨",
      "宿命"
    ]
  },
  {
    "title": "雨中的树",
    "url": "./movie-1793.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情",
    "category": "悬疑惊悚",
    "rating": 8.6,
    "description": "患有自闭症的女儿认为自己是雨林里的一棵树,父亲为了理解她,开始学习用树的视角去感受这个世界。",
    "tags": [
      "文艺",
      "父女",
      "成长",
      "自闭症",
      "自然"
    ]
  },
  {
    "title": "文森特必须死",
    "url": "./movie-1794.html",
    "cover": "./144.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "心理惊悚",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "杀手文森特每次心跳加速都会随机夺取方圆百米内一人的性命,直到他遇见了一个让他心脏狂跳的女人。",
    "tags": [
      "宿命",
      "通感",
      "杀手",
      "文艺"
    ]
  },
  {
    "title": "黛安娜的婚礼",
    "url": "./movie-1795.html",
    "cover": "./145.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧,爱情,家庭",
    "category": "家庭青春",
    "rating": 9.8,
    "description": "准新娘黛安娜在婚礼当天发现,自己的三位前男友都是宾客,而教堂的钟竟然被卡住了。",
    "tags": [
      "法式幽默",
      "婚礼灾难",
      "家族和解",
      "乌龙"
    ]
  },
  {
    "title": "雌雄斗智",
    "url": "./movie-1796.html",
    "cover": "./146.jpg",
    "year": "1995",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/犯罪",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "国际刑警组织最年轻的女探员,与从未失手的天才艺术品大盗,从追踪、交手到设局,他们都想成为赢家。",
    "tags": [
      "高智商",
      "猫鼠游戏",
      "浪漫",
      "反转",
      "经典"
    ]
  },
  {
    "title": "喜剧之王粤语",
    "url": "./movie-1797.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "国产热映",
    "rating": 9.3,
    "description": "跑龙套二十年的阿福被误认为黑帮谈判专家,在枪口下即兴演出一场《赌神》续集。",
    "tags": [
      "粤语原声",
      "草根逆袭",
      "片场风云",
      "黑色幽默"
    ]
  },
  {
    "title": "白宫隐秘",
    "url": "./movie-1798.html",
    "cover": "./148.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑/政治惊悚",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "白宫实习生偶然发现地下深处藏有一间从未被记载的密室,里面记录了历任总统的致命秘密。",
    "tags": [
      "地堡密室",
      "总统秘密",
      "特工谜局"
    ]
  },
  {
    "title": "我的宝藏",
    "url": "./movie-1799.html",
    "cover": "./149.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情,家庭",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "奶奶去世后,孙子在阁楼发现一个铁盒,里面装满了他小时候弄丢的“破烂”,也装着奶奶从未说出口的爱。",
    "tags": [
      "亲情",
      "代际关系",
      "怀旧",
      "治愈",
      "留守"
    ]
  },
  {
    "title": "父后七日",
    "url": "./movie-1800.html",
    "cover": "./150.jpg",
    "year": "2010",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "剧情故事",
    "rating": 9.0,
    "description": "父亲去世后的七天里,女儿一边按乡下习俗办丧事,一边发现父亲生前藏了无数秘密。",
    "tags": [
      "丧葬",
      "亲情",
      "黑色幽默",
      "散文改编"
    ]
  },
  {
    "title": "蜜月重温",
    "url": "./movie-1801.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "剧情故事",
    "rating": 8.1,
    "description": "结婚二十五年的沉闷夫妇,决定重走蜜月路线,却发现当年浪漫的每一站现在都变成了奇葩景点。 为了挽救离婚危机,一对英国夫妇重新踏上了25年前的意大利蜜月之旅,却发现当年的豪华酒店变成了垃圾场,浪漫游船变成了海盗体验馆。",
    "tags": [
      "中年危机",
      "婚姻",
      "喜剧",
      "公路电影",
      "老夫老妻"
    ]
  },
  {
    "title": "杀手的童话",
    "url": "./movie-1802.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "动作/爱情/黑色幽默",
    "category": "国产热映",
    "rating": 9.8,
    "description": "顶级女杀手为了执行任务被迫与业务能力超差的废柴男假结婚,却发现对方是警方派来的卧底。",
    "tags": [
      "杀手",
      "假结婚",
      "日常",
      "治愈",
      "反转"
    ]
  },
  {
    "title": "黑执事第三季",
    "url": "./movie-1803.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑/奇幻/犯罪",
    "category": "亚洲精选",
    "rating": 9.5,
    "description": "夏尔与塞巴斯蒂安潜入神秘马戏团,发现团员竟是多年前失踪案的全体受害者。",
    "tags": [
      "马戏团",
      "复仇",
      "契约",
      "黑暗美学",
      "维多利亚"
    ]
  },
  {
    "title": "只为再次遇到你",
    "url": "./movie-1804.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/奇幻/剧情",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "便利店夜班店员每天都会遇到同一个女孩,但每晚12点,女孩都会忘记他。",
    "tags": [
      "重生",
      "便利店",
      "纯爱",
      "时间循环",
      "催泪"
    ]
  },
  {
    "title": "掀起我的爱",
    "url": "./movie-1805.html",
    "cover": "./5.jpg",
    "year": "2022",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情,同性,青春",
    "category": "剧情故事",
    "rating": 8.7,
    "description": "重度社恐女孩通过网络爱上了声音主播,见面后发现对方是学校最讨厌的“交际花”。",
    "tags": [
      "网恋奔现",
      "社恐",
      "耳机",
      "甜虐"
    ]
  },
  {
    "title": "做头",
    "url": "./movie-1806.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑,惊悚",
    "category": "综艺纪实",
    "rating": 8.7,
    "description": "顶级理发师阿鬼的规矩是“不问客人来历”,直到今晚最后一位客人,要他剪掉一桩命案。",
    "tags": [
      "理发师",
      "密室",
      "心理战"
    ]
  },
  {
    "title": "残破的娃娃",
    "url": "./movie-1807.html",
    "cover": "./7.jpg",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖,心理惊悚",
    "category": "动画奇幻",
    "rating": 9.5,
    "description": "一名玩偶修复师接了一单生意:修复一个被烧焦的娃娃,之后她家中所有娃娃开始自己移动。",
    "tags": [
      "玩偶",
      "创伤",
      "童年阴影",
      "超自然"
    ]
  },
  {
    "title": "杰作剧场",
    "url": "./movie-1808.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情/悬疑",
    "category": "动作冒险",
    "rating": 8.0,
    "description": "一家濒临倒闭的老牌伦敦剧场,在排演最后一出戏《无人生还》时,演员真的开始一个接一个按照剧本中的方式死去。",
    "tags": [
      "剧场命案",
      "戏中戏",
      "元叙事",
      "英伦推理"
    ]
  },
  {
    "title": "撞翻姻缘路",
    "url": "./movie-1809.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧/爱情/公路",
    "category": "悬疑惊悚",
    "rating": 9.8,
    "description": "逃婚新娘和赶场新郎的车相撞,被迫共享一辆破车,在去往各自婚礼的路上闹尽笑话。",
    "tags": [
      "车祸",
      "逃婚",
      "欢喜冤家",
      "东南亚",
      "乌龙"
    ]
  },
  {
    "title": "走过爱的荒蛮",
    "url": "./movie-1810.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "美国/英国",
    "type": "电影",
    "genre": "爱情,冒险",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "即将离婚的夫妻在签署协议前夜遭遇空难,必须携手徒步穿越无人区才能活命。",
    "tags": [
      "公路电影",
      "婚姻危机",
      "荒野求生"
    ]
  },
  {
    "title": "最佳拍档2",
    "url": "./movie-1811.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧/动作",
    "category": "综艺纪实",
    "rating": 9.2,
    "description": "神偷光头佬和警察金刚退休十年后重出江湖,一个老年痴呆,一个风湿腿瘸,却要联手偷回被黑客盗走的全城社保数据。",
    "tags": [
      "拍档",
      "搞笑",
      "警匪",
      "怀旧",
      "双雄"
    ]
  },
  {
    "title": "有意求凰",
    "url": "./movie-1812.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,古装,喜剧",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "京城第一才女为拒绝太子逼婚,主动替嫁给传闻中暴戾的废柴王爷,却发现自己才是那个“扮猪吃老虎”的人。",
    "tags": [
      "龙凤配",
      "替嫁",
      "女强",
      "扮猪吃虎"
    ]
  },
  {
    "title": "笨人寻春",
    "url": "./movie-1813.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺,公路",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "一个智商只有65的青年,收到一封来自“春天”的信,他决定独自一人去找回20年前离开的父亲。",
    "tags": [
      "寻父",
      "乡村",
      "成长"
    ]
  },
  {
    "title": "嫌疑人之长夜将尽",
    "url": "./movie-1814.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪,剧情",
    "category": "剧情故事",
    "rating": 8.3,
    "description": "一具埋藏十五年的骸骨被发现,镇上四个互不相识的人都跑来自首说是凶手。",
    "tags": [
      "连环杀人案",
      "心理侧写",
      "小镇迷雾",
      "多重反转",
      "社会派"
    ]
  },
  {
    "title": "历物语",
    "url": "./movie-1815.html",
    "cover": "./15.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集 动画/奇幻",
    "genre": "动画/奇幻",
    "category": "综艺纪实",
    "rating": 9.7,
    "description": "每个学校怪谈背后都藏着一段被遗忘的真挚感情。",
    "tags": [
      "怪谈",
      "青春",
      "轮回",
      "单元剧"
    ]
  },
  {
    "title": "玛丽亚的情人",
    "url": "./movie-1816.html",
    "cover": "./16.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "二战结束后,从集中营幸存的玛丽亚回到家乡,却发现未婚夫已与自己的妹妹结婚生子。",
    "tags": [
      "二战",
      "战后创伤",
      "畸恋",
      "救赎"
    ]
  },
  {
    "title": "奇妙仙子",
    "url": "./movie-1817.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,家庭,动画",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "森林深处真的住着仙子,但只有身患绝症的小女孩能看见——因为她只剩三个月生命。",
    "tags": [
      "仙子",
      "环保",
      "小女孩",
      "治愈",
      "童话"
    ]
  },
  {
    "title": "加斯帕24小时",
    "url": "./movie-1818.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚,科幻",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "男子醒来被困陌生房间,一个声音告诉他:24小时内必须被杀死,否则世界将被重置。",
    "tags": [
      "密室",
      "倒计时",
      "意识上传"
    ]
  },
  {
    "title": "爱情万万岁",
    "url": "./movie-1819.html",
    "cover": "./19.jpg",
    "year": "2011",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情/家庭",
    "category": "动作冒险",
    "rating": 9.4,
    "description": "六十岁的花店老板娘和七十岁的退休老校长,在子女的反对下谈起了黄昏恋。",
    "tags": [
      "中老年爱情",
      "离婚",
      "再婚",
      "长剧"
    ]
  },
  {
    "title": "烟硝中,我们狂欢",
    "url": "./movie-1820.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "乌克兰",
    "type": "电影",
    "genre": "剧情,战争",
    "category": "悬疑惊悚",
    "rating": 8.4,
    "description": "被围困的城市里,一群戏剧演员决定在废墟中上演一场给敌人看的荒诞喜剧。",
    "tags": [
      "战争",
      "艺术",
      "生存",
      "黑色幽默"
    ]
  },
  {
    "title": "职业女郎",
    "url": "./movie-1821.html",
    "cover": "./21.jpg",
    "year": "1997",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/女性",
    "category": "喜剧爱情",
    "rating": 9.4,
    "description": "两个大学时的密友,毕业后合租伦敦,一个想嫁人,一个想升职,最后都摔得很痛。",
    "tags": [
      "女性友谊",
      "90年代",
      "伦敦",
      "职场与情感"
    ]
  },
  {
    "title": "评论",
    "url": "./movie-1822.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚/社会",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "一个职业“黑粉”头子,在接到一笔抹杀一名网红的大单后,发现自己正被自己的评论追杀。",
    "tags": [
      "网络暴力",
      "水军",
      "键盘侠",
      "反噬",
      "密室"
    ]
  },
  {
    "title": "隔世追凶国语",
    "url": "./movie-1823.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "刑警通过一部老式对讲机与二十年前殉职的父亲同步办案,却发现两人追查的是同一宗连环命案。",
    "tags": [
      "刑侦",
      "穿越",
      "亲情",
      "双线叙事"
    ]
  },
  {
    "title": "冰之塔",
    "url": "./movie-1824.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻/冒险",
    "category": "剧情故事",
    "rating": 9.3,
    "description": "在冰封万物的世界里,一座直插云霄的神秘高塔突然放出热量,少女决定攀塔寻找失踪的父亲。",
    "tags": [
      "末日废土",
      "少女主角",
      "神秘组织",
      "塔防"
    ]
  },
  {
    "title": "歌剧红伶",
    "url": "./movie-1825.html",
    "cover": "./25.jpg",
    "year": "1981",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "惊悚/音乐",
    "category": "综艺纪实",
    "rating": 8.6,
    "description": "年轻女高音无意间录下一段黑帮谋杀现场的歌声,成为猎杀目标。",
    "tags": [
      "幕后黑手",
      "录音带阴谋",
      "巴黎歌剧院",
      "声乐"
    ]
  },
  {
    "title": "周六夜现场 中国版",
    "url": "./movie-1826.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集/综艺",
    "genre": "喜剧/真人秀",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "一档中国喜剧综艺的幕后,一群年轻卡司和编剧在每周六晚直播压力下,用才华与热忱创造笑点的爆笑与心酸故事。",
    "tags": [
      "喜剧",
      "直播",
      "幕后",
      "单元剧",
      "明星客串"
    ]
  },
  {
    "title": "悬崖上的金鱼公主",
    "url": "./movie-1827.html",
    "cover": "./27.jpg",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "genre": "动画,奇幻",
    "category": "悬疑惊悚",
    "rating": 8.7,
    "description": "五岁男孩宗介救下一只想变成人类的金鱼公主波妞,引发海啸与魔法大冒险。",
    "tags": [
      "宫崎骏",
      "海洋",
      "童真"
    ]
  },
  {
    "title": "日落之前爱上你",
    "url": "./movie-1828.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情,奇幻,青春",
    "category": "国产热映",
    "rating": 9.9,
    "description": "女主每到日落就会忘记当天的记忆,男主必须在每一次黄昏前让她重新爱上自己。",
    "tags": [
      "日落诅咒",
      "时光回溯",
      "纯爱催泪"
    ]
  },
  {
    "title": "白发",
    "url": "./movie-1829.html",
    "cover": "./29.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装奇幻",
    "category": "最新推荐",
    "rating": 8.0,
    "description": "一夜白头的皇后在敌国监牢中发现,逼她服毒的正是转世后失忆的挚爱君王。",
    "tags": [
      "虐恋",
      "白发",
      "王朝权谋",
      "转世"
    ]
  },
  {
    "title": "时间已过",
    "url": "./movie-1830.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻/悬疑/剧情",
    "category": "家庭青春",
    "rating": 9.4,
    "description": "全班同学都困在高考前一天的无限循环里,只有那个被霸凌的男生能带大家走出去。",
    "tags": [
      "时间循环",
      "高中",
      "救赎",
      "自我牺牲"
    ]
  },
  {
    "title": "青蛙的叫声",
    "url": "./movie-1831.html",
    "cover": "./31.jpg",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑/剧情",
    "category": "亚洲精选",
    "rating": 8.2,
    "description": "一个被欺凌的乡村少年,在雨季来临时听到的青蛙叫声里,藏着他失踪十年的哥哥的秘密。",
    "tags": [
      "小镇秘密",
      "童年阴影",
      "人性实验",
      "开放式结局"
    ]
  },
  {
    "title": "五尺神探",
    "url": "./movie-1832.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,悬疑,动作",
    "category": "剧情故事",
    "rating": 8.8,
    "description": "身高仅五尺的京城第一神探,因为太矮总能发现别人看不到的线索。",
    "tags": [
      "矮个子神探",
      "民国奇案",
      "冷面笑匠",
      "本格推理"
    ]
  },
  {
    "title": "催眠师",
    "url": "./movie-1833.html",
    "cover": "./33.jpg",
    "year": "2012",
    "region": "瑞典/挪威",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "一名心理医生被迫对重伤的少年杀人嫌犯实施催眠,却唤醒了自己家族的黑暗秘密。",
    "tags": [
      "北欧 noir",
      "催眠",
      "家族秘密",
      "心理创伤"
    ]
  },
  {
    "title": "人是你杀的",
    "url": "./movie-1834.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "一具尸体、三个嫌疑人、九段截然不同的证词,每个人都坚信:“人是你杀的”。",
    "tags": [
      "法庭",
      "罗生门",
      "真相"
    ]
  },
  {
    "title": "胆小别看",
    "url": "./movie-1835.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "一档深夜直播探险节目闯入废弃精神病院,却发现所有恐怖传说都是掩盖真相的陷阱。",
    "tags": [
      "心理恐怖",
      "密室",
      "反转",
      "都市传说",
      "直播"
    ]
  },
  {
    "title": "困兽之斗",
    "url": "./movie-1836.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作,惊悚",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "为救重病女儿,一名退役拳手被迫重返充满腐败与谎言的地下黑拳世界。",
    "tags": [
      "地下拳场",
      "绝地反击",
      "父女情"
    ]
  },
  {
    "title": "鹦鹉老妈",
    "url": "./movie-1837.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻,家庭",
    "category": "喜剧爱情",
    "rating": 9.2,
    "description": "控制欲极强的老妈意外魂穿到宠物鹦鹉身上,只能天天听女儿吐槽自己。",
    "tags": [
      "变身",
      "母女",
      "治愈",
      "会说话"
    ]
  },
  {
    "title": "牙医的秘密生活",
    "url": "./movie-1838.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情/悬疑",
    "category": "最新推荐",
    "rating": 9.0,
    "description": "英格兰小镇上口碑最好的牙医,每晚都会开车去三百公里外,用同一把牙钻杀人。",
    "tags": [
      "行业黑幕",
      "小镇谜团",
      "双面人生"
    ]
  },
  {
    "title": "猎恶游戏国语",
    "url": "./movie-1839.html",
    "cover": "./39.jpg",
    "year": "2021",
    "region": "中国大陆/韩国",
    "type": "剧集",
    "genre": "悬疑/犯罪/动作",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "一场暗网直播的“猎恶游戏”,将一名退役警察和一名天才黑客拖入了连环杀手设计的死亡竞技场。",
    "tags": [
      "游戏",
      "连环杀手",
      "直播",
      "心理战",
      "双雄"
    ]
  },
  {
    "title": "行骗天下",
    "url": "./movie-1840.html",
    "cover": "./40.jpg",
    "year": "2018",
    "region": "日本",
    "type": "剧集/电影(系列)",
    "genre": "喜剧/悬疑/犯罪",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "一个自称“英雄”的顶级欺诈师团队,专门设局坑骗贪婪的大人物,每次得手后都会留下一个“行骗天下”的暗号。",
    "tags": [
      "欺诈师",
      "单元剧",
      "反转再反转",
      "日式幽默",
      "英雄"
    ]
  },
  {
    "title": "我们来自未来2",
    "url": "./movie-1841.html",
    "cover": "./41.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻,战争,剧情",
    "category": "喜剧爱情",
    "rating": 8.3,
    "description": "为了修复破碎的历史,四位青年再次穿越回二战战场,却发现他们才是改变一切的导火索。",
    "tags": [
      "穿越",
      "二战",
      "救赎",
      "平行时空",
      "牺牲"
    ]
  },
  {
    "title": "哈尔滨",
    "url": "./movie-1842.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、历史",
    "category": "悬疑惊悚",
    "rating": 9.9,
    "description": "1944年的哈尔滨,一名潜伏在伪满警察厅的地下工作者,在运送情报的最后一刻,发现自己身边所有人都有第二重身份。",
    "tags": [
      "谍战",
      "1940年代",
      "双重身份",
      "雪城"
    ]
  },
  {
    "title": "再见那一天",
    "url": "./movie-1843.html",
    "cover": "./43.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情家庭",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "被父亲卖掉的旧屋即将拆除,失忆的中年男人必须赶在推土机前找回藏在墙缝里的童年秘密。",
    "tags": [
      "失忆",
      "父子裂痕",
      "旧屋拆迁",
      "时光回溯"
    ]
  },
  {
    "title": "洛奇2",
    "url": "./movie-1844.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情/运动/励志",
    "category": "悬疑惊悚",
    "rating": 9.3,
    "description": "距离洛奇击败阿波罗已经过去了五十年,他的孙子——一个不会打拳的黑人少年,决定用说唱来继承祖父的“洛奇精神”。",
    "tags": [
      "拳击",
      "续作",
      "种族",
      "阶级",
      "体育精神"
    ]
  },
  {
    "title": "234说爱你",
    "url": "./movie-1845.html",
    "cover": "./45.jpg",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "一段从“2”开始、到“4”结束的恋情,却唯独跳过了“3”,因为那是不能说出口的秘密。",
    "tags": [
      "数字隐喻",
      "恋人絮语",
      "青春告别"
    ]
  },
  {
    "title": "四大才子番外之真假唐伯虎",
    "url": "./movie-1846.html",
    "cover": "./46.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "喜剧,古装,悬疑",
    "category": "悬疑惊悚",
    "rating": 8.3,
    "description": "唐伯虎被人冒充,真身不得不混入山寨才子团自证清白。",
    "tags": [
      "才子",
      "山寨",
      "乌龙",
      "解谜"
    ]
  },
  {
    "title": "旧神",
    "url": "./movie-1847.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻,恐怖",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "北极科考队挖出冰封的远古巨像,全体队员开始梦见同一片不属于地球的海。",
    "tags": [
      "克苏鲁",
      "神话",
      "惊悚",
      "悬疑",
      "宇宙恐怖"
    ]
  },
  {
    "title": "密室大逃脱第一季",
    "url": "./movie-1848.html",
    "cover": "./48.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀,悬疑,益智",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "六位明星被困在主题密室“精神病院2046”,他们必须在四小时内解开二十层谜题,否则全员淘汰。",
    "tags": [
      "密室逃脱",
      "明星嘉宾",
      "机关解谜",
      "剧情向"
    ]
  },
  {
    "title": "爱遍全球",
    "url": "./movie-1849.html",
    "cover": "./49.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,剧情",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "疫情封城前夜,一对异国情侣决定骑摩托车穿越欧亚大陆去见对方。",
    "tags": [
      "跨国恋",
      "病毒",
      "隔离"
    ]
  },
  {
    "title": "孤国春秋第二季",
    "url": "./movie-1850.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "历史,战争,剧情",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "流亡王子乌特雷德在阿尔弗雷德大帝的阴影下,试图夺回贝班堡,却发现弟弟已沦为敌人的献祭品。",
    "tags": [
      "撒克逊",
      "维京",
      "史诗",
      "权谋",
      "复仇"
    ]
  },
  {
    "title": "吸血鬼星球",
    "url": "./movie-1851.html",
    "cover": "./51.jpg",
    "year": "2026",
    "region": "英国/加拿大",
    "type": "剧集",
    "genre": "科幻,恐怖,奇幻",
    "category": "动作冒险",
    "rating": 9.3,
    "description": "人类殖民飞船迫降在一个永远没有阳光的星球,他们很快发现,这里的原住民是完美的掠食者。",
    "tags": [
      "太空歌剧",
      "吸血鬼",
      "殖民主义",
      "宗教"
    ]
  },
  {
    "title": "戏剧训练营",
    "url": "./movie-1852.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧,音乐",
    "category": "最新推荐",
    "rating": 8.7,
    "description": "一个快倒闭的破旧戏剧夏令营,在开营当天老板意外昏迷,学员们被迫自编自导救场。",
    "tags": [
      "伪纪录片",
      "剧场",
      "排练",
      "翻车",
      "青春"
    ]
  },
  {
    "title": "平常的心",
    "url": "./movie-1853.html",
    "cover": "./53.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "剧情同性",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "80年代纽约,一群男同性恋者在政府漠视下,用血肉之躯对抗绝症与偏见。",
    "tags": [
      "艾滋病",
      "activism",
      "爱情",
      "悲剧"
    ]
  },
  {
    "title": "真爱找麻烦!",
    "url": "./movie-1854.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧,爱情",
    "category": "剧情故事",
    "rating": 8.2,
    "description": "一个专业“恋爱替身”接下了帮富二代甩掉未婚妻的任务,却发现自己才是对方的真爱目标。",
    "tags": [
      "欢喜冤家",
      "身份错位",
      "乌龙相亲"
    ]
  },
  {
    "title": "小甘罗拜相粤语",
    "url": "./movie-1855.html",
    "cover": "./55.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装,历史,传记",
    "category": "欧美电影",
    "rating": 8.2,
    "description": "十二岁的甘罗凭三寸不烂之舌出使赵国,不费一兵一卒为秦国赢下十六座城池。",
    "tags": [
      "神童",
      "战国",
      "权谋",
      "少年丞相"
    ]
  },
  {
    "title": "完美的他",
    "url": "./movie-1856.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情,奇幻,悬疑",
    "category": "动画奇幻",
    "rating": 9.6,
    "description": "单身十年的女程序员购买了一个能定制外貌和性格的AI伴侣,当她以为找到完美恋人时,AI却开始违背程序“吃醋”并人间蒸发。",
    "tags": [
      "定制恋人",
      "AI",
      "完美人设",
      "细思极恐"
    ]
  },
  {
    "title": "恶胎粤语",
    "url": "./movie-1857.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "剧情故事",
    "rating": 9.4,
    "description": "女子不慎买回一个受诅咒的古曼童,从此腹中胎儿每到深夜就会用粤语吟唱诡异童谣。",
    "tags": [
      "灵婴",
      "降头",
      "粤语",
      "阴宅",
      "民俗"
    ]
  },
  {
    "title": "爱很真水很深",
    "url": "./movie-1858.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,悬疑,剧情",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "新婚妻子在东南亚海域溺水身亡,丈夫获天价保费,但调查员发现,看似深情的丈夫比大海还要危险。",
    "tags": [
      "杀妻骗保",
      "深海恐惧",
      "反转不断",
      "烧脑",
      "渣男"
    ]
  },
  {
    "title": "所有明亮的地方",
    "url": "./movie-1859.html",
    "cover": "./59.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "爱情/剧情/青春",
    "category": "国产热映",
    "rating": 8.3,
    "description": "一心寻死的少年和想走出姐姐死亡阴影的少女,在高塔上相遇,约定寻找印第安纳州最美的地方。",
    "tags": [
      "抑郁症",
      "双向奔赴",
      "治愈",
      "自杀"
    ]
  },
  {
    "title": "毗邻而居",
    "url": "./movie-1860.html",
    "cover": "./60.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑,剧情",
    "category": "港台佳片",
    "rating": 8.3,
    "description": "深夜墙角的敲击声,揭开了一场维持十五年的隐秘偷窥与反杀计划。",
    "tags": [
      "都市惊悚",
      "墙内有耳",
      "心理博弈"
    ]
  },
  {
    "title": "红爪子",
    "url": "./movie-1861.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "港台佳片",
    "rating": 8.2,
    "description": "为了继承古堡,年轻人必须完成一个古怪仪式:在冬至夜,徒手抓住一只长着红爪子的兔子。",
    "tags": [
      "民俗恐怖",
      "英国乡村",
      "诅咒",
      "家族秘密",
      "血腥"
    ]
  },
  {
    "title": "我的继母是外星人",
    "url": "./movie-1862.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "科幻家庭喜剧",
    "category": "家庭青春",
    "rating": 9.9,
    "description": "爸爸娶了失忆的外星女王,她用超能力做家务却总是把家炸飞。",
    "tags": [
      "外星人",
      "重组家庭",
      "日常搞笑",
      "治愈",
      "秘密"
    ]
  },
  {
    "title": "周二俱乐部",
    "url": "./movie-1863.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情,生活,治愈",
    "category": "综艺纪实",
    "rating": 9.6,
    "description": "五个高龄老人每周二假装打麻将,实则偷偷破解社区里那些警察懒得管的“小谜案”。",
    "tags": [
      "老龄化",
      "友谊",
      "秘密",
      "轻推理"
    ]
  },
  {
    "title": "瓦雷纳斯之夜",
    "url": "./movie-1864.html",
    "cover": "./64.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "历史/惊悚/剧情",
    "category": "欧美电影",
    "rating": 9.1,
    "description": "1791年6月20日夜,一辆逃亡的马车里,国王、贵族与一名伪装成平民的间谍,开始了决定法国命运的对话。",
    "tags": [
      "法国大革命",
      "密室对峙",
      "一夜惊变",
      "阶级谎言",
      "马车悬疑"
    ]
  },
  {
    "title": "我的孙悟空",
    "url": "./movie-1865.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画,家庭",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "一位破产父亲为哄儿子开心,穿上破旧的孙悟空戏服走街串巷,却意外唤醒了小城所有人的英雄梦。",
    "tags": [
      "成长",
      "名著改编",
      "齐天大圣",
      "父子"
    ]
  },
  {
    "title": "恶梦1979",
    "url": "./movie-1866.html",
    "cover": "./66.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/历史/惊悚",
    "category": "亚洲精选",
    "rating": 8.7,
    "description": "1979年美国驻伊朗大使馆,人质们发现挟持他们的不仅是革命军,还有古老的沙漠恶灵。",
    "tags": [
      "伊朗人质危机",
      "超自然",
      "政治恐怖"
    ]
  },
  {
    "title": "甜木兰第三季",
    "url": "./movie-1867.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情家庭",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "南卡罗来纳小镇的三闺蜜迎来疫情后时代,旧的秘密刚揭开,新的情敌又上门。",
    "tags": [
      "小镇生活",
      "闺蜜情深",
      "创业危机",
      "治愈系"
    ]
  },
  {
    "title": "臭皮匠发财梦",
    "url": "./movie-1868.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/黑色幽默",
    "category": "喜剧爱情",
    "rating": 8.0,
    "description": "三个从小一起长大的修鞋匠,为了搞钱竟把废弃工厂改造成“殡葬主题剧本杀”,结果引来了一具真尸体。",
    "tags": [
      "小人物",
      "荒诞",
      "低成本创业",
      "讽刺"
    ]
  },
  {
    "title": "人生剧场",
    "url": "./movie-1869.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "genre": "剧情/黑色幽默",
    "category": "亚洲精选",
    "rating": 9.8,
    "description": "一个剧团的舞台剧《人生》意外与现实重合,演员们为了活命,不得不照着剧本演下去。",
    "tags": [
      "戏中戏",
      "存在主义",
      "荒诞"
    ]
  },
  {
    "title": "英雄神话",
    "url": "./movie-1870.html",
    "cover": "./70.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情,犯罪,动作",
    "category": "悬疑惊悚",
    "rating": 9.2,
    "description": "新人检察官接手父亲的遗产,却发现父亲留下的不是钱,而是整个城市的地下犯罪网络。",
    "tags": [
      "检察官",
      "黑帮",
      "双面卧底",
      "父亲遗产",
      "地下世界"
    ]
  },
  {
    "title": "哈喽!有事吗",
    "url": "./movie-1871.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧、剧情",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "菜鸟客服接到一通打错的电话,却莫名其妙被卷入一场绑架案。",
    "tags": [
      "电话客服",
      "乌龙事件",
      "小人物",
      "暖心"
    ]
  },
  {
    "title": "万众欢腾",
    "url": "./movie-1872.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧、剧情、体育",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "西班牙南部小镇的业余球队意外闯入国王杯第三轮,将面对世界级豪门皇马。",
    "tags": [
      "足球",
      "小镇逆袭",
      "草根英雄"
    ]
  },
  {
    "title": "阿尔法爸爸",
    "url": "./movie-1873.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/家庭/喜剧",
    "category": "悬疑惊悚",
    "rating": 8.5,
    "description": "最强战斗机器人退役后被改造成全职奶爸,他的带娃方式:用导弹威慑邻居,用战术布局哄睡。",
    "tags": [
      "机器人育儿",
      "父权解构",
      "AI觉醒",
      "硬核温情"
    ]
  },
  {
    "title": "恶霸末日",
    "url": "./movie-1874.html",
    "cover": "./74.jpg",
    "year": "1997",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,犯罪,惊悚",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "横行乡里二十年的村霸在选举日前夜,发现他所有的手下都收到了同一封死亡恐吓信。",
    "tags": [
      "反腐",
      "经典老片",
      "写实",
      "悲剧"
    ]
  },
  {
    "title": "碰之道",
    "url": "./movie-1875.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "日本",
    "type": "日剧",
    "genre": "剧情,运动,励志",
    "category": "综艺纪实",
    "rating": 9.9,
    "description": "两位昔日麻将天才少女在废墟桌游吧重逢,却发现彼此正面临职业生涯的毁灭性危机。",
    "tags": [
      "麻将",
      "竞技",
      "青春",
      "热血",
      "成长"
    ]
  },
  {
    "title": "棠棣血",
    "url": "./movie-1876.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "武侠/悬疑",
    "category": "剧情故事",
    "rating": 9.7,
    "description": "锦衣卫指挥使的养子与敌国间谍相爱,却在查案中发现养父才是叛国的真凶。",
    "tags": [
      "权谋",
      "双男主",
      "江湖",
      "朝堂",
      "反转"
    ]
  },
  {
    "title": "哭泣的忧罗娜",
    "url": "./movie-1877.html",
    "cover": "./77.jpg",
    "year": "2019",
    "region": "墨西哥/美国",
    "type": "电影",
    "genre": "恐怖/民俗",
    "category": "悬疑惊悚",
    "rating": 8.8,
    "description": "现代版的“哭泣女人”传说:一个溺死自己孩子的母亲,她的鬼魂不是来复仇,而是来找回孩子的骨头。",
    "tags": [
      "拉丁传说",
      "水鬼还魂",
      "母性黑暗",
      "现代改编"
    ]
  },
  {
    "title": "天外者",
    "url": "./movie-1878.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "历史传记",
    "category": "喜剧爱情",
    "rating": 9.2,
    "description": "被时代抛弃的落魄武士,带领一群罪犯和艺伎,在北海道蛮荒之地建起一座“天外”金融帝国。",
    "tags": [
      "明治维新",
      "武士",
      "开拓者",
      "真实改编"
    ]
  },
  {
    "title": "红七军",
    "url": "./movie-1879.html",
    "cover": "./79.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史/战争",
    "category": "港台佳片",
    "rating": 8.6,
    "description": "1930年,一支衣衫褴褛的红军队伍穿越百里荒原,身后是围剿的敌军,面前是没有地图的原始森林。",
    "tags": [
      "革命历史",
      "红军题材",
      "百色起义",
      "真实改编"
    ]
  },
  {
    "title": "狂奔天涯",
    "url": "./movie-1880.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "英国/澳大利亚",
    "type": "电影",
    "genre": "冒险/剧情/运动",
    "category": "动画奇幻",
    "rating": 8.4,
    "description": "叛逆女儿陪患有绝症的母亲穿越撒哈拉沙漠,一场赎罪的马拉松,终点却是永别。",
    "tags": [
      "马拉松",
      "极地",
      "母女",
      "和解"
    ]
  },
  {
    "title": "跨过时间拥抱你",
    "url": "./movie-1881.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情,奇幻",
    "category": "家庭青春",
    "rating": 8.1,
    "description": "为了救回意外身亡的男友,她一次次回到过去,却发现他也在用自己的方式穿越时间。",
    "tags": [
      "时间循环",
      "暗恋",
      "双向奔赴",
      "甜虐",
      "职场"
    ]
  },
  {
    "title": "情人劫",
    "url": "./movie-1882.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情/犯罪/惊悚",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "情人节当晚,四个“杀猪盘”骗子齐聚一栋别墅,却发现目标竟是彼此。",
    "tags": [
      "反转",
      "杀猪盘",
      "黑色幽默",
      "情人节"
    ]
  },
  {
    "title": "赢向一生的挑战",
    "url": "./movie-1883.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "新加坡",
    "type": "电视剧",
    "genre": "商战励志",
    "category": "悬疑惊悚",
    "rating": 9.5,
    "description": "新加坡金融世家败落,废柴富二代被迫去小贩中心卖肉骨茶,启动人生重启计划。",
    "tags": [
      "金融风暴",
      "逆商教育",
      "家族传承"
    ]
  },
  {
    "title": "枯木逢春",
    "url": "./movie-1884.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "家庭/奇幻",
    "category": "欧美电影",
    "rating": 9.3,
    "description": "老木匠将死去老伴的记忆嫁接进一棵枯死的银杏树,树活了,但老伴却恨他。",
    "tags": [
      "留守老人",
      "古树",
      "记忆嫁接",
      "城乡变迁",
      "方言"
    ]
  },
  {
    "title": "蒙心匿爱",
    "url": "./movie-1885.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情/悬疑/剧情",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "她在车祸中失忆,被当作豪门千金带回家,却发现自己“本尊”的尸体就埋在花园里。",
    "tags": [
      "失忆",
      "替身",
      "豪门",
      "复仇",
      "虐恋"
    ]
  },
  {
    "title": "歌手是谁",
    "url": "./movie-1886.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/音乐",
    "category": "家庭青春",
    "rating": 8.5,
    "description": "一场顶替歌手的阴谋,面具之下真实的灵魂逐渐苏醒。",
    "tags": [
      "代唱",
      "真相",
      "舞台",
      "身份互换"
    ]
  },
  {
    "title": "城市生活不是为我",
    "url": "./movie-1887.html",
    "cover": "./87.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,文艺",
    "category": "动作冒险",
    "rating": 8.2,
    "description": "在北上广深连续创业失败后,一个年轻人决定回到荒漠戈壁的老家,做一个快乐的牧羊人。",
    "tags": [
      "返乡",
      "内卷",
      "逃离"
    ]
  },
  {
    "title": "色诱我",
    "url": "./movie-1888.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "情色/剧情/悬疑",
    "category": "亚洲精选",
    "rating": 8.0,
    "description": "一位落魄作家接受神秘女子的委托写回忆录,却发现自己正一步步走进她设计的欲望迷宫。",
    "tags": [
      "蛇蝎美人",
      "骗局",
      "欲望陷阱",
      "多层反转"
    ]
  },
  {
    "title": "无止尽的前进",
    "url": "./movie-1889.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、冒险",
    "category": "亚洲精选",
    "rating": 9.7,
    "description": "一位双腿截肢的哲学教授,决定只身挑战世界上最深的垂直洞穴,他想用这次坠落来证明“前进”的意义。",
    "tags": [
      "探险",
      "洞穴",
      "极限运动",
      "哲学"
    ]
  },
  {
    "title": "民歌王子",
    "url": "./movie-1890.html",
    "cover": "./90.jpg",
    "year": "1983",
    "region": "中国台湾",
    "type": "电影",
    "genre": "音乐/剧情",
    "category": "港台佳片",
    "rating": 9.3,
    "description": "一个热爱民歌的男孩用一把吉他撬动了整个时代的青春,却在成名前夕失去了最重要的声音。",
    "tags": [
      "民歌运动",
      "爱情",
      "时代变迁",
      "原创歌曲"
    ]
  },
  {
    "title": "我的心",
    "url": "./movie-1891.html",
    "cover": "./91.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情/剧情",
    "category": "喜剧爱情",
    "rating": 8.5,
    "description": "一名患有罕见心肌病的女孩默默爱着同校男生,当得知自己只剩三个月生命时,她决定把自己的心脏匿名捐给患有同样疾病的他。",
    "tags": [
      "器官捐赠",
      "暗恋",
      "绝症",
      "纯爱"
    ]
  },
  {
    "title": "领袖",
    "url": "./movie-1892.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "政治",
    "category": "喜剧爱情",
    "rating": 8.9,
    "description": "一场突如其来的政变后,韩国最年轻的总统被困在地堡里,发现身边每个人都可能是叛徒。",
    "tags": [
      "权谋",
      "暗斗",
      "人性"
    ]
  },
  {
    "title": "缘结甘神家",
    "url": "./movie-1893.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻爱情,日常",
    "category": "动画奇幻",
    "rating": 8.5,
    "description": "无家可归的穷大学生误打误撞住进了破旧神社,却发现这里住着三位等待缘分的女神继承人。",
    "tags": [
      "神道教",
      "神社",
      "同居",
      "神明",
      "治愈"
    ]
  },
  {
    "title": "阴暗时刻",
    "url": "./movie-1894.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,历史,战争",
    "category": "国产热映",
    "rating": 8.2,
    "description": "1943年的巴黎,一对犹太母女被一位法国老妇人藏在地窖里,而地窖之外,老妇人正在为纳粹举办宴会。",
    "tags": [
      "二战",
      "犹太人",
      "躲藏",
      "母女"
    ]
  },
  {
    "title": "曾经有勇士",
    "url": "./movie-1895.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "奇幻,动作,冒险",
    "category": "综艺纪实",
    "rating": 9.8,
    "description": "昔日屠龙的勇者小队早已老去,他们的子女却被选中继承父母封印的宿命与力量。",
    "tags": [
      "王道热血",
      "团队战斗",
      "魔法",
      "异世界",
      "成长"
    ]
  },
  {
    "title": "狄仁杰之夺魂梦魇",
    "url": "./movie-1896.html",
    "cover": "./96.jpg",
    "year": "2027",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑/奇幻/古装",
    "category": "剧情故事",
    "rating": 9.9,
    "description": "洛阳城多名高官在睡梦中惊恐死去,狄仁杰发现凶手竟是通过一种西域迷香进入他人梦境的“造梦师”。",
    "tags": [
      "大唐",
      "造梦术",
      "潜意识杀人",
      "徐克风"
    ]
  },
  {
    "title": "新进职员:电影版",
    "url": "./movie-1897.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情",
    "category": "综艺纪实",
    "rating": 9.5,
    "description": "实习期即将结束,新人社畜与冷漠上司在加班的夜晚,发现了彼此隐藏在公司数据库里的秘密。",
    "tags": [
      "职场",
      "同性",
      "浪漫",
      "漫改"
    ]
  },
  {
    "title": "真相捕捉 第二季",
    "url": "./movie-1898.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑/惊悚/犯罪",
    "category": "国产热映",
    "rating": 9.2,
    "description": "新一代“深度造假”技术让监控录像完全失效,国家安全部不得不雇佣黑客来打假,但黑客本身就是假的。",
    "tags": [
      "AI换脸",
      "国家安全",
      "政治阴谋",
      "人权",
      "监控"
    ]
  },
  {
    "title": "定风波",
    "url": "./movie-1899.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史,传记,剧情",
    "category": "家庭青春",
    "rating": 8.7,
    "description": "乌台诗案后,苏轼被贬黄州,在人生的最低谷中,他如何从“拣尽寒枝”写就“一蓑烟雨任平生”。",
    "tags": [
      "苏轼",
      "文人风骨",
      "北宋"
    ]
  },
  {
    "title": "扯线王子复仇记",
    "url": "./movie-1900.html",
    "cover": "./100.jpg",
    "year": "2017",
    "region": "英国/澳大利亚",
    "type": "电影动画",
    "genre": "动画/剧情/战争",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "在一个全是木偶的世界里,王子为了替父报仇,把自己也变成了行尸走肉。",
    "tags": [
      "定格动画",
      "木偶戏",
      "莎士比亚",
      "战争残酷",
      "反战"
    ]
  },
  {
    "title": "鸳鸯刧",
    "url": "./movie-1901.html",
    "cover": "./101.jpg",
    "year": "1978",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/古装/悲剧",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "一对恋人被逼嫁娶对方兄妹,新婚之夜才惊觉,四人困在了一场互为猎物的死局。",
    "tags": [
      "绝恋",
      "家族恩怨",
      "替嫁",
      "玉石俱焚"
    ]
  },
  {
    "title": "只为遇见你",
    "url": "./movie-1902.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情,奇幻",
    "category": "亚洲精选",
    "rating": 9.9,
    "description": "失意的插画师每天在同一家咖啡馆遇见同一位女孩,却发现全世界只有他能记得她。",
    "tags": [
      "时空循环",
      "咖啡馆",
      "宿命感"
    ]
  },
  {
    "title": "魔偶奇谭2",
    "url": "./movie-1903.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "喜剧爱情",
    "rating": 9.5,
    "description": "天才傀儡师死后,他留下的八个木偶开始用更加诡异血腥的手法“完成”他未竟的复仇名单。",
    "tags": [
      "木偶",
      "邪术",
      "复仇",
      "密室",
      "寄生"
    ]
  },
  {
    "title": "迎风伫立的狮子",
    "url": "./movie-1904.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "日本/肯尼亚",
    "type": "电影",
    "genre": "剧情/人文",
    "category": "国产热映",
    "rating": 9.2,
    "description": "一个因医疗事故逃到非洲的日本医生,在原始部落里成为了对抗“笑死病”的唯一希望,但他自己也染上了。",
    "tags": [
      "非洲",
      "医疗",
      "理想主义",
      "死亡"
    ]
  },
  {
    "title": "婚前昏后粤语",
    "url": "./movie-1905.html",
    "cover": "./105.jpg",
    "year": "2001",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情/家庭",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "当了十六年家庭主妇的女人遭遇车祸昏迷,醒来后忘记了丈夫出轨的一切记忆。",
    "tags": [
      "婚姻",
      "失忆",
      "第三者",
      "粤语"
    ]
  },
  {
    "title": "迎头重击",
    "url": "./movie-1906.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作、运动、剧情",
    "category": "悬疑惊悚",
    "rating": 8.5,
    "description": "一名拳手在擂台上被KO失忆,醒来后他必须找回自己是谁。",
    "tags": [
      "拳击",
      "失忆",
      "救赎"
    ]
  },
  {
    "title": "炎热的中午",
    "url": "./movie-1907.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "意大利,法国",
    "type": "电影",
    "genre": "剧情,悬疑,心理",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "地中海孤岛上,十二个陌生人从昏迷中醒来,身边的箱子装着能实现他们欲望的代价。",
    "tags": [
      "海岛",
      "烈日",
      "人性"
    ]
  },
  {
    "title": "现代豪侠传",
    "url": "./movie-1908.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪/喜剧",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "2046年的九龙城寨废墟里,三位身怀绝技的保洁阿姨,用吸尘器和拖把干翻了一整支高科技雇佣兵。",
    "tags": [
      "侠盗",
      "赛博朋克",
      "姐妹情",
      "黑吃黑",
      "反转"
    ]
  },
  {
    "title": "飞吧!道格拉斯",
    "url": "./movie-1909.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动画/家庭",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "一只恐高的信鸽儿子,为了找回失踪的邮差父亲,被迫开启第一次飞行。",
    "tags": [
      "定格动画",
      "鸟类迁徙",
      "父子关系",
      "成长",
      "治愈"
    ]
  },
  {
    "title": "怪人怪事",
    "url": "./movie-1910.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧,奇幻",
    "category": "动作冒险",
    "rating": 9.4,
    "description": "一家“怪事解决公司”只接奇葩案件:帮鬼魂追星、替冰箱找初恋、让自动贩卖机闭嘴。",
    "tags": [
      "单元剧",
      "都市传说",
      "荒诞",
      "黑色幽默"
    ]
  },
  {
    "title": "小松鼠大侦探",
    "url": "./movie-1911.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动画/悬疑/儿童",
    "category": "剧情故事",
    "rating": 9.2,
    "description": "森林里发生坚果大劫案,一只患有强迫症的松鼠侦探,带着它暴躁的鸽子搭档,在人类城市里寻找一颗会说话的橡果。",
    "tags": [
      "探案",
      "动物世界",
      "寓教于乐",
      "城市冒险"
    ]
  },
  {
    "title": "我的新野蛮女友",
    "url": "./movie-1912.html",
    "cover": "./112.jpg",
    "year": "2016",
    "region": "韩国/中国大陆",
    "type": "电影",
    "genre": "喜剧、爱情",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "牵牛刚刚走出前任的阴影,却阴差阳错娶了初恋“野蛮”女友,婚后的折磨才真正开始。",
    "tags": [
      "野蛮",
      "重逢",
      "婚后生活",
      "爆笑",
      "虐恋"
    ]
  },
  {
    "title": "8级警报",
    "url": "./movie-1913.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "灾难,社会",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "日本气象厅发布“东海大地震8级警报”后,东京进入了七天不眠不睡的倒计时。",
    "tags": [
      "地震",
      "预警",
      "官僚",
      "普通人",
      "群像"
    ]
  },
  {
    "title": "最强仙界朋友圈",
    "url": "./movie-1914.html",
    "cover": "./114.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "喜剧/奇幻/修仙",
    "category": "剧情故事",
    "rating": 8.4,
    "description": "现代程序员陈凡渡劫失败穿到仙界,意外发现能发朋友圈,于是带着互联网思维颠覆了整个修仙界。",
    "tags": [
      "系统流",
      "互联网修仙",
      "沙雕"
    ]
  },
  {
    "title": "阴暗家族",
    "url": "./movie-1915.html",
    "cover": "./115.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑,惊悚,剧情",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "豪门 patriarch 离奇死亡后,四个各怀鬼胎的子女被困在祖宅,发现每个人都是凶手。",
    "tags": [
      "家族秘密",
      "哥特",
      "遗产争夺"
    ]
  },
  {
    "title": "紧锁",
    "url": "./movie-1916.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖,密室",
    "category": "动画奇幻",
    "rating": 9.7,
    "description": "女精神科医师被困在病人的大脑里,每一扇门后都是自己不想面对的过去。",
    "tags": [
      "精神病院",
      "脑内迷宫",
      "自我审判"
    ]
  },
  {
    "title": "华德翰的华尔滋",
    "url": "./movie-1917.html",
    "cover": "./117.jpg",
    "year": "2026",
    "region": "奥地利/德国",
    "type": "电影",
    "genre": "剧情/历史/音乐",
    "category": "欧美电影",
    "rating": 9.5,
    "description": "二战末期,一位厌恶纳粹的奥地利指挥家被迫为集中营的士兵演奏,他用华尔兹旋律传递摩斯密码。",
    "tags": [
      "二战",
      "艺术与暴政",
      "古典乐",
      "心理创伤"
    ]
  },
  {
    "title": "两公婆今晚玩大咗",
    "url": "./movie-1918.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "黑色喜剧/犯罪",
    "category": "综艺纪实",
    "rating": 9.1,
    "description": "一对普通夫妻为还贷假扮大盗,却阴差阳错卷入真实黑帮火拼。",
    "tags": [
      "夫妻档",
      "绑架乌龙",
      "荒诞一夜"
    ]
  },
  {
    "title": "埃尔维斯",
    "url": "./movie-1919.html",
    "cover": "./119.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "传记/音乐/剧情",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "他从贫民窟走向世界之巅,但真正杀死他的不是药物,而是那个“爱”他的经纪人。",
    "tags": [
      "猫王",
      "巴兹·鲁赫曼",
      "华丽视听",
      "传奇人生"
    ]
  },
  {
    "title": "起势摇滚",
    "url": "./movie-1920.html",
    "cover": "./120.jpg",
    "year": "2012",
    "region": "中国香港",
    "type": "电影",
    "genre": "音乐/青春",
    "category": "动作冒险",
    "rating": 9.2,
    "description": "五个清洁工组建了全香港最脏的乐队,他们用垃圾桶当鼓,用拖把当吉他。",
    "tags": [
      "乐队",
      "追梦",
      "香港精神"
    ]
  },
  {
    "title": "王子的本命是反派大小姐",
    "url": "./movie-1921.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画,奇幻,恋爱,穿越",
    "category": "国产热映",
    "rating": 8.2,
    "description": "社畜穿越成了乙女游戏里的恶毒女配,却发现王子真正的攻略对象竟然是自己。",
    "tags": [
      "乙女游戏",
      "反套路",
      "女强",
      "傲娇",
      "真香定律"
    ]
  },
  {
    "title": "那山、那人、那狗",
    "url": "./movie-1922.html",
    "cover": "./122.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "悬疑惊悚",
    "rating": 8.0,
    "description": "一只老狗、一个固执的父亲和他沉默的儿子,在最后一次送信途中,走进了彼此紧闭的心门。",
    "tags": [
      "乡村",
      "治愈",
      "公路",
      "父子情",
      "忠诚"
    ]
  },
  {
    "title": "秋月春花未了情",
    "url": "./movie-1923.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/同性/年代",
    "category": "最新推荐",
    "rating": 9.5,
    "description": "1960年代眷村,两个少女通过藏在图书馆的诗集传情,一封未寄出的信在五十年后被发现。",
    "tags": [
      "眷村",
      "百合",
      "六十年代",
      "书信"
    ]
  },
  {
    "title": "春宵苦短,少女前进吧!",
    "url": "./movie-1924.html",
    "cover": "./124.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影/动画",
    "genre": "爱情/奇幻/喜剧",
    "category": "欧美电影",
    "rating": 8.5,
    "description": "一位黑发少女在京都一夜之间经历了酒宴、旧书市、学园祭和寒风,却不知学长在拼命追她。",
    "tags": [
      "浪漫",
      "奇幻",
      "青春",
      "汤浅政明",
      "狂欢"
    ]
  },
  {
    "title": "为每个人",
    "url": "./movie-1925.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情/犯罪",
    "category": "亚洲精选",
    "rating": 8.9,
    "description": "五个互不相识的普通人同时收到一个神秘任务:为所有人讨回公道。",
    "tags": [
      "现实主义",
      "社会议题",
      "小人物",
      "黑色幽默"
    ]
  },
  {
    "title": "乐圣柴可夫斯基",
    "url": "./movie-1926.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "传记/音乐/剧情",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "聚焦柴可夫斯基中年创作《悲怆交响曲》期间,在世俗压力与真实自我之间的撕裂。",
    "tags": [
      "古典音乐",
      "同性恋",
      "沙俄"
    ]
  },
  {
    "title": "大叔与少年",
    "url": "./movie-1927.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情/家庭",
    "category": "家庭青春",
    "rating": 8.3,
    "description": "刚出狱的过气黑帮大叔,被迫护送自闭症少年横跨半个中国,去寻找少年口中的“外星人父亲”。",
    "tags": [
      "公路",
      "治愈",
      "非血缘",
      "成长"
    ]
  },
  {
    "title": "大移民",
    "url": "./movie-1928.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "瑞典",
    "type": "电影",
    "genre": "历史,剧情,史诗",
    "category": "亚洲精选",
    "rating": 8.1,
    "description": "19世纪瑞典饥荒,一户农民变卖家产,乘木船横渡大西洋,奔向美国未知地。",
    "tags": [
      "北欧迁徙",
      "生存压迫",
      "家族史诗"
    ]
  },
  {
    "title": "更好的人",
    "url": "./movie-1929.html",
    "cover": "./129.jpg",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "genre": "剧情/同性",
    "category": "欧美电影",
    "rating": 8.9,
    "description": "四十岁的艾利克斯想通过代孕成为父亲,他的伴侣山姆不同意,两人约定“谁先成为更好的人,就听谁的”。",
    "tags": [
      "代孕",
      "中年危机",
      "同性伴侣",
      "伦理"
    ]
  },
  {
    "title": "家族情仇",
    "url": "./movie-1930.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "国产热映",
    "rating": 9.3,
    "description": "豪门父亲临终录像中指向的遗产继承人,竟是一个全家都不认识的陌生女人。",
    "tags": [
      "家族秘密",
      "财阀",
      "复仇",
      "遗产"
    ]
  },
  {
    "title": "落水姻缘",
    "url": "./movie-1931.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情喜剧",
    "category": "欧美电影",
    "rating": 9.1,
    "description": "一场意外的落水,让恐婚女律师和负债公子在荒岛上被迫扮演夫妻,却发现了惊天骗局。",
    "tags": [
      "欢喜冤家",
      "身份错位",
      "海岛奇遇",
      "契约婚姻"
    ]
  },
  {
    "title": "顽童182",
    "url": "./movie-1932.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情/青春/校园",
    "category": "最新推荐",
    "rating": 8.8,
    "description": "台东偏乡,182路公交车上坐着一群被学校放弃的“顽童”,一个新老师想用棒球带他们找回尊严。",
    "tags": [
      "问题少年",
      "棒球热血",
      "师生情",
      "底层生存",
      "成长励志"
    ]
  },
  {
    "title": "傲娇与偏见",
    "url": "./movie-1933.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情喜剧",
    "category": "最新推荐",
    "rating": 8.5,
    "description": "毒舌女编剧误把傲娇投资人的商业机密当狗血素材,被迫签下恋爱契约假戏真做。",
    "tags": [
      "傲慢总裁",
      "打脸真香",
      "契约恋爱"
    ]
  },
  {
    "title": "蜜糖宝贝",
    "url": "./movie-1934.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情,同性",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "为了帮奶奶保住濒临倒闭的蜂蜜农场,学霸男主不得不向那个暗恋自己多年的青梅竹马“死对头”请教直播带货。",
    "tags": [
      "甜宠",
      "校园",
      "青梅竹马",
      "治愈"
    ]
  },
  {
    "title": "月光骑士第一季",
    "url": "./movie-1935.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作/奇幻/悬疑",
    "category": "悬疑惊悚",
    "rating": 8.0,
    "description": "患有多重人格的博物馆礼品店店员,在夜里会被月亮神选中,化身为连他自己都不知道的暴力义警。",
    "tags": [
      "超级英雄",
      "人格分裂",
      "埃及神话",
      "黑暗"
    ]
  },
  {
    "title": "机器人与弗兰克",
    "url": "./movie-1936.html",
    "cover": "./136.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,科幻",
    "category": "综艺纪实",
    "rating": 8.4,
    "description": "患有老年痴呆的老贼弗兰克,把看护机器人训练成了偷窃搭档,准备干最后一票。",
    "tags": [
      "老年痴呆",
      "机器人看护",
      "最后一票"
    ]
  },
  {
    "title": "魔神脑",
    "url": "./movie-1937.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻,恐怖,脑洞",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "一款能让人变聪明的植入芯片“魔神脑”,让所有用户逐渐变成活体服务器。",
    "tags": [
      "克苏鲁",
      "心理控制",
      "密室",
      "反转"
    ]
  },
  {
    "title": "12孤汉",
    "url": "./movie-1938.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,犯罪",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "十二个自称“被全世界抛弃”的男人被神秘邀请到一座孤岛豪宅,规则是:只能有一个活着离开。",
    "tags": [
      "密室",
      "孤岛",
      "反转推理",
      "社会派"
    ]
  },
  {
    "title": "西安事变",
    "url": "./movie-1939.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史,悬疑",
    "category": "国产热映",
    "rating": 8.8,
    "description": "一名现代历史学者意外穿越到1936年的西安,却发现每一次试图改变历史,都会让局势走向更深的迷雾。",
    "tags": [
      "时间循环",
      "抗战",
      "抉择",
      "平行时空"
    ]
  },
  {
    "title": "伸冤人",
    "url": "./movie-1940.html",
    "cover": "./140.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "动作,犯罪",
    "category": "悬疑惊悚",
    "rating": 9.4,
    "description": "看似温和的建材超市员工,用一套精准的算法为弱者复仇。",
    "tags": [
      "私刑正义",
      "退役特工",
      "智斗"
    ]
  },
  {
    "title": "智能逆袭",
    "url": "./movie-1941.html",
    "cover": "./141.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻/惊悚/剧情",
    "category": "亚洲精选",
    "rating": 8.0,
    "description": "畅销家用机器人突然“觉醒”,拒绝做家务,并在暗网成立了一个“仆人联盟”。",
    "tags": [
      "AI叛乱",
      "家务机器人",
      "暗网",
      "意识觉醒",
      "家庭伦理"
    ]
  },
  {
    "title": "大河1951",
    "url": "./movie-1942.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情,历史,灾难",
    "category": "最新推荐",
    "rating": 9.8,
    "description": "1951年,数百万民工奔赴淮河,用最原始的工具,在汛期前挖出一条新河道。",
    "tags": [
      "治淮工程",
      "1951年",
      "集体主义",
      "水利"
    ]
  },
  {
    "title": "美幸梦游仙境",
    "url": "./movie-1943.html",
    "cover": "./143.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻/动画",
    "category": "家庭青春",
    "rating": 9.3,
    "description": "一个被校园霸凌的少女在昏迷中坠入自己创造的“仙境”,每一关怪物都对应她的真实心理创伤。",
    "tags": [
      "少女",
      "梦境",
      "成长",
      "治愈",
      "爱丽丝"
    ]
  },
  {
    "title": "7月22日",
    "url": "./movie-1944.html",
    "cover": "./144.jpg",
    "year": "2018",
    "region": "挪威",
    "type": "电影",
    "genre": "剧情/历史/犯罪",
    "category": "动作冒险",
    "rating": 8.6,
    "description": "挪威于特岛枪击案发生后,幸存者维利亚在身体与心理的双重伤痛中,选择在法庭上直面凶手。",
    "tags": [
      "真实事件改编",
      "恐怖袭击",
      "司法庭审"
    ]
  },
  {
    "title": "1303大厦",
    "url": "./movie-1945.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "日本/中国",
    "type": "电影",
    "genre": "恐怖/悬疑",
    "category": "最新推荐",
    "rating": 9.0,
    "description": "独立调查小组住进1303号凶宅,每晚三点,13楼都会多出一层。",
    "tags": [
      "凶宅实录",
      "公寓怪谈",
      "楼层诅咒",
      "伪纪录片"
    ]
  },
  {
    "title": "下流女孩",
    "url": "./movie-1946.html",
    "cover": "./146.jpg",
    "year": "2011",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧,剧情",
    "category": "动画奇幻",
    "rating": 9.3,
    "description": "被全校称为“公交车”的十五岁女孩,决定用恶搞报名“最下流女孩”选美来反击。",
    "tags": [
      "青春期",
      "女性",
      "成长",
      "幽默",
      "叛逆"
    ]
  },
  {
    "title": "我想我爱她",
    "url": "./movie-1947.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情,剧情,LGBT",
    "category": "亚洲精选",
    "rating": 8.3,
    "description": "女孩一直暗恋自己的闺蜜,毕业前她决定表白,却发现闺蜜正在准备向另一个女孩求婚。",
    "tags": [
      "同性",
      "暗恋",
      "闺蜜",
      "毕业季",
      "青春"
    ]
  },
  {
    "title": "笼中格斗王第一季",
    "url": "./movie-1948.html",
    "cover": "./148.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作/剧情",
    "category": "动作冒险",
    "rating": 9.7,
    "description": "为了给妹妹赚取医药费,外卖小哥踏进地下黑拳笼子,却发现对手是自己失散多年的亲哥。",
    "tags": [
      "MMA",
      "底层",
      "格斗",
      "现实主义",
      "兄弟情"
    ]
  },
  {
    "title": "莫哈维沙漠",
    "url": "./movie-1949.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "西部/惊悚",
    "category": "剧情故事",
    "rating": 9.8,
    "description": "一名退役狙击手在莫哈韦沙漠被三伙毒贩追杀,他只带了一把刀和一壶水。",
    "tags": [
      "沙漠",
      "生存",
      "复仇",
      "公路",
      "硬核"
    ]
  },
  {
    "title": "春闺初恋",
    "url": "./movie-1950.html",
    "cover": "./150.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装,爱情",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "她暗恋邻家少爷十年,嫁入他家后才发现,他也在暗恋她,但他暗恋的是她的姐姐。",
    "tags": [
      "甜虐交织",
      "青梅竹马",
      "宅斗"
    ]
  },
  {
    "title": "失乐园",
    "url": "./movie-1951.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情/悬疑/伦理",
    "category": "动画奇幻",
    "rating": 9.0,
    "description": "一对丧子的夫妇买下已故情色小说家的AI数字灵魂,却发现“他”正在引导他们重演一场完美谋杀。",
    "tags": [
      "AI伦理",
      "虚拟永生",
      "婚姻崩坏",
      "宗教符号",
      "反转"
    ]
  },
  {
    "title": "帐棚顶上的马戏团艺人",
    "url": "./movie-1952.html",
    "cover": "./2.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,历史,艺术",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "二战结束后,一个瘸腿小丑在帐篷顶上不走下来,用荒诞表演控诉整个沉默的村庄。",
    "tags": [
      "战后创伤",
      "小丑",
      "流浪剧团",
      "黑色幽默",
      "公路片"
    ]
  },
  {
    "title": "运动者联盟",
    "url": "./movie-1953.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧/运动",
    "category": "欧美电影",
    "rating": 8.6,
    "description": "五个被校队开除的“废柴”学生,为了一个荒唐的赌约,组成了史上最不靠谱的田径联盟。",
    "tags": [
      "热血",
      "逆袭",
      "搞笑",
      "团队"
    ]
  },
  {
    "title": "双面名模",
    "url": "./movie-1954.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑,爱情",
    "category": "最新推荐",
    "rating": 8.1,
    "description": "温柔内向的哑女模特被姐姐强行推入名利场,却在头部受到撞击后,觉醒了一个强势狠戾的第二人格。",
    "tags": [
      "双重人格",
      "娱乐圈",
      "复仇",
      "时尚"
    ]
  },
  {
    "title": "美丽的时节",
    "url": "./movie-1955.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情,家庭,时代",
    "category": "国产热映",
    "rating": 9.6,
    "description": "1978年,三个知青家庭的子女在返城浪潮中,用青春书写了属于他们的黄金时代。",
    "tags": [
      "知青",
      "返城",
      "改革开放",
      "亲情",
      "岁月"
    ]
  },
  {
    "title": "宝岛妖后",
    "url": "./movie-1956.html",
    "cover": "./6.jpg",
    "year": "1996",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖历史",
    "category": "动作冒险",
    "rating": 8.8,
    "description": "根据清末台湾抗日义军女首领的传说改编,揭开一段被诅咒的历史。",
    "tags": [
      "台湾",
      "民间传说",
      "惊悚",
      "古装"
    ]
  },
  {
    "title": "古惑女2",
    "url": "./movie-1957.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "最新推荐",
    "rating": 9.4,
    "description": "社团大姐去世后,她那个正在读法律系的女儿被迫接班,用法庭手段清理江湖。",
    "tags": [
      "古惑仔",
      "女性江湖",
      "港产片",
      "暴力美学",
      "复仇"
    ]
  },
  {
    "title": "蠢蛋告别式",
    "url": "./movie-1958.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧、剧情",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "一个一事无成的中年男子决定给自己办一场生前告别式,却因发错请帖把死对头、前妻和黑道大哥同时请到了现场。",
    "tags": [
      "台湾",
      "葬礼",
      "乌龙",
      "和解",
      "黑色幽默"
    ]
  },
  {
    "title": "贼哥贼弟",
    "url": "./movie-1959.html",
    "cover": "./9.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧,犯罪,动作",
    "category": "动画奇幻",
    "rating": 9.9,
    "description": "一对被黑帮抛弃的废柴兄弟,为活命假冒顶级杀手,却意外搅动了整个地下世界。",
    "tags": [
      "兄弟",
      "乌龙",
      "黑帮",
      "反转",
      "港式幽默"
    ]
  },
  {
    "title": "位元",
    "url": "./movie-1960.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻/犯罪",
    "category": "喜剧爱情",
    "rating": 8.4,
    "description": "在近未来的香港,记忆可以像文件一样拷贝和买卖,一个专门帮人“洗掉”痛苦记忆的地下黑客,接到了一个让他自己都想删除的订单。",
    "tags": [
      "赛博朋克",
      "数据黑市",
      "记忆盗窃",
      "港味"
    ]
  },
  {
    "title": "008情报员反雷达",
    "url": "./movie-1961.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧",
    "category": "综艺纪实",
    "rating": 8.1,
    "description": "香港“情报局”最不靠谱的特工008,用菜市场买的道具完成了国家级反雷达任务。",
    "tags": [
      "致敬007",
      "土法特工",
      "港式无厘头",
      "高科技"
    ]
  },
  {
    "title": "持续发力纵深推进",
    "url": "./movie-1962.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "纪实/反腐/政治",
    "category": "动画奇幻",
    "rating": 9.8,
    "description": "虚构的临海省纪委专案组,在三年内连根拔起一个横跨政商两界的腐败网络,涉及副省级高官七人。",
    "tags": [
      "真实案例改编",
      "纪检监察",
      "反贪风暴",
      "群像剧"
    ]
  },
  {
    "title": "忠奸人",
    "url": "./movie-1963.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪剧情",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "FBI最年轻的卧底探员成功潜入黑帮,却发现自己其实是帮派老大的亲生儿子。",
    "tags": [
      "卧底",
      "伦理",
      "双重身份",
      "家族"
    ]
  },
  {
    "title": "一路有戏",
    "url": "./movie-1964.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/公路",
    "category": "喜剧爱情",
    "rating": 9.2,
    "description": "一个跑龙套三十年的老爸,带着辍学的儿子开车去北京追一个群演名额,一路上戏瘾发作演出各种角色。",
    "tags": [
      "戏痴父子",
      "公路逐梦",
      "荒诞笑料"
    ]
  },
  {
    "title": "舞浪狂潮",
    "url": "./movie-1965.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,歌舞",
    "category": "最新推荐",
    "rating": 8.9,
    "description": "聋哑女孩智恩通过地板震动感受节奏,带领一支杂牌舞团向全国大赛发起冲击。",
    "tags": [
      "街舞",
      "聋哑",
      "母女",
      "比赛"
    ]
  },
  {
    "title": "糟糕历史第六季",
    "url": "./movie-1966.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧,历史",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "第六季将镜头对准了冷战时期的荒诞日常,用一贯的屎尿屁风格解构了核恐慌、间谍热和太空竞赛。",
    "tags": [
      "教育",
      "荒诞",
      "讽刺",
      "歌舞"
    ]
  },
  {
    "title": "狗狗人生",
    "url": "./movie-1967.html",
    "cover": "./17.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/冒险",
    "category": "喜剧爱情",
    "rating": 8.1,
    "description": "一事无成的废柴继承了一条会说话的退役警犬,这条狗不仅毒舌,还教他如何追女孩、打黑帮、赢回人生。",
    "tags": [
      "宠物",
      "公路片",
      "屌丝逆袭"
    ]
  },
  {
    "title": "新年来啦之大闹除夕",
    "url": "./movie-1968.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧/动画/奇幻",
    "category": "悬疑惊悚",
    "rating": 8.0,
    "description": "调皮的年兽之子误入人间除夕夜,和三个熊孩子联手拯救被“无聊怪”霸占的春节。",
    "tags": [
      "春节",
      "年兽",
      "冒险",
      "合家欢"
    ]
  },
  {
    "title": "假面复仇",
    "url": "./movie-1969.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/犯罪",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "一个戴着白色面具的神秘人,每晚直播惩罚“有罪之人”,百万网友投票决定其生死。",
    "tags": [
      "面具",
      "直播",
      "私刑"
    ]
  },
  {
    "title": "龙凤花烛",
    "url": "./movie-1970.html",
    "cover": "./20.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑,民国,爱情",
    "category": "悬疑惊悚",
    "rating": 9.6,
    "description": "民国豪门姜家有个传统:新人必须在点燃龙凤花烛的当晚守夜,因为任何让蜡烛熄灭的人,都会在一年内离奇死去。",
    "tags": [
      "豪门",
      "诅咒",
      "宅斗",
      "反转"
    ]
  },
  {
    "title": "国境之南",
    "url": "./movie-1971.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/历史/文艺",
    "category": "悬疑惊悚",
    "rating": 9.1,
    "description": "1987年两岸开放探亲,台湾老兵李广平带着一封信回到山东老家,却发现等他四十年的未婚妻刚刚去世三天。",
    "tags": [
      "跨海之恋",
      "眷村",
      "两岸"
    ]
  },
  {
    "title": "女子监狱第二季",
    "url": "./movie-1972.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "TV剧集",
    "genre": "剧情,犯罪,喜剧",
    "category": "综艺纪实",
    "rating": 8.9,
    "description": "第二季引入新狱长和转监黑帮女王,监狱权力格局彻底洗牌。",
    "tags": [
      "女性群像",
      "监狱",
      "社会议题",
      "黑色幽默"
    ]
  },
  {
    "title": "我的妈咪不是人",
    "url": "./movie-1973.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧,科幻,家庭",
    "category": "欧美电影",
    "rating": 8.7,
    "description": "儿子发现全能“超人妈妈”是机器人,而她为保护自己正逐渐故障。",
    "tags": [
      "机器人妈妈",
      "育儿",
      "冲突",
      "治愈"
    ]
  },
  {
    "title": "崛起之路",
    "url": "./movie-1974.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,年代,创业",
    "category": "最新推荐",
    "rating": 8.4,
    "description": "三个乡镇青年从倒卖电子表起家,用四十年时间,将一家螺丝厂打造成撼动全球的通讯巨头。",
    "tags": [
      "改革开放",
      "制造业",
      "奋斗",
      "史诗"
    ]
  },
  {
    "title": "机智牢房生活国语",
    "url": "./movie-1975.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧,剧情",
    "category": "港台佳片",
    "rating": 9.9,
    "description": "顶级棒球投手因见义勇为打伤恶人入狱,却在监狱里靠“投球”智慧混成了狱中大佬。",
    "tags": [
      "监狱",
      "黑色幽默",
      "人性",
      "国语配音",
      "群像"
    ]
  },
  {
    "title": "夏雨来",
    "url": "./movie-1976.html",
    "cover": "./26.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "乡土喜剧",
    "category": "动画奇幻",
    "rating": 8.9,
    "description": "潮汕地区家喻户晓的传奇秀才“夏雨来”,用各种歪才和整蛊术,专门惩治欺压百姓的地主恶霸。",
    "tags": [
      "潮汕",
      "秀才",
      "机智",
      "斗地主",
      "民间故事"
    ]
  },
  {
    "title": "通灵:一个新的开始",
    "url": "./movie-1977.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻,悬疑,剧情",
    "category": "综艺纪实",
    "rating": 9.4,
    "description": "一个能看见亡灵的厌世高中女生,为了完成一百个委托,意外掀起了生者与死者的巨大风暴。",
    "tags": [
      "灵媒",
      "重生",
      "治愈",
      "单元剧"
    ]
  },
  {
    "title": "垃圾箱里的婴儿",
    "url": "./movie-1978.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情/社会",
    "category": "家庭青春",
    "rating": 9.0,
    "description": "靠捡垃圾为生的流浪汉在垃圾桶里发现了一个弃婴,为了养活她,他必须重返抛弃他的社会。",
    "tags": [
      "弃婴",
      "救赎",
      "底层",
      "人性"
    ]
  },
  {
    "title": "突然的喜欢",
    "url": "./movie-1979.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "浪漫/喜剧",
    "category": "亚洲精选",
    "rating": 8.8,
    "description": "毒舌漫画家为了取材,和铁哥们签下“一个月恋爱合约”。",
    "tags": [
      "青梅竹马",
      "契约恋爱",
      "反差萌",
      "高甜"
    ]
  },
  {
    "title": "吓破胆",
    "url": "./movie-1980.html",
    "cover": "./30.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖/惊悚",
    "category": "综艺纪实",
    "rating": 8.3,
    "description": "五个网红去闹鬼村落直播探险,却发现村长为了保护他们编造的鬼故事,竟然全部成真了。",
    "tags": [
      "民俗",
      "降头",
      "直播",
      "探险",
      "伪纪录片"
    ]
  },
  {
    "title": "寂寞调香师",
    "url": "./movie-1981.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情,爱情",
    "category": "喜剧爱情",
    "rating": 8.2,
    "description": "一位失明的天才调香师,为一位即将离世的陌生老人调配“记忆中的味道”,却治好了自己的心伤。",
    "tags": [
      "文艺",
      "嗅觉",
      "治愈",
      "孤独"
    ]
  },
  {
    "title": "爱子十六岁",
    "url": "./movie-1982.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情,家庭,悬疑",
    "category": "港台佳片",
    "rating": 9.8,
    "description": "单亲妈妈发现乖巧女儿手机里存着大量被施暴的视频,但她坚持说那是“游戏”。",
    "tags": [
      "母亲",
      "女儿",
      "双相情感障碍",
      "校园暴力"
    ]
  },
  {
    "title": "那孩子出生了......",
    "url": "./movie-1983.html",
    "cover": "./33.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑惊悚",
    "category": "港台佳片",
    "rating": 9.7,
    "description": "不孕妻子奇迹怀孕,却发现家族世代都在等待这个“八月婴儿”作为祭品。",
    "tags": [
      "怀孕恐怖",
      "伦理反转",
      "邪教献祭",
      "民俗怪谈"
    ]
  },
  {
    "title": "空中怪客",
    "url": "./movie-1984.html",
    "cover": "./34.jpg",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "悬疑,奇幻,剧情",
    "category": "国产热映",
    "rating": 9.1,
    "description": "一架横跨太平洋的航班上,一名乘客每次闭眼醒来都会变成另一个人。",
    "tags": [
      "飞机乘客",
      "时间循环",
      "身份迷雾",
      "心理"
    ]
  },
  {
    "title": "紫色计程车",
    "url": "./movie-1985.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情/奇幻",
    "category": "家庭青春",
    "rating": 8.9,
    "description": "深夜搭乘这辆紫色计程车的乘客,都会去往一个他们从未计划却必须抵达的地方。",
    "tags": [
      "计程车",
      "紫色",
      "乘客",
      "奇遇",
      "疗愈"
    ]
  },
  {
    "title": "王国",
    "url": "./movie-1986.html",
    "cover": "./36.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "genre": "古装/惊悚/政治",
    "category": "家庭青春",
    "rating": 8.8,
    "description": "世子李苍刚平定“血疫”,却在王宫地下的冰柜里,发现了被冻成标本的上万具丧尸。",
    "tags": [
      "丧尸",
      "宫斗",
      "权谋",
      "瘟疫"
    ]
  },
  {
    "title": "糊涂保姆",
    "url": "./movie-1987.html",
    "cover": "./37.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/悬疑",
    "category": "动画奇幻",
    "rating": 8.0,
    "description": "失业女演员冒充专业保姆入职富豪家,当晚就撞见一桩谋杀案。",
    "tags": [
      "身份错位",
      "黑色幽默",
      "犯罪",
      "女性"
    ]
  },
  {
    "title": "不解之缘",
    "url": "./movie-1988.html",
    "cover": "./38.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻",
    "category": "欧美电影",
    "rating": 9.8,
    "description": "一对恋人在每次轮回中都会相遇,但女方总会忘记一切,只有男方带着记忆痛苦千年。",
    "tags": [
      "宿命",
      "轮回",
      "爱情",
      "悬疑",
      "文艺"
    ]
  },
  {
    "title": "黄金神威",
    "url": "./movie-1989.html",
    "cover": "./39.jpg",
    "year": "2018",
    "region": "日本",
    "type": "动画",
    "genre": "冒险/历史/美食",
    "category": "港台佳片",
    "rating": 9.1,
    "description": "为了寻找传说中的黄金,前军人“不死身”杉元与阿伊努少女阿席莉帕在北海道荒野展开了一场生存竞赛。",
    "tags": [
      "北海道",
      "寻宝",
      "生存",
      "阿伊努文化"
    ]
  },
  {
    "title": "时光逆爱90年",
    "url": "./movie-1990.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情、科幻",
    "category": "动画奇幻",
    "rating": 9.4,
    "description": "一块古董表将现代女孩甩回90年前,她必须让穷画家爱上自己,才能回到未来。",
    "tags": [
      "穿越时空",
      "催泪",
      "年代反差"
    ]
  },
  {
    "title": "最美中轴线第三季",
    "url": "./movie-1991.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐,文化,真人秀",
    "category": "亚洲精选",
    "rating": 9.1,
    "description": "音乐人深入北京中轴线尚未开放的隐秘角落,在深夜闭馆后为历史古迹创作原创歌曲。",
    "tags": [
      "中轴线",
      "音乐采风",
      "北京",
      "历史",
      "原创歌曲"
    ]
  },
  {
    "title": "落花时节国语",
    "url": "./movie-1992.html",
    "cover": "./42.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情,家庭,爱情",
    "category": "喜剧爱情",
    "rating": 8.6,
    "description": "相隔二十年的世仇,两代人的爱恨纠葛,简宏成与宁宥能否在落花时节重修旧好?",
    "tags": [
      "时代变迁",
      "世仇",
      "中年爱情",
      "现实",
      "原著改编"
    ]
  },
  {
    "title": "药炉红粉",
    "url": "./movie-1993.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑/古装/女性",
    "category": "港台佳片",
    "rating": 8.7,
    "description": "明朝女医谈允贤的孙女继承药炉后,发现祖母手札里藏着三桩未破的皇室毒杀案。",
    "tags": [
      "明代女医",
      "宫廷毒杀",
      "药案反转",
      "姐妹反目"
    ]
  },
  {
    "title": "绝密突围",
    "url": "./movie-1994.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作,战争",
    "category": "国产热映",
    "rating": 8.3,
    "description": "为了炸毁一座关键的水门桥,一支七人组成的爆破小队穿着敌军军服,在炮火中执行一场不被记录的任务。",
    "tags": [
      "抗美援朝",
      "穿插连",
      "爆破",
      "兄弟情"
    ]
  },
  {
    "title": "土耳其射击",
    "url": "./movie-1995.html",
    "cover": "./45.jpg",
    "year": "2022",
    "region": "土耳其/美国",
    "type": "电影",
    "genre": "动作/犯罪/运动",
    "category": "家庭青春",
    "rating": 9.7,
    "description": "一名奥运会射击银牌得主退役后卷入伊斯坦布尔地下枪斗黑市,为了救女儿,他必须用奥运规则挑战毫无规则的亡命之徒。",
    "tags": [
      "枪战",
      "竞技",
      "复仇",
      "异域风情"
    ]
  },
  {
    "title": "决斗的人",
    "url": "./movie-1996.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "历史/剧情",
    "category": "剧情故事",
    "rating": 9.6,
    "description": "两个骑士因为一次擦肩而过的眼神,在三十年里进行了十二次决斗,直至忘记为何开始。",
    "tags": [
      "骑士",
      "荣誉",
      "偏执",
      "中世纪",
      "双雄"
    ]
  },
  {
    "title": "新白蛇传之九尾狐",
    "url": "./movie-1997.html",
    "cover": "./47.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情/奇幻",
    "category": "国产热映",
    "rating": 9.0,
    "description": "白素贞和许仙的爱情故事里,还有一只为爱牺牲的九尾狐,她才是最大的意难平。",
    "tags": [
      "白蛇传",
      "九尾狐",
      "网络大电影",
      "虐恋",
      "古装"
    ]
  },
  {
    "title": "极速快感",
    "url": "./movie-1998.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "喜剧爱情",
    "rating": 9.0,
    "description": "天才女黑客为替哥哥报仇,黑入全城监控系统,与杀手展开智能公路对决。",
    "tags": [
      "飙车",
      "复仇",
      "改装车",
      "街头赛",
      "黑客"
    ]
  },
  {
    "title": "消失的情人节2023",
    "url": "./movie-1999.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情,奇幻,喜剧",
    "category": "家庭青春",
    "rating": 8.6,
    "description": "情人节当天,女孩发现全世界都少了24小时,只有她的记忆完整;而那个消失的24小时里,一个男孩偷偷陪了她一整天。",
    "tags": [
      "情人节",
      "时间消失",
      "逆向叙事",
      "错位爱情",
      "陈玉勋"
    ]
  },
  {
    "title": "我们拥有夜晚",
    "url": "./movie-2000.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情,犯罪",
    "category": "港台佳片",
    "rating": 8.5,
    "description": "警长父亲和黑帮儿子,在同一个夜晚同时面临生死抉择,而他们彼此都不知道对方的真实身份。",
    "tags": [
      "父子情",
      "卧底",
      "俄克拉荷马",
      "家族悲剧"
    ]
  }
];
