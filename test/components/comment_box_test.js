import {renderComponent,expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box.js';

describe('CommentBox',()=>{
	let component;

	beforeEach(()=>{
		component=renderComponent(CommentBox);
	});

	it('has the correct class',()=>{
		expect(component).to.have.class('comment-box');
	});

	it('has a textarea',()=>{
		expect(component.find('textarea')).to.exist;
	});

	it('has a button',()=>{
		expect(component.find('button')).to.exist;

	});

	//nested 'describe' block can be used to group the test
	//cases that are very closely related to each other
	//this is purely for grouping and doesn't add any new functionality
	describe('entering some text',()=>{

		beforeEach(()=>{
			component.find('textarea').simulate('change','new comment');
		});
		
		it('show text in the textarea',()=>{
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('when submitted, clears the input',()=>{
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});
	});
});