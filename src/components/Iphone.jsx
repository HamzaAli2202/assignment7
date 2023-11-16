import React, { useState } from "react";
export const Iphone=()=>{
    const [brand,setBrand]=useState("");
    const[model,setModel]=useState("");
    const[color,setColor]=useState("");
    const[price,setPrice]=useState("");
    return(
        
        <table>
            <tr>
                <td><div><input type="text" placeholder="Enter Brand Name" onChange={(e)=>setBrand(e.target.value)} />
                </div></td>
                   <td><div>{brand}</div></td>
                    </tr>
                    <tr>
                        <td><div>{model}</div></td>
                        <td><div><input type="text" placeholder="Enter Model Name"onChange={(e)=>setModel(e.target.value)} /></div></td>
                        </tr>
                    <tr>
                        <td><div><input type="text" placeholder="Color Name" onChange={(e)=>setColor(e.target.value)} /></div></td>
                        <td><div>{color}</div></td>
                         </tr>
                    <tr><td><div>Rs.{price}</div></td>
                    <td><div><input type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} /></div></td></tr>
                    </table>
    )
}