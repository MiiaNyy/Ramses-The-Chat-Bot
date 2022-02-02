# RSA - homepage
This project is part 2 of my RSA inventory and chat bot project. This pages idea is to be RSA - company's homepage 
where you can talk to Azure chat bot, ask about the company and get information about the inventory.
The page is created using React, Webpack and CSS. It is created mobile first.

## Bot
Bot is created using Microsoft Azure Bot Services. It has been build with Azure Bot Composer, which is 
visual coding tool. When I first started creating bot, I noticed that there wasn't many tutorials for coding bot 
using Node.js only C#. Because I am not familiar with C#, I decided to use Bot Composer. In hindsight, I think it 
would have been wiser and quicker to learn C# than create the bot using Composer. 

Bot is connected to QnA Maker Knowledge Base and Azures Language Understanding (LUIS). 

### What it can do
The main functionality is that the bot can connect the user to the inventory database. Through bot user can get 
specific items, create new ones or delete them. This is done by using rest API calls to ```https://rafaels-inventory.
herokuapp.com/api```. Through this bot has access to the inventory MongoDB database.

Bot can also tell information about the company and do little chitchat. 

### Technologies
- Microsoft Azure
- Azure Bot Services
  - QnA Maker
  - LUIS
  - Bot Composer
  - Bot Emulator
- React
- Webpack
- CSS




