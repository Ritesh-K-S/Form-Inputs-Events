
//on change event on radio button from inline event..
function radioBtnChange(v)
{   
    $("#radiobtninline-result").html('Inline: '+v);
}


//on change event on radio button from external event..
$('input[type="radio"]').on('change',function(e){
    console.log(e.target);
    console.log(e.target.value);
    var res=$(this).val();
    $("#radiobtnexternal-result").html('External: '+res);
})

