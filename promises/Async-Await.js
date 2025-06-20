    function walkDog(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const dogwalked = true;
                    if(dogwalked){
                        resolve("you walk the dog");
                    }else{
                        reject("you didn't walked");
                    }
            },1500);
        });
    }
    function cleankitchen(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const kitchenCleaned =true;
                    if(kitchenCleaned){
                        resolve('you clean the kitchen');
                    }else{
                        reject("you didn't cleaned");
                    }
            },2500);       
        });
    }
    function takeoutTrash(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const trashout = true;
                    if(trashout){
                        resolve('you take out the trash');
                    }else{
                        reject("you didn't do that");
                    }  
            },500);
        });
    }
     async function dogwalked() {
        try{
            const walkdogResult = await walkDog();
            console.log(walkdogResult);

            const cleankitchenResult = await cleankitchen();
            console.log( cleankitchenResult );

            const takeoutTrashResult = await takeoutTrash();
            console.log(takeoutTrashResult);

            console.log('you finished all the work')
        }
        catch(error){
            console.error(error);
        }
     }
  