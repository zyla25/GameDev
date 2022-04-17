let storyBoard = document.getElementById("storyBoard"); // This is the containers of all the images
let storyCount = document.getElementById("storyBoard").childElementCount; // This will store total numbers of child elements in a storyBoard (Dito magreturn sya ng 6 kasi 6 image yung nilagay ko)
let right_btn = document.getElementById("right-btn"); // Ito sinave lang sa right-btn yung button sa Html
let left_btn = document.getElementById("left-btn"); // Ito sinave lang sa left-btn yung button sa Html
let count=0; //This count is for counting the click on the buttons (left or right)
let openBtn = document.getElementById("open");


if(screen.width<=768){ 
    alert("Please Rotate Your Device to Landscape For Better Experience")

    openBtn.addEventListener("click",function(){  // Open button Function for mobile and tablet size
        right_btn.style.display = "flex"; // Enabled right button
        openBtn.style.display = "none";  //openBtn disabled
        document.getElementById("div1").classList.add("animation");  // Add classList animation to div1
    })

    right_btn.addEventListener("click", function(){
        left_btn.style.display = "flex"; // It will remove the disabled attribute in left button on css 
        count++; //This will increment the click count
    
        if(count==storyCount-1){ //This will test if the storyBoard display all of its child (from 0 - 5)
            right_btn.style.display = "none";   // This will set the attribute of right_btn to disabled
        }
    
            for(i=0; i<storyCount; i++){           
                if(count == i){ //This will check if the count is equal to i then it will add the active class on css
                    storyBoard.children[i].classList.add("animation");
                }
                else{   // This will remove the active class on every children if the count is not equal to i
                    storyBoard.children[i].classList.remove("animation");
                }
            }
    })
    
    //left_btn function if it is click
    left_btn.addEventListener("click", function(){ // It will remove the disabled attribute in right button on css 
        right_btn.style.display = "flex";  //It will remove the disabled attribute in right button on css
        count--; //This will decrement the click count since it going back to first pic
        
        if(count<=0){
            left_btn.style.display = "none"; //If the count is equal to 0 it will disable the left button (kapag bumalik na sa first pick)
        }
           for(i=0; i<storyCount; i++){  //This will test if the storyBoard display all of its child (from 5 - 0 pabalik naman mula sa last pic papunta sa pinaka-una)         
    
                if(count == i){  //This will check if the count is equal to i then it will add the active class on css
                    storyBoard.children[i].classList.add("animation");
                }
                else{ // This will remove the active class on every children if the count is not equal to i
                    storyBoard.children[i].classList.remove("animation");
                }
            }
    })

}else {
    openBtn.addEventListener("click",function(){   // Open button Function for desktop size
        right_btn.style.display = "none";  // disabled right button
        openBtn.style.display = "none"; // openBtn disabled
        document.getElementById("div1").classList.add("animation"); // Add classList animation to div1
    })
    
    let i = 1;
    document.getElementById("button").addEventListener("click", function(){ // Continue Button function
    storyBoard.children[i].classList.add("animation"); // Add animation to every storyBoard childrens
    i++;
})
}




