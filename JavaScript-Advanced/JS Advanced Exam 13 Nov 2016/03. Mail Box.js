class MailBox {
    constructor(){
        this.mailBox = [];
    }

    addMessage(subject, text){
        this.subject = subject;
        this.text = text;

        let myMessage = {
            subject: this.subject,
            text: this.text
        };

        this.mailBox.push(myMessage);
        return this.mailBox;
    }

    get messageCount(){
        return this.mailBox.length;
    }


    deleteAllMessages(){
        this.mailBox = [];
    }

    findBySubject(substr){
        this.substr = substr;
        let output = [];

        for(let el of this.subject){
            if(this.subject.includes(this.substr)){
                output += this.subject;
            }
        }
        return output;
    }

    toString(){
        let result = ' * (empty mailbox)';
        if(this.mailBox == []){
            return result;
        } else {
            for(let el in this.mailBox){
                result += ` * [${this.mailBox.subject}] ${this.mailBox.text}`;
            }
            return result;
        }
    }
}
