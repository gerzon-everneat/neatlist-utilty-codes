class UserAccount {

    constructor() {
        this.account_id = document.querySelector('[data-user_account_id]');
        this.email = document.querySelector('[data-email]');
        this.account_type = document.querySelector('[data-account-type]');
        this.fullName = document.querySelector('[data-fullName]');
        this.pageOwner = document.querySelector('[data-page-owner]');
        this.sessioned = document.querySelector('[data-sessioned]');
    }

    
    //generate the getter for the account_id, email, account_type, fullName, pageOwner, sessioned now
    _account_id() {
        return this.account_id;
    } 

    _email() {
        return this.email;
    }

    _account_type() {
        return this.account_type;
    }

    _fullName() {
        return this.fullName;
    }

    _pageOwner() {
        return this.pageOwner;
    }



    


}