import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from './shared/interfaces/contact.interface';
import { ContactService } from './shared/services/contact.service';
import { ContactInfoComponent } from './shared/components/contact-info/contact-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contacts$!: BehaviorSubject<Contact[]>;

  @ViewChildren('contactInfo') contactInfoQuery!: QueryList<ContactInfoComponent>;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts$ = this.contactService.contacts$;
    this.contactService.fetchContacts();
  }

  editContact(contact: Contact) {
    this.contactService.updateContact({
      id: contact.id,
      name: contact.name + ' Edited',
      email: contact.email
    });
    this.contactInfoQuery.forEach((contactInfo) => contactInfo.updateRender())
  }
}
