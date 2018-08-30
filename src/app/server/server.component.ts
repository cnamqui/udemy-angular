import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  serverComponentClass = '';
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.floor(Math.random() * 1000);
    this.serverComponentClass = 'server-' + this.serverStatus;
  }
  getBorderColor() {
    return this.serverStatus === 'online' ? '#4cae4c' : '#f0ad4e';
  }

  getBackgroundColor() {
    return this.serverStatus === 'online' ? '#5cb85c' : '#eea236';
  }

  getColor() {
    return this.serverStatus === 'online' ? '#fff' : '#000';
  }

  getStyle() {
    return {
      backgroundColor: this.serverStatus === 'online' ? '#5cb85c' : '#f0ad4e',
      borderColor: this.serverStatus === 'online' ? '#4cae4c' : '#eea236',
      color: this.serverStatus === 'online' ? '#fff' : '#000'
    };
  }
  ngOnInit() {}
}
