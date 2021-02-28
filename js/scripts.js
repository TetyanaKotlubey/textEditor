(function(){

    let editor = document.querySelector('.editor'),
    preview = document.querySelector('.editor__preview'),
    tool = document.querySelector('.editor__tool');

    document.body.addEventListener('keydown', function(e){
        
        if (e.code == 'KeyE' && e.ctrlKey)
        {
            e.preventDefault();
            editor.classList.add('editor--active');
            tool.value = preview.innerText;
            
        }
        if (e.code =='KeyS' && e.ctrlKey)
        {
            e.preventDefault();
            editor.classList.remove('editor--active');
            preview.innerText = tool.value;
        }
    })
    let resizerBtn = document.querySelector('#resizerBtn'),
    resizer = document.querySelector('#resizer'), 
    resizerWidth = resizer.clientWidth,
    resizerHeight = resizer.clientHeight, 
    isBtnPressed = false,
    x = 0, y = 0;
    resizerBtn.addEventListener('mousedown', function(e)
    {
        console.log(e);
        isBtnPressed = true;
        x = e.x;
        y = e.y;
        // console.log(resizer.clientWidth);
        // console.log(resizer.clientHeight);
        // console.log(resizer.style);
        // console.log(resizer.style.width);
        // console.log(resizer.style.height);
        // resizer.style.width = '500px';
    });
    resizerBtn.addEventListener('mouseleave', function(a)
    {
        console.log(a);
        isBtnPressed = false;
        
    });
    resizerBtn.addEventListener('mouseup', function(a)
    {
        console.log(a);
        isBtnPressed = false;
        
    });
    resizerBtn.addEventListener('mousemove', function(e)
    {
        if (isBtnPressed)
        {
            console.log(e);
            resizerWidth+= e.movementX *2;
            resizerHeight+= e.movementY *2;
            resizer.style.width = resizerWidth + 'px';
            resizer.style.height = resizerHeight + 'px';
        }
    });

})();