import { Injectable } from '@angular/core';

export type LectureType = 'special' | 'podcast';

export interface LectureItem {
  id: number;
  title: string;
  desc: string;
  image: string;
  type: LectureType;
  liked: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class Lectures {
  private items: LectureItem[] = [
    {id:1, 
       title: 'Иван Айвазовский ', 
      desc: 'Певец моря и романтик до мозга костей. Айвазовский — главный маринист в истории русского искусства. Его стихия — эффектные, ', 
      image: "card1.jpg", 
      type: 'special' ,
      liked: false},

    {  id:2,
       title: 'Ткани в живописи', 
      desc: 'Умение заставлять краску "светиться" изнутри или показывать сквозь вуаль очертания тела всегда ценилось очень высоко.', 
      image: "card2.png" , 
      type: 'podcast' ,
      liked: false},

      { id:3,
        title: 'Скрытые смыслы в картинах', 
      desc: 'Художники во все времена любили шифровать послания, искать двойное дно или просто играть со зрителем в интеллектуальную игру.', 
      image:  "card3.png", 
      type: 'podcast' ,
      liked: false},

      {id:4, 
       title: 'Палеолит: как все начиналось', 
      desc: 'Задолго до того, как человек научился писать портреты соседей или пейзажи местности, он начал рисовать зверей, на которых охотился.', 
      image: "card4.png", 
      type: 'podcast' ,
      liked: false},

      {id:5,
       title: 'Романтизм: разочарование в идеалах ', 
      desc: 'Романтизм зародился на рубеже XVIII и XIX веков, и главным катализатором стал глубокий общественный пессимизм.', 
      image: "card5.png", 
      type: 'podcast' ,
      liked: false},

      {id:6,
       title: 'Искусство, которое выжило в пепле ', 
      desc: 'Помпеи и живопись Древнего Рима.', 
      image: "card6.png" , 
      type: 'podcast' ,
      liked: false},

      {id:7,
       title: 'Подкаст про свет', 
      desc: 'Вермеер', 
      image: "card7.jpg" , 
      type: 'special' ,
      liked: false},

      {id:8,
       title: 'Современное искусство — это вообще искусство', 
      desc: 'Задолго до того, как человек научился писать портреты соседей или пейзажи местности, он начал рисовать зверей, на которых охотился.', 
      image: "card8.png", 
      type: 'podcast',
      liked: false },
  ];
  getItems(): LectureItem[] {
  return this.items;
}
}
