import { Component } from '@angular/core';

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
        label: 'Calendar'
    },
    {
        icon: 'assets/icons/ic_customers.svg',
        label: 'Customers'
    },
    {
        icon: 'assets/icons/ic_register.svg',
        label: 'Register'
    },
    {
        icon: 'assets/icons/ic_reporting.svg',
        label: 'Reporting'
    },
    {
        icon: 'assets/icons/ic_product.svg',
        label: 'Product'
    },
    {
        icon: 'assets/icons/ic_add_invoice.svg',
        label: 'Add Invoice'
    },
    {
        icon: 'assets/icons/ic_marketing_manager.svg',
        label: 'Marketing Manager'
    },
    {
        icon: 'assets/icons/ic_profile.svg',
        label: 'Profile'
    },
    {
        icon: 'assets/icons/ic_settings.svg',
        label: 'Settings'
    },   
  ];
}