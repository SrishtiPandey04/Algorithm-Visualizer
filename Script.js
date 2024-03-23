const n = 20
const array=[];

for(let i=0;i<n;i++){
    array[i]=Math.randomm();
}

const cols=[];
const spacing=myCanvas.width/n;
const ctx=myCanvas.getContext("2d");

for(let i=0;i<array.length;i++){
    const x=i*spacing+spacing/2;
    const y=myCanvas.height;
    const width=spacing;
    const height=myCanvas.height*array[i];

}