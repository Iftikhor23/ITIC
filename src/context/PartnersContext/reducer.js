export const initialState = {
	userData: {
		photo: '',  
        date:'',
	},
	selected: {},
	prtnersdata: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setTeam':
			return { ...state, prtnersdata: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelectedPartners':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
