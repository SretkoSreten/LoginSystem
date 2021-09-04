

class ErrorHandler 
{
    constructor(errorItem, timeout) {
        this.timeout = timeout;
        this.errorInnerHTML = errorItem;
    }
    static showError(){
        setTimeout(() => removeError(), timeout);
        this.errorItem.classList.remove('hide');
        this.errorItem.classList.add('show');
    }
    removeError(){
        this.errorItem.classList.remove('show');
        this.errorItem.classList.add('hide');
    }
}