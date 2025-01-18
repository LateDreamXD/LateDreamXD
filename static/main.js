import './aliveTime.js'; import {loadOml2d} from './oh-my-live2d/dist/index.js';
console.log(
  `
  %c KZHomePage v1.2.0 Modified by LateDream %c https://latedream.us.kg/LateDream/
`,
    "color: #fff; background: #fd79a8; padding: 5px 0;",
    "background: #fff; padding: 5px 0;"
);

async function getHitokoto() {
  const hitokoto = document.getElementById('hitokoto_text');
  try {
    const req = await fetch('https://v1.hitokoto.cn?c=a&c=b&c=c&c=f');
    if(!req.ok) throw new Error(`Connection error: ${req.status}`);
    const data = await req.json();
    hitokoto.innerText = data.hitokoto;
    hitokoto.title = data.from;
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
    hitokoto.target = '_blank';
  } catch(e) {
    console.error(`Failed to fetch hitokoto: ${e}`);
  }
}

(()=>{
  const btn = document.querySelector('#refresh_hitokoto');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  getHitokoto();
  btn.classList.toggle('clicked');
  setTimeout(() => {
    btn.classList.toggle('clicked');
  }, 400);
});})()

const oml2d = loadOml2d({
  models: [{
    path: 'https://model.oml2d.com/kobayaxi/model.json',
    position: [0, 200],
    scale: 0.2,
    stageStyle: {
      position: 'fixed',
      right: 0,
      left: 'unset',
      height: 450
    }
  }]
});

oml2d.onStageSlideIn(() => {
  oml2d.tipsMessage(
    `欢迎来到LateDream的主页！`,
    4000,
    10
  );
});