const lunboShuju = [
  {
    eyebrow: "On-site Sequence",
    subtitle: "第一幕 · 正立面",
    title: "先让轮廓建立秩序",
    text: "先从正立面进入，抓住屋顶、檐口和殿身比例，这是阅读细节的起点。",
    detail: "先确认整体体量和站立方式，再进入构件和受力关系。",
    tags: ["正立面", "整体轮廓", "尺度感"],
    image: "./image/img1.jpg",
    alt: "佛光寺东大殿正立面"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第二幕 · 斜侧观看",
    title: "把深檐和柱列读出来",
    text: "换到斜侧角度，出檐深度和柱列节奏会比正面更明显。",
    detail: "斜侧角度更适合读檐下阴影和柱列节奏。",
    tags: ["斜侧视角", "出檐", "柱列"],
    image: "./image/img2.jpg",
    alt: "佛光寺东大殿斜侧面"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第三幕 · 构件近景",
    title: "让构件解释受力",
    text: "靠近之后重点看梁、柱、枋之间的衔接关系。",
    detail: "细部不只是装饰，而是结构秩序的可视化。",
    tags: ["近景", "构件", "受力"],
    image: "./image/img3.jpg",
    alt: "佛光寺东大殿近景"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第四幕 · 环境关系",
    title: "把建筑放回现场",
    text: "把视线从单体建筑拉开，观察院落、地势和路径关系。",
    detail: "古建筑总是和地形、植被、道路共同构成完整空间。",
    tags: ["环境", "院落", "场所感"],
    image: "./image/img4.jpg",
    alt: "佛光寺东大殿与环境"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第五幕 · 檐下光影",
    title: "在阴影里感受层次",
    text: "檐下是观察木构节奏和空间深度的关键位置。",
    detail: "阴影会突出层次，让构件先后关系变得更清楚。",
    tags: ["檐下", "光影", "层次"],
    image: "./image/img5.jpg",
    alt: "佛光寺东大殿檐下光影"
  },
  {
    eyebrow: "On-site Sequence",
    subtitle: "第六幕 · 回望全景",
    title: "最后回到整体",
    text: "离开前回望一次，把刚才读到的细节重新缝回整体。",
    detail: "当结构、路径和光影连成一体，建筑的秩序才真正成立。",
    tags: ["全景", "回望", "整体秩序"],
    image: "./image/img6.jpg",
    alt: "佛光寺东大殿全景"
  }
];

