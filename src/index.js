import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author="Sam"
                time="Today at 4:50pm"
                comment="Wow, this is so cool"
                pic={faker.image.people()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail 
            author="Gio" 
            time="Today at 3:15pm" 
            comment="Funky Gibbon!" 
            pic={faker.image.cats()}
            />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail
             author="Jess"
             time="Today at 1:06pm" comment="Nice work!" 
             pic={faker.image.animals()}
             />
             </ApprovalCard>
        </div>
    
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));