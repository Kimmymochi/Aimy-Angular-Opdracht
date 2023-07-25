import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  collapsed = true;
  sidenavData = [
    {
        icon: 'assets/icons/ic_calendar.svg',
        label: 'Calendar',
        routerLink: 'calendar'
    },
    {
        icon: 'assets/icons/ic_customers.svg',
        label: 'Customers',
        routerLink: 'customers'
    },
    {
        icon: 'assets/icons/ic_register.svg',
        label: 'Register',
        routerLink: 'register'
    },
    {
        icon: 'assets/icons/ic_reporting.svg',
        label: 'Reporting',
        routerLink: 'reporting'
    },
    {
        icon: 'assets/icons/ic_product.svg',
        label: 'Product',
        routerLink: 'product'
    },
    {
        icon: 'assets/icons/ic_add_invoice.svg',
        label: 'Add Invoice',
        routerLink: 'add-invoice'
    },
    {
        icon: 'assets/icons/ic_marketing_manager.svg',
        label: 'Marketing Manager',
        routerLink: 'marketing-manager'
    },
    {
        icon: 'assets/icons/ic_profile.svg',
        label: 'Profile',
        routerLink: 'profile'
    },
    {
        icon: 'assets/icons/ic_settings.svg',
        label: 'Settings',
        routerLink: 'settings'
    },   
  ];
}