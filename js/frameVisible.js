function iframeVisible() {
    let x = document.getElementById('iframe_visible').style.getPropertyValue('visiblity');
    
    if (x == 'visible') {
        document.getElementById('iframe_visible').css('visiblity', 'hidden');
    }
    else {
        document.getElementById('iframe_visible').css('visiblity', 'visible');
    }
}

