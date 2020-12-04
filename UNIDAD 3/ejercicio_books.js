class BookList{
    numLeido=0;
    numNoLeido=0;

    constructor(books){
    if (!typeof books=="array")
            books=false;

    this.myBooks=books;
    
    if(this.myBooks.length>0){
        for(i of books){
            this.myBooks.add(books);
        }
    }
    }

    add(book){
        this.myBooks.push(book);
    }

    finishCurrentBook(){
        this.currentBook.read=true;
        this.numLeido++;
        this.currentBook.readDate=Date.now();
        this.lastbook=this.currentBook;
        this.currentBook=this.nextBook;
        for(i of myBooks){
            if(i===false)
                myBooks.unshift(i);
                myBooks.splice(i,1);
                
        }

    }

    bookUnread(){
        for(i of myBooks){
            if(i===false)
                this.numNoLeido++;            
        }
    return this.numNoLeido;
    }

}

class Book{
    constructor(title, genre, author, ){
        this.title=title;
        this.genre=genre;
        this.author=author;

    }

    get titulo(){
        return this.title;
    }
    get genre(){
        return this.genre;
    }
    get author(){
        return this.author;
    }
}