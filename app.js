class Aside extends React.Component {
    render () {
      return (
       <aside className='aside'> Dashboard <br /><br /> Widget <br /> <br /> Reviews <br /> <br /> Customers<br />  <br /> Online Analysis<br /> <br />  Settings </aside>
      )
    }
}



class LargeSection extends React.Component {
    render() {
        return(
        <div className='largeSection'> 
            <topContainer className='topContainer'>
                <div className='eachtopContainer'  >
                     Reviews 1,281
                </div>
                 <div className='eachtopContainer'>
                     Average Rating 4.6
                </div>
                <div className='eachtopContainer'>
                Sentiment Analysis 9.60 122 321
                </div>
            </topContainer>
            <bottomContainer className='bottomContainer'>
                <div>Website Visitors
                    <div class='insideBox'></div>
                </div>
            </bottomContainer>
            </div>
            
        )
    }
}


class App extends React.Component{
    render() {
        return(
            <div className='app'>
                <Aside />
                <LargeSection/>
            </div>
        )
    }
}


ReactDOM.render (
    <App /> , 
    document.querySelector('main')
)
