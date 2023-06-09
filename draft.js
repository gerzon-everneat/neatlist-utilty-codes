
var objectRegistrar = new Map()
class Employer {
     constructor(accountDetails) {
         this.accountDetails = accountDetails;
         this.account_type = document.querySelector('[data-account-type]').value;
     }
     //generate the getter for the account_id, email, account_type, fullName, pageOwner, sessioned now
     _accountDetails() {
         return {
           id : this.accountDetails.id, 
           email : this.accountDetails.field_738184,
           fullname : this.accountDetails.field_738186,
           company_name : this.accountDetails.field_738188,
           fld_about_company: this.accountDetails.field_738190,
           website : this.accountDetails.field_738191, 
           facebook :  this.accountDetails.field_738192,
           phone : this.accountDetails.field_738193,
           logo : this.accountDetails.field_738194,
           address : this.accountDetails.field_738195,
           lat : this.accountDetails.field_738196,
           lng : this.accountDetails.field_738197,
           company_size : this.accountDetails.field_738198,
           chats : this.accountDetails.field_751749,
           posts : this.accountDetails.field_884919,
           applicants : this.accountDetails.field_1007786,
           hired : this.accountDetails.field_1020482,
           invited : this.accountDetails.field_1020580
         }
     } 
     _account_type() {
         return this.account_type;
     }
     _candidates(pageNumber, numRows) {
     return new Promise((resolve, reject) => {
       let candidates = []
       const page = 1
       const size = 2
       fetchData("https://api.baserow.io/api/database/rows/table/118042/?filter__field_1007785__link_row_has="+ this.accountDetails.id + "&page="+pageNumber+"&size="+numRows).then(value =>{
          $.each(value.data.results, function(key, candidate){
             const dateTime = new Date(candidate.field_751776)
             const timeOnly = dateTime.toLocaleTimeString()
             const dateOnly =  dateTime.toLocaleDateString()
             var candidate= {
               id					: candidate.id,
               dateOnly : dateOnly,
               timeOnly : timeOnly,
               title 			: candidate.field_1026493[0].value,
               professional_id  : candidate.field_768138[0].id,
               name  			: candidate.field_768139[0].value,
               //initials : getInitials(candidate.field_768139[0].value),
               email       : candidate.field_751967,
               location  	: candidate.field_768140[0].value +", "+candidate.field_845523[0].value,
               experience  : candidate.field_845525[0].value,
               type				: candidate.field_1024105[0].value,
               dateapplied : dateOnly,
               picurl  		: candidate.field_845539[0].value || default_picture,
               applicationStatus : candidate.field_826075.value,
               verified : candidate.field_1024367[0].value.value,
               verifiedIcon : candidate.field_1024367[0].value.value == "Verified" ? "https://assets.website-files.com/62a1fe4a88d6da5f8b5232b4/6442beb8a200b03c7bca5fae_Circle%20Check.svg" : "",
               language : candidate.field_1026501[0].value,
               english_level : candidate.field_1053047[0].value.value,
               position : candidate.field_1026500[0].value,
               trade : candidate.field_1026502[0].value,
               skills : candidate.field_1026503[0].value,
               stage : candidate.field_826075.value
                
             }
             candidates.push(candidate)
           })
            resolve(candidates);
         })
         .catch(error => {
           reject(error); // Reject the promise if an error occurs
         });
       })
     }
     _inbox() {
     return new Promise((resolve, reject) => {
        table_id = 118032
       //const url1 = `https://api.baserow.io/v2/grid/118032/rows/?field_751723=${sessionStorage.getItem("email")}`
     //const filterByEmail = `filter__${jobPostUserAccRelFld}__link_row_contains=`+ sessionStorage.getItem("email")
     const url1 = `https://api.baserow.io/api/database/rows/table/118032/?filter__field_751723__equal=${this._accountDetails().email}`
      const url2 = `https://api.baserow.io/api/database/rows/table/118032/?filter__field_751724__equal=${this._accountDetails().email}`
    
     const results1 =  fetch(url1, 
    {
     headers: {
       Authorization: `Token ${token}`
     }
   }).then(res => res.json());
   
     const results2 =  fetch(url2,
     {
     headers: {
       Authorization: `Token ${token}`
     }
   }).then(res => res.json())

   .catch(error => {
           reject(error); // Reject the promise if an error occurs
         });
     console.log(results1, results2, "ano eni?")
     const combinedResults = [...results1.results, ...results2.results].reduce((unique, item) => {
       return unique.find(i => i.id === item.id)
         ? unique
         : [...unique, item];
     }, []);
     if(combinedResults.length){
         //displayMessagesInbox(combinedResults)
         resolve(combinedResults);
     } 

    })
  
  
 }
}