const shengfenShuju = [
  { name: "北京", slug: "beijing", region: "华北", x: 68.7, y: 30.6, dx: 10, dy: -16, type: "宫殿 / 祭祀建筑", spot: "故宫太和殿、天坛祈年殿", summary: "以都城礼制建筑为核心，适合从中轴、台基、重檐和整体秩序理解古建筑空间。" },
  { name: "天津", slug: "tianjin", region: "华北", x: 70.9, y: 31.5, dx: 10, dy: 8, type: "城厢建筑 / 会馆", spot: "广东会馆、天后宫", summary: "传统城厢与近代街区并置，适合观察城市叠层。" },
  { name: "河北", slug: "hebei", region: "华北", x: 66.5, y: 33.4, dx: -52, dy: -12, type: "寺观 / 皇家外围体系", spot: "承德避暑山庄、正定古建", summary: "连接都城与地方，是北方建筑体系的重要过渡地带。" },
  { name: "山西", slug: "shanxi", region: "华北", x: 59.2, y: 35.2, dx: -40, dy: -14, type: "寺观 / 木构", spot: "佛光寺、南禅寺、应县木塔", summary: "早期木构遗存最集中，适合从梁架和斗拱切入。" },
  { name: "内蒙古", slug: "neimenggu", region: "华北", x: 56.2, y: 24.2, dx: -50, dy: -18, type: "寺庙 / 王府", spot: "大召寺、五塔寺", summary: "草原边地与城镇体系并存，地理跨度大。" },
  { name: "辽宁", slug: "liaoning", region: "东北", x: 78.9, y: 25.8, dx: 10, dy: -14, type: "宫殿 / 城市建筑", spot: "沈阳故宫", summary: "皇家遗存与寒地城市共存，层次鲜明。" },
  { name: "吉林", slug: "jilin", region: "东北", x: 83.7, y: 21.8, dx: 10, dy: -12, type: "寺庙 / 聚落", spot: "北山古庙群", summary: "寒地环境影响围护与尺度，适合做南北对照。" },
  { name: "黑龙江", slug: "heilongjiang", region: "东北", x: 86.6, y: 15.1, dx: -8, dy: -16, type: "宗教建筑 / 城市遗存", spot: "文庙、极乐寺", summary: "边境城市与寒地建筑关系紧密。" },
  { name: "上海", slug: "shanghai", region: "华东", x: 77.2, y: 54.6, dx: 10, dy: -14, type: "园林 / 城市宅院", spot: "豫园", summary: "传统园林与现代城市纹理叠置。" },
  { name: "江苏", slug: "jiangsu", region: "华东", x: 74.3, y: 50.3, dx: -42, dy: -16, type: "园林 / 民居 / 古镇", spot: "拙政园、网师园", summary: "园林与水巷系统完整，路径节奏突出。" },
  { name: "浙江", slug: "zhejiang", region: "华东", x: 76.3, y: 57.9, dx: 10, dy: -14, type: "园林 / 古村 / 书院", spot: "保国寺、乌镇古建", summary: "山水、书院和古村并存，空间转折丰富。" },
  { name: "安徽", slug: "anhui", region: "华东", x: 69.7, y: 52.1, dx: -36, dy: 8, type: "民居 / 祠堂 / 村落", spot: "宏村、西递", summary: "徽派建筑典型，适合读马头墙和村落秩序。" },
  { name: "福建", slug: "fujian", region: "华东", x: 72.4, y: 64.7, dx: 10, dy: -14, type: "土楼 / 宗族民居", spot: "永定土楼、南靖土楼", summary: "围合聚居特征鲜明，防御性与生活性并重。" },
  { name: "江西", slug: "jiangxi", region: "华东", x: 67.3, y: 58.9, dx: -30, dy: -16, type: "书院 / 祠堂", spot: "白鹿洞书院", summary: "书院与乡土祠堂体系完整。" },
  { name: "山东", slug: "shandong", region: "华东", x: 74.4, y: 39.4, dx: 10, dy: -14, type: "楼阁 / 庙宇", spot: "蓬莱阁、孔庙", summary: "山海之间的高台楼阁与礼制建筑共存。" },
  { name: "河南", slug: "henan", region: "华中", x: 63.8, y: 43.2, dx: -34, dy: -16, type: "寺塔 / 古都建筑", spot: "少林寺", summary: "中原古都遗存与寺塔体系丰富。" },
  { name: "湖北", slug: "hubei", region: "华中", x: 60.2, y: 53.1, dx: -34, dy: -16, type: "楼阁 / 寺观", spot: "黄鹤楼", summary: "长江中游楼阁视线关系典型。" },
  { name: "湖南", slug: "hunan", region: "华中", x: 57.2, y: 60.1, dx: -34, dy: -16, type: "楼阁 / 山水建筑", spot: "岳阳楼", summary: "山水与楼阁的叠合关系鲜明。" },
  { name: "广东", slug: "guangdong", region: "华南", x: 61.2, y: 73.8, dx: 10, dy: -14, type: "宗祠 / 骑楼", spot: "陈家祠", summary: "宗祠体系与骑楼街区并存。" },
  { name: "广西", slug: "guangxi", region: "华南", x: 53.1, y: 70.9, dx: -38, dy: -16, type: "鼓楼 / 风雨桥", spot: "程阳风雨桥", summary: "山地聚落与民族建筑特征明显。" },
  { name: "海南", slug: "hainan", region: "华南", x: 58.5, y: 84.2, dx: 10, dy: -14, type: "民居 / 宗教建筑", spot: "骑楼老街", summary: "热带气候下通风遮阴策略突出。" },
  { name: "重庆", slug: "chongqing", region: "西南", x: 51.4, y: 56.4, dx: -26, dy: 10, type: "山城聚落", spot: "湖广会馆", summary: "高差与坡地决定空间组织。" },
  { name: "四川", slug: "sichuan", region: "西南", x: 43.2, y: 53.4, dx: -34, dy: -16, type: "寺观 / 山地聚落", spot: "青城山建筑群", summary: "盆地城市与山地寺观并置。" },
  { name: "贵州", slug: "guizhou", region: "西南", x: 46.8, y: 63.1, dx: -26, dy: 10, type: "鼓楼 / 吊脚楼", spot: "西江苗寨", summary: "湿润山地中的木构聚落组织突出。" },
  { name: "云南", slug: "yunnan", region: "西南", x: 35.2, y: 71.3, dx: -28, dy: -16, type: "民居 / 寺庙 / 古城", spot: "丽江古城", summary: "多民族与多地貌共同塑造空间形态。" },
  { name: "西藏", slug: "xizang", region: "西南", x: 19.3, y: 57.1, dx: -26, dy: -16, type: "宫殿 / 寺庙", spot: "布达拉宫", summary: "高原地形与宗教空间高度一体。" },
  { name: "陕西", slug: "shaanxi", region: "西北", x: 49.4, y: 43.5, dx: -34, dy: -16, type: "古都 / 塔寺", spot: "大雁塔", summary: "古都尺度与塔寺体系完整。" },
  { name: "甘肃", slug: "gansu", region: "西北", x: 36.1, y: 36.5, dx: -32, dy: -16, type: "石窟 / 佛寺", spot: "麦积山石窟", summary: "丝路沿线建筑更适合放在交通文化网络中理解。" },
  { name: "青海", slug: "qinghai", region: "西北", x: 28.4, y: 43.8, dx: -26, dy: -16, type: "寺院 / 聚落", spot: "塔尔寺", summary: "高原边界上的寺院聚落特征鲜明。" },
  { name: "宁夏", slug: "ningxia", region: "西北", x: 44.1, y: 37.6, dx: 10, dy: -14, type: "寺塔 / 城市遗存", spot: "承天寺塔", summary: "黄河沿线的塔寺与城市遗存并置。" },
  { name: "新疆", slug: "xinjiang", region: "西北", x: 16.4, y: 27.3, dx: -26, dy: -16, type: "清真寺 / 城市街区", spot: "艾提尕尔清真寺", summary: "绿洲城市与边疆街区共同构成独特空间。" },
  { name: "台湾", slug: "taiwan", region: "港澳台", x: 82.8, y: 74.5, dx: 10, dy: -14, type: "庙宇 / 聚落", spot: "龙山寺", summary: "庙宇系统与山海聚落共存。" },
  { name: "香港", slug: "xianggang", region: "港澳台", x: 63.6, y: 76.2, dx: 10, dy: 8, type: "庙宇 / 祠堂", spot: "文武庙", summary: "高密城市中的传统庙宇与旧村遗存。" },
  { name: "澳门", slug: "aomen", region: "港澳台", x: 61.7, y: 77.1, dx: -28, dy: 8, type: "庙宇 / 城市街区", spot: "妈阁庙", summary: "跨文化街区中的庙宇与大屋并置。" }
];

