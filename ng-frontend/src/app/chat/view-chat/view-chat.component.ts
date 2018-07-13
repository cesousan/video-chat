import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.css']
})
export class ViewChatComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  messageOut : string;
  chatForm: FormGroup;

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.chatForm = this.formBuilder.group({
      messageOut: ''
    });
  }

  onSubmitForm() {
    console.log(this.chatForm.value);
    this.messageOut = this.chatForm.value.messageOut;
    this.initForm();
  }

   process(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
      this.onSubmitForm();
    }
  }

  Enter(e){
    this.onSubmitForm();
  }

}
