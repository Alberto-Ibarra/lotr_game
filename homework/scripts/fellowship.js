$(() => {
    // console.log("LINKED");
  
    // Dramatis Personae
    const hobbits = [
      'Frodo Baggins',
      'Samwise \'Sam\' Gamgee',
      'Meriadoc \'Merry\' Brandybuck',
      'Peregrin \'Pippin\' Took'
    ];
  
    const buddies = [
      'Gandalf the Grey',
      'Legolas',
      'Gimli',
      'Strider',
      'Boromir'
    ];
  
    const baddies = [
      "Sauron",
      "Saruman",
      "The Uruk-hai",
      "Orcs"
    ];
  
    // Our Setting
    const lands = ['The-Shire', 'Rivendell', 'Mordor'];
  
    // ====================================
    //           Chapters
    // ====================================
  
  
    // ============
    // Chapter 1
    // ============
  
  
    // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  
    // 1. create a section tag with an id of middle-earth
    // 2. append the section to the body of the DOM.
    // const body = document.getElementsByTagName('body');
    
    // 3. use a for loop to iterate over the lands array that does the following:
    
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    
    //   3b. gives each land article an `id` tag of the corresponding land name
    
    //   3c. includes an h1 with the name of the land inside each land article
    
    //   3d. appends each land to the middle-earth section
    
    const makeMiddleEarth = () => {
      
      const section = document.createElement('section');
      section.setAttribute('id', 'middle-earth');
      document.body.appendChild(section);

    for(let i = 0; i < lands.length; i++){
      const article = document.createElement('article');
      article.setAttribute('id', lands[i]);
      const h1Land = document.createElement('h1');
      const h1LandText = document.createTextNode(lands[i]);
      document.getElementById('middle-earth').appendChild(article).appendChild(h1Land).appendChild(h1LandText)
    }
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 1 complete - Made Middle Earth".
  
    // ============
    // Chapter 2
    // ============
  
  
    // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  
    // 1. create a 'ul'
    
    // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
    // 3. also, give each hobbit (`li`) a class of "hobbit"
    
    // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
    
    const makeHobbits = () => {
      const hobbitList = document.createElement('ul');
      document.getElementById('The-Shire').appendChild(hobbitList);
  
      for(let i = 0; i < hobbits.length; i++){
        const hobbitLi = document.createElement('li')
        hobbitLi.classList.add('hobbit');
        const hobbitText = document.createTextNode(hobbits[i])
        hobbitLi.appendChild(hobbitText);
        hobbitList.appendChild(hobbitLi);
      }

    }
  
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 2 complete - Made the Hobbits".
  
    // ============
    // Chapter 3
    // ============
  
  
    // 1. create an empty div with an id of 'the-ring'
  
    // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

    const keepItSecretKeepItSafe = () => {
      const divTheRing = document.createElement('div');
      divTheRing.setAttribute('id', 'the-ring');
      const collection = document.getElementsByClassName('hobbit')[0];
      collection.appendChild(divTheRing);
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".
  
    // ============
    // Chapter 4
    // ============
  
    
    // 1. display an unordered list of baddies in Mordor
  
    // 2. give each of the baddies a class of "baddy"
  
    // 3. remember to append the ul to Mordor

    const makeBaddies = () => {
      const baddiesList = document.createElement('ul');
      document.getElementById('Mordor').appendChild(baddiesList);
  
      for(let i = 0; i < baddies.length; i++){
        const baddieLi = document.createElement('li')
        baddieLi.classList.add('baddy');
        const baddieText = document.createTextNode(baddies[i]);
        baddieLi.appendChild(baddieText);
        baddiesList.appendChild(baddieLi);
      }
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 4 complete - Made the Baddies"..
  
    // ============
    // Chapter 5
    // ============
  
  
    // 1. create an aside tag and append it to middle-earth below mordor
  
    // 2. display an unordered list of buddies in the aside
  
    // 3. give each of the buddies a class of "buddy"
  
    // 4. don't forget to append them to the aside

    const makeBuddies = () => {
      const aside = document.createElement('aside');
      const buddiesList = document.createElement('ul');
      document.getElementById('middle-earth').appendChild(aside).appendChild(buddiesList);
  
      for(let i = 0; i < buddies.length; i++){
        const buddieLi = document.createElement('li')
        buddieLi.classList.add('buddy');
        const buddieText = document.createTextNode(buddies[i]);
        buddieLi.appendChild(buddieText);
        buddiesList.appendChild(buddieLi);
      }
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 5 complete - Made the Buddies".
  
    // ============
    // Chapter 6
    // ============
  
  
    // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
    // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

    const leaveTheShire = () => {
      const moveHobbits = document.getElementById('The-Shire').childNodes[1];
      document.getElementById('Rivendell').appendChild(moveHobbits);
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 6 complete - Left the Shire"
  
    // ============
    // Chapter 7
    // ============
  

    // 1. change the buddy 'Strider' text node to "Aragorn"
    // hint: You can get a list of elements by tag name, such as 'aside'
    const beautifulStranger = () => {
      const nameChange = document.getElementsByClassName('buddy')[3];
      nameChange.innerText = 'Aragorn';
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"
  
    // ============
    // Chapter 8
    // ============
  
  
    // 1. create a new div with an id 'the-fellowship'
  
    // 2. add an h1 with the text 'The Fellowship' to this new div
  
    // 3. append the fellowship to middle-earth
  
    // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
    const forgeTheFellowShip = () => {
      const divFellowship = document.createElement('div');
      divFellowship.setAttribute('id', 'the-fellowship');
      const h1Fellowship = document.createElement('h1');
      const h1FellowshipText = document.createTextNode('The Fellowship');
      h1Fellowship.appendChild(h1FellowshipText)
      document.getElementById('middle-earth').appendChild(divFellowship).appendChild(h1Fellowship);
      const buddies = document.getElementsByTagName('aside')[0].childNodes[0];
      document.getElementById('the-fellowship').append(buddies);
      const hobbits = document.getElementById('Rivendell').childNodes[1];
      document.getElementById('the-fellowship').append(hobbits);
    }


  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 8 complete - The Fellowship is created"
  
    // ============
    // Chapter 9
    // ============
  
  
    // 1. change the 'Gandalf' text to 'Gandalf the White'

    // 2. add a class "the-white" to this element
  
    // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

    const theBalrog = () => {
      const nameChange = document.getElementsByClassName('buddy')[0];
      nameChange.innerText = 'Gandalf the White';
      nameChange.classList.add('the-white');
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 9 complete - Updated Gandalf"
  
    // ============
    // Chapter 10
    // ============
  
  
    // 1. create a pop-up alert that the horn of gondor has been blown when the webpage is loaded

    // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

    // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

    function hornOfGondor(){
      alert('The horn of Gondor has been blown!');
      const killed = document.getElementsByClassName('buddy')[4];
      killed.style.textDecoration = "line-through"
      const removed = document.getElementsByClassName('baddy')[2];
      removed.remove()
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"
  
    // ============
    // Chapter 11
    // ============
  

    // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  
    // 2. add a div wiid of 'mount-doom' to Mordor

    const itsDangerousToGoAlone = () => {
      const mountDoom = document.createElement('div');
      mountDoom.setAttribute('id', 'mount-doom');
      document.getElementById('Mordor').appendChild(mountDoom);
      const frodoMovedToMordor = document.getElementsByClassName('hobbit')[0];
      const samMovedToMordor = document.getElementsByClassName('hobbit')[1];
      mountDoom.appendChild(frodoMovedToMordor);
      mountDoom.appendChild(samMovedToMordor);
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"
  
    // ============
    // Chapter 12
    // ============
  
  
    // 1. Create a div with an id of 'gollum' and add it to Mordor
  
    // 2. Move the ring from Frodo and give it to Gollum
  
    // 3. Move Gollum into Mount Doom

    const weWantsIt = () => {
      const gollum = document.createElement('div');
      gollum.setAttribute('id', 'gollum');
      document.getElementById('mount-doom').appendChild(gollum);
      const theRing = document.getElementById('mount-doom').childNodes[0].childNodes[1]
      gollum.appendChild(theRing);
      
    }

  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".
  
    // ============
    // Chapter 13
    // ============
  
  
    // 1. remove Gollum and the Ring from the DOM
  
    // 2. remove all the baddies from the DOM
  
    // 3. Move all the hobbits back to the shire

    const thereAndBackAgain = () => {
      const removeGollum = document.getElementById('gollum');
      removeGollum.remove();
      const removeBaddies = document.getElementById('Mordor').childNodes[1];
      removeBaddies.remove();

      const lameHobbits = document.getElementById('the-fellowship').childNodes[2]
      document.getElementById('The-Shire').appendChild(lameHobbits);

      const frodo = document.getElementById('mount-doom').childNodes[0]
      const sam = document.getElementById('mount-doom').childNodes[1]
      document.getElementById('The-Shire').childNodes[1].appendChild(frodo);
      document.getElementById('The-Shire').childNodes[1].appendChild(sam);
    }
  
    // COMMIT YOUR WORK
    // The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".
  
  
    // =====================================
    // Don't change anything below this line
    // =====================================
    // =====================================
    // This code is loading all of the event listeners for the buttons in your application.
    // =====================================
  
  $(() => {

    $('#1').on('click', makeMiddleEarth);
    $('#2').on('click', makeHobbits);
    $('#3').on('click', keepItSecretKeepItSafe);
    $('#4').on('click', makeBaddies);
    $('#5').on('click', makeBuddies);
    $('#6').on('click', leaveTheShire);
    $('#7').on('click', beautifulStranger);
    $('#8').on('click', forgeTheFellowShip);
    $('#9').on('click', theBalrog);
    $('#10').on('click', hornOfGondor);
    $('#11').on('click', itsDangerousToGoAlone);
    $('#12').on('click', weWantsIt);
    $('#13').on('click', thereAndBackAgain);
  });

})
