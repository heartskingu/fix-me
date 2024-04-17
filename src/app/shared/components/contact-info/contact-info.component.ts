import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoComponent {
  @Input() contact!: Contact;

  updateRender(): void {
    // Missing implementation
  }
}
