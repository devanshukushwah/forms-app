import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormService } from '../../services/form.service';
import { Form } from '../../common/interface/Form';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    HeaderComponent,
    TableModule,
    CommonModule,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  forms: Form[];

  constructor(private formService: FormService) {
    this.forms = this.getAdminForms();
  }

  getAdminForms(): Form[] {
    this.formService.getAdminForms().subscribe((res) => {
      if (res && res?.data && res?.data?.content) {
        this.forms = res.data.content;
      }
    });

    return [];
  }
}