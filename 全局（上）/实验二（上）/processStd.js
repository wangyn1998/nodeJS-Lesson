var student = {}
var stu = ['Name','Email','QQ','Mobile'];
var i = 0;
console.log(stu[0] + ":")
process.stdin.on("data",function(data){
    if(i == 3){
        console.log(student);
        process.exit();
        
    }
    else{
        student[stu[i]] = data.toString('utf8');
        i++;
        console.log(stu[i] + ":");
    }
    
});