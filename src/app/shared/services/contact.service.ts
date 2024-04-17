import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../interfaces/contact.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {
  contacts$ = new BehaviorSubject<Contact[]>([]);

  fetchContacts(): void {
    this.contacts$.next([{id: 1, name: 'Contact 1', email: 'contact-1@test.com'}]);
  }

  updateContact(contact: Contact): void {
    // ... (Assume there's an API call to update on the server)

    const currentContacts = this.contacts$.getValue();
    const updatedIndex = currentContacts.findIndex(c => c.id === contact.id);
    currentContacts[updatedIndex].name = contact.name;
  }
}
