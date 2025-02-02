var data = [
    {
        name:"Google",
        employees:[
            {
                id:101,
                name:"Sundar pichay",
                post:"CEO",
                salary:123
            },
            {
                id:102,
                name:"Larry Page",
                post:"Founder",
                salary:190
            },
            {
                id:103,
                name:"Sergey Brin",
                post:"Founder",
                salary:180
            }

        ]
    },
    {
        name:"Facebook",
        employees:[
            {
                id:1001,
                name:"Mark",
                post:"CEO",
                salary:145
            },
            {
                id:1005,
                name:"Zuke",
                post:"Founder",
                salary:180
            }
        ]
    },
]

const googleEmps = data.find((comp)=>comp.name == "Google").employees
console.log(googleEmps)
const googleEmps1 =data.find((comp)=>comp.name=="Google").employees.filter((emp)=>emp.post=="Founder")
console.log(googleEmps1)


const fb = data.find((comp)=>comp.name =="Facebook").employees.reduce((acc,emp)=> acc+emp.salary,0)
console.log(fb)


const allEmps = data.flatMap((emp)=>{
    return emp.employees.map((e)=>{
        return e.name
    })
})
console.log(allEmps)