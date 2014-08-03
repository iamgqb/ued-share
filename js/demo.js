

var down = function(){
    $('#simulation-move').animate({
        top:'100px'
    }, 2000, 'linear',function(){
        up();
    });
}
var up = function(){
    $('#simulation-move').animate({
        top:0
    }, 2000, 'linear', function(){
        down();
    });
}

var big = function(){
    $('#simulation-scale').animate({
        width:'100px',
        height:'100px'
    }, 2000, 'linear',function(){
        small();
    });
}
var small = function(){
    $('#simulation-scale').animate({
        width:'50px',
        height:'50px'
    }, 2000, 'linear', function(){
        big();
    });
}
down();
big();
