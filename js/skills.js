function skill(id, percent){
    var bar = new ProgressBar.Circle(id, {
        color: '#9291FF',
        strokeWidth: 7,
        trailWidth: 7,
        duration: 1800,
        step: function(state, bar){
            bar.setText(Math.round(bar.value()*100) + '%');
        },
    
    });
    bar.animate(percent);    
}
skill('#ae',0.85)
skill('#pp',0.80)
skill('#ps',0.70)
skill('#html',0.70)
skill('#css',0.65)