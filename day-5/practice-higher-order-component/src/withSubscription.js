import React from 'react';
import DataSource from './datasource';

const withSubscription = ( OriginalComponent, selectedData ) => {
    class Subscription extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
            }
        }

        load = () => {
            this.setState({
                data: selectedData
            })
        }

        remove = () => {
            this.setState({
                data: []
            })
        }

        render() {
            return <OriginalComponent data={this.state.data} load={this.load} remove={this.remove}></OriginalComponent>
        }
    }
    return Subscription;
}

export default withSubscription;