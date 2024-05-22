function loadData(cid){
    const url = `https://openapi.programming-hero.com/api/news/category/${cid}` 
    fetch(url)
    .then(res => res.json())
    .then(data => displayCart(data.data))

    const catagoryName = document.getElementById('catagoryName')
    if(cid === '01'){
        catagoryName.innerText = "Breaking News"
    }else if(cid === '02'){
        catagoryName.innerText = "Regular News"
    }
    else if(cid === '03'){
        catagoryName.innerText = "International News"
    }
    else if(cid === '04'){
        catagoryName.innerText = "Sports"
    }
    else if(cid === '05'){
        catagoryName.innerText = "Entertainment"
    }
    else if(cid === '06'){
        catagoryName.innerText = "Culture"
    }
    else if(cid === '07'){
        catagoryName.innerText = "Arts"
    }
    else if(cid === '08'){
        catagoryName.innerText = "All News"
    }else{
        catagoryName.innerText = "Home"
    }

}




function displayCart(datas){
        const totalNews = datas.length 
        const countNews = document.getElementById('countNews')
        countNews.innerText = totalNews;
    const newsContainer = document.getElementById('newsContainer') 

    newsContainer.innerHTML = ``;
    for(const data of datas){
        const newDiv = document.createElement('div')
        newDiv.classList.add('row')
        newDiv.innerHTML = `
        <div id="" class="row"> 
        <div class="card mb-3 w-100%" >
            <div  class="row g-0">
              <div class="col-md-4">
                <img src="${data.image_url}" class="img-fluid rounded-start" style="height: 350px;" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title fs-3 fw-bold">${data.title}</h5>
                  <p class="card-text">From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the
                    best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer roundup.
                    </p>
                  <p class="card-text">Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black
                    Friday and Gucci Black Friday...</p>

                  <div>
                    <div class="row">
                        <div class="col-3">
                            <div class="card mb-3" style="max-width: 100%">
                                <div class="row g-0">
                                  <div class="col-md-4 ps-3 pt-3">
                                    <img src="${data.author.img}" class="rounded-circle " style="height: 40px; width: 40px;">
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body">
                                      <p class="card-text my-0">${data.author.name}</p>
                                      <p class="card-text my-0"></p>
                                      <p class="card-text my-1">${data.author.published_date}<small class="text-body-secondary"></small></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-3"></div>
                        <div class="col-3">
                            <button type="button" onclick="getNewsId('${data._id}')" class="btn btn-outline-secondary px-5 py-2 mt-5 ms-5" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>

                    </div>
                  </div>
                  
                </div>
              </div>
            </div>




          </div>
    </div>
        `;

        // const totalNews = data.length 
        // console.log(totalNews)

        newsContainer.appendChild(newDiv)
    }
}


function getNewsId(id){
    const url2 = `https://openapi.programming-hero.com/api/news/${id}` 
    fetch(url2)
    .then(res => res.json())
    .then(data => showMoreDetails(data.data))
}

function showMoreDetails(datas){
    const newsTitle = document.getElementById('phoneDetailsModalLabel')
    const newsDetails = document.getElementById('phone-details')
    for(const data of datas){
        newsTitle.innerText = data.title
        newsDetails.innerHTML = `
            <p>${data.details}</p>
        `
    }
}




document.getElementById('home_btn').addEventListener('click', function(){
    loadData('08')
})

document.getElementById('breakingNews').addEventListener('click', function(){
    loadData('01')
})

document.getElementById('regularNews').addEventListener('click', function(){
    loadData('02')
})

document.getElementById('internationalNews').addEventListener('click', function(){
    loadData('03')
})

document.getElementById('sports').addEventListener('click', function(){
    loadData('04')
})

document.getElementById('entertainment').addEventListener('click', function(){
    loadData('05')
})

document.getElementById('culture').addEventListener('click', function(){
    loadData('06')
})

document.getElementById('arts').addEventListener('click', function(){
    loadData('07')
})

document.getElementById('allNews').addEventListener('click', function(){
    loadData('08')
})





// getNewsId()






// if(data.category_id === '01'){
//     catagoryName.innerText = "Breaking News"
// }else if(data.category_id === '02'){
//     catagoryName.innerText = "Regular News"
// }
// else if(data.category_id === '03'){
//     catagoryName.innerText = "International News"
// }
// else if(data.category_id === '04'){
//     catagoryName.innerText = "Sports"
// }
// else if(data.category_id === '05'){
//     catagoryName.innerText = "Entertainment"
// }
// else if(data.category_id === '06'){
//     catagoryName.innerText = "Culture"
// }
// else if(data.category_id === '07'){
//     catagoryName.innerText = "Arts"
// }
// else if(data.category_id === '08'){
//     catagoryName.innerText = "All News"
// }else{
//     catagoryName.innerText = "Home"
// }
