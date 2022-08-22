import {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import * as events from "events";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
        console.log('1');
    }

    componentDidMount() {
        console.log('3')
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return {monsters: users};
                    },
                    () => {
                        console.log(this.state);
                    }))
        // .then((users) => console.log(users));
    }

    onSearchChange =  (event) => {

                        console.log(event.target.value)
                        //[{name: 'leane'} {name: 'vihua'}]
                        const searchField = event.target.value.toLocaleLowerCase();
                        this.setState(() => {
                            return {searchField}
                        })
                    }

    render() {
        console.log('render')

        //43 destructuring this
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        //need access to search string value

        return (
            <div className="App">

                {/*{*/}
                {/*    filteredMonsters.map((monster) => {*/}
                {/*        return (*/}
                {/*            <div key={monster.id}>*/}
                {/*                <h1>{monster.name}</h1>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {/*<h1>{this.state.monster1.name}</h1>*/}
                {/*<h2>{this.state.monster2.name}</h2>*/}
                {/*<h3>{this.state.monster3.name}</h3>*/}
                <SearchBox
                    className='monsters-search-box'
                    onChangeHandler = {onSearchChange}
                    placeHolder='search holder' />
                <CardList monsters = {filteredMonsters}/>
            </div>
        );
    }
}

export default App;
