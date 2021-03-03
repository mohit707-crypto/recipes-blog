import React from 'react'

import './App.css';
import { client } from './client';
import Posts from './components/Posts';





class App extends React.Component {
  state = {
       articles: []
  }

   componentDidMount() {
         client.getEntries()
         .then((response) => {
               console.log(response)
               this.setState({
                    articles: response.items
               })
         })
         .catch(console.error)
   }


    render () {
      return (
        <div className='App'>
          <div className='container'>
            <header>
               <div className='wrapper'></div>
               <span>React and Contentful</span>
            </header>
            <main>
               <div className='wrapper'></div>
               <Posts posts={this.state.articles} />
            </main>
          </div>
        </div>
      )
    }
}
export default App;
