class Location extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div className='card grey darken-3 z-depth-4'>
             <div className='card-content white-text'>
               <span className='card-title'>{this.props.loc_type}</span>
               <p>{this.props.street}</p>
               <p>{`${this.props.city}, ${this.props.state}`}</p>
               <p>{this.props.zip}</p>
             </div>
           </div>);
  }
}