const quyuFenleiShuju = [
  { title: "华北", intro: "礼制和都城体系最完整。", focus: "中轴、台基、斗拱", spots: "故宫太和殿、佛光寺、承德避暑山庄" },
  { title: "东北", intro: "皇家遗存与寒地城市并置。", focus: "宫殿格局、寒地围护", spots: "沈阳故宫、北山古庙群" },
  { title: "华东", intro: "园林、书院、古村最密集。", focus: "借景、路径、水系", spots: "拙政园、宏村、永定土楼" },
  { title: "华中", intro: "中原古都与长江楼阁叠合。", focus: "古都遗存、楼阁视线", spots: "少林寺、黄鹤楼、岳阳楼" },
  { title: "华南", intro: "湿热气候下的宗祠与骑楼系统。", focus: "宗祠、骑楼、通风遮阴", spots: "陈家祠、程阳风雨桥" },
  { title: "西南", intro: "山地高差与多民族聚落最鲜明。", focus: "吊脚楼、坡地、高差", spots: "湖广会馆、青城山建筑群" },
  { title: "西北", intro: "丝路沿线石窟、塔寺与边地城市共存。", focus: "石窟、塔寺、边地交通", spots: "大雁塔、麦积山石窟" },
  { title: "港澳台", intro: "海洋文化与高密城市语境叠层。", focus: "庙宇、街区叠层、山海聚落", spots: "文武庙、郑家大屋、龙山寺" }
];

