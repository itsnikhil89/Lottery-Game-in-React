import { useState } from "react";

export default function Lottery(){
  
    const[ticket,setTicket]=useState(null);
    const[message,setMessage]=useState("");

    function GenerateTicket(){
        let arr=new Array(3);
        for(let i=0;i<3;i++){
            arr[i]=Math.floor(Math.random()*10);
        };
        setTicket(arr);
        setMessage("");
    }
   
    function check(arr){

        let sum= arr.reduce((x,val)=> x+val ,0);
        
        if(sum===15){
            setMessage("Congrats you won the lottery !");
        }
        else{
            setMessage("Sorry you didn't won ,genearate new ticket and try again!");
        }
    }
    
     
    return (
        <div>
             <h2>Lottery Game</h2>
             <br></br><br></br>
             <button  onClick={GenerateTicket}   style={{backgroundColor:"greenyellow"}}>Generate New Ticket</button>

             {ticket && (
                <>
                <h4> Ticket number is : {ticket[0]} {ticket[1]} {ticket[2]}</h4><br></br>
                <button onClick={()=>check(ticket)}  style={{backgroundColor:"violet"}}>Check Result</button>
                
                {message && <h4 style={{color: message.includes("Congrats")? "green" :"red"}}>{message}</h4>}
                </>
             )}
             
        </div>
    )
}