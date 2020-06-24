var aPlzListGL = [
    "33829","33330","33331","33332","33333","33334","33335","33790","33428","33442","33449","33378","33397","33758","33803","33415","33775","33824"
];
var aPLYListWD = [
    "59227","59229","59269","48361","48317","59320","48351","59302","48346","48336","48324","48291","59329","48231"
];
$(document).ready(function () {
    $("#search").focus(function () {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function () {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function () {
        if ($(this).val().length === 5) {
            var arrayLength = aPlzListGL.length;
            for (var i = 0; i < arrayLength; i++) {
                if($(this).val() ===  aPlzListGL[i]){
                    console.log('found');
                    $("#notvalid").removeClass("in")
                    $("#notvalid").addClass("out")
                    $("#found").removeClass("out")
                    $("#found").addClass("in")
                };
            }
            var arrayLength = aPLYListWD.length;
            for (var i = 0; i < arrayLength; i++) {
                if($(this).val() ===  aPLYListWD[i]){
                    console.log('found');
                    $("#notvalid").removeClass("in")
                    $("#notvalid").addClass("out")
                    $("#found").removeClass("out")
                    $("#found").addClass("in")
                };
            }

        } else
        {
            $("#found").removeClass("in")
            $("#found").addClass("out")
            $("#notvalid").removeClass("out")
            $("#notvalid").addClass("in")
        }
    });
    $(".go-icon").click(function () {
        $(".search-form").submit();
    });
});