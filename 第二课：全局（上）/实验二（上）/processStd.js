var student = {}
var stu = ['Name','Email','QQ','Mobile'];
var i = 1;
console.log(stu[0] + ":")
process.stdin.on("data",function(data){
    student[stu[i-1]] = data.toString('utf8');
    if(i == 4){
        console.log(student);
        process.exit();
        
    }
    else{
        
        console.log(stu[i++] + ":");
    }
    
});