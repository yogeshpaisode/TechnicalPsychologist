import {Injectable} from '@angular/core';
import {
  audio,
  dyslexia,
  image,
  listening,
  reading,
  writing,
  recognition,
  text,
  speaking,
  dyscalculia,
  math,
  video,
  html
} from '../app.constatnt';

@Injectable()
export default class TestDataService {

  public result: any = [
    {
      type: dyslexia,
      categories: [
        {
          type: writing,
          score: 0
        },
        {
          type: recognition,
          score: 0
        },
        {
          type: speaking,
          score: 0
        },
        {
          type: listening,
          score: 0
        }
      ]
    },
    {
      type: dyscalculia,
      categories: [
        {
          type: math,
          score: 0
        }
      ]
    }
  ];


  public testData: any =
    {
      'kg': [
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Write your name.',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': writing,
        },
        {
          'disabilityType': dyslexia,
          'questionType': image,
          'question': 'Identify the geometric shape',
          'isLocal': true,
          'source': '../../assets/images/kindergarden_hexagon.png',
          'answer': '',
          'weightage': 0,
          'learningType': recognition
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Pronounce: Teddy Bear',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': speaking
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Spell: circle, cat, dog, etc.',
          'isLocal': true,
          'source': '4',
          'answer': '',
          'weightage': 0,
          'learningType': speaking
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Tell 7 days of a week',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': speaking
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Aphabet after G?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': speaking
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Confuses letters that look similar (b, d, p, q) and letters that have similar sounds (d/t; b/p; f/v)',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': writing
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Tell a poem, or story (See the sequence)',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'Has trouble learning a new word, even after you’ve tried to teach it to him/her many times.',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': speaking
        },
        {
          'disabilityType': dyslexia,
          'questionType': text,
          'question': 'May have difficulty with rhyming. e.g. cat and rat, dog and fog, etc.',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': math
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '2 + 7 = ?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': math
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': 'Table of 2?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': math
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '9 is bigger or 7?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': math
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '= sign is called?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': math
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '8 - 5 = ?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': math
        }
      ],
      'Primary': [{
        'disabilityType': dyslexia,
        'questionType': html,
        'question': '<b>Read the paragraph aloud and checks if child often confuses or omits small words like for and of when reading aloud. </b>  <br> A rainy day is a day that almost everyone loves, be it a small kid, an adult or an elderly person. Rain showers are awaited all year long. It is said that God showers his blessings on earth in the form of rain and infuses everything and everyone with delight. It is a sight to see the trees and plants drenched in rain appearing greener and brighter. <br> The clouds in the sky overcast the sun and give relief from the scorching heat on a rainy day. The weather on this day is extremely pleasant and such weather works wonders on our senses. It fills our heart with a joyous feeling. I just love rainy days.',
        'isLocal': false,
        'source': '',
        'answer': '',
        'weightage': 0,
        'learningType': reading,
      },
      {
        'disabilityType': dyslexia,
        'questionType': html,
        'question': '<b>Frequently identifies a word incorrectly, even after having just read the same word correctly earlier in the same text.</b> <br> Rainy Days are special for all. A rainy day holds importance for everyone, be it a small kid, a student, common man or a farmer. Everyone has his/ her own reason to wait for a rainy day and everyone spends it in his own way. A rainy day for them also means hot and scrumptious pakodas and lots of paper boats.',
        'isLocal': false,
        'source': '',
        'answer': '',
        'weightage': 0,
        'learningType': reading,
      },
      {
        'disabilityType': dyslexia,
        'questionType': html,
        'question': '<b>Avoids reading whenever possible or gets frustrated or agitated when reading</b> <br>"Good reading habit implies reading a lot of good stuff such as newspapers and various kinds of fiction and non-fiction books. Many people stick to a particular genre and read all the books and other content related to the same. While this helps in a lot of ways reading different subjects and genres is even better as it widens our scope of knowledge.<br>Developing good reading habit is important for people of all age-groups. It has numerous benefits attached to it. One of the main reasons which is pointed out quite often is that books serve as our best friend. It is said that those who have a habit of reading do not ever feel lonely. In addition to this, the books also help in enhancing their knowledge which helps boost their confidence and also makes them worldly wiser. They get a different perspective in life which comes handy during various real-life situations. They are able to handle different situations well.',
        'isLocal': false,
        'source': '',
        'answer': '',
        'weightage': 0,
        'learningType': reading,
      },       
      {
        'disabilityType': dyslexia,
        'questionType': audio,
        'question': 'Rearrange the sentence in correct order after listening to the audio file.',
        'isLocal': false,
        'source': '../../assets/audio/Primary-Dyslexia-ListeningSkills-1.mp3',
        'answer': '',
        'weightage': 0,
        'learningType': listening,
      },
      {
        'disabilityType': dyslexia,
        'questionType': audio,
        'question': 'Rearrange the sentence in correct order after listening to the audio file.',
        'isLocal': false,
        'source': '../../assets/audio/Primary-Dyslexia-ListeningSkills-2.mp3',
        'answer': '',
        'weightage': 0,
        'learningType': listening,
      },
      {
        'disabilityType': dyslexia,
        'questionType': image,
        'question': 'Recognise the image and give one word about the image.',
        'isLocal': false,
        'source': '../../assets/images/Primary-Dyslexia-RecognitionSkills-1.jpg',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      },
      {
        'disabilityType': dyslexia,
        'questionType': image,
        'question': 'See the image and arrange jumbled one word.',
        'isLocal': false,
        'source': '../../assets/images/Primary-Dyslexia-RecognitionSkills-2.jpg',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      } ,
      {
        'disabilityType': dyslexia,
        'questionType': html,
        'question': 'See the video and name the fruits that are seen in it.',
        'isLocal': false,
        'source': '<iframe width="560" height="315" src="https://www.youtube.com/embed/6aMex-oF0e0?start=14&amp;end=20" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      } ,
      {
        'disabilityType': dyscalculia,
        'questionType': image,
        'question': 'Is the child able to give quick answer to the these question:',
        'isLocal': false,
        'source': '../../assets/images/Primary-Dyscalculia-RecognitionSkills-1.jpg',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      },
      {
        'disabilityType': dyscalculia,
        'questionType': image,
        'question': 'Is the child able to recognise the slices to color quickly:',
        'isLocal': false,
        'source': '../../assets/images/Primary-Dyscalculia-RecognitionSkills-2.jpg',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      },
      {
        'disabilityType': dyscalculia,
        'questionType': image,
        'question': 'Is the child able to solve the problem:',
        'isLocal': false,
        'source': '../../assets/images/Primary-Dyscalculia-RecognitionSkills-3.jpg',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      },
      {
        'disabilityType': dyscalculia,
        'questionType': image,
        'question': 'Is the child able to place the objects in proper sequence:',
        'isLocal': false,
        'source': '../../assets/images/Primary-Dyscalculia-RecognitionSkills-4.jpg',
        'answer': '',
        'weightage': 0,
        'learningType': recognition,
      }],
      'MiddleSchool': [],
      'Secondary': []
    };

}
