// write your JS here
// remember to always test in the browser
// to see if everything works correctl

       var jobTitle =prompt('Please enter your desired jobtitle');
        var City =prompt('Please enter your desired location');
        var partner =prompt('Please enter your partner ');
        var numkids =prompt('please enter the numkids');

    function tellFortune(jobTitle, city, partner, numKids) {
        this.jobTitle = jobTitle
        this.geoLocation = city
        this.partner = partner
        this.numkids = numkids
        this.fortune = function(){
            window.alert('You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
        partner + ' ' + ' with ' + numKids + ' kids.');
    }
        
        
    var joshua = new tellFortune(children, partner, city, job);
    joshua.fortune()
    var hassan = new tellFortune(3, "Dania", "switzerland", "Senior developer");
    hassan.fortune()
    
