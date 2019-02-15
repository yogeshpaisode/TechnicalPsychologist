import {Injectable} from '@angular/core';
import {audio, dsylexia, image, listening, readingWrinting, recognition, text} from '../app.constatnt';

@Injectable()
export default class TestDataService {

  public result: any = [
    {
      type: dsylexia,
      categories: [
        {
          type: readingWrinting,
          score: 0
        }
      ]
    }
  ];


  public testData: any =
    {
      'kg': [
        {
          'disabilityType': dsylexia,
          'questionType': text,
          'isLocal': true,
          'source': '1',
          'answer': '',
          'weightage': 0,
          'learningType': readingWrinting
        },
        {
          'disabilityType': dsylexia,
          'questionType': text,
          'isLocal': true,
          'source': '2',
          'answer': '',
          'weightage': 0,
          'learningType': readingWrinting
        },
        {
          'disabilityType': dsylexia,
          'questionType': text,
          'isLocal': true,
          'source': '3',
          'answer': '',
          'weightage': 0,
          'learningType': readingWrinting
        },
        {
          'disabilityType': dsylexia,
          'questionType': text,
          'isLocal': true,
          'source': '4',
          'answer': '',
          'weightage': 0,
          'learningType': readingWrinting
        },
        {
          'disabilityType': dsylexia,
          'questionType': text,
          'isLocal': true,
          'source': '5',
          'answer': '',
          'weightage': 0,
          'learningType': readingWrinting
        }
      ],
      'Primary': [],
      'MiddleSchool': [],
      'Secondary': []
    };

}
