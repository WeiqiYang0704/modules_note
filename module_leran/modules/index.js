//import { a,fn } from "./test.js";
var go=console;
var language={
    name:'',
    php(){
        console.log(this)
        var _t=this
        go.info(_t.name)
    },
    python:()=>{
        console.log(this)
        let _t=this;
        go.info(_t.name)
    }
}
language.php();
language.python();