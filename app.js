    window.onload = function(){
    
    let cards = $("div:hidden");
    let images = $("img:hidden");
    
    console.log(images)
    $(cards[21]).fadeIn(1000);

    function variant(){
        $(cards[22]).fadeIn(1000);
        $(cards[16]).fadeIn(1000);
        $(cards[17]).fadeIn(1000);
        
    }
    
    setTimeout(variant, 2000)    
    
    function smile(){
        $(images[31]).fadeIn(1000);
        $(images[22]).fadeIn(1000);
        $(images[24]).fadeIn(1000);
    }
    setTimeout(smile, 3000)  
    
    function removeApps(){
        $(images[31]).fadeOut(1000);
        $(images[22]).fadeOut(1000);
        $(images[24]).fadeOut(1000);
        $(cards[22]).fadeOut(1000);
        $(cards[16]).fadeOut(1000);
        $(images[35]).fadeIn(1000);

    }
    
    setTimeout(removeApps, 4000) 
    
    function removeClient(){
        $(images[35]).fadeOut(1000);
        $(cards[21]).fadeOut(1000);
        $(cards[17]).fadeOut(1000);

    }
    
    setTimeout(removeClient, 5000) 
     

    function createDev(){
        $(cards[4]).fadeIn(1000);
    } 
    
    setTimeout(createDev, 6000)

    function appearDev(){
        $(cards[3]).fadeIn(1000);
        $(cards[10]).fadeIn(1000);
        $(cards[9]).fadeIn(1000);

    }
    setTimeout(appearDev, 7000) 

    function appearDevSmiles(){
       
        $(images[12]).fadeIn(1000);
        $(images[4]).fadeIn(1000);
        $(images[14]).fadeIn(1000);

    }
    setTimeout(appearDevSmiles, 8000);

    function remVar(){

        $(cards[9]).fadeOut(1000);
        $(images[4]).fadeOut(1000);
        $(images[12]).fadeOut(1000);
        $(images[14]).fadeOut(1000);
        $(images[44]).fadeIn(1000);
        $(images[45]).fadeIn(1000);
        
    }
    setTimeout(remVar, 9000);

    function frameWorks(){
        
        $(cards[2]).fadeIn(1000);
        $(cards[14]).fadeIn(1000);
        $(cards[15]).fadeIn(1000);
        $(cards[8]).fadeIn(1000);
    }
    setTimeout(frameWorks, 10000);

    function frameSmile(){
        $(images[2]).fadeIn(1000);
        $(images[10]).fadeIn(1000);
        $(images[18]).fadeIn(1000);
        $(images[20]).fadeIn(1000);
        
        
    }
    setTimeout(frameSmile, 11000);

    function remSmile(){
        $(images[2]).fadeOut(1000);
        $(images[10]).fadeOut(1000);
        $(images[18]).fadeOut(1000);
        $(images[20]).fadeOut(1000);
        $(cards[8]).fadeOut(1000);
        $(cards[14]).fadeOut(1000);
        $(images[46]).fadeIn(1000);
        $(images[47]).fadeIn(1000);
    }
    setTimeout(remSmile, 12000);


    function remDev(){
        $(images[46]).fadeOut(1000);
        $(images[47]).fadeOut(1000);
        $(images[44]).fadeOut(1000);
        $(images[45]).fadeOut(1000);
        $(cards[2]).fadeOut(1000);
        $(cards[15]).fadeOut(1000);
        $(cards[3]).fadeOut(1000);
        $(cards[10]).fadeOut(1000);
        $(cards[4]).fadeOut(1000);
        
    }
    setTimeout(remDev, 13000);


    function addClient(){
        $(images[35]).fadeIn(1000);
        $(cards[21]).fadeIn(1000);
        $(cards[17]).fadeIn(1000);
        $(cards[11]).fadeIn(1000);
        $(cards[18]).fadeIn(1000);
        $(images[36]).fadeIn(1000);
        $(images[37]).fadeIn(1000);

    }
    setTimeout(addClient, 14000);

    function addDev(){
        $(images[35]).fadeOut(500);
        $(cards[21]).fadeOut(500);
        $(cards[17]).fadeOut(500);
        $(cards[11]).fadeOut(500);
        $(cards[18]).fadeOut(500);
        $(images[36]).fadeOut(500);
        $(images[37]).fadeOut(500);

        $(images[46]).fadeIn(1000);
        $(images[47]).fadeIn(1000);
        $(cards[2]).fadeIn(1000);
        $(cards[15]).fadeIn(1000);
        $(cards[3]).fadeIn(1000);
        $(cards[10]).fadeIn(1000);
        $(cards[4]).fadeIn(1000);
        $(images[44]).fadeIn(1000);
        $(images[45]).fadeIn(1000);
        $(cards[13]).fadeIn(1000);
        $(cards[7]).fadeIn(1000);
        $(images[48]).fadeIn(1000);
        $(images[49]).fadeIn(1000);

    }
    setTimeout(addDev, 15000);

    function crCli(){
        $(images[35]).fadeIn(1000);
        $(cards[21]).fadeIn(1000);
        $(cards[17]).fadeIn(1000);
        $(cards[11]).fadeIn(1000);
        $(cards[18]).fadeIn(1000);
        $(images[36]).fadeIn(1000);
        $(images[37]).fadeIn(1000);
        
    }   

    setTimeout(crCli, 16000);


    


    function mainarrows(){
        $(images[38]).fadeIn(1000);
        $(images[39]).fadeIn(1000);
        $(images[40]).fadeIn(1000);
        $(images[41]).fadeIn(1000);
        $(images[42]).fadeIn(1000);
        $(images[43]).fadeIn(1000);
        
        
    }   

    setTimeout(mainarrows, 17000);

    function mvp(){

        $(cards[12]).fadeIn(1000);

    }

    setTimeout(mvp, 18000);

    function mvpArrows(){
        
        $(images[55]).fadeIn(1000);
        $(images[56]).fadeIn(1000);
        $(images[57]).fadeIn(1000);
        $(images[58]).fadeIn(1000);
       
    }

    setTimeout(mvpArrows, 19000);


    function data(){
        $(images[50]).fadeIn(1000);
        $(cards[19]).fadeIn(1000);
    }   

    setTimeout(data, 20000);
    
    function sql(){
        
        $(cards[20]).fadeIn(1000);
        $(cards[25]).fadeIn(1000);
    }   

    setTimeout(sql, 21000);

    function sqlSmile(){
        
        $(images[34]).fadeIn(1000);
        $(images[28]).fadeIn(1000);
    }   

    setTimeout(sqlSmile, 22000);

    function sqlSmileDel(){
        
        $(images[34]).fadeOut(1000);
        $(images[28]).fadeOut(1000);
        $(cards[25]).fadeOut(1000);
        $(images[51]).fadeIn(1000);
    }   

    setTimeout(sqlSmileDel, 23000);

    function dba(){
        $(cards[23]).fadeIn(1000);
    }   

    setTimeout(dba, 24000);
    
    function psql(){
        $(cards[24]).fadeIn(1000);
        $(images[53]).fadeIn(1000);
        $(images[52]).fadeIn(1000);
    }   

    setTimeout(psql, 25000);

    function devops(){
        $(images[54]).fadeIn(1000);
        $(cards[6]).fadeIn(1000);
    }   

    setTimeout(devops, 26000);

    function infrastr(){
        $(images[59]).fadeIn(1000);
        $(cards[1]).fadeIn(1000);
    }   

    setTimeout(infrastr, 27000);

    function cloud(){
        $(images[60]).fadeIn(1000);
        $(cards[0]).fadeIn(1000);
    }   

    setTimeout(cloud, 28000);
    
    function aws(){
        $(cards[5]).fadeIn(1000);
    }   

    setTimeout(aws, 29000);

    function awsSmile(){
        $(images[7]).fadeIn(1000);
    }   

    setTimeout(awsSmile, 30000);

    function awsSmileDel(){
        $(images[7]).fadeOut(1000);
        $(images[61]).fadeIn(1000);
    }   

    setTimeout(awsSmileDel, 31000);

}



