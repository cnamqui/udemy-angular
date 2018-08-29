import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName: string;
  // classes = 'btn btn-primary';
  // classes = {
  //   btn: true,
  //   'btn-primary': false,
  //   'btn-warning': true
  // };
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 1000);
  // }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus =
      'A Server was created successfully: Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
