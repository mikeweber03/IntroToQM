var Democritus = {};

Democritus.initInfoArray = function() {
    var retObj = {
        name: 'Democritus',
        imgSize: 60
    }

    var infoArray = [];

    var i1 = {
        words: `Let's start this chapter with a thought puzzle.  
            Ancient Greeks did not have the concept of experimental science.
            All of their scientific inquiry relied on 'thought puzzles'.
            <br/><br/>Democritus was an ancient Greek philosopher who lived around 350 BC, and speculated on what the smallest piece of a material (in this case a gold bar) could possibly be cut.<br/><br/>`,
        imageSrc: "",
        isFirst:true
    };
    infoArray.push(i1);
    var i2 = {
        words: "He believed that a material could be cut into smaller and smaller pieces until it reached the smallest piece possible.<br/><br/>He named this smallest piece 'uncuttable'. In Greek, the word is 'atomic'.<br/><br/>",
        imageSrc: "Democritus/img/animation2.gif",
    }
    infoArray.push(i2);
    var i3 = {
        words : "These atomic pieces were able to form into larger materials due to their shape. Gold, iron and other solids had hooks or ridges that allowed them to be mechanically interlocked.<br/><br/>The stronger the material (like iron), the more elaborate the mechanical interlocking of the pieces.  He speculated that water and other fliuds had smooth pieces that prevented interlocking.",
        imageSrc: "Democritus/img/animation3.gif",
        isLast:true
    }
    infoArray.push(i3);

    retObj.infoArray = infoArray;
    return retObj;
}
