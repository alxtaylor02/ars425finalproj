
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 11;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
            	openBook();
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                
                break;
            case 3:
            	openBook();
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
               
                break;
            case 4:
            	openBook();
            	paper4.classList.add("flipped");
            	paper4.style.zIndex = 4;
            	
            	break;
            case 5:
            	openBook();
            	paper5.classList.add("flipped");
            	paper5.style.zIndex = 5;
            	
            	break;
            case 6:
            	openBook();
            	paper6.classList.add("flipped");
            	paper6.style.zIndex = 6;
            	
            	break;
            case 7:
            	openBook();
            	paper7.classList.add("flipped");
            	paper7.style.zIndex = 7;
            	
            	break;
            case 8:
            	openBook();
            	paper8.classList.add("flipped");
            	paper8.style.zIndex = 8;
            	
            	break;
            case 9:
            	openBook();
            	paper9.classList.add("flipped");
            	paper9.style.zIndex = 9;
            	
            case 10:
            	openBook();
            	paper10.classList.add("flipped");
            	paper10.style.zIndex = 10;
            	
            	break;
            case 11:
            	openBook();
            	paper11.classList.add("flipped");
            	paper11.style.zIndex = 11;
            	closeBook(false);
            	break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 11;
                break;
            case 3:
                closeBook(true);
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 10;
                break;
            case 4:
                closeBook(true);
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 9;
                break;
            case 5:
                closeBook(true);
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 8;
                break;
            case 6:
                 closeBook(true);
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 7;
                break;
            case 7:
                 closeBook(true);
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 6;
                break;
            case 8:
                 closeBook(true);
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 5;
                break;
            case 9:
                 closeBook(true);
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 4;
                break;
            case 10:
                 closeBook(true);
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 3;
                break;
            case 11:
                 closeBook(true);
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 2;
                break;
            case 12:
            	 closeBook(true);
            	paper11.classList.remove("flipped");
            	paper11.style.zIndex = 1;
            	break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}