var Dalton = {};
Dalton.initInfoArray = function() {
    var retObj = {
        name: 'Dalton',
    }

    var infoArray = [];

    var i1 = {
        words: "After years of experimentation, careful measurements and the study of previous experiments; "
            + "John Dalton developed a theory to explain the composition of elements.",
        imageSrc: "Dalton/img/animation1.gif",
        isFirst:true
    };
    infoArray.push(i1);
    var i2 = {
        words: "He believed that any elements, solid liquid or gas, could be divided into smaller and smaller pieces until it reached the "
            + "smallest piece possible.<br/><br/>He called these pieces 'Atoms'.  " 
            + "Atoms can not be divided further and can not be created or destroyed.",
        imageSrc: "Dalton/img/animation2.gif",
    }
    infoArray.push(i2);
    var i3 = {
        words : "All atoms of a given element have the same properties- especially mass.  Atoms of different elements show different "
        + "properties and have a different mass.",
        imageSrc: "Dalton/img/animation3.gif",
    }
    infoArray.push(i3);
    var i4 = {
        words : "Atoms of different elements combine in whole-number ratios to form chemical compounds.",
        imageSrc: "Dalton/img/animation4.gif",
    }
    infoArray.push(i4);
    var i5 = {
        words : "Chemical reactions are the rearrangement of atoms.",
        imageSrc: "Dalton/img/animation5.gif",
    }
    infoArray.push(i5);
    var i6 = {
        words : "<b>Summary of Daltons Atomic Theory:</b><br/>  1. All elements are composed of Atoms which can not be divided, created or destroyed.<br/>  2. All atoms of a given element have the same properties (especially mass).  Atoms of different elements are different.<br/>  3. Atoms of different elements combine in whole-number ratios to form chemical compounds.<br/>  4. Chemical reactions are the rearrangement of atoms.",
        imageSrc: "Dalton/img/animation5.gif",
    	isLast:true
    }
    infoArray.push(i6);

    retObj.infoArray = infoArray;
    return retObj;
}
