/* Global Variables */




const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip="
const key = "&appid=c2bfc6aa40b0491490c453c42271fe9d"

const feelings = document.querySelector("#feelings")
const zipCode = document.querySelector("#zipCode")
const result = document.querySelector("#result")
const date =  document.querySelector("#date")
const temp =  document.querySelector("#temp")
const feel = document.querySelector("#feel")
// Create a new date instance dynamically with JS


const getWeather = async(zipCode)=>{
        let res =  await fetch(baseUrl + zipCode + key);
        try{                        
            return  await res.json()
        }
        catch(error){
            console.log(error)
        }        
    }   

 

function getDate(){
    let d = new Date();
    return d
}


const addData = async(url="" , data = {})=>{
    let res = await fetch(url,{
        method:"POST",
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    try{
        console.log(await res.json())
    }
    catch(error){
        console.log(error)
    }
}

const getData = async(url = "" )=>{

    let data = await fetch(url)

    try{
        return data.json()
    }
    catch(error){
        console.log(error)
    }
}   

function resetData(){  
    date.innerHTML = "Date: "
    temp.innerHTML = "Temperature: "
    feel.innerHTML = "Feelings: "  
}

function updateUI(){
    getData("/getData")
    .then(data => {
        date.innerHTML += data.date
        temp.innerHTML += data.temp
        feel.innerHTML += data.feelings        
    })
    
    
}



button.addEventListener('click' ,  ()=>{  
    resetData()  
    getWeather(zipCode.value)
    .then(data=>{        
        addData("/addData", {temp: data.main.temp ,  date: getDate() , feelings: feelings.value})
        .then(updateUI())
    })
})