const gouzaoFenleiShuju = [
  {
    title: "木构架体系",
    intro: "以梁、柱、斗拱形成主体受力。",
    items: [
      { name: "故宫太和殿", shengfen: "北京", href: "./area/beijing.html" },
      { name: "佛光寺东大殿", shengfen: "山西", href: "./area/shanxi.html" },
      { name: "南禅寺大殿", shengfen: "山西", href: "./area/shanxi.html" }
    ]
  },
  {
    title: "高台与楼阁构造",
    intro: "通过台基和登临路径强化垂直空间体验。",
    items: [
      { name: "岳阳楼", shengfen: "湖南", href: "./area/hunan.html" },
      { name: "黄鹤楼", shengfen: "湖北", href: "./area/hubei.html" },
      { name: "蓬莱阁", shengfen: "山东", href: "./area/shandong.html" }
    ]
  },
  {
    title: "围合与聚居构造",
    intro: "以围合院落和宗族聚居组织生活空间。",
    items: [
      { name: "永定土楼", shengfen: "福建", href: "./area/fujian.html" },
      { name: "宏村民居", shengfen: "安徽", href: "./area/anhui.html" },
      { name: "西递古建", shengfen: "安徽", href: "./area/anhui.html" }
    ]
  },
  {
    title: "山地架空构造",
    intro: "顺应坡地高差，形成架空与层叠路径。",
    items: [
      { name: "西江苗寨建筑群", shengfen: "贵州", href: "./area/guizhou.html" },
      { name: "磁器口古建群", shengfen: "重庆", href: "./area/chongqing.html" },
      { name: "丽江古城民居", shengfen: "云南", href: "./area/yunnan.html" }
    ]
  },
  {
    title: "宗教轴线构造",
    intro: "通过殿序和中轴建立仪式性空间秩序。",
    items: [
      { name: "天坛祈年殿", shengfen: "北京", href: "./area/beijing.html" },
      { name: "少林寺", shengfen: "河南", href: "./area/henan.html" },
      { name: "布达拉宫", shengfen: "西藏", href: "./area/xizang.html" }
    ]
  },
  {
    title: "街区混合构造",
    intro: "庙宇、骑楼和街巷在高密城市中形成复合空间。",
    items: [
      { name: "陈家祠", shengfen: "广东", href: "./area/guangdong.html" },
      { name: "文武庙", shengfen: "香港", href: "./area/xianggang.html" },
      { name: "郑家大屋", shengfen: "澳门", href: "./area/aomen.html" }
    ]
  }
];

const teseFenleiShuju = [
  {
    title: "皇家礼制中轴",
    intro: "以中轴线和层层抬升的台基组织礼仪空间秩序。",
    items: [
      { name: "故宫太和殿", shengfen: "北京", href: "./area/beijing.html" },
      { name: "天坛祈年殿", shengfen: "北京", href: "./area/beijing.html" },
      { name: "沈阳故宫", shengfen: "辽宁", href: "./area/liaoning.html" }
    ]
  },
  {
    title: "园林与书院",
    intro: "强调借景、转折路径和院落层次的游览体验。",
    items: [
      { name: "拙政园", shengfen: "江苏", href: "./area/jiangsu.html" },
      { name: "网师园", shengfen: "江苏", href: "./area/jiangsu.html" },
      { name: "白鹿洞书院", shengfen: "江西", href: "./area/jiangxi.html" }
    ]
  },
  {
    title: "聚落与民居",
    intro: "以家族与社区为核心，形成围合或街巷连续空间。",
    items: [
      { name: "永定土楼", shengfen: "福建", href: "./area/fujian.html" },
      { name: "宏村民居", shengfen: "安徽", href: "./area/anhui.html" },
      { name: "西递古建", shengfen: "安徽", href: "./area/anhui.html" }
    ]
  },
  {
    title: "山地与高差空间",
    intro: "顺应山地地形，建筑与道路呈现立体叠合关系。",
    items: [
      { name: "湖广会馆", shengfen: "重庆", href: "./area/chongqing.html" },
      { name: "青城山古建群", shengfen: "四川", href: "./area/sichuan.html" },
      { name: "西江苗寨", shengfen: "贵州", href: "./area/guizhou.html" }
    ]
  },
  {
    title: "宗教与塔寺轴线",
    intro: "强调仪式路径、殿堂序列和标志性塔寺节点。",
    items: [
      { name: "少林寺", shengfen: "河南", href: "./area/henan.html" },
      { name: "大雁塔", shengfen: "陕西", href: "./area/shaanxi.html" },
      { name: "布达拉宫", shengfen: "西藏", href: "./area/xizang.html" }
    ]
  },
  {
    title: "市井与商贸街区",
    intro: "在高密街区中形成庙宇、会馆与骑楼共生的混合空间。",
    items: [
      { name: "陈家祠", shengfen: "广东", href: "./area/guangdong.html" },
      { name: "文武庙", shengfen: "香港", href: "./area/xianggang.html" },
      { name: "妈阁庙", shengfen: "澳门", href: "./area/aomen.html" }
    ]
  }
];

