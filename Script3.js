function table() {
    var table = document.createElement('table');

    var th = document.createElement('tr');

    //creating data

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
  

    var htext1 = document.createTextNode('Textbooks');
    var htext2 = document.createTextNode('Articles/Books');
  
    th1.appendChild(htext1);
    th2.appendChild(htext2);
   

    th.appendChild(th1);
    th.appendChild(th2);
   
    table.appendChild(th);

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    

    var text1 = document.createTextNode("There are several free textbook that are accessible online. You just have to research the textbook you're interested in and you can most likely find a free version of it by just typing the keyword pdf after the book title. ");
    //var text1 = document.createNode("http://www.deeplearningbook.org/ ");

    var text2 = document.createTextNode(" There are also several interesting articles and books to read. I recommend the artificial intelligence articles by Tim Urban who is the creator of the blog wait but why. In addition, Nick Bostrom's book called Super Intelligence is also a good resource to learn about the potential sperils of A.I.  ");


    td1.appendChild(text1);


    td2.appendChild(text2);

    tr.appendChild(td1);
    tr.appendChild(td2);
    

    table.appendChild(tr);
    document.body.appendChild(table);
  

    table.setAttribute("border", "1");

}
