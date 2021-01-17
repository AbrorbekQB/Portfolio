const elPaginationList = document.querySelector(".pagination ul");

let totalPage = 3;
let activePage = 1;
let clickPageDatasetId = activePage;

function createPagination (totalPage, activePage) {
  let newLi = "";
  
  if(totalPage>2&&activePage !== 1) {
    newLi += `<li data-id ="prev" class="pagination__btn prev"><i class="fas fa-angle-left"></i> Prev</li>`
  }
  
  if(totalPage < 8) {
    for(let index = 1; index<=totalPage; index++) {
      newLi += `<li data-id ="${index}" class="numb ${(index===activePage)?"active":""}">${index}</li>`;
    }
  }
  if(totalPage > 7) {
    newLi += `<li data-id ="1" class="numb ${(activePage===1)?"active":""}">1</li>`;
    
    if(activePage <=3) {
      newLi += `<li data-id ="2" class="numb ${(activePage===2)?"active":""}">2</li>
      <li data-id ="3" class="numb ${(activePage===3)?"active":""}">3</li>`;
      
      if(activePage===3) newLi += `<li data-id ="4" class="numb">4</li>`;
      newLi +=`<li data-id ="..." class="dots">...</li>`;
    }
    
    if(activePage > 3 && activePage < totalPage-1) {
      newLi += `<li data-id ="..." class="dots">...</li>`;
      for(let index = activePage-1; index< activePage+2; index++){
        newLi+=`<li data-id ="${index}" class="numb ${(activePage===index)?"active":""}">${index}</li>`;
      }
      newLi += (activePage!==totalPage-2)?`<li data-id ="..." class="dots">...</li>`:"";
    }
    
    if(activePage > totalPage-2) {
      newLi +=`<li data-id ="..." class="dots">...</li>`;
      newLi += `<li data-id ="${totalPage-2}" class="numb ${(activePage===totalPage-2)?"active":""}">${totalPage-2}</li>
      <li data-id ="${totalPage-1}" class="numb ${(activePage===totalPage-1)?"active":""}">${totalPage-1}</li>`;
    }
    
    
    newLi += `<li data-id ="${totalPage}" class="numb ${(activePage===totalPage)?"active":""}">${totalPage}</li>`;
  }
  
  if(totalPage > 2 && activePage !== totalPage) {
    newLi += `<li data-id ="next" class="pagination__btn next">Next <i class="fas fa-angle-right"></i>`;
  };
  elPaginationList.innerHTML = newLi;
};

createPagination(totalPage, activePage);

elPaginationList.addEventListener("click", evt => {
  clickPageDatasetId = parseInt(evt.target.dataset.id,10)||clickPageDatasetId;
  if(evt.target.dataset.id === "prev") {
    clickPageDatasetId--;
  };
  if(evt.target.dataset.id === "next") {
    clickPageDatasetId++;
  };
  createPagination(totalPage, clickPageDatasetId);
});

