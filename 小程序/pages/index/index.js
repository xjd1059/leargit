Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: {
      "count": 20,
      "start": 0,
      "total": 24,
      "subjects": [{
        "rating": {
          "max": 10,
          "average": 8.5,
          "stars": "45",
          "min": 0
        },
        "genres": ["剧情", "动作", "犯罪"],
        "title": "红海行动",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274761\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1489386626.47.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1489386626.47.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1489386626.47.webp"
          },
          "name": "张译",
          "id": "1274761"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1354442\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1458138265.51.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1458138265.51.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1458138265.51.webp"
          },
          "name": "黄景瑜",
          "id": "1354442"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1272245\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49399.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49399.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49399.webp"
          },
          "name": "海清",
          "id": "1272245"
        }],
        "collect_count": 311828,
        "original_title": "红海行动",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1275075\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372934445.18.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372934445.18.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1372934445.18.webp"
          },
          "name": "林超贤",
          "id": "1275075"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514119443.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514119443.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514119443.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26861685\/",
        "id": "26861685"
      }, {
        "rating": {
          "max": 10,
          "average": 6.0,
          "stars": "30",
          "min": 0
        },
        "genres": ["动画", "冒险", "家庭"],
        "title": "飞鸟历险记",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1325771\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1356409123.23.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1356409123.23.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1356409123.23.webp"
          },
          "name": "亚瑟·杜彭",
          "id": "1325771"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1027553\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46644.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46644.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46644.webp"
          },
          "name": "莎拉·弗里斯蒂",
          "id": "1027553"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1146937\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1371536557.48.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1371536557.48.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1371536557.48.webp"
          },
          "name": "布鲁诺·萨拉曼",
          "id": "1146937"
        }],
        "collect_count": 454,
        "original_title": "Gus - Petit oiseau, grand voyage",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1379647\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1503308250.72.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1503308250.72.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1503308250.72.webp"
          },
          "name": "克里斯蒂安·德·维塔",
          "id": "1379647"
        }],
        "year": "2014",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514910133.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514910133.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514910133.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/25899334\/",
        "id": "25899334"
      }, {
        "rating": {
          "max": 10,
          "average": 7.1,
          "stars": "35",
          "min": 0
        },
        "genres": ["喜剧", "动作", "犯罪"],
        "title": "唐人街探案2",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274388\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1356403251.95.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1356403251.95.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1356403251.95.webp"
          },
          "name": "王宝强",
          "id": "1274388"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1336305\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473508881.63.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473508881.63.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1473508881.63.webp"
          },
          "name": "刘昊然",
          "id": "1336305"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274979\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518431956.11.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518431956.11.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518431956.11.webp"
          },
          "name": "肖央",
          "id": "1274979"
        }],
        "collect_count": 279519,
        "original_title": "唐人街探案2",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274763\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469073193.92.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469073193.92.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1469073193.92.webp"
          },
          "name": "陈思诚",
          "id": "1274763"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511355624.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511355624.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511355624.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26698897\/",
        "id": "26698897"
      }, {
        "rating": {
          "max": 10,
          "average": 7.5,
          "stars": "40",
          "min": 0
        },
        "genres": ["喜剧", "动画", "冒险"],
        "title": "比得兔",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1017966\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1449532609.88.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1449532609.88.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1449532609.88.webp"
          },
          "name": "詹姆斯·柯登",
          "id": "1017966"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1313116\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1361026097.22.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1361026097.22.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1361026097.22.webp"
          },
          "name": "多姆纳尔·格里森",
          "id": "1313116"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1022562\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p3186.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p3186.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p3186.webp"
          },
          "name": "萝丝·拜恩",
          "id": "1022562"
        }],
        "collect_count": 14687,
        "original_title": "Peter Rabbit",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274281\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12038.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12038.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12038.webp"
          },
          "name": "威尔·古勒",
          "id": "1274281"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2515434674.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2515434674.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2515434674.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26649604\/",
        "id": "26649604"
      }, {
        "rating": {
          "max": 10,
          "average": 8.6,
          "stars": "45",
          "min": 0
        },
        "genres": ["剧情", "喜剧", "动作"],
        "title": "小萝莉的猴神大叔",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1017831\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1355291691.29.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1355291691.29.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1355291691.29.webp"
          },
          "name": "萨尔曼·汗",
          "id": "1017831"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1350825\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1448788341.64.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1448788341.64.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1448788341.64.webp"
          },
          "name": "哈莎莉·马洛特拉",
          "id": "1350825"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1049635\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5568.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5568.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5568.webp"
          },
          "name": "卡琳娜·卡普尔",
          "id": "1049635"
        }],
        "collect_count": 106888,
        "original_title": "Bajrangi Bhaijaan",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1304615\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57344.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57344.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57344.webp"
          },
          "name": "卡比尔·汗",
          "id": "1304615"
        }],
        "year": "2015",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510956726.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510956726.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510956726.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26393561\/",
        "id": "26393561"
      }, {
        "rating": {
          "max": 10,
          "average": 0,
          "stars": "00",
          "min": 0
        },
        "genres": ["纪录片"],
        "title": "厉害了，我的国",
        "casts": [],
        "collect_count": 125,
        "original_title": "厉害了，我的国",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1322050\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p52221.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p52221.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p52221.webp"
          },
          "name": "卫铁",
          "id": "1322050"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514293556.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514293556.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514293556.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/30152451\/",
        "id": "30152451"
      }, {
        "rating": {
          "max": 10,
          "average": 5.2,
          "stars": "25",
          "min": 0
        },
        "genres": ["喜剧", "奇幻"],
        "title": "捉妖记2",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1115918\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p33525.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p33525.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p33525.webp"
          },
          "name": "梁朝伟",
          "id": "1115918"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1275542\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21559.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21559.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21559.webp"
          },
          "name": "白百何",
          "id": "1275542"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274628\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46505.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46505.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p46505.webp"
          },
          "name": "井柏然",
          "id": "1274628"
        }],
        "collect_count": 101322,
        "original_title": "捉妖记2",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1287124\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p42488.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p42488.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p42488.webp"
          },
          "name": "许诚毅",
          "id": "1287124"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509643816.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509643816.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509643816.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26575103\/",
        "id": "26575103"
      }, {
        "rating": {
          "max": 10,
          "average": 8.7,
          "stars": "45",
          "min": 0
        },
        "genres": ["剧情", "犯罪"],
        "title": "三块广告牌",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1010548\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436865941.42.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436865941.42.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1436865941.42.webp"
          },
          "name": "弗兰西斯·麦克多蒙德",
          "id": "1010548"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1053560\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p501.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p501.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p501.webp"
          },
          "name": "伍迪·哈里森",
          "id": "1053560"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1047972\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1358812490.58.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1358812490.58.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1358812490.58.webp"
          },
          "name": "山姆·洛克威尔",
          "id": "1047972"
        }],
        "collect_count": 165030,
        "original_title": "Three Billboards Outside Ebbing, Missouri",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1000304\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1515679206.2.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1515679206.2.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1515679206.2.webp"
          },
          "name": "马丁·麦克唐纳",
          "id": "1000304"
        }],
        "year": "2017",
        "images": {
          "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510081688.webp",
          "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510081688.webp",
          "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510081688.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26611804\/",
        "id": "26611804"
      }, {
        "rating": {
          "max": 10,
          "average": 7.2,
          "stars": "35",
          "min": 0
        },
        "genres": ["剧情", "犯罪", "悬疑"],
        "title": "金钱世界",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1049491\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p20908.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p20908.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p20908.webp"
          },
          "name": "米歇尔·威廉姆斯",
          "id": "1049491"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1036321\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p42033.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p42033.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p42033.webp"
          },
          "name": "克里斯托弗·普卢默",
          "id": "1036321"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1035674\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1407766093.88.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1407766093.88.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1407766093.88.webp"
          },
          "name": "马克·沃尔伯格",
          "id": "1035674"
        }],
        "collect_count": 8925,
        "original_title": "All the Money in the World",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1054416\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p588.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p588.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p588.webp"
          },
          "name": "雷德利·斯科特",
          "id": "1054416"
        }],
        "year": "2017",
        "images": {
          "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2513253129.webp",
          "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2513253129.webp",
          "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2513253129.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26995719\/",
        "id": "26995719"
      }, {
        "rating": {
          "max": 10,
          "average": 2.8,
          "stars": "15",
          "min": 0
        },
        "genres": ["剧情", "喜剧"],
        "title": "闺蜜2",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1023827\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48497.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48497.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p48497.webp"
          },
          "name": "薛凯琪",
          "id": "1023827"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274316\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p31663.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p31663.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p31663.webp"
          },
          "name": "陈意涵",
          "id": "1274316"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1257882\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1425652900.34.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1425652900.34.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1425652900.34.webp"
          },
          "name": "张钧甯",
          "id": "1257882"
        }],
        "collect_count": 5075,
        "original_title": "閨蜜2之單挑越南黑幫",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274280\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5139.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5139.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p5139.webp"
          },
          "name": "黄真真",
          "id": "1274280"
        }],
        "year": "2018",
        "images": {
          "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514909788.webp",
          "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514909788.webp",
          "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514909788.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/25856453\/",
        "id": "25856453"
      }, {
        "rating": {
          "max": 10,
          "average": 4.7,
          "stars": "25",
          "min": 0
        },
        "genres": ["喜剧", "奇幻"],
        "title": "祖宗十九代",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1317663\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p40756.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p40756.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p40756.webp"
          },
          "name": "岳云鹏",
          "id": "1317663"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1000525\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p58967.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p58967.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p58967.webp"
          },
          "name": "吴京",
          "id": "1000525"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1275317\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363935001.36.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363935001.36.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1363935001.36.webp"
          },
          "name": "吴秀波",
          "id": "1275317"
        }],
        "collect_count": 19644,
        "original_title": "祖宗十九代",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274305\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p6569.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p6569.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p6569.webp"
          },
          "name": "郭德纲",
          "id": "1274305"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511560763.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511560763.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511560763.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/27114417\/",
        "id": "27114417"
      }, {
        "rating": {
          "max": 10,
          "average": 4.7,
          "stars": "25",
          "min": 0
        },
        "genres": ["喜剧", "爱情", "奇幻"],
        "title": "西游记女儿国",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1041390\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49475.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49475.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p49475.webp"
          },
          "name": "郭富城",
          "id": "1041390"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1275721\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p36925.webp"
          },
          "name": "冯绍峰",
          "id": "1275721"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1275620\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1498822880.67.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1498822880.67.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1498822880.67.webp"
          },
          "name": "赵丽颖",
          "id": "1275620"
        }],
        "collect_count": 50935,
        "original_title": "西游记女儿国",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274240\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1378782533.9.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1378782533.9.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1378782533.9.webp"
          },
          "name": "郑保瑞",
          "id": "1274240"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511375626.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511375626.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511375626.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/25829175\/",
        "id": "25829175"
      }, {
        "rating": {
          "max": 10,
          "average": 6.8,
          "stars": "35",
          "min": 0
        },
        "genres": ["喜剧", "动画", "冒险"],
        "title": "熊出没·变形记",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1336920\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1451196460.57.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1451196460.57.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1451196460.57.webp"
          },
          "name": "张伟",
          "id": "1336920"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1336919\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1451196097.21.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1451196097.21.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1451196097.21.webp"
          },
          "name": "张秉君",
          "id": "1336919"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1336930\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1497954031.89.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1497954031.89.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1497954031.89.webp"
          },
          "name": "谭笑",
          "id": "1336930"
        }],
        "collect_count": 5663,
        "original_title": "熊出没·变形记",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1336904\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519556086.74.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519556086.74.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1519556086.74.webp"
          },
          "name": "丁亮",
          "id": "1336904"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1336917\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492836254.8.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492836254.8.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1492836254.8.webp"
          },
          "name": "林汇达",
          "id": "1336917"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2506889386.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2506889386.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2506889386.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/27176717\/",
        "id": "27176717"
      }, {
        "rating": {
          "max": 10,
          "average": 8.2,
          "stars": "45",
          "min": 0
        },
        "genres": ["剧情", "爱情"],
        "title": "爱在记忆消逝前",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1054390\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21169.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21169.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p21169.webp"
          },
          "name": "海伦·米伦",
          "id": "1054390"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1010556\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p47802.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p47802.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p47802.webp"
          },
          "name": "唐纳德·萨瑟兰",
          "id": "1010556"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1027309\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12804.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12804.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p12804.webp"
          },
          "name": "简·默勒尼",
          "id": "1027309"
        }],
        "collect_count": 7521,
        "original_title": "The Leisure Seeker",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1032708\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22206.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22206.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22206.webp"
          },
          "name": "保罗·维尔齐",
          "id": "1032708"
        }],
        "year": "2017",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2513341534.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2513341534.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2513341534.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/3036465\/",
        "id": "3036465"
      }, {
        "rating": {
          "max": 10,
          "average": 6.8,
          "stars": "35",
          "min": 0
        },
        "genres": ["动作", "科幻", "冒险"],
        "title": "黑豹",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1327680\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518765586.91.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518765586.91.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1518765586.91.webp"
          },
          "name": "查德维克·博斯曼",
          "id": "1327680"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1334862\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1385433474.91.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1385433474.91.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1385433474.91.webp"
          },
          "name": "露皮塔·尼永奥",
          "id": "1334862"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1107320\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1398492835.92.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1398492835.92.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1398492835.92.webp"
          },
          "name": "迈克尔·B·乔丹",
          "id": "1107320"
        }],
        "collect_count": 8051,
        "original_title": "Black Panther",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1326531\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/pPjZDSsF679kcel_avatar_uploaded1359524956.71.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/pPjZDSsF679kcel_avatar_uploaded1359524956.71.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/pPjZDSsF679kcel_avatar_uploaded1359524956.71.webp"
          },
          "name": "瑞恩·库格勒",
          "id": "1326531"
        }],
        "year": "2018",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512123434.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512123434.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512123434.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/6390825\/",
        "id": "6390825"
      }, {
        "rating": {
          "max": 10,
          "average": 7.7,
          "stars": "40",
          "min": 0
        },
        "genres": ["剧情", "爱情", "战争"],
        "title": "无问西东",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1041014\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1359895311.0.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1359895311.0.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1359895311.0.webp"
          },
          "name": "章子怡",
          "id": "1041014"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1041404\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1472787652.32.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1472787652.32.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1472787652.32.webp"
          },
          "name": "黄晓明",
          "id": "1041404"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1077991\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453574419.48.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453574419.48.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1453574419.48.webp"
          },
          "name": "张震",
          "id": "1077991"
        }],
        "collect_count": 229922,
        "original_title": "无问西东",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1313682\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19485.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19485.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p19485.webp"
          },
          "name": "李芳芳",
          "id": "1313682"
        }],
        "year": "2012",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2507572275.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2507572275.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2507572275.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/6874741\/",
        "id": "6874741"
      }, {
        "rating": {
          "max": 10,
          "average": 7.9,
          "stars": "40",
          "min": 0
        },
        "genres": ["剧情", "传记", "歌舞"],
        "title": "马戏之王",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1010508\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22036.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22036.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p22036.webp"
          },
          "name": "休·杰克曼",
          "id": "1010508"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1049491\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p20908.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p20908.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p20908.webp"
          },
          "name": "米歇尔·威廉姆斯",
          "id": "1049491"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1016676\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p56613.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p56613.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p56613.webp"
          },
          "name": "扎克·埃夫隆",
          "id": "1016676"
        }],
        "collect_count": 59540,
        "original_title": "The Greatest Showman",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1344735\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1498127697.1.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1498127697.1.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1498127697.1.webp"
          },
          "name": "迈克尔·格雷西",
          "id": "1344735"
        }],
        "year": "2017",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511346392.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511346392.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511346392.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/3914513\/",
        "id": "3914513"
      }, {
        "rating": {
          "max": 10,
          "average": 4.0,
          "stars": "20",
          "min": 0
        },
        "genres": ["喜剧", "爱情", "科幻"],
        "title": "宇宙有爱浪漫同游",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1264887\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1486794435.79.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1486794435.79.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1486794435.79.webp"
          },
          "name": "李昇炫",
          "id": "1264887"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1274514\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379398896.7.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379398896.7.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1379398896.7.webp"
          },
          "name": "郭碧婷",
          "id": "1274514"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1275547\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p11386.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p11386.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p11386.webp"
          },
          "name": "白冰",
          "id": "1275547"
        }],
        "collect_count": 697,
        "original_title": "宇宙有爱浪漫同游",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1388350\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517905331.56.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517905331.56.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1517905331.56.webp"
          },
          "name": "陈思行",
          "id": "1388350"
        }],
        "year": "2018",
        "images": {
          "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512322548.webp",
          "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512322548.webp",
          "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2512322548.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26836837\/",
        "id": "26836837"
      }, {
        "rating": {
          "max": 10,
          "average": 8.7,
          "stars": "45",
          "min": 0
        },
        "genres": ["剧情", "儿童", "家庭"],
        "title": "奇迹男孩",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1332866\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456737567.18.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456737567.18.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1456737567.18.webp"
          },
          "name": "雅各布·特伦布莱",
          "id": "1332866"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1054532\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p8889.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p8889.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p8889.webp"
          },
          "name": "朱莉娅·罗伯茨",
          "id": "1054532"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1335870\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1383535512.2.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1383535512.2.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1383535512.2.webp"
          },
          "name": "伊扎贝拉·维多维奇",
          "id": "1335870"
        }],
        "collect_count": 122502,
        "original_title": "Wonder",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1070754\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57551.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57551.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p57551.webp"
          },
          "name": "斯蒂芬·卓博斯基",
          "id": "1070754"
        }],
        "year": "2017",
        "images": {
          "small": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2507709428.webp",
          "large": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2507709428.webp",
          "medium": "https://img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2507709428.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/26787574\/",
        "id": "26787574"
      }, {
        "rating": {
          "max": 10,
          "average": 7.4,
          "stars": "40",
          "min": 0
        },
        "genres": ["喜剧", "动画", "冒险"],
        "title": "公牛历险记",
        "casts": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1044883\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23477.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23477.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p23477.webp"
          },
          "name": "约翰·塞纳",
          "id": "1044883"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1319532\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1386531771.86.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1386531771.86.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1386531771.86.webp"
          },
          "name": "凯特·麦克金农",
          "id": "1319532"
        }, {
          "alt": "https:\/\/movie.douban.com\/celebrity\/1387308\/",
          "avatars": {
            "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1516269761.38.webp",
            "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1516269761.38.webp",
            "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1516269761.38.webp"
          },
          "name": "莉莉·戴",
          "id": "1387308"
        }],
        "collect_count": 18919,
        "original_title": "Ferdinand",
        "subtype": "movie",
        "directors": [{
          "alt": "https:\/\/movie.douban.com\/celebrity\/1009704\/",
          "avatars": {
            "small": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4833.webp",
            "large": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4833.webp",
            "medium": "https://img3.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p4833.webp"
          },
          "name": "卡洛斯·沙尔丹哈",
          "id": "1009704"
        }],
        "year": "2017",
        "images": {
          "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510825300.webp",
          "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510825300.webp",
          "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2510825300.webp"
        },
        "alt": "https:\/\/movie.douban.com\/subject\/25846857\/",
        "id": "25846857"
      }],
      "title": "正在上映的电影-北京"
    },
    imgUrls: [
      'https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2514119443.webp',
      'https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2511355624.webp',        'https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2509643816.webp',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1500,
    duration: 1000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
  },
  loadMovie(){
    wx.showToast({
      title:'正在加载',
      icon:'loading',
      duration:10000
    })
    let thispage = this;
    wx.request({
      url: 'https://api.github.com',
      header: { 'content-type':'application/json'},
      method: 'GET',
      success: function(res) {
        console.log(res)
        wx.hideToast()
      }
    })
  }
})