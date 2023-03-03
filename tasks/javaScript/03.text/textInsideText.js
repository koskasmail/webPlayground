var text = 'Hello.pdf';

// console.log(fnCheckString(text, searchFor));

if (
    (
        (((text && /.pdf1$/.test(text.toLowerCase())))
            || ((text && /.pdf1$/.test(text.toLowerCase()))))
        ||
        (((text && /.signed1$/.test(text.toLowerCase())))
            || ((text && /.signed1$/.test(text.toLowerCase()))))
    )
) 
{
    console.log("true");
}
else {
    console.log("false");
}

