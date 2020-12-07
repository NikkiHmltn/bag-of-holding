# Bag of Holding
A web app that lets you swiftly create and collect D&D 5e characters! As a user you can create characters or character concepts where they are then stored and displayed in your profile. Information is easily available to the user with just a click of a button. Let your imagation run wild and get creative with your story-telling!

This is Project 2 for General Assembly's Software Engineering Immersive course. Requirements include complicated database relationships and tables, use of an API, and/or web scraping. It also needs 2 GET routes, 1 PUT route, 1 DELETE route, and 1 POST route (at least). This project is worked and completed in Week 7 of the immersive course. 

### Instructions
# Installation
1. `Fork` and `Clone` this repo
2. In your CLI, type `git clone` followed by your `clone` link
3. `npm install` all the dependencies
4. Seed all the files by running `sequelize db:seed:all`
5. Be sure to run the `server.js` by either typing `nodemon` or `node server.js`
6. Visit `localhost:3000` and enjoy!

Alternative you can just visit the site [here](https://my-bag-of-holding.herokuapp.com/)

### Code Snippets!
# Gotta love modals

```html
<p class="title"><h5>Classes:</h5></p>
      <% for(let i = 0; i < allClasses.length; i++) { %>
      <% className = allClasses[i] %>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#<%=className.name%>">
      <%=className.name%>
      </button>
        <!-- Modal -->
      <div class="modal fade" id="<%=className.name%>" tabindex="-1" role="dialog" aria-labelledby="<%=className.name%>Title" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="<%=className.name%>Title"><%=className.name%></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-body">
        <p><%=className.desc %></p>
        <b><p>Hit Dice:</p></b><%=className.hitDice %>
        <b><p>First Level HP:</p></b><%=className.firstLevelHp %>
        <b><p>HP after 1st Level:</p></b><%=className.moreLevelHp %>
        <b><p>Armor Proficiency:</p></b><%=className.profArmor %>
        <b><p>Weapon Proficiency:</p></b> <%=className.profWeapons %>
        <b><p>Tool Proficiency:</p></b><%=className.profTools %>
        <b><p>Saving Throws:</p></b><%=className.profSaveThrow %>
        <b> <p>Skill Proficiency:</p></b><%=className.profSkills %>
        <b><p>Equipment:</p></b><%=className.equipment %>
        <b><p>Spellcasting Ability Modifier:</p></b><%=className.spellcastingAbil %>
      </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
        </div>
          </div>
        </div>
      <% } %>
```

# Just a little bit of russian nesting happening!

```js
router.get('/create', (req, res) => {

    let objInfo = {};
               
    db.classes.findAll().then(classes => {
        objInfo.allClasses = classes;
        db.race.findAll().then(races => {
            objInfo.allRaces = races
            db.background.findAll().then(backgrounds => {
                objInfo.allBackgrounds = backgrounds
                res.render('char/create', objInfo)
            }).catch((error) => {
                res.status(400).render('main/404')
            })
        })
    })
})
```
### Preview Inside
![Image of Modal Display](https://i.imgur.com/SBf0PUx.png)

### Stretch Goals
Here's a list of things that I'd like to implement and need to work on:
-Heroku timeout errors fixed
-Add subclasses
-Ability to pick equipment
-Leveling up
-Create and use my own API for this project

### Found a bug? Have an issue? Just want to help out?
Feel free to leave an issue in the issue tab of this repo to let me know! You are also welcomed to submit a pull request with your contributions, barring approval, of course. 

Thank you so much! 

