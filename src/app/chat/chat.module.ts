import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild([ 
      { path: 'chat', component: ChatboxComponent}
    ])
      ],
  declarations: [ChatboxComponent]
  // providers:[ChatRouteGuardService]
})
export class ChatModule { }
