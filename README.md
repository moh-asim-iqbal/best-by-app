# Best-By
Web based grocery tracking and management application. Users can create, update or delete items as well as view when items are expirying. Application allows users to view all items currently added as well as items expirying in the next 7 days.

![Alt Text](https://github.com/moh-asim-iqbal/best-by-app/blob/master/client/public/assets/best-by.gif?raw=true)

## Prerequisites 
node >= 14.7.1
npm >= 6.14.13
mongoDB >= 4.4.6

## Installation 
1. Start mongoDB application.
2. Download or clone repo to desired directory.
3. Navigate to directory and open "best-by-app" directory.
4. Run command "npm install".
5. Navigate to client directory.
6. Run command "npm install"
7. Open server directory (sibling to client) in new terminal.
8. Run command "node index.js".
9. In client directory run command "npm start".

## Usage
The "Home" page displays any items that are expiring in the next 7 days. On first start up there will be no items, so navigate to the "Add Item" page and add as many items as desired. All items added will be displayed under the "All-Items" page. From this page items can be updated or deleted by selecting the delete/update buttons of the respective rows.

## Author
Mohammad Iqbal

## Licence
The MIT License (MIT)

Copyright (c) 2021 Mohammad Iqbal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