const lunboGuidao = document.querySelector("#lunboGuidao");
const lunboNeirong = document.querySelector("#lunboNeirong");
const lunboMeibiao = document.querySelector("#lunboMeibiao");
const lunboFubiaoti = document.querySelector("#lunboFubiaoti");
const lunboBiaoti = document.querySelector("#lunboBiaoti");
const lunboWenan = document.querySelector("#lunboWenan");
const lunboXiangjie = document.querySelector("#lunboXiangjie");
const lunboBiaoqian = document.querySelector("#lunboBiaoqian");
const lunboDianzu = document.querySelector("#lunboDianzu");
const lunboJishu = document.querySelector("#lunboJishu");
const lunboQian = document.querySelector("#lunboQian");
const lunboHou = document.querySelector("#lunboHou");
const lunboQu = document.querySelector("#lunbo");

const anniuDiqu = document.querySelector("#anniuDiqu");
const anniuGouzao = document.querySelector("#anniuGouzao");
const anniuTese = document.querySelector("#anniuTese");
const diquZhanshi = document.querySelector("#diquZhanshi");
const gouzaoZhanshi = document.querySelector("#gouzaoZhanshi");
const teseZhanshi = document.querySelector("#teseZhanshi");

const anniuDituShitu = document.querySelector("#anniuDituShitu");
const anniuAnquyu = document.querySelector("#anniuAnquyu");
const dituShituMianban = document.querySelector("#dituShituMianban");
const quyuFenleiMianban = document.querySelector("#quyuFenleiMianban");

const dituDianceng = document.querySelector("#dituDianceng");
const quyuFenleiWangge = document.querySelector("#quyuFenleiWangge");
const gouzaoFenleiWangge = document.querySelector("#gouzaoFenleiWangge");
const teseFenleiWangge = document.querySelector("#teseFenleiWangge");

const shengfenMingcheng = document.querySelector("#shengfenMingcheng");
const shengfenJianjie = document.querySelector("#shengfenJianjie");
const shengfenLeixing = document.querySelector("#shengfenLeixing");
const shengfenDaibiao = document.querySelector("#shengfenDaibiao");
const shengfenXiangqingLianjie = document.querySelector("#shengfenXiangqingLianjie");

const zhuangtai = {
  dangqian: 0,
  dangqianShengfen: "北京",
  diquShitu: "ditu"
};

let lunboDingshiqi;

function qudeShengfenXiangqingLujing(name) {
  const shengfen = shengfenShuju.find((item) => item.name === name);
  return shengfen ? `./area/${shengfen.slug}.html` : "./area/index.html";
}

function shengchengHuandeng() {
  lunboGuidao.innerHTML = lunboShuju
    .map((item, index) => `
      <figure class="lunbo-qu__huandeng ${index === zhuangtai.dangqian ? "is-active" : ""}" data-index="${index}">
        <img src="${item.image}" alt="${item.alt}" loading="${index === 0 ? "eager" : "lazy"}" />
      </figure>
    `)
    .join("");

  lunboDianzu.innerHTML = lunboShuju
    .map((_, index) => `
      <button class="lunbo-qu__dian ${index === zhuangtai.dangqian ? "is-active" : ""}" type="button" data-index="${index}" aria-label="切换到第 ${index + 1} 张"></button>
    `)
    .join("");
}

