import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,  Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import toastService from '../services/toast';
import { connect } from 'react-redux';
import { getAllPost, SavePost, DeletePost } from '../actions/PostAct';


class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            name: '',
            mobileNo: '',
            email: ''
        };
    }

    componentDidMount() {
        this.props.getAllPost('http://localhost:3002/api/user');
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            name: this.state.name,
            mobileNo: this.state.mobileNo,
            email: this.state.email
        };
        this.props.SavePost('http://localhost:3002/api/user', post);
        toastService.successToast('Posted Successfully');
        this.props.getAllPost();
    };

    deletePost = (id) => {
        if(window.confirm('Are you sure want to delete this post')){
            this.props.DeletePost('http://localhost:3002/api/user' + id);
            toastService.successToast('Deleted Successfully');
            this.props.getAllPost();
        } else
                return false;
    };

    render() {
        const { name, email, mobileNo } = this.state;
        const { posts = [] } = this.props;
        return (
            <React.Fragment>
                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Add Post
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Posts
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <br/>
                            <Row>
                                <Col sm="12">
                                    <h4>Add Post</h4>
                                    <hr />
                                    <Card body>
                                        <Form onSubmit={this.onSubmit}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Name</Label>
                                                <Input type="text" name="name" id="title" onChange={this.onChange} value={name} placeholder="Enter a Name" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Mobile NO</Label>
                                                <Input type="text" name="mobileNo" id="data" onChange={this.onChange} value={mobileNo} placeholder="Enter a Mobile No" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Email</Label>
                                                <Input type="text" name="email" id="data" onChange={this.onChange} value={email} placeholder="Enter a Email" />
                                            </FormGroup>
                                            <Input type={'submit'} value={'Save Post'}/>
                                        </Form>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <br/>
                            <Row>
                                {
                                    posts.map((item, i) => {
                                        return (
                                            <Col sm="6" key={item._id}>
                                                <Card body>
                                                    <CardTitle>{item.Name}</CardTitle>
                                                    <CardText>{item.mobileNo - item.email}</CardText>
                                                    <Button onClick={() => this.deletePost(item._id)} color={'danger'}>Delete Post</Button>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postState.posts
    }
};

export default connect(mapStateToProps, { getAllPost, SavePost, DeletePost })(Users);