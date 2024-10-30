import "./style.css";

const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;

if (canvas === null) {
  throw new Error("Can not find canvas element");
}

const ctx = canvas.getContext("2d");

if (ctx === null) {
  throw new Error("Can not find ctx");
}

// 设置画布背景色
ctx.fillStyle = "#4158D0";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 计算 43 度的渐变终点坐标
const angle = 43 * (Math.PI / 180); // 将度数转换为弧度
const gradientX = Math.cos(angle) * canvas.width;
const gradientY = Math.sin(angle) * canvas.height;

// 创建线性渐变
const gradient = ctx.createLinearGradient(0, 0, gradientX, gradientY);

// 添加渐变的颜色停靠点
gradient.addColorStop(0, "#4158D0"); // 0%
gradient.addColorStop(0.46, "#C850C0"); // 46%
gradient.addColorStop(1, "#FFCC70"); // 100%

// 将渐变设为填充样式并填充整个 canvas
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
