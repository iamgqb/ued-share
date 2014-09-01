title: ued-share
speaker: 越澄
url: https://github.com/ksky521/nodePPT
transition: slide
files: /css/demo.css, /js/jquery-2.1.1.min.js, /js/demo.js

[slide]

# 简单的CSS3动画

[slide] {:.flexbox.vcenter}
## 曾经我们使用的方式 

- gif {:&.w100.text-left}
- flash

<img src="/img/loading.gif" alt="">
<ul class="demo-loading">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
[slide data-incallback="main"] {:.flexbox.vcenter}
## 后来我们通过模拟

- position {:&.text-left}
  - top, right, bottom, left
- width, height

<div class="demo-box">
    <div class="demo-simulation-move" id="simulation-move"></div>
    <div class="demo-css3-move"></div>    
</div>
<div class="demo-box">
    <div class="demo-simulation-scale" id="simulation-scale"></div>
    <div class="demo-css3-scale"></div>      
</div>

[slide] {:.flexbox.vcenter}
## 现在我们可以做到 

- transform {:&.w100.text-left}
- transition 
- animation
- svg
- canvas
- ...

[slide]
## 让我们从最基本的动画开始 

#### 2D--二维的世界 {:.text-left}

- 平移 {:&.fadeIn.text-left.w100}
<ul class="demo-translate">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
- 缩放 
<ul class="demo-scale-s">
    <li></li>
</ul>
<ul class="demo-scale-l">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

- 渐变 {: style="margin-top:150px"}
<ul class="demo-gradient">
    <li>chrome-canary</li>
</ul>
[slide]
##从2D到3D——欺骗眼睛

阴影 旋转 景深

<div class="doge fadeIn">
    <img src="../img/doge.jpeg" alt="">
</div>

[slide] {:.flexbox.vcenter}
## 让它们动起来 show time
http://tympanus.net/Tutorials/TiltedContentSlideshow/
http://tympanus.net/Development/3DBookShowcase/index.html
http://tympanus.net/Development/PseudoElementsAnimationsTransitions/index2.html
http://tympanus.net/Tutorials/HexaFlip/index3.html
http://tympanus.net/Development/AnimatedBooks/index2.html

[slide] {:.flexbox.vcenter}
## SVG--不规则的变形
http://tympanus.net/Development/PageLoadingEffects/index.html

[slide] {:.flexbox.vcenter}
## Canvas
http://tympanus.net/Development/BurstingGiftBox/
http://tympanus.net/Development/InteractiveParticlesSlideshow/

[slide] {:.flexbox.vcenter}
## WebGL--质感，光源，阴影
http://glecollinet.github.io/webgl-demo/
http://threejs.org/examples/#webgl_animation_cloth

[slide] 
## 注意点
渐进增强 平稳后退

元素是个整体
http://tympanus.net/Development/ItemTransitions/index.html
http://www.zbom.com/

[slide]
## 些许问题

素材加载？

动画时长？

所谓立意点？ 

扁平化的设计，不为动画而动画

动画的目的是为了吸引眼球，引导用户的眼睛落在正确的点上

[slide]
## 我对css3动画的理解 

不是传统的动画

不宜做一长串的动画

提升交互，吸引眼球

点缀--简单重复

[slide]
#Web设计中的Photoshop

[slide]
## 从设置开始--颜色设置 {:.text-left}

编辑>>颜色设置

减小psd体积 {:.img-margin}

![](/img/color.png)

[slide]
## 从设置开始--像素与点 {:.text-left}

编辑>>首选项>>单位与标尺 

与前端度量单位保持一致 {:.img-margin}

![](/img/dw.png)

[slide]
## 新建 {:.text-left}

颜色用RGB 8位, 分辨率默认72 {:.img-margin}

![](/img/new.png)

[slide]
## 字体--保留抗锯齿 {:.text-left}

选择无

因为css无法表现抗锯齿效果 {:.img-margin}

![](/img/kjc.png)

[slide]
## 字体--仿粗体与仿斜体 {:.text-left}

优先使用字体中的Bold与Italic

当字体中不存在Bold或Italic时

使用仿粗体与仿斜体，

当使用Bold时，请勿再使用仿粗体，Italic 一样  {:.img-margin}

![](/img/bold.png)

[slide] {:.text-left}
## 字体--细节 

1 字号与行距，他们是有比例的，行距一般为字号的1.2, 1.4, 1.6 等等倍数。当然也可以固定某像素，只是需要保持统一或某种关系。

2 所谓行距，是对某一个段落而言，因此，当设置时，请选择整个段落。

2 V/A VA 字符间距

4 请勿调整字体的垂直水平缩放，虽然这样看上去是在放大字体。

5 请勿调整字体的基线。  {:.img-margin}

![](/img/detail.png)

[slide]
## 字体--善用文本框 {:.text-left}

善用文本框(段落文本) {:.img-margin}

![](/img/wbk.png)

[slide] {:.text-left}
## 字体--其他会引起的不适症状 

1 字号请用整数

2 请勿拉伸，变形字体来表现效果

3 请勿使用奇怪的字体来表现效果

4 若出现2 、3的症状，请务必! 栅格化该(系列)图层

[slide] {:.text-left}
## 其他

1、混合模式，使用后，请栅格化对应图层，尽量做到，输出给前端的psd的图层中不存在混合模式。

2、控制图层数量，不必要的图层删除，某些图层进行合并；图层的分组，命名。

3、使用栅格系统，参考线对齐到网格。

4、快照管理 设计师与前端的不同psd。

5、注释，当你觉得前端在某处可能会曲解原意。