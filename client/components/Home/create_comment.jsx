import React from 'react';
import ReactDOM  from 'react-dom';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import DraftjsFormsyInput from 'draftjs-formsy-input';
import { convertToRaw, ContentState } from 'draft-js'; // eslint-disable-line import/no-unresolved
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin'; // eslint-disable-line import/no-unresolved
import {
	ItalicButton,
	BoldButton,
	UnderlineButton,
	CodeButton,
	HeadlineOneButton,
	HeadlineTwoButton,
	HeadlineThreeButton,
	UnorderedListButton,
	OrderedListButton,
	BlockquoteButton,
	CodeBlockButton,
} from 'draft-js-buttons'; // eslint-disable-line import/no-unresolved
import './style.css';
import editorStyles from './editorStyles.css';

import createEmojiPlugin from 'draft-js-emoji-plugin';
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
import 'draft-js-emoji-plugin/lib/plugin.css';

const editorStyle = {
	main: {
		padding: '20px 0',
	},
};

const rawState = convertToRaw(ContentState.createFromText('Default raw value'));

class CreateComment extends React.Component {

	constructor(props) {
		super(props);
		this.inlineToolbarPlugin = createInlineToolbarPlugin({
			structure: [
				BoldButton,
				ItalicButton,
				UnderlineButton,
				CodeButton,
				Separator,
				HeadlineOneButton,
				HeadlineTwoButton,
				HeadlineThreeButton,
				Separator,
				UnorderedListButton,
				OrderedListButton,
				Separator,
				BlockquoteButton,
				CodeBlockButton
			]
		});
		this.InlineToolbar = this.inlineToolbarPlugin.InlineToolbar;
		this.state = {value: ''}
	}

  submitForm(data) {
		const postId = this.props.postId;
		Meteor.call('posts.increment_comments', {postId});
    Meteor.call('comments.insert', {
      content: data.content,
      postId: postId,
      username: data.username
    });
  }

	render () {
		const InlineToolbar = this.InlineToolbar;
		focus = () => {
    	this.editor.focus();
  	};

		return (
			<div className="form-container">
				<Form
					onValidSubmit={this.submitForm.bind(this)}
					ref="form"
				>
        <div>
					<DraftjsFormsyInput
						name="username"
						label="Your name:"
						required
						style={editorStyle}
					/>
          <div className="editor" onClick={this.focus}>
            <DraftjsFormsyInput
  						name="content"
  						value={this.state.value}
  						label="Type your response here:"
  						help="Select text to show options."
  						plugins={[this.inlineToolbarPlugin, emojiPlugin]}
  						style={editorStyle}
  						required
  					/>
						<EmojiSuggestions />
  				  <InlineToolbar />
							<div className={editorStyles.options}>
	          		<EmojiSelect />
	        		</div>
  				</div>
        </div>
            <RaisedButton
              label="Reply"
              type="submit"
              labelPosition="before"
              icon={<i style={{color: '#fff'}} className="fa fa-reply" aria-hidden="true"></i>}
              primary={true}
            />
				</Form>
			</div>
		);
	}
};

export default CreateComment;
