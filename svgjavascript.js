//svg showing funtion
function show(resign) {
    switch (resign) {
        case seoul:
            document.getElementById("seoul").style.display = "inline";
            document.getElementById("seoul_text").style.display = "block";
            break;
        case gangwon:
            document.getElementById("gangwon").style.display = "inline";
            document.getElementById("gangwon_text").style.display = "block";
            break;
        case choongnam:
            document.getElementById("choongnam").style.display = "inline";
            document.getElementById("choongnam_text").style.display = "block";

            break;
        case choongbook:
            document.getElementById("choongbook").style.display = "inline";
            document.getElementById("choongbook_text").style.display = "block";

            break;
        case kyoungbook:
            document.getElementById("kyoungbook").style.display = "inline";
            document.getElementById("kyoungbook_text").style.display = "block";

            break;
        case jeounbook:
            document.getElementById("jeounbook").style.display = "inline";
            document.getElementById("jeounbook_text").style.display = "block";

            break;
        case kyoungnam:
            document.getElementById("kyoungnam").style.display = "inline";
            document.getElementById("kyoungnam_text").style.display = "block";

            break;
        case jeounnam:
            document.getElementById("jeounnam").style.display = "inline";
            document.getElementById("jeounnam_text").style.display = "block";

            break;
        case jeju:
            document.getElementById("jeju").style.display = "inline";
            document.getElementById("jeju_text").style.display = "block";

            break;
        case busan:
            document.getElementById("busan").style.display = "inline";
            document.getElementById("busan_text").style.display = "block";

            break;

    }
}

function hide(resign) {
    switch (resign) {
        case seoul:
            document.getElementById("seoul").style.display = "none";
            document.getElementById("seoul_text").style.display = "none";
            break;
        case gangwon:
            document.getElementById("gangwon").style.display = "none";
            document.getElementById("gangwon_text").style.display = "none";
            break;
        case choongnam:
            document.getElementById("choongnam").style.display = "none";
            document.getElementById("choongnam_text").style.display = "none";
            break;
        case choongbook:
            document.getElementById("choongbook").style.display = "none";
            document.getElementById("choongbook_text").style.display = "none";
            break;
        case kyoungbook:
            document.getElementById("kyoungbook").style.display = "none";
            document.getElementById("kyoungbook_text").style.display = "none";
            break;
        case jeounbook:
            document.getElementById("jeounbook").style.display = "none";
            document.getElementById("jeounbook_text").style.display = "none";
            break;
        case kyoungnam:
            document.getElementById("kyoungnam").style.display = "none";
            document.getElementById("kyoungnam_text").style.display = "none";
            break;
        case jeounnam:
            document.getElementById("jeounnam").style.display = "none";
            document.getElementById("jeounnam_text").style.display = "none";
            break;
        case jeju:
            document.getElementById("jeju").style.display = "none";
            document.getElementById("jeju_text").style.display = "none";
            break;
        case busan:
            document.getElementById("busan").style.display = "none";
            document.getElementById("busan_text").style.display = "none";
            break;

    }
}