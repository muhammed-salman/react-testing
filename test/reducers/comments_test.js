import {expect} from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('commentsReducer',()=>{
	it('handles action with unknown type',()=>{
		//use any one of expect()
		
		//expect(commentReducer()).to.be.instanceof(Array);
		//eql do deep comparision unlike equal which 
		//does object vs object comparision
		//which will return false in below case
		expect(commentsReducer(undefined,{})).to.eql([]);
		//we pass an {} so that action.type is not 
		//undefined in reducer switch statement

	});
	it('handles action of type SAVE_COMMENT',()=>{
		const action={type:SAVE_COMMENT, payload:'new comment'};
		expect(commentsReducer([],action)).to.eql(['new comment']);
	});
});