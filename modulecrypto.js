var crypto = require('crypto');

var password = 'test1234!@#$';

var shasum = crypto.createHash('sha256');
shasum.update(password);
var output = shasum.digest('hex');

console.log('password='+password);
console.log('hash='+output);

var shasum2 = crypto.createHash('sha256');
shasum2.update('test1234~@##');
var output2 = shasum2.digest('hex');

var secret_key = "TESTSECRETKEY";
var cipher = crypto.createCipher('aes192',secret_key);
cipher.update(password,'utf8','base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192',secret_key);
decipher.update(cipheredOutput,'base64','utf8');
var decripheredOutput = decipher.final('utf8');

console.log('ciphere password='+cipheredOutput);
console.log('deciphere password='+decripheredOutput);

var fs = require('fs');
var data={password:password,output:output,cipheredOutput:cipheredOutput};

fs.writeFile('password.txt',JSON.stringify(data),
	'utf8', function(err){
		if(err){
			console.log(err);
		}else{
		
		console.log('write complete..');
	}
});

fs.readFile ('password.txt','utf8',function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log('data='+data);
	}
});