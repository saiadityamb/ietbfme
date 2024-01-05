// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
import bfme from './Assets/bfme.png';
import boy from './Assets/boy.png';
import code_drills from './Assets/code_drills.svg';
import avinash from './Assets/teami/avinash.png';
import druvika from './Assets/teami/druvika.png';
import ekank from './Assets/teami/ekank.png';
import eshan from './Assets/teami/eshan.png';
import jaheer from './Assets/teami/jaheer.png';
import kshitij from './Assets/teami/kshitij.png';
import manasa from './Assets/teami/manasa.png';
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */
// Importing all Team members images  from Assets
import renuka from './Assets/teami/renuka.png';
import rishi from './Assets/teami/rishi.png';
import saipriya from './Assets/teami/saipriya.png';
import sakshi from './Assets/teami/sakshi.png';
import vidit from './Assets/teami/vidit.png';
import vijay from './Assets/teami/vijay.png';





const TOP_SECTION = {
  TITLE: 'Brute Force Made Easy',
  Typed_effect: ['Register for BFME', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us from 18th June to 27th July to learn and grasp the concepts of DSA which will further help you to crack interviews of various companies easily.',
  IMG_SRC: boy,
  DISCORD_LINK: 'https://discord.gg/7Hk7wJRqcq',
  JUDGES_FORM_LINK:
    'https://discord.gg/7Hk7wJRqcq',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/e/1FAIpQLSfTNgBqzIcq2NtCyo-pmNUMEDmpAKjFTECvS60DxMhyuXjvcw/viewform?usp=sf_link'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/ietnitk',
  discord: 'https://discord.gg/7Hk7wJRqcq',
  linkedin: 'https://www.linkedin.com/company/ietnitk/',
  facebook: 'https://www.facebook.com/ietnitk',
  youtube: 'https://www.youtube.com/c/IETNITK',
  email: 'mailto:iet@nitk.edu.in',
  mail: 'iet@nitk.edu.in'
};

const MIDDLE_SECTION = {
  TITLE: 'What is BFME?',
  LONG_DESCRIPTION:
    'Brute Force Made Easy (BFME) is a student-run placement and internship preparation program conducted by the members of The Institution of Engineering and Technology NITK Chapter(IET NITK). It is a platform for students all over the world to learn, improve and test their knowledge and skills in the discipline of Data Structures and Algorithms.',
  LOGO: bfme
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://discord.gg/7Hk7wJRqcq'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://discord.gg/7Hk7wJRqcq'
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 6,
  year: 2023
};

const schedule = [
  {
    day: '18-6-2023',
    events: [
      {
        title: 'BFME Contest No. 1 - Arrays and Matrices - 18th June, Sunday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M210amNyZ2RldnI0a2lqbWhkcjEwOXRoMTYgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  
  {
    day: '25-6-2023',
    events: [
      {
        title: 'BFME Contest No.2 - Linked List - 25th June, Sunday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MzJtYmRpaGdldTZ1czZ0MzM0YnF2aWJvMDAgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  {
    day: '2-7-2023',
    events: [
      {
        title: 'BFME Contest No.3 - Recursion - 2nd July, Sunday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjE4bzZtMDU0aTF0OW82azM4YjB2YXNucmMgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  {
    day: '9-7-2023',
    events: [
      {
        title: 'BFME Contest No.4 - Stacks and Queues - 9th July, Sunday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M3RsdnBqZGVyOW5pMjE1bml1amhmbDhlaDUgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  {
    day: '16-7-2023',
    events: [
      {
        title: 'BFME Contest No.5 - Trees - 16th July, Sunday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MXRmMjgydWpibTBkbDczN3U5c3Q0b3NsaWYgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  {
    day: '20-7-2023',
    events: [
      {
        title: 'BFME Contest No.6 - Graphs - 20th July, Thursday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWlqcmliMzM5bDY5cXAwbXRmZGQ5Z2RuNmwgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  {
    day: '23-7-2023',
    events: [
      {
        title: 'BFME Contest No.7 - Greedy Algorithm and Bit Manipulation - 23rd July, Sunday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2RsYW5kbnQyaTRxYnVobDdkdWNlazdnN2QgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  },
  {
    day: '27-7-2023',
    events: [
      {
        title: 'BFME Contest No.8 - Dynamic Programming - 27th July, Thursday',
        timings: '5PM - 7PM',
        link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTQzOWs2dnZxZXF0NHJrNGtwbTdpMG8xcDAgdmlkaXRzaGFoLjIxMWNzMjY0QG5pdGsuZWR1Lmlu&tmsrc=viditshah.211cs264%40nitk.edu.in'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Overall First',
      content:
        'Scoring cumulative highest points from all contests'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'Overall Second',
      content:
        'Scoring cumulative second highest points from all contests'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Overall Third',
      content:
        'Scoring cumulative third highest points from all contests'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: '100% Accuracy',
      content:
        'Having answered each question correctly, provided atleast half the amount of total questions are attempted.'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Super Streak',
      content: 'Having solved all the questions in every contest. (You genius) !'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      name: 'Druvika Nuthalapati',
      Role: 'Organizer',
      github: 'https://github.com/druvikan',
      linkedin: 'https://www.linkedin.com/in/druvika-nuthalapati-71a4621b3/',
      img: druvika
    },
    {
      name: 'Vidit Harin Shah',
      Role: 'Organizer',
      github: 'https://github.com/vdshah25',
      linkedin: 'https://www.linkedin.com/in/vidit-shah-35a388228/',
      img: vidit
    },
    {
      name: 'Ekank Chhaparwal',
      Role: 'Organizer',
      github: 'https://github.com/ekankchhaparwal',
      linkedin: 'https://www.linkedin.com/in/ekank-chhaparwal-b98355247',
      img: ekank
    },
    {
      name: 'Rishi Diwaker',
      Role: 'Organizer',
      github: 'https://github.com/rishi-diwaker1',
      linkedin: 'https://www.linkedin.com/in/rishi-diwaker-4b1276267',
      img: rishi
    },

    {
      name: 'Eshan Kharya',
      Role: 'Organizer',
      github: 'https://github.com/EshanKharya',
      linkedin: 'https://in.linkedin.com/in/eshan-kharya',
      img: eshan
    },

    {
      name: 'Jaheer Khan',
      Role: 'Organizer',
      github: 'https://github.com/jaheerkhan01',
      linkedin: 'https://www.linkedin.com/in/jaheer-khan-754512230/',
      img: jaheer
    },

    {
      name: 'Renukasakshi V Patil',
      Role: 'Organizer',
      github: '',
      linkedin: 'https://www.linkedin.com/in/renukasakshi-v-patil-548476230/',
      img: renuka
    },
    {
      name: 'Avinash Kandala',
      Role: 'Organizer',
      github: '',
      linkedin: 'https://www.linkedin.com/in/avinash-kandala-870a16238',
      img: avinash
    },
    {
      name: 'Vijay Kumar',
      Role: 'Organizer',
      github: 'https://github.com/Vijay0510kumar',
      linkedin: 'https://www.linkedin.com/in/vijaykumar-jangalgi-a4a990225',
      img: vijay
    },
    {
      name: 'Manasa N S',
      Role: 'Organizer',
      github: 'https://github.com/Manasasajjan',
      linkedin: 'https://www.linkedin.com/in/manasa-n-s/',
      img: manasa
    },
    {
      name: 'Sai Priya',
      Role: 'Organizer',
      github: '',
      linkedin: '',
      img: sakshi
    },
    {
      name: 'D Sakshi',
      Role: 'Organizer',
      github: 'https://github.com/DSakshi3',
      linkedin: 'https://www.linkedin.com/in/sakshi-d-8884a4250',
      img: saipriya
    },
    {
      name: 'Kshitij Phutane',
      Role: 'Organizer',
      github: 'https://github.com/Kittu616',
      linkedin: 'https://www.linkedin.com/in/sakshi-d-8884a4250',
      img: kshitij
    }

  ]
];



/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [

  [ {src: code_drills},{src: code_drills},{src: code_drills}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'Who can attend?',
        content:
          'BFME is an OPEN FOR ALL event. Anyone from any college pursuing undergraduate course can register and take part in the event.'
      },
      {
        label: 'What is the team size?',
        content:
          'It is an individual event.'
      },
      {
        label: 'How do I register for the event?',
        content:
          'Just fill the form above with your details!'
      },
      {
        label: "What are the prizes?",
        content:
          "Certificates for the overall top three registered contestants, 100% accuracy and one person having super streak."
      },
      {
        label: 'What can we expect from the event?',
        content: 'We hope to help all the students following BFME in preparing for internships and placements.'
      }
    ],
    [
      {
        label: 'When is the coding contest ?',
        content:
          'Contest dates are mentioned in the timeline above. They will be held from 5:00 pm to 7:00 pm. The timings have been kept considering actual contest timings from companies. '
      },
      {
        label: 'What is the topic for the contest?',
        content:
          'The topic for each week’s contest is added in the timeline. '
      },
      {
        label: 'What is the registration cost ?',
        content:
          'The event is completely free !!'
      },
      {
        label: 'Do I need any prerequisites for the event?',
        content: 'The event is planned to learn as you go. So do have a lot of eagerness and a small hand at coding ready!'
      },
      {
        label: 'I have more questions. Where do I ask?',
        content: 'Join our discord channel and we will reach out to you as soon as possible !'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
