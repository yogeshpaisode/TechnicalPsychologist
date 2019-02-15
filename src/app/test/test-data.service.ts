import {Injectable} from '@angular/core';
import {audio, dsylexia, image, listening, readingWrinting, recognition, text} from '../app.constatnt';

@Injectable()
export default class TestDataService {

  public testData: any =
    {
      'kg': [
        {
          'disabilityType': dsylexia,
          'questionType': text,
          'isLocal': true,
          'source': 'What is the word before "H"',
          'answer': '',
          'weightage': 0,
          'learningType': readingWrinting
        },
        {
          'disabilityType': dsylexia,
          'questionType': audio,
          'isLocal': false,
          'source': 'pathOfAudio',
          'answer': '',
          'weightage': 0,
          'learningType': listening
        },
        {
          'disabilityType': dsylexia,
          'questionType': image,
          'isLocal': false,
          'source': 'pathOfImage/Video',
          'answer': '',
          'weightage': 0,
          'learningType': recognition
        }
      ],
      'Primary': [

      ],
      'MiddleSchool': [

      ],
      'Secondary': [
      ]
    }
  
}