function gengxinMengceng() {
  const dangqian = lunboShuju[zhuangtai.dangqian];
  lunboNeirong.classList.remove("is-active");
  void lunboNeirong.offsetWidth;
  lunboNeirong.classList.add("is-active");

  lunboMeibiao.textContent = dangqian.eyebrow;
  lunboFubiaoti.textContent = dangqian.subtitle;
  lunboBiaoti.textContent = dangqian.title;
  lunboWenan.textContent = dangqian.text;
  lunboXiangjie.textContent = dangqian.detail;
  lunboBiaoqian.innerHTML = dangqian.tags.map((item) => `<span>${item}</span>`).join("");
  lunboJishu.textContent = `${String(zhuangtai.dangqian + 1).padStart(2, "0")} / ${String(lunboShuju.length).padStart(2, "0")}`;
}

function qiehuanLunbo(index) {
  zhuangtai.dangqian = (index + lunboShuju.length) % lunboShuju.length;
  lunboGuidao.querySelectorAll(".lunbo-qu__huandeng").forEach((item, idx) => {
    item.classList.toggle("is-active", idx === zhuangtai.dangqian);
  });
  lunboDianzu.querySelectorAll(".lunbo-qu__dian").forEach((item, idx) => {
    item.classList.toggle("is-active", idx === zhuangtai.dangqian);
  });
  gengxinMengceng();
}

function qidongLunbo() {
  clearInterval(lunboDingshiqi);
  lunboDingshiqi = window.setInterval(() => qiehuanLunbo(zhuangtai.dangqian + 1), 4200);
}

function shengchengDianwei() {
  dituDianceng.innerHTML = shengfenShuju
    .map((item) => `
      <button
        class="shengfen-dian ${item.name === zhuangtai.dangqianShengfen ? "is-active" : ""}"
        type="button"
        data-shengfen="${item.name}"
        aria-label="查看 ${item.name} 古建筑信息"
        style="left:${item.x}%; top:${item.y}%"
      >
        <span class="shengfen-dian__biaoqian" style="--biaoqian-x:${item.dx}px; --biaoqian-y:${item.dy}px">${item.name}</span>
      </button>
    `)
    .join("");
}

