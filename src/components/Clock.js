/*****************************************

Ce composant affiche la date d'aujourd'hui.

*****************************************/

import {Component} from 'react'

export class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return <div>
            {this.state.date.toLocaleDateString()}
        </div>
    }
}