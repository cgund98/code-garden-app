import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Course } from '../../../../both/models/course.model';
import { Courses } from '../../../../both/collections/courses.collection';

import template from './course-create-page.component.html';

@Component({
    selector: 'course-create-page',
    template
})

export class CourseCreatePageComponent implements OnInit {

    private course: Course;
    private languages: Array<string>;
    private newCourseForm: FormGroup;

    ngOnInit() {
        this.languages = ["HTML", "CSS", "Javascript"]

        this.newCourseForm = new FormGroup ({
            title: new FormControl('', [Validators.required, Validators.minLength(3)]),
            fullDesc: new FormControl('', [Validators.required, Validators.minLength(20)]),
            shortDesc: new FormControl('', [Validators.required, Validators.minLength(10)]),
            private: new FormControl(false),
            language: new FormControl('', Validators.required),
        })
    }

    get title() { return this.newCourseForm.get('title'); }
    get fullDesc() { return this.newCourseForm.get('fullDesc'); }
    get shortDesc() { return this.newCourseForm.get('shortDesc'); }
    get private() { return this.newCourseForm.get('private'); }
    get language() { return this.newCourseForm.get('language'); }

    submit() {
        if (this.newCourseForm.valid) {
            var course = this.newCourseForm.value;
            Courses.insert(course);
            console.log("Submitted form");
        }
    }

}