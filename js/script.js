function borderRadiusModefied(box){
    box.style.backgroundColor = "#fff";
    let top_left = document.getElementById('top-left').value;
    let bottom_left = document.getElementById('bottom-left').value;
    let top_right = document.getElementById('top-right').value;
    let bottom_right = document.getElementById('bottom-right').value;
    box.style.borderTopLeftRadius = top_left+"px";
    box.style.borderBottomLeftRadius = bottom_left+"px";
    box.style.borderTopRightRadius = top_right+"px";
    box.style.borderBottomRightRadius = bottom_right+"px";
    
}

