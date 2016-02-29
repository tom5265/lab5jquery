var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$(document).ready(function(){   
    $('#keyboard-upper-container').hide();
     $('#word-container').append(sentences[0]);
});

$(this).keydown(function (e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }  
});

$(this).keyup(function (e) {
    if (e.which == 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }   
});

$(document).keypress(function (e) {
    var keycode = $('#' + e.which);
    
    keycode.css('background-color', '#D3D3D3');
    
    $(document).keyup(function (x) {
        keycode.css('background-color', '#f5f5f5');
    });
});

$(document).keypress(function (e) {
    var keycode = $('#' + String.fromCharCode(e.which));
    
    keycode.css('background-color', '#D3D3D3');
    
    $(document).keyup(function (e) {
        keycode.css('background-color', '#f5f5f5');
    });
});

