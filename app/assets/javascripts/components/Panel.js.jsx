class Panel extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let details = this.props.details.map( name => {
      return(<li className='center'>{name}</li>);
    });
    return(<div className='panel col s12 m4'>
             <div className='card grey darken-2 z-depth-4'>
               <div className='panel-content card-content white-text'>
                 <ul>
                  {details}
                 </ul>
                </div>
             </div>
           </div>);
  }
}
