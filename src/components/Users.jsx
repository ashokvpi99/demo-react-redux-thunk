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
            title: '',
            data: ''
        };
    }

    componentDidMount() {
        this.props.getAllPost();
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
            title: this.state.title,
            body: this.state.data
        };
        this.props.SavePost(post);
        toastService.successToast('Posted Successfully');
        this.props.getAllPost();
    };

    deletePost = (id) => {
        if(window.confirm('Are you sure want to delete this post')){
            this.props.DeletePost('https://jsonplaceholder.typicode.com/posts/' + id);
            toastService.successToast('Deleted Successfully');
            this.props.getAllPost();
        } else
                return false;
    };

    render() {
        const { title, data } = this.state;
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
                                                <Label for="exampleEmail">Title</Label>
                                                <Input type="text" name="title" id="title" onChange={this.onChange} value={title} placeholder="Enter a Title" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Data</Label>
                                                <Input type="text" name="data" id="data" onChange={this.onChange} value={data} placeholder="Enter a Data" />
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
                                            <Col sm="6" key={item.id}>
                                                <Card body>
                                                    <CardTitle>{item.title}</CardTitle>
                                                    <CardText>{item.body}</CardText>
                                                    <Button onClick={() => this.deletePost(item.id)} color={'danger'}>Delete Post</Button>
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