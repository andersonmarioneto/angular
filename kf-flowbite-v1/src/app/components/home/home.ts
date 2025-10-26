import { Component } from '@angular/core';
import { App } from "../../app";
import { Sidebar } from "../sidebar/sidebar";
import { Dashboard } from "../dashboard/dashboard";

@Component({
  selector: 'app-home',
  imports: [App, Sidebar, Dashboard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
