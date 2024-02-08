let button = document.querySelector("#button");
let grid = document.querySelector("#grid");

button.addEventListener("click", 
    function(){ 

        /*           SELETTORE DIFFICOLTA'            */ 
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

        // /*       CREAZIONE DI ARRAY GENERICO        */
        let bombElement = [];

        while (bombElement.length < 16) {
            let randomNumber = (Math.floor(Math.random() * gridNumber) + 1);

            if (!bombElement.includes(randomNumber)){
                bombElement.push(randomNumber);
            }

        }
                
        console.log(bombElement)

        /*       CREAZIONE GRIGLIA IN BASE AL LIVELLO        */
        grid.innerHTML = "";
        
        for (i = 0; i < gridNumber; i++) {
        
            let squareElement = document.createElement('div');
            let contentElement = document.createElement('div');
            squareElement.classList.add('button-11');
            contentElement.classList.add('button-11__content');
            contentElement.innerHTML = `${i + 1}`;
            grid.append(squareElement);
            squareElement.append(contentElement);

            let score;
            
            contentElement.addEventListener("click", 
            function(){
                
                if (bombElement.includes(Number(contentElement.innerHTML))) {
                    

                    for (i = 0; i < gridNumber; i++){

                        let allBombs = document.querySelectorAll(".button-11__content");

                        if (bombElement.includes(Number(i))){
                            let bombs = allBombs[i - 1];
                            console.log(bombs.innerHTML = '<img src=\'../img/gash_antipersonnel_grenade_consumable_cyberpunk_2077_wiki_guide_150px.png\' width=\'80px\' height=\'80px\'>');
                            bombs.classList.add("content_activation_bomb");
                            squareElement.classList.add("activation");
                        }

                    }

                
                } else {
                    console.log(this.innerText);
                    this.classList.add("content_activation");
                    squareElement.classList.add("activation");  
                    
                    score += Number(1);
                    console.log(score);
                }

            })


        } 


        
       
});

