const subjects=["physics","chemistry","maths"];
for(let i=0;i< subjects; i++)
{
    console.log(subjects[i].subjects)
}
for(let department in subjects)
{
    console.log(subjects[department])
}
for(let department of subjects){
    console.log(department)
}
subjects.forEach((subjects)=>console.log('subjects'))
document.getElementById('result').innerHTML=subjects


