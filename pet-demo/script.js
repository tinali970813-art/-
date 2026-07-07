const screenMeta = {
  home: {
    title: "首页就是主流程",
    copy: "把日常状态、AI 问诊和一键小记放在同一屏，现场演示时不需要跳很多层。"
  },
  triage: {
    title: "AI 健康有技术抓手",
    copy: "通过照片上传、物种区分、多轮追问和分级处理，把垂直宠物知识库的能力展示出来。"
  },
  cycle: {
    title: "女性专属不是脆弱叙事",
    copy: "周期适配强调生活节奏和省力照护，帮助用户按自己的状态安排养宠任务。"
  },
  camera: {
    title: "硬件联动可见",
    copy: "摄像头既能做异常轻预警，也能把看护片段导入短片生成，形成软硬件闭环。"
  },
  draft: {
    title: "分享欲就是增长入口",
    copy: "短片、滤镜、文案和话题标签自动生成，让女生养宠日常可以直接变成小红书草稿。"
  }
};

const screens = document.querySelectorAll(".screen");
const navButtons = document.querySelectorAll("[data-screen]");
const panelCards = document.querySelectorAll(".panel-card");
const tabButtons = document.querySelectorAll(".tabbar button");
const title = document.querySelector("#detail-title");
const copy = document.querySelector("#detail-copy");
const boardDialog = document.querySelector(".board-dialog");

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
  panelCards.forEach((card) => card.classList.toggle("active", card.dataset.screen === id));
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.screen === id));

  const meta = screenMeta[id] || screenMeta.home;
  title.textContent = meta.title;
  copy.textContent = meta.copy;
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.screen));
});

document.querySelector("[data-open-board]").addEventListener("click", () => {
  boardDialog.showModal();
});

document.querySelector(".close-board").addEventListener("click", () => {
  boardDialog.close();
});

boardDialog.addEventListener("click", (event) => {
  if (event.target === boardDialog) {
    boardDialog.close();
  }
});
