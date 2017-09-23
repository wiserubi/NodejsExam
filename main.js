//전역변수 출력
console.log('filename:',__filename);
console.log('dirname:'+__dirname);

//전역객체 
console.log('숫자:%d + %d =%d',273,52,273+52);
console.log('문자열:%s',' Hello World ..!','특수기호와 상관없음');
console.log('JSON:%j', {name:'Hong'});
console.log('JSON:'+{name:'Hong'});
console.log('JSON:'+JSON.stringify({name:'Hong'}));

var obj={name:'Hong'};
obj = JSON.stringify(obj);
obj = JSON.parse(obj);

console.time('alpha');
var output = 1;
for (var i= 1; i <=10 ; i ++){
	output *=i;
}
console.log ('Result='+output) ;
console.timeEnd('alpha');

var module = require('/module.js');
console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));