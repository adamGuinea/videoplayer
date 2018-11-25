import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/Youtube';

class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }
    
    render(){
        return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App;