const chat = {
    1: {
        text: 'Hi! What can I help you with',
        options: [
            {
                text: "I am having a panic attack",
                next: 2
            },
            {
                text: "I cannot fall asleep",
                next: 3
            },
            {
                text: "I am having suicidal thoughts",
                next: 112
            }
        ]
    },
    2: {
        text: 'Are you a resident of the LSBU Halls (Dante, McLaren or David Bomber house)?',
        options: [
            {
                text: "Yes!",
                next: 3
            },
            {
                text: "No",
                next: 40
            }
        ]
    },
//
//###################  CALL ACOMMODATION WELLBEING MANAGER
//    
    3: {
        text: 'I would stringly reccomend you to call one of our Wellbeing Managers.',
        next: 4
    },
    4: {
        text: '+44 7810 637356 - Vicki Dunne',
        options: [
            {
                text: '<a href="tel:+447810637356">Call</a>',
                next: 5
            },
            {
                text: "Not availiable",
                next: 6
            }
        ]
    },
    5: {
        text: 'Have they responded to your call?',
        options: [
            {
                text: 'Yes',
                next: 99
            },
            {
                text: "Not availiable",
                next: 6
            }
        ]
    },
    6: {
        text: '+44 796 7765597 - Inayah Taiwo',
        options: [
            {
                text: '<a href="tel:+447967765597">Call</a>',
                next: 7
            },
            {
                text: "Not availiable",
                next: 7
            }
        ]
    },
    7: {
        text: 'If you have not got the answer, I would strongly advice you to call reception of your accommodation and let staff know about this',
        next: 20
    },
    11: {
        text: 'What can I help you with',
        options: [
            {
                text: "I am having a panic attack",
                next: 2
            },
            {
                text: "I cannot fall asleep",
                next: 3
            }
        ]
    },
//
//###################  CALL ACOMMODATION RECEPTION
//
    20: {
        text: 'Which LSBU accommodation halls are you based in?',
        options: [
            {
                text: 'Dante Halls',
                next: 21
            },
            {
                text: "McLaren House",
                next: 22
            },
            {
                text: "David Bomberg House",
                next: 23
            }
        ]
    },
    21: {
        text: "+44 20 7815 7088 - Dante halls",
        options: [
            {
                text: '<a href="tel:+442078157088">Call</a>',
                next: 29
            },
            {
                text: "Not availiable",
                next: 111
            }
        ]
    },
    22: {
        text: "++44 20 7815 7360 - McLaren House",
        options: [
            {
                text: '<a href="tel:+442078157360">Call</a>',
                next: 29
            },
            {
                text: "Not availiable",
                next: 111
            }
        ]
    },
    23: {
        text: "+44 20 7815 7380 - David Bomber House",
        options: [
            {
                text: '<a href="tel:+442078157380">Call</a>',
                next: 29
            },
            {
                text: "Not availiable",
                next: 111
            }
        ]
    },

     29: {
        text: "Have they answered?",
        options: [
            {
                text: 'Yes',
                next: 29
            },
            {
                text: "No",
                next: 111
            }
        ]
    },
//    
//################### SOMETHING ELSE LOOP
//
    99: {
        text: 'Would you like me to help you with something else?',
        options: [
            {
                text: "Yes",
                next: 11
            }
        ]
    },
//    
//################### NHS CONTACT US
// //
    111: {
            text: 'I will reccomend you to go to NHS website to get all the recessary information about your state. </br> If you feel like you need an immideate help, please call NHS 111 number.',
            options: [
                {
                    text: '<a href="tel:111">Call NHS</a>',
                    next: 99
                },
                {
                    text: '<a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/">Go to NHS website</a>',
                    next: 99
                },
                {
                    text: 'Back to Beginning',
                    next: 11
                }
            ]
        },
//    
//################### SUICIDAL THOUGHTS IF IN THE ACCOMMODATION
// //
    112: {
          text: 'It is really important for me that you safe!</br> Please call the <b>reception of your accommodation</b> if you are willing to </br></br> If you whink this is <b>emergecy</b> plase call <b>NHS number</b> or the <b>Suicide Prevention Helpline</b>',
            options: [
                {
                    text: '<a href="tel:111">Call NHS</a>',
                    next: 99 
                },
                {
                    text: 'Halls reception',
                    next: 20
                },
                {
                    text: '<a href="tel:116 123">Suicide prevention line</a>',
                    next: 20
                },
                {
                    text: 'Back to Beginning',
                    next: 11
                }
            ]
        },
};
