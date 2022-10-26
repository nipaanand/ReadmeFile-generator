//include inquirer packages 
const inquirer = require('inquirer');
//const fs = require('fs');

//App Questions
const questions = [
    {
        type:'input',
        name:'title',
        message:'Project Title?',
    },
    {
        type:'input',
        name:'description',
        message:'Project Description'

    },
    {
        type:'input',
        name:'installation',
        message:'Installation insructions',

    },
    {
        type:'input',
        name:'contribution',
        message:'contributionInfo?',
    },
    {
        type:'input',
        name:'usgae',
        message:'',
    },  
    {
        type:'input',
        name:'email',
        message:'For questions(email)',

    },
    {
        type:'input',
        name:'github',
        message:'For questions(github)',

    },
    {
        type:'list',
        name:'license',
        message:'License',
        choices:['MIT','ISC','GNUPLv3'],
        filter(val){
            return val.toLowerCase()
        }

    }
]
