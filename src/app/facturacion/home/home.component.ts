import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: Menu = [
    {
      title: 'Dashboard',
      icon: 'home',
      link: './dashboard',
      color: '#ff7f0e'
    },
    {
      title: 'Generar',
      icon: 'add',
      link: './generar',
      color: '#ff7f0e'
    },
    {
      title: 'editar',
      icon: 'add',
      link: './editar',
      color: '#ff7f0e'
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e'
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
