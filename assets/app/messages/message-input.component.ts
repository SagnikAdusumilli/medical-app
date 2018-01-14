import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    public message: Message;

    constructor(private messageService: MessageService) {}

    public onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    // tslint:disable-next-line:no-console
                    (result) => console.log(result)
                );
            this.message = null;
        } else {
            // Create
            const message = new Message(form.value.content, 'Max');
            this.messageService.addMessage(message)
                .subscribe(
                    // tslint:disable-next-line:no-console
                    (data) => console.log(data)
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    public onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    public ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}
