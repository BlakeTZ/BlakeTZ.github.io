$(document).ready(function () { // do this when the document is loaded
    $("#Dialer").show(); // show the element with ID "element"
    $("#content_list").hide(); // hide the element with ID "otherElement"
    $("#add_content").hide(); // hide the element with ID "otherElement"
    $("#Aboutthisproject").hide();

    $("#Dialer").click(function () { // when "button_id" is clicked
        $("#dialer_pad").show(); // show element
        $("#content_list").hide();	// hide other element
        $("#add_content").hide();	// hide other element
        $("#Aboutthisproject").hide();
    });

    $("#list").click(function () { // when "button_id" is clicked
        $("#content_list").show(); // show element
        $("#add_content").hide();	// hide other element
        $("#dialer_pad").hide();	// hide other element
        $("#Aboutthisproject").hide();
    });

    $("#Add").click(function () { // when "button_id" is clicked
        $("#add_content").show(); // show element
        $("#dialer_pad").hide();	// hide other element
        $("#content_list").hide();	// hide other element
        $("#Aboutthisproject").hide();
    });

    $("#About").click(function () { // when "button_id" is clicked
        $("#Aboutthisproject").show(); // show elemenst
        $("#dialer_pad").hide();	// hide other element
        $("#content_list").hide();	// hide other element
        $("#add_content").hide();
    });
    //------------------------------------------------------------------------------
    var $textArea = $("#Test_gestures .textArea");
    var $pad = $("#Test_gestures .pad");
    var startX, startY, endX, endY;
    $pad
        /**mousedown**/
        .on('mousedown', function (event) {
            var e = event || window.event;
            startX = e.pageX;
            startY = e.pageY;
            $textArea.text('mouse down');
        })
        /**mouseup**/
        .on('mouseup', function (event) {
            var e = event || window.event;
            endX = e.pageX;
            endY = e.pageY;
            if (endX > startX) {
                $textArea.text("swipe right");
            } else if (endX < startX) {
                $textArea.text("swipe left");
            } else {
                $textArea.text("mouse up");
            }
        });
    phoneFn();
});

function phoneFn() {
    var $inp, $numBtn, $dialBtn, $clearBtn, num;
    num = '';
    $inp = $('input[name="textInp"]');
    $numBtn = $('.numBtn');
    $dialBtn = $('.dialBtn');
    $clearBtn = $('.clearBtn');
    $numBtn.each(function () {
        $(this).on('click', function () {
            num += $(this).text();
            $inp.attr('value', num);
        });
    });
    $dialBtn.on('click', function () {
        if (num.length === 0) {
            alert('');
        } else {
            alert('')
        }
    });
    $clearBtn.on('click', function () {
        num = '';
        $inp.attr('value', '');
    })
}
