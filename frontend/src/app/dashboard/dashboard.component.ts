import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private authService = inject(AuthService);
  private userService = inject(UserService);

  username: string = '';
  role: string = '';
  apiDelay: number = 0;
  loading: boolean = false;

  users: any[] = [];
  records: any[] = [];

  ngOnInit() {
    const currentUser = this.authService.currentUser();
    if (currentUser) {
      this.username = currentUser.username;
      this.role = currentUser.role;
      this.refreshData();
    }
  }

  logout() {
    this.authService.logout();
  }

  refreshData() {
    if (this.role === 'General User') {
      this.loadRecords();   // ✅ dummy API for user
    } else if (this.role === 'Admin') {
      this.loadUsers();     // ✅ async API for admin
    }
  }

  // ✅ GENERAL USER – Dummy API
  loadRecords() {
    this.records = [
      {
        id: 1,
        description: 'MployCheck is an online Aadhaar verification platform',
        access: 'Read Only'
      },
      {
        id: 2,
        description: 'Secure protocol for job selection',
        access: 'Read Only'
      },
      {
        id: 3,
        description: 'Efficient and scalable verification process',
        access: 'Read Only'
      }
    ];
  }

  // ✅ ADMIN – Async API with delay
  loadUsers() {
    this.loading = true;
    this.users = [];

    this.userService.getUsers(this.apiDelay).subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
