import React from 'react';

export class AddCustomerView extends React.Component {
    constructor(props) {
        super(props);
		if(props.dataName && props.dataName!=undefined){
			var updateCustomerObject = this.getCustomerDetails();
			var typeFlag,type;
			if(updateCustomerObject.type=='regular'){
				updateCustomerObject.type2=true;
				updateCustomerObject.type3=false;
				typeFlag=true;
				type='regular'
			}
			else if(updateCustomerObject.type==undefined || updateCustomerObject.type==null || updateCustomerObject.type==''){
				updateCustomerObject.type2=true;
				updateCustomerObject.type3=false;
				typeFlag=true;
				type='regular';
			}
			else{
				updateCustomerObject.type2=false;
				updateCustomerObject.type3=true;
				typeFlag=false;
				type='corporate';
			}

			return{
				formHeading: 'Update Details',
				eFlag: typeFlag,
				corporate: updateCustomerObject.type3,
				regular: updateCustomerObject.type2,
				name: updateCustomerObject.name,
				age: updateCustomerObject.age,
				disc: updateCustomerObject.disc,
				number: updateCustomerObject.number,
				program: updateCustomerObject.program,
				charge: updateCustomerObject.charge,
				employees: updateCustomerObject.emp,
				distance: updateCustomerObject.distance,
				nameFlag:true,
				type:type
			}
		}

		return{
			formHeading:'Add Customer',
			eFlag:true,
			employees:'',
			corporate:false,
			regular:true,
			nameFlag:false,
			type:'regular'
		}
	}
}