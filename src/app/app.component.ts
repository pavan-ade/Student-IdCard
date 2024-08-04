import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  title = 'StudentIDCard';
  first_name = '';
  last_name = '';
  rollnumber = '';
  year = '';
  sem = '';
  branch = '';
  durationyear = '';
  email = '';
  mobile = '';
  url = '';
  bday = '';
  first_name2 = '';
  last_name2 = '';
  rollnumber2 = '';
  year2 = '';
  sem2 = '';
  branch2 = '';
  durationyear2 = '';
  email2 = '';
  mobile2 = '';
  url2 = '';
  bday2 = '';

  Genarate() {
    this.first_name2 = this.first_name;
    this.last_name2 = this.last_name;
    this.rollnumber2 = this.rollnumber;
    this.year2 = this.year;
    this.sem2 = this.sem;
    this.branch2 = this.branch;
    this.durationyear2 = this.durationyear;
    this.email2 = this.email;
    this.mobile2 = this.mobile;
    this.url2 = this.url;
    this.bday2 = this.bday;

    // Clear input fields
    this.first_name = '';
    this.last_name = '';
    this.rollnumber = '';
    this.year = '';
    this.sem = '';
    this.branch = '';
    this.durationyear = '';
    this.email = '';
    this.mobile = '';
    this.url = '';
    this.bday = '';
  }

//   downloadIDCard(idCard: any) {
//     console.log(idCard)
//     let idcard = document.getElementById(idCard);
//     var WinPrint = window.open(
//       '',
//       '',
//       'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
//     );
//     if (WinPrint) {
//       WinPrint.document.write(idcard.innerHTML);
//       WinPrint.document.close();
//       WinPrint.focus();
//       WinPrint.print();
//     } else {
//       console.error("Window could not be opened.");
//     }
//   }
 }
