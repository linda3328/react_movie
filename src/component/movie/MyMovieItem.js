import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import deleteMovieReducer from '../../store/deleteMovieReducer';
class MovieItem extends Component {

    static defaultProps = {
        id: null,
        onClick: null,
        imageUrl: '',
        name: '',
        openedAt: '',
        description: '',
        likeCnt: 0,
        deleteItem: () => { }

    }

    onEditClick = () => {
        if (this.props.onClick && this.props.id) {
            this.props.onClick(this.props.id);
        }
    }

    onDeleteClick = (id) => {
        this.setState({

        })
    }



    render() {

        const {
            imageUrl,
            name,
            openedAt,
            description,
            id,
        } = this.props;
        // 'url('+imageUrl+')'
        // `url(${imageUrl})`
        return (
            <Card fluid>
                <div style={{
                    height: 300,
                    backgroundImage: `url(${imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{openedAt}</span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={this.onEditClick}>수정하기</Button>
                    <Button onClick={this.onDeleteClick}>삭제하기</Button>
                </Card.Content>
            </Card>
        )
    }
}

export default MovieItem;