class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = { edit: false, details: [] };
    this.about = this.about.bind(this);
    this.refresh = this.refresh.bind(this);
    this.deleteDetail = this.deleteDetail.bind(this);
    this.admin = this.admin.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addDetail = this.addDetail.bind(this);
  }
  componentDidMount(){
    this.refresh();
  }
  refresh(){
    $.ajax({
      url: '/details',
      type: 'GET',
      dataType: 'JSON'
    }).success( data => {
      this.setState({ details: data.details });
    });
  }
  toggleEdit() {
    this.setState({ edit: !this.state.edit});
  }
  addDetail(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    $.ajax({
      url: '/details',
      type: 'POST',
      dataType: 'JSON',
      data: { detail: { name: name }}
    }).success( data => {
      this.refs.name.value = null;
      this.refresh();
    })
  }
  deleteDetail(e, id) {
    e.preventDefault();
    let url = `/details/${id}`;
    $.ajax({
      url: url,
      type: 'DELETE',
      dataType: 'JSON'
    }).success( data => {
      this.setState({ details: data.details });
    });
  }
  admin() {
    if (this.props.admin){
      return(<div className='white-text'>
               <i className='fa fa-edit fa-2x' onClick={this.toggleEdit}></i>
             </div>);

    }
  }
  edit() {
    let details = this.state.details.map( detail => {
      let id = `detail-${detail.id}`;
      return(<li key={id} className='collection-item'>
               <div>
               {detail.name}
               <a onClick={(e) => this.deleteDetail(e, detail.id)} className='secondary-content'>
                 <i className='fa fa-trash'></i>
               </a>
               </div>
             </li>);
    });
    return(<div>
            {this.admin()}
            <ul className='collection'>
              {details}
            </ul>
            <form onSubmit={this.addDetail}>
              <div className='row'>
                <input required className='col s12 m8 offset-m1 white-text' ref='name' type='text' placeholder='Add Item' />
                <button type='submit' className='col s12 m2 btn black white-text'>Add</button>
              </div>
            </form>
           </div>);
  }
  about() {
    let numPer = Math.ceil(this.state.details.length / 3);
    let details = this.state.details;
    let firstPanel = [];
    let secondPanel = [];
    let thirdPanel = [];
    for(i = 0; i < numPer; i++){
      firstPanel.push(details[i].name);
    }
    for(i = numPer; i < (numPer + numPer); i++){
      secondPanel.push(details[i].name);
    }
    for (i = (numPer + numPer); i < this.state.details.length; i++){
      thirdPanel.push(details[i].name);
    }
    return(<div>
            {this.admin()}
             <div className='row'>
               <Panel details={firstPanel} />
               <Panel details={secondPanel} />
               <Panel details={thirdPanel} />
             </div>
           </div>);
  }
  render(){
    if (this.state.edit) {
      return this.edit();
    } else {
      return this.about();
    }
  }
}
