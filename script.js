const projects = {
  nice: { title: '《超nice大会》', tag: '快手 S 级脱口秀综艺 · 核心编剧', text: '参与节目从前期策划到现场录制的内容工作：围绕每期主题筛选真实痛点，设计热点话题的内容预埋，撰写台本并配合录制执行。项目以脱口秀表达回应当代年轻人的日常情绪与处境。' },
  blossom: { title: '《一路笑开花》', tag: '芒果 TV 旅行文化类真人秀 · 编剧统筹', text: '负责前期策划研发、现场踩点、每期游戏策划与当地文化项目植入；完成台本撰写、艺人前采对本和现场执行，并统筹编剧组与各工种协作。' },
  surprise: { title: '《鹅外惊喜》', tag: '腾讯视频 S 级直播带货综艺 · 核心编剧', text: '围绕货品售卖环节设计综艺玩法，把产品信息转化为可观看、可参与的内容单元；同时参与台本、艺人前采、统筹与现场执行。' },
  qq: { title: '《全能宝藏张欣尧》', tag: 'QQ 音乐七夕舞夜场直播 · 现场编剧', text: '负责直播项目前期策划研发、台本撰写、艺人前采与内容对接，并在现场承担执行导演工作，让舞台内容与直播节奏保持一致。' },
  river: { title: '《长江黄河如此奔腾》', tag: '湖南卫视共和国七十年主题节目 · 实习编导', text: '参与理论性节目的前期策划、脚本撰写、嘉宾邀请、现场执行与后期制作。通过电视叙事呈现中华人民共和国成立以来的重要历程与时代成就。' },
  research: { title: '知识分享类短视频的传播价值研究', tag: '湖南师范大学新闻学本科毕业论文', text: '研究以知识分享类短视频为对象，从社会价值、商业价值与文化价值三条线索分析其传播效应。采用文献分析、个案分析、比较分析与田野调查等方法，讨论其在知识普及、职业技能传播和文化传承中的可能性。' }
};
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  content.innerHTML = `<p class="dialog-tag">${project.tag}</p><h2>${project.title}</h2><p>${project.text}</p>`;
  dialog.showModal();
}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
