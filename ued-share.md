title: ued-share
speaker: 越澄
url: https://github.com/ksky521/nodePPT
transition: slide
files: /css/demo.css, /js/jquery-2.1.1.min.js, /js/demo.js

[slide]

# 简单的CSS3动画

[slide]
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
[slide data-incallback="main"]
## 后来我们通过模拟

- position {:&.w100.text-left}
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

[slide]
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

[slide]
## 让它们动起来 show time
http://tympanus.net/Tutorials/TiltedContentSlideshow/
http://tympanus.net/Development/3DBookShowcase/index.html
http://tympanus.net/Development/PseudoElementsAnimationsTransitions/index2.html
http://tympanus.net/Tutorials/HexaFlip/index3.html
http://tympanus.net/Development/AnimatedBooks/index2.html

[slide]
## SVG--不规则的变形
http://tympanus.net/Development/PageLoadingEffects/index.html

[slide]
## canvas
http://tympanus.net/Development/BurstingGiftBox/
http://tympanus.net/Development/InteractiveParticlesSlideshow/

[slide]
## webgl--质感，光源，阴影
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
动画毕竟是为了吸引眼球，引导用户的眼睛落在正确的点上

[slide]
## 我对css3动画的理解

不是像放电影一样{.fadeIn}

不宜做一长串的动画
提升交互，吸引眼球
点缀--简单重复