let button = document.querySelector("#button");
let grid = document.querySelector("#grid");


button.addEventListener("click", 
    function(){ 

        let gridNumber;
        let difficulty = document.querySelector("#difficulty-menu").value;

        if (difficulty == 'difficulty-1') {
            grid.classList.add('square100');
            grid.classList.remove('square81');
            grid.classList.remove('square49');
            gridNumber = Number(100);
        }
        if (difficulty == 'difficulty-2') {
            grid.classList.add('square81');
            grid.classList.remove('square100');
            grid.classList.remove('square49');
            gridNumber = Number(81);
        }
        if (difficulty == 'difficulty-3') {
            grid.classList.add('square49');
            grid.classList.remove('square81');
            grid.classList.remove('square100');
            gridNumber = Number(49);
        }

        grid.innerHTML = "";
        
        for (i = 0; i < gridNumber; i++) {
        
            let squareElement = document.createElement('div');
            let contentElement = document.createElement('div');
            squareElement.classList.add('button-11');
            contentElement.classList.add('button-11__content');
            contentElement.innerHTML = `${i + 1}`;
            grid.append(squareElement);
            squareElement.append(contentElement);


            contentElement.addEventListener("click", 
            function(){
                console.log(this.innerText);
                this.classList.toggle("content_activation");
                squareElement.classList.toggle("activation");
            })

        } 
        
       
});