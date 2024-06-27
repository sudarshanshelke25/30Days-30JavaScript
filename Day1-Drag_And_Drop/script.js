let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
            rightBox.style.border="2px solid #ffffff";
            leftBox.style.border="2px dashed #ffffff";
        });
        
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
            rightBox.style.border="2px dashed #ffffff";
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
            leftBox.style.border="2px solid #ffffff";
            rightBox.style.border="2px dashed #ffffff";
        });
        
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
            leftBox.style.border="2px dashed #ffffff";
        });
    })
}

