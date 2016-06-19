var china = [];
var node = [];
var hots = [];
var textAttr = {
    "fill": "#000",
    "font-size": "12px",
    "cursor": "pointer"
};
var attr = {
    "fill": "#97d6f5",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round"
};

var pointAttr = {
    "fill": "#FC341E",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round"
};

var circle = {
    "fill": "rgb(252, 52, 30)",
    "stroke-width": "0px",
    "opacity": 0
}

var shadow = {
    "fill": "#191e26",
    "stroke-width": 0
}

var wave1 = {
    "fill": "#952F26",
    "stroke-width": 0
}

var wave2 = {
    "fill": "#FC341E",
    "stroke-width": 0
}

var drop = {
    "stroke": "#FC341E",
    "fill": "none",
    "stroke-width": 3
}

var blue={
    "fill": "#97D6F5",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
var green = {   //绿色
    "fill": "#29AC80",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
var cyan = {    //青色
    "fill": "#51B133",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
var yellow = {  //黄色
    "fill": "#FFD914",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
var orange = {  //橙色
    "fill": "#FF9116",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
var red = { 
    "fill": "#00CED1",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}

var water={
    "fill": "#C1DCB9",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
var truered={
    "fill": "#FF5B26",
    "stroke": "#eee",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    "class": "test"
}
function attrs() {
    var f = ["#2A73AA", "#29AC80", "#51B133", "#FFD914", "#FF9116", "#FF5B26"];
    // return attr;
    return {
        "fill": f[Math.round(Math.random() * 9321321) % f.length],
        "stroke": "#eee",
        "stroke-width": 1,
        "stroke-linejoin": "round",
        "class": "test"
    };
}

function paintMap(R) {
    china.a = {
        name: "东园10号",
        path: R.path("M621 26L616 44L709 64L714 46C714 46 622 26 621 26Z").attr(blue)
    };
    china.b = {
        name: "东园8号",
        path: R.path("M636 63L631 82L722 100L727 84C727 84 638 62 636 63Z").attr(blue)
    };
    china.c = {
        name: "教职工宿舍西12-18",
        path: R.path("M852 61L833 153L950 179L976 93L852 61Z").attr(blue)
    };
    china.d = {
        name: "东园9号",
        path: R.path("M595 54L588 73L621 77L625 62C625 62 594 52 595 54Z").attr(blue)
    };
    china.e = {
        name: "东园7号",
        path: R.path("M591 113L586 126L626 136L629 125L591 113Z").attr(blue)
    };
    china.f = {
        name: "东园6栋",
        path: R.path("M659 118L716 132L714 150L654 138C654 138 661 118 659 118Z").attr(blue)
    };
    china.g = {
        name: "东园5栋",
        path: R.path("M588 148L626 158L623 171L585 162C585 162 588 146 588 148Z").attr(blue)
    };
    china.h = {
        name: "东园4栋",
        path: R.path("M649 156L706 171L702 189L647 175C647 175 651 155 649 156Z").attr(blue)
    };
    china.i = {
        name: "东园3栋",
        path: R.path("M582 186L623 194L620 210L580 200C580 200 584 184 582 186Z").attr(blue)
    };
    china.j = {
        name: "东园2栋",
        path: R.path("M635 194L696 209L694 226L632 210C632 210 637 193 635 194Z").attr(blue)
    };
    china.k = {
        name: "东园1栋",
        path: R.path("M587 220L690 245L685 265L581 241C581 241 589 219 587 220Z").attr(blue)
    };
    china.l = {
        name: "求知楼A",
        path: R.path("M786 685L850 698L853 707L846 734L795 722L772 716L776 692C776 692 788 684 786 685Z").attr(red)
    };
    china.m = {
        name: "求知楼B",
        path: R.path(" M771 720L757 776L832 794L837 766L826 763L824 770L786 764L780 756L797 732L796 724L771 720Z").attr(red)
    };
    china.du = {
        name: "笃行楼",
        path: R.path("M892 766L893 767L885 799L944 818L947 809L964 809L971 785L955 780L948 790L908 786L911 773").attr(red)
    };
    china.li = {
        name: "力行楼",
        path: R.path("M902 710L893 745L975 766L987 728L902 710Z").attr(red)
    };

    china.lan1 = {
        name: "篮球场北",
        path: R.path("M745 553L721 648L758 659L780 561L745 553Z").attr(cyan)
    };
    china.lan2 = {
        name: "篮球场南",
        path: R.path("M717 659L690 792L726 801L759 673L717 659Z").attr(cyan)
    };
    china.xue = {
        name: "学知楼",
        path: R.path("M833 608L828 626L837 642L941 665L948 643C948 643 831 608 833 608Z").attr(red)
    };
    china.xueshu = {
        name: "学术报告厅",
        path: R.path("M945 670L936 687L968 697L975 676L945 670Z").attr(attrs())
    };
    china.dongcao = {
        name: "东区操场",
        path: R.path("M719 600L719 598L710 587L695 577L681 570L665 568L648 571L633 574L623 582L612 592L603 613L597 639L590 669L583 703L583 730L594 747L608 760L627 769L656 770L673 763L683 757L693 760L704 711L713 675L719 643L724 616L727 605").attr(green)
    };
    china.nan = {
        name: "南门",
        path: R.path("M792 834L783 851L873 877L880 857C880 857 789 836 792 834Z").attr(attrs())
    };
    china.jian = {
        name: "践行楼",
        path: R.path("M949 592L942 609L997 624L1004 609L949 592Z").attr(red)
    };
    china.dongban = {
        name: "东办公楼",
        path: R.path("M961 546L955 566L1009 578L1014 561L961 546Z").attr(red)
    };
    china.xi = {
        name: "西办公楼",
        path: R.path("M812 513L806 529L862 543L866 528L812 513Z").attr(red)
    };
    china.zhong = {
        name: "中办公楼",
        path: R.path("M883 494L873 523L971 544L977 516C977 516 881 495 883 494Z").attr(red)
    };
    china.che = {
        name: "车库",
        path: R.path("M1035 583L1029 614L1048 616L1053 587L1035 583Z").attr(attrs())
    };
    china.tu1 = {
        name: "老图书馆",
        path: R.path("M927 356L917 384L926 387L914 417L938 425L965 429L976 403C983 404 989 368 989 368L962 361L927 356Z").attr(green)
    };
    china.mei = {
        name: "梅园",
        path: R.path("M878 348L861 404L894 416L908 360L878 348Z").attr(attrs())
    };
    china.tu2 = {
        name: "新图书馆",
        path: R.path("M897 263L887 306L932 312L932 323L966 334L977 341L982 317L990 279L965 270L943 276L897 263Z").attr(green)
    };

    china.shi2 = {
        name: "第二饮食中心",
        path: R.path("M802 248L797 265L806 271L796 289L805 303L833 312L857 308L868 291L871 265L802 248Z").attr(truered)
    };
    china.pai = {
        name: "排球场",
        path: R.path("M689 389L674 449L721 462L736 400L689 389Z").attr(cyan)
    };
    china.wang = {
        name: "网球场",
        path: R.path("M674 450L664 479L659 505L707 522L721 465C721 465 673 448 674 450Z").attr(cyan)
    };
    china.shi1 = {
        name: "第一饮食中心",
        path: R.path("M716 344L708 372L771 387L776 359L716 344Z").attr(truered)
    };
    china.mai = {
        name: "小卖铺",
        path: R.path("M710 326L705 338L740 345L742 335C742 335 710 328 710 326Z").attr(truered)
    };

    china.yu3 = {
        name: "玉园3号",
        path: R.path("M742 408L737 423L788 434L791 421L742 408Z").attr(blue)
    };
    china.yu2 = {
        name: "玉园2号",
        path: R.path("M735 436L730 452L780 467L784 453L735 436Z").attr(blue)
    };
    china.yu1 = {
        name: "玉园1号",
        path: R.path("M731 467L726 484L771 496L775 484C775 484 729 465 731 467Z").attr(blue)
    };
    china.yun = {
        name: "玉园N号",
        path: R.path("M800 423L794 443L837 453L842 433C842 433 798 424 800 423Z").attr(blue)
    };
    china.yus = {
        name: "玉园S号",
        path: R.path("M788 467L781 491L825 501L831 479C831 479 786 465 788 467Z").attr(blue)
    };

    china.dong = {
        name: "动感地带",
        path: R.path("M721 276L714 289L761 301L766 288C766 288 719 275 721 276Z").attr(attrs())
    };
    china.guo = {
        name: "锅炉房",
        path: R.path("M758 248L749 279L774 289L780 259L758 248Z").attr(attrs())
    };
    china.chaoshi = {
        name: "浴室超市",
        path: R.path("M745 203L737 227L783 241L790 216L745 203Z").attr(attrs())
    };
    china.yumao = {
        name: "羽毛球场",
        path: R.path("M751 174L743 197L790 211L795 187L751 174Z").attr(cyan)
    };
    china.shui1 = {
        name: "水池",
        path: R.path("M614 95L609 108L626 113L632 99L614 95Z").attr(attrs())
    };
    china.shui2 = {
        name: "水塔",
        path: R.path("M646 101L642 115L660 118L664 106L646 101Z").attr(attrs())
    };

    china.xiao = {
        name: "校接待中心",
        path: R.path("M580 273L571 306L627 323L634 283L580 273Z").attr(truered)
    };
    china.can = {
        name: "餐饮部",
        path: R.path("M569 307L557 339L579 348L592 315C592 315 567 306 569 307Z").attr(truered)
    };
    china.shipin = {
        name: "食品科技园",
        path: R.path("M557 353L551 388L584 399L586 355C586 355 559 354 557 353Z").attr(truered)
    };
    china.shiqin = {
        name: "诗琴湖",
        path: R.path("M652 320L638 336L635 362L637 390L632 406L624 422L630 437L650 438L663 427L664 403L666 381L675 360L677 333L665 323L652 320Z").attr(water)
    };
    china.cai = {
        name: "彩虹桥",
        path: R.path("M514 464L513 478L595 472L598 458L547 459C547 459 516 464 514 464Z").attr(truered)
    };

    china.ximen = {
        name: "西门",
        path: R.path("M618 487L605 543L626 550L646 552L648 543L624 535L628 517L631 505L644 510L646 496L618 487Z").attr(attrs())
    };
    china.dongmen = {
        name: "东门",
        path: R.path("M542 509L538 532L552 536L555 511L542 509Z").attr(attrs())
    };
    china.shiqin2 = {
        name: "诗琴湖2",
        path: R.path("M522 423L511 430L510 445L518 459L519 476L518 492C518 492 520 500 522 500C524 500 534 500 534 500C542 498 544 487 544 487L539 469L536 455L540 441L535 426C535 426 520 424 522 423Z").attr(water)
    };
    china.fenyu = {
        name: "风雨操场",
        path: R.path("M402 591L399 629L398 665L396 700L394 735L392 754L402 755L414 765L428 773L443 777L464 779L481 773L493 764C493 764 500 751 503 751C506 751 513 735 513 735L516 709L518 686L519 662L520 638L520 617L511 601L500 588L485 580L470 575L448 575L429 580L417 586L413 592L402 591Z").attr(green)
    };
    china.ti = {
        name: "体育馆",
        path: R.path("M299 611L293 726L381 730L387 620L299 611Z").attr(cyan)
    };
    china.lan3 = {
        name: "篮球场",
        path: R.path("M296 731L293 799L367 802L371 737L296 731Z").attr(cyan)
    };
    china.shi3 = {
        name: "第三饮食中心",
        path: R.path("M380 435L380 485L396 487L410 488L436 490L451 491L456 483L440 470L438 449L438 437C438 437 382 434 380 435Z").attr(truered)
    };

    china.xi4 = {
        name: "西园四号",
        path: R.path("M368 252L368 277L468 277L469 299L481 303L484 268L479 256C479 256 370 253 368 252Z").attr(blue)
    };
    china.xi3 = {
        name: "西园3号",
        path: R.path("M370 301L368 325L467 326L466 351L481 356L482 326L481 304L370 301Z").attr(blue)
    };
    china.xi2 = {
        name: "西园2号",
        path: R.path("M367 352L365 375L466 375L470 386L484 386L481 355L367 352Z").attr(blue)
    };
    china.xi1 = {
        name: "西园1号",
        path: R.path("M394 384L392 402L477 404L481 388C481 388 390 384 394 384Z").attr(blue)
    };
    china.kai = {
        name: "开水房",
        path: R.path("M359 403L359 480L376 480L373 402L359 403Z").attr(attrs())
    };

    china.gong = {
        name: "工程训练中心",
        path: R.path("M347 119L373 230L444 213L415 97").attr(red)
    };
    china.xi5 = {
        name: "教工宿舍西5-9",
        path: R.path("M833 164L818 203L941 231L950 191C950 191 831 163 833 164Z").attr(blue)
    };
    china.dong1 = {
        name: "教工宿舍东1-4",
        path: R.path("M833 164L818 203L941 231L950 191C950 191 831 163 833 164Z").attr(blue)
    };
    china.dong5 = {
        name: "教工宿舍东5-8",
        path: R.path("M1039 421L1010 521L1081 542L1108 441L1039 421ZM1078 296L1042 408L1091 423L1123 314L1078 296Z").attr(blue)
    };
    china.dong13 = {
        name: "教工宿舍东13-15",
        path: R.path("M1018 287L1004 342L1045 353L1059 298C1059 298 1016 287 1018 287Z").attr(blue)
    };
    china.dong9 = {
        name: "教工宿舍东9.10.12",
        path: R.path("M1103 199L1082 279L1135 296L1167 220L1103 199Z").attr(blue)
    };
    china.dong16 = {
        name: "教工宿舍东16-17",
        path: R.path("M1066 127L1057 166L1172 198L1188 160L1066 127Z").attr(blue)
    };
    china.xixi = {
        name: "教工宿舍西1.2.3.4.10.11.19",
        path: R.path("M995 108L958 233L1029 253L1045 206L1035 197L1056 124C1056 124 993 108 995 108Z").attr(blue)
    };

    china.xina = {
        name: "新知楼A",
        path: R.path("M247 512L264 532L257 540L225 547L186 553L167 556L127 559L87 560C80 561 66 559 66 559L67 542L70 526C70 526 111 531 113 531C115 531 143 529 145 529C147 529 191 526 191 526L205 525C205 525 226 521 228 521C230 521 247 512 247 512Z").attr(red)
    };
    china.xinb = {
        name: "新知楼B",
        path: R.path("M71 562L65 598L100 601L167 610L167 620L190 621L192 595L152 590L114 587L85 582L86 562L71 562Z").attr(red)
    };
    china.gong8 = {
        name: "躬行楼8栋",
        path: R.path("M53 632L51 638L49 648L53 655L99 660L104 641L102 634L53 632Z").attr(red)
    };
    china.gong7 = {
        name: "躬行楼7栋",
        path: R.path("M150 636L149 660L201 665L204 641C204 641 148 636 150 636Z").attr(red)
    };
    china.gong6 = {
        name: "躬行楼6栋",
        path: R.path("M44 674L40 698L94 704L97 678L44 674Z").attr(red)
    };
    china.gong5 = {
        name: "躬行楼5栋",
        path: R.path("M136 694L137 711L196 713L196 697L136 694Z").attr(red)
    };
    china.gong4 = {
        name: "躬行楼4栋",
        path: R.path("M30 711C28.21115 711.8944 28 736 28 736L78 737L81 714C81 714 32 710 30 711Z").attr(red)
    };
    china.gong3 = {
        name: "躬行楼3栋",
        path: R.path("M30 711C28.21115 711.8944 28 736 28 736L78 737L81 714C81 714 32 710 30 711ZM89 725L86 759L102 762L137 763L137 740L105 732L89 725Z").attr(red)
    };
    china.gong2 = {
        name: "躬行楼2栋",
        path: R.path("M42 755L39 788L96 793L96 762L42 755Z").attr(red)
    };
    china.gong1 = {
        name: "躬行楼1栋",
        path: R.path("M134 765L133 792L193 796L207 794L208 776L196 778L185 769L134 765Z").attr(red)
    };
    china.chuangyy = {
        name: "大学生创业园",
        path: R.path("M609 526L604 546L643 559L648 539").attr(attrs())
    };

    china.zhongzyy = {
        name: "种植园",
        path: R.path("M5 293L4 520L107 523L110 296").attr(green)
    };
    node.point127 = {
        name: "",
        node: "node127",
        path: R.circle(268, 497, 4).attr(pointAttr)
    };
    node.point126 = {
        name: "",
        node: "node126",
        path: R.circle(16, 427, 4).attr(pointAttr)
    };
    node.point125 = {
        name: "",
        node: "node125",
        path: R.circle(8, 497, 4).attr(pointAttr)
    };
    node.point124 = {
        name: "",
        node: "node124",
        path: R.circle(35, 497, 4).attr(pointAttr)
    };
    node.point123 = {
        name: "",
        node: "node123",
        path: R.circle(67, 497, 4).attr(pointAttr)
    };
    node.point122 = {
        name: "",
        node: "node122",
        path: R.circle(35, 661, 4).attr(pointAttr)
    };
    node.point121 = {
        name: "",
        node: "node121",
        path: R.circle(29, 704, 4).attr(pointAttr)
    };
    node.point120 = {
        name: "",
        node: "node120",
        path: R.circle(116, 713, 4).attr(pointAttr)
    };
    node.point119 = {
        name: "",
        node: "node119",
        path: R.circle(203, 728, 4).attr(pointAttr)
    };
    node.point118 = {
        name: "",
        node: "node118",
        path: R.circle(332, 769, 4).attr(pointAttr)
    };
    node.point117 = {
        name: "",
        node: "node117",
        path: R.circle(260, 672, 4).attr(pointAttr)
    };
    node.point116 = {
        name: "",
        node: "node116",
        path: R.circle(517, 519, 4).attr(pointAttr)
    };
    node.point115 = {
        name: "",
        node: "node115",
        path: R.circle(639, 273, 4).attr(pointAttr)
    };
    node.point114 = {
        name: "",
        node: "node114",
        path: R.circle(616, 329, 4).attr(pointAttr)
    };
    node.point113 = {
        name: "",
        node: "node113",
        path: R.circle(601, 511, 4).attr(pointAttr)
    };
    node.point112 = {
        name: "",
        node: "node112",
        path: R.circle(655, 549, 4).attr(pointAttr)
    };
    node.point1111 = {
        name: "",
        node: "node111",
        path: R.circle(603, 657, 4).attr(pointAttr)
    };
    node.point110 = {
        name: "",
        node: "node110",
        path: R.circle(632, 755, 4).attr(pointAttr)
    };
    node.point109 = {
        name: "",
        node: "node109",
        path: R.circle(696, 681, 4).attr(pointAttr)
    };
    node.point108 = {
        name: "",
        node: "node108",
        path: R.circle(667, 417, 4).attr(pointAttr)
    };
    node.point107 = {
        name: "",
        node: "node107",
        path: R.circle(672, 376, 4).attr(pointAttr)
    };
    node.point106 = {
        name: "",
        node: "node106",
        path: R.circle(678, 348, 4).attr(pointAttr)
    };
    node.point105 = {
        name: "",
        node: "node105",
        path: R.circle(679, 322, 4).attr(pointAttr)
    };
    node.point104 = {
        name: "",
        node: "node104",
        path: R.circle(647, 309, 4).attr(pointAttr)
    };
    node.point103 = {
        name: "",
        node: "node103",
        path: R.circle(628, 339, 4).attr(pointAttr)
    };
    node.point102 = {
        name: "",
        node: "node102",
        path: R.circle(621, 392, 4).attr(pointAttr)
    };
    node.point101 = {
        name: "",
        node: "node101",
        path: R.circle(616, 430, 4).attr(pointAttr)
    };
    node.point100 = {
        name: "",
        node: "node100",
        path: R.circle(652, 445, 4).attr(pointAttr)
    };

    node.point85 = {
        name: "",
        node: "node85",
        path: R.circle(1033.5, 390.5, 4).attr(pointAttr)
    };
    node.point99 = {
        name: "",
        node: "node99",
        path: R.circle(787, 588, 4).attr(pointAttr)
    };
    node.point98 = {
        name: "",
        node: "node98",
        path: R.circle(796, 547, 4).attr(pointAttr)
    };
    node.point97 = {
        name: "",
        node: "node97",
        path: R.circle(839, 559, 4).attr(pointAttr)
    };
    node.point96 = {
        name: "",
        node: "node96",
        path: R.circle(822, 616, 4).attr(pointAttr)
    };
    node.point95 = {
        name: "",
        node: "node95",
        path: R.circle(806, 674, 4).attr(pointAttr)
    };
    node.point94 = {
        name: "",
        node: "node94",
        path: R.circle(808, 733, 4).attr(pointAttr)
    };
    node.point93 = {
        name: "",
        node: "node93",
        path: R.circle(842, 752, 4).attr(pointAttr)
    };
    node.point92 = {
        name: "",
        node: "node92",
        path: R.circle(950, 852, 4).attr(pointAttr)
    };
    node.point91 = {
        name: "",
        node: "node91",
        path: R.circle(908, 759, 4).attr(pointAttr)
    };
    node.point90 = {
        name: "",
        node: "node90",
        path: R.circle(979, 778, 4).attr(pointAttr)
    };
    node.point89 = {
        name: "",
        node: "node89",
        path: R.circle(996, 723, 4).attr(pointAttr)
    };
    node.point88 = {
        name: "",
        node: "node88",
        path: R.circle(1017, 603, 4).attr(pointAttr)
    };
    node.point87 = {
        name: "",
        node: "node87",
        path: R.circle(1026, 562, 4).attr(pointAttr)
    };
    node.point86 = {
        name: "",
        node: "node86",
        path: R.circle(1019, 444, 4).attr(pointAttr)
    };
    node.point83 = {
        name: "",
        node: "node83",
        path: R.circle(1009, 274, 4).attr(pointAttr)
    };
    node.point82 = {
        name: "",
        node: "node82",
        path: R.circle(943, 256, 4).attr(pointAttr)
    };
    node.point81 = {
        name: "",
        node: "node81",
        path: R.circle(889, 242, 4).attr(pointAttr)
    };
    node.point80 = {
        name: "",
        node: "node80",
        path: R.circle(798, 219, 4).attr(pointAttr)
    };
    node.point79 = {
        name: "",
        node: "node79",
        path: R.circle(806, 182, 4).attr(pointAttr)
    };
    node.point78 = {
        name: "",
        node: "node78",
        path: R.circle(763, 81, 4).attr(pointAttr)
    };
    node.point77 = {
        name: "",
        node: "node77",
        path: R.circle(741, 163, 4).attr(pointAttr)
    };
    node.point76 = {
        name: "",
        node: "node76",
        path: R.circle(868, 337, 4).attr(pointAttr)
    };
    node.point75 = {
        name: "",
        node: "node75",
        path: R.circle(752, 738, 4).attr(pointAttr)
    };
    node.point74 = {
        name: "",
        node: "node74",
        path: R.circle(264, 564, 4).attr(pointAttr)
    };
    node.point73 = {
        name: "",
        node: "node73",
        path: R.circle(199, 567, 4).attr(pointAttr)
    };
    node.point72 = {
        name: "",
        node: "node72",
        path: R.circle(264, 605, 4).attr(pointAttr)
    };
    node.point71 = {
        name: "",
        node: "node71",
        path: R.circle(342, 576, 4).attr(pointAttr)
    };
    node.point70 = {
        name: "",
        node: "node70",
        path: R.circle(324, 554, 4).attr(pointAttr)
    };
    node.point69 = {
        name: "",
        node: "node69",
        path: R.circle(404, 506, 4).attr(pointAttr)
    };
    node.point68 = {
        name: "",
        node: "node68",
        path: R.circle(450, 509, 4).attr(pointAttr)
    };
    node.point67 = {
        name: "",
        node: "node67",
        path: R.circle(481, 469, 4).attr(pointAttr)
    };
    node.point66 = {
        name: "",
        node: "node66",
        path: R.circle(509, 468, 4).attr(pointAttr)
    };
    node.point65 = {
        name: "",
        node: "node65",
        path: R.circle(544, 467, 4).attr(pointAttr)
    };
    node.point64 = {
        name: "",
        node: "node64",
        path: R.circle(573, 466, 4).attr(pointAttr)
    };
    node.point63 = {
        name: "",
        node: "node63",
        path: R.circle(605, 461, 4).attr(pointAttr)
    };
    node.point62 = {
        name: "",
        node: "node62",
        path: R.circle(705, 296, 4).attr(pointAttr)
    };
    node.point61 = {
        name: "",
        node: "node61",
        path: R.circle(743, 391, 4).attr(pointAttr)
    };
    node.point60 = {
        name: "",
        node: "node60",
        path: R.circle(931, 339, 4).attr(pointAttr)
    };
    node.point59 = {
        name: "",
        node: "node59",
        path: R.circle(896, 326, 4).attr(pointAttr)
    };
    node.point58 = {
        name: "",
        node: "node58",
        path: R.circle(881, 323, 4).attr(pointAttr)
    };
    node.point57 = {
        name: "",
        node: "node57",
        path: R.circle(810, 321, 4).attr(pointAttr)
    };
    node.point56 = {
        name: "",
        node: "node56",
        path: R.circle(818, 345, 4).attr(pointAttr)
    };
    node.point55 = {
        name: "",
        node: "node55",
        path: R.circle(807, 385, 4).attr(pointAttr)
    };
    node.point54 = {
        name: "",
        node: "node54",
        path: R.circle(847, 398, 4).attr(pointAttr)
    };
    node.point53 = {
        name: "",
        node: "node53",
        path: R.circle(770, 400, 4).attr(pointAttr)
    };
    node.point52 = {
        name: "",
        node: "node52",
        path: R.circle(915, 365, 4).attr(pointAttr)
    };
    node.point51 = {
        name: "",
        node: "node51",
        path: R.circle(903, 408, 4).attr(pointAttr)
    };
    node.point50 = {
        name: "",
        node: "node50",
        path: R.circle(914, 441, 4).attr(pointAttr)
    };
    node.point47 = {
        name: "",
        node: "node47",
        path: R.circle(946, 417, 4).attr(pointAttr)
    };
    node.point46 = {
        name: "",
        node: "node46",
        path: R.circle(935, 434, 4).attr(pointAttr)
    };

    node.point37 = {
        name: "",
        node: "node37",
        path: R.circle(988, 455, 4).attr(pointAttr)
    }
    node.point36 = {
        name: "",
        node: "node36",
        path: R.circle(932, 447, 4).attr(pointAttr)
    }
    node.point35 = {
        name: "",
        node: "node35",
        path: R.circle(974, 490, 4).attr(pointAttr)
    }
    node.point33 = {
        name: "",
        node: "node33",
        path: R.circle(926, 471, 4).attr(pointAttr)
    }
    node.point32 = {
        name: "",
        node: "node32",
        path: R.circle(893, 460, 4).attr(pointAttr)
    }
    node.point31 = {
        name: "",
        node: "node31",
        path: R.circle(901, 438, 4).attr(pointAttr)
    }
    node.point30 = {
        name: "",
        node: "node30",
        path: R.circle(855, 422, 4).attr(pointAttr)
    }
    node.point29 = {
        name: "",
        node: "node29",
        path: R.circle(855.5, 462.5, 4).attr(pointAttr)
    }
    node.point28 = {
        name: "",
        node: "node28",
        path: R.circle(880, 490, 4).attr(pointAttr)
    }

    node.point27 = {
        name: "",
        node: "node27",
        path: R.circle(857, 565, 4).attr(pointAttr)
    }
    node.point26 = {
        name: "",
        node: "node26",
        path: R.circle(894.5, 604.5, 4).attr(pointAttr)
    }
    node.point25 = {
        name: "",
        node: "node25",
        path: R.circle(916.5, 559.5, 4).attr(pointAttr)
    }
    node.point24 = {
        name: "",
        node: "node24",
        path: R.circle(942, 583, 4).attr(pointAttr)
    }

    node.point23 = {
        name: "",
        node: "node23",
        path: R.circle(981, 520, 4).attr(pointAttr)
    }
    node.point21 = {
        name: "",
        node: "node21",
        path: R.circle(998, 550, 4).attr(pointAttr)
    }
    node.point17 = {
        name: "",
        node: "node17",
        path: R.circle(885, 642, 4).attr(pointAttr)
    }
    node.point16 = {
        name: "",
        node: "node16",
        path: R.circle(872, 689, 4).attr(pointAttr)
    }
    node.point15 = {
        name: "",
        node: "node15",
        path: R.circle(866, 730, 4).attr(pointAttr)
    }
    node.point13 = {
        name: "",
        node: "node13",
        path: R.circle(847, 816, 4).attr(pointAttr)
    }
    node.point12 = {
        name: "",
        node: "node12",
        path: R.circle(625, 545, 4).attr(pointAttr)
    }
    node.point11 = {
        name: "",
        node: "node11",
        path: R.circle(825, 808, 4).attr(pointAttr)
    }
    node.point10 = {
        name: "",
        node: "node10",
        path: R.circle(744, 786, 4).attr(pointAttr)
    }
    node.point9 = {
        name: "",
        node: "node9",
        path: R.circle(773, 670, 4).attr(pointAttr)
    }
    node.point8 = {
        name: "",
        node: "node8",
        path: R.circle(739, 659, 4).attr(pointAttr)
    }
    node.point7 = {
        name: "",
        node: "node7",
        path: R.circle(711, 612, 4).attr(pointAttr)
    }
    node.point6 = {
        name: "",
        node: "node6",
        path: R.circle(677, 586, 4).attr(pointAttr)
    }
    node.point5 = {
        name: "",
        node: "node5",
        path: R.circle(711, 529, 4).attr(pointAttr)
    }
    node.point4 = {
        name: "",
        node: "node4",
        path: R.circle(648, 517, 4).attr(pointAttr)
    }
    node.point3 = {
        name: "",
        node: "node3",
        path: R.circle(664, 448, 4).attr(pointAttr)
    }
    node.point2 = {
        name: "",
        node: "node2",
        path: R.circle(692, 375, 4).attr(pointAttr)
    }
    node.point1 = {
        name: "",
        node: "node1",
        path: R.circle(819, 886, 4).attr(pointAttr)
    }

}