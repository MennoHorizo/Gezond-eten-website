shuffle_ing();

function shuffle_ing() {
    const img_1 =
        '<img src="../../images/brood.png" name="brood" class="brood" id="brood" alt="Brood" draggable="true">';
    const img_2 =
        '<img src="../../images/banaan.png" name="banaan" class="banaan" id="banaan" alt="Banaan"  draggable="true">';
    const img_3 =
        '<img src="../../images/vis.png" name="vis" class="vis" id="vis" alt="Vis"  draggable="true">';
    const img_4 =
        '<img src="../../images/boter.png" name="boter" class="boter" id="boter" alt="Boter"  draggable="true">';
    const img_5 =
        '<img src="../../images/thee.png" name="thee" class="thee" id="thee" alt="Thee"  draggable="true">';

    let rn_1, rn_2, rn_3, rn_4, rn_5, _1, _2, _3, _4, _5, numbers_good, c1, c2, c3, c4, c5;
    let rn_1_correct = false;
    let rn_2_correct = false;
    let rn_3_correct = false;
    let rn_4_correct = false;
    let rn_5_correct = false;

    random_numbers(true, true, true, true, true);

    function random_numbers(__1, __2, __3, __4, __5) {
        if (__1 == true) {
            rn_1 = Math.floor(Math.random() * 5 + 1);
        } else return;
        if (__2 == true) {
            rn_2 = Math.floor(Math.random() * 5 + 1);
        } else return;
        if (__2 == true) {
            rn_3 = Math.floor(Math.random() * 5 + 1);
        } else return;
        if (__2 == true) {
            rn_4 = Math.floor(Math.random() * 5 + 1);
        } else return;
        if (__2 == "1") {
            rn_5 = Math.floor(Math.random() * 5 + 1);
        } else return;
        console.log(rn_1, rn_2, rn_3, rn_4, rn_5);
        check_numbers();
    }

    function check_numbers() {
        if (rn_1 == rn_2 || rn_1 == rn_3 || rn_1 == rn_4 || rn_1 == rn_5) {
            console.log("rn 1 wasn't correct");
            random_numbers(true, true, true, true, true)
        } else {
            rn_1_correct = true;
        }
        if (rn_2 == rn_1 || rn_2 == rn_3 || rn_2 == rn_4 || rn_2 == rn_5) {
            console.log("rn 2 wasn't correct");
            random_numbers(true, true, true, true, true)
        } else {
            rn_2_correct = true;
        }
        if (rn_3 == rn_1 || rn_3 == rn_2 || rn_3 == rn_4 || rn_1 == rn_5) {
            console.log("rn 3 wasn't correct");
            random_numbers(true, true, true, true, true)
        } else {
            rn_3_correct = true;
        }
        if (rn_4 == rn_1 || rn_4 == rn_2 || rn_4 == rn_3 || rn_4 == rn_5) {
            console.log("rn 4 wasn't correct");
            random_numbers(true, true, true, true, true)
        } else {
            rn_4_correct = true;
        }
        if (rn_5 == rn_1 || rn_5 == rn_2 || rn_5 == rn_3 || rn_5 == rn_4) {
            console.log("rn 5 wasn't correct");
            random_numbers(true, true, true, true, true)
        } else {
            rn_5_correct = true;
        }

        if (
            rn_1_correct == true &&
            rn_2_correct == true &&
            rn_3_correct == true &&
            rn_4_correct == true &&
            rn_5_correct == true
        ) {
            numbers_good = true;
        } else {
            numbers_good = false;
            random_numbers(true, true, true, true, true);
        }
    }
    get_images_into_div();

    function get_images_into_div() {
        //image 1
        if (rn_1_correct == true) {
            if (rn_1 == "1") {
                _1 = img_1;
                console.log("plek 1 bezet");
            } else if (rn_1 == "2") {
                _2 = img_1;
                console.log("plek 2 bezet");
            } else if (rn_1 == "3") {
                _3 = img_1;
                console.log("plek 3 bezet");
            } else if (rn_1 == "4") {
                _4 = img_1;
                console.log("plek 4 bezet");
            } else if (rn_1 == "5") {
                _5 = img_1;
                console.log("plek 5 bezet");
            } else {
                console.error("error");
            }
        } else random_numbers(true, false, false, false, false);

        //image 2
        if (rn_2_correct == true) {
            if (rn_2 == "1") {
                _1 = img_2;
                console.log("plek 1 bezet");
            } else if (rn_2 == "2") {
                _2 = img_2;
                console.log("plek 2 bezet");
            } else if (rn_2 == "3") {
                _3 = img_2;
                console.log("plek 3 bezet");
            } else if (rn_2 == "4") {
                _4 = img_2;
                console.log("plek 4 bezet");
            } else if (rn_2 == "5") {
                _5 = img_2;
                console.log("plek 5 bezet");
            } else {
                console.error("error");
            }
        } else random_numbers(false, true, false, false, false);

        //image 3
        if (rn_3_correct == true) {
            if (rn_3 == "1") {
                _1 = img_3;
                console.log("plek 1 bezet");
            } else if (rn_3 == "2") {
                _2 = img_3;
                console.log("plek 2 bezet");
            } else if (rn_3 == "3") {
                _3 = img_3;
                console.log("plek 3 bezet");
            } else if (rn_3 == "4") {
                _4 = img_3;
                console.log("plek 4 bezet");
            } else if (rn_3 == "5") {
                _5 = img_3;
                console.log("plek 5 bezet");
            } else {
                console.error("error");
            }
        } else random_numbers(false, false, true, false, false);

        //image 4
        if (rn_4_correct) {
            if (rn_4 == "1") {
                _1 = img_4;
                console.log("plek 1 bezet");
            } else if (rn_4 == "2") {
                _2 = img_4;
                console.log("plek 2 bezet");
            } else if (rn_4 == "3") {
                _3 = img_4;
                console.log("plek 3 bezet");
            } else if (rn_4 == "4") {
                _4 = img_4;
                console.log("plek 4 bezet");
            } else if (rn_4 == "5") {
                _5 = img_4;
                console.log("plek 5 bezet");
            } else {
                console.error("error");
            }
        } else random_numbers(false, false, false, true, false);

        //image 5
        if (rn_5_correct == true) {
            if (rn_5 == "1") {
                _1 = img_5;
                console.log("plek 1 bezet");
            } else if (rn_5 == "2") {
                _2 = img_5;
                console.log("plek 2 bezet");
            } else if (rn_5 == "3") {
                _3 = img_5;
                console.log("plek 3 bezet");
            } else if (rn_5 == "4") {
                _4 = img_5;
                console.log("plek 4 bezet");
            } else if (rn_5 == "5") {
                _5 = img_5;
                console.log("plek 5 bezet");
            } else {
                console.error("error");
            }
        } else random_numbers(false, false, false, false, true);
    }

    function console_log() {
        console.log('')
        console.log('')
        console.log('')
        console.log('%cConsole', 'color: green; font-size: 100px;')
        console.log('')
        console.log('')
        console.log('')
        console.log(`Image 1 = ${img_1}`)
        console.log(`Image 2 = ${img_2}`)
        console.log(`Image 3 = ${img_3}`)
        console.log(`Image 4 = ${img_4}`)
        console.log(`Image 5 = ${img_5}`)
        console.log('')
        console.log(`_1 = ${_1}`);
        console.log(`_2 = ${_2}`);
        console.log(`_3 = ${_3}`);
        console.log(`_4 = ${_4}`);
        console.log(`_5 = ${_5}`);
        console.log('');
        console.log(`Random number 1 = ${rn_1}`);
        console.log(`Random number 1 correct = ${rn_1_correct}`);
        console.log('');
        console.log(`Random number 2 = ${rn_2}`);
        console.log(`Random number 2 correct = ${rn_2_correct}`);
        console.log('');
        console.log(`Random number 3 = ${rn_3}`);
        console.log(`Random number 3 correct = ${rn_3_correct}`);
        console.log('');
        console.log(`Random number 4 = ${rn_4}`);
        console.log(`Random number 4 correct = ${rn_4_correct}`);
        console.log('');
        console.log(`Random number 5 = ${rn_5}`);
        console.log(`Random number 5 correct = ${rn_5_correct}`);
        console.log('');
        console.log(`Alle random numbers good = ${numbers_good}`);
    }

    if (
        _1 == undefined ||
        _2 == undefined ||
        _3 == undefined ||
        _4 == undefined ||
        _5 == undefined
    ) {
        console.log('Er was er eentje undefined')
        check_numbers()
        get_images_into_div();
    } else console.log("Everything good");

    console.log(numbers_good);
    get_images_into_div();
    console_log();
    const div = `
        ${_1}
        ${_2}
        ${_3}
        ${_4}
        ${_5}
    `;
    console.log(div);
    document.getElementById("sv5").innerHTML = div;
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var d = document.createElement("div");
    if (
        data ==
        "http://127.0.0.1:5500/Version-2/Gezond-eten-website-Menno/website/images/brood.png"
    ) {
        event.target.appendChild(document.getElementById("brood"));
    } else if (
        data ==
        "http://127.0.0.1:5500/Version-2/Gezond-eten-website-Menno/website/images/banaan.png"
    ) {
        event.target.appendChild(document.getElementById("banaan"));
    } else if (
        data ==
        "http://127.0.0.1:5500/Version-2/Gezond-eten-website-Menno/website/images/vis.png"
    ) {
        event.target.appendChild(document.getElementById("vis"));
    } else if (
        data ==
        "http://127.0.0.1:5500/Version-2/Gezond-eten-website-Menno/website/images/boter.png"
    ) {
        event.target.appendChild(document.getElementById("boter"));
    } else if (
        data ==
        "http://127.0.0.1:5500/Version-2/Gezond-eten-website-Menno/website/images/thee.png"
    ) {
        event.target.appendChild(document.getElementById("thee"));
    } else console.error("error");
}

