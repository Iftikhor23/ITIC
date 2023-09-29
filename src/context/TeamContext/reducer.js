export const initialState = {
	userData: {
		userName: '',
		lastName: '',
        photo: '',
        position: '',
        date:'',
	},
	selected: {},
	teamdata: [],
	search: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setTeam':
			return { ...state, teamdata: action.payload };
		case 'setSearch':
			return { ...state, search: action.payload };
		case 'setSelectedTeam':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
