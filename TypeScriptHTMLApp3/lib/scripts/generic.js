var currentIndex;

var infoArray = [];
var name;

function init(_obj) {
 
    $("#navPrev").click(function () {
        goToPrevStep();
    });

    $("#navNext").click(function () {
        goToNextStep();
    });

    $(".picker").click(function (e) {
        var _data = $(this).attr("data");
        var obj = {};
        if (_data == "Dalton") {
            obj = Dalton.initInfoArray();
        }
        if (_data == "Democritus") {
            obj = Democritus.initInfoArray();
        }
        initScreen(obj);
    })

    initScreen(_obj);
}

function initScreen(_obj) {
    infoArray = _obj.infoArray;
    name = _obj.name;
    $('.navbar-brand').html(name);

    currentIndex = 0;
    genericStep();
}

function genericStep() {
    $("#imgContent").attr("src", "");
    var pWords = $("#pWords");
    pWords.empty();
    pWords.append(infoArray[currentIndex].words);

    $("#navPrev").hide();
    $("#navNext").hide();
    if (!infoArray[currentIndex].isLast) {
        $("#navNext").show();
    }
    if (!infoArray[currentIndex].isFirst) {
        $("#navPrev").show();
    }
    if (infoArray[currentIndex].imageSrc) {
        $("figure").show();
        $("#imgContent").attr("src", infoArray[currentIndex].imageSrc);
    }
    else {
        $("figure").hide();
    }
}

function goToNextStep() {
    currentIndex++;
    genericStep();
}

function goToPrevStep() {
    currentIndex--;
    genericStep();
}

