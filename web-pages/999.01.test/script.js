var index = 0;

function test() {
    console.log('test' + this.index);
    this.index++;
}

function checkValueTest(text, field) {
    if ((text !== null) && (text.length > 0)) {
        console.log('[' + text + '] size::' + text.length);
        return text;
    }
    else {
        console.error('else text');
        return 'Eneter some Text into field #' + field;
    }
}

function checkValue(field1, field2) {
    if (
        ((field1 !== null) && (field1.length > 0))
        && ((field2 !== null) && (field2.length > 0))
    ) { return true; }
    else { return false; }
}


function fnSubmit() {
    const estext = document.getElementById("estext").value;
    const cstext = document.getElementById("stext").value;
    const lresult = document.getElementById("lresult");

    console.log(estext + ' ' + cstext);
    
    // lresult.value = checkValue(estext, 1) + " " + checkValue(cstext, 2);
    
    lresult.value = checkValue(estext, cstext);
}