function shengchengQuyuFenlei() {
  quyuFenleiWangge.innerHTML = quyuFenleiShuju
    .map((quyu) => {
      const provinces = shengfenShuju.filter((item) => item.region === quyu.title);
      return `
        <article class="quyu-fenlei__ka">
          <p class="quyu-fenlei__meibiao">${quyu.title}</p>
          <h4>${quyu.intro}</h4>
          <p class="quyu-fenlei__zhongdian">观看重点：${quyu.focus}</p>
          <p class="quyu-fenlei__jianzhu">推荐建筑：${quyu.spots}</p>
          <div class="quyu-fenlei__shengfenzu">
            ${provinces
              .map((shengfen) => `<a class="quyu-fenlei__shengfen" href="./area/${shengfen.slug}.html" data-shengfen="${shengfen.name}">${shengfen.name}</a>`)
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function shengchengGouzaoFenlei() {
  gouzaoFenleiWangge.innerHTML = gouzaoFenleiShuju
    .map(
      (item) => `
        <article class="gouzao-zhanshi__ka">
          <p class="gouzao-zhanshi__meibiao">${item.title}</p>
          <p class="gouzao-zhanshi__jianjie">${item.intro}</p>
          <div class="gouzao-zhanshi__liebiao">
            ${item.items
              .map(
                (jianzhu) => `
                  <a class="gouzao-zhanshi__tiaomu" href="${jianzhu.href}">
                    <strong>${jianzhu.name}</strong>
                    <span>${jianzhu.shengfen} · 进入详细展示</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function shengchengTeseFenlei() {
  teseFenleiWangge.innerHTML = teseFenleiShuju
    .map(
      (item) => `
        <article class="tese-zhanshi__ka">
          <p class="tese-zhanshi__meibiao">${item.title}</p>
          <p class="tese-zhanshi__jianjie">${item.intro}</p>
          <div class="tese-zhanshi__liebiao">
            ${item.items
              .map(
                (jianzhu) => `
                  <a class="tese-zhanshi__tiaomu" href="${jianzhu.href}">
                    <strong>${jianzhu.name}</strong>
                    <span>${jianzhu.shengfen} · 进入详细展示</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function gengxinShengfenXinxi() {
  const shengfen = shengfenShuju.find((item) => item.name === zhuangtai.dangqianShengfen) || shengfenShuju[0];
  shengfenMingcheng.textContent = shengfen.name;
  shengfenJianjie.textContent = shengfen.summary;
  shengfenLeixing.textContent = `代表类型：${shengfen.type}`;
  shengfenDaibiao.textContent = `代表建筑：${shengfen.spot}`;
  shengfenXiangqingLianjie.href = `./area/${shengfen.slug}.html`;
  shengfenXiangqingLianjie.textContent = `进入${shengfen.name}详情`;

  dituDianceng.querySelectorAll(".shengfen-dian").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.shengfen === shengfen.name);
  });
}

function qiehuanDiquShitu(moshi) {
  zhuangtai.diquShitu = moshi;
  anniuDituShitu.classList.toggle("is-active", moshi === "ditu");
  anniuAnquyu.classList.toggle("is-active", moshi === "quyu");
  dituShituMianban.classList.toggle("is-hidden", moshi !== "ditu");
  quyuFenleiMianban.classList.toggle("is-hidden", moshi !== "quyu");
}

function qiehuanLiulanMoshi(moshi) {
  anniuDiqu.classList.toggle("is-active", moshi === "diqu");
  anniuGouzao.classList.toggle("is-active", moshi === "gouzao");
  anniuTese.classList.toggle("is-active", moshi === "tese");

  diquZhanshi.classList.toggle("is-hidden", moshi !== "diqu");
  gouzaoZhanshi.classList.toggle("is-hidden", moshi !== "gouzao");
  teseZhanshi.classList.toggle("is-hidden", moshi !== "tese");

  if (moshi === "diqu") {
    qiehuanDiquShitu("ditu");
    diquZhanshi.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (moshi === "gouzao") {
    gouzaoZhanshi.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (moshi === "tese") {
    teseZhanshi.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function bangdingShijian() {
  lunboQian.addEventListener("click", () => {
    qiehuanLunbo(zhuangtai.dangqian - 1);
    qidongLunbo();
  });

  lunboHou.addEventListener("click", () => {
    qiehuanLunbo(zhuangtai.dangqian + 1);
    qidongLunbo();
  });

  lunboDianzu.addEventListener("click", (event) => {
    const mubiao = event.target.closest("[data-index]");
    if (!mubiao) return;
    qiehuanLunbo(Number(mubiao.dataset.index));
    qidongLunbo();
  });

  lunboQu.addEventListener("mouseenter", () => clearInterval(lunboDingshiqi));
  lunboQu.addEventListener("mouseleave", qidongLunbo);

  anniuDiqu.addEventListener("click", () => qiehuanLiulanMoshi("diqu"));
  anniuGouzao.addEventListener("click", () => qiehuanLiulanMoshi("gouzao"));
  anniuTese.addEventListener("click", () => qiehuanLiulanMoshi("tese"));

  anniuDituShitu.addEventListener("click", () => qiehuanDiquShitu("ditu"));
  anniuAnquyu.addEventListener("click", () => qiehuanDiquShitu("quyu"));

  dituDianceng.addEventListener("click", (event) => {
    const mubiao = event.target.closest("[data-shengfen]");
    if (!mubiao) return;
    zhuangtai.dangqianShengfen = mubiao.dataset.shengfen;
    gengxinShengfenXinxi();
  });

  quyuFenleiWangge.addEventListener("click", (event) => {
    const mubiao = event.target.closest("[data-shengfen]");
    if (!mubiao) return;
    zhuangtai.dangqianShengfen = mubiao.dataset.shengfen;
    gengxinShengfenXinxi();
    qiehuanDiquShitu("ditu");
  });
}

shengchengHuandeng();
gengxinMengceng();
shengchengDianwei();
shengchengQuyuFenlei();
shengchengGouzaoFenlei();
shengchengTeseFenlei();
gengxinShengfenXinxi();
bangdingShijian();
qidongLunbo();