let X, Y;

function get_pos (element) {
    let rect = element.getBoundingClientRect()
    for (var key in rect) {
        if(typeof rect[key] !== 'function') {
          X = rect['left']
          Y = rect['top']
        }
      }
    return {
        x: X,
        y: Y
    }
}

function childOf(c,p){while((c=c.parentNode)&&c!==p);return !!c}

function check_if_correct () {
    const box_1 = document.getElementById('dropBox1')
    const box_2 = document.getElementById('dropBox2')
    const box_3 = document.getElementById('dropBox3')
    const box_4 = document.getElementById('dropBox4')
    const box_5 = document.getElementById('dropBox5')

    const img1 = document.getElementById('brood')
    const img2 = document.getElementById('banaan')
    const img3 = document.getElementById('vis')
    const img4 = document.getElementById('boter')
    const img5 = document.getElementById('thee')

    /*

    const box1_x = get_pos(box_1).x;
    const box2_x = get_pos(box_2).x;
    const box3_x = get_pos(box_3).x;
    const box4_x = get_pos(box_4).x;
    const box5_x = get_pos(box_5).x;

    const box1_y = get_pos(box_1).y;
    const box2_y = get_pos(box_2).y;
    const box3_y = get_pos(box_3).y;
    const box4_y = get_pos(box_4).y;
    const box5_y = get_pos(box_5).y;


    const img1_x = get_pos(img1).x;
    const img2_x = get_pos(img2).x;
    const img3_x = get_pos(img3).x;
    const img4_x = get_pos(img4).x;
    const img5_x = get_pos(img5).x;

    const img1_y = get_pos(img1).y;
    const img2_y = get_pos(img2).y;
    const img3_y = get_pos(img3).y;
    const img4_y = get_pos(img4).y;
    const img5_y = get_pos(img5).y;

    */


    let ca = false;
    c1 = childOf(img1, box_1);
    c2 = childOf(img2, box_2);
    c3 = childOf(img3, box_3);
    c4 = childOf(img4, box_4);
    c5 = childOf(img5, box_5);
    if(c1==true){if(c2==true){if(c3==true){if(c4==true){if(c5==true){ca=true}}}}};
    if(ca==true){alert('Correct.')}else{alert('Not correct.')}
    return ca;
}