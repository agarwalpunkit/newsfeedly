
      const url='https://newsapi.org/v2/top-headlines?country=in&apiKey=3b6fdbc8f4b1447c9fbd5f0fb556acaa';      
        fetch(url).then((res)=>res.json())
        .then(data=>{
          let result=  `<h2> Latest News </h2>`;
          for(let i=0;i<data.articles.length;i++)
          {
            result+=`<h3>Headline-  ${data.articles[i].title}</h3>
                <h4>Source Name- ${data.articles[i].source.name} </h4>
                <img src=${data.articles[i].urlToImage} alt='image not found' width="150px" height="100px"/>
                <p>Description-  ${data.articles[i].description}</p>`;
            document.getElementById('id1').innerHTML = result; 

          }

        });
     
       
      document.getElementById('getPosts').addEventListener('click',getPosts);
      function getPosts()
      {
        var x = document.getElementById("id2").value;
         var ar=[];
        console.log(x);
        if(x==" ")
        {
          alert("Enter your search feed");
        }
        else
        {
          var ar=[];
          var cbox=document.getElementsByClassName('cBox');
          
          for(var i=0;i<cbox.length;i++)
          {
            if(cbox[i].checked===true)
            {
              ar.push(cbox[i].value);
            }
          }
          if(ar.length==0)
          {
            alert("Enter Source");
          }
          else
          {
            var count=0;
            document.getElementById('id1').innerHTML=null;
            for(var i=0;i<ar.length;i++)
            {
              console.log(ar.length); 
              console.log(ar[i]);
              fetch(`https://newsapi.org/v2/top-headlines?q=${x}&sources=${ar[i]}&apiKey=3b6fdbc8f4b1447c9fbd5f0fb556acaa`)
              .then((res)=>res.json())
              .then(data=>{
                console.log(data.articles.length);
                if(data.articles.length==0)
                {
                  //document.getElementById('id1').innerHTML="NOT FOUND Now from another sources ";
                  count++;
                  console.log("asfwg "+count );
                  if(count==ar.length)
                  {
                    const url=`https://newsapi.org/v2/top-headlines?q=${x}&apiKey=3b6fdbc8f4b1447c9fbd5f0fb556acaa`;      
                    fetch(url).then((res)=>res.json())
                    .then(data=>{
                      let result=  `<h2> NOT FOUND in ${ar}....News from another sources... </h2>`;
                      for(let i=0;i<data.articles.length;i++)
                      {
                        result+=`<h3>Headline-  ${data.articles[i].title}</h3>
                        <h4>Source Name- ${data.articles[i].source.name} </h4>
                        <img src=${data.articles[i].urlToImage} alt='image not found' width="150px" height="100px"/>
                        <p>Description-  ${data.articles[i].description}</p>`;
                        document.getElementById('id1').innerHTML = result; 
                      }
                    });
                  }   
                }
                else
                {
                  let result=  `<h2> News related to ${x} </h2>`;
                  var t=document.createElement('div');
                  for(let j=0;j<data.articles.length;j++)
                  {
                    result+=`<h3>Headline-  ${data.articles[j].title}</h3>
                    <h4>Source Name- ${data.articles[j].source.name} </h4>
                    <img src=${data.articles[j].urlToImage} alt='image not found' width="150px" height="100px"/>
                    <p>Description-  ${data.articles[j].description}</p>`;
                    t.innerHTML=result
                    document.getElementById("id1").appendChild(t);
                  }
                }
              });
              console.log("rger "+ count);
              console.log("sdgg" + ar.length);
            }
          } 
        }
      }
    