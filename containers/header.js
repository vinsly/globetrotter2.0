import React from 'react';

export class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state({
            isForm:false,
			isList:false,
			isUpdateForm:false,
			dataName:'',
			formType:null
        });
    }
    showNewForm() {
        this.setState({isForm:true, 
			isList:false,
			isUpdateForm:false,
			dataName:'',
			formType:null
		});
    }
    showList() {
		this.setState({
			isForm:false,
			isList:true,
			isUpdateForm:false,
			dataName:'',
			formType:null
		});	
	}
	showUpdateForm(obj) {
		this.setState({
			isForm:false,
			isList:false,
			isUpdateForm:true,
			dataName:obj.name,
			formType:obj.formType
		});
	}
    render() {
        return (
			<div>
				<div className="header">
					<ul>
						<li onClick={this.showList}><a>Customer List</a></li>
						<li onClick={this.showNewForm}><a>Add New Customer</a></li>
					</ul>
				</div>
				{this.state.isForm ? <AddNewCustomerForm data={'form'}/>:null}
				{this.state.isList ? <CustomerList isList={this.showUpdateForm} data={'list'}/>:null}
				{this.state.isUpdateForm ? <AddNewCustomerForm dataName={this.state.dataName} dataType={this.state.formType}/>:null}
			</div>
		)
    }
}