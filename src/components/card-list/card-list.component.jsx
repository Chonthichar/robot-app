import {Component} from "react";

class CardList extends Component {
    render() {
        console.log(this.props.monsters)
        console.log('render from cardlist')
        const {monsters} = this.props;
        return (
            <div>
                {monsters.map(monster => (
                    <h1>{monster.id}{monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;