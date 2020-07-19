function *test(){
    yield 1;
    yield 2 ;
    yield 3
}
let b=test();
//console.log(b.next().value)
let a=1;
if(b.next().value === 1 && b.next().value===2 && b.next().value===3){
    console.log(666)
}