document.getElementById("calculate").addEventListener("click", calculate);

function calculate() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
      document.getElementById("result").innerHTML = "Please enter valid height and weight";
      document.getElementById("result").classList="text-md font-semibold text-red-500 text-center" ;
    }
    else{
       let bmi = (weight / Math.pow(height / 100,2)).toFixed(2);
         document.getElementById("result").innerHTML = 'your Bmi is : ' + bmi;
            document.getElementById("result").classList="text-md font-semibold text-green-500 text-center" ;
    }
}









// function getdata(){
//     let weight = document.getElementById('weight').value;
//     console.log(weight);     
//    }


// let weight = document
// .getElementById('weight')
// .addEventListener("click",getdata);


