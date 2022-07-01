var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","ee4a03b4-9231-475e-a415-94d98fd8e898","084b48f3-c2b3-4da3-b439-5cfff0feef06","5093e7cc-4bdb-47eb-8191-a46107583caa","c86bbf60-f783-4860-b3ff-41a8cf2b0d7d","e3bcae20-4264-4b74-923e-74a5bf1d706a","2d407224-7f50-434a-a9aa-3e2acd049424","324e8faf-a373-4ef8-95d4-bf45c258e69a","1ecc49e7-1c46-466c-b039-4099b0c10859","8291b5be-1643-418e-9a4e-ec466e376f75","9bafd914-5e0d-4457-a8a9-a036c7aa407e","7bd393e2-b12f-401f-9619-b178ba589fda","a22ac374-301c-4db0-a2ee-c92fea3f79d4","71d417aa-3f3b-405e-af63-40260d4c917a","606f3750-9e20-4914-b8b5-8b4cf712f515","b0d3761c-ede1-432e-abe7-56c990f4ce8e","60641c33-5608-4e46-9a26-d9e363416b13"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"UFBB6JKHsgZmF3kSg1xi53g9df9RgUWz","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"HB0cOLFnHjocdx1PkaLsBGGoxRo3PmWn","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"SncBUsflFxvKKvWpEyyrFhPnPOXBH67m","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"ee4a03b4-9231-475e-a415-94d98fd8e898":{"name":"fish_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.2ZWHz78Hjh6m9fdwQxKq2RE6VKsLIvc/category_animals/fish_08.png","frameSize":{"x":398,"y":279},"frameCount":1,"looping":true,"frameDelay":2,"version":".2ZWHz78Hjh6m9fdwQxKq2RE6VKsLIvc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":279},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.2ZWHz78Hjh6m9fdwQxKq2RE6VKsLIvc/category_animals/fish_08.png"},"084b48f3-c2b3-4da3-b439-5cfff0feef06":{"name":"fish_06_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa/category_animals/fish_06.png","frameSize":{"x":396,"y":336},"frameCount":1,"looping":true,"frameDelay":2,"version":"oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":336},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa/category_animals/fish_06.png"},"5093e7cc-4bdb-47eb-8191-a46107583caa":{"name":"fish_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DOgvjzfdlZrdAw29QELVontmr5xQSAKI/category_animals/fish_07.png","frameSize":{"x":396,"y":227},"frameCount":1,"looping":true,"frameDelay":2,"version":"DOgvjzfdlZrdAw29QELVontmr5xQSAKI","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":227},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DOgvjzfdlZrdAw29QELVontmr5xQSAKI/category_animals/fish_07.png"},"c86bbf60-f783-4860-b3ff-41a8cf2b0d7d":{"name":"fish_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2.BDZtq3wf3kp61an2YF4UaBfb7qW.Ba/category_animals/fish_10.png","frameSize":{"x":395,"y":247},"frameCount":1,"looping":true,"frameDelay":2,"version":"2.BDZtq3wf3kp61an2YF4UaBfb7qW.Ba","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":395,"y":247},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2.BDZtq3wf3kp61an2YF4UaBfb7qW.Ba/category_animals/fish_10.png"},"e3bcae20-4264-4b74-923e-74a5bf1d706a":{"name":"background_landscape11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"},"2d407224-7f50-434a-a9aa-3e2acd049424":{"name":"spike_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png","frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":2,"version":"tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png"},"324e8faf-a373-4ef8-95d4-bf45c258e69a":{"name":"spike_bot_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8dVkw87zEWjthHxqeMorQVy16Ka4eOYD/category_robots/spike_bot_walk.png","frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":2,"version":"8dVkw87zEWjthHxqeMorQVy16Ka4eOYD","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":322},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8dVkw87zEWjthHxqeMorQVy16Ka4eOYD/category_robots/spike_bot_walk.png"},"1ecc49e7-1c46-466c-b039-4099b0c10859":{"name":"sticker_24_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8MpupCnGVxEi_YgGEC7STSg2JpY2anD7/category_stickers/sticker_24.png","frameSize":{"x":368,"y":126},"frameCount":1,"looping":true,"frameDelay":2,"version":"8MpupCnGVxEi_YgGEC7STSg2JpY2anD7","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":368,"y":126},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8MpupCnGVxEi_YgGEC7STSg2JpY2anD7/category_stickers/sticker_24.png"},"8291b5be-1643-418e-9a4e-ec466e376f75":{"name":"sticker_22_1","sourceUrl":"assets/api/v1/animation-library/gamelab/34aZ51qWw80GxsNKqfYyAe3odwaat5tx/category_stickers/sticker_22.png","frameSize":{"x":212,"y":212},"frameCount":1,"looping":true,"frameDelay":2,"version":"34aZ51qWw80GxsNKqfYyAe3odwaat5tx","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":212},"rootRelativePath":"assets/api/v1/animation-library/gamelab/34aZ51qWw80GxsNKqfYyAe3odwaat5tx/category_stickers/sticker_22.png"},"9bafd914-5e0d-4457-a8a9-a036c7aa407e":{"name":"sticker_23_1","sourceUrl":"assets/api/v1/animation-library/gamelab/43ywzTkUovSnTaTyn07ESaD5vXPdMBJa/category_stickers/sticker_23.png","frameSize":{"x":258,"y":256},"frameCount":1,"looping":true,"frameDelay":2,"version":"43ywzTkUovSnTaTyn07ESaD5vXPdMBJa","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":256},"rootRelativePath":"assets/api/v1/animation-library/gamelab/43ywzTkUovSnTaTyn07ESaD5vXPdMBJa/category_stickers/sticker_23.png"},"7bd393e2-b12f-401f-9619-b178ba589fda":{"name":"sticker_27_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"a22ac374-301c-4db0-a2ee-c92fea3f79d4":{"name":"rocket2_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"A9nxf_P6Rg8WMDbqEBAVPkgOPYYCyNQF","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a22ac374-301c-4db0-a2ee-c92fea3f79d4.png"},"71d417aa-3f3b-405e-af63-40260d4c917a":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"606f3750-9e20-4914-b8b5-8b4cf712f515":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"v.fu3NdyrkMOGqz14ypXTfzenU8fl0vp","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/606f3750-9e20-4914-b8b5-8b4cf712f515.png"},"b0d3761c-ede1-432e-abe7-56c990f4ce8e":{"name":"você-ganhou-selo-vermelho-95568448.jpeg_1","sourceUrl":null,"frameSize":{"x":800,"y":431},"frameCount":1,"looping":true,"frameDelay":12,"version":"heqWw.sCbrTRzGkOHLITCxQkjmuI8yvB","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":431},"rootRelativePath":"assets/b0d3761c-ede1-432e-abe7-56c990f4ce8e.png"},"60641c33-5608-4e46-9a26-d9e363416b13":{"name":"youwin.png_1","sourceUrl":"assets/v3/animations/ArhW_eSa8s6Dx61YkmBBXMJgsj51EoQ-3MZCdrJ7gBk/60641c33-5608-4e46-9a26-d9e363416b13.png","frameSize":{"x":348,"y":254},"frameCount":1,"looping":true,"frameDelay":4,"version":"rmlDCR4weAu5pqP_6QC81g6m2JlqY8wH","loadedFromSource":true,"saved":true,"sourceSize":{"x":348,"y":254},"rootRelativePath":"assets/v3/animations/ArhW_eSa8s6Dx61YkmBBXMJgsj51EoQ-3MZCdrJ7gBk/60641c33-5608-4e46-9a26-d9e363416b13.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("background_landscape11_1")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,290,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,200,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,100,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,10,200,10)
net.shapeColor="red"

var sticker= createSprite(45,32,20,20)
sticker.setAnimation("sticker_24_1");
sticker.scale=0.2

var meteoro= createSprite(348,44,20,20)
meteoro.setAnimation("sticker_23_1");
meteoro.scale=0.2

var planeta= createSprite(34,370,20,20)
planeta.setAnimation("sticker_22_1");
planeta.scale=0.2

var modoJogo="serve"

var goal =0;
var death = 0

hero.setAnimation("rocket2_1");
hero.scale=.1;
enemy1.setAnimation("spike_bot_1");
enemy1.scale=.2;
enemy2.setAnimation("spike_bot_walk_1");
enemy2.scale=.2;
enemy3.setAnimation("spike_bot_1");
enemy3.scale=.2;




function draw() {
  
//plano de fundo(b);

textSize(18);
  fill("black");
  text("mortes:" +death,300,380);

createEdgeSprites()

enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

 if (keyDown("space")) {
    modoJogo= "play"
    serve();
  }
  
  if(modoJogo == "serve")
  {
     fill("red")
    text("Pressione Espaço para Atacar",80,130);
   
  }
   if(modoJogo== "play")
  {
heromovimento()
  }
  
   if(modoJogo == "end")
  {
  var fim=createSprite(200,200,20,20)
  fim.setAnimation("youwin.png_1")
  fim.scale=0.5
  }
  

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1

}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
  modoJogo="end"
}


  
drawSprites()
}

function serve() {
enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);
}

function heromovimento() {
 if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
} 
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
