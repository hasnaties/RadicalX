const db = require('../db/firebaseSDK');

class internship {

    title;
    details = {
        category: null,
        desc: null,
        location: null,
        benefits: null,
        introVideo: null
    };
    mentor = {
        mentorName: null,
        mentorPhoto: null,
        contact: null
    };
    addRoles = [];
    webLinks = []

    // __constructor__
    constructor( intern ){
        
        this.title = intern.title;
        this.details = intern.details;
        this.mentor = intern.mentor;
        this.addRoles = intern.addRoles;
        this.webLinks = intern.webLinks;
    }

    save = async () => {

        return await db.collection('internships').add({
            title: this.title,
            details: this.details,
            mentor: this.mentor,
            addRoles: this.addRoles,
            webLinks: this.webLinks
        }).catch((err) => {
            
        }).then((res) => {
            
        });

    }
}


module.exports = internship