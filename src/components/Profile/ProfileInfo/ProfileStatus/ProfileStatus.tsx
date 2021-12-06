import React, {ChangeEvent, Component} from 'react';

type PropTypes = {
    status: string
}

type StateTypes = {
    editMode: boolean
    status: string
}

export default class ProfileStatus extends Component<PropTypes, StateTypes> {

    state: StateTypes = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps:PropTypes, prevState:StateTypes) {
        /*console.log("--- componentDidUpdate");
        console.log("---prevProps", prevProps);
        console.log("---prevState", prevState);
        console.log("---this.props", this.props);
        console.log("---this.state", this.state);*/

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    disableActiveMode = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            editMode: false,
            status: event.target.value
        });
        //this.props.updateStatus(this.state.status);
    };

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.target.value
        })
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    render() {
        // console.log("---profile status props", this.props);
        return <div>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.state.status || "aaa"}
                    </span>
                </div>
                : <div>
                    <input onChange={this.onStatusChange} type="text" value={this.state.status}
                           onBlur={this.disableActiveMode} autoFocus/>
                </div>
            }

        </div>
    }
}