import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photos = [];

  constructor() {
    this.photos = [
      {
        name: "Foto 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima," +
        "facilis blanditiis totam molestiae porro! Eveniet fugit ipsum illo voluptatem" +
        "laudantium veritatis voluptatibus, nesciunt, quos consequuntur, tempore earum sapiente nemo!",
        url: "https://picsum.photos/id/237/500/300"
      },
      {
        name: "Foto 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima," +
        "facilis blanditiis totam molestiae porro! Eveniet fugit ipsum illo voluptatem" +
        "laudantium veritatis voluptatibus, nesciunt, quos consequuntur, tempore earum sapiente nemo!",
        url: "https://picsum.photos/id/240/500/300"
      },
      {
        name: "Foto 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima," +
        "facilis blanditiis totam molestiae porro! Eveniet fugit ipsum illo voluptatem" +
        "laudantium veritatis voluptatibus, nesciunt, quos consequuntur, tempore earum sapiente nemo!",
        url: "https://picsum.photos/id/241/500/300"
      }
    ]
  }
}
