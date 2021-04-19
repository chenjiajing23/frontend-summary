const Point = {
  createNew: function(x, y) {
    const point = {};
    point.x = x;
    point.y = y;
    return point;
  }
};

// 绘制坐标系
function drawXY(context) {
  //保存好当前画布的状态。因为我们的圆心在左下角，我们还需要返回到这个远点进行其他操作。
  context.save();
  const heightOfOne = 30;

  //绘制X轴开始
  for (let i = 0; i < 7; i++) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(canvas.width, 0);
    context.closePath();
    //画不是闭合区域 fill是闭合区域
    context.stroke();
    //每次绘制完之后继续往上平移
    context.translate(0, heightOfOne);
  }
  context.restore();

  //绘制x刻度开始
  context.save();
  const widthOfOn = (canvas.width - marginLeft) / 7;

  context.lineWidth = 0.2;
  for (let i = 0; i < 8; i++) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -10);
    context.closePath();
    //画不是闭合区域 fill是闭合区域
    context.stroke();
    //每次绘制完之后继续往右平移
    context.translate(widthOfOn, 0);
  }
  context.restore();

  //x轴绘制文字数组
  context.save();
  const xText = new Array("Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun");
  //这里沿着X轴镜像对称变换。那么Y轴向下为正，X没变向右为正。
  context.scale(1, -1);
  for (let i = 0; i < xText.length; i++) {
    //画不是闭合区域 fill是闭合区域
    context.stroke();
    //每次绘制完之后继续往上平移
    if (i === 0) {
      //分析之后第一次移动了单位长度的一半。后面的每次都平移一个刻度长度,坐标圆心就平移到了每个刻度的中间。y轴向下平移了5个像素。这样就和X轴不会重合。
      context.translate(widthOfOn / 2, 15);
    } else {
      context.translate(widthOfOn, 0);
    }
    const textWidth = context.measureText(xText[i]);
    context.fillText(xText[i], -textWidth.width / 2, 0);
  }
  //还原到远点为左下角状态。
  context.restore();

  //绘制y轴刻度
  context.save();
  context.scale(1, -1);
  context.translate(-20, 0);
  context.font = "7pt Calibri";
  //Y轴左边绘制文字
  for (let i = 0; i < 7; i++) {
    //画不是闭合区域 fill是闭合区域
    context.stroke();
    //每次绘制完之后继续往上平移
    const textWidth = context.measureText((50 * i).toString());
    console.log(textWidth.actualBoundingBoxAscent, "=======", context.font);
    context.fillText(
      (50 * i).toString(),
      0,
      textWidth.emHeightAscent / 2 || textWidth.actualBoundingBoxAscent / 2
    );
    context.translate(0, -heightOfOne);
  }
  context.restore();
}

//绘制折线
function drawLine(context) {
  //绘制折线段
  const widthOfOn = (canvas.width - marginLeft) / 7;
  const danweiHeight = 35 / 50; //每个数字占用的实际像素高度
  const point01 = Point.createNew(widthOfOn / 2, 150 * danweiHeight);
  const point02 = Point.createNew(
    widthOfOn / 2 + widthOfOn,
    250 * danweiHeight
  );
  const point03 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 2,
    225 * danweiHeight
  );
  const point04 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 3,
    211 * danweiHeight
  );
  const point05 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 4,
    140 * danweiHeight
  );
  const point06 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 5,
    148 * danweiHeight
  );
  const point07 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 6,
    260 * danweiHeight
  );

  const points = [
    point01,
    point02,
    point03,
    point04,
    point05,
    point06,
    point07
  ];
  context.save();

  context.beginPath();
  for (let index = 0; index < points.length; index++) {
    context.lineTo(points[index].x, points[index].y);
  }
  context.strokeStyle = "rgb(93,111,194)";
  context.lineWidth = 1;
  context.shadowBlur = 5;
  context.stroke();
  context.closePath();
  context.restore();
}

//绘制圆圈
function drawCircle(context) {
  const widthOfOn = (canvas.width - marginLeft) / 7;
  const danweiHeight = 35 / 50; //每个数字占用的实际像素高度
  const point01 = Point.createNew(widthOfOn / 2, 150 * danweiHeight);
  const point02 = Point.createNew(
    widthOfOn / 2 + widthOfOn,
    250 * danweiHeight
  );
  const point03 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 2,
    225 * danweiHeight
  );
  const point04 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 3,
    211 * danweiHeight
  );
  const point05 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 4,
    140 * danweiHeight
  );
  const point06 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 5,
    148 * danweiHeight
  );
  const point07 = Point.createNew(
    widthOfOn / 2 + widthOfOn * 6,
    260 * danweiHeight
  );

  const points = [
    point01,
    point02,
    point03,
    point04,
    point05,
    point06,
    point07
  ];
  context.save();
  context.beginPath();
  for (let index = 0; index < points.length; index++) {
    context.beginPath();
    context.arc(points[index].x, points[index].y, 3, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = "rgb(100,255,255)";
    context.shadowBlur = 5;
    context.shadowColor = "rgb(100,255,255)";
    context.fill();
  }
  context.restore();
}
