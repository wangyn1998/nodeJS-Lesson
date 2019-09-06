var student = {}
var stu = ['Name','Email','QQ','Mobile'];
var i = 0;
process.stdin.on("data",function(data){
    i++;
    if(i = 4){
        process.exit();
        console.log(student);
    }
    else{
        console.log(stu[i] + ":")
        student[stu[i]] = data.toString('utf8');
    }
});