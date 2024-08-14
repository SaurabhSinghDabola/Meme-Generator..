import { useEffect, useState } from "react";

function Meme(){
   
    // initializing an object with text and Imgae 
    // or defining a state for image , toptext , bottom-text in  a single object
    
   const[meme, setmeme]  = useState({
                                       toptext : " ",
                                       bottomtext : " ",
                                       randomImg : "https://i.imgflip.com/30b1gx.jpg"

                                    });

    const [allMemeImage, setAllMemeImage]= useState([]);
 
    // getting image Array  data from API call (side effect )

    useEffect(()=>{

           fetch("https://api.imgflip.com/get_memes")
          .then((resp) => resp.json())
          .then((data)=>  setAllMemeImage(data.data.memes));
            
             }, [])
    
   // getting random Image url from memes Array. 
   // and updating our randomImg intital Value with randaom url.. 

     function getRandomImage( ){
        const  memsArray  = allMemeImage;
        const randomNo = Math.floor(Math.random()* memsArray.length );
        const Url = memsArray[randomNo].url;
        setmeme(prev => ({
            ...prev , randomImg : Url

        }));
}

// setting topText and botom text with random image..


     function handleChange(event){
         const {name, value} = event.target;
         setmeme(prev => ({
            ...prev ,
            [name] : value

        }))
     }

   return (
      <main>
        <div className="form">
            <input  type = "text"  
                    placeholder="top text"  
                    className="form--input"
                    name = "toptext"
                    value={meme.toptext}
                    onChange= {handleChange}
                    
                    />
            
            <input type = "text" 
                   placeholder = "bottom text" 
                   className="form--input" 
                   name="bottomtext"
                   value={meme.bottomtext}
                   onChange={handleChange}
                   
                   />

            <button className="form--button" 
                    type = "button" 
                    onClick={ getRandomImage}>Get a new image</button>
         </div>

         <div className="meme">
            <img src = {meme.randomImg} className="meme-Img"></img>
        
         <div className="text">
            <h2 className="meme-text top">{meme.toptext} </h2>
             <h2 className="meme-text bottom">{meme.bottomtext}</h2>
        </div>
        </div>
     </main>
       
    )
        

    
}

export default Meme; 