import {Injectable} from '@angular/core';
import {audio, dyslexia, image, listening, reading, writing, recognition, text, speaking, dyscalculia} from '../app.constatnt';

@Injectable()
export default class TestDataService {

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
          'question': 'Aphabet after G? Ans: H',
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
          'learningType': speaking
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '2 + 7 = ?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': 'Table of 2?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '9 is bigger or 7?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '= sign is called?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0
        },
        {
          'disabilityType': dyscalculia,
          'questionType': text,
          'question': '8 - 5 = ?',
          'isLocal': false,
          'source': '',
          'answer': '',
          'weightage': 0,
          'learningType': speaking
        }
      ],
      'Primary': [

      ],
      'MiddleSchool': [

      ],
      'Secondary': [
      ]
    };
  
}
