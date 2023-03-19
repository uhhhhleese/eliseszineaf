
let x = 0;
let y = 0;


const ele = document.getElementById('dragMe');


const mouseDownHandler = function (e) {

    x = e.clientX;
    y = e.clientY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
   
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    
    ele.style.top = `${ele.offsetTop + dy}px`;
    ele.style.left = `${ele.offsetLeft + dx}px`;

    
    x = e.clientX;
    y = e.clientY;
};

const mouseUpHandler = function () {
   
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);

/************		
*     Title: <Make a draggable element>
*     Author: <Nguyen Huu Phuoc>
*     Date: <3/18/2023>
*     Code version: <Javascript>
*     Availability: <https://htmldom.dev/make-a-draggable-element/>
************/